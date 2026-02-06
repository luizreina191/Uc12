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
 
  // Em modo de desenvolvimento, carrega o servidor Vite
  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173/');
  } else {
    win.loadFile('./dist/index.html');
  }
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