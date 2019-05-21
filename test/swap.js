
QUnit.module("swap-integration-tests", {
    beforeEach: function(assert) {
        renderSlots();
        initiateSwapHandlers();
        initiateSelectHandlers();
        initiateSummary();
    }
});

QUnit.test("should have primary weapon drawn and secondary weapon sheathed", function(assert) {
    assert.ok($('#weapon-active').is(":visible"), "primary active");
    assert.ok(!$('#weapon2-active').is(":visible"), "secondary passive");
});

QUnit.test("should swap weapon from primary to secondary", function(assert) {
    swlcalc.gear.slots.weapon2.el.recapSection.click();

    assert.ok(!$('#weapon-active').is(":visible"), "primary passive");
    assert.ok($('#weapon2-active').is(":visible"), "secondary active");
});

QUnit.test("should swap weapon from primary to secondary and back again", function(assert) {
    swlcalc.gear.slots.weapon2.el.recapSection.click();
    swlcalc.gear.slots.weapon.el.recapSection.click();

    assert.ok($('#weapon-active').is(":visible"), "primary active");
    assert.ok(!$('#weapon2-active').is(":visible"), "secondary passive");
});
