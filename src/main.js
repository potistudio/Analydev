const path = require ("node:path");
const { app, BrowserWindow, ipcMain } = require ("electron");

const Task = require ("./class/task.js");
const TaskManager = require ("./task-manager.js");

let mainWindow = null;
let taskManager = null;

// Intialize the Application
function init() {
	taskManager = new TaskManager();

	createWindow();
}

// Create a Application Window
function createWindow() {
	mainWindow = new BrowserWindow ({
		width: 1280,
		height: 720,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	mainWindow.webContents.loadFile (path.join(__dirname, "../static", "index.html"));
	mainWindow.once ("ready-to-show", () => mainWindow.show());
}

ipcMain.on ("add-task", (_e, _name) => {
	let task = new Task (_name);
	taskManager.addTask (task);
	console.log (taskManager.taskCount)
});

app.once ("ready", () => init());
app.once ("window-all-closed", () => app.quit());
