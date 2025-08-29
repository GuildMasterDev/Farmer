# Artist App Release Process

## Automated Releases with GitHub Actions

This project uses GitHub Actions to automatically build and release the Artist app for macOS, Windows, and Linux.

## How to Create a Release

1. **Update the version** in `package.json`:
   ```json
   "version": "1.0.1"
   ```

2. **Commit your changes**:
   ```bash
   git add .
   git commit -m "chore: bump version to 1.0.1"
   git push origin main
   ```

3. **Create and push a version tag**:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

4. **GitHub Actions will automatically**:
   - Build the app for all platforms (macOS, Windows, Linux)
   - Create installers/packages:
     - **macOS**: `.dmg` and `.zip` files (Universal binary for Intel and Apple Silicon)
     - **Windows**: `.exe` installer
     - **Linux**: `.AppImage` and `.deb` packages
   - Create a GitHub Release with all artifacts

5. **Monitor the build**:
   - Go to the [Actions tab](https://github.com/GuildMasterDev/Artist/actions)
   - Watch the "Build and Release" workflow progress
   - Once complete, find your release at [Releases](https://github.com/GuildMasterDev/Artist/releases)

## Manual Build (Local Development)

To build locally for testing:

```bash
# Build for current platform
npm run electron:dist

# Build for specific platform
npm run electron:dist -- --mac
npm run electron:dist -- --win
npm run electron:dist -- --linux
```

Built files will be in the `release/` directory.

## Code Signing (Optional)

### macOS Code Signing

To enable macOS code signing and notarization:

1. Add these secrets to your GitHub repository:
   - `APPLE_ID`: Your Apple Developer ID
   - `APPLE_ID_PASSWORD`: App-specific password
   - `CSC_LINK`: Base64 encoded .p12 certificate
   - `CSC_KEY_PASSWORD`: Certificate password

### Windows Code Signing

To enable Windows code signing:

1. Add these secrets to your GitHub repository:
   - `WIN_CSC_LINK`: Base64 encoded .pfx certificate
   - `WIN_CSC_KEY_PASSWORD`: Certificate password

## Icon Requirements

Place icon files in the `build/` directory:
- `icon.icns` - macOS icon
- `icon.ico` - Windows icon  
- `icons/` - Linux icons (multiple PNG sizes: 16x16, 32x32, 48x48, 64x64, 128x128, 256x256, 512x512)

## Troubleshooting

### Build Fails

1. Check the [Actions logs](https://github.com/GuildMasterDev/Artist/actions)
2. Ensure all dependencies are listed in `package.json`
3. Verify the Angular build completes: `npm run ng:build`
4. Test Electron build locally: `npm run electron:build`

### Release Not Created

- Ensure the tag follows the `v*` pattern (e.g., `v1.0.0`)
- Check that the workflow file exists at `.github/workflows/release.yml`
- Verify GitHub Actions is enabled for your repository

## Download Links

Once released, users can download from:
- **GitHub Releases**: https://github.com/GuildMasterDev/Artist/releases/latest
- Direct links will be in format:
  - macOS: `Artist-{version}-mac.dmg`
  - Windows: `Artist-Setup-{version}.exe`
  - Linux: `Artist-{version}-x64.AppImage`