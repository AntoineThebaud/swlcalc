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
