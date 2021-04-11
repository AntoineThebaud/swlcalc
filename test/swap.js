
QUnit.module("swap-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();
        initiateSwapHandlers();

        createShuffledBuild();
    }
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
    swlcalc.gear.slots.weapon2.recap.el.section.click();

    assert.equal($("#stat-weapon-power").html(), "2780");
    assert.equal($("#stat-combat-power").html(), "532.6");
    assert.equal($("#stat-healing-power").html(), "107.7");
    assert.equal($("#stat-critical-rating").html(), "+960");
    assert.equal($("#stat-critical-chance").html(), "11.3%");
    assert.equal($("#stat-critical-power-percentage").html(), "83.3%");
    assert.equal($("#stat-protection").html(), "5850");
    assert.equal($("#stat-damage-mitigation").html(), "19.3%");
    assert.equal($("#stat-evade-rating").html(), "+1192");
    assert.equal($("#stat-evade-chance").html(), "8.2%");
});
