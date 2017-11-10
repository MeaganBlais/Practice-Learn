var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("#p2");
var p1View = document.querySelector("p1s");
var p2View = document.getElementById("p2s")
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function() {
  p1Score++;
  p1View.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
  p2Score++;
  p2View.textContent = p2Score;
});