// alert("connected");

// set up empty array
var toDos = ["buy food"];

// set up input prompt
var input = prompt("What would you like to do?")

while (input !== "quit") {

  //handle input
  if (input === "list") {
    listToDos();
  } else if (input === "new") {
    addToDo();
  } else if (input === "delete") {
    deleteToDo();
    // } else {
    //   prompt("I don't understand. Please see options listed")
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("Goodbye!");

function listToDos() {
  toDos.forEach(function(toDo, i) {
    console.log(i + ": " + toDo);
  })
}

function addToDo() {
  //ask for new todos
  var newToDo = prompt("Enter new ToDo");
  //add todos array
  toDos.push(newToDo);
}

function deleteToDo() {
  var index = prompt("Enter index number");
  //delete toDo
  toDos.splice(index, 1);
}
