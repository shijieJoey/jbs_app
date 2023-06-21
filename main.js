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

    const startUrl = format({
        pathname: join(__dirname, 'index.html'),
        protocol: 'file'
    });

    mainWindow.loadURL(startUrl);

}

app.whenReady().then(createMainWindow);


