// Anonymous Func Ex:
// function() {

// }

// () => {

// }




// IIFE (Immediately Invoked Function) Ex:
// (function() {
//     let name = "seth";
//     console.log(name);
// }());




// Recursive Function
// let fact = () => {
//     if (num === 1) {
//         return num;
//     } else {
//         return num * fact(num -1);
//     }
// }

// console.log("final", fact(4));



// High Order Function
// function boilWater(cb) {
//     console.log("I am boiling the water");
//     setTimeout(function () {
//         cb();
//     }, 2000);
// }

// function cutTheChicken() {
//     console.log("I am cutting the chicken");
// }

// function putNoodlesInWater() {
//     console.log("I put the noodles in the water");
// }

// function throwWaterAtDan() {
//     console.log("Dan! Look out!");
// }

// boilWater();
// cutTheChicken();




// Closure Function
// function genGreeting(name) {
//     return function () {
//         console.log("Hello" + name);
//     }
// }

// let kacieGreeting = genGreeting("kacie");

// console.log("I am doing other stuff");

// kacieGreeting();






// JS Practice
// 1. Find String Duplicates

// let findDup = (str) => {
//     let charArr = str.split("");
//     let newArr = [];
//     let dups = [];

//     for (i = 0; i < charArr.length; i++) {
//         if (newArr.includes(charArr[i])) {
//             dups.push(charArr[i])
//         } else {
//             newArr.push(charArr[i])
//         }
//     }
//     return dups;
// }

// console.log(findDup("tomorrow"));






// 2. Find 2 largest nums and add them

// find 2 largest nums and add them stupid
// Solution 1

// let stupid = (arr) => {
//      let fuckIt =  arr.sort((a, b) => { return a - b });
//      let bbc = fuckIt.pop();
//      let smlWht = fuckIt.pop();
//      return bbc + smlWht;
// };

// console.log(stupid([1, 3, 4, 666, 3, 03, 46]));

// Solution 2

// let stupid = (arr) => {
//      let fuckIt =  arr.sort((a, b) => { return a - b });
//      return fuckIt.pop() + fuckIt.pop();
// };

// console.log(stupid([1, 3, 4, 666, 3, 03, 46]));

// Solution 3

// let stupid = (arr) => {
//      let fuckIt =  arr.sort((a, b) => { return a - b });
//      return fuckIt[arr.length - 1] + fuckIt[arr.length - 2];
// };

// console.log(stupid([1, 3, 4, 666, 3, 03, 46]));




// 3. Find Sum of 2 largest and 2 smallest nums

// let stupid = (arr) => {
//      let fuckIt =  arr.sort((a, b) => { return a - b });
// //    return fuckIt.shift() + fuckIt.shift() + fuckIt[arr.pop() + fuckIt.pop();
//    return fuckIt[0] + fuckIt[1] + fuckIt[arr.length - 1] + fuckIt[arr.length - 2]
// };

// console.log(stupid([1, 3, 4, 666, 3, 03, 46]));




// 4. Func defines num as even or odd

// let fetus = (num) => {
//     if (num % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// };

// console.log(fetus(3));

// 5. Reverse string w/o .reverse or .sort

// let butt = (str) => {
//     let poop = [];

//     for (i = 1; i <= str.length; i++) {
//         poop += str[str.length - i];
//     }
//     return poop
// }
// console.log(butt("You smell like butt"));



// 6. Write func that defines if array can be split into 2 equal sums.

// let arr = [10,20,30,5,40,50,40,15];


// 7. Recursive Factorial 

// function factorial(num) {
//     if (num <= 0) {
//         return 1; //After loop completion
//     }
//     else {
//         return (num * factorial(num - 1)) 
//     }
// }
// console.log(factorial(6))

// Call stack "similar to array"

// 8. Get initials

// function getInitials(name) {
//     let initials = "";
//     let waitingForSpace = false;
//     for (var i = 0; i < name.length; i++) {
//         if (!waitingForSpace) {
//             initials += name[i];
//             waitingForSpace = true;
//         }
//         if (name[i] === " ") {
//             waitingForSpace = false;
//         }
//     }
//     return initials;
// }

// console.log(getInitials("John F Kennedy"));

// Second Solution

// function getInitials(name) {
    
//     return name.split(" ")
//     .map((word) => {
//         return word[0];
//     })
//     .join("");
// }

// console.log(getInitials("John F Kennedy"));

// 9. The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.


// function sleep_in (weekday, vacation) {
//   if ( !weekday || vacation) {
//     return true
//   } else {
//     return false
//   }
// }

// sleep_in(false, false) //→ True 
// sleep_in(true, false) //→ False 
// sleep_in(false, true) //→ True

// OR

// function sleep_in(weekday, vacation){
//   return (!weekday || vacation)
// }



// 10. We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. 
// We are in trouble if they are both smiling or if neither of them is smiling. 
// Return True if we are in trouble.

// function monkey_trouble(a_smile, b_smile) {
//     return (a_smile === b_smile)
// }

//monkey_trouble(true, true) //→ True
//monkey_trouble(false, false)// → True
//monkey_trouble(true, false) //→ False



//11. Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// function sum_double(a, b) {
//   let sum = a + b;
//   if(a === b) {
//     return sum * 2
//   } else {
//     return sum
//   }
// }

//sum_double(1, 2) //→ 3
//sum_double(3, 2) //→ 5
//sum_double(2, 2) //→ 8




// 12. Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// function diff21(n) {
//   if(n > 21) {
//     return (n - 21) * 2
//   } else {
//     return 21 - n
//   }
// }

//diff21(21) //→ 2
//diff21(10) //→ 11
//diff21(21) //→ 0

// OR

// function diff21(n) {
//     return n > 21 ? (n - 21)* 2 : 21 - n;
// }

//diff21(21) //→ 2
//diff21(10) //→ 11
//diff21(21) //→ 0



// 13.We have a loud talking parrot. 
// The "hour" parameter is the current hour time in the range 0..23. 
// We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
// Return True if we are in trouble.


// function parrot_trouble(boo,hour) {
//   if (boo && hour < 7 || 20 < hour) {
//     return true
//   } else {
//     return false
//   }
// }


// OR


// function parrot_trouble(boo,hour) {
//   return boo && hour < 7 || 20 < hour;
// }

// parrot_trouble(True, 6) → True
// parrot_trouble(True, 7) → False
// parrot_trouble(False, 6) → False```




// 14. If array reaches 15 print "She fakin"

// var orgasm = 0;
// function sheFakin() {
 
//   while (orgasm < 15) {
//     orgasm++; 
//     console.log("Booty Booty Booty");
//   } 
//     return "She fakin"
// }

// sheFakin();


// 15. Find the longest common prefixes
// function longestCommonPrefix(strs) {
//     if(strs == null || strs.length == 0)
//         return "";
 
//     var minLen=999999999;
//     for(var i=0;i<strs.length;i++){
//         var str = strs[i];
//         if(minLen > str.length)
//             minLen = str.length;
//     }
//     if(minLen == 0) return "";
 
//     for(var j=0; j<minLen; j++){
//         var prev='0';
//         for(var i=0; i<strs.length ;i++){
//             if(i==0) {
//                 prev = strs[i].charAt(j);
//                 continue;
//             }
 
//             if(strs[i].charAt(j) != prev){
//                 return strs[i].substring(0, j);
//             }
//         }
//     }
 
//     return strs[0].substring(0,minLen);
// }
// console.log(longestCommonPrefix(['action', 'actor','active']));

