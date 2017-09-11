var arr1 = [1,2,3];
var arr2 = [10,52,83];
var arr3 = [-10,20,3];

// MY ORIGINAL WORK
// function sumArray(total, arrNum) {
//   return total + arrNum;
//
// }
//
// var result = arr1.reduce(function(total, arrNum) {
//   return total + arrNum;
// })

// //MY REFACTORED WORK
// function sumArray(arr) {
//   arr.reduce(function(total, arrNum) {
//     return total + arrNum;
//   })
//   console.log(result);
// }



//GIVEN SOLUTION
function sumArray(arr) {
  var total = 0;
  arr.forEach(function(element) {
    total += element;
  });
  return total;
}
