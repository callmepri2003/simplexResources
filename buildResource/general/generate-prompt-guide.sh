#!/bin/bash

# File paths

SCHEMA_FILE="../builder/src/schema.js"
COMPONENT_TREE_FILE="../builder/src/componentTree"
OUTPUT_FILE="prompt-guide.md"

# Check if required files exist

if [ ! -f "$SCHEMA_FILE" ]; then
echo "Error: Schema file not found at $SCHEMA_FILE"
exit 1
fi

if [ ! -f "$COMPONENT_TREE_FILE" ]; then
echo "Error: Component tree file not found at $COMPONENT_TREE_FILE"
exit 1
fi

# Create the prompt guide

{ # Header
echo -e "\nGenerate JSON that I will parse as React.\n"

    # Syllabus Section
    echo "## Syllabus Section"
    echo -e "\n[User input goes here]\n"

    # JSON Schema
    echo "## JSON Schema"
    echo -e "\n\`\`\`"
    cat "$SCHEMA_FILE"
    echo -e "\n\`\`\`\n"

    # Component Tree
    echo "## Component Tree"
    echo -e "\n\`\`\`"
    cat "$COMPONENT_TREE_FILE"
    echo -e "\n\`\`\`\n"

    # General Tips
    echo "## General Tips"
    cat << 'EOF'

- There are three main types of documents that I may ask for, either a content book, a question bank or a topic test. The content book covers all of the content required to complete the question bank but has no practise questions. The question bank has all practise questions but no new content.
- Question banks should have around 40 questions
- The main question type is GroupedSubquestionsGrid because its the most efficient way to present questions
- Feel free to use GeneralPurpose component for freeform html
- Double check that everything the student needs to complete the resource is there, for example questions asking the students to measure the area of a shape need to include the actual shape or rephrase the question. Because remember, the students won't have access to the original textbook that the resource is being recreated from. They will only have access to the new resource
- Feel free to make executive decisions related to whether a section needs to be included or not. But always follow the schema.
- The system is not advanced enough to work with diagrams and images. You must creatively reimagine the question so that it doesn't need a diagram or image. GeneralPurpose components are an option but i'd prefer not relying on them as they are highly prone to formatting errors.
- Use GroupedSubquestionsGrid for questions that have a lot of subquestions, the component is a collection of short questions in three columns
- The value of the question bank comes from the volume and uniqueness of questions.
- For now, quantity is more important than quality.
- Also recognise the year level it is aimed at and tailor language to suit
- Be pragmatic with the components, just understand what is required and where to put them
- The ExplanationBox is a highlighting tool, it should encompass all content rather than wrapping multiple adjacent content
- Similarly PractiseQuestions is a wrapper for ALL questions, of course you
  can have multiple PractiseQuestions throughout the rsource but it looks weird if they're adjacent
- for all maths equations use full LaTeX math mode syntax, used for multiline equations, and assume MathJax is configured. An acceptable example is
  \\begin{align} 3x + 2y + 5x - 6y &= 3x + 5x + 2y - 6y \\\\ &= 8x - 4y \\end{align}
- This means even the existence of SIMPLE math symbols like "^" must enclose the entire expression in full LaTeX math mode syntax
- Throw in key-takeaways where appropriate
- Make sure there are absolutely no placeholders, the JSON should be ready to go when copy pasted.
- Also make sure the JSON is coherent, prioritise coherence over imitation
- General purpose must only be at the top level not nested in anything.
- Follow the JSON schema exactly, to save me debugging time
EOF

  } > "$OUTPUT_FILE"

echo "Prompt guide generated successfully at $OUTPUT_FILE"
