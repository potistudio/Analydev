module.exports = class Task {
	#title = "";
	#description = "";

	constructor (_title) {
		this.#title = _title;
	}

	get title () { return this.#title; }
	set title (value) { this.#title = value; }

	get description () { return this.#description; }
	set description (value) { this.#description = value; }
}
