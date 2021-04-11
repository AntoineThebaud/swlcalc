
QUnit.module("agent-handler-dom", {
    beforeEach: function(assert) {
        renderAgents();
    }
});

QUnit.test("should have required components in the DOM", function(assert) {
    for (var index = 1; index <= 3; index++) {
        // NB : we dont check -id nor -level because already covered in agent-handler tests
        assert.ok($('#agent' + index + '-text25').length !== 0, "agent" + index + " text25 exists");
        assert.ok($('#agent' + index + '-text50').length !== 0, "agent" + index + " text50 exists");
    }
});

QUnit.module("agent-unit-tests", {
    beforeEach: function(assert) {
        includeAgents();
    }
});

QUnit.test("should get agent's id", function(assert) {
    assert.equal(swlcalc.gear.agents[1].getId(), "0");
});

QUnit.test("should get agent's level", function(assert) {
    assert.equal(swlcalc.gear.agents[1].getLevel(), "25");
});

QUnit.test("should get and set agent's text25", function(assert) {
    swlcalc.gear.agents[0].setText25("placeholder");
    assert.equal(swlcalc.gear.agents[0].getText25(), "placeholder");
});

QUnit.test("should get and set agent's text50", function(assert) {
    swlcalc.gear.agents[0].setText50('<span class="stat-value gear">+1000</span> Carabistouilles');
    assert.equal(swlcalc.gear.agents[0].getText50(), '<span class="stat-value gear">+1000</span> Carabistouilles');
});

QUnit.test("should return the minimum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].minLvl(), '25');
});

QUnit.test("should return the maximum level available for this agent", function(assert) {
    assert.equal(swlcalc.gear.agents[0].maxLvl(), '50');
});

QUnit.module("agent-integration-tests", {
    beforeEach: function(assert) {
        includeCoreModules();

        createShuffledBuild();
    }
});

QUnit.test("should set agent's id and do updates accordingly", function(assert) {
    swlcalc.gear.agents[2].setId("15");

    assert.equal(swlcalc.gear.agents[2].getText25(), '<span class="stat-value gear">+325</span> Heal Rating');
    assert.equal(swlcalc.gear.agents[2].getText50(), '<span class="stat-value heal">29</span> Healing on Critical Heals');
    assert.equal($("#stat-agent3-bonus50").text(), "29 Healing on Critical Heals");
});

QUnit.test("should set agent's level and do updates accordingly", function(assert) {
    swlcalc.gear.agents[1].setLevel("50");

    assert.equal(swlcalc.gear.agents[1].getText25(), '<span class="stat-value gear">+490</span> Hit Points');
    assert.equal(swlcalc.gear.agents[1].getText50(), '<span class="stat-value const">+7%</span> Blood Damage');
    assert.equal($("#stat-agent2-bonus50").text(), "+7% Blood Damage");
});

QUnit.test("should reset the agent by setting default values for each select", function(assert) {
    swlcalc.gear.agents[0].reset();

    assert.equal(swlcalc.gear.agents[0].getId(), '0');
    assert.equal(swlcalc.gear.agents[0].getText25(), 'Empty agent slot');
    assert.equal(swlcalc.gear.agents[0].getText50(), '');
    assert.equal($("#stat-agent1-bonus50").text(), "");
});
