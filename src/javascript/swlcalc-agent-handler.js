var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};
swlcalc.agenthandler = swlcalc.agenthandler || {};

swlcalc.gear.AgentSlotHandler = function AgentSlotHandler(id) {

    var agentObj = swlcalc.gear.agents[id];
    var previousId = 0;
    var previousAgentLevel = "25";

    this.init = function() {
        this.bindEvents();
        this.addAgentsToSelect();
        // replace agent dropdown by enhanced version (text search..)
        agentObj.el.id.select2();
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
    // TODO : maybe too complex.. any way to simplify ?
    this.handleIdChange = function(event) {
        agentObj.updateId();

        var newAgentData      = swlcalc.data.agents[agentObj.getId()];
        var previousAgentData = swlcalc.data.agents[previousId];

        // Update primary stats if new or previous agent equiped is/was bringing a bonus to them
        if (swlcalc.util.isPrimaryStat(newAgentData.bonuses["25"].type)
            || (agentObj.getLevel() == "50" && swlcalc.util.isPrimaryStat(newAgentData.bonuses["50"].type))
            || swlcalc.util.isPrimaryStat(previousAgentData.bonuses["25"].type)
            || (agentObj.getLevel() == "50" && swlcalc.util.isPrimaryStat(previousAgentData.bonuses["50"].type))
        ) {
            swlcalc.summary.updatePrimaryStats();
            swlcalc.gear.updateAllDescriptions();
            swlcalc.summary.updateOtherBonuses();
        }

        // Update any secondary stat that new or previous agent is/was bringing
        if (swlcalc.util.isSecondaryStat(newAgentData.bonuses["25"].type)) {
            swlcalc.summary.updateSecondaryStat(newAgentData.bonuses["25"].type);
        }

        if (agentObj.getLevel() == "50" && swlcalc.util.isSecondaryStat(newAgentData.bonuses["50"].type)) {
            swlcalc.summary.updateSecondaryStat(newAgentData.bonuses["50"].type);
        }

        if (swlcalc.util.isSecondaryStat(previousAgentData.bonuses["25"].type)) {
            swlcalc.summary.updateSecondaryStat(previousAgentData.bonuses["25"].type);
        }

        if (agentObj.getLevel() == "50" && swlcalc.util.isSecondaryStat(previousAgentData.bonuses["50"].type)) {
            swlcalc.summary.updateSecondaryStat(previousAgentData.bonuses["50"].type);
        }

        // Update other bonuses in case of any change of miscellaneous bonus
        if (newAgentData.bonuses["25"].type == "miscellaneous"
            || (agentObj.getLevel() == "50" && newAgentData.bonuses["50"].type == "miscellaneous")
            || previousAgentData.bonuses["25"].type == "miscellaneous"
            || (agentObj.getLevel() == "50" && previousAgentData.bonuses["50"].type == "miscellaneous")
        ) {
            swlcalc.gear.updateAllDescriptions(); // TODO needed for %d replacement but not optimal..
            swlcalc.summary.updateOtherBonuses();
        }

        previousId = agentObj.getId();
    };

    /**
     * Handler for agent#id-level
     */
    this.handleLevelChange = function(event) {
        agentObj.updateLevel();

        var l50type = swlcalc.data.agents[agentObj.getId()].bonuses["50"].type;

        if (swlcalc.util.isPrimaryStat(l50type)) {
            swlcalc.summary.updatePrimaryStats();
            swlcalc.gear.updateAllDescriptions();
            swlcalc.summary.updateOtherBonuses();
        } else if (swlcalc.util.isSecondaryStat(l50type)) {
            swlcalc.summary.updateSecondaryStat(l50type);
        } else if (l50type == "miscellaneous") {
            swlcalc.gear.updateAllDescriptions(); // TODO needed for %d replacement but not optimal..
            swlcalc.summary.updateOtherBonuses();
        }
    };
};
