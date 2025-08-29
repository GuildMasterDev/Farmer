#!/bin/bash
set -e

echo "=== Local CI Test Script ==="
echo "This simulates what GitHub Actions would do"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_step() {
    echo -e "${GREEN}[STEP]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Clean previous builds
print_step "Cleaning previous builds..."
rm -rf dist/ release/

# Install dependencies
print_step "Installing dependencies..."
npm install

# Build Angular app
print_step "Building Angular app..."
npx ng build --base-href ./

# Check Angular build output
if [ -d "dist" ]; then
    print_step "Angular build successful. Contents:"
    ls -la dist/
else
    print_error "Angular build failed - dist directory not created"
    exit 1
fi

# Build Electron TypeScript
print_step "Building Electron TypeScript..."
npx tsc -p electron/tsconfig.json

# Check Electron build output
if [ -f "dist/electron/main.js" ]; then
    print_step "Electron TypeScript build successful"
    ls -la dist/electron/
else
    print_error "Electron TypeScript build failed"
    exit 1
fi

# Build distributables for current platform
print_step "Building Electron distributables..."

# Detect platform
if [[ "$OSTYPE" == "darwin"* ]]; then
    PLATFORM="mac"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    PLATFORM="linux"
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    PLATFORM="win"
else
    print_warning "Unknown platform: $OSTYPE"
    PLATFORM="mac"
fi

print_step "Building for platform: $PLATFORM"

# Build with electron-builder
npx electron-builder --$PLATFORM --publish never || {
    print_warning "Build failed, but continuing to check output..."
}

# Check build output
print_step "Checking build output..."
if [ -d "release" ]; then
    echo "Release directory contents:"
    ls -la release/
    
    echo ""
    echo "Finding installer files:"
    find release -type f \( -name "*.dmg" -o -name "*.zip" -o -name "*.exe" -o -name "*.AppImage" \) 2>/dev/null || echo "No installer files found"
else
    print_error "No release directory created"
fi

echo ""
print_step "Local CI test complete!"

# Test if the app can actually run (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo ""
    print_step "Testing if app launches (will auto-close after 5 seconds)..."
    
    # Find the .app in release directory
    APP_PATH=$(find release -name "*.app" -type d | head -1)
    
    if [ -n "$APP_PATH" ]; then
        # Remove quarantine
        xattr -cr "$APP_PATH" 2>/dev/null || true
        
        # Launch the app
        open "$APP_PATH"
        
        # Wait a bit
        sleep 5
        
        # Kill the app
        pkill -f "Artist" || true
        
        print_step "App launch test complete"
    else
        print_warning "No .app bundle found to test"
    fi
fi