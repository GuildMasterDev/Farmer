import { app, BrowserWindow, screen, Menu, shell, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

// Set the app name
app.setName('Farmer');

let mainWindow: BrowserWindow | null = null;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

function createWindow(): void {
  const size = screen.getPrimaryDisplay().workAreaSize;

  const windowWidth = size.width - 100;
  const windowHeight = size.height - 50;
  
  mainWindow = new BrowserWindow({
    x: Math.floor((size.width - windowWidth) / 2),
    y: Math.floor((size.height - windowHeight) / 2),
    width: windowWidth,
    height: windowHeight,
    minWidth: 1200,
    minHeight: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, '../../src/assets/icon.png'),
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#1a1a2e',
    show: false
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '../../node_modules', '.bin', 'electron'),
      hardResetMethod: 'exit'
    });
    mainWindow.loadURL('http://localhost:4300');
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Uncomment the line below to open DevTools in development
  // if (serve) {
  //   mainWindow.webContents.openDevTools();
  // }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  createMenu();
}

function createMenu(): void {
  const template: any[] = [
    {
      label: 'Farmer',
      submenu: [
        {
          label: 'About Farmer',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.send('menu-action', 'about');
            }
          }
        },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Resources',
      submenu: [
        {
          label: 'Open External Link',
          click: () => {
            shell.openExternal('https://www.guildmasterdev.com');
          }
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.on('ready', () => {
  setTimeout(createWindow, 400);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.whenReady().then(() => {
  app.setAboutPanelOptions({
    applicationName: 'Farmer',
    applicationVersion: '1.0.0',
    copyright: 'Copyright © 2024 GuildMaster Development',
    credits: 'A comprehensive resource hub for farming and agriculture.',
    website: 'https://www.guildmasterdev.com'
  });
});

// Handle opening external links
ipcMain.on('open-external', (_event, url) => {
  shell.openExternal(url);
});