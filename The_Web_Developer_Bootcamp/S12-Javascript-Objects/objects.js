// alert('JS connected')
var someObject = {};

someObject._name = 'Hedwig';

someObject.age = 6;

var prop = "color"
someObject[prop] = "red ";

// // incorrect ... cannot use dot notation when key starts with a number
// someObject.123 = true;

someObject[123] = true;


var diffObject = {
  friends: [
    {name: "Malfoy"},
    {name: "Crabbe"},
    {name: "Goyle"}
  ],
  color: "baby blue",
  isEvil: true
};

// to access "Malfoy" you may type:
// diffObject.friends[0].name

var movie = [
  {
    title: "In Bruges",
    rating: 5,
    seen: true
  },
  {
    title: "Frozen",
    rating: 4.5,
    seen: false
  },
  {
    title: "Mad Max Fury Road",
    rating: 5,
    seen: true
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    seen: false
  }
]

// function movieStuff(arr) {
//   for (var i = 0; i <= arr.length; i++) {
//     if (movie[i].seen) {
//       console.log("You have watched \"" + movie[i].title + "\"" + " - " + movie[i].rating + " stars")
//     // } else if (movies[i].seen === false) {
//     } else {
//       console.log("You have not seen \"" + title + " \"" + " - " + rating + "stars")
//     }
//   }
// }
// movieStuff(movie)

//SOLUTION
// movie.forEach(function(movie) {
//   var result = "You have ";
//   if(movie.seen) {
//     result += "watched ";
//   } else {
//     result += "not seen "
//   }
//   result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars"
//   console.log(result);
// })

//SOLUTION REFACTORED --- original solution ends with an error so this is definitely a cleaner approach
function buildString(movie) {
  var result = "You have ";
  if(movie.seen) {
    result += "watched ";
  } else {
    result += "not seen "
  }
  result += "\"" + movie.title + "\"" + " - " + movie.rating + " stars"
  return result;
}

movie.forEach(function(movie) {
  console.log(buildString(movie));
});
