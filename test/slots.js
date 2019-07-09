
QUnit.module("slots-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateSelectHandlers();
        createTankBuild();
    }
});

QUnit.test("should tell whether this slot is a weapon slot", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.isWeapon(), true);
    assert.equal(swlcalc.gear.slots.head.isWeapon(), false);
});

QUnit.test("should make slot active", function(assert) {
    swlcalc.gear.slots.weapon2.draw();
    assert.equal(swlcalc.gear.slots.weapon2.active, true);
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.weaponActive.is(":visible"), true);
});

QUnit.test("should make slot inactive", function(assert) {
    swlcalc.gear.slots.weapon.sheath();
    assert.equal(swlcalc.gear.slots.weapon.active, false);
    assert.equal(swlcalc.gear.slots.weapon.recap.el.weaponActive.is(":visible"), false);
});

QUnit.test("should update elements related to equipment's item/id accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
    swlcalc.gear.slots.head.edit.equipmentId("12");
    swlcalc.gear.slots.head.updateEquipment();

    //TODO/BUGGY not updated faster enough : assert.equal(swlcalc.gear.slots.head.edit.equipmentImgItem(), 'assets/images/icons/talisman/Ashes.png', "should have update #head-imgItem");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentDescription(), "Whenever you are hit <span class=\"bonus-val const\">5</span> times in succession, you deal <span id=\"head-equipment-bonus1\" class=\"bonus-val attack\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
});

QUnit.test("should update elements related to equipment's rarity accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to equipment's quality accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to equipment's level accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to equipment's stat rating accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
    assert.equal(swlcalc.gear.slots.head.edit.equipmentStatValue(), "1070");
    swlcalc.gear.slots.head.edit.equipmentRarity("legendary");
    swlcalc.gear.slots.head.updateEquipmentStatRating();
    assert.equal(swlcalc.gear.slots.head.edit.equipmentStatValue(), "2342");
});

QUnit.test("should update elements related to equipment's transformed stat value accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to equipment's ilvl accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update every bonus values present in equipment's description (both edit & recap) accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to glyph's item/id accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to glyph's rarity accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to glyph's quality accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to glyph's level accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to glyph's stat rating accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
    swlcalc.gear.slots.head.edit.glyphId("hit-rating");
    swlcalc.gear.slots.head.edit.glyphRarity("superior");
    swlcalc.gear.slots.head.edit.glyphQuality("3");
    swlcalc.gear.slots.head.edit.glyphLevel("20");

    swlcalc.gear.slots.head.updateGlyphRating();

    assert.equal(swlcalc.gear.slots.head.edit.glyphStatRating(), 231);
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+231");
});

QUnit.test("should update elements related to glyph's ilvl accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to signet's item/id accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
    assert.equal($('#head-signet-img-item').attr('src'), 'assets/images/icons/signet/head.png');
    swlcalc.gear.slots.head.edit.signetId("none");
    swlcalc.gear.slots.head.updateSignet();
    assert.equal($('#head-signet-img-item').attr('src'), 'assets/images/icons/signet/none.png');


    assert.equal(swlcalc.gear.slots.occult.edit.signetDescription(), "After using Active Dodge, you receive a speed bonus of <span id=\"occult-signet-bonus\" class=\"bonus-val const\">26.1579</span><span class=\"bonus-val const\">%</span> for <span class=\"bonus-val const\">4</span> seconds.");
    swlcalc.gear.slots.occult.edit.signetId("3");
    swlcalc.gear.slots.occult.edit.signetRarity("epic");
    swlcalc.gear.slots.occult.edit.signetLevel("18");
    swlcalc.gear.slots.occult.updateSignet();
    assert.equal(swlcalc.gear.slots.occult.edit.signetDescription(), "Your active dodges have a <span id=\"occult-signet-bonus\" class=\"bonus-val const\">30</span><span class=\"bonus-val const\">%</span> to knock down enemies in your path, but also have their cooldown increased by <span id=\"occult-signet-bonus2\" class=\"bonus-val const\">74.03</span><span class=\"bonus-val const\">%</span>.");
});

QUnit.test("should update elements related to signet's rarity accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
    assert.equal($("#head-signet-img-rarity").attr("src"), "assets/images/icons/rarity/superior-42x42.png");
    swlcalc.gear.slots.head.edit.signetRarity("mythic");
    swlcalc.gear.slots.head.updateSignetRarity();
    assert.equal($("#head-signet-img-rarity").attr("src"), "assets/images/icons/rarity/mythic-42x42.png");
});

QUnit.test("should update elements related to signet's quality accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to signet's level accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to signet's bonus accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should update elements related to signet's ilvl accordingly", function(assert) {
    //TODO/TEST : to add real test
    assert.ok(true);
});

QUnit.test("should reset slot state", function(assert) {
    for (var slotId in swlcalc.gear.slots){
        var slot = swlcalc.gear.slots[slotId];
        slot.reset();

        assert.equal(slot.recap.el.equipmentEmpty.is(":visible"), true);
        assert.equal(slot.recap.el.equipmentTitleSection.is(":hidden"), true);
        assert.equal(slot.recap.el.equipmentImgSection.is(":hidden"), true);
        assert.equal(slot.recap.el.glyphEmpty.is(":visible"), true);
        assert.equal(slot.recap.el.glyphSection.is(":hidden"), true);
        assert.equal(slot.recap.el.signetEmpty.is(":visible"), true);
        assert.equal(slot.recap.el.signetSection.is(":hidden"), true);

        assert.equal(slot.edit.iLvl(), "0");
        assert.equal(slot.edit.equipmentId(), "none");
        assert.equal(slot.edit.equipmentRarity(), "standard");
        assert.equal(slot.edit.equipmentQuality(), "1");
        assert.equal(slot.edit.equipmentStatValue(), "0");
        assert.equal(slot.edit.equipmentLevel(), "20");
        assert.equal(slot.recap.el.equipmentStatSection.is(":hidden"), true);
        if (slot.isWeapon()) {
            assert.equal(slot.edit.equipmentImgItem(), "assets/images/icons/weapon/None.png");
        } else {
            assert.equal(slot.edit.equipmentImgItem(), "assets/images/icons/talisman/None.png");
        }
        assert.equal(slot.edit.equipmentImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        assert.equal(slot.edit.equipmentImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.equipmentLabelLevel(), "20");
        assert.equal(slot.edit.equipmentDescription(), "");
        assert.equal(slot.edit.equipmentILvl(), "0");
        assert.equal(slot.edit.glyphId(), "none");
        assert.equal(slot.edit.glyphRarity(), "standard");
        assert.equal(slot.edit.glyphQuality(), "1");
        assert.equal(slot.edit.glyphLevel(), "20");
        assert.equal(slot.edit.glyphStatRating(), "0");
        assert.equal(slot.edit.glyphStatText(), "");
        assert.equal(slot.edit.glyphImgItem(), "assets/images/icons/glyph/none.png");
        assert.equal(slot.edit.glyphImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        assert.equal(slot.edit.glyphImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.glyphILvl(), "0");
        assert.equal(slot.edit.signetId(), "none");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.signetRarity(), "standard");
            assert.equal(slot.edit.signetLevel(), "20");
            assert.equal(slot.edit.signetImgItem(), "assets/images/icons/signet/none.png");
            assert.equal(slot.edit.signetImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        }
        assert.equal(slot.edit.signetDescription(), "");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.signetLabelLevel(), "20");
            assert.equal(slot.edit.signetILvl(), "0");
        }
    }
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
    var slotState = swlcalc.gear.slots.occult.mappedState();

    assert.deepEqual(slotState.equipment_id, "1");
    assert.deepEqual(slotState.equipment_rarity, 3);
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "1");
    assert.deepEqual(slotState.glyph_id, 4);
    assert.deepEqual(slotState.glyph_rarity, 3);
    assert.deepEqual(slotState.glyph_quality, "2");
    assert.deepEqual(slotState.glyph_level, "20");
    assert.deepEqual(slotState.signet_id, "4");
    assert.deepEqual(slotState.signet_rarity, 3);
    assert.deepEqual(slotState.signet_level, "18");
});
