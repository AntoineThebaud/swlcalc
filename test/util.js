
QUnit.module("util-unit-tests", {});

QUnit.test("should capitalise word", function(assert) {
    assert.deepEqual(swlcalc.util.capitalise("swlcalc"), "Swlcalc");
});

QUnit.test("should return blank if None/none", function(assert) {
    assert.deepEqual(swlcalc.util.blankIfNone("none"), "");
    assert.deepEqual(swlcalc.util.blankIfNone("None"), "");
});

//TODO/TEST : add test for precisionRound()
