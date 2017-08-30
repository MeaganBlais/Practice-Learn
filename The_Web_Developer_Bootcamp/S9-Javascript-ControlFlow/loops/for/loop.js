// alert("js is connected")

// // print all numbers between -10 and 19
for (i = -10; i <= 19; i++) {
  console.log(i);
}

// print all even numbers between 10 and 40
console.log("Take2")

for (i = 10; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//print all odd numbers between 300 and 333
console.log("Take3")

for (i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Take4")

for (i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
