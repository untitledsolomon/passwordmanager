const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
  });

  win.setMenuBarVisibility(false);

  if (isDev) {
    win.loadURL('http://localhost:5173'); // only for dev
  } else {
    win.loadFile(path.join(__dirname, 'dist', 'index.html')); // offline-ready
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (process.env.NODE_ENV !== 'production') {
      // In dev, exit with code 1 so concurrently kills other processes
      process.exit(1);
    } else {
      app.quit();
    }
  }
});