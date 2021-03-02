
QUnit.module("slot-edit-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderPassives();
        renderAnimaAllocation();
        initiateHandlers();
        initiateAnimaAllocation();
        initiatePassives();
        createTankBuild();
    }
});

QUnit.test("should have required components in the DOM", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.ok(slot.edit.el.div.length !== 0);
        assert.ok(slot.edit.el.iLvl.length !== 0);
        assert.ok(slot.edit.el.equipmentId.length !== 0);
        assert.ok(slot.edit.el.equipmentRarity.length !== 0);
        assert.ok(slot.edit.el.equipmentQuality.length !== 0);
        assert.ok(slot.edit.el.equipmentLevel.length !== 0);
        assert.ok(slot.edit.el.equipmentStatPowerValue.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.edit.el.equipmentStatProtValue.length !== 0);
        }
        assert.ok(slot.edit.el.equipmentILvl.length !== 0);
        assert.ok(slot.edit.el.equipmentImgItem.length !== 0);
        assert.ok(slot.edit.el.equipmentImgRarity.length !== 0);
        assert.ok(slot.edit.el.equipmentImgQuality.length !== 0);
        assert.ok(slot.edit.el.equipmentLabelLevel.length !== 0);
        assert.ok(slot.edit.el.equipmentDescription.length !== 0);
        assert.ok(slot.edit.el.glyphId.length !== 0);
        assert.ok(slot.edit.el.glyphRarity.length !== 0);
        assert.ok(slot.edit.el.glyphQuality.length !== 0);
        assert.ok(slot.edit.el.glyphLevel.length !== 0);
        assert.ok(slot.edit.el.glyphStatRating.length !== 0);
        assert.ok(slot.edit.el.glyphStatText.length !== 0);
        assert.ok(slot.edit.el.glyphImgItem.length !== 0);
        assert.ok(slot.edit.el.glyphImgRarity.length !== 0);
        assert.ok(slot.edit.el.glyphImgQuality.length !== 0);
        assert.ok(slot.edit.el.glyphLabelLevel.length !== 0);
        assert.ok(slot.edit.el.glyphILvl.length !== 0);
        assert.ok(slot.edit.el.signetId.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.edit.el.signetRarity.length !== 0);
            assert.ok(slot.edit.el.signetLevel.length !== 0);
            assert.ok(slot.edit.el.signetImgItem.length !== 0);
            assert.ok(slot.edit.el.signetImgRarity.length !== 0);
        }
        assert.ok(slot.edit.el.signetDescription.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.edit.el.signetLabelLevel.length !== 0);
            assert.ok(slot.edit.el.signetILvl.length !== 0);
        }
    }
});

QUnit.test("should get and set slot's total iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "425");
    swlcalc.gear.slots.head.edit.setILvl("9999");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "9999");
});

QUnit.test("should get and set the slot's equipment id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "1");
    swlcalc.gear.slots.head.edit.setEquipmentId("3");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "3");
});

QUnit.test("should get and set the slot's equipment rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentRarity(), "epic");
    swlcalc.gear.slots.head.edit.setEquipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentRarity(), "legendary");
});

QUnit.test("should get and set the slot's equipment quality on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentQuality(), "1");
    swlcalc.gear.slots.head.edit.setEquipmentQuality("4");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentQuality(), "4");
});

QUnit.test("should get and set the slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "30");
    swlcalc.gear.slots.head.edit.setEquipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "14");
});

QUnit.test("should get and set the lower bound for slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMin(), "1");
    swlcalc.gear.slots.head.edit.setEquipmentLevelMin("99");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMax(), "30");
    swlcalc.gear.slots.head.edit.setEquipmentLevelMax("99");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMax(), "99");
});

QUnit.test("should get and set the slot's equipment stat power value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "1070");
    swlcalc.gear.slots.head.edit.setEquipmentStatPowerValue("8");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "8");
});

QUnit.test("should get and set the slot's equipment stat prot value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+468");
    swlcalc.gear.slots.head.edit.setEquipmentStatProtValue("+65789");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+65789");
});

QUnit.test("should get and set the slot's equipment iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "223");
    swlcalc.gear.slots.head.edit.setEquipmentILvl("800000000000");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "800000000000");
});

QUnit.test("should get and set the slot's equipment description on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentDescription(), "");
    swlcalc.gear.slots.finger.edit.setEquipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's equipment bonus value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentBonusN(1), "275");
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentBonusN(2), "66");
    swlcalc.gear.slots.waist.edit.setEquipmentBonusN(1, "19920804");
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentBonusN(1), "19920804");
});

QUnit.test("should get and set the slot's equipment item image on edit view", function(assert) {
    // TODO/BUG : this one should finish in status ok !
    // assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), 'assets/images/icons/talisman/head/Ashes.png');
    swlcalc.gear.slots.head.edit.setEquipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    swlcalc.gear.slots.head.edit.setEquipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment pip image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.head.edit.setEquipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "30");
    swlcalc.gear.slots.head.edit.setEquipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "1304");
});

QUnit.test("should get and set the slot's glyph id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "hit-rating");
    swlcalc.gear.slots.head.edit.setGlyphId("evade-rating");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "evade-rating");
});

QUnit.test("should get and set the slot's glyph rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphRarity(), "mythic");
    swlcalc.gear.slots.head.edit.setGlyphRarity("standard");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphRarity(), "standard");
});

QUnit.test("should get and set the slot's glyph quality on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphQuality(), "3");
    swlcalc.gear.slots.head.edit.setGlyphQuality("1");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphQuality(), "1");
});

QUnit.test("should get and set the slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevel(), "1");
    swlcalc.gear.slots.head.edit.setGlyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevel(), "7");
});

QUnit.test("should get and set the lower bound for slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphLevelMin(), "1");
    swlcalc.gear.slots.luck.edit.setGlyphLevelMin("99");
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevelMax(), "20");
    swlcalc.gear.slots.head.edit.setGlyphLevelMax("99");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevelMax(), "99");
});

QUnit.test("should get and set the slot's glyph stat rating on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+488");
    swlcalc.gear.slots.head.edit.setGlyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "-99");
});

QUnit.test("should get and set the slot's glyph stat text on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.getGlyphStatText(), "Defense Rating");
    swlcalc.gear.slots.wrist.edit.setGlyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.edit.getGlyphStatText(), "Accele Rating");
});

QUnit.test("should get and set the slot's glyph iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphILvl(), 115);
    swlcalc.gear.slots.neck.edit.setGlyphILvl(666);
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphILvl(), 666);
});

QUnit.test("should get and set the slot's glyph item image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "assets/images/icons/glyph/hit-rating.png");
    swlcalc.gear.slots.head.edit.setGlyphImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    swlcalc.gear.slots.head.edit.setGlyphImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph pip image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.weapon2.edit.setGlyphImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "20");
    swlcalc.gear.slots.neck.edit.setGlyphLabelLevel("1217");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "1217");
});

QUnit.test("should get and set the slot's signet id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.getSignetId(), "4");
    swlcalc.gear.slots.occult.edit.setSignetId("none");
    assert.equal(swlcalc.gear.slots.occult.edit.getSignetId(), "none");
});

QUnit.test("should get and set the slot's signet rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getSignetRarity(), "superior");
    swlcalc.gear.slots.head.edit.setSignetRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetRarity(), "legendary");
});

QUnit.test("should get and set the slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getSignetLevel(), "15");
    swlcalc.gear.slots.head.edit.setSignetLevel("7");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetLevel(), "7");
});

QUnit.test("should get and set the lower bound for slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetLevelMin(), "1");
    swlcalc.gear.slots.luck.edit.setSignetLevelMin("99");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.getSignetLevelMax(), "20");
    swlcalc.gear.slots.waist.edit.setSignetLevelMax("99");
    assert.equal(swlcalc.gear.slots.waist.edit.getSignetLevelMax(), "99");
});

QUnit.test("should get and set the slot's signet iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), 26);
    swlcalc.gear.slots.head.edit.setSignetILvl(666);
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), 666);
});

QUnit.test("should get and set the slot's signet description on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetDescription(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-edit-signet-bonus1\" class=\"bonus-val const\">2.1011</span><span class=\"bonus-val const\">%</span>.");
    swlcalc.gear.slots.finger.edit.setSignetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's signet bonus value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "61");
    swlcalc.gear.slots.luck.edit.setSignetBonusN(1, "1992.0804");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "1992.0804");
});

QUnit.test("should get and set the slot's signet item image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.getSignetImgItem(), "assets/images/icons/signet/wrist.png");
    swlcalc.gear.slots.wrist.edit.setSignetImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.wrist.edit.getSignetImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's signet border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    swlcalc.gear.slots.head.edit.setSignetImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's signet level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.getSignetLabelLevel(), "18");
    swlcalc.gear.slots.occult.edit.setSignetLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.occult.edit.getSignetLabelLevel(), "1304");
});

QUnit.test("should return undefined or empty for elements that don't exist for this slot", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if (slot.group == "weapon") {
            assert.equal(slot.edit.getSignetRarity(), undefined);
            assert.equal(slot.edit.getSignetLevel(), undefined);
            assert.equal(slot.edit.getSignetImgItem(), undefined);
            assert.equal(slot.edit.getSignetImgRarity(), undefined);
            assert.equal(slot.edit.getSignetLabelLevel(), "");
            assert.equal(slot.edit.getSignetILvl(), "");
        }
    }
});
