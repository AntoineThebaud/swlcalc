
QUnit.module("slot-handler-dom", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should have required all slot controllers in the DOM", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.ok(slot.edit.el.equipmentId.length !== 0);
        assert.ok(slot.edit.el.equipmentRarity.length !== 0);
        assert.ok(slot.edit.el.equipmentQuality.length !== 0);
        assert.ok(slot.edit.el.equipmentLevel.length !== 0);
        assert.ok(slot.edit.el.glyphId.length !== 0);
        assert.ok(slot.edit.el.glyphRarity.length !== 0);
        assert.ok(slot.edit.el.glyphQuality.length !== 0);
        assert.ok(slot.edit.el.glyphLevel.length !== 0);
        assert.ok(slot.edit.el.signetId.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.edit.el.signetRarity.length !== 0);
            assert.ok(slot.edit.el.signetLevel.length !== 0);
        }
    }
});

QUnit.test("should have required event listeners for change on slot controllers in the DOM", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.ok($._data(slot.edit.el.equipmentId.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.equipmentRarity.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.equipmentQuality.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.equipmentLevel.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.glyphId.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.glyphRarity.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.glyphQuality.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.glyphLevel.get(0), "events").change instanceof Array);
        assert.ok($._data(slot.edit.el.signetId.get(0), "events").change instanceof Array);
        if (slot.group != "weapon") {
            assert.ok($._data(slot.edit.el.signetRarity.get(0), "events").change instanceof Array);
            assert.ok($._data(slot.edit.el.signetLevel.get(0), "events").change instanceof Array);
        }
    }
});
QUnit.module("slot-handler-unit-tests", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should have fill talismans and weapon lists", function(assert) {
    // None option must be taken into account (hence the +1)
    assert.equal($("#weapon-edit-equipment-id option").length, swlcalc.data.equipments.slot["weapon"].length + 1);
    assert.equal($("#weapon2-edit-equipment-id option").length, swlcalc.data.equipments.slot["weapon"].length + 1);
    assert.equal($("#head-edit-equipment-id option").length, swlcalc.data.equipments.slot["head"].length + 1);
    assert.equal($("#finger-edit-equipment-id option").length, swlcalc.data.equipments.slot["finger"].length + 1);
    assert.equal($("#neck-edit-equipment-id option").length, swlcalc.data.equipments.slot["neck"].length + 1);
    assert.equal($("#wrist-edit-equipment-id option").length, swlcalc.data.equipments.slot["wrist"].length + 1);
    assert.equal($("#luck-edit-equipment-id option").length, swlcalc.data.equipments.slot["luck"].length + 1);
    assert.equal($("#waist-edit-equipment-id option").length, swlcalc.data.equipments.slot["waist"].length + 1);
    assert.equal($("#occult-edit-equipment-id option").length, swlcalc.data.equipments.slot["occult"].length + 1);
});

QUnit.test("should have added signets to correct group", function(assert) {
    // None option must be taken into account (hence the +1)
    assert.equal($('#weapon-edit-signet-id option').length, swlcalc.data.signets.slot["weapon"].length + 1);
    assert.equal($('#weapon2-edit-signet-id option').length, swlcalc.data.signets.slot["weapon"].length + 1);
    assert.equal($('#head-edit-signet-id option').length, swlcalc.data.signets.slot["head"].length + 1);
    assert.equal($('#finger-edit-signet-id option').length, swlcalc.data.signets.slot["finger"].length + 1);
    assert.equal($('#neck-edit-signet-id option').length, swlcalc.data.signets.slot["neck"].length + 1);
    assert.equal($('#wrist-edit-signet-id option').length, swlcalc.data.signets.slot["wrist"].length + 1);
    assert.equal($('#luck-edit-signet-id option').length, swlcalc.data.signets.slot["luck"].length + 1);
    assert.equal($('#waist-edit-signet-id option').length, swlcalc.data.signets.slot["waist"].length + 1);
    assert.equal($('#occult-edit-signet-id option').length, swlcalc.data.signets.slot["occult"].length + 1);
});

QUnit.module("slot-handler-unit-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
});

QUnit.test("should update any #slot-edit-equipment-level sliders when its associated rarity is changed", function(assert) {
    for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
        var id = swlcalc.data.templateData.slots[i].id;
        
        swlcalc.gear.slots[id].edit.setEquipmentRarity("standard");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 20);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("superior");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 25);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("legendary");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 70);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("epic");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 30);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("mythic");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 35);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("standard");
        assert.equal($("#" + id + "-edit-equipment-level").attr("max"), 20);
    }
});

QUnit.test("should update any #slot-edit-equipment-quality dropdowns when its associated rarity is changed", function(assert) {
    for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
        var id = swlcalc.data.templateData.slots[i].id;

        swlcalc.gear.slots[id].edit.setEquipmentRarity("legendary");
        assert.equal($("#" + id + "-edit-equipment-quality > option").length, 4);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("superior");
        assert.equal($("#" + id + "-edit-equipment-quality > option").length, 3);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("epic");
        assert.equal($("#" + id + "-edit-equipment-quality > option").length, 4);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("mythic");
        assert.equal($("#" + id + "-edit-equipment-quality > option").length, 4);

        swlcalc.gear.slots[id].edit.setEquipmentRarity("standard");
        assert.equal($("#" + id + "-edit-equipment-quality > option").length, 3);
    }
});
