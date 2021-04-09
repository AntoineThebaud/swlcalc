var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};

    var elInit = function() {
        return {
            btnAllStandard: $('#btn-all-standard'),
            btnAllSuperior: $('#btn-all-superior'),
            btnAllEpic: $('#btn-all-epic'),
            btnAllMythic: $('#btn-all-mythic'),
            btnAllLegendary: $('#btn-all-legendary'),

            btnAll1Pip: $('#btn-all-1-pip'),
            btnAll2Pip: $('#btn-all-2-pip'),
            btnAll3Pip: $('#btn-all-3-pip'),
            btnAll4Pip: $('#btn-all-4-pip'),

            btnAllLvlMin: $('#btn-all-lvl-min'),
            btnAllLvlMax: $('#btn-all-lvl-max'),

            btnReset: $('#btn-reset')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    /**
     * Associates the right processing to each trigger.
     */
    var bindEvents = function() {
        el.btnAllStandard.on('click', setRarityOnAllSlots);
        el.btnAllSuperior.on('click', setRarityOnAllSlots);
        el.btnAllEpic.on('click', setRarityOnAllSlots);
        el.btnAllMythic.on('click', setRarityOnAllSlots);
        el.btnAllLegendary.on('click', setRarityOnAllSlots);

        el.btnAll1Pip.on('click', setQualityOnAllSlots);
        el.btnAll2Pip.on('click', setQualityOnAllSlots);
        el.btnAll3Pip.on('click', setQualityOnAllSlots);
        el.btnAll4Pip.on('click', set4PipsOnAllSlots);

        el.btnAllLvlMin.on('click', setMinLevelOnAllSlots);
        el.btnAllLvlMax.on('click', setMaxLevelOnAllSlots);

        el.btnReset.on('click', resetAll);
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.setEquipmentRarity(newRarity);
            slot.edit.setGlyphRarity(newRarity);
            slot.edit.setSignetRarity(newRarity);
        }
    };

    /**
     * Set the same chosen quality to all equipments + glyphs (signets not concerned here).
     */
    var setQualityOnAllSlots = function(event) {
        var newQuality = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.setEquipmentQuality(newQuality);
            slot.edit.setGlyphQuality(newQuality);
        }
    };

    /**
     * Set all slots to rarity Legendary + Quality 4 pips (if possible) + Level 70
     * -> Dedicated function for the 4th quality (instead of relying on setQualityOnAllSlots) because
     * of a specific behavior : increase rarity if it is too "low"
     */
    var set4PipsOnAllSlots = function(event) {
        var map = swlcalc.data.rarityMapping.toNum;
        var upgradedRarity = 'epic';
        var fourPips = "4";

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if (map[slot.edit.getEquipmentRarity()] < map[upgradedRarity]) {
                slot.edit.setEquipmentRarity(upgradedRarity);
            }
            slot.edit.setEquipmentQuality(fourPips);

            if (map[slot.edit.getGlyphRarity()] < map[upgradedRarity]) {
                slot.edit.setGlyphRarity(upgradedRarity);
            }
            slot.edit.setGlyphQuality(fourPips);
        }
    };

    /**
     * Set the min level to all equipments + glyphs + signets + agents.
     */
    var setMinLevelOnAllSlots = function(event) {
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.setEquipmentLevel(slot.edit.getEquipmentLevelMin());
            slot.edit.setGlyphLevel(slot.edit.getGlyphLevelMin());
            slot.edit.setSignetLevel(slot.edit.getSignetLevelMin());
        }

        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];
            agent.setLevel(agent.minLvl());
        }
    };

    /**
     * Set the max level to all equipments + glyphs + signets + agents.
     */
    var setMaxLevelOnAllSlots = function(event) {
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.edit.setEquipmentLevel(slot.edit.getEquipmentLevelMax());
            slot.edit.setGlyphLevel(slot.edit.getGlyphLevelMax());
            slot.edit.setSignetLevel(slot.edit.getSignetLevelMax());
        }

        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];
            agent.setLevel(agent.maxLvl());
        }
    };

    /**
     * Reset the whole calculator (set all slots & agents to 'none', put passives & aa to their default values...)
     */
    var resetAll = function(event) {
        swlcalc.gear.reset();
        swlcalc.passives.reset();
        swlcalc.animaAllocation.reset();
    };

    var oPublic = {
        el: el,
        init: init,
        resetAll: resetAll
    };

    return oPublic;
}();
