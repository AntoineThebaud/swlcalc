
QUnit.module("buttonbar-dom", {
    beforeEach: function(assert) {
        renderButtonbar();
    }
});

QUnit.test("should have required buttonbar buttons in DOM", function(assert) {
    assert.ok($("#select-anima-allocation").length !== 0, "select-anima-allocation dropdown exists");
    assert.ok($("#btn-all-standard").length !== 0, "all-standard button exists");
    assert.ok($("#btn-all-superior").length !== 0, "all-superior button exists");
    assert.ok($("#btn-all-epic").length !== 0, "all-epic button exists");
    assert.ok($("#btn-all-mythic").length !== 0, "all-mythic button exists");
    assert.ok($("#btn-all-legendary").length !== 0, "all-legendary button exists");
    assert.ok($("#btn-reset").length !== 0, "reset button exists");
});

QUnit.module("buttonbar-integration-tests", {
    beforeEach: function(assert) {
        renderSummary();
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        swlcalc.buttonBar.init();
        initiateSummary();
        createTankBuild();
    }
});

QUnit.test("should reset all slots", function(assert) {
    swlcalc.buttonBar.resetGear();
    for (var slotId in swlcalc.gear.slots){
        var slot = swlcalc.gear.slots[slotId];
        assert.equal(slot.edit.iLvl(), "0");
        assert.equal(slot.edit.equipmentId(), "none");
        assert.equal(slot.edit.equipmentQuality(), "1");
        assert.equal(slot.edit.equipmentRarity(), "standard");
        assert.equal(slot.edit.equipmentLevel(), "20");
        assert.equal(slot.edit.equipmentStatValue(), "0");
        assert.equal(slot.edit.equipmentDescription(), "");
        assert.equal(slot.edit.equipmentILvl(), "0");
        assert.equal(slot.edit.glyphId(), "none");
        assert.equal(slot.edit.glyphRarity(), "standard");
        assert.equal(slot.edit.glyphQuality(), "1");
        assert.equal(slot.edit.glyphLevel(), "20");
        assert.equal(slot.edit.glyphStatRating(), "0");
        assert.equal(slot.edit.glyphStatText(), "");
        assert.equal(slot.edit.glyphILvl(), "0");
        assert.equal(slot.edit.signetId(), "none");
        if (slot.isWeapon()) {
            // TODO : to replace by NaN or ""; actually parseInt should be removed from the getters to allow this
            // assert.equal(slot.edit.signetRarity(), undefined, "expect signetRarity for weapon to be undefined");
            // assert.equal(slot.edit.signetLevel(), undefined, "expect signetLevel for weapon to be undefined");
            // assert.equal(slot.edit.signetILvl(), undefined, "expect signetILvl for weapon to be undefined");
        } else {
            assert.equal(slot.edit.signetRarity(), "standard");
            assert.equal(slot.edit.signetLevel(), "20");
            assert.equal(slot.edit.signetILvl(), "0");
        }
    }
});

QUnit.test("should set rarity on all slots", function(assert) {
    var mixedRarities = ["epic", "standard", "legendary", "superior", "mythic"];

    for (var r = 0; r < mixedRarities.length; r++) {
        $("#btn-all-" + mixedRarities[r]).click();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var id = swlcalc.data.template_data.slots[i].id;
            assert.equal(swlcalc.gear.slots[id].edit.equipmentRarity(), mixedRarities[r]);
            assert.equal(swlcalc.gear.slots[id].edit.glyphRarity(), mixedRarities[r]);
            if (id != "weapon" && id != "weapon2") {
                assert.equal(swlcalc.gear.slots[id].edit.signetRarity(), mixedRarities[r]);
            }
        }
    }
});

QUnit.test("should set quality on all slots", function(assert) {
    var mixedQualities = ["3", "1", "2"];

    for (var r = 0; r < mixedQualities.length; r++) {
        $("#btn-all-" + mixedQualities[r] + "-pip").click();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var id = swlcalc.data.template_data.slots[i].id;
            assert.equal(swlcalc.gear.slots[id].edit.equipmentQuality(), mixedQualities[r]);
            assert.equal(swlcalc.gear.slots[id].edit.glyphQuality(), mixedQualities[r]);
        }
    }
});

QUnit.test("should set anima allocation and affect stats correctly", function(assert) {
    assert.equal($("#stat-combat-power").html(), "741");
    assert.equal($("#stat-healing-power").html(), "461");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "7512");
    $("#select-anima-allocation").val("heal");
    $("#select-anima-allocation").change();
    assert.equal($("#stat-combat-power").html(), "462");
    assert.equal($("#stat-healing-power").html(), "740");
    assert.equal($("#stat-attack-rating").html(), "4322");
    assert.equal($("#stat-heal-rating").html(), "8040");
    assert.equal($("#stat-hitpoints").html(), "7512");
    $("#select-anima-allocation").val("tank");
    $("#select-anima-allocation").change();
    assert.equal($("#stat-combat-power").html(), "462");
    assert.equal($("#stat-healing-power").html(), "461");
    assert.equal($("#stat-attack-rating").html(), "4322");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "12837");
    $("#select-anima-allocation").val("dps");
    $("#select-anima-allocation").change();
    assert.equal($("#stat-combat-power").html(), "741");
    assert.equal($("#stat-healing-power").html(), "461");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "7512");
});
