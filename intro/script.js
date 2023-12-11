/*
It's a trap !
*/

console.log("Original title " + document.title);
document.title = "Modifying the DOM";
console.log("New title " + document.title);

document.body.style.backgroundColor = "#FF69B4";
console.log(document.body.children);