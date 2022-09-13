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
		hint: 'climb the  _ _ _ _ _ _ _ _',
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

/*----- event listeners -----*/

playAgainBtn.addEventListener('click', playGame);

/*----- functions -----*/

///function that disable = false

function playGame() {
	alphaBtnInput.forEach(function (element) {
		element.disabled = false;
	});
	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];
	word = randWordHint.word;
	maxGuesses = 8;

	const guessLtrArr = [];

	//Creates Empty Input Boxes for Hidden Word//
	let createBoxesForHiddenWord = '';
	for (let i = 0; i < word.length; i++) {
		createBoxesForHiddenWord += `<input type="text" value='' disabled>`;
	}

	// const emptyBoxes = document.querySelector('hidden-word-container');

	// console.log(word.split(''));
	// console.log(inputBoxes.value);

	//function check for empty input boxes...if any box is equal to empty string..game goes on.

	//when letter clicked, create string from input boxes then iterate through input box string, checking for empty box strings. If no empty strings game is won.

	inputBoxes.innerHTML = createBoxesForHiddenWord;

	hint.innerText = 'Hint: ' + randWordHint.hint;

	guessesLeft.innerHTML = 'Guesses Left: ' + maxGuesses;

	message.innerText = 'Select letters from below to guess the hidden word.';

	keyboard.addEventListener('click', (e) => {
		const buttonValue = e.target.innerHTML;

		if (word.includes(buttonValue)) {
			for (let i = 0; i < word.length; i++) {
				if (word[i] === buttonValue) {
					inputBoxes.querySelectorAll('input')[i].value = buttonValue;
					message.innerText =
						'You selected ' + buttonValue + '. Letter Correct!';
					guessLtrArr.push(buttonValue);
					console.log(guessLtrArr);
					if (word.length === guessLtrArr.length) {
						message.innerText = 'Word guessed! You won!';
					}
				}
			}
		} else {
			maxGuesses--;
			guessesLeft.innerText = 'Guesses Left: ' + maxGuesses;
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

// - Make more responsive for iphone to desktop with @media.

// - CSS: Hide Ship with div and reveal ship with correct words.

// - Make it look purtty.
