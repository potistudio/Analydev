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
		height: 720
	});
}

app.once ("ready", () => init());
