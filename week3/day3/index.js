
let myLeads = []

const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
}


saveBtn.addEventListener("click", function()
{
	updateLeads(inputEl.value)
	inputEl.value = ""
})


tabBtn.addEventListener("click", function()
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		updateLeads(tabs[0].url)
	})
})


deleteBtn.addEventListener("dblclick", function ()
{
	localStorage.clear()
	myLeads = []
	render(myLeads)
})


// Add a lead to myLeads array, then update the local storage and DOM
function updateLeads(lead) {
	myLeads.push(lead)
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
}


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

