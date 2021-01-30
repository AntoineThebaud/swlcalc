
QUnit.module("summary-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        initiateSummary();
        initiateHandlers();
        renderAnimaAllocation();
        initiateAnimaAllocation();
    }
});

//TODO/TEST : to add a new test to check the accuracy of average ilvl of the gear

QUnit.test("should have required summary in DOM", function(assert) {
    // Check all Primary stats exist
    assert.ok($("#stat-ilvl").length !== 0, "stat-ilvl exists");
    assert.ok($("#stat-power-rating").length !== 0, "stat-power-rating exists");
    assert.ok($("#stat-weapon-power").length !== 0, "stat-weapon-power exists");
    assert.ok($("#stat-combat-power").length !== 0, "stat-combat-power exists");
    assert.ok($("#stat-healing-power").length !== 0, "stat-healing-power exists");
    assert.ok($("#stat-hit-points").length !== 0, "stat-hit-points exists");
    assert.ok($("#stat-attack-rating").length !== 0, "stat-attack-rating exists");
    assert.ok($("#stat-heal-rating").length !== 0, "stat-heal-rating exists");

    // Check all Offensive stats exist
    assert.ok($("#stat-critical-rating").length !== 0, "stat-critical-rating exists");
    assert.ok($("#stat-critical-chance").length !== 0, "stat-critical-chance exists");
    assert.ok($("#stat-critical-power").length !== 0, "stat-critical-power exists");
    assert.ok($("#stat-critical-power-percentage").length !== 0, "stat-critical-power-percentage exists");
    assert.ok($("#stat-hit-rating").length !== 0, "stat-hit-rating exists");
    assert.ok($("#stat-glance-reduction").length !== 0, "stat-glance-reduction");

    // Check all Defensive stats exist
    assert.ok($("#stat-defense-rating").length !== 0, "stat-defense-rating exists");
    assert.ok($("#stat-glance-chance").length !== 0, "stat-glance-chance exists");
    assert.ok($("#stat-evade-rating").length !== 0, "stat-evade-rating exists");
    assert.ok($("#stat-evade-chance").length !== 0, "stat-evade-chance exists");
    assert.ok($("#stat-protection").length !== 0, "stat-protection exists");

    // Check all Other bonuses exist
    assert.ok($("#stat-agent1-bonus25").length !== 0, "stat-agent1-bonus25 exists");
    assert.ok($("#stat-agent1-bonus50").length !== 0, "stat-agent1-bonus50 exists");
    assert.ok($("#stat-agent2-bonus25").length !== 0, "stat-agent2-bonus25 exists");
    assert.ok($("#stat-agent2-bonus50").length !== 0, "stat-agent2-bonus50 exists");
    assert.ok($("#stat-agent3-bonus25").length !== 0, "stat-agent3-bonus25 exists");
    assert.ok($("#stat-agent3-bonus50").length !== 0, "stat-agent3-bonus50 exists");
});

QUnit.test("should update all stats", function(assert) {
    createTankBuild();

    swlcalc.summary.updateAllStats();

    assert.equal($("#stat-power-rating").html(), "3730");
    assert.equal($("#stat-weapon-power").html(), "1832");
    assert.equal($("#stat-combat-power").html(), "646.2");
    assert.equal($("#stat-healing-power").html(), "155.7");
    assert.equal($("#stat-hit-points").html(), "13903");
    assert.equal($("#stat-attack-rating").html(), "6784");
    assert.equal($("#stat-heal-rating").html(), "5951");
    assert.equal($("#stat-critical-rating").html(), "+841");
    assert.equal($("#stat-critical-chance").html(), "13.8%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.7%");
    assert.equal($("#stat-hit-rating").html(), "+1244");
    assert.equal($("#stat-defense-rating").html(), "+1896");
    assert.equal($("#stat-evade-rating").html(), "+1896");
    assert.equal($("#stat-evade-chance").html(), "13.0%");
    assert.equal($("#stat-agent1-bonus25").html(), "");
    assert.equal($("#stat-agent1-bonus25").html(), "");
    assert.equal($("#stat-agent2-bonus25").html(), "");
    assert.equal($("#stat-agent2-bonus50").html(), "<span class=\"bonus-val const\">+7%</span> Hammer Damage");
    assert.equal($("#stat-agent3-bonus25").html(), "");
    assert.equal($("#stat-agent3-bonus50").html(), "");

    //TODO/TEST equal($('#stat-protection').html(), '+660');
});

// TODO/TEST no test for updateURL() (private function)

QUnit.test("should collect all stats and return two objects", function(assert) {
    createTankBuild();

    var expectedPrimaryStats = {
        "combat-power": 646.2,
        "healing-power": 155.7,
        "weapon-power": 1832,
        "hit-points": 13903,
        "attack-rating": 6784,
        "heal-rating": 5951,
        "power-rating": 3730,
        "ilvl": 327,
        "protection": 2259,
        "damage-mitigation": 8.4
    };
    var expectedSecondaryStats = {
        "critical-rating": "841",
        "critical-chance": "13.8",
        "critical-power": "1008",
        "critical-power-percentage": "90.7",
        "hit-rating": 1244,
        "glance-reduction": 24.5,
        "defense-rating": 1896,
        "glance-chance": 18.7,
        "evade-rating": 1896,
        "evade-chance": "13.0",
    };

    var allSums = swlcalc.summary.collectAllStats();

    assert.deepEqual(allSums.primary, expectedPrimaryStats);
    assert.deepEqual(allSums.secondary, expectedSecondaryStats);
});

// TODO/TEST no test for updatePrimaryStats() (private function)

QUnit.test("should collect primary stats accordingly", function(assert) {
    var sums = swlcalc.summary.collectPrimaryStats();

    // base values :
    assert.equal(sums[ "combat-power" ], 324.2);
    assert.equal(sums[ "healing-power" ], 86.2);
    assert.equal(sums[ "weapon-power" ], 0);
    assert.equal(sums[ "attack-rating" ], 4322);
    assert.equal(sums[ "heal-rating" ], 4310);
    assert.equal(sums[ "hit-points" ], 8727);
    assert.equal(sums[ "power-rating" ], 0);
    assert.equal(sums[ "ilvl" ], 0);

    createTankBuild();

    var sums = swlcalc.summary.collectPrimaryStats();

    assert.equal(sums[ "ilvl" ], 327);
    assert.equal(sums[ "power-rating" ], 3730);
    assert.equal(sums[ "weapon-power" ], 1832);
    assert.equal(sums[ "attack-rating" ], 6784);
    assert.equal(sums[ "heal-rating" ], 5951);
    assert.equal(sums[ "hit-points" ], 13903);
    assert.equal(sums[ "combat-power" ], 646.2);
    assert.equal(sums[ "healing-power" ], 155.7);
});

QUnit.test("should compute primary power", function(assert) {
    assert.equal(swlcalc.summary.computePrimaryPower('ar', 0, 0), 0);
    assert.equal(swlcalc.summary.computePrimaryPower('ar', 2500, 0), 187.5);
    assert.equal(swlcalc.summary.computePrimaryPower('ar', 0, 2500), 187.5);
    assert.equal(swlcalc.summary.computePrimaryPower('ar', 3049, 398), 258.5);

    assert.equal(swlcalc.summary.computePrimaryPower('hr', 0, 0), 0);
    assert.equal(swlcalc.summary.computePrimaryPower('hr', 2500, 0), 50);
    assert.equal(swlcalc.summary.computePrimaryPower('hr', 0, 2500), 50);
    assert.equal(swlcalc.summary.computePrimaryPower('hr', 3049, 398), 68.9);
});

// TODO/TEST no test for updateSecondaryStats() (private function)

QUnit.test("should collect secondary stats accordingly", function(assert) {
    var sums = swlcalc.summary.collectSecondaryStats();

    assert.equal(sums[ "critical-rating" ], 756);
    assert.equal(sums[ "critical-chance" ], 13.3);
    assert.equal(sums[ "critical-power" ], 1008);
    assert.equal(sums[ "critical-power-percentage" ], 90.7);
    assert.equal(sums[ "hit-rating" ], 756);
    assert.equal(sums[ "glance-reduction" ], 14.9);
    assert.equal(sums[ "defense-rating" ], 753);
    assert.equal(sums[ "glance-chance" ], 7.4);
    assert.equal(sums[ "evade-rating" ], 753);
    assert.equal(sums[ "evade-chance" ], 5.2);

    createTankBuild();

    var sums = swlcalc.summary.collectSecondaryStats();

    assert.equal(sums[ "critical-rating" ], 841);
    assert.equal(sums[ "critical-chance" ], 13.8);
    assert.equal(sums[ "critical-power" ], 1008);
    assert.equal(sums[ "critical-power-percentage" ], 90.7);
    assert.equal(sums[ "hit-rating" ], 1244);
    assert.equal(sums[ "glance-reduction" ], 24.5);

    assert.equal(sums[ "defense-rating" ], 1896);
    assert.equal(sums[ "glance-chance" ], 18.7);
    assert.equal(sums[ "evade-rating" ], 1896);
    assert.equal(sums[ "evade-chance" ], 13.0);

    //TODO/TEST equal(sums['physical-protection'], 660);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

QUnit.test("should compute secondary stats", function(assert) {
    assert.equal(swlcalc.summary.computeSecondaryStat('crit', 0), 8.5);
    assert.equal(swlcalc.summary.computeSecondaryStat('crit', 4000), 33.9);
    assert.equal(swlcalc.summary.computeSecondaryStat('crit', 8000), 54.4);

    assert.equal(swlcalc.summary.computeSecondaryStat('cpow', 0), 55);
    assert.equal(swlcalc.summary.computeSecondaryStat('cpow', 2500), 143.5);
    assert.equal(swlcalc.summary.computeSecondaryStat('cpow', 5000), 202.6);

    assert.equal(swlcalc.summary.computeSecondaryStat('evad', 0), 0);
    assert.equal(swlcalc.summary.computeSecondaryStat('evad', 4000), 27.5);
    assert.equal(swlcalc.summary.computeSecondaryStat('evad', 5000), 34.4);

    assert.equal(swlcalc.summary.computeSecondaryStat('def', 0), 0);
    assert.equal(swlcalc.summary.computeSecondaryStat('def', 4000), 39.3);
    assert.equal(swlcalc.summary.computeSecondaryStat('def', 5000), 45.5);

    assert.equal(swlcalc.summary.computeSecondaryStat('hit', 0), 0);
    assert.equal(swlcalc.summary.computeSecondaryStat('hit', 2500), 49.2);
    assert.equal(swlcalc.summary.computeSecondaryStat('hit', 5000), 98.3);
});

QUnit.test("should compute average ilvl for whole gear", function(assert) {
    assert.equal(swlcalc.summary.computeAverageILvl(900), 100);
});

// TODO/TEST no test for isStatPercentageBased() (private function)

// TODO/TEST no test for combatPower() (private function)

// TODO/TEST no test for healingPower() (private function)
