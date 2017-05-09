var alphabet = "abcdefghijklmnopqrstuvwxyz";
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];

function printString(people, alphabet) {
    var names = []; 
    for (var i = 0; i < people.length; i++) {
        names.push(people[i] + ":");
        for (var j = 0; j < alphabet.length; j++) {
            var capAlpha = alphabet.toUpperCase();
            names.push(capAlpha[j]); 
        }
    } 
    return names; 
}

console.log(printString(people, alphabet));



//
//function printAlphabet(input) {
//    var alphaString = [];
//    for (var i = 0; i < input.length; i++) {
//        alphaString.push(input[i]);
//    }
//    return alphaString;
//}
//
//console.log(printAlphabet(alphabet));
//
//function printPeople(input1) {
//    var peopleString = [];
//    for (var i = 0; i < input1.length; i++) {
//        peopleString.push(input1[i]);
//    }
//    return peopleString;
//}
//
//console.log(printPeople(people));



