
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
        includeCoreModules();

        createShuffledBuild();
    }
});

QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setDamagePercentage("33");

    assert.equal(swlcalc.animaAllocation.getDamagePercentage(), "33");
    assert.equal(swlcalc.animaAllocation.getDamageRatio(), "0.33");
    assert.equal($("#stat-combat-power").html(), "584.6");
    assert.equal($("#stat-attack-rating").html(), "4056");
    assert.equal(swlcalc.gear.slots.neck.recap.el.equipmentDescription.text(), "Whenever you hit an enemy who is below 50% of their maximum health, you apply a damage over time effect that deals 88 physical damage over 5 seconds. Your damage is increased by 4.5% for each enemy affected by this effect.");
    assert.equal(swlcalc.gear.slots.weapon.recap.el.signetDescription.text(), "This weapon deals 625 additional damage to enemies that are below 35% health.");
    assert.equal($("#stat-agent3-bonus50").text(), '126 Damage on Critical Hits');
    // signet bonuses

    swlcalc.animaAllocation.setDamagePercentage("0");
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if(!slot.isWeapon()) {
            assert.ok(slot.recap.el.equipmentStatARSection.is(":hidden"));
        }
    }
});

QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setHealingPercentage("22");

    assert.equal(swlcalc.animaAllocation.getHealingPercentage(), "22");
    assert.equal(swlcalc.animaAllocation.getHealingRatio(), "0.22");
    assert.equal($("#stat-healing-power").html(), "141.2");
    assert.equal($("#stat-heal-rating").html(), "3323");
    assert.equal(swlcalc.gear.slots.waist.recap.el.equipmentDescription.text(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by 10%. In addition, once you have lost 10% of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional 257 magical damage or your next healing Blood Magic ability will restore an additional 60 health.");
    assert.equal(swlcalc.gear.slots.weapon2.recap.el.equipmentDescription.text(), "Whenever you heal yourself or an ally, you have a 10% chance to apply a barrier which absorbs 100% of incoming damage and dissipates after absorbing 529 damage. If a barrier already exists, they are instead healed for 529. This effect can only occur once every 5 seconds.");
    assert.equal($("#stat-agent1-bonus50").text(), '30 Healing on Critical Heals');

    swlcalc.animaAllocation.setHealingPercentage("0");
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if(!slot.isWeapon()) {
            assert.ok(slot.recap.el.equipmentStatHRSection.is(":hidden"));
        }
    }
});

QUnit.test("should set anima allocation damage and do updates accordingly", function(assert) {
    swlcalc.animaAllocation.setSurvivabilityPercentage("11");

    assert.equal(swlcalc.animaAllocation.getSurvivabilityPercentage(), "11");
    assert.equal(swlcalc.animaAllocation.getSurvivabilityRatio(), "0.11");
    assert.equal($("#stat-hit-points").html(), "8061");

    swlcalc.animaAllocation.setSurvivabilityPercentage("0");
    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        if(!slot.isWeapon()) {
            assert.ok(slot.recap.el.equipmentStatHPSection.is(":hidden"));
        }
    }
});
