
QUnit.module("summary-unit-tests", {
    beforeEach: function(assert) {
        renderGearOLD();
        renderPassives();
        renderSummary();
        renderAnimaAllocation();
        initiateSummary();
        initiateGearHandlers();
        initiateAnimaAllocation();
        initiatePassives();
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

/*QUnit.test("should update all stats", function(assert) {
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
    assert.equal($("#stat-agent2-bonus50").html(), "<span class=\"stat-value const\">+7%</span> Hammer Damage");
    assert.equal($("#stat-agent3-bonus25").html(), "");
    assert.equal($("#stat-agent3-bonus50").html(), "");
});*/


// TODO/TEST add test for updatePrimaryStats

// TODO/TEST add test for updateSecondaryStat

// TODO/TEST add test for combatPower() (private function)

// TODO/TEST add test for healingPower() (private function)

// TODO/TEST add test for updateOtherBonuses
