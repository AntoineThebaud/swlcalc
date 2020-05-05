
QUnit.module("gear-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderAgents();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateHandlers();
        createTankBuild();
    }
});

QUnit.test("gear should contain 9 slots", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

QUnit.test("gear should be fully reset", function(assert) {
    assert.equal($("#weapon-edit-equipment-id").val(), "1");
    assert.equal($("#weapon2-edit-equipment-id").val(), "2");
    assert.equal($("#head-edit-equipment-id").val(), "1");
    assert.equal($("#finger-edit-equipment-id").val(), "1");
    assert.equal($("#neck-edit-equipment-id").val(), "1");
    assert.equal($("#wrist-edit-equipment-id").val(), "1");
    assert.equal($("#luck-edit-equipment-id").val(), "1");
    assert.equal($("#waist-edit-equipment-id").val(), "13");
    assert.equal($("#occult-edit-equipment-id").val(), "1");
    swlcalc.gear.reset();
    assert.equal($("#weapon-edit-equipment-id").val(), "none");
    assert.equal($("#weapon2-edit-equipment-id").val(), "none");
    assert.equal($("#head-edit-equipment-id").val(), "none");
    assert.equal($("#finger-edit-equipment-id").val(), "none");
    assert.equal($("#neck-edit-equipment-id").val(), "none");
    assert.equal($("#wrist-edit-equipment-id").val(), "none");
    assert.equal($("#luck-edit-equipment-id").val(), "none");
    assert.equal($("#waist-edit-equipment-id").val(), "none");
    assert.equal($("#occult-edit-equipment-id").val(), "none");
});

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
