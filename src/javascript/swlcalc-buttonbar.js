var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};

    var elInit = function() {
        return {
            select_anima_allocation: $('#select-anima-allocation'),

            btn_all_standard: $('#btn-all-standard'),
            btn_all_superior: $('#btn-all-superior'),
            btn_all_epic: $('#btn-all-epic'),
            btn_all_mythic: $('#btn-all-mythic'),
            btn_all_legendary: $('#btn-all-legendary'),

            btn_all_1_pip: $('#btn-all-1-pip'),
            btn_all_2_pip: $('#btn-all-2-pip'),
            btn_all_3_pip: $('#btn-all-3-pip'),

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
        el.select_anima_allocation.on('change', setAnimaAllocation);

        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);

        el.btn_all_1_pip.on('click', setQualityOnAllSlots);
        el.btn_all_2_pip.on('click', setQualityOnAllSlots);
        el.btn_all_3_pip.on('click', setQualityOnAllSlots);

        el.btn_reset.on('click', resetGear);
    };

    /**
     * Sets anima allocation ratio
     */
    //TODO/REFACTOR : basic implementation, everything to review
    var setAnimaAllocation = function(event) {
        $(this).attr("class", "anima-allocation-select color-" + this.value);
        swlcalc.summary.setAnimaAllocation(event.target.value);
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.equipmentRarity(newRarity);
            slot.el.equipmentRarity.change();
            slot.glyphRarity(newRarity);
            slot.el.glyphRarity.change();
            slot.signetRarity(newRarity);
            slot.el.signetRarity.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setQualityOnAllSlots = function(event) {
        var newQuality = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.equipmentQuality(newQuality);
            slot.el.equipmentQuality.change();
            slot.glyphQuality(newQuality);
            slot.el.glyphQuality.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
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
