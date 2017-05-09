/*
// Primitive Types - Immutable or Unchangeable
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//String
// Number
// Boolean
// undefined
// NaN
// null

// Reference Types - Mutable
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// Array
// Object
*/

var myString = "pool";
console.log(myString[0]);
myString = "tool";
console.log(myString);

var myString = "happy birthday";
myString += "!";
console.log(myString);

var myString = "happy birthday";
myString = myString + "!";
console.log(myString);

var fruits = ["apple", "banana", "mango"];
console.log(fruits);

var myCar = {
    year: 2002,
    make: "Toyota",
    model: "Camry"
}
console.log(myCar.year) //prints 2002
myCar.year = 2016;
console.log(myCar.year) // prints 2016

var a = 30;
var b = a;
console.log(b); // logs 30
a = 40;
console.log(b); // logs 30: b remains 30 because simple immutable data types are pass by value. 

var person = {
    name: "Susan";
    age: 43,
    eyeColor: "blue"
};

var another = person;
person.age++;
console.log(another.age);
//another.age++
//console.log(person.age) 

var a = [30];
var b =a;
a.splice(0, 1, "lol");
// console.log(b)
a = [40];
console.log(b);

var another = person;
person.age++;
console.log(another.age);
another.age++
console.log(person.age);

var person = {
    name: "Susan",
    age: 43,
    eyeColor: "blue"
};

var another = person;
another.age = person.age;
person.age++;
console.log(person.age);
