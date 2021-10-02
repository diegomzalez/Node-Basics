const { app, BrowserWindow } = require('electron');

let principalWindow;
app.on('ready', createWindow);
function createWindow() {
    principalWindow = new BrowserWindow({
        width: 800,
        height: 600, 
    });
    principalWindow.loadFile('index.html');
};