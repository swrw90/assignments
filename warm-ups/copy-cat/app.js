// Create a function that takes an object as a parameter and returns a new object that has the same properties and values of the parameter. 
// The new object should be a copy of the original, so the function should not modify the original object.


// UNFINISHED
var apple = {
color: red,
type: fruit,
healthy: true
};

function copyCat(item) {
    return item.map(function (item) {

    });
}
 copyCat(apple);

// ====================


var corey = {
    name: "Corey",
    age: 23
}

function newObj(obj) {
    var clone = Object.assign({}, obj);
    return clone;
}

var corClone = newObj(corey);
corey.age = 50;

console.log(corey);
console.log(corClone)

// ====================

var obj = {
    name: "seth",
    alive: false,
    age: 27
};

function copyCat(obj) {
    var newObj = {};
    for (var prop in obj) {
        newObj[prop] = obj[prop]
    };
    return newObj
}
var otherPerson = copyCat(obj);
obj.alive = true;

console.log(obj);
console.log(otherPerson);