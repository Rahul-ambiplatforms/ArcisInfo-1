import re

file_path = r'c:\Users\Jay\Desktop\Adiance\public\src\pages\Product\Data\ProductDetails.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: pdflink: "/pdfs/Ecoseries_AD-XXXX.pdf"
# We want: pdflink: "/pdfs/AD-XXXX.pdf"

# Regex to remove "Ecoseries_" from inside the pdflink path
# matches: pdflink: "/pdfs/Ecoseries_
pattern = r'(pdflink:\s*"/pdfs/)Ecoseries_'

new_content = re.sub(pattern, r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully removed 'Ecoseries_' from pdflinks.")
