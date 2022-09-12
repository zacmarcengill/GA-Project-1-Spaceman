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
let alphaBtnInput = document.querySelector('button');
let usedLetters = document.getElementById('.used-boxes');
const keyboard = document.getElementById('keyboard');

/////// logs on screen keyboard Letters when clicked //////

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

playAgainBtn.addEventListener('click', playGame);

/*----- functions -----*/

/////// Generates random word from wordArr above ///////////
function playGame() {
	// line below not working to reset alpha buttons when generating new works
	alphaBtnInput.disabled = false;
	let randWordHint = wordArr[Math.floor(Math.random() * wordArr.length)];
	let word = randWordHint.word;
	// console.log(word);

	let changeHTML = '';
	for (let i = 0; i < word.length; i++) {
		changeHTML += `<input type="text" disabled>`;
	}
	inputBoxes.innerHTML = changeHTML;
	//creates hint below hidden word
	hint.innerText = 'Hint: ' + randWordHint.hint;

	keyboard.addEventListener('click', (e) => {
		const buttonValue = e.target.innerHTML;
		if (word.includes(buttonValue)) {
			for (let i = 0; i < word.length; i++) {
				if (word[i] === buttonValue) {
					inputBoxes.querySelectorAll('input')[i].value = buttonValue;
				}
			}
		} else {
			//
		}
		console.log(e.target.innerHTML);
		// console.log(word);
	});
}
// playGame();

//////////Things That Don't Work//////

// - Keyboard Buttons Undisable After "Generate Word" button is pressed.

// - Needs letter guess limit to loose round.

// - Needs messages like "Correct Letter", "Wrong Letter", "You Guess the Word and Built a Part of the Ship", "You Won the Round and Completed the Ship", etc.

// - Make more responsive for iphone to desktop with @media.

// - CSS: Hide Ship with div and reveal ship with correct words.

// - Make it look purtty.
