
QUnit.module("gear-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();
        
        createShuffledBuild();
    }
});

QUnit.test("gear should contain 9 slots", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

QUnit.test("gear should contain 3 agents", function(assert) {
    assert.equal(swlcalc.gear.nbAgents(), 3);
});

QUnit.test("gear should be fully reset", function(assert) {
    swlcalc.gear.reset();

    for (var i in swlcalc.gear.slots) {
        assert.equal($("#" + swlcalc.gear.slots[i].id + "-edit-equipment-id").val(), "none");
    }

    for (var i in swlcalc.gear.agents) {
        assert.equal($("#agent" + (parseInt(i) + 1) + "-id").val(), "0");
    }
});

QUnit.test("should collect all slot states", function(assert) {
    var slotStates = swlcalc.gear.state();

    assert.equal(Object.keys(slotStates).length, 9);
    assert.equal(slotStates.hasOwnProperty("weapon"), true);
    assert.equal(slotStates.hasOwnProperty("weapon2"), true);
    assert.equal(slotStates.hasOwnProperty("head"), true);
    assert.equal(slotStates.hasOwnProperty("finger"), true);
    assert.equal(slotStates.hasOwnProperty("neck"), true);
    assert.equal(slotStates.hasOwnProperty("wrist"), true);
    assert.equal(slotStates.hasOwnProperty("luck"), true);
    assert.equal(slotStates.hasOwnProperty("waist"), true);
    assert.equal(slotStates.hasOwnProperty("occult"), true);
});

QUnit.test("should collect all mapped slot states", function(assert) {
    var slotStates = swlcalc.gear.mappedState();

    assert.equal(Object.keys(slotStates).length, 9);
    assert.equal(slotStates.hasOwnProperty("weapon"), true);
    assert.equal(slotStates.hasOwnProperty("weapon2"), true);
    assert.equal(slotStates.hasOwnProperty("head"), true);
    assert.equal(slotStates.hasOwnProperty("finger"), true);
    assert.equal(slotStates.hasOwnProperty("neck"), true);
    assert.equal(slotStates.hasOwnProperty("wrist"), true);
    assert.equal(slotStates.hasOwnProperty("luck"), true);
    assert.equal(slotStates.hasOwnProperty("waist"), true);
    assert.equal(slotStates.hasOwnProperty("occult"), true);
});

QUnit.test("should update any talisman and weapon description accordingly", function(assert) {
    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">425</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">54</span> health.");
    assert.equal(swlcalc.gear.slots.weapon.edit.getEquipmentDescription(), "Your Rage consuming abilities deal an additional <span id=\"weapon-edit-equipment-bonus1\" class=\"stat-value dps\">825</span> physical damage to the target and nearby enemies.");

    $("#stat-healing-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.getEquipmentDescription(), "Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class=\"stat-value const\">10%</span>. In addition, once you have lost <span class=\"stat-value const\">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"stat-value dps\">425</span> magical damage or your next healing Blood Magic ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"stat-value heal\">425</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.getEquipmentDescription(), "Whenever you heal yourself or an ally, you have a <span class=\"stat-value const\">10%</span> chance to apply a barrier which absorbs <span class=\"stat-value const\">100%</span> of incoming damage and dissipates after absorbing <span id=\"weapon2-edit-equipment-bonus1\" class=\"stat-value heal\">3750</span> damage. If a barrier already exists, they are instead healed for <span id=\"weapon2-edit-equipment-bonus2\" class=\"stat-value heal\">3750</span>. This effect can only occur once every <span class=\"stat-value const\">5</span> seconds.");
});

QUnit.test("should update all signets bonuses accordingly", function(assert) {
    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateSignetsBonuses();
    assert.equal(swlcalc.gear.slots.weapon.edit.getSignetDescription(), "This weapon deals <span id=\"weapon-edit-signet-bonus1\" class=\"stat-value dps\">1070</span> additional damage to enemies that are below <span class=\"stat-value const\">35%</span> health.");
    assert.equal(swlcalc.gear.slots.luck.edit.getSignetDescription(), "When you activate a Signature ability, gain a beneficial effect that damages attackers for <span id=\"luck-edit-signet-bonus1\" class=\"stat-value dps\">350</span> when they hit you for <span class=\"stat-value const\">5</span> seconds. This damage scales with your Maximum Health.");
});

QUnit.test("should update all agents bonuses accordingly", function(assert) {
    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateAgentsBonuses();
    assert.equal(swlcalc.gear.agents[2].getText50(), "<span class=\"stat-value dps\">215</span> Damage on Critical Hits");

    $("#stat-healing-power").html("1000");
    swlcalc.gear.updateAgentsBonuses();
    assert.equal(swlcalc.gear.agents[0].getText50(), "<span class=\"stat-value heal\">215</span> Healing on Critical Heals");
});
