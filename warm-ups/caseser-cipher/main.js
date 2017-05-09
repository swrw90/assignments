var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var readline = require('readline-sync');
var input = readline.question("What phrase would you like to encrypt? ");
var shift = parseInt(readline.question("How many letters would you like to shift?"));

function caesarShift(input, shift) {
    var result = "";
    for (var i = 0; i < input.length; i++) {                         
        result += alphabet[(alphabet.indexOf(input[i]) + shift + 26) % 26];
    }
    return result;
}
console.log(caesarShift(input, shift));








/*Tolby*/
//
//var alphabet "abcdefghijklmnopqrstuvwxyz".split("");
//var currentLetter = ""
//for (var i = 0; i <= input.length; i++){
//    currentLetter = input.charAt(i);
//    newLetter = String.fromCharCode(currentLetter.charCodeAt() + shift);
//    console.log(newLetter); 
//}
//    /*Mike*/
//    
//    var result = "";
//    for loop 
//    var charcode = input[i].charCodeAt();
//    if (charcode > "a".charCodeAt() && charcode < "z" .charCodeAt()) {
//        charcode += shift;
//    }
//    if (charcode > "z".charCodeAt()) {
//        charcode -= 26;
//    }
//    result += String.fromCharCode(charcode);
//}
//console.log(result);
//    
//
//
//var readline = require('readline-sync');
//var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
//var shift = parseInt(readline.question('How many letters would you like to shift? '));
//
//
//
//function CaesarCipher(str, num) {
//    
//     input = '';
//     shift = 0;
//
//    for (var i = 0; i < str.length; i++) {
//        shift = (str[i].charCodeAt()) + num;
//        result += String.fromCharCode(shift);
//    }
//    return result;
//
//}
//                               
//console.log(CaesarCipher('Words', 2));
//
//
