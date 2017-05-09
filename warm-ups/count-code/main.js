//countCode("aaacodebbb") -> 1 
//countCode("codexxcode") -> 2 
//countCode("cozexxcope") -> 2
//



var string = "aaacodebbb";
var string1 = "codexxcode";
var string2 = "cozexxcope";

function countCode(input, value) {
  var regExp = new RegExp(value, "gi"); /*g global match; find all matches rather than stopping after the first match. i ignores case*/
  return (input.match(regExp) || []).length;
}

console.log(countCode(string, 'code'));
console.log(countCode(string1, 'code'));
console.log(countCode(string2, 'code'));


/jordan/

//var ask = require("readline-sync");
//var str = ask.question("What string would you like me to use?").toLowerCase();
//var result = 0;
//
//codeCount(str);
//
//function codeCount(str) {
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === "c" && str[(i + 1)] === "o" && str[(i + 3)] === "e") {
//            result += 1;
//        }
//    }
//}
//console.log("The word code appears " + result + " times.");
//




// from http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript


//String.prototype.replaceAt = function (index, replacement) {
//    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
//}
//// Returns the number of times "code" appears in a given string, with the 'd' allowed to be any letter
//function countCode(string) {
//    var count = 0;
//    for (var i = 0; i < string.length - 3; i++) {
//        // Get the current substring
//        substr = string.substring(i, i + 4);
//        // Replace the third character with a 'd'
//        substr = substr.replaceAt(2, 'd');
//        if (substr === 'code') {
//            count++;
//        }
//    }
//    return count;
//}
//console.log(countCode("aaacodebbb"));
//console.log(countCode("codexxcode"));
//console.log(countCode("cozexxcope"));