var swlcalc = swlcalc || {};

swlcalc.gear = function() {

    /*
     * Map to store the Slot objects
     */
    var slots = {};

    /*
     * Array to store the Agent objects
     */
    var agents = [];

    /**
     * This method can only be called after the document is ready
     */
    var init = function() {
        // add gear slots
        for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
            var slotData = swlcalc.data.templateData.slots[i];
            slots[slotData.id] = new swlcalc.gear.Slot(slotData);
        }
        drawPrimaryWeapon();
        // add agent slots
        for (var i = 0; i < 3; i++) {
            agents[i] = new swlcalc.gear.Agent(i + 1);
        }
    };

    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        slots.weapon.draw();
        slots.weapon2.sheath();
    };

    /**
     * Returns the total number of slots in the gear
     */
    var nbSlots = function() {
        return Object.keys(slots).length;
    };

    /**
     * Returns the total number of agents in the gear
     */
    var nbAgents = function() {
        return agents.length;
    };

    /**
     * Returns the id of the weapon currently active
     */
    var activeWeapon = function() {
        if (slots.weapon.active) {
            return slots.weapon.id;
        } else {
            return slots.weapon2.id;
        }
    };

    /**
     * Resets all slots
     */
    var reset = function() {
        for (var id in slots) {
            slots[id].reset();
        }

        for (var index in agents) {
            agents[index].reset();
        }
    };

    /**
     * Returns the list of slots states
     */
    var state = function() {
        var slotStates = {};
        for (var id in slots) {
            slotStates[id] = slots[id].state();
        }
        return slotStates;
    };

    /**
     * Returns the list of slots states (mapped version)
     */
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var id in slots) {
            mappedSlotStates[id] = slots[id].mappedState();
        }
        return mappedSlotStates;
    };


    /**
     * Launch an update on each equipment to refresh bonuses
     */
    var updateEquipmentsBonuses = function() {
        for (var id in slots) {
            slots[id].updateEquipmentBonuses();
        }
    };


    /**
     * Launch an update on each signet to refresh bonuses
     */
    var updateSignetsBonuses = function() {
        for (var id in slots) {
            slots[id].updateSignetBonus();
        }
    };

    /**
     * Launch an update on each agent to refresh bonuses
     */
    var updateAgentsBonuses = function() {
        var cp = swlcalc.summary.combatPower();
        var hp = swlcalc.summary.healingPower();

        for (var index in agents) {
            var l25 = agents[index].agentData.bonuses["25"];
            var l50 = agents[index].agentData.bonuses["50"];

            if (l25.varbonus != undefined) {
              var res = l25.value.replace("%d", Math.round(l25.varbonus.stat == "Combat Power" ? cp * l25.varbonus.coef : hp * l25.varbonus.coef));
              agents[index].setText25(res);
            } else if (agents[index].getLevel() == "50" && l50.varbonus != undefined) {
              var res = l50.value.replace("%d", Math.round(l50.varbonus.stat == "Combat Power" ? cp * l50.varbonus.coef : hp * l50.varbonus.coef));
              agents[index].setText50(res);
            }
        }
    };

    /**
     * Launch an update on each description (slot + agent), in order to display the right bonus values
     */
    var updateAllDescriptions = function() {
        updateEquipmentsBonuses();
        updateSignetsBonuses();
        updateAgentsBonuses();
    };

    var oPublic = {
        slots: slots,
        agents: agents,
        init: init,
        nbSlots: nbSlots,
        nbAgents: nbAgents,
        activeWeapon: activeWeapon,
        reset: reset,
        state: state,
        mappedState: mappedState,
        updateEquipmentsBonuses: updateEquipmentsBonuses,
        updateSignetsBonuses: updateSignetsBonuses,
        updateAgentsBonuses: updateAgentsBonuses,
        updateAllDescriptions: updateAllDescriptions
    };

    return oPublic;
}();
