from PIL import Image
import os

input_path = r'public\img\Skyscrapers Gemini Created.png'
output_path = r'public\img\Skyscrapers Gemini Created.webp'

img = Image.open(input_path)
img.save(output_path, 'WEBP', quality=80)

input_size = os.path.getsize(input_path) / (1024 * 1024)
output_size = os.path.getsize(output_path) / (1024 * 1024)

print(f"Conversion complete!")
print(f"Original PNG: {input_size:.2f} MB")
print(f"New WebP: {output_size:.2f} MB")
print(f"Size reduction: {(1 - output_size/input_size)*100:.1f}%")
