const assert = require("assert")
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
    it( "sum", function () {
        assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
    });

    it( "subtract", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it( "divide", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it( "divide", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    });

});
