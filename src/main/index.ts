import { app, BrowserWindow, protocol } from 'electron';
import createProtocol from 'umi-plugin-electron-builder/lib/createProtocol';
import path from 'path';
// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

const isDevelopment = process.env.NODE_ENV === 'development';
let mainWindow: BrowserWindow;

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
]);

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  if (isDevelopment) {
    mainWindow.loadURL('http://localhost:8000');
  } else {
    createProtocol('app');
    mainWindow.loadURL('app://./index.html');
  }
}

app.on('ready', async () => {
  // if (isDevelopment) {
  //   await installExtension(REACT_DEVELOPER_TOOLS);
  // }
  createWindow();
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
