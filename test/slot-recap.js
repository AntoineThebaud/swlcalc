
QUnit.module("slot-recap-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderAnimaAllocation();
        initiateAnimaAllocation();
        initiateHandlers();
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
        assert.ok(slot.recap.el.equipmentStatRawValue.length !== 0);
        if (slot.group != "weapon") {
            assert.ok(slot.recap.el.equipmentStatHPValue.length !== 0);
            assert.ok(slot.recap.el.equipmentStatARValue.length !== 0);
            assert.ok(slot.recap.el.equipmentStatHRValue.length !== 0);
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
            assert.ok(slot.recap.el.suffix.length !== 0);
            assert.ok(slot.recap.el.suffixQuality.length !== 0);
        } else {
            assert.ok(slot.recap.el.signetRarity.length !== 0);
            assert.ok(slot.recap.el.signetLevel.length !== 0);
        }
        assert.ok(slot.recap.el.signetDescription.length !== 0);
    }
});

QUnit.test("should get and set slot's total iLvl on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.iLvl(), "425");
    swlcalc.gear.slots.head.recap.iLvl("9999");
    assert.equal(swlcalc.gear.slots.head.recap.iLvl(), "9999");
});

QUnit.test("should get and set the slot's equipment item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentItem(), "Ashes");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), true);
    swlcalc.gear.slots.head.recap.equipmentItem("Empty");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentItem(), "Empty");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's equipment rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentRarity(), "Epic");
    swlcalc.gear.slots.head.recap.equipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentRarity(), "legendary");
});

QUnit.test("should get and set the slot's equipment quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentQuality(), "Faded");
    swlcalc.gear.slots.head.recap.equipmentQuality("Bad");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentQuality(), "Bad");
});

QUnit.test("should get and set the slot's equipment level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLevel(), "30");
    swlcalc.gear.slots.head.recap.equipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLevel(), "14");
});

QUnit.test("should get and set the slot's equipment stat raw value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatRawValue(), "1070");
    swlcalc.gear.slots.head.recap.equipmentStatRawValue("8");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatRawValue(), "8");
});

QUnit.test("should get and set the slot's equipment stat HP value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatHPValue(), "+1344");
    swlcalc.gear.slots.head.recap.equipmentStatHPValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatHPValue(), "+8");
});

QUnit.test("should get and set the slot's equipment stat AR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatARValue(), "+706");
    swlcalc.gear.slots.head.recap.equipmentStatARValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatARValue(), "+8");
});

QUnit.test("should get and set the slot's equipment stat HR value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatHRValue(), "+471");
    swlcalc.gear.slots.head.recap.equipmentStatHRValue("+8");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatHRValue(), "+8");
});

QUnit.test("should get and set the slot's equipment description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentDescription(), "");
    swlcalc.gear.slots.finger.recap.equipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's equipment bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(1), "275");
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(2), "248");
    swlcalc.gear.slots.waist.recap.equipmentBonusN(1, "19920804");
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(1), "19920804");
});

QUnit.test("should get and set the slot's equipment item image on recap view", function(assert) {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), 'assets/images/icons/talisman/head/Ashes.png');
    swlcalc.gear.slots.head.recap.equipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    swlcalc.gear.slots.head.recap.equipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment pip image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgQuality(), "assets/images/icons/quality/1.png");
    swlcalc.gear.slots.head.recap.equipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment level label on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLabelLevel(), "30");
    swlcalc.gear.slots.head.recap.equipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLabelLevel(), "1304");
});

QUnit.test("should get and set the slot's glyph item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.glyphItem(), "Stalwart");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.glyphItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.glyphItem(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's glyph rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.glyphRarity(), "Mythic");
    swlcalc.gear.slots.head.recap.glyphRarity("Common");
    assert.equal(swlcalc.gear.slots.head.recap.glyphRarity(), "Common");
});

QUnit.test("should get and set the slot's glyph quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.glyphQuality(), "Intricate");
    swlcalc.gear.slots.head.recap.glyphQuality("Poor");
    assert.equal(swlcalc.gear.slots.head.recap.glyphQuality(), "Poor");
});

QUnit.test("should get and set the slot's glyph level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.glyphLevel(), "1");
    swlcalc.gear.slots.head.recap.glyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.glyphLevel(), "7");
});

QUnit.test("should get and set the slot's glyph stat rating on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+488");
    swlcalc.gear.slots.head.recap.glyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "-99");
});

QUnit.test("should get and set the slot's glyph stat text on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.recap.glyphStatText(), "Defense Rating");
    swlcalc.gear.slots.wrist.recap.glyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.recap.glyphStatText(), "Accele Rating");
});

QUnit.test("should get and set the slot's signet item on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.signetItem(), "Signet of the Neophyte");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), true);
    swlcalc.gear.slots.finger.recap.signetItem("");
    assert.equal(swlcalc.gear.slots.finger.recap.signetItem(), "");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetEmpty.is(":hidden"), false);
});

QUnit.test("should get and set the slot's signet rarity on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.signetRarity(), "Superior");
    swlcalc.gear.slots.head.recap.signetRarity("Extreme");
    assert.equal(swlcalc.gear.slots.head.recap.signetRarity(), "Extreme");
});

QUnit.test("should get and set the slot's signet level on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.signetLevel(), "15");
    swlcalc.gear.slots.head.recap.signetLevel("7");
    assert.equal(swlcalc.gear.slots.head.recap.signetLevel(), "7");
});

QUnit.test("should get and set the slot's signet description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.signetDescription(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-recap-signet-bonus1\" class=\"bonus-val const\">2.1011</span><span class=\"bonus-val const\">%</span>.");
    swlcalc.gear.slots.finger.recap.signetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.signetDescription(), "Lorem ipsum dolor sit amet");
});

// TODO : to update when new Thorn signet is known
QUnit.test("should get and set the slot's signet bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.recap.signetBonusN(1), "0");
    swlcalc.gear.slots.luck.recap.signetBonusN(1, "1992.0804");
    assert.equal(swlcalc.gear.slots.luck.recap.signetBonusN(1), "1992.0804");
});

QUnit.test("should get and set the slot's suffix on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.recap.suffix(), "of Destruction");
    swlcalc.gear.slots.weapon2.recap.suffix("Solution");
    assert.equal(swlcalc.gear.slots.weapon2.recap.suffix(), "of Solution");
});

QUnit.test("should get and set the slot's suffix quality on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.recap.suffixQuality(), "Mk I");
    swlcalc.gear.slots.weapon.recap.suffixQuality("Mk X");
    assert.equal(swlcalc.gear.slots.weapon.recap.suffixQuality(), "Mk X");
});

QUnit.test("should return undefined or empty for elements that don't exist for this slot", function(assert) {
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if (slot.group == "talisman") {
            assert.equal(slot.recap.suffix(), "");
            assert.equal(slot.recap.suffixQuality(), "");
        } else if (slot.group == "weapon") {
            assert.equal(slot.recap.signetRarity(), "");
            assert.equal(slot.recap.signetLevel(), "");
        }
    }
});
