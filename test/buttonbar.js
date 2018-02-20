module('buttonbar-dom', {
    setup: function() {
        renderButtonbar();
    }
});

test('should have required buttonbar buttons in DOM', 9, function() {
    ok($('#btn-all-3').length !== 0, 'all-dps button exists');
    ok($('#btn-all-2').length !== 0, 'all-healer button exists');
    ok($('#btn-all-1').length !== 0, 'all-tank button exists');
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

// TODO : test('should set rarity and glyph rarity on all slots to x', 16, function() {});

// TODO : test('should set rarity and glyph rarity on all slots to x after changing rarity then changing role', 23, function() {});

//TODO : reset should logically set lvl 1 to items
test('should reset all slots', 88, function() {
    swlcalc.buttonBar.resetAllSlots();
    assertReset(swlcalc.slots.weapon);
    assertReset(swlcalc.slots.head);
    assertReset(swlcalc.slots.ring);
    assertReset(swlcalc.slots.neck);
    assertReset(swlcalc.slots.wrist);
    assertReset(swlcalc.slots.luck);
    assertReset(swlcalc.slots.waist);
    assertReset(swlcalc.slots.occult);
});

function assertReset(slot) {
    if(slot.isWeapon()) {
        equal(slot.wtype(), 'none');
        equal(slot.quality(), 'mkI');
    } else {
        equal(slot.itemId(), 'none');
        equal(slot.quality(), 'faded');
    }
    equal(slot.rarity(), 'standard');
    equal(slot.level(), '20');
    equal(slot.glyph(), 'none');
    equal(slot.glyphRarity(), 'standard');
    equal(slot.glyphQuality(), 'crude');
    equal(slot.glyphLevel(), '20');
    equal(slot.signetId(), 'none');
    equal(slot.signetRarity(), 'standard');
    equal(slot.signetLevel(), '20');
}
