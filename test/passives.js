
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
    assert.ok($("#passive-critical-rating-passive-skills").length !== 0, "passive-critical-rating-passive-skills exists");

    assert.ok($("#passive-critical-chance-expertise-slider-weapon1").length !== 0, "passive-critical-chance-expertise-slider-weapon1 exists");
    assert.ok($("#passive-critical-chance-expertise-weapon1").length !== 0, "passive-critical-chance-expertise-weapon1 exists");
    assert.ok($("#passive-critical-chance-expertise-slider-weapon2").length !== 0, "passive-critical-chance-expertise-slider-weapon2 exists");
    assert.ok($("#passive-critical-chance-expertise-weapon2").length !== 0, "passive-critical-chance-expertise-weapon2 exists");

    assert.ok($("#passive-critical-power-passive-skills-slider").length !== 0, "passive-critical-power-passive-skills-slider exists");
    assert.ok($("#passive-critical-power-passive-skills").length !== 0, "passive-critical-power-passive-skills exists");

    assert.ok($("#passive-critical-power-percentage-expertise-slider-weapon1").length !== 0, "passive-critical-power-percentage-expertise-slider-weapon1 exists");
    assert.ok($("#passive-critical-power-percentage-expertise-weapon1").length !== 0, "passive-critical-power-percentage-expertise-weapon1 exists");
    assert.ok($("#passive-critical-power-percentage-expertise-slider-weapon2").length !== 0, "passive-critical-power-percentage-expertise-slider-weapon2 exists");
    assert.ok($("#passive-critical-power-percentage-expertise-weapon2").length !== 0, "passive-critical-power-percentage-expertise-weapon2 exists");

    assert.ok($("#passive-hit-rating-passive-skills-slider").length !== 0, "passive-hit-rating-passive-skills-slider exists");
    assert.ok($("#passive-hit-rating-passive-skills").length !== 0, "passive-hit-rating-passive-skills exists");

    assert.ok($("#passive-protection-passive-skills-slider").length !== 0, "passive-protection-passive-skills-slider exists");
    assert.ok($("#passive-protection-passive-skills").length !== 0, "passive-protection-passive-skills exists");

    assert.ok($("#passive-defense-rating-passive-skills-slider").length !== 0, "passive-defense-rating-passive-skills-slider exists");
    assert.ok($("#passive-defense-rating-passive-skills").length !== 0, "passive-defense-rating-passive-skills exists");

    assert.ok($("#passive-evade-rating-passive-skills-slider").length !== 0, "passive-evade-rating-passive-skills-slider exists");
    assert.ok($("#passive-evade-rating-passive-skills").length !== 0, "passive-evade-rating-passive-skills exists");
});

QUnit.module("passives - unit tests", {
    beforeEach: function() {
        includePassives();
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

QUnit.test("should get Total/Critical Power", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalPower(), "1008");
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
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
});

QUnit.test("should get Total/Critical Chance", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalChance(), "8.2");
});

QUnit.test("should get Total/Critical Power Percentage", function(assert) {
    assert.equal(swlcalc.passives.getTotalCriticalPowerPercentage(), "53.8");
});

QUnit.test("should set Base/AR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setAttackRatingBase("1000");
    assert.equal(swlcalc.passives.getAttackRatingBase(), "1000");

    assert.equal($("#stat-attack-rating").text(), "3921");
    assert.equal($("#stat-combat-power").text(), "574.4");
    assert.equal(swlcalc.gear.agents[2].getText50(), "<span class=\"stat-value dps\">123</span> Damage on Critical Hits");
    assert.equal(swlcalc.gear.slots.weapon.edit.getSignetDescription(), "This weapon deals <span id=\"weapon-edit-signet-bonus1\" class=\"stat-value dps\">614</span> additional damage to enemies that are below <span class=\"stat-value const\">35%</span> health.");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetDescription(), "When you activate a Signature ability, gain a beneficial effect that damages attackers for <span id=\"luck-edit-signet-bonus1\" class=\"stat-value dps\">201</span> when they hit you for <span class=\"stat-value const\">5</span> seconds. This damage scales with your Maximum Health.");
});

QUnit.test("should set Base/HR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHealRatingBase("1000");
    assert.equal(swlcalc.passives.getHealRatingBase(), "1000");

    assert.equal($("#stat-heal-rating").text(), "2723");
    assert.equal($("#stat-healing-power").text(), "129.2");
    assert.equal(swlcalc.gear.agents[0].getText50(), "<span class=\"stat-value heal\">28</span> Healing on Critical Heals");
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">257</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">55</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentDescription(), "Whenever you heal yourself or an ally, you have a <span class=\"stat-value const\">10%</span> chance to apply a barrier which absorbs <span class=\"stat-value const\">100%</span> of incoming damage and dissipates after absorbing <span id=\"weapon2-edit-equipment-bonus1\" class=\"stat-value heal\">484</span> damage. If a barrier already exists, they are instead healed for <span id=\"weapon2-edit-equipment-bonus2\" class=\"stat-value heal\">484</span>. This effect can only occur once every <span class=\"stat-value const\">5</span> seconds.");
});

QUnit.test("should set Base/HP and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHitPointsBase("960");
    assert.equal(swlcalc.passives.getHitPointsBase(), "960");

    assert.equal($("#stat-hit-points").text(), "15021");
});

QUnit.test("should set Passives Skills/AR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setAttackRatingPassiveSkills("699");
    assert.equal(swlcalc.passives.getAttackRatingPassiveSkills(), "699");

    assert.equal($("#stat-attack-rating").text(), "4632");
    assert.equal($("#stat-combat-power").text(), "627.8");
    assert.equal(swlcalc.gear.agents[2].getText50(), "<span class=\"stat-value dps\">135</span> Damage on Critical Hits");
    assert.equal(swlcalc.gear.slots.weapon.edit.getSignetDescription(), "This weapon deals <span id=\"weapon-edit-signet-bonus1\" class=\"stat-value dps\">671</span> additional damage to enemies that are below <span class=\"stat-value const\">35%</span> health.");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetDescription(), "When you activate a Signature ability, gain a beneficial effect that damages attackers for <span id=\"luck-edit-signet-bonus1\" class=\"stat-value dps\">219</span> when they hit you for <span class=\"stat-value const\">5</span> seconds. This damage scales with your Maximum Health.");
});

QUnit.test("should set Passives Skills/HR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHealRatingPassiveSkills("745");
    assert.equal(swlcalc.passives.getHealRatingPassiveSkills(), "745");

    assert.equal($("#stat-heal-rating").text(), "2432");
    assert.equal($("#stat-healing-power").text(), "123.4");
    assert.equal(swlcalc.gear.agents[0].getText50(), "<span class=\"stat-value heal\">26</span> Healing on Critical Heals");
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">257</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">52</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentDescription(), "Whenever you heal yourself or an ally, you have a <span class=\"stat-value const\">10%</span> chance to apply a barrier which absorbs <span class=\"stat-value const\">100%</span> of incoming damage and dissipates after absorbing <span id=\"weapon2-edit-equipment-bonus1\" class=\"stat-value heal\">461</span> damage. If a barrier already exists, they are instead healed for <span id=\"weapon2-edit-equipment-bonus2\" class=\"stat-value heal\">461</span>. This effect can only occur once every <span class=\"stat-value const\">5</span> seconds.");
});

QUnit.test("should set Passives Skills/HP and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHitPointsPassiveSkills("1556");
    assert.equal(swlcalc.passives.getHitPointsPassiveSkills(), "1556");

    assert.equal($("#stat-hit-points").text(), "13580");
});

QUnit.test("should set Passives Skills/Critical Rating and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setCriticalRatingPassiveSkills("220");
    assert.equal(swlcalc.passives.getCriticalRatingPassiveSkills(), "220");

    assert.equal($("#stat-critical-rating").text(), "+877");
    assert.equal($("#stat-critical-chance").text(), "13.8%");
});

QUnit.test("should set Passives Skills/Critical Power and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setCriticalPowerPassiveSkills("604");
    assert.equal(swlcalc.passives.getCriticalPowerPassiveSkills(), "604");

    assert.equal($("#stat-critical-power").text(), "+1299");
    assert.equal($("#stat-critical-power-percentage").text(), "99.8%");
});

QUnit.test("should set Passives Skills/Hit Rating and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHitRatingPassiveSkills("574");
    assert.equal(swlcalc.passives.getHitRatingPassiveSkills(), "574");

    assert.equal($("#stat-hit-rating").text(), "+746");
    assert.equal($("#stat-glance-reduction").text(), "14.7%");
});

QUnit.test("should set Passives Skills/Protection and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setProtectionPassiveSkills("141");
    assert.equal(swlcalc.passives.getProtectionPassiveSkills(), "141");

    assert.equal($("#stat-protection").text(), "2787");
    assert.equal($("#stat-damage-mitigation").text(), "10.2%");
});

QUnit.test("should set Passives Skills/Defense Rating and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setDefenseRatingPassiveSkills("750");
    assert.equal(swlcalc.passives.getDefenseRatingPassiveSkills(), "750");

    assert.equal($("#stat-defense-rating").text(), "+750");
    assert.equal($("#stat-glance-chance").text(), "7.4%");
});

QUnit.test("should set Passives Skills/Evade Rating and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setEvadeRatingPassiveSkills("0");
    assert.equal(swlcalc.passives.getEvadeRatingPassiveSkills(), "0");

    assert.equal($("#stat-evade-rating").text(), "0");
    assert.equal($("#stat-evade-chance").text(), "0%");
});

QUnit.test("should set Capstones/AR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setAttackRatingCapstones("0");
    assert.equal(swlcalc.passives.getAttackRatingCapstones(), "0");

    assert.equal($("#stat-attack-rating").text(), "3801");
    assert.equal($("#stat-combat-power").text(), "565.4");
    assert.equal(swlcalc.gear.agents[2].getText50(), "<span class=\"stat-value dps\">121</span> Damage on Critical Hits");
    assert.equal(swlcalc.gear.slots.weapon.edit.getSignetDescription(), "This weapon deals <span id=\"weapon-edit-signet-bonus1\" class=\"stat-value dps\">605</span> additional damage to enemies that are below <span class=\"stat-value const\">35%</span> health.");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetDescription(), "When you activate a Signature ability, gain a beneficial effect that damages attackers for <span id=\"luck-edit-signet-bonus1\" class=\"stat-value dps\">198</span> when they hit you for <span class=\"stat-value const\">5</span> seconds. This damage scales with your Maximum Health.");
});

QUnit.test("should set Capstones/HR and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHealRatingCapstones("420");
    assert.equal(swlcalc.passives.getHealRatingCapstones(), "420");

    assert.equal($("#stat-heal-rating").text(), "2753");
    assert.equal($("#stat-healing-power").text(), "129.8");
    assert.equal(swlcalc.gear.agents[0].getText50(), "<span class=\"stat-value heal\">28</span> Healing on Critical Heals");
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">257</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">55</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentDescription(), "Whenever you heal yourself or an ally, you have a <span class=\"stat-value const\">10%</span> chance to apply a barrier which absorbs <span class=\"stat-value const\">100%</span> of incoming damage and dissipates after absorbing <span id=\"weapon2-edit-equipment-bonus1\" class=\"stat-value heal\">484</span> damage. If a barrier already exists, they are instead healed for <span id=\"weapon2-edit-equipment-bonus2\" class=\"stat-value heal\">484</span>. This effect can only occur once every <span class=\"stat-value const\">5</span> seconds.");
});

QUnit.test("should set Capstones/HP and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setHitPointsCapstones("270");
    assert.equal(swlcalc.passives.getHitPointsCapstones(), "270");

    assert.equal($("#stat-hit-points").text(), "13341");
});

QUnit.test("should set Expertise/Critical Chance and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setCriticalChanceExpertiseWeapon1("2.4");
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon1(), "2.4");

    assert.equal($("#stat-critical-chance").text(), "10.7%");

    swlcalc.passives.setCriticalChanceExpertiseWeapon2("6");
    assert.equal(swlcalc.passives.getCriticalChanceExpertiseWeapon2(), "6");

    assert.equal($("#stat-critical-chance").text(), "10.7%");
});

QUnit.test("should set Expertise/Critical Power Percentage and affect the whole calculator accordingly", function(assert) {
    swlcalc.passives.setCriticalPowerPercentageExpertiseWeapon1("16.8");
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon1(), "16.8");

    assert.equal($("#stat-critical-power-percentage").text(), "83.3%");

    swlcalc.passives.setCriticalPowerPercentageExpertiseWeapon2("7.2");
    assert.equal(swlcalc.passives.getCriticalPowerPercentageExpertiseWeapon2(), "7.2");

    assert.equal($("#stat-critical-power-percentage").text(), "83.3%");
});
