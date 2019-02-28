
QUnit.module("swap-button-integration-tests", {
    beforeEach: function(assert) {
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        initiateSummary();
    }
});

QUnit.test("should have primary weapon drawn and secondary weapon sheathed", function(assert) {
    assert.ok(swlcalc.gear.slots.weapon.el.div.is(":visible"), "primary visible");
    assert.ok(!swlcalc.gear.slots.weapon2.el.div.is(":visible"), "secondary hidden");
});

QUnit.test("should swap weapon from primary to secondary", function(assert) {
    $("#weapon-swap-weapon").click();

    assert.ok(!swlcalc.gear.slots.weapon.el.div.is(":visible"), "primary hidden");
    assert.ok(swlcalc.gear.slots.weapon2.el.div.is(":visible"), "secondary visible");
});

QUnit.test("should swap weapon from primary to secondary and back again", function(assert) {
    $("#weapon-swap-weapon").click();
    $("#weapon2-swap-weapon").click();

    assert.ok(swlcalc.gear.slots.weapon.el.div.is(":visible"), "primary visible");
    assert.ok(!swlcalc.gear.slots.weapon2.el.div.is(":visible"), "secondary hidden");
});
