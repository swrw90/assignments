function numberFunction(num1, num2){
    if (num1 < num2){
        console.log(num1);
    }else if (num1 === num2){
        console.log('They are the same')
    } else {
        console.log(num2);
    }
} 

numberFunction(24,33)

function monkeyTrouble(aSmile, bSmile){
    
    if (bSmile === aSmile){
        console.log("true");
    } else {
    console.log("false");
}
}

function monkeyTrouble(aSmile, bSmile){
    console.log(bSmile === aSmile);
}

monkeyTrouble(true, true); 
monkeyTrouble(false, false);
monkeyTrouble(true, false);

var readlineSync = require('readline-sync')

function giveDate(input) {
var n1 = readlineSync.question("\nEnter the time of day: ");
    
    if (input < 12) {
        console.log("Good morning!")
    } else if (n1 > 11 && n1 < 18) {
        console.log("Good afternoon!")
    } else if (n1 > 17 && n1 < 24) {
        console.log("Good evening!\n")
    } else {
        console.log("Invalid Number")
    }
}
giveDate(9);
