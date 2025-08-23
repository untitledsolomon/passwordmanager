// dev-electron.cjs
const waitOn = require('wait-on');
const { spawn } = require('child_process');
const path = require('path');

const port = process.env.VITE_DEV_PORT || 5173;

waitOn({ resources: [`http://localhost:${port}`] }, (err) => {
  if (err) {
    console.error('Vite dev server not ready:', err);
    process.exit(1);
  }

  const electronPath = path.join(__dirname, 'electron-bin', 'electron.exe');

  const electronProcess = spawn(electronPath, ['.'], { stdio: 'inherit' });

  electronProcess.on('close', (code) => {
    console.log(`Electron exited with code ${code}`);
    // Exit the dev-electron process so concurrently can kill Vite
    process.exit(code);
  });

  electronProcess.on('error', (err) => {
    console.error('Failed to start Electron:', err);
    process.exit(1);
  });
});
