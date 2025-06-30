const userInput = document.getElementById("guessField")
const submit = document.getElementById("subt")
const lastGuess = document.querySelector(".prevGuesses")
const guessRemainingEle = document.querySelector(".guesses")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let playGame = true

let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessRemaining = parseInt(guessRemainingEle.textContent)

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number')   
    } else if(guess < 1 || guess > 100) {
        alert('Please enter a number in range 1 and 100')   
    } else {
        prevGuess.push(guess)
        displayGuess(guess)
        if(guessRemaining != 0) {
            checkGuess(guess)
        } else {
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame()
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage("You have guessed it correct");
        endGame();
    } else if(guess < randomNumber) {
        displayMessage("Number is TOOO low");
    } else if(guess > randomNumber) {
        displayMessage("Number is TOOO High");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    lastGuess.innerHTML += `${guess}, `;
    guessRemainingEle.innerHTML = `${--guessRemaining}`
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    lastGuess.innerHTML = '';
    guessRemaining = 10
    guessRemainingEle.innerHTML = '10';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    lowOrHigh.innerHTML = ''
    playGame = true;
  });
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}