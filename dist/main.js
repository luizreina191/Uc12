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
    win.loadFile('./dist/index.html');
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
