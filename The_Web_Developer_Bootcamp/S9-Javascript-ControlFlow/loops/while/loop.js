// alert("js is connected")

// // print all numbers between -10 and 19
var num = -10

while (num <= 19) {
  console.log(num);
  num++;
}

// print all even numbers between 10 and 40
console.log("Take2")
var num = 10

while (num <= 40) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}

//print all odd numbers between 300 and 333
console.log("Take3")
var num = 300

while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Take4")
var num = 5

while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num);
  }
  num++;
}
