#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0 [path]"
    echo "Generates the directory structure of the given path (default is current directory) and writes to structure.md."
    exit 1
}

# Check if user provided a path
if [ "$1" ]; then
    TARGET_DIR="$1"
else
    TARGET_DIR="."
fi

# Check if the path exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory '$TARGET_DIR' does not exist."
    exit 1
fi

# Define output file
OUTPUT_FILE="structure.md"

# Display project structure and write to file
echo "Generating project structure for: $TARGET_DIR"
echo "Writing output to $OUTPUT_FILE"
echo "----------------------------"

if command -v tree >/dev/null 2>&1; then
    # Use tree command to generate structure and write to file
    tree "$TARGET_DIR" > "$OUTPUT_FILE"
else
    echo "'tree' command not found. Falling back to 'find' (tree-like syntax will be approximated)."
    # Use find command and format it in tree-like syntax
    find "$TARGET_DIR" | sed 's/[^/]*\//|   /g;s/|   \([^|]\)/+--- \1/' > "$OUTPUT_FILE"
fi

echo "Directory structure written to $OUTPUT_FILE"
echo "----------------------------"
