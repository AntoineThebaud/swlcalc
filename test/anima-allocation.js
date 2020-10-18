
QUnit.module("buttonbar-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        initiateSummary();
        renderAnimaAllocation();
        initiateAnimaAllocation();
        initiateHandlers();
        createTankBuild();
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

QUnit.test("should set & get anima allocation accordingly", function(assert) {
    assert.equal(swlcalc.animaAllocation.getDamagePercentage(), "66");
    assert.equal(swlcalc.animaAllocation.getDamageRatio(), "0.66");
    assert.equal(swlcalc.animaAllocation.getHealingPercentage(), "55");
    assert.equal(swlcalc.animaAllocation.getHealingRatio(), "0.55");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityPercentage(), "44");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityRatio(), "0.44");

    swlcalc.animaAllocation.setDamagePercentage("33");
    swlcalc.animaAllocation.setHealingPercentage("22");
    swlcalc.animaAllocation.setSurvivabilityPercentage("11");

    assert.equal(swlcalc.animaAllocation.getDamagePercentage(), "33");
    assert.equal(swlcalc.animaAllocation.getDamageRatio(), "0.33");
    assert.equal(swlcalc.animaAllocation.getHealingPercentage(), "22");
    assert.equal(swlcalc.animaAllocation.getHealingRatio(), "0.22");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityPercentage(), "11");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityRatio(), "0.11");
});

QUnit.test("should set anima allocation and affect stats correctly", function(assert) {
    assert.equal($("#stat-combat-power").html(), "646.2");
    assert.equal($("#stat-healing-power").html(), "583.7");
    assert.equal($("#stat-attack-rating").html(), "6784");
    assert.equal($("#stat-heal-rating").html(), "5951");
    assert.equal($("#stat-hit-points").html(), "13903");
    swlcalc.animaAllocation.setDamagePercentage("100");
    assert.equal($("#stat-combat-power").html(), "741.3");
    assert.equal($("#stat-healing-power").html(), "583.7");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "5951");
    assert.equal($("#stat-hit-points").html(), "13903");
    swlcalc.animaAllocation.setHealingPercentage("100");
    assert.equal($("#stat-combat-power").html(), "741.3");
    assert.equal($("#stat-healing-power").html(), "684.4");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "7294");
    assert.equal($("#stat-hit-points").html(), "13903");
    swlcalc.animaAllocation.setSurvivabilityPercentage("100");
    assert.equal($("#stat-combat-power").html(), "741.3");
    assert.equal($("#stat-healing-power").html(), "684.4");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "7294");
    assert.equal($("#stat-hit-points").html(), "19866");
});
