let chai = require("chai");
let assert = chai.assert;

let middleStr = require("./app.js");

describe("A function that returns the middle two characters", () => {
    it("should return the two middle characters given an even length string", () => {
        assert.equal(middleStr("Seth"), "et");
        assert.equal(middleStr("candycanes"), "yc");
    });
    it("should throw an error when given an odd length string", () => {
        assert.throws(() => { middleStr("allen") }, "String is odd");
        assert.throws(() => { middleStr("jay") }, "String is odd");
    });
    it("should thrôw an error when given an empty string", () => {
        assert.throws(() => { middleStr("") }, "String is empty");
    });
});