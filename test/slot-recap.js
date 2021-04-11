
QUnit.module("slot-recap-dom", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should have required components in the DOM", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.ok(slot.recap.el.section.length !== 0);
        assert.ok(slot.recap.el.div.length !== 0);
        assert.ok(slot.recap.el.editBtn.length !== 0);
        assert.ok(slot.recap.el.editBtnImg.length !== 0);
        if (slot.group == "weapon") {
            assert.ok(slot.recap.el.weaponActive.length !== 0);
        }
        assert.ok(slot.recap.el.iLvl.length !== 0);
        assert.ok(slot.recap.el.equipmentEmpty.length !== 0);
        assert.ok(slot.recap.el.equipmentTitleSection.length !== 0);
        assert.ok(slot.recap.el.equipmentTitle.length !== 0);
        assert.ok(slot.recap.el.equipmentSubtitleSection.length !== 0);
        assert.ok(slot.recap.el.equipmentItem.length !== 0);
        assert.ok(slot.recap.el.equipmentRarity.length !== 0);
        assert.ok(slot.recap.el.equipmentQuality.length !== 0);
        assert.ok(slot.recap.el.equipmentLevel.length !== 0);
        assert.ok(slot.recap.el.equipmentStatSection.length !== 0);
        assert.ok(slot.recap.el.equipmentStatPowerValue.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.recap.el.equipmentStatHPValue.length !== 0);
            assert.ok(slot.recap.el.equipmentStatARValue.length !== 0);
            assert.ok(slot.recap.el.equipmentStatHRValue.length !== 0);
            assert.ok(slot.recap.el.equipmentStatProtValue.length !== 0);
        }
        assert.ok(slot.recap.el.equipmentImgSection.length !== 0);
        assert.ok(slot.recap.el.equipmentImgItem.length !== 0);
        assert.ok(slot.recap.el.equipmentImgRarity.length !== 0);
        assert.ok(slot.recap.el.equipmentImgQuality.length !== 0);
        assert.ok(slot.recap.el.equipmentDescription.length !== 0);
        assert.ok(slot.recap.el.equipmentDescriptionSection.length !== 0);
        assert.ok(slot.recap.el.equipmentLabelLevel.length !== 0);
        assert.ok(slot.recap.el.glyphSection.length !== 0);
        assert.ok(slot.recap.el.glyphEmpty.length !== 0);
        assert.ok(slot.recap.el.glyphTitle.length !== 0);
        assert.ok(slot.recap.el.glyphItem.length !== 0);
        assert.ok(slot.recap.el.glyphRarity.length !== 0);
        assert.ok(slot.recap.el.glyphQuality.length !== 0);
        assert.ok(slot.recap.el.glyphLevel.length !== 0);
        assert.ok(slot.recap.el.glyphStatRating.length !== 0);
        assert.ok(slot.recap.el.glyphStatText.length !== 0);
        assert.ok(slot.recap.el.signetSection.length !== 0);
        assert.ok(slot.recap.el.signetEmpty.length !== 0);
        assert.ok(slot.recap.el.signetTitle.length !== 0);
        assert.ok(slot.recap.el.signetItem.length !== 0);
        if (slot.group == "weapon") {
            assert.ok(slot.recap.el.affix.length !== 0);
            assert.ok(slot.recap.el.affixQuality.length !== 0);
        } else {
            assert.ok(slot.recap.el.signetRarity.length !== 0);
            assert.ok(slot.recap.el.signetLevel.length !== 0);
        }
        assert.ok(slot.recap.el.signetDescription.length !== 0);
    }
});

QUnit.module("slot-recap-unit-tests", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should set slot's total iLvl", function(assert) {
    swlcalc.gear.slots.head.recap.setILvl("9999");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "9999");
});

QUnit.test("should set the slot's equipment item", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentItem("Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's equipment rarity", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "legendary");
});

QUnit.test("should set the slot's equipment quality", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentQuality("Bad");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Bad");
});

QUnit.test("should set the slot's equipment level", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "14");
});

QUnit.test("should set the slot's equipment stat raw value", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentStatPowerValue("8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "8");
});

QUnit.test("should set the slot's equipment stat HP value", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentStatHPValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat AR value", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentStatARValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat HR value", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentStatHRValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat raw value", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentStatProtValue("+124587");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+124587");
});

QUnit.test("should set the slot's equipment description", function(assert) {
    swlcalc.gear.slots.finger.recap.setEquipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentDescription.html(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set the slot's equipment item image", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgItem.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment border image", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment pip image", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment level label", function(assert) {
    swlcalc.gear.slots.head.recap.setEquipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "1304");
});

QUnit.test("should set the slot's glyph item", function(assert) {
    swlcalc.gear.slots.finger.recap.setGlyphItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphItem.text(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's glyph rarity", function(assert) {
    swlcalc.gear.slots.head.recap.setGlyphRarity("Common");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphRarity.text(), "Common");
});

QUnit.test("should set the slot's glyph quality", function(assert) {
    swlcalc.gear.slots.head.recap.setGlyphQuality("Poor");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphQuality.text(), "Poor");
});

QUnit.test("should set the slot's glyph level", function(assert) {
    swlcalc.gear.slots.head.recap.setGlyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphLevel.text(), "7");
});

QUnit.test("should set the slot's glyph stat rating", function(assert) {
    swlcalc.gear.slots.head.recap.setGlyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "-99");
});

QUnit.test("should set the slot's glyph stat text", function(assert) {
    swlcalc.gear.slots.wrist.recap.setGlyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.recap.el.glyphStatText.text(), "Accele Rating");
});

QUnit.test("should set the slot's signet item", function(assert) {
    swlcalc.gear.slots.finger.recap.setSignetItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetItem.text(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's signet rarity", function(assert) {
    swlcalc.gear.slots.head.recap.setSignetRarity("Extreme");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetRarity.text(), "Extreme");
});

QUnit.test("should set the slot's signet level", function(assert) {
    swlcalc.gear.slots.head.recap.setSignetLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetLevel.text(), "7");
});

QUnit.test("should set the slot's signet description", function(assert) {
    swlcalc.gear.slots.finger.recap.setSignetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetDescription.html(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set the slot's affix", function(assert) {
    swlcalc.gear.slots.weapon2.recap.setAffix("Solution");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affix.text(), "of Solution");
});

QUnit.test("should set the slot's affix quality", function(assert) {
    swlcalc.gear.slots.weapon.recap.setAffixQuality("Mk X");
    assert.equal(swlcalc.gear.slots.weapon.recap.el.affixQuality.text(), "Mk X");
});

QUnit.module("slot-recap-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();

        createShuffledBuild();
    }
});

QUnit.test("should set the slot's equipment bonus value", function(assert) {
    swlcalc.gear.slots.waist.recap.setEquipmentBonusN(1, "19920804");
    assert.equal($('#waist-recap-equipment-bonus1').text(), "19920804");
});

QUnit.test("should set the slot's signet bonus value", function(assert) {
    swlcalc.gear.slots.luck.recap.setSignetBonusN(1, "1992.0804");
    assert.equal($('#luck-recap-signet-bonus1').text(), "1992.0804");
});

QUnit.test("should set the weapon's affix bonus value color", function(assert) {
    swlcalc.gear.slots.weapon2.recap.setAffixBonusWrapper("myclass");
    assert.equal($('#weapon2-recap-affix-bonus-wrapper').attr('class'), "myclass");
});
