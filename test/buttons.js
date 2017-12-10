module('glyphbuttons-dom', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have required buttons in the DOM', 10, function() {
    for (var button = 0; button <= 4; button++) {
        ok($('#weapon-primary-glyph-dist-btn' + button).length !== 0, "Primary glyph button " + button + " exists");
        ok($('#weapon-secondary-glyph-dist-btn' + button).length !== 0, "Secondary glyph button " + button + " exists");
    }
});

module('glyphbuttons-events', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have initialised button handlers for slot', 10, function() {
    swlcalc.slots['weapon'] = new swlcalc.slots.Slot('weapon', 'Weapon', 'weapon');
    swlcalc.button['weapon'] = new swlcalc.button.DistributionButtonHandler('weapon');
    swlcalc.button['weapon'].init();
    for (var button = 0; button <= 4; button++) {
        ok($._data($('#weapon-primary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Primary glyph button " + button + " has a click event");
        ok($._data($('#weapon-secondary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Secondary glyph button " + button + " has a click event");
    }
});


module('glyphbuttons-unit-tests', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
        swlcalc.slots['weapon'] = new swlcalc.slots.Slot('weapon', 'Weapon', 'weapon');
        swlcalc.button['weapon'] = new swlcalc.button.DistributionButtonHandler('weapon');
        swlcalc.button['weapon'].activate('primary', 0);
        swlcalc.button['weapon'].activate('secondary', 0);
    }
});

test('should set primary and secondary button to active and deactivate the siblings', 4, function() {
    swlcalc.button['weapon'].activate('primary', 2);
    swlcalc.button['weapon'].activate('secondary', 3);

    ok($('#weapon-primary-glyph-dist-btn2').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn3').hasClass('active'));
    ok($('#weapon-primary-glyph-dist > button.btn.active').length == 1);
    ok($('#weapon-secondary-glyph-dist > button.btn.active').length == 1);
});

test('should get inverse glyph', 2, function() {
    equal(swlcalc.button['weapon'].inverse('primary'), 'secondary', 'The inverse glyph of primary is secondary');
    equal(swlcalc.button['weapon'].inverse('secondary'), 'primary', 'The inverse glyph of secondary is primary');
});

test('should get dist', 2, function() {
    swlcalc.button['weapon'].activate('primary', 2);
    swlcalc.button['weapon'].activate('secondary', 3);

    deepEqual(swlcalc.button['weapon'].getDist('primary'), 2);
    deepEqual(swlcalc.button['weapon'].getDist('secondary'), 3);
});

test('should automatically balance primary and secondary glyph distribution to always be a sum of 4 when primary is clicked', 14, function() {
    swlcalc.button['weapon'].activate('primary', 4);
    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 4);
    equal(swlcalc.slots.weapon.secondaryDist(), 0);

    swlcalc.button['weapon'].activate('primary', 3);
    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 3);
    equal(swlcalc.slots.weapon.secondaryDist(), 1);

    swlcalc.button['weapon'].activate('primary', 2);
    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 2);
    equal(swlcalc.slots.weapon.secondaryDist(), 2);

    swlcalc.button['weapon'].activate('primary', 1);
    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 1);
    equal(swlcalc.slots.weapon.secondaryDist(), 3);

    swlcalc.button['weapon'].activate('primary', 0);
    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 0);
    equal(swlcalc.slots.weapon.secondaryDist(), 4);

    swlcalc.button['weapon'].activate('primary', 4);
    swlcalc.button['weapon'].activate('secondary', 4);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 4);
    equal(swlcalc.slots.weapon.secondaryDist(), 0);

    swlcalc.button['weapon'].activate('primary', 3);
    swlcalc.button['weapon'].activate('secondary', 4);
    swlcalc.button['weapon'].balance('primary');

    equal(swlcalc.slots.weapon.primaryDist(), 3);
    equal(swlcalc.slots.weapon.secondaryDist(), 1);
});

test('should automatically balance primary and secondary glyph distribution to always be a sum of 4 when secondary is clicked', 14, function() {
    swlcalc.button['weapon'].activate('secondary', 4);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 0);
    equal(swlcalc.slots.weapon.secondaryDist(), 4);

    swlcalc.button['weapon'].activate('secondary', 3);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 1);
    equal(swlcalc.slots.weapon.secondaryDist(), 3);

    swlcalc.button['weapon'].activate('secondary', 2);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 2);
    equal(swlcalc.slots.weapon.secondaryDist(), 2);

    swlcalc.button['weapon'].activate('secondary', 1);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 3);
    equal(swlcalc.slots.weapon.secondaryDist(), 1);

    swlcalc.button['weapon'].activate('secondary', 0);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 4);
    equal(swlcalc.slots.weapon.secondaryDist(), 0);

    swlcalc.button['weapon'].activate('primary', 4);
    swlcalc.button['weapon'].activate('secondary', 4);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 0);
    equal(swlcalc.slots.weapon.secondaryDist(), 4);

    swlcalc.button['weapon'].activate('primary', 4);
    swlcalc.button['weapon'].activate('secondary', 3);
    swlcalc.button['weapon'].balance('secondary');

    equal(swlcalc.slots.weapon.primaryDist(), 1);
    equal(swlcalc.slots.weapon.secondaryDist(), 3);
});

module('glyphbuttons-integration-tests', {
    setup: function() {
        renderSlots();
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
        swlcalc.slots.init();
        swlcalc.button.init();
        swlcalc.summary.init();
    }
});

test('should balance distribution when button is pressed', 4, function() {
    swlcalc.slots.weapon.el.btn.primary[3].click();

    equal(swlcalc.slots.weapon.primaryDist(), 3);
    equal(swlcalc.slots.weapon.secondaryDist(), 1);

    swlcalc.slots.head.el.btn.secondary[2].click();

    equal(swlcalc.slots.head.primaryDist(), 2);
    equal(swlcalc.slots.head.secondaryDist(), 2);
});

test('should have primary weapon drawn and secondary weapon sheathed', 2, function() {
    ok(swlcalc.slots.weapon.el.div.is(':visible'), 'primary visible');
    ok(!swlcalc.slots.weapon2.el.div.is(':visible'), 'secondary hidden');
});

test('should swap weapon from primary to secondary', 2, function() {
    $('#weapon-swap-weapon').click();

    ok(!swlcalc.slots.weapon.el.div.is(':visible'), 'primary hidden');
    ok(swlcalc.slots.weapon2.el.div.is(':visible'), 'secondary visible');
});

test('should swap weapon from primary to secondary and back again', 2, function() {
    $('#weapon-swap-weapon').click();
    $('#weapon2-swap-weapon').click();

    ok(swlcalc.slots.weapon.el.div.is(':visible'), 'primary visible');
    ok(!swlcalc.slots.weapon2.el.div.is(':visible'), 'secondary hidden');
});