
module('selects-dom', {
    setup: function() {
        renderSlots();
    }
});

test('should have required selects in the DOM', 95, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($('#' + slotId + '-itemId').length !== 0, slotId + '-itemId exists');
        } else {
            ok($('#' + slotId + '-wtype').length !== 0, slotId + '-itemId exists');
        }
        ok($('#' + slotId + '-rarity').length !== 0, slotId + '-rarity exists');
        ok($('#' + slotId + '-quality').length !== 0, slotId + '-quality exists');
        ok($('#' + slotId + '-level').length !== 0, slotId + '-level exists');
        ok($('#' + slotId + '-glyph').length !== 0, slotId + '-glyph exists');
        ok($('#' + slotId + '-glyph-rarity').length !== 0, slotId + '-glyph-rarity exists');
        ok($('#' + slotId + '-glyph-quality').length !== 0, slotId + '-glyph-quality exists');
        ok($('#' + slotId + '-glyph-level').length !== 0, slotId + '-glyph-level exists');
        ok($('#' + slotId + '-signet').length !== 0, slotId + '-signet exists');
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($('#' + slotId + '-signet-rarity').length !== 0, slotId + '-signet-rarity exists');
            ok($('#' + slotId + '-signet-level').length !== 0, slotId + '-signet-level exists');
        }
    }
});

module('selects-events', {
    setup: function() {
        renderSlots();
        initiateSelectHandlers();
    }
});

test('should have required event listeners for change on selects in the DOM', 95, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        ok($._data($('#' + slotId + '-rarity').get(0), 'events').change instanceof Array);
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($._data($('#' + slotId + '-itemId').get(0), 'events').change instanceof Array);
        } else {
            ok($._data($('#' + slotId + '-wtype').get(0), 'events').change instanceof Array);
        }
        ok($._data($('#' + slotId + '-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-rarity').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-glyph-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-signet').get(0), 'events').change instanceof Array);
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($._data($('#' + slotId + '-signet-rarity').get(0), 'events').change instanceof Array);
            ok($._data($('#' + slotId + '-signet-level').get(0), 'events').change instanceof Array);
        }
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

test('should have fill talismans and weapon lists', 9, function() {
    // None option must be taken into account
    equal($('#weapon-wtype option').size(), 145);
    equal($('#weapon2-wtype option').size(), 145);
    equal($('#head-itemId option').size(), 15);
    equal($('#finger-itemId option').size(), 8);
    equal($('#neck-itemId option').size(), 13);
    equal($('#wrist-itemId option').size(), 9);
    equal($('#luck-itemId option').size(), 9);
    equal($('#waist-itemId option').size(), 20);
    equal($('#occult-itemId option').size(), 9);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
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

//TODO/TEST to reenabled
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

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type and set the slot name', 1, function() {
//     swlcalc.slots.weapon.wtype('1');
//     swlcalc.slots.weapon.el.wtype.change();

//     deepEqual(swlcalc.slots.weapon.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type and set the slot name', 1, function() {
//     swlcalc.slots.weapon2.wtype('1');
//     swlcalc.slots.weapon2.el.wtype.change();

//     deepEqual(swlcalc.slots.weapon2.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type to none and set the slot name to blank', 1, function() {
//     swlcalc.slots.weapon.wtype('1');
//     swlcalc.slots.weapon.el.wtype.change();
//     swlcalc.slots.weapon.wtype('none');
//     swlcalc.slots.weapon.el.wtype.change();

//     deepEqual(swlcalc.slots.weapon.name(), '');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type to none and set the slot name to blank', 1, function() {
//     swlcalc.slots.weapon2.wtype('1');
//     swlcalc.slots.weapon2.el.wtype.change();
//     swlcalc.slots.weapon2.wtype('none');
//     swlcalc.slots.weapon2.el.wtype.change();

//     deepEqual(swlcalc.slots.weapon2.name(), '');
// });

test('should set a non-zero ilvl value when selecting an item and then set it back to 0 when selecting none option', 3, function() {
    equal(swlcalc.slots.occult.glyphILvl(), 0);
    swlcalc.slots.occult.glyph('critical-rating');
    swlcalc.slots.occult.el.glyph.change();
    equal(swlcalc.slots.occult.glyphILvl(), 24);
    swlcalc.slots.occult.glyph('none');
    swlcalc.slots.occult.el.glyph.change();
    equal(swlcalc.slots.occult.glyphILvl(), 0);
});

test('should update the #slot-level selects when their associated rarity is changed', 54, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        equal($('#' + slotId + '-level option').size(), 20, "Untouched " + slotId + "-level should have values between 1 and 20");
        swlcalc.slots[slotId].rarity('superior');
        swlcalc.slots[slotId].el.rarity.change();
        equal($('#' + slotId + '-level option').size(), 25, "After " + slotId + "-rarity set to Superior, " + slotId + "-level should have values between 1 and 25");
        swlcalc.slots[slotId].rarity('legendary');
        swlcalc.slots[slotId].el.rarity.change();
        equal($('#' + slotId + '-level option').size(), 70, "After " + slotId + "-rarity set to Legendary, " + slotId + "-level should have values between 1 and 70");
        swlcalc.slots[slotId].rarity('epic');
        swlcalc.slots[slotId].el.rarity.change();
        equal($('#' + slotId + '-level option').size(), 30, "After " + slotId + "-rarity set to Epic, " + slotId + "-level should have values between 1 and 30");
        swlcalc.slots[slotId].rarity('mythic');
        swlcalc.slots[slotId].el.rarity.change();
        equal($('#' + slotId + '-level option').size(), 35, "After " + slotId + "-rarity set to Mythic, " + slotId + "-level should have values between 1 and 35");
        swlcalc.slots[slotId].rarity('standard');
        swlcalc.slots[slotId].el.rarity.change();
        equal($('#' + slotId + '-level option').size(), 20, "After " + slotId + "-rarity set back to Standard, " + slotId + "-level should have values between 1 and 20");
    }
});
