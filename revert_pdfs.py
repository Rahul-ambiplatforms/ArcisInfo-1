import os

pdfs_dir = r'public/pdfs'

if not os.path.exists(pdfs_dir):
    print(f"Directory not found: {pdfs_dir}")
    exit()

renamed_count = 0
for filename in os.listdir(pdfs_dir):
    if filename.startswith("Ecoseries_"):
        new_filename = filename.replace("Ecoseries_", "", 1)
        
        original_path = os.path.join(pdfs_dir, filename)
        new_path = os.path.join(pdfs_dir, new_filename)
        
        try:
            os.rename(original_path, new_path)
            print(f"Reverted: {filename} -> {new_filename}")
            renamed_count += 1
        except Exception as e:
            print(f"Error renaming {filename}: {e}")

print(f"\nTotal files reverted: {renamed_count}")
