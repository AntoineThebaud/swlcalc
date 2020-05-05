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
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotData = swlcalc.data.template_data.slots[i];
            this.slots[slotData.id] = new swlcalc.gear.Slot(slotData);
        }
        drawPrimaryWeapon();
        // add agent slots
        for (var i = 1; i <= 3; i++) {
            this.agents[i] = new swlcalc.gear.Agent(i);
        }
    };

    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        swlcalc.gear.slots.weapon.draw();
        swlcalc.gear.slots.weapon2.sheath();
    };

    /**
     * Returns the total number of slots in the gear
     */
    var nbSlots = function() {
        return Object.keys(this.slots).length;
    };

    /**
     * Resets all slots
     */
    //TODO/FEATURE : reset should logically set level to 1
    var reset = function() {
        for (var id in this.slots) {
            this.slots[id].reset();
        }
    };

    /**
     * Returns the list of slots states
     */
    var state = function() {
        var slotStates = {};
        for (var id in this.slots) {
            slotStates[id] = this.slots[id].state();
        }
        return slotStates;
    };

    /**
     * Returns the list of slots states (mapped version)
     */
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var id in this.slots) {
            mappedSlotStates[id] = this.slots[id].mappedState();
        }
        return mappedSlotStates;
    };

    var oPublic = {
        slots: slots,
        agents: agents,
        init: init,
        nbSlots: nbSlots,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();
