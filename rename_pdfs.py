import os
import re

# Paths
product_details_path = r'src/pages/Product/Data/ProductDetails.js'
pdfs_dir = r'public/pdfs'

# 1. Extract Keys from ProductDetails.js
with open(product_details_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find keys: "AD-..." : {
keys = re.findall(r'"(AD-[^"]+)":\s*\{', content)

print(f"Found {len(keys)} product keys.")

# 2. Rename files in public/pdfs
if not os.path.exists(pdfs_dir):
    print(f"Directory not found: {pdfs_dir}")
    exit()

renamed_count = 0
for key in keys:
    original_filename = f"{key}.pdf"
    new_filename = f"Ecoseries_{key}.pdf"
    
    original_path = os.path.join(pdfs_dir, original_filename)
    new_path = os.path.join(pdfs_dir, new_filename)
    
    # Check if original exists
    if os.path.exists(original_path):
        # Check if new already exists (don't overwrite or double rename)
        if not os.path.exists(new_path):
            try:
                os.rename(original_path, new_path)
                print(f"Renamed: {original_filename} -> {new_filename}")
                renamed_count += 1
            except Exception as e:
                print(f"Error renaming {original_filename}: {e}")
        else:
            print(f"Skipping {original_filename}, target {new_filename} already exists.")
    else:
        # Check if the file was maybe already renamed?
        if os.path.exists(new_path):
            # print(f"File already in correct format: {new_filename}")
            pass
        else:
            print(f"Warning: neither {original_filename} nor {new_filename} found for key {key}")

print(f"\nTotal files renamed: {renamed_count}")
