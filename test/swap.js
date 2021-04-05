
QUnit.module("swap-unit-tests", {
    beforeEach: function(assert) {
        renderGearOLD();
        renderPassives();
        renderAnimaAllocation();
        renderSummary();
        initiateGearHandlers();
        initiateSummary();
        initiateAnimaAllocation();
        initiatePassives();
        initiateSwapHandlers();
        createTankBuild();
    }
});

QUnit.test("should have primary weapon drawn and secondary weapon sheathed", function(assert) {
    assert.ok(swlcalc.gear.slots.weapon.recap.el.weaponActive.is(":visible"), "primary active");
    assert.ok(!swlcalc.gear.slots.weapon2.recap.el.weaponActive.is(":visible"), "secondary passive");
});

QUnit.test("should swap weapon from primary to secondary", function(assert) {
    swlcalc.gear.slots.weapon2.recap.el.section.click();

    assert.ok(!swlcalc.gear.slots.weapon.recap.el.weaponActive.is(":visible"), "primary passive");
    assert.ok(swlcalc.gear.slots.weapon2.recap.el.weaponActive.is(":visible"), "secondary active");
});

QUnit.test("should swap weapon from primary to secondary and back again", function(assert) {
    swlcalc.gear.slots.weapon2.recap.el.section.click();
    swlcalc.gear.slots.weapon.recap.el.section.click();

    assert.ok(swlcalc.gear.slots.weapon.recap.el.weaponActive.is(":visible"), "primary active");
    assert.ok(!swlcalc.gear.slots.weapon2.recap.el.weaponActive.is(":visible"), "secondary passive");
});

QUnit.test("should swap weapons and affect summary accordingly", function(assert) {
    swlcalc.gear.slots.weapon2.edit.setEquipmentRarity("mythic");
    swlcalc.gear.slots.weapon2.edit.setGlyphId("critical-power");

    assert.equal($("#stat-weapon-power").html(), "1832");
    assert.equal($("#stat-critical-chance").html(), "13.8%");
    assert.equal($("#stat-critical-power-percentage").html(), "90.7%");

    swlcalc.gear.slots.weapon2.recap.el.section.click();

    assert.equal($("#stat-weapon-power").html(), "2830");
    assert.equal($("#stat-critical-chance").html(), "13.3%");
    assert.equal($("#stat-critical-power-percentage").html(), "93.6%");
});
