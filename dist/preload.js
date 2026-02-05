"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('api', {
    sendMessage: function (message) {
        electron_1.ipcRenderer.send('message', message);
    },
    getInfo: function () {
        return electron_1.ipcRenderer.invoke('get-info');
    }
});
