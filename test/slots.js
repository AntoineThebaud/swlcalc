
QUnit.module("slots-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        createTankBuild();
    }
});

QUnit.test("should tell whether this slot is a weapon slot", function(assert) {
    assert.equal(swlcalc.gear.slots.weapon.isWeapon(), true);
    assert.equal(swlcalc.gear.slots.head.isWeapon(), false);
});

QUnit.test("should set and get the slot's equipment name", function(assert) {
    swlcalc.gear.slots.head.equipmentName("Mark of the starspawn");
    assert.equal(swlcalc.gear.slots.head.equipmentName(), "Mark of the starspawn");
});

QUnit.test("should get and set the slot's equipment id", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentId(), "1");
    swlcalc.gear.slots.head.equipmentId("3");
    assert.equal(swlcalc.gear.slots.head.equipmentId(), "3");
});

QUnit.test("should get and set slot's total iLvl", function(assert) {
    assert.equal(swlcalc.gear.slots.head.iLvl(), "480");
    swlcalc.gear.slots.head.iLvl("9999");
    assert.equal(swlcalc.gear.slots.head.iLvl(), "9999");
});

QUnit.test("should get and set the slot's equipment rarity", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentRarity(), "epic");
    swlcalc.gear.slots.head.equipmentRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.equipmentRarity(), "legendary");
});

QUnit.test("should get and set the slot's equipment quality", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentQuality(), "1");
    swlcalc.gear.slots.head.equipmentQuality("3");
    assert.equal(swlcalc.gear.slots.head.equipmentQuality(), "3");
});

QUnit.test("should get and set the slot's equipment level", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentLevel(), "30");
    swlcalc.gear.slots.head.equipmentLevel("14");
    assert.equal(swlcalc.gear.slots.head.equipmentLevel(), "14");
});

QUnit.test("should get and set the slot's equipment power rating", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentPowerRating(), "1070");
    swlcalc.gear.slots.head.equipmentPowerRating("8");
    assert.equal(swlcalc.gear.slots.head.equipmentPowerRating(), "8");
});

QUnit.test("should get and set the slot's equipment iLvl", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentILvl(), "278");
    swlcalc.gear.slots.head.equipmentILvl("800000000000");
    assert.equal(swlcalc.gear.slots.head.equipmentILvl(), "800000000000");
});

QUnit.test("should get and set the slot's equipment icon image", function(assert) {

    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.equipmentImgItem(), 'assets/images/icons/talisman/Ashes.png');
    swlcalc.gear.slots.head.equipmentImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.equipmentImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment border image", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentImgRarity(), "assets/images/icons/rarity/epic-42x42.png");
    swlcalc.gear.slots.head.equipmentImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.equipmentImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's equipment description", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentDescription(), "");
    swlcalc.gear.slots.head.equipmentDescription("Lorem ipsum dolor sit amet");
    assert.equal(swlcalc.gear.slots.head.equipmentDescription(), "Lorem ipsum dolor sit amet");
});

QUnit.test("should update the slot's equipment image and description", function(assert) {
    swlcalc.gear.slots.head.equipmentId("12");
    swlcalc.gear.slots.head.updateEquipment();

    //TODO/BUGGY not updated faster enough : assert.equal(swlcalc.gear.slots.head.equipmentImgItem(), 'assets/images/icons/talisman/Ashes.png', "should have update #head-imgItem");
    assert.equal(swlcalc.gear.slots.head.equipmentDescription(), "Whenever you are hit <span class=\"bonus-val const\">5</span> times in succession, you deal <span id=\"head-equipment-bonus1\" class=\"bonus-val attack\">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.");
});

QUnit.test("should update the slot's equipment power rating", function(assert) {
    assert.equal(swlcalc.gear.slots.head.equipmentPowerRating(), "1070");
    swlcalc.gear.slots.head.equipmentRarity("legendary");
    swlcalc.gear.slots.head.updateEquipmentPowerRating();
    assert.equal(swlcalc.gear.slots.head.equipmentPowerRating(), "2342");
});

QUnit.test("should get and set the slot's glyph id", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphId(), "hit-rating");
    swlcalc.gear.slots.head.glyphId("evade-rating");
    assert.equal(swlcalc.gear.slots.head.glyphId(), "evade-rating");
});

QUnit.test("should get and set the slot's glyph rarity", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphRarity(), "mythic");
    swlcalc.gear.slots.head.glyphRarity("standard");
    assert.equal(swlcalc.gear.slots.head.glyphRarity(), "standard");
});

QUnit.test("should get and set the slot's glyph quality", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphQuality(), "3");
    swlcalc.gear.slots.head.glyphQuality("1");
    assert.equal(swlcalc.gear.slots.head.glyphQuality(), "1");
});

QUnit.test("should get and set the slot's glyph level", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphLevel(), "1");
    swlcalc.gear.slots.head.glyphLevel("7");
    assert.equal(swlcalc.gear.slots.head.glyphLevel(), "7");
});

QUnit.test("should get and set the slot's glyph (all attributes)", function(assert) {
    swlcalc.gear.slots.head.glyphId("hit-rating");
    swlcalc.gear.slots.head.glyphRarity("superior");
    swlcalc.gear.slots.head.glyphQuality("3");
    swlcalc.gear.slots.head.glyphLevel("20");

    swlcalc.gear.slots.head.updateGlyphRating();

    assert.equal(swlcalc.gear.slots.head.glyphRating(), 231);
    assert.deepEqual(swlcalc.gear.slots.head.el.glyphRating.html(), "+231");
});

QUnit.test("should get and set the slot's glyph label", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphLabel(), " Hit Rating");
    swlcalc.gear.slots.head.glyphLabel(" Accele Rating");
    assert.equal(swlcalc.gear.slots.head.glyphLabel(), " Accele Rating");
});

QUnit.test("should get and set the slot's glyph imgItem", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphImgItem(), "assets/images/icons/glyph/hit-rating.png");
    swlcalc.gear.slots.head.glyphImgItem("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.glyphImgItem(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph imgBorder", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphImgRarity(), "assets/images/icons/rarity/mythic-42x42.png");
    swlcalc.gear.slots.head.glyphImgRarity("lorem/ipsum/dolor/sit/amet");
    assert.equal(swlcalc.gear.slots.head.glyphImgRarity(), "lorem/ipsum/dolor/sit/amet");
});

QUnit.test("should get and set the slot's glyph iLvl", function(assert) {
    assert.equal(swlcalc.gear.slots.head.glyphILvl(), 175);
    swlcalc.gear.slots.head.glyphILvl(666);
    assert.equal(swlcalc.gear.slots.head.glyphILvl(), 666);
});

QUnit.test("should set talisman signet id, rarity and level", function(assert) {
    swlcalc.gear.slots.head.signetId("none");
    swlcalc.gear.slots.head.signetRarity("superior");
    swlcalc.gear.slots.head.signetLevel("20");

    assert.equal(swlcalc.gear.slots.head.signetId(), "none");
    assert.equal(swlcalc.gear.slots.head.signetRarity(), "superior");
    assert.equal(swlcalc.gear.slots.head.signetLevel(), "20");
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get talisman signet object', 1, function() {
//     deepEqual(swlcalc.gear.slots.head.getSignet(), swlcalc.data.signet_data.find('head', '18'));
// });

QUnit.test("should get and set the slot's signet rarity", function(assert) {
    assert.equal(swlcalc.gear.slots.head.signetRarity(), "superior");
    swlcalc.gear.slots.head.signetRarity("legendary");
    assert.equal(swlcalc.gear.slots.head.signetRarity(), "legendary");
});

QUnit.test("should get and set the slot's signet level", function(assert) {
    assert.equal(swlcalc.gear.slots.head.signetLevel(), "15");
    swlcalc.gear.slots.head.signetLevel("7");
    assert.equal(swlcalc.gear.slots.head.signetLevel(), "7");
});

// TODO cover new fields from recap div
QUnit.test("should update signet's item image ", function(assert) {
    assert.equal($('#head-signet-img-item').attr('src'), 'assets/images/icons/signet/head.png');
    swlcalc.gear.slots.head.signetId("none");
    swlcalc.gear.slots.head.updateSignet();
    assert.equal($('#head-signet-img-item').attr('src'), 'assets/images/icons/signet/none.png');
});

// TODO cover new fields from recap div
QUnit.test("should update signet's rarity image ", function(assert) {
    assert.equal($("#head-signet-img-rarity").attr("src"), "assets/images/icons/rarity/superior-42x42.png");
    swlcalc.gear.slots.head.signetRarity("mythic");
    swlcalc.gear.slots.head.updateSignetRarity();
    assert.equal($("#head-signet-img-rarity").attr("src"), "assets/images/icons/rarity/mythic-42x42.png");
});

QUnit.test("should get and set the slot's signet iLvl", function(assert) {
    assert.equal(swlcalc.gear.slots.head.signetILvl(), 26);
    swlcalc.gear.slots.head.signetILvl(666);
    assert.equal(swlcalc.gear.slots.head.signetILvl(), 666);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet icon from name', 1, function() {
//     swlcalc.gear.slots.head.updateSignetImgItemFromName('minor_dps');

//     Equal($('#head-signet-img-item').attr('src'), 'assets/images/icons/minor_dps.png');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet equipmentDescription for single value replace', 1, function() {
//     equal(swlcalc.gear.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
QUnit.test("should get and set the slot's signet description", function(assert) {
    assert.equal(swlcalc.gear.slots.occult.signetDescription(), "After using Active Dodge, you receive a speed bonus of <span id=\"occult-signet-bonus\" class=\"bonus-val const\">26.1579</span><span class=\"bonus-val const\">%</span> for <span class=\"bonus-val const\">4</span> seconds.");
    swlcalc.gear.slots.occult.signetId("3");
    swlcalc.gear.slots.occult.signetRarity("epic");
    swlcalc.gear.slots.occult.signetLevel("18");
    swlcalc.gear.slots.occult.updateSignet();
    assert.equal(swlcalc.gear.slots.occult.signetDescription(), "Your active dodges have a <span id=\"occult-signet-bonus\" class=\"bonus-val const\">30</span><span class=\"bonus-val const\">%</span> to knock down enemies in your path, but also have their cooldown increased by <span id=\"occult-signet-bonus2\" class=\"bonus-val const\">74.03</span><span class=\"bonus-val const\">%</span>.");
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet equipmentDescription', 1, function() {
//     swlcalc.gear.slots.head.updateSignetDescription();

//     Equal($('#head-signet-equipmentDescription').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get single signet value based on rarity', 1, function() {
//     var signet = swlcalc.gear.slots.head.getSignet();

//     DeepEqual(swlcalc.gear.slots.head.determineSignetRarityValue(signet), 45);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get indexed signet value based on rarity', 2, function() {
//     swlcalc.gear.slots.occult.signetId('47');
//     swlcalc.gear.slots.occult.signetRarity('epic');
//     var signet = swlcalc.gear.slots.occult.getSignet();

//     DeepEqual(swlcalc.gear.slots.occult.determineSignetRarityValue(signet, 0), 150);
//     deepEqual(swlcalc.gear.slots.occult.determineSignetRarityValue(signet, 1), 57);
// });

//TODO/TEST test('should get talisman glyph ilvl', 1, function() {

//TODO/TEST test('should set talisman glyph ilvl', 1, function() {

QUnit.test("slots should have length of 9", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

QUnit.test("should reset slot state", function(assert) {
    swlcalc.gear.slots.head.reset();

    assert.equal(swlcalc.gear.slots.head.equipmentId(), "none");
    assert.equal(swlcalc.gear.slots.head.equipmentRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.equipmentQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.equipmentLevel(), "20");
    assert.equal(swlcalc.gear.slots.head.glyphId(), "none");
    assert.equal(swlcalc.gear.slots.head.glyphRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.glyphQuality(), "1");
    assert.equal(swlcalc.gear.slots.head.glyphLevel(), "20");

    //Equal(swlcalc.gear.slots.head.getSignet(), 'none'); => see swlcalc.data.signet_data.noneSignet()
    assert.equal(swlcalc.gear.slots.head.signetRarity(), "standard");
    assert.equal(swlcalc.gear.slots.head.signetLevel(), "20");
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
    var slotState = swlcalc.gear.slots.head.mappedState();

    assert.deepEqual(slotState.equipment_id, "1");
    assert.deepEqual(slotState.equipment_rarity, 3);
    assert.deepEqual(slotState.equipment_quality, "1");
    assert.deepEqual(slotState.equipment_level, "30");
    assert.deepEqual(slotState.glyph_id, 1);
    assert.deepEqual(slotState.glyph_rarity, 4);
    assert.deepEqual(slotState.glyph_quality, "3");
    assert.deepEqual(slotState.glyph_level, "1");
    assert.deepEqual(slotState.signet_id, "20");
    assert.deepEqual(slotState.signet_rarity, 2);
    assert.deepEqual(slotState.signet_level, "15");
});

QUnit.test("should collect all slot states", function(assert) {
    var slotStates = swlcalc.gear.state();

    assert.deepEqual(slotStates.weapon.equipment_rarity, "epic");
    assert.deepEqual(slotStates.weapon.equipment_quality, "1");
    assert.deepEqual(slotStates.weapon.equipment_level, "30");
    assert.deepEqual(slotStates.weapon.glyph_id, "critical-rating");
    assert.deepEqual(slotStates.weapon.glyph_rarity, "superior");
    assert.deepEqual(slotStates.weapon.glyph_quality, "1");
    assert.deepEqual(slotStates.weapon.glyph_level, "1");
    assert.deepEqual(slotStates.weapon.signet_id, "6");
    assert.deepEqual(slotStates.weapon.signet_rarity, undefined);
    assert.deepEqual(slotStates.weapon.signet_level, undefined);

    assert.deepEqual(slotStates.head.equipment_rarity, "epic");
    assert.deepEqual(slotStates.head.equipment_quality, "1");
    assert.deepEqual(slotStates.head.equipment_level, "30");
    assert.deepEqual(slotStates.head.glyph_id, "hit-rating");
    assert.deepEqual(slotStates.head.glyph_rarity, "mythic");
    assert.deepEqual(slotStates.head.glyph_quality, "3");
    assert.deepEqual(slotStates.head.glyph_level, "1");
    assert.deepEqual(slotStates.head.signet_id, "20");
    assert.deepEqual(slotStates.head.signet_rarity, "superior");
    assert.deepEqual(slotStates.head.signet_level, "15");
});

//TODO/REFACTOR : to have only numerical values, not strings
QUnit.test("should collect all mapped slot states", function(assert) {
    var slotStates = swlcalc.gear.mappedState();

    assert.deepEqual(slotStates.weapon.equipment_id, "1");
    assert.deepEqual(slotStates.weapon.equipment_rarity, 3);
    assert.deepEqual(slotStates.weapon.equipment_quality, "1");
    assert.deepEqual(slotStates.weapon.equipment_level, "30");
    assert.deepEqual(slotStates.weapon.glyph_id, 2);
    assert.deepEqual(slotStates.weapon.glyph_rarity, 2);
    assert.deepEqual(slotStates.weapon.glyph_quality, "1");
    assert.deepEqual(slotStates.weapon.glyph_level, "1");
    assert.deepEqual(slotStates.weapon.signet_id, "6");
    assert.deepEqual(slotStates.weapon.signet_rarity, 0);
    assert.deepEqual(slotStates.weapon.signet_level, 0);

    assert.deepEqual(slotStates.head.equipment_id, "1");
    assert.deepEqual(slotStates.head.equipment_rarity, 3);
    assert.deepEqual(slotStates.head.equipment_quality, "1");
    assert.deepEqual(slotStates.head.equipment_level, "30");
    assert.deepEqual(slotStates.head.glyph_id, 1);
    assert.deepEqual(slotStates.head.glyph_rarity, 4);
    assert.deepEqual(slotStates.head.glyph_quality, "3");
    assert.deepEqual(slotStates.head.glyph_level, "1");
    assert.deepEqual(slotStates.head.signet_id, "20");
    assert.deepEqual(slotStates.head.signet_rarity, 2);
    assert.deepEqual(slotStates.head.signet_level, "15");
});
