var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};
swlcalc.agenthandler = swlcalc.agenthandler || {};

swlcalc.gear.AgentSlotHandler = function AgentSlotHandler(id) {

    var agentObj = swlcalc.gear.agents[id];

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
    this.handleIdChange = function(event) {
        agentObj.updateId();
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
         /* TODO : calling swlcalc.summary.updateOtherBonuses() a is workaround to solve a display bug in the summary (%d shown instead of computed value).
          * Let's take worst case scenario (even if dont exist) : an agent that brings AR bonus + Proc damage effect affected by CP.
          * In such case we need to : update the summary to compute total AR and new CP, then compute the final value for proc damage for the agent slot,
          * then propagate this other bonus to the "Other bonuses" section of the Summary.
          * I.e in short : 1) update Summary -> 2) update Agent slot -> 3) update Summary
          * The best workaround found for now was to call "only" swlcalc.summary.updateOtherBonuses() for the step 3).
          */
        swlcalc.summary.updateOtherBonuses();
    };

    /**
     * Handler for agent#id-level
     */
    this.handleLevelChange = function(event) {
        agentObj.updateLevel();
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
        swlcalc.summary.updateOtherBonuses(); // TODO : workaround, see previous comment in handleIdChange()
    };
};
