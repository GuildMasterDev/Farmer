# macOS Installation Instructions

## Important: Security Warning

Since Artist is not yet notarized by Apple, macOS will show a warning that the app is "damaged" or "can't be opened" when you first try to run it. This is a security feature, not an actual problem with the app.

## Installation Methods

### Method 1: Remove Quarantine (Recommended)

After downloading and extracting Artist.app:

1. Open Terminal
2. Run this command:
   ```bash
   xattr -cr /path/to/Artist.app
   ```
   Replace `/path/to/` with the actual path where you extracted the app (e.g., `~/Downloads/Artist.app`)

3. Double-click Artist.app to run

### Method 2: Right-Click to Open

1. Download and extract Artist.app
2. Right-click (or Control-click) on Artist.app
3. Select "Open" from the context menu
4. Click "Open" in the security dialog

### Method 3: System Preferences

1. Try to open Artist.app normally (it will be blocked)
2. Open System Preferences → Security & Privacy
3. In the General tab, you'll see a message about Artist being blocked
4. Click "Open Anyway"

## Why Does This Happen?

macOS uses Gatekeeper to protect users from potentially harmful software. Apps distributed outside the Mac App Store need to be:
- Code signed with a valid Apple Developer certificate
- Notarized by Apple

Artist is currently using ad-hoc signing for development. In future releases, we plan to implement proper code signing and notarization.

## Is It Safe?

Yes! Artist is open source and you can review all the code at:
https://github.com/GuildMasterDev/Artist

The app only:
- Displays a collection of curated resource links
- Opens links in your default browser
- Does not collect any personal data
- Does not require special permissions

## Still Having Issues?

If you continue to have problems:
1. Make sure you've fully extracted the .zip file before running
2. Try moving Artist.app to your Applications folder first
3. Check that your macOS version is compatible (10.12 or later)

For additional help, please open an issue at:
https://github.com/GuildMasterDev/Artist/issues