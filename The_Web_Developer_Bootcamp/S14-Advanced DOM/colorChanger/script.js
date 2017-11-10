// alert("JS is connected")

var button = document.querySelector("button");
var body = document.querySelector("body");
// var isPurple = false;

button.addEventListener("click", changeColor)

function changeColor() {
  // // alert("clicked");
  // if (isPurple) {
  //   document.body.style.background = "white";
  // } else {
  //   document.body.style.background = "purple";
  // }
  // isPurple = !isPurple;

  document.body.classList.toggle("purple");
  
};