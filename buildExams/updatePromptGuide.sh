#!/bin/bash

# update-prompt-guide.sh - Updates the prompt guide with latest files
# Usage: ./update-prompt-guide.sh

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# File paths
PROMPT_GUIDE="src/prompt-guide.md"
SCHEMA_FILE="src/prompts/informationNeeded/schema.js"
COMPONENT_MAP_FILE="src/componentMap.js"
COMPONENT_TREE_FILE="src/prompts/informationNeeded/componentTree"
GENERAL_TIPS_FILE="src/prompts/informationNeeded/generalTips"

echo -e "${GREEN}🔄 Updating prompt guide with latest files...${NC}"

# Check if all required files exist
missing_files=()

if [ ! -f "$SCHEMA_FILE" ]; then
    missing_files+=("$SCHEMA_FILE")
fi

if [ ! -f "$COMPONENT_MAP_FILE" ]; then
    missing_files+=("$COMPONENT_MAP_FILE")
fi

if [ ! -f "$COMPONENT_TREE_FILE" ]; then
    missing_files+=("$COMPONENT_TREE_FILE")
fi

if [ ! -f "$GENERAL_TIPS_FILE" ]; then
    missing_files+=("$GENERAL_TIPS_FILE")
fi

if [ ${#missing_files[@]} -ne 0 ]; then
    echo -e "${RED}❌ Missing required files:${NC}"
    for file in "${missing_files[@]}"; do
        echo -e "  ${RED}• $file${NC}"
    done
    exit 1
fi

# Create prompts directory if it doesn't exist
mkdir -p "$(dirname "$PROMPT_GUIDE")"

# Extract schema content (remove export statement)
echo -e "${YELLOW}📋 Extracting schema...${NC}"
SCHEMA_CONTENT=$(sed 's/^export default //' "$SCHEMA_FILE" | sed 's/;$//')

# Extract component tree content (remove export statement and comments)
echo -e "${YELLOW}🌳 Extracting component tree...${NC}"
COMPONENT_TREE_CONTENT=$(grep -v '^//' "$COMPONENT_TREE_FILE" | sed 's/^export default //' | sed 's/;$//')

# Read general tips
echo -e "${YELLOW}💡 Reading general tips...${NC}"
GENERAL_TIPS_CONTENT=$(cat "$GENERAL_TIPS_FILE")

# Generate the prompt guide
echo -e "${YELLOW}✍️  Generating prompt guide...${NC}"
cat > "$PROMPT_GUIDE" << EOF
Act as an expert NSW Mathematics Teacher with 20 years of experience. Generate JSON that I will parse as react following the generic JSON schema below that I normally use for making resources.

------- Between the dashed lines is the text i change between prompts ----------


---------------------- ----------
## JSON Schema

\`\`\`
$SCHEMA_CONTENT
\`\`\`

## Component Tree

\`\`\`
$COMPONENT_TREE_CONTENT
\`\`\`

## General Tips

$GENERAL_TIPS_CONTENT
EOF

echo -e "${GREEN}✅ Prompt guide updated successfully!${NC}"
echo -e "${GREEN}📄 File: $PROMPT_GUIDE${NC}"

# Show file size and modification time
file_size=$(wc -c < "$PROMPT_GUIDE")
echo -e "${GREEN}📊 Size: $file_size bytes${NC}"
echo -e "${GREEN}🕐 Last updated: $(date)${NC}"

# Optional: Show preview of first few lines
echo -e "\n${YELLOW}📖 Preview (first 5 lines):${NC}"
head -n 5 "$PROMPT_GUIDE" | sed 's/^/  /'

echo -e "\n${GREEN}🎉 Ready to copy and paste!${NC}"