const random = Math.round(Math.random() * 100 + 1);
// console.log(random);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const stratOver = document.querySelector(".resultParse");

const p = document.createElement("p");

const prevGuess = [];
let attempts = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log('value', userInput.value);
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("pls enter a valid number");
  }
  if (guess < 1 || guess > 100) {
    alert("pls enter a valid number");
  } else {
    prevGuess.push(guess);
    if (attempts === 11) {
      displayGuess(guess);
      displayMsg(`Game over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMsg("You guessed it write");
    endGame();
  }
  if (guess < random) {
    displayMsg("Number is low");
  }
  if (guess > random) {
    displayMsg("Number is high");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  attempts++;
  remaining.innerHTML = `${11 - attempts}`;
}
function displayMsg(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(guess) {}
function endGame(guess) {}
