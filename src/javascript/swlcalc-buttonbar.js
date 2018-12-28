var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};

    var elInit = function() {
        return {
            btn_all_dps: $('#btn-all-dps'),
            btn_all_heal: $('#btn-all-heal'),
            btn_all_tank: $('#btn-all-tank'),
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
        el.btn_all_dps.on('click', setAnimaAllocation);
        el.btn_all_heal.on('click', setAnimaAllocation);
        el.btn_all_tank.on('click', setAnimaAllocation);
        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);
        el.btn_reset.on('click', resetGear);
    };

    /**
     * Sets anima allocation ratio
     */
    //TODO/REFACTOR : basic implementation, everything to review
    var setAnimaAllocation = function(event) {
        el.btn_all_dps.removeClass('active');
        el.btn_all_heal.removeClass('active');
        el.btn_all_tank.removeClass('active');
        $(event.target).addClass('active');

        if (event.target.id == 'btn-all-dps') {
            swlcalc.summary.setAnimaAllocation('DAMAGE');
        } else if (event.target.id == 'btn-all-heal') {
            swlcalc.summary.setAnimaAllocation('HEALING');
        } else if (event.target.id == 'btn-all-tank') {
            swlcalc.summary.setAnimaAllocation('SURVIVABILITY');
        }

        swlcalc.summary.updateAllStats();
    };

    /**
     * Set the same chosen rarity to all items+glyphs+signets.
     */
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2];
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.rarity(newRarity);
            slot.el.rarity.change();

            slot.glyphRarity(newRarity);
            slot.el.glyphRarity.change();

            slot.signetRarity(newRarity);
            slot.el.signetRarity.change();
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Set all slots to 'none'
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var resetGear = function(event) {
        swlcalc.gear.reset();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        el: el,
        init: init,
        setRarityOnAllSlots: setRarityOnAllSlots,
        resetGear: resetGear
    };

    return oPublic;
}();
