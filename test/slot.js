
QUnit.module("slot-unit-tests", {
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

//TODO/BUGGY testing equipment images is not working (maybe because of the image.onload stuff ?). Disabled for now
QUnit.test("should update elements related to equipment's item/id accordingly", function(assert) {
    // assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), "assets/images/icons/talisman/head/Ashes.png");
    // assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgItem(), "assets/images/icons/talisman/head/Ashes.png");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentDescription.text(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Ashes");

    swlcalc.gear.slots.head.edit.el.equipmentId.val("12");
    swlcalc.gear.slots.head.updateEquipment();

    // assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    // assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentDescription(), "Whenever you are hit <span class=\"stat-value const\">5</span> times in succession, you deal <span id=\"head-edit-equipment-bonus1\" class=\"stat-value dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentDescription.html(), "Whenever you are hit <span class=\"stat-value const\">5</span> times in succession, you deal <span id=\"head-recap-equipment-bonus1\" class=\"stat-value dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentItem.text(), "Cosmic Pigment");
});

QUnit.test("should update elements related to equipment's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), 'color-epic');
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "assets/images/icons/rarity/head/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "Epic");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.el.equipmentLabelLevel.attr('class'), 'label-level big border-epic');
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), 'label-level big border-epic');

    swlcalc.gear.slots.head.edit.el.equipmentRarity.val("legendary");
    swlcalc.gear.slots.head.updateEquipmentRarity();

    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), 'color-legendary');
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgRarity.attr('src'), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentRarity.text(), "Legendary");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLevel.text(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentLabelLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.text(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
});

QUnit.test("should update elements related to equipment's quality accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Faded");

    swlcalc.gear.slots.head.edit.el.equipmentQuality.val("4");
    swlcalc.gear.slots.head.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.head.edit.getEquipmentImgQuality(), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentImgQuality.attr('src'), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentQuality.text(), "Resplendent");
});

QUnit.test("should update elements related to equipment's quality accordingly (particular case of weapons) ", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentQuality(), "3");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affixQuality.text(), "Mk III");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.signetTitle.attr('class'), 'color-epic');

    swlcalc.gear.slots.weapon2.edit.el.equipmentQuality.val("1");
    swlcalc.gear.slots.weapon2.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.weapon2.recap.el.affixQuality.text(), "Mk I");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.signetTitle.attr('class'), 'color-standard');
});

QUnit.test("should update elements related to equipment's level accordingly", function(assert) {
  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLevel.text(), "1");
  assert.equal(swlcalc.gear.slots.occult.edit.getEquipmentLabelLevel(), "1");
  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLabelLevel.text(), "1");

  swlcalc.gear.slots.occult.edit.el.equipmentLevel.val("19");
  swlcalc.gear.slots.occult.updateEquipmentLevel();

  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLevel.text(), "19");
  assert.equal(swlcalc.gear.slots.occult.edit.getEquipmentLabelLevel(), "19");
  assert.equal(swlcalc.gear.slots.occult.recap.el.equipmentLabelLevel.text(), "19");
});

QUnit.test("should update elements related to equipment's stat rating accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentStatPowerValue(), "642");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatPowerValue.text(), "642");

    swlcalc.gear.slots.finger.edit.el.equipmentRarity.val("legendary");
    swlcalc.gear.slots.finger.updateEquipmentStatRating();

    assert.equal(swlcalc.gear.slots.finger.edit.getEquipmentStatPowerValue(), "1405");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatPowerValue.text(), "1405");
});

QUnit.test("should update elements related to equipment's \"transformed\" stat value accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHPValue.text(), "+807");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatARValue.text(), "+424");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHRValue.text(), "+283");

    swlcalc.gear.slots.finger.edit.el.equipmentStatPowerValue.text("9876");
    $('#anima-allocation-damage-range').val(100);
    $('#anima-allocation-healing-range').val(0);
    $('#anima-allocation-survivability-range').val(100);
    swlcalc.gear.slots.finger.updateTalismanStatValues();

    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHPValue.text(), "+28209");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatARValue.text(), "+9876");
    assert.equal(swlcalc.gear.slots.finger.recap.el.equipmentStatHRValue.text(), "+0");
});

QUnit.test("should update elements related to equipment's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.getEquipmentILvl(), "121");

    swlcalc.gear.slots.wrist.edit.el.equipmentRarity.val("standard");
    swlcalc.gear.slots.wrist.updateEquipmentILvl();
    assert.equal(swlcalc.gear.slots.wrist.edit.getEquipmentILvl(), "2");

    swlcalc.gear.slots.wrist.edit.el.equipmentLevel.val("5");
    swlcalc.gear.slots.wrist.updateEquipmentILvl()
    assert.equal(swlcalc.gear.slots.wrist.edit.getEquipmentILvl(), "9");

    swlcalc.gear.slots.wrist.edit.el.equipmentId.val("none");
    swlcalc.gear.slots.wrist.updateEquipmentILvl()
    assert.equal(swlcalc.gear.slots.wrist.edit.getEquipmentILvl(), "0");
});

QUnit.test("should update every bonus values present in equipment's description (both edit & recap) accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">275</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">66</span> health.");

    $("#stat-combat-power").html("9999");
    $("#stat-healing-power").html("2222");
    swlcalc.gear.slots.waist.updateEquipmentBonuses();

    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">4250</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">944</span> health.");
});

QUnit.test("should update elements related to glyph's item/id accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.getGlyphStatText(), "Evade Rating");
    assert.equal(swlcalc.gear.slots.occult.recap.el.glyphStatText.text(), "Evade Rating");
    assert.equal(swlcalc.gear.slots.occult.edit.getGlyphImgItem(), "assets/images/icons/glyph/evade-rating.png");
    assert.equal(swlcalc.gear.slots.occult.recap.el.glyphItem.text(), "Elusive");

    swlcalc.gear.slots.occult.edit.el.glyphId.val("critical-rating");
    swlcalc.gear.slots.occult.updateGlyph();

    assert.equal(swlcalc.gear.slots.occult.edit.getGlyphStatText(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.occult.recap.el.glyphStatText.text(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.occult.edit.getGlyphImgItem(), "assets/images/icons/glyph/critical-rating.png");
    assert.equal(swlcalc.gear.slots.occult.recap.el.glyphItem.text(), "Fierce");
});

QUnit.test("should update elements related to glyph's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphTitle.attr('class'), "color-epic");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphLabelLevel.attr('class'), "label-level little border-epic");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphRarity.text(), "Epic");
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphQuality.prop('options').length, 4);

    swlcalc.gear.slots.luck.edit.el.glyphRarity.val("superior");
    swlcalc.gear.slots.luck.updateGlyphRarity();

    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphTitle.attr('class'), "color-superior");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphLabelLevel.attr('class'), "label-level little border-superior");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphRarity.text(), "Superior");
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphQuality.prop('options').length, 3);
});

QUnit.test("should update elements related to glyph's quality accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphQuality.text(), "Simple");
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgQuality(), "assets/images/icons/quality/2.png");

    swlcalc.gear.slots.luck.edit.el.glyphQuality.val("4");
    swlcalc.gear.slots.luck.updateGlyphQuality();

    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphQuality.text(), "Elaborate");
    assert.equal(swlcalc.gear.slots.luck.edit.getGlyphImgQuality(), "assets/images/icons/quality/4.png");
});

QUnit.test("should update elements related to glyph's level accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "20");
    assert.equal(swlcalc.gear.slots.neck.recap.el.glyphLevel.text(), "20");

    swlcalc.gear.slots.neck.edit.el.glyphLevel.val("2");
    swlcalc.gear.slots.neck.updateGlyphLevel();

    assert.equal(swlcalc.gear.slots.neck.edit.getGlyphLabelLevel(), "2");
    assert.equal(swlcalc.gear.slots.neck.recap.el.glyphLevel.text(), "2");
});

QUnit.test("should update elements related to glyph's stat rating accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), 488);
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+488");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+488");

    swlcalc.gear.slots.head.edit.el.glyphId.val("critical-power");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.edit.getGlyphStatRating(), 475);
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+475");
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+475");

    swlcalc.gear.slots.head.edit.el.glyphRarity.val("superior");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+103");

    swlcalc.gear.slots.head.edit.el.glyphQuality.val("2");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+92");

    swlcalc.gear.slots.head.edit.el.glyphLevel.val("20");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.el.glyphStatRating.text(), "+202");
});

QUnit.test("should update elements related to glyph's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphILvl(), "28");

    swlcalc.gear.slots.weapon2.edit.el.glyphRarity.val("mythic");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphILvl(), "173");

    swlcalc.gear.slots.weapon2.edit.el.glyphLevel.val("8");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphILvl(), "193");

    swlcalc.gear.slots.weapon2.edit.el.glyphId.val("none");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();
    assert.equal(swlcalc.gear.slots.weapon2.edit.getGlyphILvl(), "0");
});

QUnit.test("should update elements related to signet's item/id accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), 'assets/images/icons/signet/head.png');
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "Reduces the cooldown of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"stat-value const\">7.0286</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetDescription.html(), "Reduces the cooldown of all Elite Abilities by <span id=\"head-recap-signet-bonus1\" class=\"stat-value const\">7.0286</span><span class=\"stat-value const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetItem.text(), "Signet of the Ascendant");

    swlcalc.gear.slots.head.edit.el.signetId.val("none");
    swlcalc.gear.slots.head.updateSignet();

    assert.equal(swlcalc.gear.slots.head.edit.getSignetImgItem(), 'assets/images/icons/signet/none.png');
    assert.equal(swlcalc.gear.slots.head.edit.getSignetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetDescription.text(), "");
    assert.equal(swlcalc.gear.slots.head.recap.el.signetItem.text(), "");
});

QUnit.test("should update elements related to signet's item/id accordingly (particular case of weapons) ", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.recap.el.affix.text(), 'of Restoration');

    swlcalc.gear.slots.weapon.edit.el.signetId.val("2");
    swlcalc.gear.slots.weapon.updateSignet();

    assert.equal(swlcalc.gear.slots.weapon.recap.el.affix.text(), 'of Destruction');
});

QUnit.test("should update elements related to signet's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.getSignetImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetTitle.attr('class'), "color-superior");
    assert.equal(swlcalc.gear.slots.waist.edit.el.signetLabelLevel.attr('class'), "label-level little border-superior");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetRarity.text(), "Superior");

    swlcalc.gear.slots.waist.edit.el.signetRarity.val("mythic");
    swlcalc.gear.slots.waist.updateSignetRarity();

    assert.equal(swlcalc.gear.slots.waist.edit.getSignetImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetTitle.attr('class'), "color-mythic");
    assert.equal(swlcalc.gear.slots.waist.edit.el.signetLabelLevel.attr('class'), "label-level little border-mythic");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetRarity.text(), "Mythic");
});

QUnit.test("should update elements related to signet's level accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.getSignetLabelLevel(), "14");
    assert.equal(swlcalc.gear.slots.wrist.recap.el.signetLevel.text(), "14");

    swlcalc.gear.slots.wrist.edit.el.signetLevel.val("5");
    swlcalc.gear.slots.wrist.updateSignetLevel();

    assert.equal(swlcalc.gear.slots.wrist.edit.getSignetLabelLevel(), "5");
    assert.equal(swlcalc.gear.slots.wrist.recap.el.signetLevel.text(), "5");
});

QUnit.test("should update elements related to signet's bonus accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "61");

    $("#stat-combat-power").html("9999");
    swlcalc.gear.slots.luck.updateSignetBonus();
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "941");

    swlcalc.gear.slots.luck.edit.el.signetRarity.val("mythic");
    swlcalc.gear.slots.luck.updateSignetBonus();
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "1633");

    swlcalc.gear.slots.luck.edit.el.signetLevel.val("18");
    swlcalc.gear.slots.luck.updateSignetBonus();
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetBonusN(1), "2006");
});

QUnit.test("should update elements related to signet's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetILvl(), "5");

    swlcalc.gear.slots.finger.edit.el.signetRarity.val("mythic");
    swlcalc.gear.slots.finger.updateSignetILvl();
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetILvl(), "100");

    swlcalc.gear.slots.finger.edit.el.signetLevel.val("8");
    swlcalc.gear.slots.finger.updateSignetILvl();
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetILvl(), "98");

    swlcalc.gear.slots.finger.edit.el.signetId.val("none");
    swlcalc.gear.slots.finger.updateSignetILvl();
    assert.equal(swlcalc.gear.slots.finger.edit.getSignetILvl(), "0");
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

QUnit.test("should collect current slot state", function(assert) {
    var slotState = swlcalc.gear.slots.head.state();

    assert.deepEqual(slotState.equipmentRarity, "epic");
    assert.deepEqual(slotState.equipmentQuality, "1");
    assert.deepEqual(slotState.equipmentLevel, "30");
    assert.deepEqual(slotState.glyphId, "hit-rating");
    assert.deepEqual(slotState.glyphRarity, "mythic");
    assert.deepEqual(slotState.glyphQuality, "3");
    assert.deepEqual(slotState.glyphLevel, "1");
    assert.deepEqual(slotState.signetId, "20");
    assert.deepEqual(slotState.signetRarity, "superior");
    assert.deepEqual(slotState.signetLevel, "15");
});

QUnit.test("should collect current mapped slot state", function(assert) {
    var slotState = swlcalc.gear.slots.occult.mappedState();

    assert.deepEqual(slotState.equipmentId, "1");
    assert.deepEqual(slotState.equipmentRarity, 3);
    assert.deepEqual(slotState.equipmentQuality, "1");
    assert.deepEqual(slotState.equipmentLevel, "1");
    assert.deepEqual(slotState.glyphId, 4);
    assert.deepEqual(slotState.glyphRarity, 3);
    assert.deepEqual(slotState.glyphQuality, "2");
    assert.deepEqual(slotState.glyphLevel, "20");
    assert.deepEqual(slotState.signetId, "4");
    assert.deepEqual(slotState.signetRarity, 3);
    assert.deepEqual(slotState.signetLevel, "18");
});

// TODO : unit test for stripContent ?

// TODO : unit test for computeItemILvlWithQuality ?

// TODO : unit test for computeItemILvlWithoutQuality ?

// TODO : unit test for getRawProtValue ?

QUnit.test("should retrieve raw protection value", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.getRawProtValue(), 62);
});
