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
    this.updateAgent = function() {
        var newId = this.agentId();
        this.agentData = swlcalc.data.agents[newId];

        if (newId == '0') {
            this.text25(this.agentData.lvl25_value);
            this.text50(this.agentData.lvl50_value);
        } else {
            if (this.agentData.lvl25_type == "miscellaneous") {
                this.text25(this.agentData.lvl25_value);
            } else {
                this.text25('<span class="stat-value gear">+' + this.agentData.lvl25_value + "</span> " + swlcalc.data.stat_mapping.to_pretty[this.agentData.lvl25_type]);
            }

            if (this.level() == "50") {
                if (this.agentData.lvl50_type == "miscellaneous") {
                    this.text50(this.agentData.lvl50_value);
                } else {
                    this.text50('<span class="stat-value gear">+' + this.agentData.lvl50_value + "</span> " + swlcalc.data.stat_mapping.to_pretty[this.agentData.lvl50_type]);
                }
            } else {
                this.text50("");
            }
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
};
