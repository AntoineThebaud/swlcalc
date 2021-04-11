
QUnit.module("slot-edit-dom", {
    beforeEach: function(assert) {
        includeGear();
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

QUnit.module("slot-edit-unit-tests", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should set & get the slot's total iLvl", function(assert) {
    swlcalc.gear.slots.head.edit.setILvl("9999");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "9999");
});

QUnit.test("should set & get the slot's equipment stat power value", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentStatPowerValue("8");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "8");
});

QUnit.test("should set & get the slot's equipment stat prot value", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentStatProtValue("+65789");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+65789");
});

QUnit.test("should set & get the slot's equipment iLvl", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentILvl("800000000000");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "800000000000");
});

QUnit.test("should set & get the slot's equipment description", function(assert) {
    swlcalc.gear.slots.finger.edit.setEquipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set & get the slot's equipment item image", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's equipment border image", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's equipment pip image", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's equipment level label", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentLabelLevel("1304");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "1304");
});

QUnit.test("should set the slot's glyph stat rating and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphStatRating("-99");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "-99");
});

QUnit.test("should set & get the slot's glyph stat text", function(assert) {
    swlcalc.gear.slots.wrist.edit.setGlyphStatText("Accele Rating");
    assert.equal(swlcalc.gear.slots.wrist.edit.getGlyphStatText(), "Accele Rating");
});

QUnit.test("should set & get the slot's glyph iLvl", function(assert) {
    swlcalc.gear.slots.neck.edit.setGlyphILvl("666");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphILvl(), "666");
});

QUnit.test("should set & get the slot's glyph item image", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's glyph border image", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's glyph pip image", function(assert) {
    swlcalc.gear.slots.weapon2.edit.setGlyphImgQuality("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphImgQuality(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's glyph level label", function(assert) {
    swlcalc.gear.slots.neck.edit.setGlyphLabelLevel("1217");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "1217");
});

QUnit.test("should set & get the slot's signet iLvl", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetILvl("666");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "666");
});

QUnit.test("should set & get the slot's signet description", function(assert) {
    swlcalc.gear.slots.finger.edit.setSignetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should set & get the slot's signet item image", function(assert) {
    swlcalc.gear.slots.wrist.edit.setSignetImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.wrist.edit.getSignetImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's signet border image", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should set & get the slot's signet level label", function(assert) {
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

//TODO/TEST add test for setAffixBonusWrapper

QUnit.module("slot-edit-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's equipment id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentId("6");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "6");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "Whenever you hit the same enemy <span class=\"stat-value const\">6</span> times in succession, your next damaging Power Ability deals an additional <span id=\"head-edit-equipment-bonus1\" class=\"stat-value dps\">634</span> physical damage.");
    //TODO not working assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "assets/images/icons/weapon/something.png");

    swlcalc.gear.slots.head.edit.setEquipmentId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "");
    assert.equal($("#stat-attack-rating").text(), "4294");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's equipment rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentRarity("legendary");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentRarity(), "legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "1966");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+982");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "483");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "587");
    assert.equal($("#stat-attack-rating").text(), "5041");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's equipment quality and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentQuality("3");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentQuality(), "3");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "assets/images/icons/quality/3.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "91");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+46");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "10");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "114");
    assert.equal($("#stat-attack-rating").text(), "4328");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's equipment level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentLevel("14");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "14");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "14");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "172");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+85");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "25");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "129");
    assert.equal($("#stat-attack-rating").text(), "4359");
});

QUnit.test("should set the lower bound for slot's equipment level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentLevelMin("99");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMin(), "99");
});

QUnit.test("should set the upper bound for slot's equipment level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentLevelMax("99");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMax(), "99");
});

QUnit.test("should set & get the slot's equipment bonus value", function(assert) {
    swlcalc.gear.slots.waist.edit.setEquipmentBonusN(1, "19920804");

    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentBonusN(1), "19920804");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's glyph id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphId("evade-rating");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "evade-rating");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "assets/images/icons/glyph/evade-rating.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+172");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatText(), "Evade Rating");
    assert.equal($("#stat-hit-rating").text(), "+634");
    assert.equal($("#stat-evade-rating").text(), "+925");

    swlcalc.gear.slots.head.edit.setGlyphId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "assets/images/icons/glyph/none.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatText(), "");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "65");
    assert.equal($("#stat-evade-rating").text(), "+753");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's glyph rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphRarity("mythic");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphRarity(), "mythic");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+591");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "206");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "271");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's glyph quality and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphQuality("1");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+138");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "37");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "102");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphLevel("20");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLabelLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+231");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "63");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "128");
    assert.equal($("#stat-hit-rating").text(), "+865");
});

QUnit.test("should set the lower bound for slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.luck.edit.setGlyphLevelMin("99");

    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphLevelMin(), "99");
});

QUnit.test("should set the upper bound for slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphLevelMax("99");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevelMax(), "99");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's signet id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetId("3");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetId(), "3");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of Shotgun Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">18.6479</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), "assets/images/icons/signet/head.png");

    swlcalc.gear.slots.head.edit.setSignetId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), "assets/images/icons/signet/none.png");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "0");
    assert.equal($("#stat-ilvl").text(), "556");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's signet rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetRarity("legendary");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetRarity(), "legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgRarity(), "assets/images/icons/rarity/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">41.0097</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "184");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "238");
});

// TODO : cover all changes done to summary + -recap
QUnit.test("should set the slot's signet level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetLevel("7");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetLevel(), "7");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetLabelLevel(), "7");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">12.3684</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "48");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "102");
    assert.equal($("#stat-ilvl").text(), "561");
});

QUnit.test("should set the lower bound for slot's signet level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.luck.edit.setSignetLevelMin("99");

    assert.equal(swlcalc.gear.slots.luck.edit.getSignetLevelMin(), "99");
});

QUnit.test("should set the upper bound for slot's signet level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.waist.edit.setSignetLevelMax("99");

    assert.equal(swlcalc.gear.slots.waist.edit.getSignetLevelMax(), "99");
});

QUnit.test("should set & get the slot's signet bonus value", function(assert) {
    swlcalc.gear.slots.luck.edit.setSignetBonusN(1, "1992.0804");

    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "1992.0804");
});

QUnit.test("should set the weapon's affix bonus value color", function(assert) {
    swlcalc.gear.slots.weapon2.edit.setAffixBonusWrapper("myclass");
    assert.equal($('#weapon2-edit-affix-bonus-wrapper').attr('class'), "myclass");
});
