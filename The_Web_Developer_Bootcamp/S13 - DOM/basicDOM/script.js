var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function() {
  console.log("body",body);  //MANIPULATE
  if (isBlue) {
    body.style.background = "white";
  } else {
    body.style.background = newFunction();
  }
  isBlue = !isBlue;
}, 1000);
function newFunction() {
    return "#3498db";
}
