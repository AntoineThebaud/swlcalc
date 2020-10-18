
QUnit.module("agent-handler-unit-tests", {
    beforeEach: function(assert) {
        renderGear();
        initiateHandlers();
    }
});

QUnit.test("should have required all agent controllers in the DOM", function(assert) {
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.ok(agent.el.id.length !== 0);
        assert.ok(agent.el.level.length !== 0);
    }
});

QUnit.test("should have required event listeners for change on agent controllers in the DOM", function(assert) {
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.ok($._data(agent.el.id.get(0), "events").change instanceof Array);
        assert.ok($._data(agent.el.level.get(0), "events").change instanceof Array);
    }
});

QUnit.test("should have fill agents list", function(assert) {
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.equal($("#agent" + (parseInt(index) + 1) + "-id option").length, swlcalc.data.agents.length);
    }
});
