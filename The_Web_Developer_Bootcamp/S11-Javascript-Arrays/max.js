var arr1 = [1, 2, 3];
var arr2 = [100, 30, 76];
var arr3 = [17, -30, 65];

function max(arr) {
  // var num = Number(arr);
  var maxNum = Math.max(...arr);
  console.log(maxNum);
}


// //Solution Given:
// function max(arr){
//   var max = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
