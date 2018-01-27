
module('selects-dom', {
    setup: function() {
        renderSlots();
    }
});

test('should have required selects in the DOM', 97, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($('#' + slotId + '-itemId').length !== 0, slotId + '-itemId exists');
        }
        ok($('#' + slotId + '-rarity').length !== 0, slotId + '-rarity exists');
        ok($('#' + slotId + '-quality').length !== 0, slotId + '-quality exists');
        ok($('#' + slotId + '-level').length !== 0, slotId + '-level exists');
        ok($('#' + slotId + '-glyph').length !== 0, slotId + '-glyph exists');
        ok($('#' + slotId + '-glyph-rarity').length !== 0, slotId + '-glyph-rarity exists');
        ok($('#' + slotId + '-glyph-quality').length !== 0, slotId + '-glyph-quality exists');
        ok($('#' + slotId + '-glyph-level').length !== 0, slotId + '-glyph-level exists');
        ok($('#' + slotId + '-signet').length !== 0, slotId + '-signet exists');
        ok($('#' + slotId + '-signet-rarity').length !== 0, slotId + '-signet-rarity exists');
        ok($('#' + slotId + '-signet-level').length !== 0, slotId + '-signet-level exists');
    }
});

module('selects-events', {
    setup: function() {
        renderSlots();
        initiateSelectHandlers();
    }
});

test('should have required event listeners for change on selects in the DOM', 97, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        ok($._data($('#' + slotId + '-rarity').get(0), 'events').change instanceof Array);
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($._data($('#' + slotId + '-itemId').get(0), 'events').change instanceof Array);
        }
        ok($._data($('#' + slotId + '-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-rarity').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-signet').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-signet-rarity').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-signet-level').get(0), 'events').change instanceof Array);
    }
});

module('selects-unit-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        initiateSummary();
    }
});

// TODO : tswcalc test. swlcalc equivalent needed
// test('should have added signets to correct group', 8, function() {
//     // None option must be taken into account
//     equal($('#weapon-pick-signet option').size(), 23);
//     equal($('#head-pick-signet option').size(), 37); //weapon signets also fit in the head
//     equal($('#ring-pick-signet option').size(), 16);
//     equal($('#neck-pick-signet option').size(), 16);
//     equal($('#wrist-pick-signet option').size(), 16);
//     equal($('#luck-pick-signet option').size(), 41);
//     equal($('#waist-pick-signet option').size(), 41);
//     equal($('#occult-pick-signet option').size(), 41);
// });

// TODO : to reenabled
// test('should get signets for head', 1, function() {
//     equal(swlcalc.select['head'].getSignetsForHead('head').length, 22);
// });

module('selects-integration-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        swlcalc.slots.init();
    }
});

test('should enable changing of weapon type and set the slot name', 1, function() {
    swlcalc.slots['weapon'].wtype('blade');
    swlcalc.slots['weapon'].el.wtype.change();

    deepEqual(swlcalc.slots['weapon'].name(), ': Blade');
});

test('should enable changing of weapon2 type and set the slot name', 1, function() {
    swlcalc.slots['weapon2'].wtype('blade');
    swlcalc.slots['weapon2'].el.wtype.change();

    deepEqual(swlcalc.slots['weapon2'].name(), ': Blade');
});

test('should enable changing of weapon type to none and set the slot name to blank', 1, function() {
    swlcalc.slots['weapon'].wtype('blade');
    swlcalc.slots['weapon'].el.wtype.change();
    swlcalc.slots['weapon'].wtype('none');
    swlcalc.slots['weapon'].el.wtype.change();

    deepEqual(swlcalc.slots['weapon'].name(), '');
});

test('should enable changing of weapon2 type to none and set the slot name to blank', 1, function() {
    swlcalc.slots['weapon2'].wtype('blade');
    swlcalc.slots['weapon2'].el.wtype.change();
    swlcalc.slots['weapon2'].wtype('none');
    swlcalc.slots['weapon2'].el.wtype.change();

    deepEqual(swlcalc.slots['weapon2'].name(), '');
});

// TODO : add test for level-selects dynamic updates
