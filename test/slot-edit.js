
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

QUnit.module("slot-edit-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();

        createShuffledBuild();
    }
});

QUnit.test("should set the slot's equipment id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentId("6");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "6");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "Whenever you hit the same enemy <span class=\"stat-value const\">6</span> times in succession, your next damaging Power Ability deals an additional <span id=\"head-edit-equipment-bonus1\" class=\"stat-value dps\">634</span> physical damage.");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Ashes of Elder Things");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentDescription.text(), "Whenever you hit the same enemy 6 times in succession, your next damaging Power Ability deals an additional 634 physical damage.");
    //TODO not working assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "assets/images/icons/weapon/something.png");
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentTitleSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentSubtitleSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentImgSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentStatSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":hidden"));

    swlcalc.gear.slots.head.edit.setEquipmentId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "assets/images/icons/equipment/head/None.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "104");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "");
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentTitleSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentSubtitleSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentImgSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentStatSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.equipmentEmpty.is(":visible"));
    assert.equal($("#stat-ilvl").text(), "562");
    assert.equal($("#stat-power-rating").text(), "5225");
    assert.equal($("#stat-attack-rating").text(), "4294");
    assert.equal($("#stat-heal-rating").text(), "2600");
    assert.equal($("#stat-hit-points").text(), "14904");
    assert.equal($("#stat-combat-power").text(), "602.4");
    assert.equal($("#stat-healing-power").text(), "126.8");
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value heal">27</span> Healing on Critical Heals');
    assert.equal(swlcalc.gear.agents[2].getText50(), '<span class="stat-value dps">129</span> Damage on Critical Hits');
    assert.equal($("#stat-agent1-bonus50").text(), "27 Healing on Critical Heals");
    assert.equal($("#stat-agent3-bonus50").text(), "129 Damage on Critical Hits");
});

QUnit.test("should set the slot's equipment rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentRarity("legendary");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentRarity(), "legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "1966");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+982");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "483");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "587");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), "color-legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), "label-level big border-legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "Legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "587");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "1966");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+3201");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+747");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+79");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+982");
    assert.equal($("#stat-ilvl").text(), "615");
    assert.equal($("#stat-power-rating").text(), "7191");
    assert.equal($("#stat-attack-rating").text(), "5041");
    assert.equal($("#stat-heal-rating").text(), "2679");
    assert.equal($("#stat-hit-points").text(), "18105");
    assert.equal($("#stat-combat-power").text(), "658.4");
    assert.equal($("#stat-healing-power").text(), "128.3");
    assert.equal($("#stat-protection").text(), "5745");
    assert.equal($("#stat-damage-mitigation").text(), "19%");
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value heal">28</span> Healing on Critical Heals');
    assert.equal(swlcalc.gear.agents[2].getText50(), '<span class="stat-value dps">141</span> Damage on Critical Hits');
    assert.equal($("#stat-agent1-bonus50").text(), "28 Healing on Critical Heals");
    assert.equal($("#stat-agent3-bonus50").text(), "141 Damage on Critical Hits");
});

QUnit.test("should set the slot's equipment quality and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentQuality("3");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentQuality(), "3");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "assets/images/icons/quality/3.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "91");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+46");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "10");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "114");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Radiant");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/3.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "114");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "91");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+148");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+35");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+4");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+46");
    assert.equal($("#stat-ilvl").text(), "563");
    assert.equal($("#stat-power-rating").text(), "5316");
    assert.equal($("#stat-attack-rating").text(), "4328");
    assert.equal($("#stat-heal-rating").text(), "2604");
    assert.equal($("#stat-hit-points").text(), "15052");
    assert.equal($("#stat-combat-power").text(), "604.9");
    assert.equal($("#stat-healing-power").text(), "126.8");
    assert.equal($("#stat-protection").text(), "4809");
    assert.equal($("#stat-damage-mitigation").text(), "16.4%");
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value heal">27</span> Healing on Critical Heals');
    assert.equal(swlcalc.gear.agents[2].getText50(), '<span class="stat-value dps">130</span> Damage on Critical Hits');
    assert.equal($("#stat-agent1-bonus50").text(), "27 Healing on Critical Heals");
    assert.equal($("#stat-agent3-bonus50").text(), "130 Damage on Critical Hits");
});

QUnit.test("should set the slot's equipment level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setEquipmentLevel("14");

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "14");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "14");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatPowerValue(), "172");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentStatProtValue(), "+85");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentILvl(), "25");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "129");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "14");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "14");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "129");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatPowerValue.text(), "172");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHPValue.text(), "+280");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatARValue.text(), "+65");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatHRValue.text(), "+7");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentStatProtValue.text(), "+85");
    assert.equal($("#stat-ilvl").text(), "564");
    assert.equal($("#stat-power-rating").text(), "5397");
    assert.equal($("#stat-attack-rating").text(), "4359");
    assert.equal($("#stat-heal-rating").text(), "2607");
    assert.equal($("#stat-hit-points").text(), "15184");
    assert.equal($("#stat-combat-power").text(), "607.3");
    assert.equal($("#stat-healing-power").text(), "126.9");
    assert.equal($("#stat-protection").text(), "4848");
    assert.equal($("#stat-damage-mitigation").text(), "16.5%");
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value heal">27</span> Healing on Critical Heals');
    assert.equal(swlcalc.gear.agents[2].getText50(), '<span class="stat-value dps">131</span> Damage on Critical Hits');
    assert.equal($("#stat-agent1-bonus50").text(), "27 Healing on Critical Heals");
    assert.equal($("#stat-agent3-bonus50").text(), "131 Damage on Critical Hits");
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

QUnit.test("should set the slot's glyph id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphId("evade-rating");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "evade-rating");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "assets/images/icons/glyph/evade-rating.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+172");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatText(), "Evade Rating");
    assert.equal($("#stat-hit-rating").text(), "+634");
    assert.equal($("#stat-glance-reduction").text(), "12.5%");
    assert.equal($("#stat-evade-rating").text(), "+925");
    assert.equal($("#stat-evade-chance").text(), "6.4%");

    swlcalc.gear.slots.neck.edit.setGlyphId("critical-power");

    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphId(), "critical-power");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphImgItem(), "assets/images/icons/glyph/critical-power.png");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphStatRating(), "+12");
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphStatText(), "Critical Power");
    assert.equal(swlcalc.gear.slots.neck.recap.el.iLvl.text(), "511");
    assert.ok(swlcalc.gear.slots.neck.recap.el.glyphSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.head.recap.el.glyphEmpty.is(":hidden"));
    assert.equal(swlcalc.gear.slots.neck.recap.el.glyphItem.text(), "Devastating");
    assert.equal(swlcalc.gear.slots.neck.recap.el.glyphStatText.text(), "Critical Power");
    assert.equal($("#stat-ilvl").text(), "563");
    assert.equal($("#stat-critical-power").text(), "+1184");
    assert.equal($("#stat-critical-power-percentage").text(), "95.7%");

    swlcalc.gear.slots.head.edit.setGlyphId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgItem(), "assets/images/icons/glyph/none.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatText(), "");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "65");
    assert.ok(swlcalc.gear.slots.head.recap.el.glyphSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.glyphEmpty.is(":visible"));
    assert.equal($("#stat-evade-rating").text(), "+753");
    assert.equal($("#stat-evade-chance").text(), "5.2%");
});

QUnit.test("should set the slot's glyph rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphRarity("mythic");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphRarity(), "mythic");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+591");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "206");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "271");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "271");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphTitle.attr('class'), "color-mythic");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphRarity.text(), "Mythic");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+591");
    assert.equal($("#stat-ilvl").text(), "580");
    assert.equal($("#stat-hit-rating").text(), "+1225");
    assert.equal($("#stat-glance-reduction").text(), "24.1%");
});

QUnit.test("should set the slot's glyph quality and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphQuality("1");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+138");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "37");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "102");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "102");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphQuality.text(), "Crude");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+138");
    assert.equal($("#stat-ilvl").text(), "561");
    assert.equal($("#stat-hit-rating").text(), "+772");
    assert.equal($("#stat-glance-reduction").text(), "15.2%");
});

QUnit.test("should set the slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphLevel("20");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLabelLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+231");
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphILvl(), "63");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "128");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "128");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphLevel.text(), "20");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+231");
    assert.equal($("#stat-ilvl").text(), "564");
    assert.equal($("#stat-hit-rating").text(), "+865");
    assert.equal($("#stat-glance-reduction").text(), "17%");
});

QUnit.test("should set the lower bound for slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.luck.edit.setGlyphLevelMin("99");

    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphLevelMin(), "99");
});

QUnit.test("should set the upper bound for slot's glyph level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setGlyphLevelMax("99");

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphLevelMax(), "99");
});

QUnit.test("should set the slot's signet id and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetId("3");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetId(), "3");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of Shotgun Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">18.6479</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), "assets/images/icons/signet/head.png");

    swlcalc.gear.slots.neck.edit.setSignetId("3");

    assert.equal(swlcalc.gear.slots.neck.edit.getSignetId(), "3");
    assert.equal(swlcalc.gear.slots.neck.edit.getSignetDescription(), "Increases the damage and healing of Shotgun Power Abilities by <span id=\"neck-edit-signet-bonus1\" class=\"stat-value const\">0.29</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.neck.edit.getSignetImgItem(), "assets/images/icons/signet/neck.png");
    assert.equal(swlcalc.gear.slots.neck.edit.getILvl(), "510");
    assert.equal(swlcalc.gear.slots.neck.recap.el.iLvl.text(), "510");
    assert.ok(swlcalc.gear.slots.neck.recap.el.signetSection.is(":visible"));
    assert.ok(swlcalc.gear.slots.neck.recap.el.signetEmpty.is(":hidden"));
    assert.equal(swlcalc.gear.slots.neck.recap.el.signetItem.text(), "Signet of Riot Control");
    assert.equal(swlcalc.gear.slots.neck.recap.el.signetDescription.text(), "Increases the damage and healing of Shotgun Power Abilities by 0.29%.");
    assert.equal($("#stat-ilvl").text(), "563");

    swlcalc.gear.slots.head.edit.setSignetId("none");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetId(), "none");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), "assets/images/icons/signet/none.png");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "0");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "54");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "54");
    assert.ok(swlcalc.gear.slots.head.recap.el.signetSection.is(":hidden"));
    assert.ok(swlcalc.gear.slots.head.recap.el.signetEmpty.is(":visible"));
    assert.equal($("#stat-ilvl").text(), "556");
});

QUnit.test("should set the slot's signet rarity and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetRarity("legendary");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetRarity(), "legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgRarity(), "assets/images/icons/rarity/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">41.0097</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "184");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "238");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "238");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetTitle.attr('class'), "color-legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetRarity.text(), "Legendary");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetDescription.text(), "Increases the damage and healing of all Elite Abilities by 41.0097%.");
    assert.equal($("#stat-ilvl").text(), "576");
});

QUnit.test("should set the slot's signet level and cascade the update accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.setSignetLevel("7");

    assert.equal(swlcalc.gear.slots.head.edit.getSignetLevel(), "7");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetLabelLevel(), "7");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Increases the damage and healing of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">12.3684</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.edit.getSignetILvl(), "48");
    assert.equal(swlcalc.gear.slots.head.edit.getILvl(), "102");
    assert.equal(swlcalc.gear.slots.head.recap.el.iLvl.text(), "102");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetLevel.text(), "7");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetDescription.text(), "Increases the damage and healing of all Elite Abilities by 12.3684%.");
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
