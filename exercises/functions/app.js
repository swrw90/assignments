/* Question 1*/

function add(a, b) {
    return a + b;
}

var sum = add(1, 2);
console.log(sum);


/*Question 2*/
function largestNum(first, second, third) {

    var descendingArray = [first, second, third].sort(function (a, b) {
        return b - a
    })
    return descendingArray[0];

}

console.log(largestNum(200, 22, 430));


//var numberList = [420, 69, 666];
//
//function largestNum(input) {
//
//    var descendingArray = input.sort(function (a, b) {
//        return b - a
//    })
//    return descendingArray[0];
//
//}
//
//console.log(largestNum(numberList));
//


//function largestNumber(first, second, third) {
//    var largestNumber = 0;
//    var numbers = [first, second, third];
//    
//    for (var i = 0; i < numbers.length; i++) {
//        if (largestNumber < numbers[i] {
//            largestNumber = numbers[i];
//        }
//    }
//    
//    return largestNumber;
//}
//
//console.log(largestNumber(11, 40, 2));

/* Question 3 */

function evenOrOdd(value) {
    if (value % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd(33));

/* Question 4 */

function string1(input) {
    if (input.length <= 20) {
        return input + input;
    } else if (input.length > 20) {
        var halfString = input.length / 2;
        return input.substr(0, halfString);
    }
}

console.log(string1("This is a string with many many words."));


//
//function findLargestNumber(input) {
//    for (var i = 0; i < input.length; i++) {
//        var currentNum = input[i];
//
//        if (input.every()) {
//            return ("Largest number in the array is" + currentNum);
//        }
//    }
//}
//numberList.every(checkuNum(currentNum, ))
//findLargestNumber(numberList);


//
//

//function findSmallestNumber(input) {
//    var sortedNumbers = input.sort(/*function(a, b) {
//        return a - b;  
//    }*/)
//    console.log(sortedNumbers[0])
//
//}
//
//findSmallestNumber([10, 9, 8, 7, 6, 0, 2, 3, 4, 5, -76])


/*
function eat(foodType, timeOfDay, meal) {
    console.log("eating " + foodType + " at " + timeOfDay + ". It's " + meal + " time");
}

eat("pizza", "6pm", "dinner");


function eat(foodType, timeOfDay, meal) {
    if (timeOfDay === null) {
    console.log("eating " + foodType + " because it's " + timeOfDay + ". It's " + meal + " time");
}
}

eat("pizza", "6pm", "dinner");

function add(a, b) {
    if (a + b === 3) {
        return "The answer is 3";
    }
    console.log(a + b);
}

add(1, 3);

function add(a, b) {
    if (a + b === 3) {
        response = "The answer is 3";
    } else {
    response = "Something else";
}
return response;
}
add(1, 3);
function add(a, b) {
    return a + b;
}

var sum = add(1, 2) + add(3, 4);
console.log(sum);

var name = "Jill"; //Global Var

function sayName() {
    var name = "Jack"; 
    console.log(name);
}

sayName()
console.log(name);

var name = "Jack";

for (var i = 0; i < 2; i++) {
    var name = "Jill";
    console.log(name);
}

console.log(name); */
//
//var a = ["clothes", "mess", "food", "trash"];
//
//function add(a) {
//    var response = "";
//    var total = 0;
//    for (var i = 0; i < a.length; i++){
//        if ( a[i] === "clothes" || a[i]=== "trash"){
//            total++;
//        }
//    }
//    if (total => 2){
//        return "clean or get out";
//    } else {
//        return "it's chill";
//    }
//}
//add(a);
