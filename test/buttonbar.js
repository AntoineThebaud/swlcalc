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

test('should reset all slots', 171, function() {
    swlcalc.buttonBar.resetAllSlots();
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slotId = swlcalc.data.template_data.slots[i].id_prefix; //TODO/REFACTOR possible simplication with swlcalc.slots.indices ??
        var slot = swlcalc.slots[slotId];
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
        equal(slot.powerRating(), '0');
        equal(slot.description(), '');
        equal(slot.iLvl(), '0');
        equal(slot.glyph(), 'none');
        equal(slot.glyphRarity(), 'standard');
        equal(slot.glyphQuality(), 'crude');
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


//TODO/TEST test('should set rarity and glyph rarity on all slots to x', 16, function() {});

test('should set rarity on all slots', 125, function() {
  
    var mixedRarities = ['epic', 'standard', 'legendary', 'superior', 'mythic'];
    
    for (var r = 0; r < mixedRarities.length; r++) {
        $('#btn-all-' + mixedRarities[r]).click();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotId = swlcalc.data.template_data.slots[i].id_prefix;
            equal(swlcalc.slots[slotId].rarity(), mixedRarities[r]);
            equal(swlcalc.slots[slotId].glyphRarity(), mixedRarities[r]);
            if (slotId != 'weapon' && slotId != 'weapon2') {
                equal(swlcalc.slots[slotId].signetRarity(), mixedRarities[r]);
            } 
        }
    }
});

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
