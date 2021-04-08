
QUnit.module("buttonbar-dom", {
    beforeEach: function(assert) {
        renderButtonbar();
    }
});

QUnit.test("should have required buttonbar buttons in DOM", function(assert) {
    assert.ok($("#btn-all-standard").length !== 0, "all-standard button exists");
    assert.ok($("#btn-all-superior").length !== 0, "all-superior button exists");
    assert.ok($("#btn-all-epic").length !== 0, "all-epic button exists");
    assert.ok($("#btn-all-mythic").length !== 0, "all-mythic button exists");
    assert.ok($("#btn-all-legendary").length !== 0, "all-legendary button exists");
    assert.ok($("#btn-reset").length !== 0, "reset button exists");

    assert.ok($("#btn-all-1-pip").length !== 0, "all-1-pip button exists");
    assert.ok($("#btn-all-2-pip").length !== 0, "all-2-pip button exists");
    assert.ok($("#btn-all-3-pip").length !== 0, "all-3-pip button exists");
    assert.ok($("#btn-all-4-pip").length !== 0, "all-4-pip button exists");

    assert.ok($("#btn-all-lvl-min").length !== 0, "all-lvl-min button exists");
    assert.ok($("#btn-all-lvl-max").length !== 0, "all-lvl-max button exists");

    assert.ok($("#btn-reset").length !== 0, "reset button exists");
});

QUnit.module("buttonbar-integration-tests", {
    beforeEach: function(assert) {
        includeButtonBar();
        includeGear();
        includeAnimaAllocation();
        includeSummary();
        includePassives();

        createShuffledBuild();
    }
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

QUnit.test("should reset everything", function(assert) {
    swlcalc.buttonBar.resetAll();

    // check everything has been reseted (picks few elements for each case)

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

    assert.equal($("#stat-ilvl").text(), "0");
    assert.equal($("#stat-power-rating").text(), "0");
    assert.equal($("#stat-weapon-power").text(), "0");

    assert.equal($("#anima-allocation-damage-val").text(), "100");
    assert.equal($("#anima-allocation-healing-val").text(), "0");

    assert.equal($("#passive-attack-rating-base-slider").val(), '2000');
    assert.equal($("#passive-heal-rating-passive-skills-slider").val(), '1500');
    assert.equal($("#passive-critical-chance-expertise-weapon1").text(), '7.5');
    assert.equal($("#passive-protection-passive-skills").text(), '2259');
});
