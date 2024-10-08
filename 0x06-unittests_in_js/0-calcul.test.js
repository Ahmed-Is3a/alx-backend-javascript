const assert = require("assert")
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
    it( "...", function () {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it( "...", function () {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it( "...", function () {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it( "...", function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it( "...", function () {
        assert.strictEqual(calculateNumber(1.5, 0.7), 3);
    });

    it( "first number less than 1", function () {
        assert.strictEqual(calculateNumber(0.5, 3.7), 5);
    });


});
