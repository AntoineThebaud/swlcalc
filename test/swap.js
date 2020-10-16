
QUnit.module("swap-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderButtonbar();
        renderAnimaAllocation();
        initiateButtonBar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateSwapHandlers();
        initiateHandlers();
        initiateSummary();
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
