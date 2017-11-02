// <p id="first" class="special">Hello</p>

var opt1 = document.getElementById("first");
console.log("opt1", opt1);

var opt2 = document.getElementsByClassName("special");
console.log("opt2", opt2);

var opt3 = document.getElementsByTagName("p");
console.log("opt3", opt3);

var opt4 = document.querySelector("#first"); // or ("p") or (".special")
console.log("opt4", opt4);

var opt5 = document.querySelectorAll(".special"); // or ("p") or ("#first")
console.log("opt5", opt5);

var opt6 = document.querySelectorAll("p");
console.log("opt6", opt6);

var opt8 = document.querySelectorAll(".special")[1];
console.log("opt8", opt8);

// opt1 <p id=​"first" class=​"special">​Hello​</p>​
// opt2 (2) [p#first.special, p.special, first: p#first.special]
// opt3 (4) [p#first.special, p.special, p, p#last, first: p#first.special, last: p#last]
// opt4 <p id=​"first" class=​"special">​Hello​</p>​
// opt5 (2) [p#first.special, p.special]
// opt6 (4) [p#first.special, p.special, p, p#last]