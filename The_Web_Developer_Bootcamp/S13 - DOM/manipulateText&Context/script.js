// Select the <p> tag:
var tag = document.querySelector("p");

var ul = document.querySelector("ul");

// //Retrieve the textContent:
// tag.textContent // "Corgi mixes are very adorable!"

// //alter the textContent: 
// tag.textContent = "Corgi mixes are super duper adorable!";

//Alternatively to keep html tags within an element
tag.innerHTML // "Corgi mixes are <strong>very</strong> adorable!"

//alter
tag.innerHTML = "Corgi mixes are <strong>super duper</strong> adorable!"