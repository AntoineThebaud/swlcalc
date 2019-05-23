
QUnit.module("summary-dom", {
    beforeEach: function(assert) {
        renderSummary();
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
    assert.ok($("#stat-hitpoints").length !== 0, "stat-hitpoints exists");
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
    assert.ok($("#stat-physical-protection").length !== 0, "stat-physical-protection exists");
    assert.ok($("#stat-magical-protection").length !== 0, "stat-magical-protection exists");
});

QUnit.module("summary-unit-tests", {
    beforeEach: function(assert) {
        initiateSummary();
    }
});

QUnit.test("should calculate critical chance", function(assert) {
    assert.equal(swlcalc.summary.calculateCriticalChance(0), 7.5);
    assert.equal(swlcalc.summary.calculateCriticalChance(4000), 32.9);
    assert.equal(swlcalc.summary.calculateCriticalChance(8000), 51.1);
});

QUnit.test("should calculate critical power", function(assert) {
    assert.equal(swlcalc.summary.calculateCriticalPowerPercentage(0), 30);
    assert.equal(swlcalc.summary.calculateCriticalPowerPercentage(2500), 118.3);
    assert.equal(swlcalc.summary.calculateCriticalPowerPercentage(5000), 157.9);
});

QUnit.test("should calculate combat power", function(assert) {
    assert.equal(swlcalc.summary.calculateCombatPower(0, 0), 0);
    assert.equal(swlcalc.summary.calculateCombatPower(2500, 0), 188);
    assert.equal(swlcalc.summary.calculateCombatPower(0, 2500), 188);
    assert.equal(swlcalc.summary.calculateCombatPower(3049, 398), 259);
});

QUnit.test("should calculate evade chance", function(assert) {
    assert.equal(swlcalc.summary.calculateEvadeChance(0), 0);
    assert.equal(swlcalc.summary.calculateEvadeChance(4000), 27.5);
    assert.equal(swlcalc.summary.calculateEvadeChance(5000), 29.8);
});

QUnit.module("summary-integration-tests", {
    beforeEach: function(assert) {
        renderSummary();
        renderSlots();
        initiateSummary();
        initiateSelectHandlers();
    },
    afterEach: function(assert) {

    }
});

QUnit.test("should collect primary stats at initial state", function(assert) {
    var sums = swlcalc.summary.collectPrimaryStats();

    assert.equal(sums[ "combat-power" ], 324);
    assert.equal(sums[ "healing-power" ], 323);
    assert.equal(sums[ "weapon-power" ], 0);
    assert.equal(sums[ "attack-rating" ], 4322);
    assert.equal(sums[ "heal-rating" ], 4310);
    assert.equal(sums[ "hitpoints" ], 7512);
    assert.equal(sums[ "power-rating" ], 0);
    assert.equal(sums[ "ilvl" ], 0);
});

QUnit.test("should collect primary stats for tank build", function(assert) {
    createTankBuild();

    var sums = swlcalc.summary.collectPrimaryStats();

    assert.equal(sums[ "ilvl" ], 377);
    assert.equal(sums[ "power-rating" ], 3730);
    assert.equal(sums[ "weapon-power" ], 1832);
    assert.equal(sums[ "attack-rating" ], 8052);
    assert.equal(sums[ "heal-rating" ], 4310);
    assert.equal(sums[ "hitpoints" ], 7512);
    assert.equal(sums[ "combat-power" ], 741);
    assert.equal(sums[ "healing-power" ], 461);
});

QUnit.test("should collect offensive and defensive stats for initial state", function(assert) {
    var sums = swlcalc.summary.collectSecondaryStats();

    assert.equal(sums[ "critical-rating" ], 756);
    assert.equal(sums[ "critical-chance" ], 13.3);
    assert.equal(sums[ "critical-power" ], 1008);
    assert.equal(sums[ "critical-power-percentage" ], 90.6);
    assert.equal(sums[ "hit-rating" ], 756);
    assert.equal(sums[ "glance-reduction" ], 14.9);
    assert.equal(sums[ "defense-rating" ], 753);
    assert.equal(sums[ "glance-chance" ], 7.4);
    assert.equal(sums[ "evade-rating" ], 753);
    assert.equal(sums[ "evade-chance" ], 5.2);

    //TODO/TEST equal(sums['physical-protection'], 300);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

QUnit.test("should collect offensive and defensive stats for tank build", function(assert) {
    createTankBuild();

    var sums = swlcalc.summary.collectSecondaryStats();

    assert.equal(sums[ "critical-rating" ], 841);
    assert.equal(sums[ "critical-chance" ], 13.8);
    assert.equal(sums[ "critical-power" ], 1008);
    assert.equal(sums[ "critical-power-percentage" ], 90.6);
    assert.equal(sums[ "hit-rating" ], 1244);
    assert.equal(sums[ "glance-reduction" ], 24.5);

    assert.equal(sums[ "defense-rating" ], 1896);
    assert.equal(sums[ "glance-chance" ], 18.6);
    assert.equal(sums[ "evade-rating" ], 1896);
    assert.equal(sums[ "evade-chance" ], 13.0);

    //TODO/TEST equal(sums['physical-protection'], 660);
    //TODO/TEST equal(sums['magical-protection'], 300);
});

QUnit.test("should collect all stats and return two objects", function(assert) {
    createTankBuild();
    var expectedPrimaryStats = {
        "combat-power": 741,
        "healing-power": 461,
        "weapon-power": 1832,
        "hitpoints": 7512,
        "attack-rating": 8052,
        "heal-rating": 4310,
        "power-rating": 3730,
        "ilvl": 377
    };
    var expectedSecondaryStats = {
        "critical-rating": "841",
        "critical-chance": "13.8",
        "critical-power": "1008",
        "critical-power-percentage": "90.6",
        "hit-rating": 1244,
        "glance-reduction": 24.5,
        "defense-rating": 1896,
        "glance-chance": 18.6,
        "evade-rating": 1896,
        "evade-chance": "13.0",

        //TODO/TEST 'physical-protection': 660,
        //TODO/TEST 'magical-protection': 300
    };

    var allSums = swlcalc.summary.collectAllStats();

    assert.deepEqual(allSums.primary, expectedPrimaryStats);
    assert.deepEqual(allSums.secondary, expectedSecondaryStats);
});

QUnit.test("should update all stats", function(assert) {
    createTankBuild();

    swlcalc.summary.updateAllStats();

    assert.equal($("#stat-power-rating").html(), "3730");
    assert.equal($("#stat-weapon-power").html(), "1832");
    assert.equal($("#stat-combat-power").html(), "741");
    assert.equal($("#stat-healing-power").html(), "461");
    assert.equal($("#stat-hitpoints").html(), "7512");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-critical-rating").html(), "+841");
    assert.equal($("#stat-critical-chance").html(), "13.8%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.6%");
    assert.equal($("#stat-hit-rating").html(), "+1244");
    assert.equal($("#stat-defense-rating").html(), "+1896");
    assert.equal($("#stat-evade-rating").html(), "+1896");
    assert.equal($("#stat-evade-chance").html(), "13.0%");

    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');
});

QUnit.module("summary-integration-tests with buttonbar", {
    beforeEach: function(assert) {
        renderSummary();
        renderSlots();
        renderButtonbar();
        initiateSummary();
        initiateButtonBar();
        initiateSelectHandlers();
    },
    afterEach: function(assert) {

    }
});

QUnit.test("should set combat power + healing power and affect any talisman and weapon bonuses correctly", function(assert) {
    createTankBuild();
    $("#waist-equipment-id").val("12");
    $("#waist-equipment-id").change();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-equipment-bonus1\" class=\"bonus-val attack\">834</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-equipment-bonus2\" class=\"bonus-val heal\">519</span> health.");
    $("#weapon2-equipment-id").val("53");
    $("#weapon2-equipment-id").change();
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "This weapon gains more Weapon Power when leveling up.<br>Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-equipment-bonus1\" class=\"bonus-val attack\">111</span>-<span id=\"weapon2-equipment-bonus2\" class=\"bonus-val attack\">556</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-equipment-bonus3\" class=\"bonus-val attack\">70</span>-<span id=\"weapon2-equipment-bonus4\" class=\"bonus-val attack\">349</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-combat-power").html("1000");
    swlcalc.summary.updateDescriptions();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-equipment-bonus1\" class=\"bonus-val attack\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-equipment-bonus2\" class=\"bonus-val heal\">519</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "This weapon gains more Weapon Power when leveling up.<br>Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-equipment-bonus1\" class=\"bonus-val attack\">150</span>-<span id=\"weapon2-equipment-bonus2\" class=\"bonus-val attack\">750</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-equipment-bonus3\" class=\"bonus-val attack\">95</span>-<span id=\"weapon2-equipment-bonus4\" class=\"bonus-val attack\">471</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-healing-power").html("1000");
    swlcalc.summary.updateDescriptions();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-equipment-bonus1\" class=\"bonus-val attack\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-equipment-bonus2\" class=\"bonus-val heal\">1125</span> health.");

    swlcalc.summary.updateAllStats();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-equipment-bonus1\" class=\"bonus-val attack\">834</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-equipment-bonus2\" class=\"bonus-val heal\">519</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "This weapon gains more Weapon Power when leveling up.<br>Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-equipment-bonus1\" class=\"bonus-val attack\">111</span>-<span id=\"weapon2-equipment-bonus2\" class=\"bonus-val attack\">556</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-equipment-bonus3\" class=\"bonus-val attack\">70</span>-<span id=\"weapon2-equipment-bonus4\" class=\"bonus-val attack\">349</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#select-anima-allocation").val("heal");
    $("#select-anima-allocation").change();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-equipment-bonus1\" class=\"bonus-val attack\">520</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-equipment-bonus2\" class=\"bonus-val heal\">833</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "This weapon gains more Weapon Power when leveling up.<br>Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-equipment-bonus1\" class=\"bonus-val attack\">69</span>-<span id=\"weapon2-equipment-bonus2\" class=\"bonus-val attack\">347</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-equipment-bonus3\" class=\"bonus-val attack\">44</span>-<span id=\"weapon2-equipment-bonus4\" class=\"bonus-val attack\">218</span> magical damage, based on the number of times the damaging effect has been applied.");
});
