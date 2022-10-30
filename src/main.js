const path = require ("node:path");
const { app, BrowserWindow } = require ("electron");

let mainWindow = null;

// Intialize the Application
function init() {
	createWindow();
}

// Create a Application Window
function createWindow() {
	mainWindow = new BrowserWindow ({
		width: 1280,
		height: 720,
		show: false
	});

	mainWindow.webContents.loadFile (path.join(__dirname, "../static", "index.html"));
	mainWindow.once ("ready-to-show", () => mainWindow.show());
}

app.once ("ready", () => init());
app.once ("window-all-closed", () => app.quit());
