module.exports = class TaskManager {
	#taskList = [];

	constructor() {
		this.#taskList = [];
	}

	/**
	 * @param { Task } _task
	 */
	addTask (_task) {
		this.#taskList.push (_task);
	}

	getTask (_index) { return this.#taskList[_index]; }

	get taskCount () { return this.#taskList.length; }
}
