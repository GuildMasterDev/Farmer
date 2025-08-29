#!/bin/bash

# This script generates all required icon formats from icon.svg
# Requires ImageMagick: brew install imagemagick

cd "$(dirname "$0")"

echo "Generating icons for Farmer app..."

# Generate PNG sizes for Linux and general use
mkdir -p icons
for size in 16 32 48 64 128 256 512; do
  echo "Creating ${size}x${size}.png..."
  magick icon.svg -resize ${size}x${size} icons/${size}x${size}.png
done

# Generate Windows ICO
echo "Creating Windows icon.ico..."
magick icon.svg -resize 256x256 icon.ico

# Generate macOS ICNS
if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "Creating macOS icon.icns..."
  mkdir -p icon.iconset
  
  # Generate all required sizes for macOS
  magick icon.svg -resize 16x16 icon.iconset/icon_16x16.png
  magick icon.svg -resize 32x32 icon.iconset/icon_16x16@2x.png
  magick icon.svg -resize 32x32 icon.iconset/icon_32x32.png
  magick icon.svg -resize 64x64 icon.iconset/icon_32x32@2x.png
  magick icon.svg -resize 128x128 icon.iconset/icon_128x128.png
  magick icon.svg -resize 256x256 icon.iconset/icon_128x128@2x.png
  magick icon.svg -resize 256x256 icon.iconset/icon_256x256.png
  magick icon.svg -resize 512x512 icon.iconset/icon_256x256@2x.png
  magick icon.svg -resize 512x512 icon.iconset/icon_512x512.png
  magick icon.svg -resize 1024x1024 icon.iconset/icon_512x512@2x.png
  
  # Convert to icns
  iconutil -c icns icon.iconset
  
  # Clean up
  rm -rf icon.iconset
fi

echo "Icon generation complete!"
echo "Generated:"
echo "  - PNG icons (16x16 to 512x512) in icons/"
echo "  - Windows icon.ico"
if [[ "$OSTYPE" == "darwin"* ]]; then
  echo "  - macOS icon.icns"
fi