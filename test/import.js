
QUnit.module("import-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();
    }
});

QUnit.test("should import URL and set summary and slots", function(assert) {
    var vars = {
        agent2: "37,25",
        weapon: "5,119,3,19,2,2,1,20,0,2,0",
        head: "1,3,1,4,2,1,3,11,3,10,15",
        wrist: "1,0,1,20,3,3,4,20,1,0,20",
        luck: "1,0,1,20,1,0,1,20,5,8,20",
        passives: "1400,880,960,388,916,2997,488,477,634,2154,494,753,520,270,1950,7.2,4.2,28.8,16.8",
        weapon2: "4,27,2,28,3,4,4,17,0,8,0",
        waist: "2,13,3,1,2,3,2,1,2,1,1",
        neck: "4,5,3,35,1,0,1,20,1,0,20",
        occult: "5,4,4,70,1,0,1,20,3,2,13",
        agent1: "15,50",
        finger: "5,2,3,69,4,2,1,11,3,1,7",
        agent3: "10,50",
        aa: "38,5,57"
    };

    swlcalc.import.start(vars);

    // (Check totals only :)

    assert.equal($("#stat-ilvl").html(), "562");
    assert.equal($("#stat-power-rating").html(), "5297");
    assert.equal($("#stat-weapon-power").html(), "3738");
    assert.equal($("#stat-attack-rating").html(), "4321");
    assert.equal($("#stat-heal-rating").html(), "2603");
    assert.equal($("#stat-hit-points").html(), "15021");
    assert.equal($("#stat-combat-power").html(), "604.4");
    assert.equal($("#stat-healing-power").html(), "126.8");

    assert.equal($("#stat-critical-rating").html(), "+1145");
    assert.equal($("#stat-critical-chance").html(), "15.5%");
    assert.equal($("#stat-critical-power").html(), "+1172");
    assert.equal($("#stat-critical-power-percentage").html(), "95.3%");
    assert.equal($("#stat-hit-rating").html(), "+806");
    assert.equal($("#stat-glance-reduction").html(), "15.9%");

    assert.equal($("#stat-protection").html(), "4800");
    assert.equal($("#stat-damage-mitigation").html(), "16.4%");
    assert.equal($("#stat-defense-rating").html(), "+494");
    assert.equal($("#stat-glance-chance").html(), "4.9%");
    assert.equal($("#stat-evade-rating").html(), "+753");
    assert.equal($("#stat-evade-chance").html(), "5.2%");
});
