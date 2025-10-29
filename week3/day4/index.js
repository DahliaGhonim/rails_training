
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js"
import { getDatabase,
				 ref,
				 push,
				 onValue,
				 remove
 } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js"

const firebaseConfig = {
	databaseURL: "https://leads-tracker-app-80900-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")


saveBtn.addEventListener("click", function()
{
	push(referenceInDB, inputEl.value)
	inputEl.value = ""
})


onValue(referenceInDB, function(snapshot)
{
	if (snapshot.exists()) {
		const snapshotValues = snapshot.val()
		const leads = Object.values(snapshotValues)
		render(leads)
	}
})


deleteBtn.addEventListener("dblclick", function ()
{
	remove(referenceInDB)
	ulEl.innerHTML = ""
})


function render(leads)
{
	let listItems = ""
	const leadsCount = leads.length

	for (let i = 0; i < leadsCount; i++) {
		listItems +=
			`<li>
				<a href="${leads[i]}" target="_blank">
					${leads[i]}
				</a>
			</li>`
	}

	ulEl.innerHTML = listItems
}

