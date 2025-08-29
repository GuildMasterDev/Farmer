#!/bin/bash

# This script generates all required icon formats from icon.svg
# Requires ImageMagick: brew install imagemagick

# Generate PNG sizes for Linux
mkdir -p icons
for size in 16 32 48 64 128 256 512; do
  convert icon.svg -resize ${size}x${size} icons/${size}x${size}.png
done

# Generate Windows ICO (requires png2ico or ImageMagick)
convert icon.svg -resize 256x256 icon.ico

# Generate macOS ICNS (requires png2icns on Linux or iconutil on macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
  mkdir -p icon.iconset
  convert icon.svg -resize 16x16 icon.iconset/icon_16x16.png
  convert icon.svg -resize 32x32 icon.iconset/icon_16x16@2x.png
  convert icon.svg -resize 32x32 icon.iconset/icon_32x32.png
  convert icon.svg -resize 64x64 icon.iconset/icon_32x32@2x.png
  convert icon.svg -resize 128x128 icon.iconset/icon_128x128.png
  convert icon.svg -resize 256x256 icon.iconset/icon_128x128@2x.png
  convert icon.svg -resize 256x256 icon.iconset/icon_256x256.png
  convert icon.svg -resize 512x512 icon.iconset/icon_256x256@2x.png
  convert icon.svg -resize 512x512 icon.iconset/icon_512x512.png
  convert icon.svg -resize 1024x1024 icon.iconset/icon_512x512@2x.png
  iconutil -c icns icon.iconset
  rm -rf icon.iconset
fi

echo "Icon generation complete!"