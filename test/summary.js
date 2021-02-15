
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
    // Check all Main stats exist
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
    assert.ok($("#stat-protection").length !== 0, "stat-protection exists");
    assert.ok($("#stat-damage-mitigation").length !== 0, "stat-damage-mitigation exists");
    assert.ok($("#stat-defense-rating").length !== 0, "stat-defense-rating exists");
    assert.ok($("#stat-glance-chance").length !== 0, "stat-glance-chance exists");
    assert.ok($("#stat-evade-rating").length !== 0, "stat-evade-rating exists");
    assert.ok($("#stat-evade-chance").length !== 0, "stat-evade-chance exists");

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
    assert.equal($("#stat-hit-points").html(), "13905");
    assert.equal($("#stat-attack-rating").html(), "6784");
    assert.equal($("#stat-heal-rating").html(), "5952");

    assert.equal($("#stat-critical-rating").html(), "+841");
    assert.equal($("#stat-critical-chance").html(), "13.8%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.7%");
    assert.equal($("#stat-hit-rating").html(), "+1244");

    assert.equal($("#stat-protection").html(), "4895");
    assert.equal($("#stat-damage-mitigation").html(), "16.6%");
    assert.equal($("#stat-defense-rating").html(), "+1896");
    assert.equal($("#stat-glance-chance").html(), "18.7%");
    assert.equal($("#stat-evade-rating").html(), "+1896");
    assert.equal($("#stat-evade-chance").html(), "13%");

    assert.equal($("#stat-agent1-bonus25").html(), "");
    assert.equal($("#stat-agent1-bonus25").html(), "");
    assert.equal($("#stat-agent2-bonus25").html(), "");
    assert.equal($("#stat-agent2-bonus50").html(), "<span class=\"bonus-val const\">+7%</span> Hammer Damage");
    assert.equal($("#stat-agent3-bonus25").html(), "");
    assert.equal($("#stat-agent3-bonus50").html(), "");
});

// TODO/TEST no test for updateURL() (private function)

QUnit.test("should collect all stats and return two objects", function(assert) {
    createTankBuild();

    var expectedPrimaryStats = {
        "attack-rating": 6784,
        "damage-mitigation": 16.6,
        "combat-power": 646.2,
        "heal-rating": 5952,
        "healing-power": 155.7,
        "hit-points": 13905,
        "ilvl": 327,
        "power-rating": 3730,
        "protection": 4895,
        "weapon-power": 1832,
    };
    var expectedSecondaryStats = {
        "critical-chance": 13.8,
        "critical-power": 1008,
        "critical-power-percentage": 90.7,
        "critical-rating": 841,
        "defense-rating": 1896,
        "evade-chance": 13.0,
        "evade-rating": 1896,
        "glance-chance": 18.7,
        "glance-reduction": 24.5,
        "hit-rating": 1244,
    };

    var allSums = swlcalc.summary.collectAllStats();

    assert.deepEqual(allSums.primary, expectedPrimaryStats);
    assert.deepEqual(allSums.secondary, expectedSecondaryStats);
});

// TODO/TEST no test for updatePrimaryStats() (private function)

QUnit.test("should collect primary stats accordingly", function(assert) {
    var totals = swlcalc.summary.collectPrimaryStats();

    // base values :
    assert.equal(totals["ilvl"], 0);
    assert.equal(totals["power-rating"], 0);
    assert.equal(totals["weapon-power"], 0);
    assert.equal(totals["attack-rating"], 4322);
    assert.equal(totals["heal-rating"], 4310);
    assert.equal(totals["hit-points"], 8727);
    assert.equal(totals["combat-power"], 324.2);
    assert.equal(totals["healing-power"], 86.2);
    assert.equal(totals["protection"], 2259);
    assert.equal(totals["damage-mitigation"], 8.4);

    createTankBuild();

    var totals = swlcalc.summary.collectPrimaryStats();

    assert.equal(totals["ilvl"], 327);
    assert.equal(totals["power-rating"], 3730);
    assert.equal(totals["weapon-power"], 1832);
    assert.equal(totals["attack-rating"], 6784);
    assert.equal(totals["heal-rating"], 5952);
    assert.equal(totals["hit-points"], 13905);
    assert.equal(totals["combat-power"], 646.2);
    assert.equal(totals["healing-power"], 155.7);
    assert.equal(totals["protection"], 4895);
    assert.equal(totals["damage-mitigation"], 16.6);
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

QUnit.test("should compute damage mitigation", function(assert) {
    assert.equal(swlcalc.summary.computeDamageMitigation(0), 0);
    assert.equal(swlcalc.summary.computeDamageMitigation(50000), 67.1);
});

// TODO/TEST no test for updateSecondaryStats() (private function)

QUnit.test("should collect secondary stats accordingly", function(assert) {
    var totals = swlcalc.summary.collectSecondaryStats();

    assert.equal(totals["critical-rating"], 756);
    assert.equal(totals["critical-chance"], 13.3);
    assert.equal(totals["critical-power"], 1008);
    assert.equal(totals["critical-power-percentage"], 90.7);
    assert.equal(totals["hit-rating"], 756);
    assert.equal(totals["glance-reduction"], 14.9);
    assert.equal(totals["defense-rating"], 753);
    assert.equal(totals["glance-chance"], 7.4);
    assert.equal(totals["evade-rating"], 753);
    assert.equal(totals["evade-chance"], 5.2);

    createTankBuild();

    var totals = swlcalc.summary.collectSecondaryStats();

    assert.equal(totals["critical-rating"], 841);
    assert.equal(totals["critical-chance"], 13.8);
    assert.equal(totals["critical-power"], 1008);
    assert.equal(totals["critical-power-percentage"], 90.7);
    assert.equal(totals["hit-rating"], 1244);
    assert.equal(totals["glance-reduction"], 24.5);

    assert.equal(totals["defense-rating"], 1896);
    assert.equal(totals["glance-chance"], 18.7);
    assert.equal(totals["evade-rating"], 1896);
    assert.equal(totals["evade-chance"], 13.0);
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

// TODO/TEST add test for isStatPercentageBased() (private function)

// TODO/TEST add test for combatPower() (private function)

// TODO/TEST add test for healingPower() (private function)

// TODO/TEST add test for computePrimaryStatInitialAmount() (private function)

// TODO/TEST add test for updateOtherBonuses
