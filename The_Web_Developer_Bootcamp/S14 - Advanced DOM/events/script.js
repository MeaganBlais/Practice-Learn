var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENSER
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});

var h1 = document.querySelector("h1");

h1.addEventListener("click", function() {
  alert("h1 was clicked!");
});

var ul = document.querySelector("ul");

ul.addEventListener("click", function() {
  console.log("You clicked the ul")
});

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  })
}

// NAME A FUNCTION AND PASS AS 2ND ARGUMENT -- good for functions that will be used more than once
var h1Color = document.querySelector("h1");

h1Color.addEventListener("click", changeColor)

function changeColor() {
  h1Color.style.background = "orange";
};