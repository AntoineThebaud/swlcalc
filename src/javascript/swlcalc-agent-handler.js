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
        agentObj.el.agentId.change(this.handleAgentChange);
        agentObj.el.level.change(this.handleAgentChange);
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

        agentObj.el.agentId.append($('<option>', {
            value: swlcalc.data.agents[0].id,
            text:  swlcalc.data.agents[0].name
        }));
        agents.forEach(function(agent) {
            agentObj.el.agentId.append($('<option>', {
                value: agent.id,
                text:  agent.name
            }));
        });
    };

    /**
     * Handler for agent#id-id & agent#id-level
     */
    this.handleAgentChange = function(event) {
        agentObj.updateAgent();
        swlcalc.summary.updateAllStats();
    };
};
