const { ipcRenderer } = require ("electron");
const anime = require ("animejs");

const BASE_HEIGHT = 148;
const ELEMENT_HEIGHT = 56;

let currentListHeight = BASE_HEIGHT;

let waitingInput = false;


const taskNameInput = document.getElementById ("taskNameInput");


window.onload = () => {
	document.getElementById ("taskTable").style.height = currentListHeight + "px";
}


document.addEventListener ("keydown", (_e) => {
	console.log (_e.key)
	switch (_e.key) {
		case "Escape":
			_e.preventDefault();

			if (waitingInput)
				cancelInput();
		break;

		case "Enter":
			_e.preventDefault();

			if (waitingInput) {
				ipcRenderer.send ("add-task", _e.target.value);
				addTaskElement (_e.target.value);

				taskNameInput.value = "New Task";
				taskNameInput.select();

				anime ({
					targets: "#taskNameInput",
					opacity: [0, 1],
					duration: 400,
					easing: "easeOutExpo",
				});

				currentListHeight += ELEMENT_HEIGHT;
				setListHeight (currentListHeight);
			}
		break;
	}
});


document.getElementById ("addTaskButton").addEventListener ("click", () => {
	// taskNameInput.style.visibility = "visible";
	anime ({
		targets: "#taskNameInput",
		opacity: [0, 1],
		duration: 400,
		easing: "easeOutExpo",
		begin: () => taskNameInput.style.visibility = "visible"
	});

	if (waitingInput) return; // If Waiting Input, Refocus to the Input Form.
	waitingInput = true;

	taskNameInput.value = "New Task"
	taskNameInput.select();

	currentListHeight += ELEMENT_HEIGHT;
	setListHeight (currentListHeight);
});


function cancelInput() {
	waitingInput = false;
	// taskNameInput.style.visibility = "hidden";
	anime ({
		targets: "#taskNameInput",
		opacity: 0,
		duration: 400,
		easing: "easeOutExpo",
		complete: () => taskNameInput.style.visibility = "hidden"
	});
	taskNameInput.blur();

	currentListHeight -= ELEMENT_HEIGHT;
	setListHeight (currentListHeight)
}


// Animated
function setListHeight (_height) {
	anime ({
		targets: "#taskTable",
		height: _height + "px",
		duration: 600,
		easing: "easeOutExpo"
	});
}


function addTaskElement (_name) {
	let element = document.createElement ("div");
	element.classList.add ("List-Element");

	let text = document.createElement ("span");
	text.innerText = _name;

	element.appendChild (text);
	document.getElementById ("taskList").appendChild (element);
}
