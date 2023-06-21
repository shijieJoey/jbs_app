const { app, BrowserWindow } = require("electron");
const { format } = require('url');
const { join } = require('path');

const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
        title: "Main Window",
        width: 1000,
        height: 800,
        webPreferences: {}
    });

    mainWindow.webContents.openDevTools();

    const startUrl = format({
        pathname: join(__dirname, './build/index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL('http://localhost:3000');

}

app.on('ready', createMainWindow);


