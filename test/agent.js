
QUnit.module("agent-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        renderPassives();
        renderAnimaAllocation();
        initiateHandlers();
        initiateAnimaAllocation();
        initiatePassives();
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
    assert.equal(swlcalc.gear.agents[1].getId(), "42");
    swlcalc.gear.agents[1].setId("66");
    assert.equal(swlcalc.gear.agents[1].getId(), "66");
});

QUnit.test("should get and set agent's level", function(assert) {
    assert.equal(swlcalc.gear.agents[1].getLevel(), "50");
    swlcalc.gear.agents[1].setLevel("25");
    assert.equal(swlcalc.gear.agents[1].getLevel(), "25");
});

QUnit.test("should get and set agent's text25", function(assert) {
    assert.equal(swlcalc.gear.agents[0].getText25(), '<span class="stat-value gear">+1000</span> Protection');
    swlcalc.gear.agents[0].setText25("placeholder");
    assert.equal(swlcalc.gear.agents[0].getText25(), "placeholder");
});

QUnit.test("should get and set agent's text50", function(assert) {
    assert.equal(swlcalc.gear.agents[0].getText50(), "");
    swlcalc.gear.agents[0].setText50('<span class="stat-value gear">+1000</span> Carabistouilles');
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value gear">+1000</span> Carabistouilles');
});

QUnit.test("should update elements related to agent's id", function(assert) {
    assert.equal(swlcalc.gear.agents[1].getText25(), '<span class="stat-value gear">+490</span> Hit Points');
    assert.equal(swlcalc.gear.agents[1].getText50(), "<span class=\"stat-value const\">+7%</span> Hammer Damage");

    swlcalc.gear.agents[1].setId("15");
    swlcalc.gear.agents[1].updateId();

    assert.equal(swlcalc.gear.agents[1].getText25(), '<span class="stat-value gear">+325</span> Heal Rating');
    assert.equal(swlcalc.gear.agents[1].getText50(), '<span class="stat-value heal">%d</span> Healing on Critical Heals');
});

QUnit.test("should update elements related to agent's level", function(assert) {
    assert.equal(swlcalc.gear.agents[0].getText25(), '<span class="stat-value gear">+1000</span> Protection');
    assert.equal(swlcalc.gear.agents[0].getText50(), '');

    swlcalc.gear.agents[0].setLevel("50");
    swlcalc.gear.agents[0].updateLevel();

    assert.equal(swlcalc.gear.agents[0].getText25(), '<span class="stat-value gear">+1000</span> Protection');
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value gear">+500</span> Defense Rating');
});

QUnit.test("should reset the agent by setting default values for each select", function(assert) {
    assert.equal(swlcalc.gear.agents[1].getId(), '42');
    assert.equal(swlcalc.gear.agents[1].getText25(), '<span class="stat-value gear">+490</span> Hit Points');
    assert.equal(swlcalc.gear.agents[1].getText50(), '<span class=\"stat-value const\">+7%</span> Hammer Damage');

    swlcalc.gear.agents[1].reset();

    assert.equal(swlcalc.gear.agents[1].getId(), '0');
    assert.equal(swlcalc.gear.agents[1].getText25(), 'Empty agent slot');
    assert.equal(swlcalc.gear.agents[1].getText50(), '');
});

QUnit.test("should return the minimum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].minLvl(), '25');
});

QUnit.test("should return the maximum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].maxLvl(), '50');
});
