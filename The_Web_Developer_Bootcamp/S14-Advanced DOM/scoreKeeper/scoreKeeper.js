var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1View = document.querySelector("#p1s");
var p2View = document.getElementById("p2s")
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;



p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
      gameOver = true;
    }
    p1View.textContent = p1Score;
  }
  
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
    }
    p2View.textContent = p2Score;

  }

});