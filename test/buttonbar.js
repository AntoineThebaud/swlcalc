
QUnit.module("buttonbar-unit-tests", {
    beforeEach: function(assert) {
        renderSummary();
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        initiateButtonBar();
        initiateSummary();
        createTankBuild();
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

QUnit.test("should update anima allocation accordingly", function(assert) {
    assert.equal(swlcalc.buttonBar.getAnimaAllocation(), "dps");
    assert.equal($('#select-anima-allocation').attr('class'), 'anima-allocation-select color-dps');
    $('#select-anima-allocation').val("tank");
    $('#select-anima-allocation').change();
    assert.equal(swlcalc.buttonBar.getAnimaAllocation(), "tank");
    assert.equal($('#select-anima-allocation').attr('class'), 'anima-allocation-select color-tank');
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

QUnit.test("should set rarity on all slots", function(assert) {
    var mixedRarities = ["epic", "standard", "legendary", "superior", "mythic"];

    for (var r = 0; r < mixedRarities.length; r++) {
        $("#btn-all-" + mixedRarities[r]).click();
        for (var slotId in swlcalc.gear.slots){
            var slot = swlcalc.gear.slots[slotId];
            assert.equal(slot.edit.equipmentRarity(), mixedRarities[r]);
            assert.equal(slot.edit.glyphRarity(), mixedRarities[r]);
            if (slot.id != "weapon" && slot.id != "weapon2") {
                assert.equal(slot.edit.signetRarity(), mixedRarities[r]);
            }
        }
    }
});

QUnit.test("should set quality on all slots", function(assert) {
    var mixedQualities = ["3", "1", "2"];

    for (var r = 0; r < mixedQualities.length; r++) {
        $("#btn-all-" + mixedQualities[r] + "-pip").click();
        for (var slotId in swlcalc.gear.slots){
            var slot = swlcalc.gear.slots[slotId];
            assert.equal(slot.edit.equipmentQuality(), mixedQualities[r]);
            assert.equal(slot.edit.glyphQuality(), mixedQualities[r]);
        }
    }
});

QUnit.test("should set level on all slots", function(assert) {
      $('#btn-all-mythic').click();

      $("#btn-all-lvl-min").click();
      for (var slotId in swlcalc.gear.slots){
          var slot = swlcalc.gear.slots[slotId];
          assert.equal(slot.edit.equipmentLevel(), "1");
          assert.equal(slot.edit.glyphLevel(), "1");
          if (slot.id != "weapon" && slot.id != "weapon2") {
              assert.equal(slot.edit.signetLevel(), "1");
          }
      }
      $("#btn-all-lvl-max").click();
      for (var slotId in swlcalc.gear.slots){
          var slot = swlcalc.gear.slots[slotId];
          assert.equal(slot.edit.equipmentLevel(), "35");
          assert.equal(slot.edit.glyphLevel(), "20");
          if (slot.id != "weapon" && slot.id != "weapon2") {
              assert.equal(slot.edit.signetLevel(), "20");
          }
      }
});

QUnit.test("should reset all slots", function(assert) {
    swlcalc.buttonBar.resetGear();

    assert.equal($("#stat-ilvl").text(), "0");
    assert.equal($("#stat-power-rating").text(), "0");
    assert.equal($("#stat-weapon-power").text(), "0");

    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.equal(slot.edit.equipmentId(), "none");
        assert.equal(slot.edit.glyphId(), "none");
        assert.equal(slot.edit.signetId(), "none");
    }
});
