// alert("javascript is connect")

// function isEven(num) {
//   if (num % 2 === 0) {
//      return true;
//    } return false;
//  }

 function isEven(num) {
   return num % 2 === 0
  }

//factorial 4 = 4*3*2*1
function factorial(num) {
  //define a variable for results
  var result = 1
  //calculate factorial and store value in results
  for(var i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

//kebabToSnake
function kebabToSnake(str) {
  //replace all '-' with '_'
  var newStr = str.replace(/-/g , "_");
  //return str
  return newStr;
}

function sing(){
  console.log("twinkle twinkle ...");
  console.log("how I wonder ...");
}

// Do these in console
// setInterval(sing, 1000);

// setInterval(function() {
//   console.log("I am an anonymous function");
//   console.log("this is awesome ...")
// }, 2000);
