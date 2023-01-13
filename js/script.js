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
		word: 'STAR',
		hint: 'luminous point in the night sky',
	},
	{
		word: 'GALAXY',
		hint: 'billions of stars held together by gravitational attraction',
	},
	{
		word: 'ROCKET',
		hint: 'projectile that takes personnel and object into space',
	},
	{
		word: 'MOON',
		hint: 'natural satellite of earth, visible by reflected light from sun',
	},
	{
		word: 'SPACESHIP',
		hint: 'artificial body placed in orbit around the earth',
	},
];

const inputBoxes = document.querySelector('.input-boxes');
const playAgainBtn = document.querySelector('.play-again-button');
const hint = document.querySelector('.hint');
const guessesLeft = document.querySelector('.guesses-left');
let message = document.querySelector('.message');
let alphaBtnInput = document.querySelectorAll('.ltr');
let usedLetters = document.querySelector('.used-boxes');
const keyboard = document.getElementById('keyboard');
let img = document.querySelector('.spaceship');
let guessLtrArr = [];

/*----- logic -----*/

initGame();
playGame();

/*----- functions -----*/

function playGame() {
	img.src = 'SpaceXHeavyRocket.png';

	alphaBtnInput.forEach(function (element) {
		element.disabled = false;
	});

	// randomly selected word and hint
	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];

	// randomly selected word from randWordHint
	word = randWordHint.word;

	// number of wrong guesses per word
	maxGuesses = 5;

	// array of correctly guessed ltrs
	guessLtrArr = [];

	// sets state/value of input boxes to empty
	let createBoxesForHiddenWord = '';

	// creates input boxes for each word
	for (let i = 0; i < word.length; i++) {
		createBoxesForHiddenWord += `<input type="text" value='' disabled>`;
	}

	// captures html value of input boxes
	inputBoxes.innerHTML = createBoxesForHiddenWord;

	// creates hint message for current word
	hint.innerText = 'Hint: ' + randWordHint.hint;

	// creates updated guesses left message
	guessesLeft.innerHTML = 'Guesses Left: ' + maxGuesses;

	// instruction message
	message.innerText = 'Select letters to guess the hidden word.';
}

function initGame() {

	// adds event listener to each keyboard key
	keyboard.addEventListener('click', (e) => {

		// adds event target key value
		const buttonValue = e.target.innerHTML;

		// if clicked btn value is a ltr of the word...
		if (word.includes(buttonValue)) {

			// iterate through each ltr of the word...
			for (let i = 0; i < word.length; i++) {

				// if ltr of word equals btn value...
				if (word[i] === buttonValue) {

					// add btn value to input boxes
					inputBoxes.querySelectorAll('input')[i].value = buttonValue;

					// display 'correct guess' message
					message.innerText = 'Letter Correct!';

					// push guessed ltr to guessLtrArr
					guessLtrArr.push(buttonValue);
					if (word.length === guessLtrArr.length) {
						message.innerText = 'Word guessed! You won!';
						alphaBtnInput.forEach(function (element) {
							element.disabled = true;
						});
						img.src = 'spacex-falcon-heavy-launch.gif';
					}
				}
			}
		// if clicked btn value is NOT a ltr of the word...
		} else {
			maxGuesses--;
			guessesLeft.innerText = 'Guesses Left: ' + maxGuesses;
			message.innerText = 'Wrong Letter.';

			if (maxGuesses <= 0) {
				message.innerText = 'Game Over!';
				guessesLeft.innerText = 'Click "Generate Word" to play again.';
				alphaBtnInput.forEach(function (element) {
					element.disabled = true;
				});
				img.src = 'gif-slow-motion-flames-fire-explosion-of-spacex-rocket.gif';
			}
		}
	});
}

/*----- event listeners -----*/

playAgainBtn.addEventListener('click', playGame);
