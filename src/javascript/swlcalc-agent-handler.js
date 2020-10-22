var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};
swlcalc.agenthandler = swlcalc.agenthandler || {};

swlcalc.gear.AgentSlotHandler = function AgentSlotHandler(id) {

    var agentObj = swlcalc.gear.agents[id];

    this.init = function() {
        this.bindEvents();
        this.addAgentsToSelect();
    };

    /**
     * Associates the right processing to each controller.
     */
    this.bindEvents = function() {
        agentObj.el.id.change(this.handleIdChange);
        agentObj.el.level.change(this.handleLevelChange);
    };

    /**
     * Loads items (swlcalc-data-agents) as options list in the agent#id-id select
     */
    this.addAgentsToSelect = function() {
        var agents = swlcalc.data.agents.slice(1); // first element (None) should not be sorted

        //sort alphabetically for a better ergonomy
        agents.sort(function(a, b) {
            return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
        });

        agentObj.el.id.append($('<option>', {
            value: swlcalc.data.agents[0].id,
            text:  swlcalc.data.agents[0].name
        }));
        agents.forEach(function(agent) {
            agentObj.el.id.append($('<option>', {
                value: agent.id,
                text:  agent.name
            }));
        });
    };

    /**
     * Handler for agent#id-id
     */
    this.handleIdChange = function(event) {
        agentObj.updateId();
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
    };

    /**
     * Handler for agent#id-level
     */
    this.handleLevelChange = function(event) {
        agentObj.updateLevel();
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
    };
};
