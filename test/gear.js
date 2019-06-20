
//TODO/REFACTOR : to check if some of these calls can be removed
QUnit.module("gear-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        renderButtonbar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateButtonBar();
        initiateSelectHandlers();
        initiateSummary();
        createTankBuild();
    }
});

//TODO/TEST : to test all the functions of swlcalc-gear

QUnit.test("gear should contain 9 slots", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

//TODO/REFACTOR : to change the test logic ? should ensure all 9 slots are present (maybe test array length ?)
QUnit.test("should collect all slot states", function(assert) {
    var slotStates = swlcalc.gear.state();

    assert.deepEqual(slotStates.weapon.equipment_rarity, "epic");
    assert.deepEqual(slotStates.weapon.equipment_quality, "1");
    assert.deepEqual(slotStates.weapon.equipment_level, "30");
    assert.deepEqual(slotStates.weapon.glyph_id, "critical-rating");
    assert.deepEqual(slotStates.weapon.glyph_rarity, "superior");
    assert.deepEqual(slotStates.weapon.glyph_quality, "1");
    assert.deepEqual(slotStates.weapon.glyph_level, "1");
    assert.deepEqual(slotStates.weapon.signet_id, "6");
    assert.deepEqual(slotStates.weapon.signet_rarity, undefined);
    assert.deepEqual(slotStates.weapon.signet_level, undefined);

    assert.deepEqual(slotStates.head.equipment_rarity, "epic");
    assert.deepEqual(slotStates.head.equipment_quality, "1");
    assert.deepEqual(slotStates.head.equipment_level, "30");
    assert.deepEqual(slotStates.head.glyph_id, "hit-rating");
    assert.deepEqual(slotStates.head.glyph_rarity, "mythic");
    assert.deepEqual(slotStates.head.glyph_quality, "3");
    assert.deepEqual(slotStates.head.glyph_level, "1");
    assert.deepEqual(slotStates.head.signet_id, "20");
    assert.deepEqual(slotStates.head.signet_rarity, "superior");
    assert.deepEqual(slotStates.head.signet_level, "15");
});

//TODO/REFACTOR : to harmnonize numerical values and strings (to have only one type ?)
//TODO/REFACTOR : to change the test logic ? should ensure all 9 slots are present (maybe test array length ?)
QUnit.test("should collect all mapped slot states", function(assert) {
    var slotStates = swlcalc.gear.mappedState();

    assert.deepEqual(slotStates.weapon.equipment_id, "1");
    assert.deepEqual(slotStates.weapon.equipment_rarity, 3);
    assert.deepEqual(slotStates.weapon.equipment_quality, "1");
    assert.deepEqual(slotStates.weapon.equipment_level, "30");
    assert.deepEqual(slotStates.weapon.glyph_id, 2);
    assert.deepEqual(slotStates.weapon.glyph_rarity, 2);
    assert.deepEqual(slotStates.weapon.glyph_quality, "1");
    assert.deepEqual(slotStates.weapon.glyph_level, "1");
    assert.deepEqual(slotStates.weapon.signet_id, "6");
    assert.deepEqual(slotStates.weapon.signet_rarity, 0);
    assert.deepEqual(slotStates.weapon.signet_level, 0);

    assert.deepEqual(slotStates.head.equipment_id, "1");
    assert.deepEqual(slotStates.head.equipment_rarity, 3);
    assert.deepEqual(slotStates.head.equipment_quality, "1");
    assert.deepEqual(slotStates.head.equipment_level, "30");
    assert.deepEqual(slotStates.head.glyph_id, 1);
    assert.deepEqual(slotStates.head.glyph_rarity, 4);
    assert.deepEqual(slotStates.head.glyph_quality, "3");
    assert.deepEqual(slotStates.head.glyph_level, "1");
    assert.deepEqual(slotStates.head.signet_id, "20");
    assert.deepEqual(slotStates.head.signet_rarity, 2);
    assert.deepEqual(slotStates.head.signet_level, "15");
});
