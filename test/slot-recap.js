
QUnit.module("slot-recap-unit-tests", {
    beforeEach: function(assert) {
        renderGearOLD();
        renderSummary();
        renderAnimaAllocation();
        renderPassives();
        initiateGearHandlers();
        initiateAnimaAllocation();
        initiatePassives();
        createTankBuild();
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

QUnit.test("should set slot's total iLvl on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "425");
    swlcalc.gear.slots.head.recap.setILvl("9999");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "9999");
});

QUnit.test("should set the slot's equipment item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Ashes");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), true);
    swlcalc.gear.slots.head.recap.setEquipmentItem("Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's equipment rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "Epic");
    swlcalc.gear.slots.head.recap.setEquipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "legendary");
});

QUnit.test("should set the slot's equipment quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Faded");
    swlcalc.gear.slots.head.recap.setEquipmentQuality("Bad");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Bad");
});

QUnit.test("should set the slot's equipment level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "30");
    swlcalc.gear.slots.head.recap.setEquipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "14");
});

QUnit.test("should set the slot's equipment stat raw value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "1070");
    swlcalc.gear.slots.head.recap.setEquipmentStatPowerValue("8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "8");
});

QUnit.test("should set the slot's equipment stat HP value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+1345");
    swlcalc.gear.slots.head.recap.setEquipmentStatHPValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat AR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+706");
    swlcalc.gear.slots.head.recap.setEquipmentStatARValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat HR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+471");
    swlcalc.gear.slots.head.recap.setEquipmentStatHRValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+8");
});

QUnit.test("should set the slot's equipment stat raw value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+468");
    swlcalc.gear.slots.head.recap.setEquipmentStatProtValue("+124587");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+124587");
});

QUnit.test("should set the slot's equipment description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentDescription.html(), "");
    swlcalc.gear.slots.finger.recap.setEquipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentDescription.html(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set the slot's equipment bonus value on recap view", function(assert) {
    assert.equal($('#waist-recap-equipment-bonus1').text(), "275");
    assert.equal($('#waist-recap-equipment-bonus2').text(), "66");
    swlcalc.gear.slots.waist.recap.setEquipmentBonusN(1, "19920804");
    assert.equal($('#waist-recap-equipment-bonus1').text(), "19920804");
});

QUnit.test("should set the slot's equipment item image on recap view", function(assert) {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), 'assets/images/icons/talisman/head/Ashes.png');
    swlcalc.gear.slots.head.recap.setEquipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgItem.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment border image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "assets/images/icons/rarity/head/epic-42x42.png");
    swlcalc.gear.slots.head.recap.setEquipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment pip image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.head.recap.setEquipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set the slot's equipment level label on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "30");
    swlcalc.gear.slots.head.recap.setEquipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "1304");
});

QUnit.test("should set the slot's glyph item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphItem.text(), "Stalwart");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.setGlyphItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphItem.text(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's glyph rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphRarity.text(), "Mythic");
    swlcalc.gear.slots.head.recap.setGlyphRarity("Common");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphRarity.text(), "Common");
});

QUnit.test("should set the slot's glyph quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphQuality.text(), "Intricate");
    swlcalc.gear.slots.head.recap.setGlyphQuality("Poor");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphQuality.text(), "Poor");
});

QUnit.test("should set the slot's glyph level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphLevel.text(), "1");
    swlcalc.gear.slots.head.recap.setGlyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphLevel.text(), "7");
});

QUnit.test("should set the slot's glyph stat rating on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+488");
    swlcalc.gear.slots.head.recap.setGlyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "-99");
});

QUnit.test("should set the slot's glyph stat text on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.recap.el.glyphStatText.text(), "Defense Rating");
    swlcalc.gear.slots.wrist.recap.setGlyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.recap.el.glyphStatText.text(), "Accele Rating");
});

QUnit.test("should set the slot's signet item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetItem.text(), "Signet of the Neophyte");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.setSignetItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetItem.text(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), false);
});

QUnit.test("should set the slot's signet rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.signetRarity.text(), "Superior");
    swlcalc.gear.slots.head.recap.setSignetRarity("Extreme");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetRarity.text(), "Extreme");
});

QUnit.test("should set the slot's signet level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.signetLevel.text(), "15");
    swlcalc.gear.slots.head.recap.setSignetLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetLevel.text(), "7");
});

QUnit.test("should set the slot's signet description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetDescription.html(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-recap-signet-bonus1\" class=\"stat-value const\">2.1011</span><span class=\"stat-value const\">%</span>.");
    swlcalc.gear.slots.finger.recap.setSignetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetDescription.html(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set the slot's signet bonus value on recap view", function(assert) {
    assert.equal($('#luck-recap-signet-bonus1').text(), "61");
    swlcalc.gear.slots.luck.recap.setSignetBonusN(1, "1992.0804");
    assert.equal($('#luck-recap-signet-bonus1').text(), "1992.0804");
});

QUnit.test("should set the slot's affix on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affix.text(), "of Destruction");
    swlcalc.gear.slots.weapon2.recap.setAffix("Solution");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affix.text(), "of Solution");
});

QUnit.test("should set the slot's affix quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.recap.el.affixQuality.text(), "Mk I");
    swlcalc.gear.slots.weapon.recap.setAffixQuality("Mk X");
    assert.equal(swlcalc.gear.slots.weapon.recap.el.affixQuality.text(), "Mk X");
});

QUnit.test("should return empty for elements that don't exist for this slot", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if (slot.group == "talisman") {
            assert.equal(slot.recap.el.affix.text(), "");
            assert.equal(slot.recap.el.affixQuality.text(), "");
        } else if (slot.group == "weapon") {
            assert.equal(slot.recap.el.signetRarity.text(), "");
            assert.equal(slot.recap.el.signetLevel.text(), "");
        }
    }
});

//TODO/TEST add test for setSignetBonusWrapper
