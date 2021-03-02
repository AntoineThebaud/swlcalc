
QUnit.module("buttonbar-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderButtonbar();
        renderAnimaAllocation();
        renderPassives();
        initiateHandlers();
        initiateSummary();
        initiateButtonBar();
        initiateAnimaAllocation();
        initiatePassives();
        createTankBuild();
    }
});

QUnit.test("should have required buttonbar buttons in DOM", function(assert) {
    assert.ok($("#btn-all-standard").length !== 0, "all-standard button exists");
    assert.ok($("#btn-all-superior").length !== 0, "all-superior button exists");
    assert.ok($("#btn-all-epic").length !== 0, "all-epic button exists");
    assert.ok($("#btn-all-mythic").length !== 0, "all-mythic button exists");
    assert.ok($("#btn-all-legendary").length !== 0, "all-legendary button exists");
    assert.ok($("#btn-reset").length !== 0, "reset button exists");
});

QUnit.test("should set rarity on all slots", function(assert) {
    var mixedRarities = ["epic", "standard", "legendary", "superior", "mythic"];

    for (var r = 0; r < mixedRarities.length; r++) {
        $("#btn-all-" + mixedRarities[r]).click();
        for (var slotId in swlcalc.gear.slots){
            var slot = swlcalc.gear.slots[slotId];
            assert.equal(slot.edit.getEquipmentRarity(), mixedRarities[r]);
            assert.equal(slot.edit.getGlyphRarity(), mixedRarities[r]);
            if (slot.id != "weapon" && slot.id != "weapon2") {
                assert.equal(slot.edit.getSignetRarity(), mixedRarities[r]);
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
            assert.equal(slot.edit.getEquipmentQuality(), mixedQualities[r]);
            assert.equal(slot.edit.getGlyphQuality(), mixedQualities[r]);
        }
    }
});

QUnit.test("should set min level on all slots", function(assert) {
      $("#btn-all-lvl-min").click();

      for (var slotId in swlcalc.gear.slots){
          var slot = swlcalc.gear.slots[slotId];
          assert.equal(slot.edit.getEquipmentLevel(), "1");
          assert.equal(slot.edit.getGlyphLevel(), "1");
          if (slot.id != "weapon" && slot.id != "weapon2") {
              assert.equal(slot.edit.getSignetLevel(), "1");
          }
      }
      for (var index in swlcalc.gear.agents) {
          var agent = swlcalc.gear.agents[index];
          assert.equal(agent.getLevel(), "25");
      }
});

QUnit.test("should set max level on all slots", function(assert) {
      $('#btn-all-mythic').click();

      $("#btn-all-lvl-max").click();

      for (var slotId in swlcalc.gear.slots){
          var slot = swlcalc.gear.slots[slotId];
          assert.equal(slot.edit.getEquipmentLevel(), "35");
          assert.equal(slot.edit.getGlyphLevel(), "20");
          if (slot.id != "weapon" && slot.id != "weapon2") {
              assert.equal(slot.edit.getSignetLevel(), "20");
          }
      }
      for (var index in swlcalc.gear.agents) {
          var agent = swlcalc.gear.agents[index];
          assert.equal(agent.getLevel(), "50");
      }
});

QUnit.test("should reset all slots", function(assert) {
    swlcalc.buttonBar.resetGear();

    assert.equal($("#stat-ilvl").text(), "0");
    assert.equal($("#stat-power-rating").text(), "0");
    assert.equal($("#stat-weapon-power").text(), "0");

    for (var slotId in swlcalc.gear.slots) {
        var slot = swlcalc.gear.slots[slotId];
        assert.equal(slot.edit.getEquipmentId(), "none");
        assert.equal(slot.edit.getGlyphId(), "none");
        assert.equal(slot.edit.getSignetId(), "none");
    }
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.equal(agent.getId(), "0");
    }
});
