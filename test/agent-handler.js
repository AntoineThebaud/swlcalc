
QUnit.module("agent-handler-dom", {
    beforeEach: function(assert) {
        renderAgents();
    }
});

QUnit.test("should have required all agent controllers in the DOM", function(assert) {
    for (var index = 1; index <= 3; index++) {
        assert.ok($('#agent' + index + '-id').length !== 0, "agent" + index + " id select exists");
        assert.ok($('#agent' + index + '-level').length !== 0, "agent" + index + " level select exists");
    }
});

QUnit.module("agent-handler-events", {
    beforeEach: function(assert) {
        includeAgents();
    }
});

QUnit.test("should have required event listeners for change on agent controllers in the DOM", function(assert) {
    for (var index = 1; index <= 3; index++) {
        assert.ok($._data($('#agent' + index + '-id').get(0), "events").change instanceof Array, "agent" + index + " id has a change event");
        assert.ok($._data($('#agent' + index + '-level').get(0), "events").change instanceof Array, "agent" + index + " level has a change event");
    }
});

QUnit.module("agent-handler-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
    }
});

QUnit.test("should have fill agents list", function(assert) {
    for (var index in swlcalc.gear.agents) {
        var agent = swlcalc.gear.agents[index];
        assert.equal($("#agent" + (parseInt(index) + 1) + "-id option").length, swlcalc.data.agents.length, "Should have populated agents lists for agent" + (parseInt(index) + 1) + "-id dropdown");
    }
});
