// alert("js connected");

var age = Number(prompt("How old are you?"));

//if age is negative
if (age < 0) {
  alert("Please enter a positive number");
}

// american drinking age
if (age === 21) {
  alert("Happy Birthday!");
}

// if age is odd
if (age % 2 === 1) {
  alert("You're birthday is odd");
}

// //OR
// if (age % 2 !== 0) {
//   alert("Your age is odd!");
// }

// if age is a perfect square
if (Number.isInteger(Math.sqrt(age))) {
  alert("perfect square!");
}

// //OR
// if (age % Math.sqrt(age) === 0) {
//   alert("your age is a perfect square")
// }
