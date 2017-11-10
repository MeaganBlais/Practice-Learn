var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var p1View = document.querySelector("#p1s");
var p2View = document.getElementById("p2s");
var input = document.querySelector("input[type=number]")
var winningScoreDisplay = document.querySelector("p span")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      p1View.classList.add("winner");
      gameOver = true;
    }
    p1View.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2View.classList.add("winner");
      gameOver = true;
    }
    p2View.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1View.textContent = 0;
  p2View.textContent = 0;
  p1View.classList.remove("winner");
  p2View.classList.remove("winner");
  gameOver = false;
})

input.addEventListener("change", function() {
  winningScoreDisplay.textContent = input.value;
  winningScore = Number(input.value);
})