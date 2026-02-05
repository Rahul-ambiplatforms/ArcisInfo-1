import re

file_path = r'c:\Users\Jay\Desktop\Adiance\public\src\pages\Product\Data\ProductDetails.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find the object key definition
# Matches:   "SOME-KEY": {
pattern = r'(^\s*)"([^"]+)":\s*\{'

def replacement(match):
    indent = match.group(1)
    key = match.group(2)
    # maintain the existing opening brace
    return f'{indent}"{key}": {{\n{indent}  pdflink: "Ecoseries_{key}",'

# Use re.MULTILINE to make ^ match start of lines
new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added pdfliniks.")
