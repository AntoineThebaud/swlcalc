
QUnit.module("slot-unit-tests", {
    beforeEach: function(assert) {
        includeGear();
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

QUnit.test("should collect current slot state", function(assert) {
    var slotState = swlcalc.gear.slots.head.state();

    assert.deepEqual(slotState.equipmentRarity, "standard");
    assert.deepEqual(slotState.equipmentQuality, "1");
    assert.deepEqual(slotState.equipmentLevel, "20");
    assert.deepEqual(slotState.glyphId, "none");
    assert.deepEqual(slotState.glyphRarity, "standard");
    assert.deepEqual(slotState.glyphQuality, "1");
    assert.deepEqual(slotState.glyphLevel, "20");
    assert.deepEqual(slotState.signetId, "none");
    assert.deepEqual(slotState.signetRarity, "standard");
    assert.deepEqual(slotState.signetLevel, "20");
});

QUnit.test("should collect current mapped slot state", function(assert) {
    var slotState = swlcalc.gear.slots.occult.mappedState();

    assert.deepEqual(slotState.equipmentId, 0);
    assert.deepEqual(slotState.equipmentRarity, 1);
    assert.deepEqual(slotState.equipmentQuality, "1");
    assert.deepEqual(slotState.equipmentLevel, "20");
    assert.deepEqual(slotState.glyphId, 0);
    assert.deepEqual(slotState.glyphRarity, 1);
    assert.deepEqual(slotState.glyphQuality, "1");
    assert.deepEqual(slotState.glyphLevel, "20");
    assert.deepEqual(slotState.signetId, 0);
    assert.deepEqual(slotState.signetRarity, 1);
    assert.deepEqual(slotState.signetLevel, "20");
});

QUnit.test("should retrieve raw protection value", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.getRawProtValue(), 21); //NB : weird but not causing issue
});

QUnit.test("should compute item iLvl with quality", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.computeItemILvlWithQuality("talisman", "legendary", "4", "19"), 773.4347826086956);
    assert.equal(swlcalc.gear.slots.occult.computeItemILvlWithQuality("glyph", "legendary", "4", "19"), 421.0526315789474);
});

QUnit.test("should compute item iLvl without quality", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.computeItemILvlWithoutQuality("weapon", "legendary", "19"), 808.695652173913);
    assert.equal(swlcalc.gear.slots.occult.computeItemILvlWithoutQuality("signet", "legendary", "19"), 191.6727);
});

// TODO : unit test for stripContent ?

QUnit.module("slot-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();

        createShuffledBuild();
    }
});

//TODO/BUGGY testing equipment images is not working (maybe because of the image.onload stuff ?). Disabled for now
QUnit.test("should update elements related to equipment's item/id accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.el.equipmentId.val("12");
    swlcalc.gear.slots.head.updateEquipment();

    // assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    // assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "Whenever you are hit <span class=\"stat-value const\">5</span> times in succession, you deal <span id=\"head-edit-equipment-bonus1\" class=\"stat-value dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentDescription.html(), "Whenever you are hit <span class=\"stat-value const\">5</span> times in succession, you deal <span id=\"head-recap-equipment-bonus1\" class=\"stat-value dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Cosmic Pigment");
});

QUnit.test("should update elements related to equipment's rarity accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.el.equipmentRarity.val("legendary");
    swlcalc.gear.slots.head.updateEquipmentRarity();

    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), 'color-legendary');
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "Legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevelMax(), "70");
    assert.equal(swlcalc.gear.slots.head.edit.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
});

QUnit.test("should update elements related to equipment's quality accordingly", function(assert) {
    swlcalc.gear.slots.neck.edit.el.equipmentQuality.val("4");
    swlcalc.gear.slots.neck.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.neck.edit.getEquipmentImgQuality(), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.neck.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.neck.recap.el.equipmentQuality.text(), "Resplendent");

    swlcalc.gear.slots.weapon2.edit.el.equipmentQuality.val("1");
    swlcalc.gear.slots.weapon2.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affixQuality.text(), "Mk I");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.signetTitle.attr('class'), 'color-standard');
});

QUnit.test("should update elements related to equipment's level accordingly", function(assert) {
  swlcalc.gear.slots.occult.edit.el.equipmentLevel.val("19");
  swlcalc.gear.slots.occult.updateEquipmentLevel();

  assert.equal(swlcalc.gear.slots.occult.edit.getEquipmentLabelLevel(), "19");
  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLevel.text(), "19");
  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLabelLevel.text(), "19");
});

QUnit.test("should update elements related to equipment's stat rating accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.equipmentLevel.val("30");
    swlcalc.gear.slots.finger.updateEquipmentStatRating();

    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentStatPowerValue(), "1756");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatPowerValue.text(), "1756");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHPValue.text(), "+2859");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatARValue.text(), "+667");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHRValue.text(), "+70");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatProtValue.text(), "+877");
});

QUnit.test("should update elements related to equipment's \"transformed\" stat value accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.equipmentStatPowerValue.text("9876");
    swlcalc.gear.slots.finger.updateTalismanStatValues();

    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHPValue.text(), "+16079");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatARValue.text(), "+3753");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHRValue.text(), "+395");
});

QUnit.test("should update elements related to equipment's ilvl accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.equipmentRarity.val("standard");
    swlcalc.gear.slots.finger.updateEquipmentILvl();

    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentILvl(), "153");
    assert.equal(swlcalc.gear.slots.finger.edit.getILvl(), "366");
});

QUnit.test("should update every bonus values present in equipment's description (both edit & recap) accordingly", function(assert) {
    $("#stat-combat-power").html("9999");
    $("#stat-healing-power").html("2222");
    swlcalc.gear.slots.waist.updateEquipmentBonuses();

    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">4250</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">944</span> health.");
});

QUnit.test("should update elements related to glyph's item/id accordingly", function(assert) {
    swlcalc.gear.slots.waist.edit.el.glyphId.val("critical-rating");
    swlcalc.gear.slots.waist.updateGlyph();

    assert.equal(swlcalc.gear.slots.waist.edit.getGlyphStatText(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.waist.recap.el.glyphStatText.text(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.waist.edit.getGlyphImgItem(), "assets/images/icons/glyph/critical-rating.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.glyphItem.text(), "Fierce");
});

QUnit.test("should update elements related to glyph's rarity accordingly", function(assert) {
    swlcalc.gear.slots.waist.edit.el.glyphRarity.val("superior");
    swlcalc.gear.slots.waist.updateGlyphRarity();

    assert.equal(swlcalc.gear.slots.waist.edit.getGlyphImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.glyphTitle.attr('class'), "color-superior");
    assert.equal(swlcalc.gear.slots.waist.edit.el.glyphLabelLevel.attr('class'), "label-level little border-superior");
    assert.equal(swlcalc.gear.slots.waist.recap.el.glyphRarity.text(), "Superior");
    assert.equal(swlcalc.gear.slots.waist.edit.el.glyphQuality.prop('options').length, 3);
});

QUnit.test("should update elements related to glyph's quality accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.glyphQuality.val("4");
    swlcalc.gear.slots.finger.updateGlyphQuality();

    assert.equal(swlcalc.gear.slots.finger.edit.getGlyphImgQuality(), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.finger.recap.el.glyphQuality.text(), "Elaborate");
});

QUnit.test("should update elements related to glyph's level accordingly", function(assert) {
    swlcalc.gear.slots.neck.edit.el.glyphLevel.val("2");
    swlcalc.gear.slots.neck.updateGlyphLevel();

    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "2");
    assert.equal(swlcalc.gear.slots.neck.recap.el.glyphLevel.text(), "2");
});

QUnit.test("should update elements related to glyph's stat rating accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.el.glyphId.val("critical-power");
    swlcalc.gear.slots.head.updateGlyphRating();

    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), "+167");
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+167");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+167");
});

QUnit.test("should update elements related to glyph's ilvl accordingly", function(assert) {
    swlcalc.gear.slots.weapon2.edit.el.glyphRarity.val("mythic");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();

    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphILvl(), "300");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getILvl(), "841");
});

QUnit.test("should update elements related to signet's item/id accordingly", function(assert) {
    swlcalc.gear.slots.head.edit.el.signetId.val("none");
    swlcalc.gear.slots.head.updateSignet();

    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), 'assets/images/icons/signet/none.png');
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetDescription.text(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetItem.text(), "");

    swlcalc.gear.slots.weapon.edit.el.signetId.val("2");
    swlcalc.gear.slots.weapon.updateSignet();

    assert.equal(swlcalc.gear.slots.weapon.recap.el.affix.text(), 'of Destruction');
});

QUnit.test("should update elements related to signet's rarity accordingly", function(assert) {
    swlcalc.gear.slots.waist.edit.el.signetRarity.val("mythic");
    swlcalc.gear.slots.waist.updateSignetRarity();

    assert.equal(swlcalc.gear.slots.waist.edit.getSignetImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetTitle.attr('class'), "color-mythic");
    assert.equal(swlcalc.gear.slots.waist.edit.el.signetLabelLevel.attr('class'), "label-level little border-mythic");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetRarity.text(), "Mythic");
});

QUnit.test("should update elements related to signet's level accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.signetLevel.val("5");
    swlcalc.gear.slots.finger.updateSignetLevel();

    assert.equal(swlcalc.gear.slots.finger.edit.getSignetLabelLevel(), "5");
    assert.equal(swlcalc.gear.slots.finger.recap.el.signetLevel.text(), "5");
});

QUnit.test("should update elements related to signet's bonus accordingly", function(assert) {
    $("#stat-combat-power").html("9999");
    swlcalc.gear.slots.luck.updateSignetBonus();

    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "3500");
});

QUnit.test("should update elements related to signet's ilvl accordingly", function(assert) {
    swlcalc.gear.slots.finger.edit.el.signetRarity.val("mythic");
    swlcalc.gear.slots.finger.updateSignetILvl();

    assert.equal(swlcalc.gear.slots.finger.edit.getSignetILvl(), "97");
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

        assert.equal(slot.edit.getILvl(), "0");
        assert.equal(slot.edit.getEquipmentId(), "none");
        assert.equal(slot.edit.getEquipmentRarity(), "standard");
        assert.equal(slot.edit.getEquipmentQuality(), "1");
        assert.equal(slot.edit.getEquipmentStatPowerValue(), "0");
        assert.equal(slot.edit.getEquipmentLevel(), "1");
        assert.equal(slot.recap.el.equipmentStatSection.is(":hidden"), true);
        assert.equal(slot.edit.getEquipmentImgItem(), "assets/images/icons/equipment/" + slot.kind + "/None.png");
        if (slot.isWeapon()) {
            assert.equal(slot.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        } else {
            assert.equal(slot.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/" + slot.id + "/standard-42x42.png");
        }
        assert.equal(slot.edit.getEquipmentImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.getEquipmentLabelLevel(), "1");
        assert.equal(slot.edit.getEquipmentDescription(), "");
        assert.equal(slot.edit.getEquipmentILvl(), "0");
        assert.equal(slot.edit.getGlyphId(), "none");
        assert.equal(slot.edit.getGlyphRarity(), "standard");
        assert.equal(slot.edit.getGlyphQuality(), "1");
        assert.equal(slot.edit.getGlyphLevel(), "1");
        assert.equal(slot.edit.getGlyphStatRating(), "0");
        assert.equal(slot.edit.getGlyphStatText(), "");
        assert.equal(slot.edit.getGlyphImgItem(), "assets/images/icons/glyph/none.png");
        assert.equal(slot.edit.getGlyphImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        assert.equal(slot.edit.getGlyphImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.getGlyphILvl(), "0");
        assert.equal(slot.edit.getSignetId(), "none");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.getSignetRarity(), "standard");
            assert.equal(slot.edit.getSignetLevel(), "1");
            assert.equal(slot.edit.getSignetImgItem(), "assets/images/icons/signet/none.png");
            assert.equal(slot.edit.getSignetImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        }
        assert.equal(slot.edit.getSignetDescription(), "");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.getSignetLabelLevel(), "1");
            assert.equal(slot.edit.getSignetILvl(), "0");
        }
    }
});
