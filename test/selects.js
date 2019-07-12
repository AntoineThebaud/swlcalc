
QUnit.module("selects-dom", {
    beforeEach: function(assert) {
        renderSlots();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateSelectHandlers();
        initiateSummary();
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

QUnit.test("should have fill talismans and weapon lists", function(assert) {
    // None option must be taken into account (hence the +1)
    assert.equal($("#weapon-equipment-id option").length, swlcalc.data.equipments.slot["weapon"].length + 1);
    assert.equal($("#weapon2-equipment-id option").length, swlcalc.data.equipments.slot["weapon"].length + 1);
    assert.equal($("#head-equipment-id option").length, swlcalc.data.equipments.slot["head"].length + 1);
    assert.equal($("#finger-equipment-id option").length, swlcalc.data.equipments.slot["finger"].length + 1);
    assert.equal($("#neck-equipment-id option").length, swlcalc.data.equipments.slot["neck"].length + 1);
    assert.equal($("#wrist-equipment-id option").length, swlcalc.data.equipments.slot["wrist"].length + 1);
    assert.equal($("#luck-equipment-id option").length, swlcalc.data.equipments.slot["luck"].length + 1);
    assert.equal($("#waist-equipment-id option").length, swlcalc.data.equipments.slot["waist"].length + 1);
    assert.equal($("#occult-equipment-id option").length, swlcalc.data.equipments.slot["occult"].length + 1);
});

QUnit.test("should have added signets to correct group", function(assert) {
    // None option must be taken into account (hence the +1)
    assert.equal($('#weapon-signet-id option').length, swlcalc.data.signets.slot["weapon"].length + 1);
    assert.equal($('#weapon2-signet-id option').length, swlcalc.data.signets.slot["weapon"].length + 1);
    assert.equal($('#head-signet-id option').length, swlcalc.data.signets.slot["head"].length + 1);
    assert.equal($('#finger-signet-id option').length, swlcalc.data.signets.slot["finger"].length + 1);
    assert.equal($('#neck-signet-id option').length, swlcalc.data.signets.slot["neck"].length + 1);
    assert.equal($('#wrist-signet-id option').length, swlcalc.data.signets.slot["wrist"].length + 1);
    assert.equal($('#luck-signet-id option').length, swlcalc.data.signets.slot["luck"].length + 1);
    assert.equal($('#waist-signet-id option').length, swlcalc.data.signets.slot["waist"].length + 1);
    assert.equal($('#occult-signet-id option').length, swlcalc.data.signets.slot["occult"].length + 1);
});

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
        assert.equal($("#" + id + "-equipment-level").attr("max"), 20);
        swlcalc.gear.slots[id].edit.equipmentRarity("superior");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 25);
        swlcalc.gear.slots[id].edit.equipmentRarity("legendary");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 70);
        swlcalc.gear.slots[id].edit.equipmentRarity("epic");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 30);
        swlcalc.gear.slots[id].edit.equipmentRarity("mythic");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 35);
        swlcalc.gear.slots[id].edit.equipmentRarity("standard");
        swlcalc.gear.slots[id].edit.el.equipmentRarity.change();
        assert.equal($("#" + id + "-equipment-level").attr("max"), 20);
    }
});
