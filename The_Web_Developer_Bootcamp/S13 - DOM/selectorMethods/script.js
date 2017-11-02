var tag = document.getElementById("highlight");

var tags = document.getElementsByClassName("bolded");
console.log("tags", tags[0]);
// doesn't work since this is a node list and not an array??

var tags = document.getElementsByTagName("li");
console.log("tags2", tags)

var tag = document.querySelector("#highlight");
console.log("tag-className", tag);

// doesn't work since there is more than one
var tag = document.querySelector(".bolded");
console.log("tag-ID", tag);

var tag = document.querySelectorAll(".bolded");
console.log("tag-IDs", tag);

var lis = document.querySelectorAll("li");
console.log("li", lis);
