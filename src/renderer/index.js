const anime = require ("animejs");

const BASE_HEIGHT = 148;
const ELEMENT_HEIGHT = 56;
let currentHeight = BASE_HEIGHT;

window.onload = () => {
	document.getElementById ("taskTable").style.height = currentHeight + "px";
}

document.getElementById ("addTaskButton").addEventListener ("click", () => {
	let element = document.createElement ("div");
	element.classList.add ("List-Element");

	document.getElementById ("taskList").appendChild (element);

	currentHeight += ELEMENT_HEIGHT;
	anime ({
		targets: "#taskTable",
		height: currentHeight + "px",
		duration: 600,
		easing: "easeOutExpo"
	});
});
