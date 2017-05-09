var numArray = [1, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6];
var stringArray = ["seth", "seth", "suke", "mittens", "suke", "seth"];

var NO_VALUES_FOUND = -1

function noDuplicates(array) {
    var betterName = [];
    for(var i = 0; i < array.length; i++){
        if(betterName.indexOf(array[i]) === NO_VALUES_FOUND){
            betterName.push(array[i]);
        }
    }
    return betterName;
}

function removeDuplicate(array) {
    var filteredValue = [];
    for (var i = 0; i < array.length; i++) {
        if (newArray.includes(array[i]) == false) {
            newArray.push(array[i]);
        }
    }
    
    return filteredValue;
}

console.log(removeDuplicate(numArray));

//console.log("first item in the array:");
//console.log(array[0]);
//console.log("\n");
//
//console.log("length of the array:");
//console.log(array.length);
//console.log("\n");
//
//console.log("removed duplicate array:");
//console.log(noDuplicates(numArray));
//console.log("\n");
//
//console.log("removed duplicate stringArray:");
//console.log(noDuplicates(stringArray));
//console.log("\n");

