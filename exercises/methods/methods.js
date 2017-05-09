var fruits =["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruits.shift();

console.log("fruits:", fruits);  
console.log("vegetables:", vegetables);

console.log(fruits.indexOf("orange"));
fruits.push(fruits.indexOf("orange"));

var vegLength = (vegatables, length);
console.log("vegetables length", vegetablesLength);
vegetables.push(vegetablesLength);

var food = fruits.concat(vegetables);
console.log("food:", food);
food.splice(4, 2);
console.log("food:", food);
food.reverse();
console.log("food:", food);

console.log(food.toString());
