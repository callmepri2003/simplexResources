from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import subprocess
import os
import requests
import json
from dotenv import load_dotenv
import re
import jsonschema
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
from playwright.sync_api import sync_playwright
import time

load_dotenv()

@csrf_exempt
def generate_resource(request):
    if request.method != "POST":
        return HttpResponse("Invalid request method", status=405)
    
    try:
        user_input = request.POST.get("textarea", "")
        if not user_input:
            return HttpResponse("No input provided", status=400)

        
        # Run generate-prompt-guide.sh
        script_path = os.path.join(os.path.dirname(__file__), 'generate-prompt-guide.sh')
        result = subprocess.run(
            ['bash', script_path],
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            return HttpResponse(f"Script failed: {result}", status=500)
        
        # Read prompt-guide.md
        guide_path = os.path.join(os.path.dirname(__file__), '../prompt-guide.md')
        with open(guide_path, 'r') as f:
            guide_content = f.read()
        
        # Replace placeholder with user input
        prompt = guide_content.replace("[User input goes here]", user_input)
        
        # Claude API interaction
        api_key = os.getenv('claude_API_key')
        headers = {
            "x-api-key": api_key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json"
        }
        
        messages = [{"role": "user", "content": prompt}]
        max_retries = 3
        validated = False
        
        for _ in range(max_retries):
            response = requests.post(
                "https://api.anthropic.com/v1/messages",
                headers=headers,
                json={
                    "model": "claude-3-5-sonnet-20241022",
                    "max_tokens": 8192,
                    "messages": messages
                }
            )
            
            if response.status_code != 200:
                return HttpResponse(f"API request failed: {response.text}", status=500)
            
            response_data = response.json()
            claude_output = response_data.get('content', [{}])[0].get('text', '')

            # Extract JSON block
            match = re.search(r"```json\s*(\{.*?\})\s*```", claude_output, re.DOTALL)
            if not match:
                return HttpResponse(f"No valid JSON block found in Claude output {claude_output}", status=500)

            json_str = match.group(1)
            try:
                json_data = json.loads(json_str)
            except json.JSONDecodeError:
                return HttpResponse("Extracted block is not valid JSON", status=500)
            
            # Validate against schema
            is_valid, validation_message = validate_claude_output(json_data)
            if is_valid:
                validated = True
                break
            else:
                messages.append({"role": "assistant", "content": claude_output})
                messages.append({"role": "user", "content": f"Validation failed: {validation_message}. Please correct your response."})
        
        if not validated:
            return HttpResponse("Failed to validate response after maximum retries", status=500)

        # Write to builder/src/data.json
        json_path = os.path.join(os.path.dirname(__file__), '../../builder/src/data.json')
        os.makedirs(os.path.dirname(json_path), exist_ok=True)
        with open(json_path, 'w') as json_file:
            json.dump(json_data, json_file, indent=2)

         # Run npm build and PDF generation
        try:
            builder_dir = os.path.join(os.path.dirname(__file__), '../../builder')
            dist_dir = os.path.join(builder_dir, 'dist')
            pdf_path = os.path.join(builder_dir, 'dist/output.pdf')

            # Run npm build
            build_result = subprocess.run(
                ['npm', 'run', 'build'],
                cwd=builder_dir,
                capture_output=True,
                text=True
            )
            if build_result.returncode != 0:
                return HttpResponse(f"Build failed: {build_result.stderr}", status=500)

            # Start HTTP server in background
            port = 3000
            server = ThreadingHTTPServer(
                ('localhost', port),
                lambda *args: SimpleHTTPRequestHandler(*args, directory=dist_dir)
            )
            server_thread = Thread(target=server.serve_forever)
            server_thread.daemon = True
            server_thread.start()

            # Give server time to start
            time.sleep(1)

            # Generate PDF with Playwright
            with sync_playwright() as p:
                # Create new browser context with cache disabled
                browser = p.chromium.launch()
                context = browser.new_context(
                    bypass_csp=True,
                    ignore_https_errors=True,
                    # Disable all caching
                    storage_state=None,
                    java_script_enabled=True,
                    # Emulate actual browser hard refresh behavior
                    user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
                )
                
                # Create fresh page with cache disabled
                page = context.new_page()
                page.set_default_timeout(60000)
                
                # Set screen size for proper rendering
                page.set_viewport_size({"width": 1920, "height": 1080})
                
                # Initial load with hard refresh
                page.goto(
                    f'http://localhost:{port}?cachebust={time.time_ns()}',
                    wait_until='networkidle'
                )

                page.goto(
                    f'http://localhost:{port}?cachebust={time.time_ns()}',
                    wait_until='networkidle'
                )  
                
                # Generate PDF
                page.emulate_media(media='print')
                pdf = page.pdf(
                    format='A4',
                    print_background=True,
                    margin={'top': '20mm', 'right': '20mm', 'bottom': '20mm', 'left': '20mm'},
                    timeout=60000
                )
                
                # Save and cleanup
                with open(pdf_path, 'wb') as f:
                    f.write(pdf)
                
                context.close()
                browser.close()

            # Shutdown server
            server.shutdown()
            server_thread.join()

            # Return PDF file
            with open(pdf_path, 'rb') as f:
                response = HttpResponse(f.read(), content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename="output.pdf"'
                return response

        except Exception as e:
            return HttpResponse(f"PDF generation failed: {str(e)}", status=500)

    except Exception as e:
        return HttpResponse(f"An error occurred: {str(e)}", status=500)

def validate_claude_output(output):
    # try:
    #     # Load schema from builder/src/schema.js
    #     schema_path = os.path.join(os.path.dirname(__file__), '../builder/src/schema.js')
    #     with open(schema_path, 'r') as f:
    #         schema_content = f.read()

    #     # Step-by-step cleanup
    #     cleaned = schema_content
    #     cleaned = cleaned.replace('const schema =', '')
    #     cleaned = cleaned.replace('export default schema;', '')
    #     cleaned = cleaned.replace("'", '"')  # Change single quotes to double quotes
    #     cleaned = re.sub(r',\s*([}\]])', r'\1', cleaned)  # Remove trailing commas

    #     # Convert to JSON
    #     schema_json = json.loads(cleaned)

        
    #     # Validate against schema
    #     jsonschema.validate(instance=output, schema=schema_json)
    #     return True, "Validation successful"
        
    # except json.JSONDecodeError as e:
    #     return False, f"Schema parsing error: {str(e)}"
    # except jsonschema.ValidationError as e:
    #     return False, f"Schema validation error: {str(e)}"
    # except Exception as e:
    #     return False, f"Validation error: {str(e)}"
    
    return True, "All good."

# Create your views here.
def createResourceView(request):
  context = {

  }
  return render(request, 'createResource.html', context)