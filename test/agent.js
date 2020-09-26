
QUnit.module("agent-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderSummary();
        renderButtonbar(); // TODO/REFACTOR this is needed otherwise anima allocation is undefined. to change ? Save anima allocation as attribute to gear maybe ?
        initiateButtonBar(); // see previous comment
        initiateHandlers();
        createTankBuild();
    }
});

QUnit.test("should have required components in the DOM", function(assert) {
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.ok(agent.el.id.length !== 0);
        assert.ok(agent.el.level.length !== 0);
        assert.ok(agent.el.text25.length !== 0);
        assert.ok(agent.el.text50.length !== 0);
    }
});

QUnit.test("should get and set agent's id", function(assert) {
    assert.equal(swlcalc.gear.agents[1].id(), "42");
    swlcalc.gear.agents[1].id("66");
    assert.equal(swlcalc.gear.agents[1].id(), "66");
});

QUnit.test("should get and set agent's level", function(assert) {
    assert.equal(swlcalc.gear.agents[1].level(), "50");
    swlcalc.gear.agents[1].level("25");
    assert.equal(swlcalc.gear.agents[1].level(), "25");
});

QUnit.test("should get and set agent's text25", function(assert) {
    assert.equal(swlcalc.gear.agents[0].text25(), '<span class="stat-value gear">+1000</span> Protection');
    swlcalc.gear.agents[0].text25("placeholder");
    assert.equal(swlcalc.gear.agents[0].text25(), "placeholder");
});

QUnit.test("should get and set agent's text50", function(assert) {
    assert.equal(swlcalc.gear.agents[0].text50(), "");
    swlcalc.gear.agents[0].text50('<span class="stat-value gear">+1000</span> Carabistouilles');
    assert.equal(swlcalc.gear.agents[0].text50(), '<span class="stat-value gear">+1000</span> Carabistouilles');
});

QUnit.test("should update elements related to agent's id", function(assert) {
    assert.equal(swlcalc.gear.agents[1].text25(), '<span class="stat-value gear">+490</span> Hit Points');
    assert.equal(swlcalc.gear.agents[1].text50(), "+7% Hammer Damage");

    swlcalc.gear.agents[1].id("15");
    swlcalc.gear.agents[1].updateId();

    assert.equal(swlcalc.gear.agents[1].text25(), '<span class="stat-value gear">+325</span> Heal Rating');
    assert.equal(swlcalc.gear.agents[1].text50(), '<span class="bonus-val heal">%d</span> Healing on Critical Heals');
});

QUnit.test("should update elements related to agent's level", function(assert) {
    assert.equal(swlcalc.gear.agents[0].text25(), '<span class="stat-value gear">+1000</span> Protection');
    assert.equal(swlcalc.gear.agents[0].text50(), '');

    swlcalc.gear.agents[0].level("50");
    swlcalc.gear.agents[0].updateLevel();

    assert.equal(swlcalc.gear.agents[0].text25(), '<span class="stat-value gear">+1000</span> Protection');
    assert.equal(swlcalc.gear.agents[0].text50(), '<span class="stat-value gear">+500</span> Defense Rating');
});

QUnit.test("should reset the agent by setting default values for each select", function(assert) {
    assert.equal(swlcalc.gear.agents[1].id(), '42');
    assert.equal(swlcalc.gear.agents[1].text25(), '<span class="stat-value gear">+490</span> Hit Points');
    assert.equal(swlcalc.gear.agents[1].text50(), '+7% Hammer Damage');

    swlcalc.gear.agents[1].reset();

    assert.equal(swlcalc.gear.agents[1].id(), '0');
    assert.equal(swlcalc.gear.agents[1].text25(), 'Empty agent slot');
    assert.equal(swlcalc.gear.agents[1].text50(), '');
});

QUnit.test("should return the minimum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].minLvl(), '25');
});

QUnit.test("should return the maximum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].maxLvl(), '50');
});

QUnit.test("should prettify the given agent bonus based on its type", function(assert) {
    assert.equal(swlcalc.gear.agents[0].prettifyBonus(swlcalc.data.agents[5], '25'), '<span class="stat-value gear">+490</span> Hit Points') ;
});