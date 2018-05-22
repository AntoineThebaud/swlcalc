
module('summary-dom', {
    setup: function() {
        renderSummary();
    }
});

//TODO/TEST : to add a new test to check the accuracy of average ilvl of the gear

test('should have required summary in DOM', 18, function() {
    // check all Primary stats exist
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

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should calculate critical chance', 2, function() {
//     equal(swlcalc.summary.calculateCriticalChance(0), 4.990000000000002);
//     equal(swlcalc.summary.calculateCriticalChance(309), 14.671074609766634);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should calculate critical power', 2, function() {
//     equal(swlcalc.summary.calculateCriticalPowerPercentage(0), 25);
//     equal(swlcalc.summary.calculateCriticalPowerPercentage(238), 42.60281680828159);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should calculate combat power', 2, function() {
//     equal(swlcalc.summary.calculateCombatPower(0, 0), 75);
//     equal(swlcalc.summary.calculateCombatPower(3049, 398), 647);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should calculate evade chance', 2, function() {
//     equal(swlcalc.summary.calculateEvadeChance(0), 5.030000000000001);
//     equal(swlcalc.summary.calculateEvadeChance(2174), 27.90736684449651);
// });

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

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should collect primary stats at initial state', 5, function() {
//     var sums = swlcalc.summary.collectPrimaryStats();

//     equal(sums['combat-power'], 647);
//     equal(sums['weapon-power'], 398);
//     equal(sums['hitpoints'], 2070);
//     equal(sums['attack-rating'], 3049);
//     equal(sums['heal-rating'], 0);
// });

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should collect primary stats for tank build', 5, function() {
//     createTankBuild();

//     var sums = swlcalc.summary.collectPrimaryStats();

//     equal(sums['combat-power'], 504);
//     equal(sums['weapon-power'], 457);
//     equal(sums['hitpoints'], 10788);
//     equal(sums['attack-rating'], 1565);
//     equal(sums['heal-rating'], 0);
// });

test('should collect offensive and defensive stats for initial state', 5, function() {
    var sums = swlcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 756 );
    //TODO/TEST equal(sums['critical-chance'], 5.0);
    equal(sums['critical-power'], 1008);
    //TODO/TEST equal(sums['critical-power-percentage'], 25);
    equal(sums['hit-rating'], 756);
    equal(sums['defense-rating'], 753);
    equal(sums['evade-rating'], 753);
    //TODO/TEST equal(sums['evade-chance'], 5.0);
    //TODO/TEST equal(sums['physical-protection'], 300);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

test('should collect offensive and defensive stats for tank build', 5, function() {
    createTankBuild();

    var sums = swlcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 841);
    //TODO/TEST equal(sums['critical-chance'], 5.0);
    equal(sums['critical-power'], 1008);
    //TODO/TEST equal(sums['critical-power-percentage'], 25);
    equal(sums['hit-rating'], 1244);
    equal(sums['defense-rating'], 1896);
    equal(sums['evade-rating'], 1896);
    //TODO/TEST equal(sums['evade-chance'], 5.0);
    //TODO/TEST equal(sums['physical-protection'], 660);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

//TODO/TEST tswcalc test. swlcalc equivalent needed
// test('should collect all stats and return two objects', 2, function() {
//     createTankBuild();
//     var expectedPrimaryStats = {
//         'combat-power': 504,
//         'weapon-power': 457,
//         'hitpoints': 10788,
//         'attack-rating': 1565,
//         'heal-rating': 0
//     };
//     var expectedOffensiveDefensiveStats = {
//         'none': NaN,
//         'critical-rating': 0,
//         'critical-chance': '5.0',
//         'critical-power': 0,
//         'critical-power-percentage': '25.00',
//         'penetration-rating': 0,
//         'hit-rating': 504,
//         'block-rating': 691,
//         'defense-rating': 576,
//         'evade-rating': 0,
//         'evade-chance': '5.0',
//         'physical-protection': 660,
//         'magical-protection': 300
//     };

//     var allSums = swlcalc.summary.collectAllStats();

//     deepEqual(allSums.primary, expectedPrimaryStats);
//     deepEqual(allSums.offensive_defensive, expectedOffensiveDefensiveStats);
// });

test('should update all stats', 7, function() {
    createTankBuild();

    swlcalc.summary.updateAllStats();

    equal($('#stat-power-rating').html(), '3730');
    equal($('#stat-weapon-power').html(), '1832');
    //TODO/TEST equal($('#stat-combat-power').html(), '504');
    //TODO/TEST equal($('#stat-heal-power').html(), '504');
    //TODO/TEST equal($('#stat-hitpoints').html(), '10788');
    //TODO/TEST equal($('#stat-attack-rating').html(), '1565');
    //TODO/TEST equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '+841');
    //TODO/TEST equal($('#stat-critical-chance').html(), '5.0 %');
    equal($('#stat-critical-power').html(), '+1008');
    //TODO/TEST equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-hit-rating').html(), '+1244');
    equal($('#stat-defense-rating').html(), '+1896');
    equal($('#stat-evade-rating').html(), '+1896');
    //TODO/TEST equal($('#stat-evade-chance').html(), '5.0 %');
    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');
});
