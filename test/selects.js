
module('selects-dom', {
    setup: function() {
        renderSlots();
    }
});

test('should have required selects in the DOM', 95, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var id = swlcalc.data.template_data.slots[i].id_prefix;
        ok($('#' + id + '-itemId').length !== 0, id + '-itemId exists');
        ok($('#' + id + '-rarity').length !== 0, id + '-rarity exists');
        ok($('#' + id + '-quality').length !== 0, id + '-quality exists');
        ok($('#' + id + '-level').length !== 0, id + '-level exists');
        ok($('#' + id + '-glyph').length !== 0, id + '-glyph exists');
        ok($('#' + id + '-glyph-rarity').length !== 0, id + '-glyph-rarity exists');
        ok($('#' + id + '-glyph-quality').length !== 0, id + '-glyph-quality exists');
        ok($('#' + id + '-glyph-level').length !== 0, id + '-glyph-level exists');
        ok($('#' + id + '-signet').length !== 0, id + '-signet exists');
        if (id != 'weapon' && id != 'weapon2') {
            ok($('#' + id + '-signet-rarity').length !== 0, id + '-signet-rarity exists');
            ok($('#' + id + '-signet-level').length !== 0, id + '-signet-level exists');
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
        var id = swlcalc.data.template_data.slots[i].id_prefix;
        ok($._data($('#' + id + '-itemId').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-rarity').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-glyph').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-glyph-rarity').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-glyph-quality').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-glyph-level').get(0), 'events').change instanceof Array);
        ok($._data($('#' + id + '-signet').get(0), 'events').change instanceof Array);
        if (id != 'weapon' && id != 'weapon2') {
            ok($._data($('#' + id + '-signet-rarity').get(0), 'events').change instanceof Array);
            ok($._data($('#' + id + '-signet-level').get(0), 'events').change instanceof Array);
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
    equal($('#weapon-itemId option').size(), 145);
    equal($('#weapon2-itemId option').size(), 145);
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
        swlcalc.gear.init();
    }
});

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type and set the slot name', 1, function() {
//     swlcalc.gear.slots.weapon.itemId('1');
//     swlcalc.gear.slots.weapon.el.itemId.change();

//     deepEqual(swlcalc.gear.slots.weapon.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type and set the slot name', 1, function() {
//     swlcalc.gear.slots.weapon2.itemId('1');
//     swlcalc.gear.slots.weapon2.el.itemId.change();

//     deepEqual(swlcalc.gear.slots.weapon2.name(), ': Blade');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon type to none and set the slot name to blank', 1, function() {
//     swlcalc.gear.slots.weapon.itemId('1');
//     swlcalc.gear.slots.weapon.el.itemId.change();
//     swlcalc.gear.slots.weapon.itemId('none');
//     swlcalc.gear.slots.weapon.el.itemId.change();

//     deepEqual(swlcalc.gear.slots.weapon.name(), '');
// });

//TODO/FEATURE : dynamic slot name
// test('should enable changing of weapon2 type to none and set the slot name to blank', 1, function() {
//     swlcalc.gear.slots.weapon2.itemId('1');
//     swlcalc.gear.slots.weapon2.el.itemId.change();
//     swlcalc.gear.slots.weapon2.itemId('none');
//     swlcalc.gear.slots.weapon2.el.itemId.change();

//     deepEqual(swlcalc.gear.slots.weapon2.name(), '');
// });

test('should set a non-zero ilvl value when selecting an item and then set it back to 0 when selecting none option', 3, function() {
    equal(swlcalc.gear.slots.occult.glyphILvl(), 0);
    swlcalc.gear.slots.occult.glyph('critical-rating');
    swlcalc.gear.slots.occult.el.glyph.change();
    equal(swlcalc.gear.slots.occult.glyphILvl(), 24);
    swlcalc.gear.slots.occult.glyph('none');
    swlcalc.gear.slots.occult.el.glyph.change();
    equal(swlcalc.gear.slots.occult.glyphILvl(), 0);
});

test('should update the #slot-level selects when their associated rarity is changed', 54, function() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var id = swlcalc.data.template_data.slots[i].id_prefix;
        equal($('#' + id + '-level option').size(), 20, "Untouched " + id + "-level should have values between 1 and 20");
        swlcalc.gear.slots[id].rarity('superior');
        swlcalc.gear.slots[id].el.rarity.change();
        equal($('#' + id + '-level option').size(), 25, "After " + id + "-rarity set to Superior, " + id + "-level should have values between 1 and 25");
        swlcalc.gear.slots[id].rarity('legendary');
        swlcalc.gear.slots[id].el.rarity.change();
        equal($('#' + id + '-level option').size(), 70, "After " + id + "-rarity set to Legendary, " + id + "-level should have values between 1 and 70");
        swlcalc.gear.slots[id].rarity('epic');
        swlcalc.gear.slots[id].el.rarity.change();
        equal($('#' + id + '-level option').size(), 30, "After " + id + "-rarity set to Epic, " + id + "-level should have values between 1 and 30");
        swlcalc.gear.slots[id].rarity('mythic');
        swlcalc.gear.slots[id].el.rarity.change();
        equal($('#' + id + '-level option').size(), 35, "After " + id + "-rarity set to Mythic, " + id + "-level should have values between 1 and 35");
        swlcalc.gear.slots[id].rarity('standard');
        swlcalc.gear.slots[id].el.rarity.change();
        equal($('#' + id + '-level option').size(), 20, "After " + id + "-rarity set back to Standard, " + id + "-level should have values between 1 and 20");
    }
});
