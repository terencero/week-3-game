 
 var keys = ['s', 'o', 'c', 'r', 'a', 't', 'e', 'p', 'l', 'i', 'd', 'n', 'z', 'h'];
// Captures Key Clicks
    document.onkeyup = function(event) {
// Determines which exact key was selected. Make it lowercase
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();




// array containing words and answers

var wordsArray = [
	'socrates',
	'plato',
	'aristotle',
	'descartes',
	'nietzsche'
]

var result = Math.floor((Math.random() * wordsArray.length));

var word = wordsArray[result]





	// var socrates = document.getElementsByClassName('word-line');
	
	// socrates.innerHTML = '_ _ _ _ _ _ _ _'

	// if (userInput === 's'){

	// }

	



// function()

// var dash = document.getElementsByClassName('word-line');

// dash = innerHTML.replace("_ _ _ _ _ _ _ _");

// function setDashes(){

// 		console.log(dash);

		//dash.innerHTML.replace("_ _ _ _ _ _ _ _");
	// }

if (userInput === 's') {
	console.log(dash);
}

} // end of document.onkeyup 
