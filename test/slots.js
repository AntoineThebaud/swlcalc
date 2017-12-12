
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

test('should set and get talisman name', 1, function() {
    swlcalc.slots.head.name('Mark of the starspawn');
    equal(swlcalc.slots.head.name(), 'Mark of the starspawn');
});

test('should set talisman role', 1, function() {
    swlcalc.slots.head.itemId('2');
    equal(swlcalc.slots.head.item().role, 'healer');
});

test('should get talisman role', 1, function() {
    equal(swlcalc.slots.head.item().role, 'tank');
});

test('should get talisman ql', 1, function() {
    equal(swlcalc.slots.head.ql(), '10.4');
});

test('should set talisman ql', 1, function() {
    swlcalc.slots.head.ql('10.1');
    equal(swlcalc.slots.head.ql(), '10.1');
});

test('should get talisman glyph ql', 1, function() {
    equal(swlcalc.slots.head.glyphQl(), '10.5');
});

test('should set talisman glyph ql', 1, function() {
    swlcalc.slots.head.glyphQl('10.1');
    equal(swlcalc.slots.head.glyphQl(), '10.1');
});

test('should get talisman glyphs', 2, function() {
    equal(swlcalc.slots.head.primaryGlyph(), 'block-rating');
    equal(swlcalc.slots.head.secondaryGlyph(), 'none');
});

test('should set talisman glyphs', 2, function() {
    swlcalc.slots.head.primaryGlyph('hit-rating');
    swlcalc.slots.head.secondaryGlyph('defense-rating');

    equal(swlcalc.slots.head.primaryGlyph(), 'hit-rating');
    equal(swlcalc.slots.head.secondaryGlyph(), 'defense-rating');
});

test('should get talisman glyph distribution', 2, function() {
    equal(swlcalc.slots.head.primaryDist(), '4');
    equal(swlcalc.slots.head.secondaryDist(), '0');
});

test('should get talisman glyph values from lookup tables', 2, function() {
    swlcalc.slots.head.secondaryGlyph('hit-rating');
    swlcalc.slots.head.el.btn.primary[2].trigger('click');
    swlcalc.slots.head.el.btn.secondary[2].trigger('click');

    equal(swlcalc.slots.head.primaryGlyphValue(), 182);
    equal(swlcalc.slots.head.secondaryGlyphValue(), 182);
});

test('should update talisman glyph values', 2, function() {
    swlcalc.slots.head.secondaryGlyph('hit-rating');
    swlcalc.slots.head.el.btn.primary[2].trigger('click');
    swlcalc.slots.head.el.btn.secondary[2].trigger('click');

    swlcalc.slots.head.updatePrimaryGlyphValue();
    swlcalc.slots.head.updateSecondaryGlyphValue();

    deepEqual(swlcalc.slots.head.el.primaryGlyphValue.html(), '+182');
    deepEqual(swlcalc.slots.head.el.secondaryGlyphValue.html(), '+182');
});

test('should get talisman signet id and quality', 2, function() {
    equal(swlcalc.slots.head.signetId(), '18');
    equal(swlcalc.slots.head.signetQuality(), 'epic');
});

test('should set talisman signet id and quality', 2, function() {
    swlcalc.slots.head.signetId('16');
    swlcalc.slots.head.signetQuality('rare');

    equal(swlcalc.slots.head.signetId(), '16');
    equal(swlcalc.slots.head.signetQuality(), 'rare');
});

test('should get talisman signet object', 1, function() {
    deepEqual(swlcalc.slots.head.signet(), swlcalc.data.signet_data.find('head', '18'));
});

test('should update signet icon and border', 2, function() {
    swlcalc.slots.head.updateSignetIcon();

    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/head_tank.png');
    equal($('#head-signet-img-quality').attr('src'), 'assets/images/icons/epic.png');
});

test('should update signet icon from name', 1, function() {
    swlcalc.slots.head.updateSignetIconImageFromName('minor_dps');

    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/minor_dps.png');
});

test('should get signet description for single value replace', 1, function() {
    equal(swlcalc.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
});

test('should get signet description for multiple value replace', 1, function() {
    swlcalc.slots.occult.signetId('47');
    swlcalc.slots.occult.signetQuality('epic');

    equal(swlcalc.slots.occult.signetDescription(), 'When your health is below 50% you are healed for 150 and affected by a heal over time effect healing you for 57 every 2 seconds for 8 seconds. 12 seconds cooldown.');
});

test('should update signet description', 1, function() {
    swlcalc.slots.head.updateSignetDescription();

    equal($('#head-signet-description').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
});

test('should get single signet value based on quality', 1, function() {
    var signet = swlcalc.slots.head.signet();

    deepEqual(swlcalc.slots.head.determineSignetQualityValue(signet), 45);
});

test('should get black bullion cost for head slot (10.4/10.5)', 1, function() {
    deepEqual(swlcalc.slots.head.blackBullionCost(), 2100);
});

test('should get astral fuse cost for slot', 2, function() {
   deepEqual(swlcalc.slots.head.astralFuseCost(), 1); 
   deepEqual(swlcalc.slots.weapon.astralFuseCost(), 0); 
});

test('should get criterion upgrade cost for slot', 2, function() {
   deepEqual(swlcalc.slots.weapon.criterionUpgradeCost(), 1);  
   deepEqual(swlcalc.slots.head.criterionUpgradeCost(), 0);  
});

test('should get indexed signet value based on quality', 2, function() {
    swlcalc.slots.occult.signetId('47');
    swlcalc.slots.occult.signetQuality('epic');
    var signet = swlcalc.slots.occult.signet();

    deepEqual(swlcalc.slots.occult.determineSignetQualityValue(signet, 0), 150);
    deepEqual(swlcalc.slots.occult.determineSignetQualityValue(signet, 1), 57);
});

test('slots should have length of 9', 1, function() {
    equal(swlcalc.slots.length(), 9);
});

test('should reset slot state', 7, function() {
    swlcalc.slots.head.reset();

    equal(swlcalc.slots.head.ql(), '10.0');
    equal(swlcalc.slots.head.item().role, 'dps');
    equal(swlcalc.slots.head.glyphQl(), '10.0');
    equal(swlcalc.slots.head.primaryGlyph(), 'none');
    equal(swlcalc.slots.head.secondaryGlyph(), 'none');
    ok(swlcalc.slots.head.el.btn.primary[4].hasClass('active'));
    ok(swlcalc.slots.head.el.btn.secondary[0].hasClass('active'));
});

test('should collect current slot state', 9, function() {
    var slotState = swlcalc.slots.head.state();

    deepEqual(slotState.ql, '10.4');
    deepEqual(slotState.role, 'tank');
    deepEqual(slotState.glyph_ql, '10.5');
    deepEqual(slotState.primary_glyph, 'block-rating');
    deepEqual(slotState.secondary_glyph, 'none');
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 'epic');
    deepEqual(slotState.signet_id, '18');
});

test('should collect current mapped slot state', 9, function() {
    var slotState = swlcalc.slots.head.mappedState();

    deepEqual(slotState.ql, '4');
    deepEqual(slotState.role, 'tank');
    deepEqual(slotState.glyph_ql, '5');
    deepEqual(slotState.primary_glyph, 5);
    deepEqual(slotState.secondary_glyph, 0);
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 3);
    deepEqual(slotState.signet_id, '18');
});

test('should collect all slot states', 17, function() {
    var slotStates = swlcalc.slots.state();

    deepEqual(slotStates.weapon.ql, '10.5');
    deepEqual(slotStates.weapon.glyph_ql, '10.4');
    deepEqual(slotStates.weapon.primary_glyph, 'hit-rating');
    deepEqual(slotStates.weapon.secondary_glyph, 'none');
    deepEqual(slotStates.weapon.primary_dist, '4');
    deepEqual(slotStates.weapon.secondary_dist, '0');
    deepEqual(slotStates.weapon.signet_quality, 'rare');
    deepEqual(slotStates.weapon.signet_id, '5');

    deepEqual(slotStates.head.ql, '10.4');
    deepEqual(slotStates.head.role, 'tank');
    deepEqual(slotStates.head.glyph_ql, '10.5');
    deepEqual(slotStates.head.primary_glyph, 'block-rating');
    deepEqual(slotStates.head.secondary_glyph, 'none');
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 'epic');
    deepEqual(slotStates.head.signet_id, '18');
});

test('should collect all mapped slot states', 17, function() {
    var slotStates = swlcalc.slots.mappedState();

    deepEqual(slotStates.weapon.ql, '5');
    deepEqual(slotStates.weapon.glyph_ql, '4');
    deepEqual(slotStates.weapon.primary_glyph, 4);
    deepEqual(slotStates.weapon.secondary_glyph, 0);
    deepEqual(slotStates.weapon.primary_dist, '4');
    deepEqual(slotStates.weapon.secondary_dist, '0');
    deepEqual(slotStates.weapon.signet_quality, 2);
    deepEqual(slotStates.weapon.signet_id, '5');

    deepEqual(slotStates.head.ql, '4');
    deepEqual(slotStates.head.role, 'tank');
    deepEqual(slotStates.head.glyph_ql, '5');
    deepEqual(slotStates.head.primary_glyph, 5);
    deepEqual(slotStates.head.secondary_glyph, 0);
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 3);
    deepEqual(slotStates.head.signet_id, '18');
});