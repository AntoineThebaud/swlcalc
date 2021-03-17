
QUnit.module("passives - dom", {
    beforeEach: function() {
        renderPassives();
    }
});

QUnit.test("should have required passives in DOM", function(assert) {
    assert.ok($("#passive-attack-rating-base-slider").length !== 0, "passive-attack-rating-base-slider exists");
    assert.ok($("#passive-attack-rating-base").length !== 0, "passive-attack-rating-base exists");
    assert.ok($("#passive-attack-rating-passive-skills-slider").length !== 0, "passive-attack-rating-passive-skills-slider exists");
    assert.ok($("#passive-attack-rating-passive-skills").length !== 0, "passive-attack-rating-passive-skills exists");
    assert.ok($("#passive-attack-rating-capstones-slider").length !== 0, "passive-attack-rating-capstones-slider exists");
    assert.ok($("#passive-attack-rating-capstones").length !== 0, "passive-attack-rating-capstones exists");

    assert.ok($("#passive-heal-rating-base-slider").length !== 0, "passive-heal-rating-base-slider exists");
    assert.ok($("#passive-heal-rating-base").length !== 0, "passive-heal-rating-base exists");
    assert.ok($("#passive-heal-rating-passive-skills-slider").length !== 0, "passive-heal-rating-passive-skills-slider exists");
    assert.ok($("#passive-heal-rating-passive-skills").length !== 0, "passive-heal-rating-passive-skills exists");
    assert.ok($("#passive-heal-rating-capstones-slider").length !== 0, "passive-heal-rating-capstones-slider exists");
    assert.ok($("#passive-heal-rating-capstones").length !== 0, "passive-heal-rating-capstones exists");

    assert.ok($("#passive-hit-points-base-slider").length !== 0, "passive-hit-points-base-slider exists");
    assert.ok($("#passive-hit-points-base").length !== 0, "passive-hit-points-base exists");
    assert.ok($("#passive-hit-points-passive-skills-slider").length !== 0, "passive-hit-points-passive-skills-slider exists");
    assert.ok($("#passive-hit-points-passive-skills").length !== 0, "passive-hit-points-passive-skills exists");
    assert.ok($("#passive-hit-points-capstones-slider").length !== 0, "passive-hit-points-capstones-slider exists");
    assert.ok($("#passive-hit-points-capstones").length !== 0, "passive-hit-points-capstones exists");

    assert.ok($("#passive-critical-rating-passive-skills-slider").length !== 0, "passive-critical-rating-passive-skills-slider exists");

    assert.ok($("#passive-critical-chance-expertise-slider-weapon1").length !== 0, "passive-critical-chance-expertise-slider-weapon1 exists");
    assert.ok($("#passive-critical-chance-expertise-slider-weapon2").length !== 0, "passive-critical-chance-expertise-slider-weapon2 exists");

    assert.ok($("#passive-critical-power-passive-skills-slider").length !== 0, "passive-critical-power-passive-skills-slider exists");

    assert.ok($("#passive-critical-power-percentage-expertise-slider-weapon1").length !== 0, "passive-critical-power-percentage-expertise-slider-weapon1 exists");
    assert.ok($("#passive-critical-power-percentage-expertise-slider-weapon2").length !== 0, "passive-critical-power-percentage-expertise-slider-weapon2 exists");

    assert.ok($("#passive-hit-rating-passive-skills-slider").length !== 0, "passive-hit-rating-passive-skills-slider exists");

    assert.ok($("#passive-protection-passive-skills-slider").length !== 0, "passive-protection-passive-skills-slider exists");

    assert.ok($("#passive-defense-rating-passive-skills-slider").length !== 0, "passive-defense-rating-passive-skills-slider exists");

    assert.ok($("#passive-evade-rating-passive-skills-slider").length !== 0, "passive-evade-rating-passive-skills-slider exists");
});

QUnit.module("passives - unit tests", {
    beforeEach: function() {
        renderPassives();
        renderAnimaAllocation();
        renderGear();
        initiateHandlers();
        initiateAnimaAllocation();
        initiatePassives();
    }
});

QUnit.test("should get Base/AR", function(assert) {
    assert.equal(swlcalc.passives.getAttackRatingBase(), "2000");
});

QUnit.test("should get Base/HR", function(assert) {
    assert.equal(swlcalc.passives.getHealRatingBase(), "2000");
});

QUnit.test("should get Base/HP", function(assert) {
    assert.equal(swlcalc.passives.getHitPointsBase(), "3300");
});

QUnit.test("should get Passives Skills/AR", function(assert) {
    assert.equal(swlcalc.passives.getAttackRatingPassiveSkills(), "1512");
});

QUnit.test("should get Passives Skills/HR", function(assert) {
    assert.equal(swlcalc.passives.getHealRatingPassiveSkills(), "1500");
});

QUnit.test("should get Passives Skills/HP", function(assert) {
    assert.equal(swlcalc.passives.getHitPointsPassiveSkills(), "2997");
});

QUnit.test("should get Passives Skills/Critical Rating", function(assert) {
    assert.equal(swlcalc.passives.getCriticalRatingPassiveSkills(), "756");
});

QUnit.test("should get Passives Skills/Critical Power", function(assert) {
    assert.equal(swlcalc.passives.getCriticalPowerPassiveSkills(), "1008");
});

QUnit.test("should get Passives Skills/Hit Rating", function(assert) {
    assert.equal(swlcalc.passives.getHitRatingPassiveSkills(), "756");
});

QUnit.test("should get Passives Skills/Protection", function(assert) {
    assert.equal(swlcalc.passives.getProtectionPassiveSkills(), "2259");
});

QUnit.test("should get Passives Skills/Defense Rating", function(assert) {
    assert.equal(swlcalc.passives.getDefenseRatingPassiveSkills(), "753");
});

QUnit.test("should get Passives Skills/Evade Rating", function(assert) {
    assert.equal(swlcalc.passives.getEvadeRatingPassiveSkills(), "753");
});

QUnit.test("should get Capstones/AR", function(assert) {
    assert.equal(swlcalc.passives.getAttackRatingCapstones(), "810");
});

QUnit.test("should get Capstones/HR", function(assert) {
    assert.equal(swlcalc.passives.getHealRatingCapstones(), "810");
});

QUnit.test("should get Capstones/HP", function(assert) {
    assert.equal(swlcalc.passives.getHitPointsCapstones(), "2430");
});

QUnit.test("should get Expertise/Critical Chance/Weapon1", function(assert) {
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon1(), "7.5");
});

QUnit.test("should get Expertise/Critical Chance/Weapon2", function(assert) {
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon2(), "7.5");
});

QUnit.test("should get Expertise/Critical Power Percentage/Weapon1", function(assert) {
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon1(), "30");
});

QUnit.test("should get Expertise/Critical Power Percentage/Weapon2", function(assert) {
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon2(), "30");
});

QUnit.test("should get Total/AR", function(assert) {
    assert.equal(swlcalc.passives.getTotalAttackRating(), "4322");
});

QUnit.test("should get Total/HR", function(assert) {
    assert.equal(swlcalc.passives.getTotalHealRating(), "4310");
});

QUnit.test("should get Total/HP", function(assert) {
    assert.equal(swlcalc.passives.getTotalHitPoints(), "8727");
});

QUnit.test("should get Total/Critical Rating", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalRating(), "756");
});

QUnit.test("should get Total/Critical Chance", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalChance(), "8.5");
});

QUnit.test("should get Total/Critical Power", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalPower(), "1008");
});

QUnit.test("should get Total/Critical Power Percentage", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalPowerPercentage(), "55");
});

QUnit.test("should get Total/Hit Rating", function(assert) {
    assert.equal(swlcalc.passives.getTotalHitRating(), "756");
});

QUnit.test("should get Total/Glance Reduction", function(assert) {
    assert.equal(swlcalc.passives.getTotalGlanceReduction(), "0");
});

QUnit.test("should get Total/Protection", function(assert) {
    assert.equal(swlcalc.passives.getTotalProtection(), "2259");
});

QUnit.test("should get Total/Damage Mitigation", function(assert) {
    assert.equal(swlcalc.passives.getTotalDamageMitigation(), "0");
});

QUnit.test("should get Total/Defense Rating", function(assert) {
    assert.equal(swlcalc.passives.getTotalDefenseRating(), "753");
});

QUnit.test("should get Total/Glance Chance", function(assert) {
    assert.equal(swlcalc.passives.getTotalGlanceChance(), "0");
});

QUnit.test("should get Total/Evade Rating", function(assert) {
    assert.equal(swlcalc.passives.getTotalEvadeRating(), "753");
});

QUnit.test("should get Total/Evade Chance", function(assert) {
    assert.equal(swlcalc.passives.getTotalEvadeChance(), "0");
});

QUnit.module("passives - integration tests", {
    beforeEach: function() {
        renderGear();
        renderPassives();
        renderAnimaAllocation();
        renderSummary();
        initiateHandlers();
        initiateAnimaAllocation();
        initiatePassives();
        createTankBuild();
    }
});

QUnit.test("should set Base/AR and affect summary accordingly", function(assert) {
    swlcalc.passives.setAttackRatingBase("1000");
    assert.equal(swlcalc.passives.getAttackRatingBase(), "1000");

    assert.equal($("#stat-attack-rating").text(), "5784");
    assert.equal($("#stat-combat-power").text(), "571.2");
});

QUnit.test("should set Base/HR and affect summary accordingly", function(assert) {
    swlcalc.passives.setHealRatingBase("1000");
    assert.equal(swlcalc.passives.getHealRatingBase(), "1000");

    assert.equal($("#stat-heal-rating").text(), "4952");
    assert.equal($("#stat-healing-power").text(), "135.7");
});

QUnit.test("should set Base/HP and affect summary accordingly", function(assert) {
    swlcalc.passives.setHitPointsBase("960");
    assert.equal(swlcalc.passives.getHitPointsBase(), "960");

    assert.equal($("#stat-hit-points").text(), "11565");
});

QUnit.test("should set Passives Skills/AR and affect summary accordingly", function(assert) {
    swlcalc.passives.setAttackRatingPassiveSkills("699");
    assert.equal(swlcalc.passives.getAttackRatingPassiveSkills(), "699");

    assert.equal($("#stat-attack-rating").text(), "5971");
    assert.equal($("#stat-combat-power").text(), "585.2");
});

QUnit.test("should set Passives Skills/HR and affect summary accordingly", function(assert) {
    swlcalc.passives.setHealRatingPassiveSkills("745");
    assert.equal(swlcalc.passives.getHealRatingPassiveSkills(), "745");

    assert.equal($("#stat-heal-rating").text(), "5197");
    assert.equal($("#stat-healing-power").text(), "140.6");
});

QUnit.test("should set Passives Skills/HP and affect summary accordingly", function(assert) {
    swlcalc.passives.setHitPointsPassiveSkills("1556");
    assert.equal(swlcalc.passives.getHitPointsPassiveSkills(), "1556");

    assert.equal($("#stat-hit-points").text(), "12464");
});

QUnit.test("should set Passives Skills/Critical Rating and affect summary accordingly", function(assert) {
    swlcalc.passives.setCriticalRatingPassiveSkills("220");
    assert.equal(swlcalc.passives.getCriticalRatingPassiveSkills(), "220");

    assert.equal($("#stat-critical-rating").text(), "+305");
    assert.equal($("#stat-critical-chance").text(), "10.4%");
});

QUnit.test("should set Passives Skills/Critical Power and affect summary accordingly", function(assert) {
    swlcalc.passives.setCriticalPowerPassiveSkills("604");
    assert.equal(swlcalc.passives.getCriticalPowerPassiveSkills(), "604");

    assert.equal($("#stat-critical-power").text(), "+604");
    assert.equal($("#stat-critical-power-percentage").text(), "76.4%");
});

QUnit.test("should set Passives Skills/Hit Rating and affect summary accordingly", function(assert) {
    swlcalc.passives.setHitRatingPassiveSkills("574");
    assert.equal(swlcalc.passives.getHitRatingPassiveSkills(), "574");

    assert.equal($("#stat-hit-rating").text(), "+1062");
    assert.equal($("#stat-glance-reduction").text(), "20.9%");
});

QUnit.test("should set Passives Skills/Protection and affect summary accordingly", function(assert) {
    swlcalc.passives.setProtectionPassiveSkills("141");
    assert.equal(swlcalc.passives.getProtectionPassiveSkills(), "141");

    assert.equal($("#stat-protection").text(), "2777");
    assert.equal($("#stat-damage-mitigation").text(), "10.2%");
});

QUnit.test("should set Passives Skills/Defense Rating and affect summary accordingly", function(assert) {
    swlcalc.passives.setDefenseRatingPassiveSkills("750");
    assert.equal(swlcalc.passives.getDefenseRatingPassiveSkills(), "750");

    assert.equal($("#stat-defense-rating").text(), "+1893");
    assert.equal($("#stat-glance-chance").text(), "18.6%");
});

QUnit.test("should set Passives Skills/Evade Rating and affect summary accordingly", function(assert) {
    swlcalc.passives.setEvadeRatingPassiveSkills("0");
    assert.equal(swlcalc.passives.getEvadeRatingPassiveSkills(), "0");

    assert.equal($("#stat-evade-rating").text(), "+1143");
    assert.equal($("#stat-evade-chance").text(), "7.9%");
});

QUnit.test("should set Capstones/AR and affect summary accordingly", function(assert) {
    swlcalc.passives.setAttackRatingCapstones("0");
    assert.equal(swlcalc.passives.getAttackRatingCapstones(), "0");

    assert.equal($("#stat-attack-rating").text(), "5974");
    assert.equal($("#stat-combat-power").text(), "585.4");
});

QUnit.test("should set Capstones/HR and affect summary accordingly", function(assert) {
    swlcalc.passives.setHealRatingCapstones("420");
    assert.equal(swlcalc.passives.getHealRatingCapstones(), "420");

    assert.equal($("#stat-heal-rating").text(), "5562");
    assert.equal($("#stat-healing-power").text(), "147.9");
});

QUnit.test("should set Capstones/HP and affect summary accordingly", function(assert) {
    swlcalc.passives.setHitPointsCapstones("270");
    assert.equal(swlcalc.passives.getHitPointsCapstones(), "270");

    assert.equal($("#stat-hit-points").text(), "11745");
});

QUnit.test("should set Expertise/Critical Chance and affect summary accordingly", function(assert) {
    swlcalc.passives.setCriticalChanceExpertiseWeapon1("2.4");
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon1(), "2.4");

    assert.equal($("#stat-critical-chance").text(), "8.7%");

    swlcalc.passives.setCriticalChanceExpertiseWeapon2("6");
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon2(), "6");

    assert.equal($("#stat-critical-chance").text(), "8.7%");
});

QUnit.test("should set Expertise/Critical Power Percentage and affect summary accordingly", function(assert) {
    swlcalc.passives.setCriticalPowerPercentageExpertiseWeapon1("16.8");
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon1(), "16.8");

    assert.equal($("#stat-critical-power-percentage").text(), "77.5%");

    swlcalc.passives.setCriticalPowerPercentageExpertiseWeapon2("7.2");
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon2(), "7.2");

    assert.equal($("#stat-critical-power-percentage").text(), "77.5%");
});
