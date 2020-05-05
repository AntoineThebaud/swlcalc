var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Agent = function Agent(id) {
    this.id = id;

    this.el = {
        agentId: $('#agent' + this.id + '-id'),
        agentText: $('#agent' + this.id + '-text'),
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

          this.agentText(newAgentData.lvl50_support_value + " - " + newAgentData.lvl50_support_type);
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
     * Getter/Setter for agent#id-text
     */
    this.agentText = function() {
        if (arguments.length == 1) {
            this.el.agentText.text(arguments[0]);
        } else {
            return this.el.agentText.text();
        }
    };
};
