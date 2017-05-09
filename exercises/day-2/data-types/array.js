// Array: An array is a collection of many things indicated by [ and separated by ,
var names = ["Bob", "Sarah", false, function(){console.log("hey")}, 42, true];
console.log(names[4]);
// Object: describes ONE thing, in a lot more detail
var person = "Jill";
var person = {
    firstName: "Jill",
    lastName: "Hill",
    age: 42,
    gender: "female",
    eyeColor: "brown",
}
// These are the same thing
console.log(person.firstName); // Usually this way
console.log(person["firstName"]); //Occasionaly this way

var user = {
    firstName: "Bob",
    lastName: "Smith",
    age: 40,
    birthdate: "03/05/1977",
    favoriteCatBreeds: ["Tabby", "Abyssinian"],
    address: {
        street: "123 Main St.",
        city: "example",
        state: "OH",
        zip: 45133
    }
        }
    ]
}

console.log(user.favoriteCatBreeds[1]);
console.log(user.adress.city);

