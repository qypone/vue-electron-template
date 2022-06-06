// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const NODE_ENV = process.env.NODE_ENV

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 1200,
		height: 700,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		},
		icon: path.join(__dirname, '../public/XingK.ico')
	})

	// and load the index.html of the app.
	//mainWindow.loadFile('dist/index.html')
	//mainWindow.loadURL("http://localhost:3000")
	mainWindow.loadURL(
		NODE_ENV === 'development'
		? 'http://localhost:3000'
		:`file://${path.join(__dirname, '../dist/index.html')}`
	);
	// 关闭默认导航栏
	// mainWindow.setMenu(null);

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()
	 // 打开开发工具
	if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow()

	app.on('activate', function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})


/************************************** 自定义菜单栏
app.on('ready', () => {
	const appMenu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(appMenu);
});
const template = [
	{
			label: 'Edit App',
			submenu: [
					{
							label: 'Undo'
					},
					{
							label: 'Redo'
					}
			]
	},
	{
			label: 'View App',
			submenu: [
					{
							label: 'Reload'
					},
					{
							label: 'Toggle Full Screen'
					}
			]
	}
];
*/