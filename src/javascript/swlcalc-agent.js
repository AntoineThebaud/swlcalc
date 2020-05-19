var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Agent = function Agent(id) {
    this.id = id;

    this.el = {
        agentId: $('#agent' + this.id + '-id'),
        agentLevel: $('#agent' + this.id + '-level'),
        agentText25: $('#agent' + this.id + '-text25'),
        agentText50: $('#agent' + this.id + '-text50'),
    };

    /**
     * Update elements related to agent's id
     */
    this.updateAgent = function() {
      var newId = this.agentId();

      if (newId == 'none') {
          this.agentText("empty agent slot");
      } else {
          var newAgentData = swlcalc.data.agents[newId - 1];

          this.agentText25(newAgentData.lvl25_support_value + " - " + newAgentData.lvl25_support_type);
          if (this.agentLevel() == "50") {
              this.el.agentText50.show();
              this.agentText50(newAgentData.lvl50_support_value + " - " + newAgentData.lvl50_support_type);
          } else {
              this.el.agentText50.hide();
              this.agentText50("");
          }
      }
    };

    /**
     * Getter/Setter for agent#id-id
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
    this.agentLevel = function() {
        if (arguments.length == 1) {
            this.el.agentLevel.val(arguments[0]);
        } else {
            return this.el.agentLevel.val();
        }
    };

    /**
     * Getter/Setter for agent#id-text25
     */
    this.agentText25 = function() {
        if (arguments.length == 1) {
            this.el.agentText25.text(arguments[0]);
        } else {
            return this.el.agentText25.text();
        }
    };

    /**
     * Getter/Setter for agent#id-text50
     */
    this.agentText50 = function() {
        if (arguments.length == 1) {
            this.el.agentText50.text(arguments[0]);
        } else {
            return this.el.agentText50.text();
        }
    };
};
