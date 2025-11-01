
let player = {
	name: "Dahlia",
	chips: 10
}

let isAlive = false
let cards = []
let sum = 0
let hasBlackjack = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1		// 1-13
	if (10 < randomNumber) {
		randomNumber = 10
	}
	else if (1 === randomNumber) {
		randomNumber = 11
	}
	return randomNumber
}

function startGame() {
	if (player.chips > 0) {
		isAlive = true
		firstCard = getRandomCard()
		secondCard = getRandomCard()
		cards = [firstCard, secondCard]
		sum = firstCard + secondCard
		hasBlackjack = false
		renderGame()
	}
}

function renderGame() {
	cardsEl.textContent = "Cards:"
	let cardsCount = cards.length
	for (let i = 0; i < cardsCount; i++) {
		cardsEl.textContent += " " + cards[i]
	}

	sumEl.textContent = "Sum: " + sum
	if (20 >= sum) {
		message = "Do you want to draw a new card?"
	} 
	else if (21 === sum) {
		message = "You've got Blackjack!"
		hasBlackjack = true
		player.chips += 1
	}
	else {
		message = "You're out of the game!"
		isAlive = false
		player.chips -= 1
	}

	messageEl.textContent = message
	playerEl.textContent = player.name + ": $" + player.chips
}

function newCard() {
	if (isAlive && !hasBlackjack) {
		let card = getRandomCard()
		sum += card
		cards.push(card)
		renderGame()
	}
}
