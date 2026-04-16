# macOS Installation Instructions

## Important: Security Warning

Since Farmer is not yet notarized by Apple, macOS will show a warning that the app is "damaged" or "can't be opened" when you first try to run it. This is a security feature, not an actual problem with the app.

## Installation Methods

### Method 1: Remove Quarantine (Recommended)

After downloading and extracting Farmer.app:

1. Open Terminal
2. Run this command:
   ```bash
   xattr -cr /path/to/Farmer.app
   ```
   Replace `/path/to/` with the actual path where you extracted the app (e.g., `~/Downloads/Farmer.app`)

3. Double-click Farmer.app to run

### Method 2: Right-Click to Open

1. Download and extract Farmer.app
2. Right-click (or Control-click) on Farmer.app
3. Select "Open" from the context menu
4. Click "Open" in the security dialog

### Method 3: System Settings

1. Try to open Farmer.app normally (it will be blocked)
2. Open System Settings → Privacy & Security
3. Scroll to the Security section — you'll see a message about Farmer being blocked
4. Click "Open Anyway"

## Why Does This Happen?

macOS uses Gatekeeper to protect users from potentially harmful software. Apps distributed outside the Mac App Store need to be:
- Code signed with a valid Apple Developer certificate
- Notarized by Apple

Farmer is currently using ad-hoc signing for development. In future releases, we plan to implement proper code signing and notarization.

## Is It Safe?

Yes! Farmer is open source and you can review all the code at:
https://github.com/GuildMasterDev/Farmer

The app only:
- Displays a collection of curated resource links
- Opens links in your default browser
- Does not collect any personal data
- Does not require special permissions

## Prefer the Web Version?

If you would rather skip the desktop install, the same frontend is hosted
at https://guildmasterdev.github.io/Farmer — no download or Gatekeeper
ritual required.

## Still Having Issues?

If you continue to have problems:
1. Make sure you've fully extracted the .zip file before running
2. Try moving Farmer.app to your Applications folder first
3. Check that your macOS version is compatible (macOS 11 Big Sur or later, required by Electron 41)

For additional help, please open an issue at:
https://github.com/GuildMasterDev/Farmer/issues
