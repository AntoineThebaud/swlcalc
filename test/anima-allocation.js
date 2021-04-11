
QUnit.module("anima-allocation-dom", {
    beforeEach: function(assert) {
        renderAnimaAllocation();
    }
});

QUnit.test("should have required buttonbar buttons in DOM", function(assert) {
    assert.ok($("#anima-allocation-damage-range").length !== 0, "anima-allocation-damage-range exists");
    assert.ok($("#anima-allocation-healing-range").length !== 0, "anima-allocation-healing-range exists");
    assert.ok($("#anima-allocation-survivability-range").length !== 0, "anima-allocation-survivability-range exists");
    assert.ok($("#anima-allocation-damage-val").length !== 0, "anima-allocation-damage-val exists");
    assert.ok($("#anima-allocation-healing-val").length !== 0, "anima-allocation-healing-val exists");
    assert.ok($("#anima-allocation-survivability-val").length !== 0, "anima-allocation-survivability-val exists");
});

QUnit.module("anima-allocation-unit-tests", {
    beforeEach: function(assert) {
        includeAnimaAllocation();
    }
});

QUnit.test("should get anima allocation damage percentage", function(assert) {
    assert.equal(swlcalc.animaAllocation.getDamagePercentage(), "100");
});

QUnit.test("should get anima allocation damage ratio", function(assert) {
    assert.equal(swlcalc.animaAllocation.getDamageRatio(), "1");
});

QUnit.test("should get anima allocation healing percentage", function(assert) {
    assert.equal(swlcalc.animaAllocation.getHealingPercentage(), "0");
});

QUnit.test("should get anima allocation healing ratio", function(assert) {
    assert.equal(swlcalc.animaAllocation.getHealingRatio(), "0");
});

QUnit.test("should get anima allocation survivability percentage", function(assert) {
    assert.equal(swlcalc.animaAllocation.getSurvivabilityPercentage(), "0");
});

QUnit.test("should get anima allocation survivability ratio", function(assert) {
    assert.equal(swlcalc.animaAllocation.getSurvivabilityRatio(), "0");
});

QUnit.module("anima-allocation-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
});

// TODO : cover equipment's transformed values, signet bonuses, agents etc
QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setDamagePercentage("33");

    assert.equal(swlcalc.animaAllocation.getDamagePercentage(), "33");
    assert.equal(swlcalc.animaAllocation.getDamageRatio(), "0.33");
    assert.equal($("#stat-combat-power").html(), "584.6");
    assert.equal($("#stat-attack-rating").html(), "4056");
    assert.equal($("#stat-agent3-bonus50").text(), '126 Damage on Critical Hits');
});

// TODO : cover equipment's transformed values, signet bonuses, agents etc
QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setHealingPercentage("22");

    assert.equal(swlcalc.animaAllocation.getHealingPercentage(), "22");
    assert.equal(swlcalc.animaAllocation.getHealingRatio(), "0.22");
    assert.equal($("#stat-healing-power").html(), "141.2");
    assert.equal($("#stat-heal-rating").html(), "3323");
    assert.equal($("#stat-agent1-bonus50").text(), '30 Healing on Critical Heals');
});

// TODO : cover equipment's transformed values, signet bonuses, agents etc
QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setSurvivabilityPercentage("11");

    assert.equal(swlcalc.animaAllocation.getSurvivabilityPercentage(), "11");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityRatio(), "0.11");
    assert.equal($("#stat-hit-points").html(), "8061");
});
