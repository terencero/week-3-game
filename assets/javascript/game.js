 // name.join? 


//$( document ).ready(function() {
 var keys = ['s', 'o', 'c', 'r', 'a', 't', 'e', 'p', 'l', 'i',
 'd', 'n', 'z', 'h'];

// array containing words and answers

var wordsArray = [
	'socrates',
	'plato',
	'aristotle',
	'descartes',
	'nietzsche'
];



var result = [Math.floor((Math.random() * wordsArray.length))];
// Captures Key Clicks; onkeyup must be below math.random or else game will
// reset every time any key is pressed


document.onkeyup = function(event) {



var word = wordsArray[result];

var wordDisplay = document.getElementById('word-line');

var hits = [];

var letterGuessed = document.getElementById('guessed');

// Determines which exact key was selected. Make it lowercase
var userInput = String.fromCharCode(event.keyCode).toLowerCase();

var userGuess = [''];



console.log(word);
console.log(word.length);
	
// function setCurrentWord(){
// 	

// }

// function compareInput(){

// }

// function reset() {

// }




	if (word === 'socrates') {
		// var dashes = wordDisplay.innerHTML = '_ _ _ _ _ _ _ _';
	for (var i = 0; i < word.length; i++ ) {
		var d = '_ ';
		hits.push(d);

		}
		wordDisplay.innerHTML = hits;

		if (userInput === 's'){
			wordDisplay.innerHTML = 's _ _ _ _ _ _ _';
		}
		 if (userInput === 'o') {
			wordDisplay.innerHTML = '_ o _ _ _ _ _ _';
		} 
}












	// 	if (userInput === 'c') {
	// 		wordDisplay.innerHTML = '_ _ c _ _ _ _ _';
	// 	} if (userInput === 'r') {
	// 		wordDisplay.innerHTML = '_ _ _ r _ _ _ _';
	// 	} if (userInput === 'a') {
	// 		wordDisplay.innerHTML = '_ _ _ _ a _ _ _';
	// 	} if (userInput === 't') {
	// 		wordDisplay.innerHTML = '_ _ _ _ _ t _ _';
	// 	} if (userInput === 'e') {
	// 		wordDisplay.innerHTML = '_ _ _ _ _ _ e _';
	// 	} if (userInput === 's') {
	// 		wordDisplay.innerHTML = 's _ _ _ _ _ _ s';
		

	// } else if (word === 'plato') {
	// 	var dashes = wordDisplay.innerHTML = '_ _ _ _ _';
	// } else if (word === 'aristotle') {
	// 	var dashes = wordDisplay.innerHTML = '_ _ _ _ _ _ _ _ _';
	// } else if (word === 'nietzsche') {
	// 	var dashes = wordDisplay.innerHTML = '_ _ _ _ _ _ _ _ _';
	// }

 }

// function()

// var dash = document.getElementsByClassName('word-line');

// dash = innerHTML.replace("_ _ _ _ _ _ _ _");

// function setDashes(){

// 		// console.log(dash);

// 		// dash.innerHTML.replace("_ _ _ _ _ _ _ _");
// 	}

// if (userInput === 's') {
// 	console.log(dash);
// }


