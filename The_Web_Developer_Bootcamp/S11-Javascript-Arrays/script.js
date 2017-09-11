//*** REVERSE ARRAY ***
function printReverse(arr) {
  var arrRev = arr.reverse();
  arrRev.forEach(function(item) {
    console.log(item);
  })
}

printReverse([1, 2, 3, 4, 5])

//*** CHECK TO SEE IF ALL VALUES IN ARRAY ARE SAME***
function isUniform(arr) {
  var first = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== first) {
      console.log(false);
    }
  }
  console.log(true);
}

isUniform([1, 1, 1, 1]);
isUniform([1, 1, 2, 1]);

//*** SUM OF ARRAY VALUES***
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}

sumArray([1,2,3]);
sumArray([10,52,83]);
sumArray([-10,20,3]);

//*** MAX OF ARRAY VALUES***
function max(arr) {
  // var num = Number(arr);
  var maxNum = Math.max(...arr);
  console.log(maxNum);
}

max([1, 2, 3]);
max([100, 30, 76]);
max([17, -30, 65]);
