
QUnit.module("gear-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateSelectHandlers();
        createTankBuild();
    }
});

QUnit.test("gear should contain 9 slots", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

QUnit.test("gear should be fully reset", function(assert) {
    assert.equal($("#weapon-equipment-id").val(), "1");
    assert.equal($("#weapon2-equipment-id").val(), "2");
    assert.equal($("#head-equipment-id").val(), "1");
    assert.equal($("#finger-equipment-id").val(), "1");
    assert.equal($("#neck-equipment-id").val(), "1");
    assert.equal($("#wrist-equipment-id").val(), "1");
    assert.equal($("#luck-equipment-id").val(), "1");
    assert.equal($("#waist-equipment-id").val(), "13");
    assert.equal($("#occult-equipment-id").val(), "1");
    swlcalc.gear.reset();
    assert.equal($("#weapon-equipment-id").val(), "none");
    assert.equal($("#weapon2-equipment-id").val(), "none");
    assert.equal($("#head-equipment-id").val(), "none");
    assert.equal($("#finger-equipment-id").val(), "none");
    assert.equal($("#neck-equipment-id").val(), "none");
    assert.equal($("#wrist-equipment-id").val(), "none");
    assert.equal($("#luck-equipment-id").val(), "none");
    assert.equal($("#waist-equipment-id").val(), "none");
    assert.equal($("#occult-equipment-id").val(), "none");
});

//TODO/REFACTOR : to change the test logic ? should ensure all 9 slots are present (maybe test array length ?)
QUnit.test("should collect all slot states", function(assert) {
    var slotStates = swlcalc.gear.state();

    assert.equal(Object.keys(slotStates).length, 9);
    assert.equal(slotStates.hasOwnProperty("weapon"), true);
    assert.equal(slotStates.hasOwnProperty("weapon2"), true);
    assert.equal(slotStates.hasOwnProperty("head"), true);
    assert.equal(slotStates.hasOwnProperty("finger"), true);
    assert.equal(slotStates.hasOwnProperty("neck"), true);
    assert.equal(slotStates.hasOwnProperty("wrist"), true);
    assert.equal(slotStates.hasOwnProperty("luck"), true);
    assert.equal(slotStates.hasOwnProperty("waist"), true);
    assert.equal(slotStates.hasOwnProperty("occult"), true);
});

//TODO/REFACTOR : to harmnonize numerical values and strings (to have only one type ?)
//TODO/REFACTOR : to change the test logic ? should ensure all 9 slots are present (maybe test array length ?)
QUnit.test("should collect all mapped slot states", function(assert) {
    var slotStates = swlcalc.gear.mappedState();

    assert.equal(Object.keys(slotStates).length, 9);
    assert.equal(slotStates.hasOwnProperty("weapon"), true);
    assert.equal(slotStates.hasOwnProperty("weapon2"), true);
    assert.equal(slotStates.hasOwnProperty("head"), true);
    assert.equal(slotStates.hasOwnProperty("finger"), true);
    assert.equal(slotStates.hasOwnProperty("neck"), true);
    assert.equal(slotStates.hasOwnProperty("wrist"), true);
    assert.equal(slotStates.hasOwnProperty("luck"), true);
    assert.equal(slotStates.hasOwnProperty("waist"), true);
    assert.equal(slotStates.hasOwnProperty("occult"), true);
});
