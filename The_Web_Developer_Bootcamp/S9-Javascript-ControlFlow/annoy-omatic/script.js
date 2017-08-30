// alert("js is connected");

//Ask the user "Are we there yet"
var response = prompt("Are we there yet?")

//Keep asking again and again until they enter "yes" or "yeah"

while (response.indexOf("yes") === -1 && response !== "yeah") {
  var response = prompt("Are we there yet?")
}

// if (response === "yes" || response === "yeah") {
  alert("Yippee!!! Finally.")
// }

//Then alert "Yay, we finally made it!"
