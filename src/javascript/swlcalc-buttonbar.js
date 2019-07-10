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

            btn_all_lvl_min: $('#btn-all-lvl-min'),
            btn_all_lvl_max: $('#btn-all-lvl-max'),

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
        el.select_anima_allocation.on('change', handleAnimaAllocationChange);

        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);

        el.btn_all_1_pip.on('click', setQualityOnAllSlots);
        el.btn_all_2_pip.on('click', setQualityOnAllSlots);
        el.btn_all_3_pip.on('click', setQualityOnAllSlots);

        el.btn_all_lvl_min.on('click', setMinLevelOnAllSlots);
        el.btn_all_lvl_max.on('click', setMaxLevelOnAllSlots);

        el.btn_reset.on('click', resetGear);
    };

    /**
     * Get current anima allocation
     */
    var getAnimaAllocation = function() {
        return el.select_anima_allocation.val();
    }

    /**
     * Cascade anima allocation change on whole gear
     */
    var handleAnimaAllocationChange = function(event) {
        el.select_anima_allocation.attr('class', 'anima-allocation-select color-' + this.value); //TODO/REFACTOR : to abstract access ?

        for (var id in swlcalc.gear.slots) {
            swlcalc.gear.slots[id].updateEquipmentStatValueTransformed();
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.equipmentRarity(newRarity);
            slot.edit.el.equipmentRarity.change();
            slot.edit.glyphRarity(newRarity);
            slot.edit.el.glyphRarity.change();
            slot.edit.signetRarity(newRarity);
            slot.edit.el.signetRarity.change();
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
            slot.edit.equipmentQuality(newQuality);
            slot.edit.el.equipmentQuality.change();
            slot.edit.glyphQuality(newQuality);
            slot.edit.el.glyphQuality.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the min level to all equipments+glyphs+signets.
     */
    var setMinLevelOnAllSlots = function(event) {
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.equipmentLevel(slot.edit.equipmentLevelMin());
            slot.edit.el.equipmentLevel.change();
            slot.edit.glyphLevel(slot.edit.glyphLevelMin());
            slot.edit.el.glyphLevel.change();
            slot.edit.signetLevel(slot.edit.signetLevelMin());
            slot.edit.el.signetLevel.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the max level to all equipments+glyphs+signets.
     */
    var setMaxLevelOnAllSlots = function(event) {
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.equipmentLevel(slot.edit.equipmentLevelMax());
            slot.edit.el.equipmentLevel.change();
            slot.edit.glyphLevel(slot.edit.glyphLevelMax());
            slot.edit.el.glyphLevel.change();
            slot.edit.signetLevel(slot.edit.signetLevelMax());
            slot.edit.el.signetLevel.change();
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

    var oPublic = {
        el: el,
        init: init,
        resetGear: resetGear,
        getAnimaAllocation: getAnimaAllocation
    };

    return oPublic;
}();
