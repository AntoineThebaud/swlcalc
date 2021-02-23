
QUnit.module("import-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderPassives();
        renderSummary();
        renderAnimaAllocation();
        initiateHandlers();
        initiateSummary();
        initiateAnimaAllocation();
        initiatePassives();
    }
});

QUnit.test("should import URL and set summary and slots", function(assert) {
    var vars = {
        agent3: "0,25",
        head: "3,1,1,30,4,1,3,1,2,20,15",
        luck: "3,1,1,1,3,4,2,20,3,8,6",
        neck: "3,1,1,30,3,5,2,20,2,10,3",
        occult: "3,1,1,1,3,4,2,20,3,4,18",
        agent1: "2,25",
        finger: "3,1,1,30,3,5,2,20,1,10,9",
        waist: "3,1,1,30,3,4,2,20,2,3,11",
        weapon: "3,1,1,30,2,2,1,1,0,6,0",
        weapon2: "3,2,3,30,2,2,1,1,0,2,0",
        wrist: "3,1,1,1,3,5,2,20,1,1,14",
        agent2: "42,50"
    };

    swlcalc.import.start(vars);

    // Check totals only :

    assert.equal($("#stat-ilvl").html(), "334");
    assert.equal($("#stat-power-rating").html(), "3730");
    assert.equal($("#stat-weapon-power").html(), "1832");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hit-points").html(), "9217");
    assert.equal($("#stat-combat-power").html(), "741.3");
    assert.equal($("#stat-healing-power").html(), "122.8");

    assert.equal($("#stat-critical-rating").html(), "+841");
    assert.equal($("#stat-critical-chance").html(), "13.8%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.7%");
    assert.equal($("#stat-hit-rating").html(), "+1244");
    assert.equal($("#stat-glance-reduction").html(), "24.5%");

    assert.equal($("#stat-protection").html(), "4112");
    assert.equal($("#stat-damage-mitigation").html(), "14.4%");
    assert.equal($("#stat-defense-rating").html(), "+1896");
    assert.equal($("#stat-glance-chance").html(), "18.7%");
    assert.equal($("#stat-evade-rating").html(), "+1896");
    assert.equal($("#stat-evade-chance").html(), "13%");
});
