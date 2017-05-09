function doStuff() {
    var userInput = document.getElementById("textBox").value;

    for (var i = 0; i < userInput.length; i++) {
        console.log(userInput[i]);
    }
}
/*
function first(input) {
    for (var i = 0; < input.length; i++) {
    console.log(input[i]);
    }
}

first("Some string")
*/


/*

function first(input) {
    for (var i = 0; < input.length; i++) {
    console.log(input[i]);
    
if (input [i] === "a") {
console.log(input[i]);

}

first("Second string")

*/


function doThings(input, char) {

    var didFindLetter = false

    for (var i = 0; i < input.length; i++) {
        if (input[i] === char) {
            didFindLetter = true;
            console.log(i);
        }
    }
    if (didFindLetter === false) {
        console.log("Character is not found!")
    }
}

doThings("seth", "e");

/* 
functions second(input, char) {
for (var i = 0; i < input.length; i++) {
if (input [i] === char) {
console.log(i);
break;
}
}
}

second("This is another string", "a")
*/


function findNumber(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === 42) {
            return
        }
    }
    console.log("Did not find 42");
}

findNumber([1, 2, 3, 42]);

/*
function third(nums) {
for (var i = 0; i < nums.length; i++) {
if (nums[i] === 42) {
console.log("Found 42");
return;
}
}
console.log("sorry no 42);
}
third([1, 2, 3, 4])
*/


function findSmallestNumber(input) {
    var sortedNumbers = input.sort(/*function(a, b)*/)
    /*return a - b */
    console.log(sortedNumbers[0])

}

findSmallestNumber([10, 9, 8, 7, 6, 0, 2, 3, 4, 5])

/*
function fourth(nums) {
for (var i = 0; i < nums.lenth; i++) {
var currentNum = nums[i];
function checkNum(num) {
return num >= currentNum;
}
if (nums.every(checkNum)) {
console.log("smallest number in the array is" + currentNum)
return;
}
}
}

fourth ([1, 2, 3, 4, 5, 6, 7, 8, 9, ,0]);
*/

/*
function fourth(input) {

var lowestNum = Math.POSITIVE_INFINITY;
input.forEach (function(val) {
lowestNum = Math.min (lowestNum, val);
});
console.log(lowestNum);
}
*/

/*
function fourth(input) {

var lowestNum = input[0];
for (var i = 0; i < input.length; i++) {
lowestNum = Math.min(lowestNum, nums[i]);
console.log(lowestNum);
console.log(nums[i]);
}
console.log("the smallest number is " + lowestNum);
}
