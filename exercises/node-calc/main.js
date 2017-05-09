var a, b, result;
var userInput;
var add;
var sub;
var mul;
var div;


var askNumber = require("readline-sync");
 userInput = askNumber.question("Enter a number: ");

var askOperator = require("readline-sync");
 userInput = askOperator.question("Add", "Sub", "Mul", "Div");

var askNumber2 = require("readline-sync");
 userInput = askNumber2.question("Enter a number: ");



function addNumbers() {
    var randomVillain = Math.floor((Math.random() * 3) + 1);
    if (randomVillain <= 1) {
        return "Ancient Dragon";
    } else if (randomVillain <= 2) {
        return "Prowler";
    } else {
        return "Mighty Grunt";
    }
};


function sum() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a + b;
    document.getElementById("results").innerHTML = result;
}

function sub() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a - b;
    document.getElementById("results").innerHTML = result;
}

function multiply() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a * b;
    document.getElementById("results").innerHTML = result;
}

function divide() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a / b;
    document.getElementById("results").innerHTML = result;
}

function reset() {
    a = Number(document.getElementById("a").value = "");
    b = Number(document.getElementById("b").value = "");
}
