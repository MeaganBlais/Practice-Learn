var arr = [1,2,3,4,5]

function printReverse(arr) {
  var arrRev = arr.reverse();
  arrRev.forEach(function(item) {
    console.log(item);
  })
}


// //solution given
// function printReverseRefactor(arr) {
//   for(var i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }
// }
