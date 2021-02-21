var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Agent = function Agent(index) {
    this.index = index;
    this.agentData = swlcalc.data.agents[0]

    this.el = {
        id: $('#agent' + this.index + '-id'),
        level: $('#agent' + this.index + '-level'),
        text25: $('#agent' + this.index + '-text25'),
        text50: $('#agent' + this.index + '-text50'),
    };

    /**
     * Getter/Setter for agent#index-id
     */
    this.id = function() {
        if (arguments.length == 1) {
            this.el.id.val(arguments[0]);
        } else {
            return this.el.id.val();
        }
    };

    /**
     * Getter/Setter for agent#index-level
     */
    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    /**
     * Getter/Setter for agent#index-text25
     */
    this.text25 = function() {
        if (arguments.length == 1) {
            this.el.text25.html(arguments[0]);
        } else {
            return this.el.text25.html();
        }
    };

    /**
     * Getter/Setter for agent#index-text50
     */
    this.text50 = function() {
        if (arguments.length == 1) {
            this.el.text50.html(arguments[0]);
        } else {
            return this.el.text50.html();
        }
    };

    /**
     * Update elements related to agent's id
     */
    this.updateId = function() {
        var newId = this.id();
        this.agentData = swlcalc.data.agents[newId];

        this.text25(this.prettifyBonus(this.agentData, "25"));

        this.updateLevel();
    };

    /**
     * Update elements related to agent's level
     */
    this.updateLevel = function() {
        if (this.level() == "50") {
            this.text50(this.prettifyBonus(this.agentData, "50"));
        } else {
            this.text50("");
        }
    };

    /**
     * Reset the agent by setting default values for each select
     * (set val then call change() artificially to trigger the event handlers)
     */
    this.reset = function() {
        this.el.id.prop("selectedIndex", 0).change();
        this.el.level.prop("selectedIndex", 0).change();
    };

    /**
     * Return the minimum level available for this agent
     */
    this.minLvl = function() {
        return this.el.level[0].options[0].value;
    };

    /**
     * Return the maximum level available for this agent
     */
    this.maxLvl = function() {
        var dropdownRows = this.el.level[0].options
        return dropdownRows[dropdownRows.length - 1].value;
    };

    /**
     * Prettify the given agent bonus based on its type
     */
    this.prettifyBonus = function(agentData, level) {
        if (agentData.levels[level].type == "miscellaneous" || agentData.levels[level].type == "empty") {
            return agentData.levels[level].value;
        } else {
            return '<span class="stat-value gear">+' + agentData.levels[level].value + "</span> " + swlcalc.data.statMapping.toPretty[agentData.levels[level].type];
        }
    };
};
