# Farmer
A comprehensive resource hub for farming and agriculture

**Live demo:** https://guildmasterdev.github.io/Farmer

## Overview
Farmer is an Electron-based desktop application that provides farmers and agricultural professionals with quick access to essential farming resources, tools, and information. Built with Angular and TypeScript, it offers a modern, intuitive interface for navigating the agricultural world.

## Web Demo
The same Angular frontend is deployed to GitHub Pages at
<https://guildmasterdev.github.io/Farmer>. Resource links open in a new
browser tab when running on the web; the Electron desktop build routes them
through `shell.openExternal` instead.

## Features
- **Farm Management Tools** - Access to leading farm management software and platforms
- **Educational Resources** - Agricultural courses, guides, and research materials
- **Weather & Climate** - Real-time weather forecasting and climate data
- **Markets & Trading** - Commodity markets, equipment marketplaces, and supply sources
- **Farming Community** - Forums, associations, and networking opportunities
- **Sustainable Farming** - Resources for organic and regenerative agriculture
- **AgTech & Innovation** - Precision agriculture, drones, and IoT solutions
- **Seeds & Supplies** - Direct links to seed companies and farming supplies

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the application in development mode:
```bash
npm start
```

### Building
Build the application for production:
```bash
npm run electron:dist
```

## Technology Stack
- **Electron 41** - Desktop application framework
- **Angular 19** - Frontend framework
- **TypeScript 5.8** - Type-safe JavaScript
- **SCSS** - Styling

## License
See LICENSE file for details.

## Author
GuildMaster Development