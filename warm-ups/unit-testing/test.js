let chai = require("chai");
let assert = chai.assert;
let balancePara = require("./app.js");
let noClosing = "((idfgisudfiuiu)";
let noOpening = ")dsgdfg))";
let matching = "((dagfadfgd))";

describe("balancing parentheses", () => {
    it("should return false if there's not enough opening parantheses", () => {
        assert.equal(balancePara(noOpening), false);
    });
    it("should return false if there's not enough closing parantheses", () => {
        assert.equal(balancePara(noClosing), false);
    });
    it("should return true if each opening paranthesis has a matching closing paranthesis", () => {
        assert.equal(balancePara(matching), true);
    });
});