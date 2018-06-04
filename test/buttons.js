module('swap-button-integration-tests', {
    setup: function() {
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        initiateSummary();
    }
});

//TODO/TEST add tests for event handlers ?

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
