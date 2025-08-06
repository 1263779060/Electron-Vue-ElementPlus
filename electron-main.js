const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
	icon: path.join(__dirname, "my_app.ico"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    }
  })

win.loadFile('dist/index.html')

  // 打开开发者工具，方便调试
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})