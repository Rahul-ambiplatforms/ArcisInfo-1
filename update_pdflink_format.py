import re

file_path = r'c:\Users\Jay\Desktop\Adiance\public\src\pages\Product\Data\ProductDetails.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find pdflink property: pdflink: "Ecoseries_ID",
# We want to replace it with: pdflink: "/pdfs/Ecoseries_ID.pdf",
pattern = r'pdflink:\s*"([^"]+)"'

def replacement(match):
    original_value = match.group(1)
    # Check if it already has /pdfs/ prefix to avoid double prefixing if run multiple times
    if original_value.startswith("/pdfs/"):
        return f'pdflink: "{original_value}"'
    
    return f'pdflink: "/pdfs/{original_value}.pdf"'

new_content = re.sub(pattern, replacement, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated pdflinks formats.")
