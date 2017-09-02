// alert("connected");

// set up empty array
var toDos = ["buy food"];

// set up input prompt
var input = prompt("What would you like to do?")



while (input !== "quit") {

  //handle input
  if (input === "list") {
    toDos.forEach(function(toDo) {
      console.log(toDo);
    })
  } else if (input === "new") {
    //ask for new todos
    var newToDo = prompt("Enter new ToDo");
    //add todos array
    toDos.push(newToDo);
  } else if (input === "delete") {
    var index = prompt("Enter index number");
    toDos.splice(index, 1);
    // } else {
    //   prompt("I don't understand. Please see options listed")
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Goodbye!");
