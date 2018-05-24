module('buttonbar-dom', {
    setup: function() {
        renderButtonbar();
    }
});

test('should have required buttonbar buttons in DOM', 9, function() {
    ok($('#btn-all-dps').length !== 0, 'all-dps button exists');
    ok($('#btn-all-heal').length !== 0, 'all-heal button exists');
    ok($('#btn-all-tank').length !== 0, 'all-tank button exists');
    ok($('#btn-all-standard').length !== 0, 'all-standard button exists');
    ok($('#btn-all-superior').length !== 0, 'all-superior button exists');
    ok($('#btn-all-epic').length !== 0, 'all-epic button exists');
    ok($('#btn-all-mythic').length !== 0, 'all-mythic button exists');
    ok($('#btn-all-legendary').length !== 0, 'all-legendary button exists');
    ok($('#btn-reset').length !== 0, 'reset button exists');
});

module('buttonbar-integration-tests', {
    setup: function() {
        renderSummary();
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        swlcalc.buttonBar.init();
        initiateSummary();
        createTankBuild();
    }
});

//TODO/TEST test('should set rarity and glyph rarity on all slots to x', 16, function() {});

//TODO/TEST test('should set rarity and glyph rarity on all slots to x after changing rarity then changing role', 23, function() {});

//TODO/TEST reset should logically set lvl 1 to items
test('should reset all slots', 120, function() {
    swlcalc.buttonBar.resetAllSlots();
    assertReset(swlcalc.slots.weapon);
    assertReset(swlcalc.slots.head);
    assertReset(swlcalc.slots.finger);
    assertReset(swlcalc.slots.neck);
    assertReset(swlcalc.slots.wrist);
    assertReset(swlcalc.slots.luck);
    assertReset(swlcalc.slots.waist);
    assertReset(swlcalc.slots.occult);
});

function assertReset(slot) {
    equal(slot.totalILvl(), '0');
    if(slot.isWeapon()) {
        equal(slot.wtype(), 'none');
        equal(slot.quality(), 'mkI');
    } else {
        equal(slot.itemId(), 'none');
        equal(slot.quality(), 'faded');
    }
    equal(slot.rarity(), 'standard');
    equal(slot.level(), '20');
    equal(slot.iLvl(), '0');
    equal(slot.glyph(), 'none');
    equal(slot.glyphRarity(), 'standard');
    equal(slot.glyphQuality(), 'crude');
    equal(slot.glyphLevel(), '20');
    equal(slot.glyphILvl(), '0');
    equal(slot.signetId(), 'none');
    if(slot.isWeapon()) {
        equal(slot.signetRarity(), undefined, 'expect signetRarity for weapon to be undefined');
        equal(slot.signetLevel(), undefined, 'expect signetLevel for weapon to be undefined');
        equal(slot.signetILvl(), undefined, 'expect signetILvl for weapon to be undefined');
    } else {
        equal(slot.signetRarity(), 'standard');
        equal(slot.signetLevel(), '20');
        equal(slot.signetILvl(), '0');
    }
}

test('should set anima allocation and affect stats correctly', 20, function() {
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
    $('#btn-all-heal').click();
    equal($('#stat-combat-power').html(), '462');
    equal($('#stat-healing-power').html(), '740');
    equal($('#stat-attack-rating').html(), '4322');
    equal($('#stat-heal-rating').html(), '8040');
    equal($('#stat-hitpoints').html(), '7512');
    $('#btn-all-tank').click();
    equal($('#stat-combat-power').html(), '462');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '4322');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '12837');
    $('#btn-all-dps').click();
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
});
