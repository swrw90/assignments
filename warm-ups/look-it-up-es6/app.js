// new way es6
// curly braces allow you to grab specific pieces of a package, otherwise use full package name. 
// import { assert } from "chai";
// import {}

// old way
let chai = require("chai");
let assert = chai.assert;

//import code
let addWord = require("test.js").addWord;
let lookItUp = require("test.js").lookItUp;

describe("A dict to add and lookup words", () => {
    it("should store the word when added", () => {
       addWord("blueberry", "a blue berry");
       assert.equal(lookItUp("blueberry"), "a blue berry");
       addWord("flower", "uhhh a plant");
       assert.equal(lookItUp("flower"), "uhhh a plant");
    });
    it("should return null when we lookup a word not present", () => {
        assert.equal(lookItUp("flabbergasted"), null);
        assert.equal(lookItUp("building"), null);
    });
});

