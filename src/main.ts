import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  win.loadFile('./src/index.html');
}

// Recebe mensagens do renderer
ipcMain.on('message', function (event, data) {
  console.log('Mensagem recebida:', data);
});

// IPC com retorno de dados (invoke/handle)
ipcMain.handle('get-info', async function () {
  return 'Resposta do main';
});

app.whenReady().then(createWindow);