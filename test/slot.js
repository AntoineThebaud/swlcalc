
QUnit.module("slot-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderAnimaAllocation();
        initiateAnimaAllocation();
        initiateHandlers();
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
    // assert.equal(swlcalc.gear.slots.head.edit.equipmentImgItem(), "assets/images/icons/talisman/head/Ashes.png");
    // assert.equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), "assets/images/icons/talisman/head/Ashes.png");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentItem(), "Ashes");

    swlcalc.gear.slots.head.edit.equipmentId("12");
    swlcalc.gear.slots.head.updateEquipment();

    // assert.equal(swlcalc.gear.slots.head.edit.equipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    // assert.equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), 'assets/images/icons/talisman/head/Cosmic Pigment.png');
    assert.equal(swlcalc.gear.slots.head.edit.equipmentDescription(), "Whenever you are hit <span class=\"bonus-val const\">5</span> times in succession, you deal <span id=\"head-edit-equipment-bonus1\" class=\"bonus-val dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentDescription(), "Whenever you are hit <span class=\"bonus-val const\">5</span> times in succession, you deal <span id=\"head-recap-equipment-bonus1\" class=\"bonus-val dps\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentItem(), "Cosmic Pigment");
});

QUnit.test("should update elements related to equipment's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), 'color-epic');
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgRarity(), "assets/images/icons/rarity/head/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentRarity(), "Epic");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLabelLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLabelLevel(), "30");
    assert.equal(swlcalc.gear.slots.head.edit.el.equipmentLabelLevel.attr('class'), 'label-level big border-epic');
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), 'label-level big border-epic');

    swlcalc.gear.slots.head.edit.equipmentRarity("legendary");
    swlcalc.gear.slots.head.updateEquipmentRarity();

    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentTitle.attr('class'), 'color-legendary');
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgRarity(), "assets/images/icons/rarity/head/legendary-42x42.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentRarity(), "Legendary");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLevel(), "70");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLevel(), "70");
    assert.equal(swlcalc.gear.slots.head.edit.equipmentLabelLevel(), "70");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentLabelLevel(), "70");
    assert.equal(swlcalc.gear.slots.head.edit.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
    assert.equal(swlcalc.gear.slots.head.recap.el.equipmentLabelLevel.attr('class'), 'label-level big border-legendary');
});

QUnit.test("should update elements related to equipment's quality accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgQuality(), "assets/images/icons/quality/1.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentQuality(), "Faded");

    swlcalc.gear.slots.head.edit.equipmentQuality("4");
    swlcalc.gear.slots.head.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.head.edit.equipmentImgQuality(), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgQuality(), "assets/images/icons/quality/4.png");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentQuality(), "Resplendent");
});

QUnit.test("should update elements related to equipment's quality accordingly (particular case of weapons) ", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentQuality(), "3");
    assert.equal(swlcalc.gear.slots.weapon2.recap.suffixQuality(), "Mk III");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.signetTitle.attr('class'), 'color-epic');

    swlcalc.gear.slots.weapon2.edit.equipmentQuality("1");
    swlcalc.gear.slots.weapon2.updateEquipmentQuality();

    assert.equal(swlcalc.gear.slots.weapon2.recap.suffixQuality(), "Mk I");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.signetTitle.attr('class'), 'color-standard');
});

QUnit.test("should update elements related to equipment's level accordingly", function(assert) {
  assert.equal(swlcalc.gear.slots.occult.recap.equipmentLevel(), "1");
  assert.equal(swlcalc.gear.slots.occult.edit.equipmentLabelLevel(), "1");
  assert.equal(swlcalc.gear.slots.occult.recap.equipmentLabelLevel(), "1");

  swlcalc.gear.slots.occult.edit.equipmentLevel("19");
  swlcalc.gear.slots.occult.updateEquipmentLevel();

  assert.equal(swlcalc.gear.slots.occult.recap.equipmentLevel(), "19");
  assert.equal(swlcalc.gear.slots.occult.edit.equipmentLabelLevel(), "19");
  assert.equal(swlcalc.gear.slots.occult.recap.equipmentLabelLevel(), "19");
});

QUnit.test("should update elements related to equipment's stat rating accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.equipmentStatValue(), "642");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatRawValue(), "642");

    swlcalc.gear.slots.finger.edit.equipmentRarity("legendary");
    swlcalc.gear.slots.finger.updateEquipmentStatRating();

    assert.equal(swlcalc.gear.slots.finger.edit.equipmentStatValue(), "1405");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatRawValue(), "1405");
});

QUnit.test("should update elements related to equipment's \"transformed\" stat value accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatHPValue(), "+806");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatARValue(), "+424");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatHRValue(), "+282");

    swlcalc.gear.slots.finger.edit.equipmentStatValue("9876");
    $('#anima-allocation-damage-range').val(100);
    $('#anima-allocation-healing-range').val(0);
    $('#anima-allocation-survivability-range').val(100);
    swlcalc.gear.slots.finger.updateEquipmentStatValues();

    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatHPValue(), "+28196");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatARValue(), "+9876");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentStatHRValue(), "+0");
});

QUnit.test("should update elements related to equipment's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.equipmentILvl(), "121");

    swlcalc.gear.slots.wrist.edit.equipmentRarity("standard");
    swlcalc.gear.slots.wrist.updateEquipmentILvl()

    assert.equal(swlcalc.gear.slots.wrist.edit.equipmentILvl(), "2");

    swlcalc.gear.slots.wrist.edit.equipmentLevel("5");
    swlcalc.gear.slots.wrist.updateEquipmentILvl()

    assert.equal(swlcalc.gear.slots.wrist.edit.equipmentILvl(), "9");

    swlcalc.gear.slots.wrist.edit.equipmentId("none");
    swlcalc.gear.slots.wrist.updateEquipmentILvl()

    assert.equal(swlcalc.gear.slots.wrist.edit.equipmentILvl(), "0");
});

QUnit.test("should update every bonus values present in equipment's description (both edit & recap) accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"bonus-val const\">10%</span>. In addition, once you have lost <span class=\"bonus-val const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">275</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">248</span> health.");

    swlcalc.gear.slots.waist.updateEquipmentBonuses(9999,2222);

    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"bonus-val const\">10%</span>. In addition, once you have lost <span class=\"bonus-val const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">4250</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">944</span> health.");
});

QUnit.test("should update elements related to glyph's item/id accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.edit.glyphStatText(), "Evade Rating");
    assert.equal(swlcalc.gear.slots.occult.recap.glyphStatText(), "Evade Rating");
    assert.equal(swlcalc.gear.slots.occult.edit.glyphImgItem(), "assets/images/icons/glyph/evade-rating.png");
    assert.equal(swlcalc.gear.slots.occult.recap.glyphItem(), "Elusive");

    swlcalc.gear.slots.occult.edit.glyphId("critical-rating");
    swlcalc.gear.slots.occult.updateGlyph();

    assert.equal(swlcalc.gear.slots.occult.edit.glyphStatText(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.occult.recap.glyphStatText(), "Critical Rating");
    assert.equal(swlcalc.gear.slots.occult.edit.glyphImgItem(), "assets/images/icons/glyph/critical-rating.png");
    assert.equal(swlcalc.gear.slots.occult.recap.glyphItem(), "Fierce");
});

QUnit.test("should update elements related to glyph's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphTitle.attr('class'), "color-epic");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphLabelLevel.attr('class'), "label-level little border-epic");
    assert.equal(swlcalc.gear.slots.luck.recap.glyphRarity(), "Epic");
    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
    assert.equal($('#luck-edit-glyph-quality option').length, 4); //TODO/REFACTOR abstract access

    swlcalc.gear.slots.luck.edit.glyphRarity("superior");
    swlcalc.gear.slots.luck.updateGlyphRarity();

    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.luck.recap.el.glyphTitle.attr('class'), "color-superior");
    assert.equal(swlcalc.gear.slots.luck.edit.el.glyphLabelLevel.attr('class'), "label-level little border-superior");
    assert.equal(swlcalc.gear.slots.luck.recap.glyphRarity(), "Superior");
    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal($('#luck-edit-glyph-quality option').length, 3); //TODO/REFACTOR abstract access
});

QUnit.test("should update elements related to glyph's quality accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.recap.glyphQuality(), "Simple");
    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgQuality(), "assets/images/icons/quality/2.png");

    swlcalc.gear.slots.luck.edit.glyphQuality("4");
    swlcalc.gear.slots.luck.updateGlyphQuality();

    assert.equal(swlcalc.gear.slots.luck.recap.glyphQuality(), "Elaborate");
    assert.equal(swlcalc.gear.slots.luck.edit.glyphImgQuality(), "assets/images/icons/quality/4.png");
});

QUnit.test("should update elements related to glyph's level accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.neck.edit.glyphLabelLevel(), "20");
    assert.equal(swlcalc.gear.slots.neck.recap.glyphLevel(), "20");

    swlcalc.gear.slots.neck.edit.glyphLevel("2");
    swlcalc.gear.slots.neck.updateGlyphLevel();

    assert.equal(swlcalc.gear.slots.neck.edit.glyphLabelLevel(), "2");
    assert.equal(swlcalc.gear.slots.neck.recap.glyphLevel(), "2");
});

QUnit.test("should update elements related to glyph's stat rating accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.glyphStatRating(), 488);
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+488");
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+488");

    swlcalc.gear.slots.head.edit.glyphId("critical-power");
    swlcalc.gear.slots.head.updateGlyphRating();

    assert.equal(swlcalc.gear.slots.head.edit.glyphStatRating(), 475);
    assert.deepEqual(swlcalc.gear.slots.head.edit.el.glyphStatRating.html(), "+475");
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+475");

    swlcalc.gear.slots.head.edit.glyphRarity("superior");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+103");

    swlcalc.gear.slots.head.edit.glyphQuality("2");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+92");

    swlcalc.gear.slots.head.edit.glyphLevel("20");
    swlcalc.gear.slots.head.updateGlyphRating();
    assert.equal(swlcalc.gear.slots.head.recap.glyphStatRating(), "+202");
});

QUnit.test("should update elements related to glyph's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphILvl(), "28");

    swlcalc.gear.slots.weapon2.edit.glyphRarity("mythic");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();

    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphILvl(), "173");

    swlcalc.gear.slots.weapon2.edit.glyphLevel("8");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();

    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphILvl(), "193");

    swlcalc.gear.slots.weapon2.edit.glyphId("none");
    swlcalc.gear.slots.weapon2.updateGlyphILvl();

    assert.equal(swlcalc.gear.slots.weapon2.edit.glyphILvl(), "0");
});

QUnit.test("should update elements related to signet's item/id accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.head.edit.signetImgItem(), 'assets/images/icons/signet/head.png');
    assert.equal(swlcalc.gear.slots.head.edit.signetDescription(), "Reduces the cooldown of all Elite Abilities by <span id=\"head-edit-signet-bonus1\" class=\"bonus-val const\">7.0286</span><span class=\"bonus-val const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.recap.signetDescription(), "Reduces the cooldown of all Elite Abilities by <span id=\"head-recap-signet-bonus1\" class=\"bonus-val const\">7.0286</span><span class=\"bonus-val const\">%</span>.");
    assert.equal(swlcalc.gear.slots.head.recap.signetItem(), "Signet of the Ascendant");

    swlcalc.gear.slots.head.edit.signetId("none");
    swlcalc.gear.slots.head.updateSignet();

    assert.equal(swlcalc.gear.slots.head.edit.signetImgItem(), 'assets/images/icons/signet/none.png');
    assert.equal(swlcalc.gear.slots.head.edit.signetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.signetDescription(), "");
    assert.equal(swlcalc.gear.slots.head.recap.signetItem(), "");
});

QUnit.test("should update elements related to signet's item/id accordingly (particular case of weapons) ", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.recap.suffix(), 'of Restoration');

    swlcalc.gear.slots.weapon.edit.signetId("2");
    swlcalc.gear.slots.weapon.updateSignet();

    assert.equal(swlcalc.gear.slots.weapon.recap.suffix(), 'of Destruction');
});

QUnit.test("should update elements related to signet's rarity accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.edit.signetImgRarity(), "assets/images/icons/rarity/superior-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetTitle.attr('class'), "color-superior");
    assert.equal(swlcalc.gear.slots.waist.edit.el.signetLabelLevel.attr('class'), "label-level little border-superior");
    assert.equal(swlcalc.gear.slots.waist.recap.signetRarity(), "Superior");

    swlcalc.gear.slots.waist.edit.signetRarity("mythic");
    swlcalc.gear.slots.waist.updateSignetRarity();

    assert.equal(swlcalc.gear.slots.waist.edit.signetImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    assert.equal(swlcalc.gear.slots.waist.recap.el.signetTitle.attr('class'), "color-mythic");
    assert.equal(swlcalc.gear.slots.waist.edit.el.signetLabelLevel.attr('class'), "label-level little border-mythic");
    assert.equal(swlcalc.gear.slots.waist.recap.signetRarity(), "Mythic");
});

QUnit.test("should update elements related to signet's level accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.wrist.edit.signetLabelLevel(), "14");
    assert.equal(swlcalc.gear.slots.wrist.recap.signetLevel(), "14");

    swlcalc.gear.slots.wrist.edit.signetLevel("5");
    swlcalc.gear.slots.wrist.updateSignetLevel();

    assert.equal(swlcalc.gear.slots.wrist.edit.signetLabelLevel(), "5");
    assert.equal(swlcalc.gear.slots.wrist.recap.signetLevel(), "5");
});

// TODO : to update when new Thorn signet is known
QUnit.test("should update elements related to signet's bonus accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.edit.signetBonusN(1), "0");

    swlcalc.gear.slots.luck.updateSignetBonus(9999,0);

    assert.equal(swlcalc.gear.slots.luck.edit.signetBonusN(1), "0");

    swlcalc.gear.slots.luck.edit.signetRarity("mythic");
    swlcalc.gear.slots.luck.updateSignetBonus(9999,0);

    assert.equal(swlcalc.gear.slots.luck.edit.signetBonusN(1), "0");

    swlcalc.gear.slots.luck.edit.signetLevel("18");
    swlcalc.gear.slots.luck.updateSignetBonus(9999,0);

    assert.equal(swlcalc.gear.slots.luck.edit.signetBonusN(1), "0");
});

QUnit.test("should update elements related to signet's ilvl accordingly", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.edit.signetILvl(), "5");

    swlcalc.gear.slots.finger.edit.signetRarity("mythic");
    swlcalc.gear.slots.finger.updateSignetILvl();

    assert.equal(swlcalc.gear.slots.finger.edit.signetILvl(), "100");

    swlcalc.gear.slots.finger.edit.signetLevel("8");
    swlcalc.gear.slots.finger.updateSignetILvl();

    assert.equal(swlcalc.gear.slots.finger.edit.signetILvl(), "98");

    swlcalc.gear.slots.finger.edit.signetId("none");
    swlcalc.gear.slots.finger.updateSignetILvl();

    assert.equal(swlcalc.gear.slots.finger.edit.signetILvl(), "0");
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

        assert.equal(slot.edit.iLvl(), "0");
        assert.equal(slot.edit.equipmentId(), "none");
        assert.equal(slot.edit.equipmentRarity(), "standard");
        assert.equal(slot.edit.equipmentQuality(), "1");
        assert.equal(slot.edit.equipmentStatValue(), "0");
        assert.equal(slot.edit.equipmentLevel(), "20");
        assert.equal(slot.recap.el.equipmentStatSection.is(":hidden"), true);
        assert.equal(slot.edit.equipmentImgItem(), "assets/images/icons/equipment/" + slot.kind + "/None.png");
        if (slot.isWeapon()) {
            assert.equal(slot.edit.equipmentImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        } else {
            assert.equal(slot.edit.equipmentImgRarity(), "assets/images/icons/rarity/" + slot.id + "/standard-42x42.png");
        }
        assert.equal(slot.edit.equipmentImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.equipmentLabelLevel(), "20");
        assert.equal(slot.edit.equipmentDescription(), "");
        assert.equal(slot.edit.equipmentILvl(), "0");
        assert.equal(slot.edit.glyphId(), "none");
        assert.equal(slot.edit.glyphRarity(), "standard");
        assert.equal(slot.edit.glyphQuality(), "1");
        assert.equal(slot.edit.glyphLevel(), "20");
        assert.equal(slot.edit.glyphStatRating(), "0");
        assert.equal(slot.edit.glyphStatText(), "");
        assert.equal(slot.edit.glyphImgItem(), "assets/images/icons/glyph/none.png");
        assert.equal(slot.edit.glyphImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        assert.equal(slot.edit.glyphImgQuality(), "assets/images/icons/quality/1.png");
        assert.equal(slot.edit.glyphILvl(), "0");
        assert.equal(slot.edit.signetId(), "none");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.signetRarity(), "standard");
            assert.equal(slot.edit.signetLevel(), "20");
            assert.equal(slot.edit.signetImgItem(), "assets/images/icons/signet/none.png");
            assert.equal(slot.edit.signetImgRarity(), "assets/images/icons/rarity/standard-42x42.png");
        }
        assert.equal(slot.edit.signetDescription(), "");
        if (!slot.isWeapon()) {
            assert.equal(slot.edit.signetLabelLevel(), "20");
            assert.equal(slot.edit.signetILvl(), "0");
        }
    }
});

QUnit.test("should collect current slot state", function(assert) {
    var slotState = swlcalc.gear.slots.head.state();

    assert.deepEqual(slotState.equipment_rarity, "epic");
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "30");
    assert.deepEqual(slotState.glyph_id, "hit-rating");
    assert.deepEqual(slotState.glyph_rarity, "mythic");
    assert.deepEqual(slotState.glyph_quality, "3");
    assert.deepEqual(slotState.glyph_level, "1");
    assert.deepEqual(slotState.signet_id, "20");
    assert.deepEqual(slotState.signet_rarity, "superior");
    assert.deepEqual(slotState.signet_level, "15");
});

QUnit.test("should collect current mapped slot state", function(assert) {
    var slotState = swlcalc.gear.slots.occult.mappedState();

    assert.deepEqual(slotState.equipment_id, "1");
    assert.deepEqual(slotState.equipment_rarity, 3);
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "1");
    assert.deepEqual(slotState.glyph_id, 4);
    assert.deepEqual(slotState.glyph_rarity, 3);
    assert.deepEqual(slotState.glyph_quality, "2");
    assert.deepEqual(slotState.glyph_level, "20");
    assert.deepEqual(slotState.signet_id, "4");
    assert.deepEqual(slotState.signet_rarity, 3);
    assert.deepEqual(slotState.signet_level, "18");
});
