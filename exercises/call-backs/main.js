// Synchronous vs. asynchronous

console.log("Hey");
console.log("My name is Bob");

// some operation that take 5 sec to complete: need method to start this operation while script moves onto other things
// asynchronous allows us to do that

function sayHi() {
    console.log("high");
}

setTimeout(sayHi, 2000); /*setTimeout says don't run this immediately, go on reading other code run it after however many milisec. */

console.log("I'm done with the code.");

setTimeout(sayHi, 500);
for (var i = 0; i < 100000; i++) {
    console.log(i);
}

/* functions are considered "first class" i js
These can be passed through a func

Strings
Booleans
Numbers
Array
Objects
function

*/

function blah(func()) {
    // do some cool stuff
    //    func()
    /* will get prioritized over the first initial function. function blah(func()) <--incorrect
    function blah(blah) { <--correct

    }
}
blah(sayHi()) <--says execute blah before sayHi */

    function hammer() {
        console.log("swing hammer at the nail");
    }

    function saw() {
        console.log("cut the wood");
    }

    function useToolWithDelay(tool, timeToWait) {
        //do some cool stuff (like wait for "timeToWait" amount of time);
        console.log("About to use the tool")
        setTimeout(tool, timeToWait); /* or just put tool()*/
    }

    useToolWithDelay(saw, 2000)

    var person = {
        name: "june",
        speak: function () {
            console.log("my name is june");
        }
    }

    function getData() {
        //Get the data via http// This is written as synchonous and takes longer
        return data;
    }

    var myData = getData();



    function getData(callback) {
        //Get the data via http//
        // Keep checking it see if the data has come back. not done with a for loop butter similar concept. For loop is synchronous so no bueno
        if (dataIsAvailable) {
            callback(data)
        }
    }

    functions processData(data) {
        //do cool things with the data
    }

    getData(processData);
    /* High order function is a func that take a func as a parameter, no biggie. high order func is a func you set callback into*/

    //mongoose w/ express and mongodb

    function handleData(data) {
        // do something with the data from the      
    }
    Snowboards.find(handleData);

}

//two ways to declare a fun
function sayHi() {

}
var sayHi = function () {
    /This is called anonymous func cus there's no name for the func. Pro to ano func fast, neg there's no name so no ref for later.

}

/higher order func examples

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (num) { /*for each iterates through an array, an abstracted version of for loop*/
    console.log(num);
});

Array.prototype.bobsForEach = function () { /*This is not recommended */
    console.log("lol I hacked the array constructor");
}

numbers.forEach();


numbers.bobslogEveryItemFunction();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (num) {
    console.log(num * 2);
});

Array.prototype.bobslogEveryItemFunction = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i])
    }
}



fruits.bobsForEach(function(fruit) {
    if (fruit === "orange") {
        console.log(fruit + " is my favorite"); 
    } else {
        console.log(fruit + "s are just kinda okay");
    }
    
});

/*all arrays have a property or method called filter. If your callback func returns true it will take that item and add it to an array, false will not*/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evens = numbers.filter(function(num){
               if (num % 2 === 0) { /*computer wants to turn this into a true false statement*/
    return true;
} else {
    return false;
}
});

//falsey values;
//false
//0
//undefined
//null
//NaN

var voters = [
    {name: "sally", age: 30},
    {name: "jim", age: 12}
]

var oldies = voters.filter(function(person){ /*whatevers in this function represents each object in the array*/
    return person.age > 24;
});
console.log(oldies);

var older = voters.map(function(person){
    person.age++
    return person;
});
 
console.log(older);
console.log(voters);



