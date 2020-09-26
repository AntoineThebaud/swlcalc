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
            btn_all_4_pip: $('#btn-all-4-pip'),

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
        el.btn_all_4_pip.on('click', set4PipsOnAllSlots);

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
        el.select_anima_allocation.attr('class', 'anima-allocation-select ' + this.value); //TODO/REFACTOR : to abstract access ?

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
     * Set the same chosen quality to all equipments + glyphs (signets not concerned here).
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
     * Set all slots to rarity Legendary + Quality 4 pips (if possible) + Level 70
     * -> Dedicated function for the 4th quality (instead of relying on setQualityOnAllSlots) because
     * of specific behaviors : increase rarity if it is too "low", set weapon to 3 pip instead, etc..
     */
    var set4PipsOnAllSlots = function(event) {
        var map = swlcalc.data.rarity_mapping.to_num
        var upgradedRarity = 'epic'
        var fourPips = "4"

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if (map[slot.edit.equipmentRarity()] < map[upgradedRarity] && !slot.isWeapon()) {
                slot.edit.equipmentRarity(upgradedRarity);
                slot.edit.el.equipmentRarity.change();
            }
            slot.edit.equipmentQuality(slot.isWeapon() ? '3' : fourPips);
            slot.edit.el.equipmentQuality.change();

            if (map[slot.edit.glyphRarity()] < map[upgradedRarity]) {
                slot.edit.glyphRarity(upgradedRarity);
                slot.edit.el.glyphRarity.change();
            }
            slot.edit.glyphQuality(fourPips);
            slot.edit.el.glyphQuality.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the min level to all equipments + glyphs + signets + agents.
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

        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];
            agent.level(agent.minLvl());
            agent.el.level.change();
        }

        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the max level to all equipments + glyphs + signets + agents.
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

        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];
            agent.level(agent.maxLvl());
            agent.el.level.change();
        }

        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set all slots to 'none'
     */
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
