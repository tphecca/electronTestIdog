//https://github.com/electron/electron/blob/master/docs/api/browser-window.md
//https://github.com/electron/electron/blob/master/docs/api/global-shortcut.md

//Require for inits of Application, Browser, Menu, Shortcuts, Path, Custom Menu
const {app, BrowserWindow, Menu, globalShortcut} = require('electron')
var path = require('path')
const menuFunc = require('./menu.js')

//Window var
let win;

//Create Window
function createWindow() {
	//Creation of the window for the application, vars are self explainatory
	win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: true,
		maximizable: false,
		fullscreenable: false,
		icon: path.join(__dirname, 'assets/icons/isolite.png')
	});
	//Init of a page for the app
	win.loadURL(`file://${__dirname}/index.html`);
	//Call to the creation of the custom menu require() above is required
	menuFunc(app, BrowserWindow, Menu, globalShortcut, win, path)
}

//Is the app on? Call createWindow function
app.on('ready', createWindow);