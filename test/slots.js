
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

test('should tell whether this slot is a weapon', 2, function() {
    equal(swlcalc.gear.slots.weapon.isWeapon(), true);
    equal(swlcalc.gear.slots.head.isWeapon(), false);
});

test('should set and get talisman name', 1, function() {
    swlcalc.gear.slots.head.name('Mark of the starspawn');
    equal(swlcalc.gear.slots.head.name(), 'Mark of the starspawn');
});

test('should get talisman id', 1, function() {
    equal(swlcalc.gear.slots.head.itemId(), '1');
});

test('should set talisman id', 1, function() {
    swlcalc.gear.slots.head.itemId('3');
    equal(swlcalc.gear.slots.head.itemId(), '3');
});

test('should get talisman totalILvl', 1, function() {
    equal(swlcalc.gear.slots.head.totalILvl(), '453');
});

test('should set talisman totalILvl', 1, function() {
    swlcalc.gear.slots.head.totalILvl('9999');
    equal(swlcalc.gear.slots.head.totalILvl(), '9999');
});

test('should get talisman rarity', 1, function() {
    equal(swlcalc.gear.slots.head.rarity(), 'epic');
});

test('should set talisman rarity', 1, function() {
    swlcalc.gear.slots.head.rarity('legendary');
    equal(swlcalc.gear.slots.head.rarity(), 'legendary');
});

test('should get talisman quality', 1, function() {
    equal(swlcalc.gear.slots.head.quality(), 'faded');
});

test('should set talisman quality', 1, function() {
    swlcalc.gear.slots.head.quality('radiant');
    equal(swlcalc.gear.slots.head.quality(), 'radiant');
});

test('should get talisman level', 1, function() {
    equal(swlcalc.gear.slots.head.level(), '30');
});

test('should set talisman level', 1, function() {
    swlcalc.gear.slots.head.level('14');
    equal(swlcalc.gear.slots.head.level(), '14');
});

test('should get talisman powerRating', 1, function() {
    equal(swlcalc.gear.slots.head.powerRating(), '1070');
});

test('should set talisman powerRating', 1, function() {
    swlcalc.gear.slots.head.powerRating('8');
    equal(swlcalc.gear.slots.head.powerRating(), '8');
});

test('should get talisman iLvl', 1, function() {
    equal(swlcalc.gear.slots.head.iLvl(), '278');
});

test('should set talisman iLvl', 1, function() {
    swlcalc.gear.slots.head.iLvl('800000000000');
    equal(swlcalc.gear.slots.head.iLvl(), '800000000000');
});

//TODO/BUG : should be ok !
// test('should get talisman imgIcon', 1, function() {
//     equal(swlcalc.gear.slots.head.imgIcon(), 'assets/images/icons/talisman/Ashes.png');
// });

test('should set talisman imgIcon', 1, function() {
    swlcalc.gear.slots.head.imgIcon('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.imgIcon(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get talisman imgBorder', 1, function() {
    equal(swlcalc.gear.slots.head.imgBorder(), 'assets/images/icons/rarity/epic-42x42.png');
});

test('should set talisman imgBorder', 1, function() {
    swlcalc.gear.slots.head.imgBorder('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.imgBorder(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get talisman description', 1, function() {
    equal(swlcalc.gear.slots.head.description(), '');
});

test('should set talisman description', 1, function() {
    swlcalc.gear.slots.head.description('Lorem ipsum dolor sit amet');
    equal(swlcalc.gear.slots.head.description(), 'Lorem ipsum dolor sit amet');
});

test('should update image and description', 1, function() {
    swlcalc.gear.slots.head.itemId('12');
    swlcalc.gear.slots.head.updateItem();
    //TODO/BUGGY not updated faster enough : equal(swlcalc.gear.slots.head.imgIcon(), 'assets/images/icons/talisman/Ashes.png', "should have update #head-imgIcon");
    equal(swlcalc.gear.slots.head.description(), 'Whenever you are hit 5 times in succession, you deal %d physical damage to nearby enemies. This damage generates a large amount of hate.', "should have update #head-description");
});

test('should update power rating', 2, function() {
    equal(swlcalc.gear.slots.head.powerRating(), '1070');
    swlcalc.gear.slots.head.rarity('legendary');
    swlcalc.gear.slots.head.updatePowerRating();
    equal(swlcalc.gear.slots.head.powerRating(), '2342');
});

test('should get the slot\'s glyph', 1, function() {
    equal(swlcalc.gear.slots.head.glyph(), 'hit-rating');
});

test('should set the slot\'s glyph', 1, function() {
    swlcalc.gear.slots.head.glyph('evade-rating');
    equal(swlcalc.gear.slots.head.glyph(), 'evade-rating');
});

test('should get the slot\'s glyph rarity', 1, function() {
    equal(swlcalc.gear.slots.head.glyphRarity(), 'mythic');
});

test('should set the slot\'s glyph rarity', 1, function() {
    swlcalc.gear.slots.head.glyphRarity('standard');
    equal(swlcalc.gear.slots.head.glyphRarity(), 'standard');
});

test('should get the slot\'s glyph quality', 1, function() {
    equal(swlcalc.gear.slots.head.glyphQuality(), 'intricate');
});

test('should set the slot\'s glyph quality', 1, function() {
    swlcalc.gear.slots.head.glyphQuality('crude');
    equal(swlcalc.gear.slots.head.glyphQuality(), 'crude');
});

test('should get the slot\'s glyph level', 1, function() {
    equal(swlcalc.gear.slots.head.glyphLevel(), '1');
});

test('should set the slot\'s glyph level', 1, function() {
    swlcalc.gear.slots.head.glyphLevel('7');
    equal(swlcalc.gear.slots.head.glyphLevel(), '7');
});

test('should get the slot\'s glyph rating from lookup tables', 1, function() {
    swlcalc.gear.slots.head.glyph('hit-rating');
    swlcalc.gear.slots.head.glyphRarity('superior');
    swlcalc.gear.slots.head.glyphQuality('intricate');
    swlcalc.gear.slots.head.glyphLevel('20');

    swlcalc.gear.slots.head.updateGlyphRating();

    equal(swlcalc.gear.slots.head.glyphRating(), 231);
});

test('should update the slot\'s rating', 1, function() {
    swlcalc.gear.slots.head.glyph('hit-rating');
    swlcalc.gear.slots.head.glyphRarity('superior');
    swlcalc.gear.slots.head.glyphQuality('intricate');
    swlcalc.gear.slots.head.glyphLevel('20');

    swlcalc.gear.slots.head.updateGlyphRating();

    deepEqual(swlcalc.gear.slots.head.el.glyphRating.html(), '+231');
});

test('should get the slot\'s glyph label', 1, function() {
    equal(swlcalc.gear.slots.head.glyphLabel(), ' Hit Rating');
});

test('should set the slot\'s glyph label', 1, function() {
    swlcalc.gear.slots.head.glyphLabel(' Pizza Rating');
    equal(swlcalc.gear.slots.head.glyphLabel(), ' Pizza Rating');
});

test('should get the slot\'s glyph imgIcon', 1, function() {
    equal(swlcalc.gear.slots.head.glyphImgIcon(), 'assets/images/icons/glyph/hit-rating.png');
});

test('should set the slot\'s glyph imgIcon', 1, function() {
    swlcalc.gear.slots.head.glyphImgIcon('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.glyphImgIcon(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get the slot\'s glyph imgBorder', 1, function() {
    //TODO/FEATURE : to use assets/image/icons/rarity/none-42x42.png
    equal(swlcalc.gear.slots.head.glyphImgBorder(), 'assets/images/icons/rarity/none-42x42.png');
});

test('should set the slot\'s glyph imgBorder', 1, function() {
    swlcalc.gear.slots.head.glyphImgBorder('lorem/ipsum/dolor/sit/amet');
    equal(swlcalc.gear.slots.head.glyphImgBorder(), 'lorem/ipsum/dolor/sit/amet');
});

test('should get the slot\'s glyph iLvl', 1, function() {
    equal(swlcalc.gear.slots.head.glyphILvl(), 175);
});

test('should set the slot\'s glyph iLvl', 1, function() {
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

test('should get the slot\'s signet rarity', 1, function() {
    equal(swlcalc.gear.slots.head.signetRarity(), 'standard');
});

test('should set the slot\'s signet rarity', 1, function() {
    swlcalc.gear.slots.head.signetRarity('legendary');
    equal(swlcalc.gear.slots.head.signetRarity(), 'legendary');
});

test('should get the slot\'s signet level', 1, function() {
    equal(swlcalc.gear.slots.head.signetLevel(), '20');
});

test('should set the slot\'s signet level', 1, function() {
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

test('should get the slot\'s signet iLvl', 1, function() {
    equal(swlcalc.gear.slots.head.signetILvl(), 0);
});

test('should set the slot\'s signet iLvl', 1, function() {
    swlcalc.gear.slots.head.signetILvl(666);
    equal(swlcalc.gear.slots.head.signetILvl(), 666);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet icon from name', 1, function() {
//     swlcalc.gear.slots.head.updateSignetIconImageFromName('minor_dps');

//     equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/minor_dps.png');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet description for single value replace', 1, function() {
//     equal(swlcalc.gear.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet description for multiple value replace', 1, function() {
//     swlcalc.gear.slots.occult.signetId('47');
//     swlcalc.gear.slots.occult.signetRarity('epic');

//     equal(swlcalc.gear.slots.occult.signetDescription(), 'When your health is below 50% you are healed for 150 and affected by a heal over time effect healing you for 57 every 2 seconds for 8 seconds. 12 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet description', 1, function() {
//     swlcalc.gear.slots.head.updateSignetDescription();

//     equal($('#head-signet-description').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
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

    equal(swlcalc.gear.slots.head.itemId(), 'none');
    equal(swlcalc.gear.slots.head.rarity(), 'standard');
    equal(swlcalc.gear.slots.head.quality(), 'faded');
    equal(swlcalc.gear.slots.head.level(), '20');
    equal(swlcalc.gear.slots.head.glyph(), 'none');
    equal(swlcalc.gear.slots.head.glyphRarity(), 'standard');
    equal(swlcalc.gear.slots.head.glyphQuality(), 'crude');
    equal(swlcalc.gear.slots.head.glyphLevel(), '20');
    //equal(swlcalc.gear.slots.head.getSignet(), 'none'); => see swlcalc.data.signet_data.noneSignet()
    equal(swlcalc.gear.slots.head.signetRarity(), 'standard');
    equal(swlcalc.gear.slots.head.signetLevel(), '20');
});

test('should collect current slot state', 10, function() {
    var slotState = swlcalc.gear.slots.head.state();

    deepEqual(slotState.rarity, 'epic');
    deepEqual(slotState.quality, 'faded');
    deepEqual(slotState.level, '30');
    deepEqual(slotState.glyph, 'hit-rating');
    deepEqual(slotState.glyph_rarity, 'mythic');
    deepEqual(slotState.glyph_quality, 'intricate');
    deepEqual(slotState.glyph_level, '1');
    deepEqual(slotState.signet_id, 'none');
    deepEqual(slotState.signet_rarity, 'standard');
    deepEqual(slotState.signet_level, '20');
});

test('should collect current mapped slot state', 11, function() {
    var slotState = swlcalc.gear.slots.head.mappedState();

    deepEqual(slotState.itemId, '1');
    deepEqual(slotState.rarity, 3);
    deepEqual(slotState.quality, 1);
    deepEqual(slotState.level, '30');
    deepEqual(slotState.glyph, 1);
    deepEqual(slotState.glyph_rarity, 4);
    deepEqual(slotState.glyph_quality, 3);
    deepEqual(slotState.glyph_level, '1');
    deepEqual(slotState.signet_id, 0);
    deepEqual(slotState.signet_rarity, 1);
    deepEqual(slotState.signet_level, '20');
});

test('should collect all slot states', 20, function() {
    var slotStates = swlcalc.gear.state();

    deepEqual(slotStates.weapon.rarity, 'epic');
    deepEqual(slotStates.weapon.quality, 'mkI');
    deepEqual(slotStates.weapon.level, '30');
    deepEqual(slotStates.weapon.glyph, 'critical-rating');
    deepEqual(slotStates.weapon.glyph_rarity, 'superior');
    deepEqual(slotStates.weapon.glyph_quality, 'crude');
    deepEqual(slotStates.weapon.glyph_level, '1');
    deepEqual(slotStates.weapon.signet_id, 'none');
    deepEqual(slotStates.weapon.signet_rarity, undefined);
    deepEqual(slotStates.weapon.signet_level, undefined);

    deepEqual(slotStates.head.rarity, 'epic');
    deepEqual(slotStates.head.quality, 'faded');
    deepEqual(slotStates.head.level, '30');
    deepEqual(slotStates.head.glyph, 'hit-rating');
    deepEqual(slotStates.head.glyph_rarity, 'mythic');
    deepEqual(slotStates.head.glyph_quality, 'intricate');
    deepEqual(slotStates.head.glyph_level, '1');
    deepEqual(slotStates.head.signet_id, 'none');
    deepEqual(slotStates.head.signet_rarity, 'standard');
    deepEqual(slotStates.head.signet_level, '20');
});

//TODO/REFACTOR : to have only numerical values, not strings
test('should collect all mapped slot states', 22, function() {
    var slotStates = swlcalc.gear.mappedState();

    deepEqual(slotStates.weapon.itemId, '1');
    deepEqual(slotStates.weapon.rarity, 3);
    deepEqual(slotStates.weapon.quality, 1);
    deepEqual(slotStates.weapon.level, '30');
    deepEqual(slotStates.weapon.glyph, 2);
    deepEqual(slotStates.weapon.glyph_rarity, 2);
    deepEqual(slotStates.weapon.glyph_quality, 1);
    deepEqual(slotStates.weapon.glyph_level, '1');
    deepEqual(slotStates.weapon.signet_id, 0);
    deepEqual(slotStates.weapon.signet_rarity, 0);
    deepEqual(slotStates.weapon.signet_level, 0);

    deepEqual(slotStates.head.itemId, '1');
    deepEqual(slotStates.head.rarity, 3);
    deepEqual(slotStates.head.quality, 1);
    deepEqual(slotStates.head.level, '30');
    deepEqual(slotStates.head.glyph, 1);
    deepEqual(slotStates.head.glyph_rarity, 4);
    deepEqual(slotStates.head.glyph_quality, 3);
    deepEqual(slotStates.head.glyph_level, '1');
    deepEqual(slotStates.head.signet_id, 0);
    deepEqual(slotStates.head.signet_rarity, 1);
    deepEqual(slotStates.head.signet_level, '20');
});
