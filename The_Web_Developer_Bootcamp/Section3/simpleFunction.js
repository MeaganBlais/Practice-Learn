// // TRY ON CODEPEN
//
// =========================HTML===============================
//
// <h1>I want big text here</h1>
//
// <ul>
//   <li>Make me a bullet point</li>
//   <li>Make me another bullet point</li>
// </ul>
//
// <button>Make me a button here</button>
//
// ==========================CSS=============================
//
// h1 {
//   color: green;
// }
//
// button {
//   border: 20px solid #34495e;
//   background-color: #3498db;
//   color: green;
// }
//
// ============================JS============================

document.querySelector("button").addEventListener("click", function(){
  document.body.style.background = randColor();
})

function randColor(){
  return '#' + (function co(lor){ return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
                                         [Math.floor(Math.random()*16)])
                                && (lor.length == 6) ? lor : co(lor); })('');
}
