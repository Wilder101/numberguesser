//   GAME RULES:
// - Player must guess a number between a min and max
// - Player gets a certain number of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if lose
// - Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessLeft = 3;
    
// UI elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener("click", function(){

    let guess = parseInt(guessInput.value);

    // Validate input
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }

    // Check if won
    if(guess === winningNum){
        // Game over - won

        // // Disable input
        // guessInput.disabled = true;

        // // Change border color
        // guessInput.style.borderColor = "green";

        // // Set message
        // setMessage(`${winningNum} is correct. YOU WIN!`, "green");

        gameOver(true, `${winningNum} is correct. YOU WIN!`);

    } else {

        // Wrong number
        guessLeft -= 1;

        // Check if any guesses remain
        if(guessLeft === 0){

            // Game over - lost

            // // Disable input
            // guessInput.disabled = true;

            // // Change border color
            // guessInput.style.borderColor = "red";

            // // Set message
            // setMessage(`Game Over. You lost. The correct number was ${winningNum}`, "red");

            gameOver(false, `Game Over. You lost. The correct number was ${winningNum}`)

        } else {

            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = "red";

            // Clear input
            guessInput.value = "";

            // Inform user of wrong number
            setMessage(`${guess} is not correct. ${guessLeft} guesses left`, "red");
        }
    }
});

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Game over
function gameOver(won, msg){

    let color;
    won === true ? color = "green" : color = "red";

    // Disable input
    guessInput.disabled = true;

    // Change border color
    guessInput.style.borderColor = color;

    // Set text color
    message.style.color = color;

    // Set message
    setMessage(msg, color);
}
