from PIL import Image
import os

input_path = r'public\img\k3_logo.jpg'
output_path = r'public\img\k3_logo.png'

# Open the image
img = Image.open(input_path)

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Get the data
data = img.getdata()

# Create a new list to store modified pixels
new_data = []

# Define white color threshold (allowing slight variations)
white_threshold = 240

for item in data:
    # Check if pixel is white or nearly white (RGB values > threshold)
    if item[0] > white_threshold and item[1] > white_threshold and item[2] > white_threshold:
        # Make it transparent
        new_data.append((255, 255, 255, 0))
    else:
        # Keep the original pixel
        new_data.append(item)

# Update image data
img.putdata(new_data)

# Save the image
img.save(output_path, 'PNG')

input_size = os.path.getsize(input_path) / 1024
output_size = os.path.getsize(output_path) / 1024

print(f"Conversion complete!")
print(f"Original JPG: {input_size:.2f} KB")
print(f"New PNG with transparency: {output_size:.2f} KB")
print(f"White background removed and made transparent.")
