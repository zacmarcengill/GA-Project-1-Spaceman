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
		word: 'MOUNTAIN',
		hint: 'climb the ********',
	},
	{
		word: 'RIVER',
		hint: 'water running between mountains',
	},
	{
		word: 'EVERGREEN',
		hint: 'tree that stays green year-round',
	},
	{ word: 'TROUT', hint: 'fish that lives in cold rivers' },
	{ word: 'CAMPERVAN', hint: '#vanlife' },
];

const inputBoxes = document.querySelector('.input-boxes');
const playAgainBtn = document.querySelector('.play-again-button');
const hint = document.querySelector('.hint');
const guessesLeft = document.querySelector('.guesses-left');
let message = document.querySelector('.message');
let alphaBtnInput = document.querySelectorAll('button');
let usedLetters = document.querySelector('.used-boxes');
const keyboard = document.getElementById('keyboard');

///Try to Create Buttons from Javascript///
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// for (const letter of alphabet) {
// 	let btn = document.createElement('button');
// 	btn.innerHTML = letter;
// 	btn.onclick = function (e) {
// 		letterWasClicked(letter, e.target.innerHTML);
// 	};
// 	document.body.appendChild(btn);
// }
// ;
///Try to Create Buttons from Javascript///

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

playAgainBtn.addEventListener('click', playGame);

/*----- functions -----*/

/////// Generates random word from wordArr above ///////////
function playGame() {
	// line below not working to reset alpha buttons when generating new works (works on A only)
	alphaBtnInput.disabled = false;
	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];
	word = randWordHint.word;
	maxGuesses = 8;
	// console.log(word);

	let changeHTML = '';
	for (let i = 0; i < word.length; i++) {
		changeHTML += `<input type="text" disabled>`;
	}
	inputBoxes.innerHTML = changeHTML;
	//creates hint below hidden word
	hint.innerText = 'Hint: ' + randWordHint.hint;
	guessesLeft.innerHTML = 'Guess Left: ' + maxGuesses;

	message.innerText = 'Select letters from below to guess the hidden word.';

	keyboard.addEventListener('click', (e) => {
		const buttonValue = e.target.innerHTML;
		if (word.includes(buttonValue)) {
			for (let i = 0; i < word.length; i++) {
				//
				if (word[i] === buttonValue) {
					inputBoxes.querySelectorAll('input')[i].value = buttonValue;
					message.innerText = 'Letter Correct!';
				} else {
				}
			}
		} else {
			maxGuesses--;
			guessesLeft.innerText = 'Guess Left: ' + maxGuesses;
			message.innerText = 'Wrong Letter.';

			if (maxGuesses <= 0) {
				message.innerText = 'Game Over!';
				guessesLeft.innerText = 'Click "Generate Word" to play again.';
			}
		}
	});
}
playGame();

//////////Things That Don't Work//////

// - Keyboard Buttons Undisable After "Generate Word" button is pressed.

// - Needs letter guess limit to loose round.

// - Needs messages like "Correct Letter", "Wrong Letter", "You Guess the Word and Built a Part of the Ship", "You Won the Round and Completed the Ship", etc.

// - Make more responsive for iphone to desktop with @media.

// - CSS: Hide Ship with div and reveal ship with correct words.

// - Make it look purtty.
