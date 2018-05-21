
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
    equal(swlcalc.slots.weapon.isWeapon(), true);
    equal(swlcalc.slots.head.isWeapon(), false);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should set and get talisman name', 1, function() {
//     swlcalc.slots.head.name('Mark of the starspawn');
//     equal(swlcalc.slots.head.name(), 'Mark of the starspawn');
// });

test('should get talisman rarity', 1, function() {
    equal(swlcalc.slots.head.rarity(), 'epic');
});

test('should set talisman rarity', 1, function() {
    swlcalc.slots.head.rarity('legendary');
    equal(swlcalc.slots.head.rarity(), 'legendary');
});

test('should get talisman glyph rarity', 1, function() {
    equal(swlcalc.slots.head.glyphRarity(), 'mythic');
});

test('should set talisman glyph rarity', 1, function() {
    swlcalc.slots.head.glyphRarity('standard');
    equal(swlcalc.slots.head.glyphRarity(), 'standard');
});

test('should get talisman glyphs', 1, function() {
    equal(swlcalc.slots.head.glyph(), 'hit-rating');
});

test('should set talisman glyphs', 1, function() {
    swlcalc.slots.head.glyph('evade-rating');
    equal(swlcalc.slots.head.glyph(), 'evade-rating');
});

test('should get talisman glyph value from lookup tables', 1, function() {
    swlcalc.slots.head.glyph('hit-rating');
    swlcalc.slots.head.glyphRarity('superior');
    swlcalc.slots.head.glyphQuality('intricate');
    swlcalc.slots.head.glyphLevel('20');
  
    swlcalc.slots.head.updateGlyphValue();

    equal(swlcalc.slots.head.glyphValue(), 231);
});

test('should update talisman glyph values', 1, function() {
    swlcalc.slots.head.glyph('hit-rating');
    swlcalc.slots.head.glyphRarity('superior');
    swlcalc.slots.head.glyphQuality('intricate');
    swlcalc.slots.head.glyphLevel('20');
  
    swlcalc.slots.head.updateGlyphValue();

    deepEqual(swlcalc.slots.head.el.glyphValue.html(), '+231');
});

test('should set talisman signet id, rarity and level', 3, function() {
    swlcalc.slots.head.signetId('none');
    swlcalc.slots.head.signetRarity('superior');
    swlcalc.slots.head.signetLevel('20');

    equal(swlcalc.slots.head.signetId(), 'none');
    equal(swlcalc.slots.head.signetRarity(), 'superior');
    equal(swlcalc.slots.head.signetLevel(), '20');
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get talisman signet object', 1, function() {
//     deepEqual(swlcalc.slots.head.signet(), swlcalc.data.signet_data.find('head', '18'));
// });

test('should update signet icon and border', 1, function() {
    swlcalc.slots.head.signetRarity('superior');
    swlcalc.slots.head.updateSignetIcon();

    //TODO/TEST tswcalc test. swlcalc equivalent needed
    // equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/head_tank.png');
    equal($('#head-signet-img-rarity').attr('src'), 'assets/images/icons/rarity/superior-42x42.png');
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet icon from name', 1, function() {
//     swlcalc.slots.head.updateSignetIconImageFromName('minor_dps');

//     equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/minor_dps.png');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet description for single value replace', 1, function() {
//     equal(swlcalc.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get signet description for multiple value replace', 1, function() {
//     swlcalc.slots.occult.signetId('47');
//     swlcalc.slots.occult.signetRarity('epic');

//     equal(swlcalc.slots.occult.signetDescription(), 'When your health is below 50% you are healed for 150 and affected by a heal over time effect healing you for 57 every 2 seconds for 8 seconds. 12 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should update signet description', 1, function() {
//     swlcalc.slots.head.updateSignetDescription();

//     equal($('#head-signet-description').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get single signet value based on rarity', 1, function() {
//     var signet = swlcalc.slots.head.signet();

//     deepEqual(swlcalc.slots.head.determineSignetRarityValue(signet), 45);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should get indexed signet value based on rarity', 2, function() {
//     swlcalc.slots.occult.signetId('47');
//     swlcalc.slots.occult.signetRarity('epic');
//     var signet = swlcalc.slots.occult.signet();

//     deepEqual(swlcalc.slots.occult.determineSignetRarityValue(signet, 0), 150);
//     deepEqual(swlcalc.slots.occult.determineSignetRarityValue(signet, 1), 57);
// });

test('slots should have length of 9', 1, function() {
    equal(swlcalc.slots.length(), 9);
});

test('should reset slot state', 10, function() {
    swlcalc.slots.head.reset();

    equal(swlcalc.slots.head.itemId(), 'none');
    equal(swlcalc.slots.head.rarity(), 'standard');
    equal(swlcalc.slots.head.quality(), 'faded');
    equal(swlcalc.slots.head.level(), '20');
    equal(swlcalc.slots.head.glyph(), 'none');
    equal(swlcalc.slots.head.glyphRarity(), 'standard');
    equal(swlcalc.slots.head.glyphQuality(), 'crude');
    equal(swlcalc.slots.head.glyphLevel(), '20');
    //equal(swlcalc.slots.head.signet(), 'none'); => see swlcalc.data.signet_data.noneSignet()
    equal(swlcalc.slots.head.signetRarity(), 'standard');
    equal(swlcalc.slots.head.signetLevel(), '20');
});

test('should collect current slot state', 10, function() {
    var slotState = swlcalc.slots.head.state();

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
    var slotState = swlcalc.slots.head.mappedState();

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

//TODO/TEST tswcalc test. swlcalc equivalent needed
// + to complete
// test('should collect all slot states', 17, function() {
//     var slotStates = swlcalc.slots.state();

//     deepEqual(slotStates.weapon.rarity, '10.5');
//     deepEqual(slotStates.weapon.glyph_rarity, '10.4');
//     deepEqual(slotStates.weapon.primary_glyph, 'hit-rating');
//     deepEqual(slotStates.weapon.secondary_glyph, 'none');
//     deepEqual(slotStates.weapon.primary_dist, '4');
//     deepEqual(slotStates.weapon.secondary_dist, '0');
//     deepEqual(slotStates.weapon.signet_rarity, 'superior');
//     deepEqual(slotStates.weapon.signet_id, '5');

//     deepEqual(slotStates.head.rarity, '10.4');
//     deepEqual(slotStates.head.role, 'tank');
//     deepEqual(slotStates.head.glyph_rarity, '10.5');
//     deepEqual(slotStates.head.primary_glyph, 'block-rating');
//     deepEqual(slotStates.head.secondary_glyph, 'none');
//     deepEqual(slotStates.head.primary_dist, '4');
//     deepEqual(slotStates.head.secondary_dist, '0');
//     deepEqual(slotStates.head.signet_rarity, 'epic');
//     deepEqual(slotStates.head.signet_id, '18');
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// + to complete
// test('should collect all mapped slot states', 17, function() {
//     var slotStates = swlcalc.slots.mappedState();

//     deepEqual(slotStates.weapon.rarity, '5');
//     deepEqual(slotStates.weapon.glyph_rarity, '4');
//     deepEqual(slotStates.weapon.primary_glyph, 4);
//     deepEqual(slotStates.weapon.secondary_glyph, 0);
//     deepEqual(slotStates.weapon.primary_dist, '4');
//     deepEqual(slotStates.weapon.secondary_dist, '0');
//     deepEqual(slotStates.weapon.signet_rarity, 2);
//     deepEqual(slotStates.weapon.signet_id, '5');

//     deepEqual(slotStates.head.rarity, '4');
//     deepEqual(slotStates.head.role, 'tank');
//     deepEqual(slotStates.head.glyph_rarity, '5');
//     deepEqual(slotStates.head.primary_glyph, 5);
//     deepEqual(slotStates.head.secondary_glyph, 0);
//     deepEqual(slotStates.head.primary_dist, '4');
//     deepEqual(slotStates.head.secondary_dist, '0');
//     deepEqual(slotStates.head.signet_rarity, 3);
//     deepEqual(slotStates.head.signet_id, '18');
// });
