//check to see if all elements of an array are identical

var arr1 = [1, 1, 1, 1];
var arr2 = [1, 1, 2, 1];

function isUniform(arr) {
  var first = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}



// //doesn't work ... problem with return statement
// function isUniform(arr) {
//   arr.forEach(function(i) {
//     if (arr[0] === i) {
//       return true;
//       console.log('true');
//     }
//     // console.log('1',i);
//     // console.log('2',arr[2]);
//   })
// }
