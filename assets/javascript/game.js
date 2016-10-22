 // name.join? 



 var keys = ['s', 'o', 'c', 'r', 'a', 't', 'e', 'p', 'l', 'i',
 'd', 'n', 'z', 'h'];



// array containing words and answers

var wordsArray = [ 'socrates', 'plato', 'aristotle', 'descartes', 'nietzsche' ];

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
var result = [Math.floor((Math.random() * wordsArray.length))];
  




// Captures Key Clicks; onkeyup must be below math.random or else game will
// reset every time any key is pressed
document.onkeyup = function(event) {
var word = wordsArray[result];

var wordslength = wordsArray.length;

var wordDisplay = document.getElementById('word-line');

// array bucket for dashes
var hits = [];

// array bucket for ?? not currently being used...
var letters = [];

// need to put user guessed letters that are wrong here
var letterGuessed = document.getElementById('guessed');

// Determines which exact key was selected. Make it lowercase
var userInput = String.fromCharCode(event.keyCode).toLowerCase();



console.log(word);
console.log(word.length);
	
function setCurrentWord(){
	var word = [];
	for (var i = 0; i < word.substr.length; i++ ) {
		var dash = '_ ';
		hits.push(dash);
		
		wordDisplay.innerHTML = hits;
 	}
}
setCurrentWord();

function compareInput(){
	if (word.indexOf(userInput) > -1) {
		letters.push(userInput);

 		wordDisplay.innerHTML = letters;
 	} else {
 		wordDisplay.innerHTML = hits;
 	}
}


compareInput();
}

});
// function reset() {

// }

// below this comment line are code blocks under consideration 
	// if (word) {
	// 	//var dashes = wordDisplay.innerHTML = '_ _ _ _ _ _ _ _';
	// 	//console.log(dashes);
	// for (var i = 0; i < word.length; i++ ) {
	// 		var dash = '_ ';
	// 		hits.push(dash);

	// 	}
		
		//wordDisplay.innerHTML = hits;
		

		// if (userInput === 's'){
		// 	wordDisplay.innerHTML = 's _ _ _ _ _ _ _';
		// }
		//  if (userInput === 'o') {
		// 	wordDisplay.innerHTML = '_ o _ _ _ _ _ _';
		// } 


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


