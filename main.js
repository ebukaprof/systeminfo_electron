const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow()
{
  //create browser window
  win = new BrowserWindow({width:800, height:500});
  //load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  //open devtools
  win.webContents.openDevTools();

  win.on('close', () =>{
    win = null;
  });
}

//Run create window function
app.on('ready', createWindow);

//Quite when on windws are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
