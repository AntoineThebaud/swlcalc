
QUnit.module("slot-recap-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderAnimaAllocation();
        renderPassives();
        initiateHandlers();
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

QUnit.test("should get and set slot's total iLvl on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getILvl(), "425");
    swlcalc.gear.slots.head.recap.setILvl("9999");
    assert.equal(swlcalc.gear.slots.head.recap.getILvl(), "9999");
});

QUnit.test("should get and set the slot's equipment item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentItem(), "Ashes");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), true);
    swlcalc.gear.slots.head.recap.setEquipmentItem("Empty");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentItem(), "Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's equipment rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentRarity(), "Epic");
    swlcalc.gear.slots.head.recap.setEquipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentRarity(), "legendary");
});

QUnit.test("should get and set the slot's equipment quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentQuality(), "Faded");
    swlcalc.gear.slots.head.recap.setEquipmentQuality("Bad");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentQuality(), "Bad");
});

QUnit.test("should get and set the slot's equipment level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentLevel(), "30");
    swlcalc.gear.slots.head.recap.setEquipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentLevel(), "14");
});

QUnit.test("should get and set the slot's equipment stat raw value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatPowerValue(), "1070");
    swlcalc.gear.slots.head.recap.setEquipmentStatPowerValue("8");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatPowerValue(), "8");
});

QUnit.test("should get and set the slot's equipment stat HP value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatHPValue(), "+1345");
    swlcalc.gear.slots.head.recap.setEquipmentStatHPValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatHPValue(), "+8");
});

QUnit.test("should get and set the slot's equipment stat AR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatARValue(), "+706");
    swlcalc.gear.slots.head.recap.setEquipmentStatARValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatARValue(), "+8");
});

QUnit.test("should get and set the slot's equipment stat HR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatHRValue(), "+471");
    swlcalc.gear.slots.head.recap.setEquipmentStatHRValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatHRValue(), "+8");
});

QUnit.test("should get and set the slot's equipment stat raw value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatProtValue(), "+468");
    swlcalc.gear.slots.head.recap.setEquipmentStatProtValue("+124587");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentStatProtValue(), "+124587");
});

QUnit.test("should get and set the slot's equipment description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.getEquipmentDescription(), "");
    swlcalc.gear.slots.finger.recap.setEquipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.getEquipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's equipment bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.recap.getEquipmentBonusN(1), "275");
    assert.equal(swlcalc.gear.slots.waist.recap.getEquipmentBonusN(2), "66");
    swlcalc.gear.slots.waist.recap.setEquipmentBonusN(1, "19920804");
    assert.equal(swlcalc.gear.slots.waist.recap.getEquipmentBonusN(1), "19920804");
});

QUnit.test("should get and set the slot's equipment item image on recap view", function(assert) {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), 'assets/images/icons/talisman/head/Ashes.png');
    swlcalc.gear.slots.head.recap.setEquipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    swlcalc.gear.slots.head.recap.setEquipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment pip image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.head.recap.setEquipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment level label on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentLabelLevel(), "30");
    swlcalc.gear.slots.head.recap.setEquipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.recap.getEquipmentLabelLevel(), "1304");
});

QUnit.test("should get and set the slot's glyph item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.getGlyphItem(), "Stalwart");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.setGlyphItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.getGlyphItem(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's glyph rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphRarity(), "Mythic");
    swlcalc.gear.slots.head.recap.setGlyphRarity("Common");
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphRarity(), "Common");
});

QUnit.test("should get and set the slot's glyph quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphQuality(), "Intricate");
    swlcalc.gear.slots.head.recap.setGlyphQuality("Poor");
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphQuality(), "Poor");
});

QUnit.test("should get and set the slot's glyph level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphLevel(), "1");
    swlcalc.gear.slots.head.recap.setGlyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphLevel(), "7");
});

QUnit.test("should get and set the slot's glyph stat rating on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphStatRating(), "+488");
    swlcalc.gear.slots.head.recap.setGlyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.recap.getGlyphStatRating(), "-99");
});

QUnit.test("should get and set the slot's glyph stat text on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.recap.getGlyphStatText(), "Defense Rating");
    swlcalc.gear.slots.wrist.recap.setGlyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.recap.getGlyphStatText(), "Accele Rating");
});

QUnit.test("should get and set the slot's signet item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.getSignetItem(), "Signet of the Neophyte");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.setSignetItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.getSignetItem(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's signet rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getSignetRarity(), "Superior");
    swlcalc.gear.slots.head.recap.setSignetRarity("Extreme");
    assert.equal(swlcalc.gear.slots.head.recap.getSignetRarity(), "Extreme");
});

QUnit.test("should get and set the slot's signet level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.getSignetLevel(), "15");
    swlcalc.gear.slots.head.recap.setSignetLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.getSignetLevel(), "7");
});

QUnit.test("should get and set the slot's signet description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.getSignetDescription(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-recap-signet-bonus1\" class=\"bonus-val const\">2.1011</span><span class=\"bonus-val const\">%</span>.");
    swlcalc.gear.slots.finger.recap.setSignetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.getSignetDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's signet bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.recap.getSignetBonusN(1), "61");
    swlcalc.gear.slots.luck.recap.setSignetBonusN(1, "1992.0804");
    assert.equal(swlcalc.gear.slots.luck.recap.getSignetBonusN(1), "1992.0804");
});

QUnit.test("should get and set the slot's affix on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.recap.getAffix(), "of Destruction");
    swlcalc.gear.slots.weapon2.recap.setAffix("Solution");
    assert.equal(swlcalc.gear.slots.weapon2.recap.getAffix(), "of Solution");
});

QUnit.test("should get and set the slot's affix quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.recap.getAffixQuality(), "Mk I");
    swlcalc.gear.slots.weapon.recap.setAffixQuality("Mk X");
    assert.equal(swlcalc.gear.slots.weapon.recap.getAffixQuality(), "Mk X");
});

QUnit.test("should return undefined or empty for elements that don't exist for this slot", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if (slot.group == "talisman") {
            assert.equal(slot.recap.getAffix(), "");
            assert.equal(slot.recap.getAffixQuality(), "");
        } else if (slot.group == "weapon") {
            assert.equal(slot.recap.getSignetRarity(), "");
            assert.equal(slot.recap.getSignetLevel(), "");
        }
    }
});
