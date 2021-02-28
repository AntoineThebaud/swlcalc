var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Agent = function Agent(index) {
    this.index = index;
    this.agentData = swlcalc.data.agents[0];

    this.el = {
        id: $('#agent' + this.index + '-id'),
        level: $('#agent' + this.index + '-level'),
        text25: $('#agent' + this.index + '-text25'),
        text50: $('#agent' + this.index + '-text50'),
    };


    /**************************************************************************
     * Accessors :
     * ---------------------------------------------------------------------- */
    /* ID : */
    this.getId = function() {
        return this.el.id.val();
    };
    this.setId = function(value) {
        this.el.id.val(value).change();
    };

    /* Level : */
    this.getLevel = function() {
        return this.el.level.val();
    };
    this.setLevel = function(value) {
        this.el.level.val(value).change();
    };

    /* text25 : */
    this.getText25 = function() {
        return this.el.text25.html();
    };
    this.setText25 = function(text) {
        this.el.text25.html(text);
    };

    /* text50 : */
    this.getText50 = function() {
        return this.el.text50.html();
    };
    this.setText50 = function(text) {
        this.el.text50.html(text);
    };

    /**************************************************************************/

    /**
     * Update elements related to agent's id
     */
    this.updateId = function() {
        var newId = this.getId();
        this.agentData = swlcalc.data.agents[newId];

        this.setText25(this.prettifyBonus("25"));

        this.updateLevel();
    };

    /**
     * Update elements related to agent's level
     */
    this.updateLevel = function() {
        if (this.getLevel() == "50") {
            this.setText50(this.prettifyBonus("50"));
        } else {
            this.setText50("");
        }
    };

    /**
     * Reset the agent by setting default values for each select
     */
    this.reset = function() {
        this.setId("0");
        this.setLevel("25");
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
    this.prettifyBonus = function(level) {
        var data = this.agentData.bonuses[level];

        if (data.type == "miscellaneous" || data.type == "empty") {
            return data.value;
        } else {
            return '<span class="stat-value gear">+' + data.value + "</span> " + swlcalc.data.statMapping.toPretty[data.type];
        }
    };
};
