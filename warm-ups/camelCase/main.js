/*camelCase Warmup - Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.*/


//function camelCase(str) {
//    var cap = false;
//    str = str.toLowerCase();
//
//    for (i = 0; i < str.length; i++) {
//        if (str[i] === " " ||
//            str[i] === "_" ||
//            str[i] === "-") {
//            var nextLetter = str[i + 1]
//            var uppercaseLetter = nextLetter.toUpperCase();
//            
//            str = str.replace(nextLetter, uppercaseLetter);
//            str = str.replace(" ", "");
//            str = str.replace("_", "");
//            str = str.replace("-", "");
//        }
//    }
//}
//
//camelCase("hello_world good day");


/* Recommended solution */

function camelCase(string) {
    var underscore = "_",
        hyphen = "-",
        space = " ";
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === underscore ||
            string[i] === hyphen ||
            string[i] === space) {
            let char = string[i + 1];
            newString += char.toUpperCase();
            i++;
        } else {
            newString += string[i];
        };
    };
    console.log(newString);
    return;
}
camelCase("free bird_sucks-yep-oh_so-much");
