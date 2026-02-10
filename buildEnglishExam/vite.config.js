import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    plugins: [
      react(),
      isBuild && {
        name: "inject-pagedjs-script",
        transformIndexHtml(html) {
          const pagedScript = `
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script
      id="MathJax-script"
      async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
></script>
<script>
  window.addEventListener('load', () => {
    // Load the CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/interface.css';
    document.head.appendChild(link);

    // Load the Paged.js script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/pagedjs/dist/paged.polyfill.js';
    script.onload = () => {
      console.log('Paged.js loaded and ready');
      if (window.Paged) {
        new Paged.Preview(); // Start pagination
      }
    };
    document.body.appendChild(script);
  });
</script>`;

          return html.replace("</body>", `${pagedScript}\n</body>`);
        },
      },
    ].filter(Boolean), // Remove false plugins (e.g., if isBuild is false)
  };
});
