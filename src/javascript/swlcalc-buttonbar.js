var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};
    var elInit = function() {
        return {
            btn_all_dps: $('#btn-all-3'),
            btn_all_healer: $('#btn-all-2'),
            btn_all_tank: $('#btn-all-1'),
            btn_all_standard: $('#btn-all-standard'),
            btn_all_superior: $('#btn-all-superior'),
            btn_all_epic: $('#btn-all-epic'),
            btn_all_mythic: $('#btn-all-mythic'),
            btn_all_legendary: $('#btn-all-legendary'),
            btn_reset: $('#btn-reset')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };
    
    /**
     * Associates the right process to each trigger.
     */
    var bindEvents = function() {
        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);
        el.btn_reset.on('click', resetAllSlots);
    };

    /**
     * Set the same chosen rarity to all items+glyphs+signets.
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2];
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.rarity(newRarity);
                slot.el.rarity.change();

                slot.glyphRarity(newRarity);
                slot.el.glyphRarity.change();

                slot.signetRarity(newRarity);
                slot.el.signetRarity.change();
            }
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Set all slots to 'none'
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var resetAllSlots = function(event) {
        swlcalc.slots.reset();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Public exposition of the functions that are called remotely
     */
    var oPublic = {
        el: el,
        init: init,
        setRarityOnAllSlots: setRarityOnAllSlots,
        resetAllSlots: resetAllSlots
    };

    return oPublic;
}();
