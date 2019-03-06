var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var resetButton = document.querySelector('#reset');
var score = 0;

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener("click",flipCard);
		var gameBoard = document.querySelector('#game-board');
		gameBoard.appendChild(cardElement);
	}
}

var resetGame = function(){
	var cardElement = document.querySelectorAll('img');
	for (var i = 0; i < cards.length; i++) {
		cardElement[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
}


var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		setTimeout(resetGame,500);
		alert("Sorry, try again.");
	}
}


var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	//console.log("User flipped " + cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	} else if (cardsInPlay.length === 4) {
		score++;
		var scoreDisplay = document.querySelector('span');
		scoreDisplay.textContent = score;
		alert("You won!");
	}
}

createBoard();
resetButton.addEventListener("click",resetGame);