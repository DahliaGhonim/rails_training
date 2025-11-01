
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
let firstSave = true

function increment() {
	count += 1
	countEl.textContent = count
}

function save() {
	let countStr = null
	if (true === firstSave) {
		countStr = count
		firstSave = false
	}
	else {
		countStr = " - " + count
	}

	saveEl.textContent += countStr
	count = 0
	countEl.textContent = count
}
