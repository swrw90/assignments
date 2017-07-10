// var donations = [100, 4000, 3000, 50];

/*takes the first value "100" and performs operator between it and the next value. Then loops and repeats*/
// var sum = donations.reduce(function (runningTotal, currentVal){
// return runningTotal + currentVal;
// }/*, 1000000 */); /*optional second parameter is initial value, default is 0*/

// console.log(sum);

// function finds the product using reduce method which will multiply the first value of the array by the next and loop until OfflineAudioCompletionEvent
function findProduct(arr){
    var total = arr.reduce(function (prevVal, currentVal) {
return prevVal * currentVal;
});
return total;
}


console.log(findProduct([3,4]));


var donors = [
    {name: "a", donation: 10},
    {name: "b", donation: 100},
    {name: "c", donation: 4},
    {name: "d", donation: 9000}
];

// Given an array of donor objects (name and donation amount), return the total amount of donations

// function donationAmount(arr) {
//     return arr.reduce(function (prev, curr){
// return {donation: prev.donation + curr.donation};
//     }).donation;
// }
// console.log(donationAmount(donors));

// OR

// function donationAmount(arr) {
//     return arr.reduce(function (prev, curr){
// return prev + current.donation;
//     }, 0);
// }
// console.log(donationAmount(donors));


// Given an array of strings, return an object where the properties are one of the strings, 
// and the value is how many times that sting appeared in the array.

// E.g. var votes = ["angular", "react", 'react'];

// countVotes(votes) => {angular: 1, react: 2}

var votes = ["angular", "react", "react", "angular", "react", "ember", "vanilla", "angular", "react", "meteor", "angular"];

function countVotes (arr) {
return arr.reduce(function (prev, curr)  {
if (!prev.hasOwnProperty(curr)){
    prev[curr] = 0;
}
prev[curr]++;
return prev;
}, {});
}

console.log(countVotes(votes));