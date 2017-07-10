var chai = require("chai");
var assert = chai.assert;

// import code
var cal = require("../app");
var add = cal.add;
var sub = cal.sub;

describe("Calc", function(){
    it("should return sum", function () {
        assert.equal(add(2,2), 4);
        assert.equal(add(-1, -1), -2);
    });
    it("should return difference", function (){
        assert.equal(sub(2,2), 0);
        assert.equal(sub(-2,1), 3);
    });
});