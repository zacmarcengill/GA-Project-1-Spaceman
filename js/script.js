/*----- constants -----*/

const alphabetLtrs = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];

const wordArr = [
	{
		word: 'mountain',
		hint: 'climb the ********',
	},
	{
		word: 'river',
		hint: 'water running between mountains',
	},
	{
		word: 'evergreen',
		hint: 'tree that stays green year-round',
	},
	{ word: 'trout', hint: 'fish that lives in cold rivers' },
	{ word: 'campervan', hint: '#vanlife' },
];

const userInput = document.querySelector('.input-boxes');
const playAgainBtn = document.querySelector('.play-again-button');
const hint = document.querySelector('.hint');
const alphaBtnInput = document.querySelector('.button');
const typingInput = document.querySelector('.typing-input');
let word;

/////// logs on screen keyboard Letters when clicked //////
const keyboard = document.getElementById('keyboard');

function keyClick() {
	keyboard.addEventListener('click', (e) => {
		const buttonValue = e.target.innerHTML;
		if (word.includes(buttonValue)) {
			console.log('correct');
		} else {
			console.log('NOT correct');
		}
		console.log(e.target.innerHTML);
	});
}
keyClick();

/////// Generates random word from wordArr above ///////////

function randWordGenerater() {
	//select random word and hint from array
	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];

	//new variable for random word selected
	word = randWordHint.word;

	// console.log("Print > Word: " + randWordHint.word + ' - Hint: ' + randWordHint.hint);
	// console.log(word);

	let changeHTML = '';
	for (let i = 0; i < word.length; i++) {
		changeHTML += `<input type="text" disabled>`;
	}
	userInput.innerHTML = changeHTML;
	//creates hint below hidden word
	hint.innerText = 'Hint: ' + randWordHint.hint;
}
// randWordGenerater();

// NEEDS WORK!!!! ///////Game Function - Plays Game ////////

//Reference: https://stackoverflow.com/questions/1721602/regex-for-matching-a-z-a-z-0-9-and for matching upper case letters only.

// function playGame(e) {
// 	let key = e.target.value;
// 	if (key.match(/^[A-Z]+$/)) {
// 		console.log(key);
// 	}
// 	if (word.includes(key)) {
// 		for (let i = 0; i < word.length; i++) {
// 			if (word[i] === key) {
// 				userInput.querySelectorAll('userInput');
// 			}
// 		}
// 	} else {
// 		console.log('letter not found');
// 	}
// }

function playGame(e) {
	let key = e.target.innerHTML;
}

///// Some Event Listeners ///////

playAgainBtn.addEventListener('click', randWordGenerater);

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/

/////// State's List from FSM Excerise /////////

//State#1: Welcome with Start Game Button
// transition: Start/Begin Button is Clicked
//State#2: no ship image, random word selected, hidden boxes appear, instructions appear, keyboard is full abled
// transition(letter guess correctly)
//State#2a: clicked keyboard letter disabled, letter added to hidden word
// transition(letter guess wrong)
//State#2b: clicked keyboard letter disabled, message displays wrong letter selected
// State#3: Game In Play
// transition(all letters guessed correct)
//State#4a: Reveal portion of ship, next round
//transition: all words guessed correctly
//State#5: ship build complete, ship flies off, new game button
//transition(new game button clicked > return to State#1: Welcome Start Game)
//transition(10 letters guessed wrong)
//State#4b: Game Over - Play Again Button
//transition(play again button click > return to State#1 Welcome Start Game)

//// Game Setup ////

// function playGame() {
// 	class game {
// 		words = 'DEFAULT';

// 		constructor(words) {
// 			this.words = words;
// 		}
// 	}
// }

// const round1 = function () {
//     return this.word
// }

// const firstWord = new game.words('mountain');

// console.log(firstWord);
////// User Stories  ///////

//// MVP#1: Game Welcome ////
// alert within div that Welcomes player and gives them instructions about how to play game and what to expect

//// MVP#2: Hidden Word to be Guessed ////
// Break one word down into an array of it's numbers

// display the array of number in individual divs with a div containing a "block" that will be visible to cover each letter until they are guessed and will then disappear revealing the number

// start with one word/number length...build from there

// create a class for the hidden word to be guessed with defaults that allows multiple words to be added later

// scale the "word class" to auto size to different word lengths using array[i.length] or something similar

//// MVP #3: Visual Feedback After Guessing Letter ////
// input box where letter is typed with button to the side that when clicked either 1) reveals that correct letter in the word or 2) adds letter to placed div at bottom of screen labeled "Guessed Letters"

// alert displays "You're Right!" for correct letter or "Good Guess." for wrong letter guess.

//// MVP #4: Ship Gets Built If Word Is Completed ////
// create CSS parts of the ship (body, legs, window, jet, doors)

// hide ship parts in divs until round is won, then ship parts will appear

// display "Game Over", "You Won", and "Want To Play Again" prompts

////  Stretch Goals ////
// Provide hints as user gets letters wrong.

// create countdown clock that displays time remaining to guess word...then "Times Up - Game Over"

// Create Multiple levels of greater complexity to build other ships in further rounds of game

// create animation of ship flying away when round is won and ship is built.

//////// Psuedocode ///////////

// // function for welcome() ... includes needed info and instructions.

// function to build ship as word is completed or guessed right

// function to hide letters of word and toggle them on when guess right

// function for guessed letter input box with guess button

// function to add guessed letters to display box

// class with words to guess in array

// class spaceShip

// class hiddenWord or hiddenLetters

// class guessedLetter

// function for playGame
// class hiddenWords
//constructor (array, length)

// const gameSettings
// playerName:
// numOfWordRounds: 5
// numOfShipParts = NumOfWordRounds

// let player =

// // function for each word to be hidden/guessed {
//     //let firstWordArr = [B, E, L, I, E, V, E]
//     // const letter = document.getElementByID("firstWordFirstLetter");
//     // if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }

// //

//////////////////////// Console Spaceman /////////////////////
