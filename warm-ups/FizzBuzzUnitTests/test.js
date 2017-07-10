let chai = require("chai");
let assert = chai.assert;
let fizzBuzz = require("../test.js");

describe("FizzBuzz Test", () => {
    it("Should return an array where items divisible by 3 are Fizz, 5 are Buzz, both are FizzBuzz and none are nan", () => {
        assert.deepEqual(fizzBuzz(), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
    });
});