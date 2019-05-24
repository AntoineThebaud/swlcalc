
QUnit.module("selects-dom", {
    beforeEach: function(assert) {
        renderSlots();
        renderButtonbar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateButtonBar();
    }
});

QUnit.test("should have required selects in the DOM", function(assert) {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var id = swlcalc.data.template_data.slots[i].id;
        assert.ok($("#" + id + "-equipment-id").length !== 0, id + "-equipment-id exists");
        assert.ok($("#" + id + "-equipment-rarity").length !== 0, id + "-equipment-rarity exists");
        assert.ok($("#" + id + "-equipment-quality").length !== 0, id + "-equipment-quality exists");
        assert.ok($("#" + id + "-equipment-level").length !== 0, id + "-equipment-level exists");
        assert.ok($("#" + id + "-glyph-id").length !== 0, id + "-glyph-id exists");
        assert.ok($("#" + id + "-glyph-rarity").length !== 0, id + "-glyph-rarity exists");
        assert.ok($("#" + id + "-glyph-quality").length !== 0, id + "-glyph-quality exists");
        assert.ok($("#" + id + "-glyph-level").length !== 0, id + "-glyph-level exists");
        assert.ok($("#" + id + "-signet-id").length !== 0, id + "-signet-id exists");
        if (id != "weapon" && id != "weapon2") {
            assert.ok($("#" + id + "-signet-rarity").length !== 0, id + "-signet-rarity exists");
            assert.ok($("#" + id + "-signet-level").length !== 0, id + "-signet-level exists");
        }
    }
});

QUnit.module("selects-events", {
    beforeEach: function(assert) {
        renderSlots();
        initiateSelectHandlers();
    }
});

QUnit.test("should have required event listeners for change on selects in the DOM", function(assert) {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var id = swlcalc.data.template_data.slots[i].id;
        assert.ok($._data($("#" + id + "-equipment-id").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-equipment-rarity").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-equipment-quality").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-equipment-level").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-glyph-id").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-glyph-rarity").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-glyph-quality").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-glyph-level").get(0), "events").change instanceof Array);
        assert.ok($._data($("#" + id + "-signet-id").get(0), "events").change instanceof Array);
        if (id != "weapon" && id != "weapon2") {
            assert.ok($._data($("#" + id + "-signet-rarity").get(0), "events").change instanceof Array);
            assert.ok($._data($("#" + id + "-signet-level").get(0), "events").change instanceof Array);
        }
    }
});

QUnit.module("selects-unit-tests", {
    beforeEach: function(assert) {
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        initiateSummary();
    }
});

QUnit.test("should have fill talismans and weapon lists", function(assert) {

    // None option must be taken into account
    assert.equal($("#weapon-equipment-id option").length, 145);
    assert.equal($("#weapon2-equipment-id option").length, 145);
    assert.equal($("#head-equipment-id option").length, 15);
    assert.equal($("#finger-equipment-id option").length, 8);
    assert.equal($("#neck-equipment-id option").length, 13);
    assert.equal($("#wrist-equipment-id option").length, 9);
    assert.equal($("#luck-equipment-id option").length, 9);
    assert.equal($("#waist-equipment-id option").length, 20);
    assert.equal($("#occult-equipment-id option").length, 9);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should have added signets to correct group', 8, function() {
//     // None option must be taken into account
//     equal($('#weapon-pick-signet option').size(), 23);
//     equal($('#head-pick-signet option').size(), 37); //weapon signets also fit in the head
//     equal($('#ring-pick-signet option').size(), 16);
//     equal($('#neck-pick-signet option').size(), 16);
//     equal($('#wrist-pick-signet option').size(), 16);
//     equal($('#luck-pick-signet option').size(), 41);
//     equal($('#waist-pick-signet option').size(), 41);
//     equal($('#occult-pick-signet option').size(), 41);
// });

//TODO/TEST to reenabled
// test('should get signets for head', 1, function() {
//     equal(swlcalc.select['head'].getSignetsForHead('head').length, 22);
// });

QUnit.module("selects-integration-tests", {
    beforeEach: function(assert) {
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        swlcalc.gear.init();
    }
});

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type and set the slot name', 1, function() {
//     swlcalc.gear.slots.weapon.equipmentId('1');
//     swlcalc.gear.slots.weapon.el.equipmentId.change();

//     DeepEqual(swlcalc.gear.slots.weapon.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type and set the slot name', 1, function() {
//     swlcalc.gear.slots.weapon2.equipmentId('1');
//     swlcalc.gear.slots.weapon2.el.equipmentId.change();

//     DeepEqual(swlcalc.gear.slots.weapon2.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type to none and set the slot name to blank', 1, function() {
//     swlcalc.gear.slots.weapon.equipmentId('1');
//     swlcalc.gear.slots.weapon.el.equipmentId.change();
//     swlcalc.gear.slots.weapon.equipmentId('none');
//     swlcalc.gear.slots.weapon.el.equipmentId.change();

//     DeepEqual(swlcalc.gear.slots.weapon.name(), '');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type to none and set the slot name to blank', 1, function() {
//     swlcalc.gear.slots.weapon2.equipmentId('1');
//     swlcalc.gear.slots.weapon2.el.equipmentId.change();
//     swlcalc.gear.slots.weapon2.equipmentId('none');
//     swlcalc.gear.slots.weapon2.el.equipmentId.change();

//     DeepEqual(swlcalc.gear.slots.weapon2.name(), '');
// });

QUnit.test("should set a non-zero ilvl value when selecting a glyph and then set it back to 0 when selecting none option", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.glyphILvl(), 0);
    swlcalc.gear.slots.occult.edit.glyphId("critical-rating");
    swlcalc.gear.slots.occult.edit.el.glyphId.change();
    assert.equal(swlcalc.gear.slots.occult.edit.glyphILvl(), 24);
    swlcalc.gear.slots.occult.edit.glyphId("none");
    swlcalc.gear.slots.occult.edit.el.glyphId.change();
    assert.equal(swlcalc.gear.slots.occult.edit.glyphILvl(), 0);
});

QUnit.test("should update any #slot-equipment-level sliders when its associated rarity is changed", function(assert) {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var id = swlcalc.data.template_data.slots[i].id;
        assert.equal($("#" + id + "-equipment-level").attr("max"), 20, "Untouched " + id + "-equipment-level should have values between 1 and 20");
        swlcalc.gear.slots[id].edit.equipmentRarity("superior");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 25, "After " + id + "-equipment-rarity set to Superior, " + id + "-equipment-level should have values between 1 and 25");
        swlcalc.gear.slots[id].edit.equipmentRarity("legendary");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 70, "After " + id + "-equipment-rarity set to Legendary, " + id + "-equipment-level should have values between 1 and 70");
        swlcalc.gear.slots[id].edit.equipmentRarity("epic");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 30, "After " + id + "-equipment-rarity set to Epic, " + id + "-equipment-level should have values between 1 and 30");
        swlcalc.gear.slots[id].edit.equipmentRarity("mythic");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 35, "After " + id + "-equipment-rarity set to Mythic, " + id + "-equipment-level should have values between 1 and 35");
        swlcalc.gear.slots[id].edit.equipmentRarity("standard");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 20, "After " + id + "-equipment-rarity set back to Standard, " + id + "-equipment-level should have values between 1 and 20");
    }
});
