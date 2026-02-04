import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  sendMessage: function (message: string) {
    ipcRenderer.send('message', message);
  },
  getInfo: function () {
    return ipcRenderer.invoke('get-info');
  }
});
