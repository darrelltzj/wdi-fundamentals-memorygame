// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardTwo === cardFour) {
// 	alert("You found a Match!");
// }
// else{
// 	alert("Sorry, try again.");
// }

var gameBoard = document.getElementById("game-board");

// var createCards = function(){
// 	for (var i=0; i<4; i++) {
// 		var newCard = document.createElement('div');
// 		newCard.className = 'card';
// 		gameBoard.appendChild(newCard);
// 	}
// }

// createCards();

var cards = ['queen','queen','king','king'];

var cardsInPlay = [];

var createCards = function(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

//checks to see if there are cards in play
var isTwoCards = function() {
	// add card to array of cards in play
	// 'this' hasn't been covered in this pre-work, but
	// for now, just know it gives you access to the card the user clicked on
	cardsInPlay.push(this.getAttribute('data-card'));
	if(this.getAttribute('data-card') == 'king'){
		this.innerHTML = "<img src = 'king.png' alt='King of Spades'>";
	}
	else{
		this.innerHTML = "<img src = 'queen.png' alt='Queen of Hearts'>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
  }
}

var isMatch = function(cardsInPlay){
	if(cardsInPlay[0] == cardsInPlay[1]){
		alert("Cards Match!")
	}
	else{
		alert("Try Again.")
	}
}

createCards();



















