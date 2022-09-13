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
		hint: 'projectile that takes personel and object into space',
	},
	{
		word: 'MOON',
		hint: 'natural satellite of earth, visible by reflected light from sun',
	},
	{
		word: 'SATELLITE',
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

/*----- functions -----*/

function playGame() {
	const guessLtrArr = [];

	alphaBtnInput.forEach(function (element) {
		element.disabled = false;
	});

	img.src = 'SpaceXHeavyRocket.png';

	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];
	word = randWordHint.word;
	maxGuesses = 8;

	let createBoxesForHiddenWord = '';
	for (let i = 0; i < word.length; i++) {
		createBoxesForHiddenWord += `<input type="text" value='' disabled>`;
	}

	inputBoxes.innerHTML = createBoxesForHiddenWord;

	hint.innerText = 'Hint: ' + randWordHint.hint;

	guessesLeft.innerHTML = 'Guesses Left: ' + maxGuesses;

	message.innerText = 'Select letters to guess the hidden word.';

	keyboard.addEventListener('click', (e) => {
		const buttonValue = e.target.innerHTML;

		if (word.includes(buttonValue)) {
			for (let i = 0; i < word.length; i++) {
				if (word[i] === buttonValue) {
					inputBoxes.querySelectorAll('input')[i].value = buttonValue;
					message.innerText = 'Letter Correct!';
					guessLtrArr.push(buttonValue);
					console.log(word.length);
					console.log(guessLtrArr);
					if (word.length === guessLtrArr.length) {
						message.innerText = 'Word guessed! You won!';
						alphaBtnInput.forEach(function (element) {
							element.disabled = true;
						});
						img.src = 'spacex-falcon-heavy-launch.gif';
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
				alphaBtnInput.forEach(function (element) {
					element.disabled = true;
				});
				img.src = 'gif-slow-motion-flames-fire-explosion-of-spacex-rocket.gif';
			}
		}
	});
}
playGame();

/*----- event listeners -----*/

playAgainBtn.addEventListener('click', playGame);
