let min = 1,
  max = 10,
  winningNum = getWinningNum(),
  guessesLeft = 3;


// Get winning number
function getWinningNum() {
  return Math.floor((Math.random()) * (max - min + 1) + min)
}

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector(".message"),
  guessInput = document.querySelector("#guess-input");

// Assign min max to the UI elements
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', (e) => {
  if (e.target.className == 'play-again')
    window.location.reload();
})
// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  // Validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
    return;
  }

  // Check if won
  if (guess == winningNum) {
    // Game Over won
    // Disable the input
    guessInput.disabled = true;
    setMessage("You WON, the number was " + winningNum, "green");
    guessBtn.value = 'Play Again';
    guessBtn.className = 'play-again';
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over lost
      guessInput.disabled = true;
      setMessage(`Game Over, you lost. The number was ${winningNum}`, "red");
      guessBtn.value = 'Play Again';
      guessBtn.className = 'play-again';
    } else {
      // Game Continues - Wrong Answer
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
      guessInput.value = '';
    }
  }
});

// setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;
}
