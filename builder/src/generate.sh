#!/bin/bash

# Generate customized prompts for tutoring resources
# Usage: ./generate_prompt.sh <type> <stage> <syllabus_identifier>
# Example: ./generate_prompt.sh inclass stage2 t1w4

set -e  # Exit on any error

# Function to display usage
usage() {
    echo "Usage: $0 <type> <stage> <syllabus_identifier>"
    echo ""
    echo "Arguments:"
    echo "  type                 'inclass' or 'homework'"
    echo "  stage                'stage2', 'stage3', 'stage4', 'stage5', or 'stage6'"
    echo "  syllabus_identifier  The syllabus week identifier (e.g., t1w4, t2w3)"
    echo ""
    echo "Examples:"
    echo "  $0 inclass stage2 t1w4"
    echo "  $0 homework stage4 t2w7"
    echo ""
    echo "Directory structure expected:"
    echo "  prompts/templates/inClass/stage2"
    echo "  prompts/templates/homework/stage3"
    echo "  prompts/syllabus/stage2"
    echo "  schema.js"
    echo "  componentTree"
    exit 1
}

# Function to extract syllabus content for a specific identifier
extract_syllabus_content() {
    local syllabus_file="$1"
    local identifier="$2"
    
    if [ ! -f "$syllabus_file" ]; then
        echo "Error: Syllabus file not found: $syllabus_file"
        exit 1
    fi
    
    # Extract content between ====start<identifier>==== and ====end<identifier>====
    local start_pattern="====start${identifier}===="
    local end_pattern="====end${identifier}===="
    
    # Use awk to extract content between the patterns
    local content=$(awk "/$start_pattern/,/$end_pattern/" "$syllabus_file" | sed '1d;$d')
    
    if [ -z "$content" ]; then
        echo "Error: Syllabus identifier '$identifier' not found in $syllabus_file"
        echo "Available identifiers in the file:"
        grep -o "====start[^=]*====" "$syllabus_file" | sed 's/====start//g' | sed 's/====//g' | head -10
        exit 1
    fi
    
    echo "$content"
}

# Check if correct number of arguments provided
if [ $# -ne 3 ]; then
    echo "Error: Incorrect number of arguments"
    usage
fi

# Parse arguments
TYPE="$1"
STAGE="$2"
SYLLABUS_IDENTIFIER="$3"

# Validate type argument
if [ "$TYPE" != "inclass" ] && [ "$TYPE" != "homework" ]; then
    echo "Error: Type must be 'inclass' or 'homework'"
    usage
fi

# Validate stage argument
if [[ ! "$STAGE" =~ ^stage[2-6]$ ]]; then
    echo "Error: Stage must be 'stage2', 'stage3', 'stage4', 'stage5', or 'stage6'"
    usage
fi

# Set up file paths
if [ "$TYPE" = "inclass" ]; then
    TEMPLATE_DIR="prompts/templates/inClass"
else
    TEMPLATE_DIR="prompts/templates/$TYPE"
fi

TEMPLATE_FILE="$TEMPLATE_DIR/$STAGE"
SYLLABUS_FILE="prompts/syllabus/$STAGE"
SCHEMA_FILE="prompts/informationNeeded/schema.js"
COMPONENT_TREE_FILE="prompts/informationNeeded/componentTree"
GENERAL_TIPS_FILE="prompts/informationNeeded/generalTips"
OUTPUT_DIR="prompts/output/$TYPE"
OUTPUT_FILE="$OUTPUT_DIR/${STAGE}_${SYLLABUS_IDENTIFIER}"

# Check if required files exist
if [ ! -f "$TEMPLATE_FILE" ]; then
    echo "Error: Template file not found: $TEMPLATE_FILE"
    exit 1
fi

if [ ! -f "$SCHEMA_FILE" ]; then
    echo "Error: Schema file not found: $SCHEMA_FILE"
    exit 1
fi

if [ ! -f "$COMPONENT_TREE_FILE" ]; then
    echo "Error: Component tree file not found: $COMPONENT_TREE_FILE"
    exit 1
fi

if [ ! -f "$GENERAL_TIPS_FILE" ]; then
    echo "Error: General tips file not found: $GENERAL_TIPS_FILE"
    exit 1
fi

# Extract syllabus content
echo "Extracting syllabus content for $SYLLABUS_IDENTIFIER from $SYLLABUS_FILE..."
SYLLABUS_CONTENT=$(extract_syllabus_content "$SYLLABUS_FILE" "$SYLLABUS_IDENTIFIER")

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Generating prompt for $TYPE $STAGE..."
echo "Syllabus identifier: $SYLLABUS_IDENTIFIER"
echo "Output file: $OUTPUT_FILE"

# Use a temporary file approach to handle multi-line content properly
TEMP_FILE=$(mktemp)

# Start with the template
cp "$TEMPLATE_FILE" "$TEMP_FILE"

# Replace syllabus point with extracted content
# Use a more robust replacement that handles multi-line content
awk -v replacement="$SYLLABUS_CONTENT" '
{
    if ($0 ~ /\[INSERT_SYLLABUS_POINT\]/) {
        gsub(/\[INSERT_SYLLABUS_POINT\]/, replacement)
    }
    print
}' "$TEMP_FILE" > "${TEMP_FILE}.new"

mv "${TEMP_FILE}.new" "$TEMP_FILE"

# Replace JSON schema using here document approach
{
    while IFS= read -r line; do
        if [[ "$line" == *"[INSERT_JSON_SCHEMA]"* ]]; then
            # Replace the placeholder with the schema content
            echo "${line/\[INSERT_JSON_SCHEMA\]/$(cat "$SCHEMA_FILE" | tr '\n' '\001' | sed 's/\001/\\n/g')}"
        else
            echo "$line"
        fi
    done < "$TEMP_FILE"
} > "${TEMP_FILE}.new"

mv "${TEMP_FILE}.new" "$TEMP_FILE"

# Replace component tree using here document approach
{
    while IFS= read -r line; do
        if [[ "$line" == *"[INSERT_COMPONENT_TREE]"* ]]; then
            # Replace the placeholder with the component tree content
            echo "${line/\[INSERT_COMPONENT_TREE\]/$(cat "$COMPONENT_TREE_FILE" | tr '\n' '\001' | sed 's/\001/\\n/g')}"
        else
            echo "$line"
        fi
    done < "$TEMP_FILE"
} > "${TEMP_FILE}.new"

mv "${TEMP_FILE}.new" "$TEMP_FILE"

# Append general tips to the end of the file
echo "" >> "$TEMP_FILE"
echo "---" >> "$TEMP_FILE"
echo "" >> "$TEMP_FILE"
cat "$GENERAL_TIPS_FILE" >> "$TEMP_FILE"

# Move final result to output file
mv "$TEMP_FILE" "$OUTPUT_FILE"

# Clean up temporary files
rm -f "$TEMP_FILE.bak"

echo "✅ Prompt generated successfully!"
echo "📁 Output location: $OUTPUT_FILE"
echo "📝 Template used: $TEMPLATE_FILE"
echo "📚 Syllabus file used: $SYLLABUS_FILE"
echo ""
echo "Content replacements made:"
echo "  • Syllabus content: '$SYLLABUS_IDENTIFIER' ($(echo "$SYLLABUS_CONTENT" | wc -c) characters)"
echo "  • JSON Schema: $(cat "$SCHEMA_FILE" | wc -l) lines"
echo "  • Component Tree: $(cat "$COMPONENT_TREE_FILE" | wc -l) lines"
echo "  • General Tips: $(cat "$GENERAL_TIPS_FILE" | wc -l) lines appended"