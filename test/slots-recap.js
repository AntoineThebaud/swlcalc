
QUnit.module("slots-recap-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateSelectHandlers();
        createTankBuild();
    }
});

QUnit.test("should get and set slot's total iLvl on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.iLvl(), "480");
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

QUnit.test("should get and set the slot's equipment stat transformed value on recap view", function(assert) {
    // TODO/TEST assert.equal(swlcalc.gear.slots.head.recap.equipmentStatTransformedValue(), "1070");
    swlcalc.gear.slots.head.recap.equipmentStatTransformedValue("8");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatTransformedValue(), "8");
});

QUnit.test("should get and set the slot's equipment stat transformed text on recap view", function(assert) {
    // TODO/TEST assert.equal(swlcalc.gear.slots.head.recap.equipmentStatTransformedText(), "1070");
    swlcalc.gear.slots.head.recap.equipmentStatTransformedText("Decele Rating");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentStatTransformedText(), "Decele Rating");
});

QUnit.test("should get and set the slot's equipment description on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentDescription(), "");
    swlcalc.gear.slots.finger.recap.equipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.equipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's equipment bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(1), "315");
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(2), "196");
    swlcalc.gear.slots.waist.recap.equipmentBonusN(1, "19920804");
    assert.equal(swlcalc.gear.slots.waist.recap.equipmentBonusN(1), "19920804");
});

QUnit.test("should get and set the slot's equipment item image on recap view", function(assert) {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), 'assets/images/icons/talisman/Ashes.png');
    swlcalc.gear.slots.head.recap.equipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.head.recap.equipmentImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
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
    assert.equal(swlcalc.gear.slots.finger.recap.signetDescription(), "Increases the damage and healing of all Basic Abilities by <span id=\"finger-recap-signet-bonus\" class=\"bonus-val const\">2.1011</span><span class=\"bonus-val const\">%</span>.");
    swlcalc.gear.slots.finger.recap.signetDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.finger.recap.signetDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should get and set the slot's signet bonus value on recap view", function(assert) {
    assert.equal(swlcalc.gear.slots.luck.recap.signetBonus(), "69.7008");
    swlcalc.gear.slots.luck.recap.signetBonus("1992.0804");
    assert.equal(swlcalc.gear.slots.luck.recap.signetBonus(), "1992.0804");
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
        if (slot.type == "talisman") {
            assert.equal(slot.recap.suffix(), "");
            assert.equal(slot.recap.suffixQuality(), "");
        } else if (slot.type == "weapon") {
            assert.equal(slot.recap.signetRarity(), "");
            assert.equal(slot.recap.signetLevel(), "");
        }
    }
});
