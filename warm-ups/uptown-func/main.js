/* uptown-function Question 1 */

var lyrics =  ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function printString(input) {
    var inputLyrics = [];
    for (var i = 0; i < input.length; i++) {
        inputLyrics.push(input[i] + " ");
    }
    return inputLyrics;
}

console.log(printString(lyrics));


/* Question 2 */

function printString(input) {
    var inputLyrics = [];
    for (var i = 0; i < input.length; i++) {
        inputLyrics.push(input[i] + " ");
    }
    return inputLyrics;
}
function reverseLyrics(input1) {
      return lyrics.reverse().join(" ");
}

console.log(reverseLyrics(lyrics));
//


/* Question 2 - Jordans Answer */
//
// var lyrics =  ["This", "hit", "that", "ice", "cold",  
//              "Michelle", "Pfeiffer", "that", "white", 
//              "gold", "This", "one", "for", "them", 
//              "hood", "girls", "Them", "good", "girls", 
//              "straight", "masterpieces", "Stylin'", 
//              "whilen'", "livin'", "it", "up", "in", 
//              "the", "city", "Got", "Chucks", "on", 
//              "with", "Saint", "Laurent", "Gotta", "kiss", 
//              "myself", "I'm", "so", "pretty"];
//function myFunc() {
//    return lyrics.join(" ");
//    
//}
//console.log(myFunc());
////
// function myFunc() {
//     var newWord = "";
//     for (var i = 0; i < lyrics.length; i++) {
//         var letsPrint = lyrics [i];
//         newWord = letsPrint + " " + newWord;
//         console.log(newWord);
//     }
//    return newWord;
//    
//}
//console.log(myFunc());
//
/* Question 2 - Dustins Answer */
//
//function myFunc(lyrics) {
//    return lyrics.reverse().join(" ");
//}
//console.log(myFunc(lyrics));
////
///* Question 3 - Jordans Answer */
//    functions myFunc(lyrics) {
//        var printOut = " ";
//        for ( var i = 0; i < lyrics.length; i++;) {
//            var newLyric = lyrics [i];
//            if (i % 2 === 0) {
//                printOut += " " + newLyric;
//            }
//        }
//        return printOut;
//    }
////

/* Question 3 - Mikes Answer */
//functions myFunc(lyrics) {
//    var printOut = " ";
//    for ( var i = 0; i < lyrics.length; i+= 2;) {
//        var newLyric = lyrics [i];
//            printOut += " " + newLyric;
//        }
//    }
//    return printOut;
//}
//console.log(myFunc(lyrics));
////
///* Question 3 Dustins Answer */
//
//functions myFunc(lyrics) {
//    var arr = [];
//    for ( var i = 0; i < lyrics.length; i += 2;) {
//        arr.push(lyrics[i]);
//    }
//    return arr.join(" ");
//}
//console.log(myFunc(lyrics));
////
///* Option Challenge Mike */
//functions myFunc(lyrics) {
//    var arr = [];
//    for ( var i = 0; i < lyrics.length; i += 2;) {
//       process.stdout.write(lyrics [i+1] + " " + lyrics[i] + " ");
//    }
//}
//console.log(myFunc(lyrics));
/* Option Challenge Jordan */

//function myFunc(lyrics) {
//    var printOut = "";
//    for ( var i = 0; i < lyrics.length; i++) {
//        var newLyric = lyrics[i];
//        var reverseOrder = lyrics[i + 1];
//        if (i % 2 === 0) {
//            printOut += " " + reverseOrder + " " + newLyrics;
//        }
//    }
//    return printOut;
//}
//console.log(myFunc(lyrics));
//
















