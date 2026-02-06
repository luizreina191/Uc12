"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
function createWindow() {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path_1.default.join(__dirname, 'preload.js')
        }
    });
    // Em modo de desenvolvimento, carrega o servidor Vite
    if (process.env.NODE_ENV === 'development') {
        // Aguarda um pouco para o servidor Vite iniciar
        setTimeout(() => {
            win.loadURL('http://localhost:5173/');
        }, 2000);
    }
    else {
        win.loadFile('./dist/index.html');
    }
}
// Recebe mensagens do renderer
electron_1.ipcMain.on('message', function (event, data) {
    console.log('Mensagem recebida:', data);
});
// IPC com retorno de dados (invoke/handle)
electron_1.ipcMain.handle('get-info', async function () {
    return 'Resposta do main';
});
electron_1.app.whenReady().then(createWindow);
