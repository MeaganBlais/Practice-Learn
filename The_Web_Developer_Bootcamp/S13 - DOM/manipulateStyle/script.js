// SELECT
var tag = document.getElementById("first");

// MANIPULATE
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.fontSize = "70px";
// tag.style.background = "yellow";
// tag.style.maginTop = "200px";

var p = document.querySelector("p")

// ADD A CLASS TO SELECTED ELEMENT
p.classList.add("big");
console.log("add");

// REMOVE A CLASS
p.classList.remove("big");
console.log("remove");

// TOGGLE A CLASS
p.classList.toggle("big");
console.log("toggle");
