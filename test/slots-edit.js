
QUnit.module("slots-edit-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateHandlers();
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
        assert.ok(slot.edit.el.equipmentStatValue.length !== 0);
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
    assert.equal(swlcalc.gear.slots.head.edit.iLvl(), "425");
    swlcalc.gear.slots.head.edit.iLvl("9999");
    assert.equal(swlcalc.gear.slots.head.edit.iLvl(), "9999");
});

QUnit.test("should get and set the slot's equipment id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentId(), "1");
    swlcalc.gear.slots.head.edit.equipmentId("3");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentId(), "3");
});

QUnit.test("should get and set the slot's equipment rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentRarity(), "epic");
    swlcalc.gear.slots.head.edit.equipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentRarity(), "legendary");
});

QUnit.test("should get and set the slot's equipment quality on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentQuality(), "1");
    swlcalc.gear.slots.head.edit.equipmentQuality("4");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentQuality(), "4");
});

QUnit.test("should get and set the slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevel(), "30");
    swlcalc.gear.slots.head.edit.equipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevel(), "14");
});

QUnit.test("should get and set the lower bound for slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevelMin(), "1");
    swlcalc.gear.slots.head.edit.equipmentLevelMin("99");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's equipment level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevelMax(), "30");
    swlcalc.gear.slots.head.edit.equipmentLevelMax("99");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevelMax(), "99");
});

QUnit.test("should get and set the slot's equipment stat value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentStatValue(), "1070");
    swlcalc.gear.slots.head.edit.equipmentStatValue("8");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentStatValue(), "8");
});

QUnit.test("should get and set the slot's equipment iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentILvl(), "223");
    swlcalc.gear.slots.head.edit.equipmentILvl("800000000000");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentILvl(), "800000000000");
});

QUnit.test("should get and set the slot's equipment description on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.equipmentDescription(), "");
    swlcalc.gear.slots.finger.edit.equipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.equipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's equipment bonus value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentBonusN(1), "315");
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentBonusN(2), "196");
    swlcalc.gear.slots.waist.edit.equipmentBonusN(1, "19920804");
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentBonusN(1), "19920804");
});

QUnit.test("should get and set the slot's equipment item image on edit view", function(assert) {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.edit.equipmentImgItem(), 'assets/images/icons/talisman/head/Ashes.png');
    swlcalc.gear.slots.head.edit.equipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    swlcalc.gear.slots.head.edit.equipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment pip image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.head.edit.equipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLabelLevel(), "30");
    swlcalc.gear.slots.head.edit.equipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLabelLevel(), "1304");
});

QUnit.test("should get and set the slot's glyph id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphId(), "hit-rating");
    swlcalc.gear.slots.head.edit.glyphId("evade-rating");
    assert.equal(swlcalc.gear.slots.head.edit.glyphId(), "evade-rating");
});

QUnit.test("should get and set the slot's glyph rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphRarity(), "mythic");
    swlcalc.gear.slots.head.edit.glyphRarity("standard");
    assert.equal(swlcalc.gear.slots.head.edit.glyphRarity(), "standard");
});

QUnit.test("should get and set the slot's glyph quality on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphQuality(), "3");
    swlcalc.gear.slots.head.edit.glyphQuality("1");
    assert.equal(swlcalc.gear.slots.head.edit.glyphQuality(), "1");
});

QUnit.test("should get and set the slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphLevel(), "1");
    swlcalc.gear.slots.head.edit.glyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.edit.glyphLevel(), "7");
});

QUnit.test("should get and set the lower bound for slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.glyphLevelMin(), "1");
    swlcalc.gear.slots.luck.edit.glyphLevelMin("99");
    assert.equal(swlcalc.gear.slots.luck.edit.glyphLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's glyph level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphLevelMax(), "20");
    swlcalc.gear.slots.head.edit.glyphLevelMax("99");
    assert.equal(swlcalc.gear.slots.head.edit.glyphLevelMax(), "99");
});

QUnit.test("should get and set the slot's glyph stat rating on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphStatRating(), "+488");
    swlcalc.gear.slots.head.edit.glyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.edit.glyphStatRating(), "-99");
});

QUnit.test("should get and set the slot's glyph stat text on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.glyphStatText(), "Defense Rating");
    swlcalc.gear.slots.wrist.edit.glyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.edit.glyphStatText(), "Accele Rating");
});

QUnit.test("should get and set the slot's glyph iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.glyphILvl(), 115);
    swlcalc.gear.slots.neck.edit.glyphILvl(666);
    assert.equal(swlcalc.gear.slots.neck.edit.glyphILvl(), 666);
});

QUnit.test("should get and set the slot's glyph item image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphImgItem(), "assets/images/icons/glyph/hit-rating.png");
    swlcalc.gear.slots.head.edit.glyphImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.glyphImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    swlcalc.gear.slots.head.edit.glyphImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.glyphImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph pip image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.weapon2.edit.glyphImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.glyphLabelLevel(), "20");
    swlcalc.gear.slots.neck.edit.glyphLabelLevel("1217");
    assert.equal(swlcalc.gear.slots.neck.edit.glyphLabelLevel(), "1217");
});

QUnit.test("should get and set the slot's signet id on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.signetId(), "4");
    swlcalc.gear.slots.occult.edit.signetId("none");
    assert.equal(swlcalc.gear.slots.occult.edit.signetId(), "none");
});

QUnit.test("should get and set the slot's signet rarity on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.signetRarity(), "superior");
    swlcalc.gear.slots.head.edit.signetRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.edit.signetRarity(), "legendary");
});

QUnit.test("should get and set the slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.signetLevel(), "15");
    swlcalc.gear.slots.head.edit.signetLevel("7");
    assert.equal(swlcalc.gear.slots.head.edit.signetLevel(), "7");
});

QUnit.test("should get and set the lower bound for slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.signetLevelMin(), "1");
    swlcalc.gear.slots.luck.edit.signetLevelMin("99");
    assert.equal(swlcalc.gear.slots.luck.edit.signetLevelMin(), "99");
});

QUnit.test("should get and set the upper bound for slot's signet level on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.signetLevelMax(), "20");
    swlcalc.gear.slots.waist.edit.signetLevelMax("99");
    assert.equal(swlcalc.gear.slots.waist.edit.signetLevelMax(), "99");
});

QUnit.test("should get and set the slot's signet iLvl on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.signetILvl(), 26);
    swlcalc.gear.slots.head.edit.signetILvl(666);
    assert.equal(swlcalc.gear.slots.head.edit.signetILvl(), 666);
});

QUnit.test("should get and set the slot's signet description on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.signetDescription(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-edit-signet-bonus\" class=\"bonus-val const\">2.1011</span><span class=\"bonus-val const\">%</span>.");
    swlcalc.gear.slots.finger.edit.signetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.signetDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's signet bonus value on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.signetBonus(), "69.7008");
    swlcalc.gear.slots.luck.edit.signetBonus("1992.0804");
    assert.equal(swlcalc.gear.slots.luck.edit.signetBonus(), "1992.0804");
});

QUnit.test("should get and set the slot's signet item image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.signetImgItem(), "assets/images/icons/signet/wrist.png");
    swlcalc.gear.slots.wrist.edit.signetImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.wrist.edit.signetImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's signet border image on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.signetImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    swlcalc.gear.slots.head.edit.signetImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.signetImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's signet level label on edit view", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.signetLabelLevel(), "18");
    swlcalc.gear.slots.occult.edit.signetLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.occult.edit.signetLabelLevel(), "1304");
});

QUnit.test("should return undefined or empty for elements that don't exist for this slot", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if (slot.group == "weapon") {
            assert.equal(slot.edit.signetRarity(), undefined);
            assert.equal(slot.edit.signetLevel(), undefined);
            assert.equal(slot.edit.signetImgItem(), undefined);
            assert.equal(slot.edit.signetImgRarity(), undefined);
            assert.equal(slot.edit.signetLabelLevel(), "");
            assert.equal(slot.edit.signetILvl(), "");
        }
    }
});
