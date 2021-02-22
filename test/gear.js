
QUnit.module("gear-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderPassives();
        initiatePassives();
        renderAnimaAllocation();
        initiateAnimaAllocation();
        initiateHandlers();
        createTankBuild();
        renderSummary();
    }
});

QUnit.test("gear should contain 9 slots", function(assert) {
    assert.equal(swlcalc.gear.nbSlots(), 9);
});

QUnit.test("gear should contain 3 agents", function(assert) {
    assert.equal(swlcalc.gear.nbAgents(), 3);
});

QUnit.test("gear should be fully reset", function(assert) {
    assert.equal($("#weapon-edit-equipment-id").val(), "1");
    assert.equal($("#weapon2-edit-equipment-id").val(), "2");
    assert.equal($("#head-edit-equipment-id").val(), "1");
    assert.equal($("#finger-edit-equipment-id").val(), "1");
    assert.equal($("#neck-edit-equipment-id").val(), "1");
    assert.equal($("#wrist-edit-equipment-id").val(), "1");
    assert.equal($("#luck-edit-equipment-id").val(), "1");
    assert.equal($("#waist-edit-equipment-id").val(), "13");
    assert.equal($("#occult-edit-equipment-id").val(), "1");
    assert.equal($("#agent1-id").val(), "2");
    assert.equal($("#agent2-id").val(), "42");
    assert.equal($("#agent3-id").val(), "0");

    swlcalc.gear.reset();

    assert.equal($("#weapon-edit-equipment-id").val(), "none");
    assert.equal($("#weapon2-edit-equipment-id").val(), "none");
    assert.equal($("#head-edit-equipment-id").val(), "none");
    assert.equal($("#finger-edit-equipment-id").val(), "none");
    assert.equal($("#neck-edit-equipment-id").val(), "none");
    assert.equal($("#wrist-edit-equipment-id").val(), "none");
    assert.equal($("#luck-edit-equipment-id").val(), "none");
    assert.equal($("#waist-edit-equipment-id").val(), "none");
    assert.equal($("#occult-edit-equipment-id").val(), "none");
    assert.equal($("#agent1-id").val(), "0");
    assert.equal($("#agent2-id").val(), "0");
    assert.equal($("#agent3-id").val(), "0");
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

QUnit.test("should update any talisman and weapon bonuses correctly", function(assert) {
    // change equipped weapons
    $("#waist-edit-equipment-id").val("12");
    $("#waist-edit-equipment-id").change();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">727</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">174</span> health.");
    $("#weapon2-edit-equipment-id").val("53");
    $("#weapon2-edit-equipment-id").change();
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-edit-equipment-bonus1\" class=\"bonus-val dps\">97</span>-<span id=\"weapon2-edit-equipment-bonus2\" class=\"bonus-val dps\">485</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-edit-equipment-bonus3\" class=\"bonus-val dps\">61</span>-<span id=\"weapon2-edit-equipment-bonus4\" class=\"bonus-val dps\">304</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">174</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-edit-equipment-bonus1\" class=\"bonus-val dps\">150</span>-<span id=\"weapon2-edit-equipment-bonus2\" class=\"bonus-val dps\">750</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-edit-equipment-bonus3\" class=\"bonus-val dps\">95</span>-<span id=\"weapon2-edit-equipment-bonus4\" class=\"bonus-val dps\">471</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-healing-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">1125</span> health.");
});

QUnit.test("should update all talismans and weapons bonuses correctly", function(assert) {
    // change equipped weapons //TODO move this to a "before" func
    $("#waist-edit-equipment-id").val("12");
    $("#waist-edit-equipment-id").change();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">727</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">174</span> health.");
    $("#weapon2-edit-equipment-id").val("53");
    $("#weapon2-edit-equipment-id").change();
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-edit-equipment-bonus1\" class=\"bonus-val dps\">97</span>-<span id=\"weapon2-edit-equipment-bonus2\" class=\"bonus-val dps\">485</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-edit-equipment-bonus3\" class=\"bonus-val dps\">61</span>-<span id=\"weapon2-edit-equipment-bonus4\" class=\"bonus-val dps\">304</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">174</span> health.");
    assert.equal(swlcalc.gear.slots.weapon2.edit.equipmentDescription(), "Whenever you hit, you have a <span class=\"bonus-val const\">33%</span> chance to hex your target and deal an additional <span id=\"weapon2-edit-equipment-bonus1\" class=\"bonus-val dps\">150</span>-<span id=\"weapon2-edit-equipment-bonus2\" class=\"bonus-val dps\">750</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class=\"bonus-val const\">5</span> times. This effect is guaranteed to trigger on critical hits.<br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id=\"weapon2-edit-equipment-bonus3\" class=\"bonus-val dps\">95</span>-<span id=\"weapon2-edit-equipment-bonus4\" class=\"bonus-val dps\">471</span> magical damage, based on the number of times the damaging effect has been applied.");

    $("#stat-healing-power").html("1000");
    swlcalc.gear.updateEquipmentsBonuses();
    assert.equal(swlcalc.gear.slots.waist.edit.equipmentDescription(), "Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id=\"waist-edit-equipment-bonus1\" class=\"bonus-val dps\">1125</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id=\"waist-edit-equipment-bonus2\" class=\"bonus-val heal\">1125</span> health.");
});

QUnit.test("should update all signets bonuses correctly", function(assert) {
    swlcalc.gear.updateSignetsBonuses(); // TODO needed otherwise bonus = NaN, should not be the case
    assert.equal(swlcalc.gear.slots.weapon2.edit.signetDescription(), "This weapon deals <span id=\"weapon2-edit-signet-bonus1\" class=\"bonus-val dps\">0</span> additional damage to enemies that are below <span class=\"bonus-val const\">35%</span> health.");
    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateSignetsBonuses();
    assert.equal(swlcalc.gear.slots.weapon2.edit.signetDescription(), "This weapon deals <span id=\"weapon2-edit-signet-bonus1\" class=\"bonus-val dps\">1070</span> additional damage to enemies that are below <span class=\"bonus-val const\">35%</span> health.");
});

QUnit.test("should update all agents bonuses correctly", function(assert) {
    // change equipped weapons //TODO move this to a "before" func
    $("#agent1-id").val("11");
    $("#agent1-id").change();
    $("#agent1-level").val("50");
    $("#agent1-level").change();
    assert.equal(swlcalc.gear.agents[0].text50(), "<span class=\"bonus-val dps\">144</span> Physical Damage on Critical Hits");

    $("#stat-combat-power").html("1000");
    swlcalc.gear.updateAgentsBonuses();
    assert.equal(swlcalc.gear.agents[0].text50(), "<span class=\"bonus-val dps\">215</span> Physical Damage on Critical Hits");
});
