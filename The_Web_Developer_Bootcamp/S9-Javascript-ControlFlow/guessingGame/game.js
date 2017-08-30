// alert("js is connected");

//create secretNumber
var secretNumber = 4;

// ask user for Guess
var stringGuess = prompt("Please guess a number");
var guess = Number(stringGuess);

//check guess
if (guess === secretNumber) {
  alert("You guessed right!")
} else if (guess < secretNumber) {
  alert("Too low. Guess again.")
// } else if (guess > secretNumber) {
//   alert("Too high. Guess again.")
} else {
  alert("Too high. Guess again.")
}

while (guess !== secretNumber)
