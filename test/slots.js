
//TODO/REFACTOR : to check if some of these calls can be removed
QUnit.module("slots-unit-tests", {
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

//TODO/TEST : to test each function of swlcalc-slot.js file

QUnit.test("should tell whether this slot is a weapon slot", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.isWeapon(), true);
    assert.equal(swlcalc.gear.slots.head.isWeapon(), false);
});

QUnit.test("should reset slot state", function(assert) {
    swlcalc.gear.slots.head.reset();

    assert.equal(swlcalc.gear.slots.head.edit.equipmentId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.edit.glyphId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.glyphRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.edit.glyphQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.edit.glyphLevel(), "20");

    //Equal(swlcalc.gear.slots.head.getSignet(), 'none'); => see swlcalc.data.signet_data.noneSignet()
    assert.equal(swlcalc.gear.slots.head.edit.signetRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.edit.signetLevel(), "20");
});

QUnit.test("should collect current slot state", function(assert) {
    var slotState = swlcalc.gear.slots.head.state();

    assert.deepEqual(slotState.equipment_rarity, "epic");
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "30");
    assert.deepEqual(slotState.glyph_id, "hit-rating");
    assert.deepEqual(slotState.glyph_rarity, "mythic");
    assert.deepEqual(slotState.glyph_quality, "3");
    assert.deepEqual(slotState.glyph_level, "1");
    assert.deepEqual(slotState.signet_id, "20");
    assert.deepEqual(slotState.signet_rarity, "superior");
    assert.deepEqual(slotState.signet_level, "15");
});

QUnit.test("should collect current mapped slot state", function(assert) {
    var slotState = swlcalc.gear.slots.head.mappedState();

    assert.deepEqual(slotState.equipment_id, "1");
    assert.deepEqual(slotState.equipment_rarity, 3);
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "30");
    assert.deepEqual(slotState.glyph_id, 1);
    assert.deepEqual(slotState.glyph_rarity, 4);
    assert.deepEqual(slotState.glyph_quality, "3");
    assert.deepEqual(slotState.glyph_level, "1");
    assert.deepEqual(slotState.signet_id, "20");
    assert.deepEqual(slotState.signet_rarity, 2);
    assert.deepEqual(slotState.signet_level, "15");
});
