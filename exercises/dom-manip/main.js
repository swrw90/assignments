var header = document.getElementById("header");
header.addEventListener("click", function ()) {
    console.log("hey there");
}
var header = document.getElementById("header");
var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Hello");
h1.appendChild(h1);

header.innerHTML = "<h1>Hello</h1><p>This is some <strong>paragraph </strong>text</p>";

var header = document.getElementById("header");
header.textContent = ?
    
var input = document.getElementById("input");
var button = docuument.getElementById("button").addEventListener("click", function() {
    input.value = "lol you got hacked";
});

/* Example of what not to do
var inputValue= document.getElementById("input").value;
var button = docuument.getElementById("button").addEventListener("click", function() {
    console.log(inputValue); */

var inputValue = document.getElementById("input").value;
var button = document.getElementById("button").addEventListener("click", function() {
    input.value = "lol you got hacked";
});

// .addEventListener ("mouseover, mouseenter, mouseleave, click)