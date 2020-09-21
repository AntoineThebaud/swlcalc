var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Agent = function Agent(id) {
    this.id = id;
    this.agentData = swlcalc.data.agents[0]

    this.el = {
        agentId: $('#agent' + this.id + '-agentId'),
        level: $('#agent' + this.id + '-level'),
        text25: $('#agent' + this.id + '-text25'),
        text50: $('#agent' + this.id + '-text50'),
    };

    /**
     * Update elements related to agent's id
     */
    this.updateAgentId = function() {
        var newId = this.agentId();
        this.agentData = swlcalc.data.agents[newId];

        this.text25(this.displayBonus(this.agentData, "25"));

        this.updateAgentLevel();
    };

    /**
     * Update elements related to agent's level
     */
    this.updateAgentLevel = function() {
        if (this.level() == "50") {
            this.text50(this.displayBonus(this.agentData, "50"));
        } else {
            this.text50("");
        }
    };

    /**
     * Getter/Setter for agent#id-agentId
     */
    this.agentId = function() {
        if (arguments.length == 1) {
            this.el.agentId.val(arguments[0]);
        } else {
            return this.el.agentId.val();
        }
    };

    /**
     * Getter/Setter for agent#id-level
     */
    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    /**
     * Getter/Setter for agent#id-text25
     */
    this.text25 = function() {
        if (arguments.length == 1) {
            this.el.text25.html(arguments[0]);
        } else {
            return this.el.text25.html();
        }
    };

    /**
     * Getter/Setter for agent#id-text50
     */
    this.text50 = function() {
        if (arguments.length == 1) {
            this.el.text50.html(arguments[0]);
        } else {
            return this.el.text50.html();
        }
    };

    /**
     * Reset the agent by setting default values for each select
     */
    this.reset = function() {
        this.el.agentId.prop("selectedIndex", 0);
        this.el.level.prop("selectedIndex", 0);

        this.el.agentId.change();
        this.el.level.change();
    };

    /**
     * Returns the minimum level available for this agent
     */
    this.minLvl = function() {
        return this.el.level[0].options[0].value;
    };

    /**
     * Returns the maximum level available for this agent
     */
    this.maxLvl = function() {
        var dropdownRows = this.el.level[0].options
        return dropdownRows[dropdownRows.length - 1].value;
    };

    this.displayBonus = function(agentData, level) {
        if (agentData.levels[level].type == "miscellaneous" || agentData.levels[level].type == "empty") {
            return agentData.levels[level].value;
        } else {
            return '<span class="stat-value gear">+' + agentData.levels[level].value + "</span> " + swlcalc.data.stat_mapping.to_pretty[agentData.levels[level].type];
        }
    };
};
