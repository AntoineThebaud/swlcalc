
module('summary-dom', {
    setup: function() {
        renderSummary();
    }
});

//TODO/TEST : to add a new test to check the accuracy of average ilvl of the gear

test('should have required summary in DOM', 20, function() {
    // check all Primary stats exist
    ok($('#stat-ilvl').length !== 0, 'stat-ilvl exists');
    ok($('#stat-power-rating').length !== 0, 'stat-power-rating exists');
    ok($('#stat-weapon-power').length !== 0, 'stat-weapon-power exists');
    ok($('#stat-combat-power').length !== 0, 'stat-combat-power exists');
    ok($('#stat-healing-power').length !== 0, 'stat-healing-power exists');
    ok($('#stat-hitpoints').length !== 0, 'stat-hitpoints exists');
    ok($('#stat-attack-rating').length !== 0, 'stat-attack-rating exists');
    ok($('#stat-heal-rating').length !== 0, 'stat-heal-rating exists');
    // check all Offensive stats exist
    ok($('#stat-critical-rating').length !== 0, 'stat-critical-rating exists');
    ok($('#stat-critical-chance').length !== 0, 'stat-critical-chance exists');
    ok($('#stat-critical-power').length !== 0, 'stat-critical-power exists');
    ok($('#stat-critical-power-percentage').length !== 0, 'stat-critical-power-percentage exists');
    ok($('#stat-hit-rating').length !== 0, 'stat-hit-rating exists');
    ok($('#stat-glance-reduction').length !== 0, 'stat-glance-reduction');
    // check all Defensive stats exist
    ok($('#stat-defense-rating').length !== 0, 'stat-defense-rating exists');
    ok($('#stat-glance-chance').length !== 0, 'stat-glance-chance exists');
    ok($('#stat-evade-rating').length !== 0, 'stat-evade-rating exists');
    ok($('#stat-evade-chance').length !== 0, 'stat-evade-chance exists');
    ok($('#stat-physical-protection').length !== 0, 'stat-physical-protection exists');
    ok($('#stat-magical-protection').length !== 0, 'stat-magical-protection exists');
});

module('summary-unit-tests', {
    setup: function() {
        initiateSummary();
    }
});

test('should calculate critical chance', 3, function() {
    equal(swlcalc.summary.calculateCriticalChance(0), 7.5);
    equal(swlcalc.summary.calculateCriticalChance(4000), 32.9);
    equal(swlcalc.summary.calculateCriticalChance(8000), 51.1);
});

test('should calculate critical power', 3, function() {
    equal(swlcalc.summary.calculateCriticalPowerPercentage(0), 30);
    equal(swlcalc.summary.calculateCriticalPowerPercentage(2500), 118.3);
    equal(swlcalc.summary.calculateCriticalPowerPercentage(5000), 157.9);
});

test('should calculate combat power', 4, function() {
    equal(swlcalc.summary.calculateCombatPower(0, 0), 0);
    equal(swlcalc.summary.calculateCombatPower(2500, 0), 188);
    equal(swlcalc.summary.calculateCombatPower(0, 2500), 188);
    equal(swlcalc.summary.calculateCombatPower(3049, 398), 259);
});

test('should calculate evade chance', 3, function() {
    equal(swlcalc.summary.calculateEvadeChance(0), 0);
    equal(swlcalc.summary.calculateEvadeChance(4000), 27.5);
    equal(swlcalc.summary.calculateEvadeChance(5000), 29.8);
});

module('summary-integration-tests', {
    setup: function() {
        renderSummary();
        renderSlots();
        initiateSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
    },
    teardown: function() {

    }
});

test('should collect primary stats at initial state', 8, function() {
    var sums = swlcalc.summary.collectPrimaryStats();

    equal(sums['combat-power'], 324);
    equal(sums['healing-power'], 323);
    equal(sums['weapon-power'], 0);
    equal(sums['attack-rating'], 4322);
    equal(sums['heal-rating'], 4310);
    equal(sums['hitpoints'], 7512);
    equal(sums['power-rating'], 0);
    equal(sums['ilvl'], 0);
});

test('should collect primary stats for tank build', 8, function() {
    createTankBuild();

    var sums = swlcalc.summary.collectPrimaryStats();

    equal(sums['combat-power'], 741);
    equal(sums['healing-power'], 461);
    equal(sums['weapon-power'], 1832);
    equal(sums['attack-rating'], 8052);
    equal(sums['heal-rating'], 4310);
    equal(sums['hitpoints'], 7512);
    equal(sums['power-rating'], 3730);
    equal(sums['ilvl'], 357);
});

test('should collect offensive and defensive stats for initial state', 10, function() {
    var sums = swlcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 756 );
    equal(sums['critical-chance'], 13.3);
    equal(sums['critical-power'], 1008);
    equal(sums['critical-power-percentage'], 90.6);
    equal(sums['hit-rating'], 756);
    equal(sums['glance-reduction'], 14.9);
    equal(sums['defense-rating'], 753);
    equal(sums['glance-chance'], 7.4);
    equal(sums['evade-rating'], 753);
    equal(sums['evade-chance'], 5.2);
    //TODO/TEST equal(sums['physical-protection'], 300);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

test('should collect offensive and defensive stats for tank build', 10, function() {
    createTankBuild();

    var sums = swlcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 841);
    equal(sums['critical-chance'], 13.8);
    equal(sums['critical-power'], 1008);
    equal(sums['critical-power-percentage'], 90.6);
    equal(sums['hit-rating'], 1244);
    equal(sums['glance-reduction'], 24.5);
  
    equal(sums['defense-rating'], 1896);
    equal(sums['glance-chance'], 18.6);
    equal(sums['evade-rating'], 1896);
    equal(sums['evade-chance'], 13.0);
    //TODO/TEST equal(sums['physical-protection'], 660);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

test('should collect all stats and return two objects', 2, function() {
    createTankBuild();
    var expectedPrimaryStats = {
        'combat-power': 741,
        'healing-power': 461,
        'weapon-power': 1832,
        'hitpoints': 7512,
        'attack-rating': 8052,
        'heal-rating': 4310,
        'power-rating': 3730,
        'ilvl': 357
    };
    var expectedOffensiveDefensiveStats = {
        'critical-rating': '841',
        'critical-chance': '13.8',
        'critical-power': '1008',
        'critical-power-percentage': '90.6',
        'hit-rating': 1244,
        'glance-reduction': 24.5,
        'defense-rating': 1896,
        'glance-chance': 18.6,
        'evade-rating': 1896,
        'evade-chance': '13.0',
        //TODO/TEST 'physical-protection': 660,
        //TODO/TEST 'magical-protection': 300
    };

    var allSums = swlcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
    deepEqual(allSums.offensive_defensive, expectedOffensiveDefensiveStats);
});

test('should update all stats', 15, function() {
    createTankBuild();

    swlcalc.summary.updateAllStats();

    equal($('#stat-power-rating').html(), '3730');
    equal($('#stat-weapon-power').html(), '1832');
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    equal($('#stat-hitpoints').html(), '7512');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-critical-rating').html(), '+841');
    equal($('#stat-critical-chance').html(), '13.8%');
    equal($('#stat-critical-power').html(), '+1008');
    equal($('#stat-critical-power-percentage').html(), '90.6%');
    equal($('#stat-hit-rating').html(), '+1244');
    equal($('#stat-defense-rating').html(), '+1896');
    equal($('#stat-evade-rating').html(), '+1896');
    equal($('#stat-evade-chance').html(), '13.0%');
    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');
});

module('summary-integration-tests with buttonbar', {
    setup: function() {
        renderSummary();
        renderSlots();
        renderButtonbar();
        initiateSummary();
        initiateButtonBar();
        initiateSelectHandlers();
        initiateButtonHandlers();
    },
    teardown: function() {

    }
});

test('should set combat power + healing power and affect any talisman and weapon bonuses correctly', 9, function() {
    createTankBuild();
    $('#waist-itemId').val('12');
    $('#waist-itemId').change();
    equal(swlcalc.slots.waist.description(), 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional 834 physical damage or your next healing Fist Weapon ability will restore an additional 519 health.');
    $('#weapon2-itemId').val('53');
    $('#weapon2-itemId').change();
    equal(swlcalc.slots.weapon2.description(), 'This weapon gains more Weapon Power when leveling up.Whenever you hit, you have a 33% chance to hex your target and deal an additional 111-556 magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.When an enemy affected by this hex is defeated, nearby enemies are dealt 70-349 magical damage, based on the number of times the damaging effect has been applied.');
    
    $('#stat-combat-power').html('1000');
    swlcalc.summary.updateDescriptions();
    equal(swlcalc.slots.waist.description(), 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional 1125 physical damage or your next healing Fist Weapon ability will restore an additional 519 health.');
    equal(swlcalc.slots.weapon2.description(), 'This weapon gains more Weapon Power when leveling up.Whenever you hit, you have a 33% chance to hex your target and deal an additional 150-750 magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.When an enemy affected by this hex is defeated, nearby enemies are dealt 95-471 magical damage, based on the number of times the damaging effect has been applied.');

    $('#stat-healing-power').html('1000');
    swlcalc.summary.updateDescriptions();
    equal(swlcalc.slots.waist.description(), 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional 1125 physical damage or your next healing Fist Weapon ability will restore an additional 1125 health.');

    swlcalc.summary.updateAllStats();
    equal(swlcalc.slots.waist.description(), 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional 834 physical damage or your next healing Fist Weapon ability will restore an additional 519 health.');
    equal(swlcalc.slots.weapon2.description(), 'This weapon gains more Weapon Power when leveling up.Whenever you hit, you have a 33% chance to hex your target and deal an additional 111-556 magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.When an enemy affected by this hex is defeated, nearby enemies are dealt 70-349 magical damage, based on the number of times the damaging effect has been applied.');

    $('#btn-all-heal').click();
    equal(swlcalc.slots.waist.description(), 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional 520 physical damage or your next healing Fist Weapon ability will restore an additional 833 health.');
    equal(swlcalc.slots.weapon2.description(), 'This weapon gains more Weapon Power when leveling up.Whenever you hit, you have a 33% chance to hex your target and deal an additional 69-347 magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.When an enemy affected by this hex is defeated, nearby enemies are dealt 44-218 magical damage, based on the number of times the damaging effect has been applied.');
});
