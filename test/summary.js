
QUnit.module("summary-dom-tests", {
    beforeEach: function(assert) {
        renderSummary();
    }
});

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

QUnit.module("summary-unit-tests", {
    beforeEach: function(assert) {
        includeSummary();
    }
});

QUnit.test("should compute primary stat", function(assert) {
    assert.equal(swlcalc.summary.computePrimaryPower("cp", 5000, 5000), 750);
    assert.equal(swlcalc.summary.computePrimaryPower("hp", 5000, 5000), 200);
});

QUnit.test("should compute damage mitigation", function(assert) {
    assert.equal(swlcalc.summary.computeDamageMitigation(1000), 3.9);
    assert.equal(swlcalc.summary.computeDamageMitigation(10000), 29);
    assert.equal(swlcalc.summary.computeDamageMitigation(100000), 80.3);
});

QUnit.test("should compute secondary stat", function(assert) {
    assert.equal(swlcalc.summary.computeSecondaryStat("critical-rating", 1000), 6.4);
    assert.equal(swlcalc.summary.computeSecondaryStat("critical-rating", 10000), 48.8);
    assert.equal(swlcalc.summary.computeSecondaryStat("critical-rating", 100000), 178.5);
});

QUnit.test("should get combat power", function(assert) {
    assert.equal(swlcalc.summary.combatPower(), 0);
});

QUnit.test("should get healing power", function(assert) {
    assert.equal(swlcalc.summary.healingPower(), 0);
});

QUnit.module("summary-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
});

QUnit.test("should compute the average ilvl", function(assert) {
    assert.equal(swlcalc.summary.computeAverageILvl(9000), 1000);
});

QUnit.test("should retrieve amount from affix", function(assert) {
    assert.equal(swlcalc.summary.retrieveAmountFromAffix("Havoc"), 0);
    assert.equal(swlcalc.summary.retrieveAmountFromAffix("Warding"), 0);

    swlcalc.gear.slots.weapon2.draw();
    swlcalc.gear.slots.weapon.sheath();

    assert.equal(swlcalc.summary.retrieveAmountFromAffix("Havoc"), 0);
    assert.equal(swlcalc.summary.retrieveAmountFromAffix("Warding"), 1050);
});

// NB : the various update functions are already covered via slots, agents & passives tests
