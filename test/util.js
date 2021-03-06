
QUnit.module("util-unit-tests", {});

QUnit.test("should capitalize word", function(assert) {
    assert.deepEqual(swlcalc.util.capitalize("swlcalc"), "Swlcalc");
});

QUnit.test("should return blank if None/none", function(assert) {
    assert.deepEqual(swlcalc.util.blankIfNone("none"), "");
    assert.deepEqual(swlcalc.util.blankIfNone("None"), "");
    assert.deepEqual(swlcalc.util.blankIfNone("Unchanged"), "Unchanged");
});

QUnit.test("should return correctly-rounded value", function(assert) {
    assert.equal(swlcalc.util.precisionRound(48.1234, 3), 48.123);
    assert.equal(swlcalc.util.precisionRound(48.12345, 4), 48.1235);
});

QUnit.test("should identify a primary stat", function(assert) {
    assert.equal(swlcalc.util.isPrimaryStat('hit-points'), true);
    assert.equal(swlcalc.util.isPrimaryStat('critical-rating'), false);
});

QUnit.test("should identify a secondary stat", function(assert) {
    assert.equal(swlcalc.util.isSecondaryStat('hit-points'), false);
    assert.equal(swlcalc.util.isSecondaryStat('critical-rating'), true);
});
