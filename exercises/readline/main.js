/* Readline String Manipulation */

//var string = "Hello, my name is Seth. ";
//var string1 = "Help me get to know you! ";
//var capLock = string1.toUpperCase();
//console.log(string + capLock);
//
//
//function halfString(input) {
//    if (input.length <= 20) {
//        return input + input;
//    } else if (input.length > 20) {
//        var halfString1 = input.length / 2;
//        return input.substr(0, halfString1);
//    }
//}
//
var readline = require("readline-sync");
//
//var userName = readline.question("May I have your name? ");
//var userNameCaps = userName.toUpperCase();
//console.log("Hi " + userNameCaps + "!");
//
//
//var userString = readline.question("What do you like about your favorite band?");
//
//var stringLength = userString.length;
//console.log(halfString(userString) + "\n" + "String length: " + stringLength);
//
//var printStringFrom = readline.question(`Where would you like to begin typing from? Pick a number between 1 and  ${stringLength}\n`);
//console.log(userString.substr(printStringFrom, stringLength));

/* Js Calc Node */

const operations = ["Add", "Sub", "Mul", "Div"];


function add(a, b) {
    var leftOperand = parseInt(a);
    var rightOperand = parseInt(b);
    return leftOperand + rightOperand;
}


function sub(a, b) {
    var leftOperand = parseInt(a);
    var rightOperand = parseInt(b);
    return leftOperand - rightOperand;
}


function mul(a, b) {
    var leftOperand = parseInt(a);
    var rightOperand = parseInt(b);
    return leftOperand * rightOperand;
}


function div(a, b) {
    var leftOperand = parseInt(a);
    var rightOperand = parseInt(b);
    return leftOperand / rightOperand;
}


var index = readline.keyInSelect(operations, "Welcome to the calculator. Choose betwen one of the following operations.");
userCalcRequest = operations[index];

if (userCalcRequest === "Add") {
    var num1 = readline.question("Choose a number to add ");
    var num2 = readline.question("Choose another number to add ");
    console.log(add(num1, num2));
    
} else if (userCalcRequest === "Sub") {
    var subNum1 = readline.question("Choose a number to subtract from ");
    var subNum2 = readline.question("Choose the number to be subtracted ");
    console.log(sub(subNum1, subNum2));
   
} else if (userCalcRequest === "Mul") {
    var mulNum1 = readline.question("Choose a number to multiple ");
    var mulNum2 = readline.question("Choose another number to multiple ");
    console.log(mul(mulNum1, mulNum2));
    
} else if (userCalcRequest === "Div") {
    var divNum1 = readline.question("Choose a number to be divided ");
    var divNum2 = readline.question("Choose another number for the first number to be divided by ");
    console.log(div(divNum1, divNum2));

};





/*Caesar Cipher Anti-Caps Warm-up */

//
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));

//function CaesarCipher() {
//
//    input = '';
//    shift = 0;
//
//    for (var i = 0; i < input.length; i++) {
//        shift = (input[i].charCodeAt()) + shift;
//        input += String.fromCharCode(shift);
//    }
//    return input;
//
//}
//
//console.log(CaesarCipher(input));
