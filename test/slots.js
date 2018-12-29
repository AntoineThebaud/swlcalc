
module('slots-unit-tests', {
    setup: function() {
        renderSlots();
        renderSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        createTankBuild();
    }
});

test('should tell whether this slot is a weapon slot', 2, function() {
    equal(swlcalc.gear.slots.weapon.isWeapon(), true);
    equal(swlcalc.gear.slots.head.isWeapon(), false);
});

test('should set and get the slot\'s equipment name', 1, function() {
    swlcalc.gear.slots.head.equipmentName('Mark of the starspawn');
    equal(swlcalc.gear.slots.head.equipmentName(), 'Mark of the starspawn');
});

test('should get and set the slot\'s equipment id', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentId(), '1');
    swlcalc.gear.slots.head.equipmentId('3');
    equal(swlcalc.gear.slots.head.equipmentId(), '3');
});

test('should get and set slot\'s total iLvl', 2, function() {
    equal(swlcalc.gear.slots.head.iLvl(), '480');
    swlcalc.gear.slots.head.iLvl('9999');
    equal(swlcalc.gear.slots.head.iLvl(), '9999');
});

test('should get and set the slot\'s equipment rarity', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentRarity(), 'epic');
    swlcalc.gear.slots.head.equipmentRarity('legendary');
    equal(swlcalc.gear.slots.head.equipmentRarity(), 'legendary');
});

test('should get and set the slot\'s equipment quality', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentQuality(), 'faded');
    swlcalc.gear.slots.head.equipmentQuality('radiant');
    equal(swlcalc.gear.slots.head.equipmentQuality(), 'radiant');
});

test('should get and set the slot\'s equipment level', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentLevel(), '30');
    swlcalc.gear.slots.head.equipmentLevel('14');
    equal(swlcalc.gear.slots.head.equipmentLevel(), '14');
});

test('should get and set the slot\'s equipment power rating', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentPowerRating(), '1070');
    swlcalc.gear.slots.head.equipmentPowerRating('8');
    equal(swlcalc.gear.slots.head.equipmentPowerRating(), '8');
});

test('should get and set the slot\'s equipment iLvl', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentILvl(), '278');
    swlcalc.gear.slots.head.equipmentILvl('800000000000');
    equal(swlcalc.gear.slots.head.equipmentILvl(), '800000000000');
});

test('should get and set the slot\'s equipment icon image', 1 /*2*/, function() {
    //TODO/BUG : this one should finish in status ok !
    //equal(swlcalc.gear.slots.head.equipmentImgIcon(), 'assets/images/icons/talisman/Ashes.png');
    swlcalc.gear.slots.head.equipmentImgIcon('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.equipmentImgIcon(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get and set the slot\'s equipment border image', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentImgBorder(), 'assets/images/icons/rarity/epic-42x42.png');
    swlcalc.gear.slots.head.equipmentImgBorder('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.equipmentImgBorder(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get and set the slot\'s equipment description', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentDescription(), '');
    swlcalc.gear.slots.head.equipmentDescription('Lorem ipsum dolor sit amet');
    equal(swlcalc.gear.slots.head.equipmentDescription(), 'Lorem ipsum dolor sit amet');
});

test('should update the slot\'s equipment image and description', 1, function() {
    swlcalc.gear.slots.head.equipmentId('12');
    swlcalc.gear.slots.head.updateEquipment();
    //TODO/BUGGY not updated faster enough : equal(swlcalc.gear.slots.head.equipmentImgIcon(), 'assets/images/icons/talisman/Ashes.png', "should have update #head-imgIcon");
    equal(swlcalc.gear.slots.head.equipmentDescription(), 'Whenever you are hit 5 times in succession, you deal %d physical damage to nearby enemies. This damage generates a large amount of hate.', "should have update #head-equipmentDescription");
});

test('should update the slot\'s equipment power rating', 2, function() {
    equal(swlcalc.gear.slots.head.equipmentPowerRating(), '1070');
    swlcalc.gear.slots.head.equipmentRarity('legendary');
    swlcalc.gear.slots.head.updateEquipmentPowerRating();
    equal(swlcalc.gear.slots.head.equipmentPowerRating(), '2342');
});

test('should get and set the slot\'s glyph id', 2, function() {
    equal(swlcalc.gear.slots.head.glyphId(), 'hit-rating');
    swlcalc.gear.slots.head.glyphId('evade-rating');
    equal(swlcalc.gear.slots.head.glyphId(), 'evade-rating');
});

test('should get and set the slot\'s glyph rarity', 2, function() {
    equal(swlcalc.gear.slots.head.glyphRarity(), 'mythic');
    swlcalc.gear.slots.head.glyphRarity('standard');
    equal(swlcalc.gear.slots.head.glyphRarity(), 'standard');
});

test('should get and set the slot\'s glyph quality', 2, function() {
    equal(swlcalc.gear.slots.head.glyphQuality(), 'intricate');
    swlcalc.gear.slots.head.glyphQuality('crude');
    equal(swlcalc.gear.slots.head.glyphQuality(), 'crude');
});

test('should get and set the slot\'s glyph level', 2, function() {
    equal(swlcalc.gear.slots.head.glyphLevel(), '1');
    swlcalc.gear.slots.head.glyphLevel('7');
    equal(swlcalc.gear.slots.head.glyphLevel(), '7');
});

test('should get and set the slot\'s glyph (all attributes)', 2, function() {
    swlcalc.gear.slots.head.glyphId('hit-rating');
    swlcalc.gear.slots.head.glyphRarity('superior');
    swlcalc.gear.slots.head.glyphQuality('intricate');
    swlcalc.gear.slots.head.glyphLevel('20');

    swlcalc.gear.slots.head.updateGlyphRating();

    equal(swlcalc.gear.slots.head.glyphRating(), 231);
    deepEqual(swlcalc.gear.slots.head.el.glyphRating.html(), '+231');
});

test('should get and set the slot\'s glyph label', 2, function() {
    equal(swlcalc.gear.slots.head.glyphLabel(), ' Hit Rating');
    swlcalc.gear.slots.head.glyphLabel(' Accele Rating');
    equal(swlcalc.gear.slots.head.glyphLabel(), ' Accele Rating');
});

test('should get and set the slot\'s glyph imgIcon', 2, function() {
    equal(swlcalc.gear.slots.head.glyphImgIcon(), 'assets/images/icons/glyph/hit-rating.png');
    swlcalc.gear.slots.head.glyphImgIcon('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.glyphImgIcon(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get and set the slot\'s glyph imgBorder', 2, function() {
    //TODO/FEATURE : to use assets/image/icons/rarity/none-42x42.png
    equal(swlcalc.gear.slots.head.glyphImgBorder(), 'assets/images/icons/rarity/none-42x42.png');
    swlcalc.gear.slots.head.glyphImgBorder('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.glyphImgBorder(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get and set the slot\'s glyph iLvl', 2, function() {
    equal(swlcalc.gear.slots.head.glyphILvl(), 175);
    swlcalc.gear.slots.head.glyphILvl(666);
    equal(swlcalc.gear.slots.head.glyphILvl(), 666);
});

test('should set talisman signet id, rarity and level', 3, function() {
    swlcalc.gear.slots.head.signetId('none');
    swlcalc.gear.slots.head.signetRarity('superior');
    swlcalc.gear.slots.head.signetLevel('20');

    equal(swlcalc.gear.slots.head.signetId(), 'none');
    equal(swlcalc.gear.slots.head.signetRarity(), 'superior');
    equal(swlcalc.gear.slots.head.signetLevel(), '20');
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get talisman signet object', 1, function() {
//     deepEqual(swlcalc.gear.slots.head.getSignet(), swlcalc.data.signet_data.find('head', '18'));
// });

test('should get and set the slot\'s signet rarity', 2, function() {
    equal(swlcalc.gear.slots.head.signetRarity(), 'superior');
    swlcalc.gear.slots.head.signetRarity('legendary');
    equal(swlcalc.gear.slots.head.signetRarity(), 'legendary');
});

test('should get and set the slot\'s signet level', 2, function() {
    equal(swlcalc.gear.slots.head.signetLevel(), '15');
    swlcalc.gear.slots.head.signetLevel('7');
    equal(swlcalc.gear.slots.head.signetLevel(), '7');
});

test('should update signet icon and border', 1, function() {
    swlcalc.gear.slots.head.signetRarity('superior');
    swlcalc.gear.slots.head.updateSignetIcon();

    //TODO/TEST tswcalc test. swlcalc equivalent needed
    // equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/head_tank.png');
    equal($('#head-signet-img-rarity').attr('src'), 'assets/images/icons/rarity/superior-42x42.png');
});

test('should get and set the slot\'s signet iLvl', 2, function() {
    equal(swlcalc.gear.slots.head.signetILvl(), 26);
    swlcalc.gear.slots.head.signetILvl(666);
    equal(swlcalc.gear.slots.head.signetILvl(), 666);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet icon from name', 1, function() {
//     swlcalc.gear.slots.head.updateSignetImgIconFromName('minor_dps');

//     equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/minor_dps.png');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet equipmentDescription for single value replace', 1, function() {
//     equal(swlcalc.gear.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
test('should get and set the slot\'s signet description', 2, function() {
    equal(swlcalc.gear.slots.occult.signetDescription(), 'After using Active Dodge, you recieve a speed bonus of 26.1579% for 4 seconds.');
    swlcalc.gear.slots.occult.signetId('3');
    swlcalc.gear.slots.occult.signetRarity('epic');
    swlcalc.gear.slots.occult.signetLevel('18');
    swlcalc.gear.slots.occult.updateSignet();
    equal(swlcalc.gear.slots.occult.signetDescription(), 'Your active dodges have a 30% to knock down enemies in your path, but also have their cooldown increased by 74.03%.');
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet equipmentDescription', 1, function() {
//     swlcalc.gear.slots.head.updateSignetDescription();

//     equal($('#head-signet-equipmentDescription').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get single signet value based on rarity', 1, function() {
//     var signet = swlcalc.gear.slots.head.getSignet();

//     deepEqual(swlcalc.gear.slots.head.determineSignetRarityValue(signet), 45);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get indexed signet value based on rarity', 2, function() {
//     swlcalc.gear.slots.occult.signetId('47');
//     swlcalc.gear.slots.occult.signetRarity('epic');
//     var signet = swlcalc.gear.slots.occult.getSignet();

//     deepEqual(swlcalc.gear.slots.occult.determineSignetRarityValue(signet, 0), 150);
//     deepEqual(swlcalc.gear.slots.occult.determineSignetRarityValue(signet, 1), 57);
// });

//TODO/TEST test('should get talisman glyph ilvl', 1, function() {

//TODO/TEST test('should set talisman glyph ilvl', 1, function() {

test('slots should have length of 9', 1, function() {
    equal(swlcalc.gear.nbSlots(), 9);
});

test('should reset slot state', 10, function() {
    swlcalc.gear.slots.head.reset();

    equal(swlcalc.gear.slots.head.equipmentId(), 'none');
    equal(swlcalc.gear.slots.head.equipmentRarity(), 'standard');
    equal(swlcalc.gear.slots.head.equipmentQuality(), 'faded');
    equal(swlcalc.gear.slots.head.equipmentLevel(), '20');
    equal(swlcalc.gear.slots.head.glyphId(), 'none');
    equal(swlcalc.gear.slots.head.glyphRarity(), 'standard');
    equal(swlcalc.gear.slots.head.glyphQuality(), 'crude');
    equal(swlcalc.gear.slots.head.glyphLevel(), '20');
    //equal(swlcalc.gear.slots.head.getSignet(), 'none'); => see swlcalc.data.signet_data.noneSignet()
    equal(swlcalc.gear.slots.head.signetRarity(), 'standard');
    equal(swlcalc.gear.slots.head.signetLevel(), '20');
});

test('should collect current slot state', 10, function() {
    var slotState = swlcalc.gear.slots.head.state();

    deepEqual(slotState.equipment_rarity, 'epic');
    deepEqual(slotState.equipment_quality, 'faded');
    deepEqual(slotState.equipment_level, '30');
    deepEqual(slotState.glyph_id, 'hit-rating');
    deepEqual(slotState.glyph_rarity, 'mythic');
    deepEqual(slotState.glyph_quality, 'intricate');
    deepEqual(slotState.glyph_level, '1');
    deepEqual(slotState.signet_id, '20');
    deepEqual(slotState.signet_rarity, 'superior');
    deepEqual(slotState.signet_level, '15');
});

test('should collect current mapped slot state', 11, function() {
    var slotState = swlcalc.gear.slots.head.mappedState();

    deepEqual(slotState.equipment_id, '1');
    deepEqual(slotState.equipment_rarity, 3);
    deepEqual(slotState.equipment_quality, 1);
    deepEqual(slotState.equipment_level, '30');
    deepEqual(slotState.glyph_id, 1);
    deepEqual(slotState.glyph_rarity, 4);
    deepEqual(slotState.glyph_quality, 3);
    deepEqual(slotState.glyph_level, '1');
    deepEqual(slotState.signet_id, '20');
    deepEqual(slotState.signet_rarity, 2);
    deepEqual(slotState.signet_level, '15');
});

test('should collect all slot states', 20, function() {
    var slotStates = swlcalc.gear.state();

    deepEqual(slotStates.weapon.equipment_rarity, 'epic');
    deepEqual(slotStates.weapon.equipment_quality, 'mkI');
    deepEqual(slotStates.weapon.equipment_level, '30');
    deepEqual(slotStates.weapon.glyph_id, 'critical-rating');
    deepEqual(slotStates.weapon.glyph_rarity, 'superior');
    deepEqual(slotStates.weapon.glyph_quality, 'crude');
    deepEqual(slotStates.weapon.glyph_level, '1');
    deepEqual(slotStates.weapon.signet_id, '6');
    deepEqual(slotStates.weapon.signet_rarity, undefined);
    deepEqual(slotStates.weapon.signet_level, undefined);

    deepEqual(slotStates.head.equipment_rarity, 'epic');
    deepEqual(slotStates.head.equipment_quality, 'faded');
    deepEqual(slotStates.head.equipment_level, '30');
    deepEqual(slotStates.head.glyph_id, 'hit-rating');
    deepEqual(slotStates.head.glyph_rarity, 'mythic');
    deepEqual(slotStates.head.glyph_quality, 'intricate');
    deepEqual(slotStates.head.glyph_level, '1');
    deepEqual(slotStates.head.signet_id, '20');
    deepEqual(slotStates.head.signet_rarity, 'superior');
    deepEqual(slotStates.head.signet_level, '15');
});

//TODO/REFACTOR : to have only numerical values, not strings
test('should collect all mapped slot states', 22, function() {
    var slotStates = swlcalc.gear.mappedState();

    deepEqual(slotStates.weapon.equipment_id, '1');
    deepEqual(slotStates.weapon.equipment_rarity, 3);
    deepEqual(slotStates.weapon.equipment_quality, 1);
    deepEqual(slotStates.weapon.equipment_level, '30');
    deepEqual(slotStates.weapon.glyph_id, 2);
    deepEqual(slotStates.weapon.glyph_rarity, 2);
    deepEqual(slotStates.weapon.glyph_quality, 1);
    deepEqual(slotStates.weapon.glyph_level, '1');
    deepEqual(slotStates.weapon.signet_id, '6');
    deepEqual(slotStates.weapon.signet_rarity, 0);
    deepEqual(slotStates.weapon.signet_level, 0);

    deepEqual(slotStates.head.equipment_id, '1');
    deepEqual(slotStates.head.equipment_rarity, 3);
    deepEqual(slotStates.head.equipment_quality, 1);
    deepEqual(slotStates.head.equipment_level, '30');
    deepEqual(slotStates.head.glyph_id, 1);
    deepEqual(slotStates.head.glyph_rarity, 4);
    deepEqual(slotStates.head.glyph_quality, 3);
    deepEqual(slotStates.head.glyph_level, '1');
    deepEqual(slotStates.head.signet_id, '20');
    deepEqual(slotStates.head.signet_rarity, 2);
    deepEqual(slotStates.head.signet_level, '15');
});
