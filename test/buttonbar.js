
module('buttonbar-dom', {
    setup: function() {
        renderButtonbar();
    }
});

test('should have required buttonbar buttons in DOM', 7, function() {
    ok($('#select-anima-allocation').length !== 0, 'select-anima-allocation dropdown exists');
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

test('should reset all slots', 171, function() {
    swlcalc.buttonBar.resetGear();
    for (var i = 0; i < swlcalc.gear.nbSlots(); i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix;
        var slot = swlcalc.gear.slots[slotId];
        equal(slot.iLvl(), '0');
        equal(slot.equipmentId(), 'none');
        equal(slot.equipmentQuality(), '1');
        equal(slot.equipmentRarity(), 'standard');
        equal(slot.equipmentLevel(), '20');
        equal(slot.equipmentPowerRating(), '0');
        equal(slot.equipmentDescription(), '');
        equal(slot.equipmentILvl(), '0');
        equal(slot.glyphId(), 'none');
        equal(slot.glyphRarity(), 'standard');
        equal(slot.glyphQuality(), '1');
        equal(slot.glyphLevel(), '20');
        equal(slot.glyphRating(), '0');
        equal(slot.glyphLabel(), ' ');
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
});

test('should set rarity on all slots', 125, function() {
    var mixedRarities = ['epic', 'standard', 'legendary', 'superior', 'mythic'];

    for (var r = 0; r < mixedRarities.length; r++) {
        $('#btn-all-' + mixedRarities[r]).click();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var id = swlcalc.data.template_data.slots[i].id_prefix;
            equal(swlcalc.gear.slots[id].equipmentRarity(), mixedRarities[r]);
            equal(swlcalc.gear.slots[id].glyphRarity(), mixedRarities[r]);
            if (id != 'weapon' && id != 'weapon2') {
                equal(swlcalc.gear.slots[id].signetRarity(), mixedRarities[r]);
            }
        }
    }
});

test('should set quality on all slots', 54, function() {
    var mixedQualities = ['3', '1', '2'];

    for (var r = 0; r < mixedQualities.length; r++) {
        $('#btn-all-' + mixedQualities[r] + '-pip').click();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var id = swlcalc.data.template_data.slots[i].id_prefix;
            equal(swlcalc.gear.slots[id].equipmentQuality(), mixedQualities[r]);
            equal(swlcalc.gear.slots[id].glyphQuality(), mixedQualities[r]);
        }
    }
});

test('should set anima allocation and affect stats correctly', 20, function() {
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
    $('#select-anima-allocation').val('heal');
    $('#select-anima-allocation').change();
    equal($('#stat-combat-power').html(), '462');
    equal($('#stat-healing-power').html(), '740');
    equal($('#stat-attack-rating').html(), '4322');
    equal($('#stat-heal-rating').html(), '8040');
    equal($('#stat-hitpoints').html(), '7512');
    $('#select-anima-allocation').val('tank');
    $('#select-anima-allocation').change();
    equal($('#stat-combat-power').html(), '462');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '4322');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '12837');
    $('#select-anima-allocation').val('dps');
    $('#select-anima-allocation').change();
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
});
