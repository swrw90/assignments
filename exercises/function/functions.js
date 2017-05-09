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

var a = ["clothes", "mess", "food", "trash"];

function add(a) {
    var response = "";
    var total = 0;
    for (var i = 0; i < a.length; i++){
        if ( a[i] === "clothes" || a[i]=== "trash"){
            total++;
        }
    }
    if (total => 2){
        return "clean or get out";
    } else {
        return "it's chill";
    }
}
add(a);