var readline = require("readline-sync");
var sum = require("./add");
var sub = require("./sub");
var mul = require("./mul");
var div = require("./div");
var exp = require("./div");

var a = readline.question("Enter a number: ");
var b = readline.question("Enter a number: ");
var operations = readline.question("Add Sub Mul Div Exp ").toLowerCase();

var result = "Result: ";

if (operations === "add") {
    console.log(result + sum(a, b))
} else if (operations === "sub") {
    console.log(result + sub(a, b))
} else if (operations === "mul") {
    console.log(result + mul(a, b))
} else if (operations === "div") {
    console.log(result + div(a, b))
} else if (operations === "exp") {
    console.log(result + exp(a, b))
};
