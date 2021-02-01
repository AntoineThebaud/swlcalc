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

        el.btnReset.on('click', resetGear);
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
        swlcalc.gear.updateAllDescriptions();
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
        swlcalc.gear.updateAllDescriptions();
    };

    /**
     * Set all slots to rarity Legendary + Quality 4 pips (if possible) + Level 70
     * -> Dedicated function for the 4th quality (instead of relying on setQualityOnAllSlots) because
     * of a specific behavior : increase rarity if it is too "low"
     */
    var set4PipsOnAllSlots = function(event) {
        var map = swlcalc.data.rarityMapping.toNum
        var upgradedRarity = 'epic'
        var fourPips = "4"

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if (map[slot.edit.equipmentRarity()] < map[upgradedRarity]) {
                slot.edit.equipmentRarity(upgradedRarity);
                slot.edit.el.equipmentRarity.change();
            }
            slot.edit.equipmentQuality(fourPips);
            slot.edit.el.equipmentQuality.change();

            if (map[slot.edit.glyphRarity()] < map[upgradedRarity]) {
                slot.edit.glyphRarity(upgradedRarity);
                slot.edit.el.glyphRarity.change();
            }
            slot.edit.glyphQuality(fourPips);
            slot.edit.el.glyphQuality.change();
        }

        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
        swlcalc.gear.updateAllDescriptions();
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
        swlcalc.gear.updateAllDescriptions();
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
        swlcalc.gear.updateAllDescriptions();
    };

    /**
     * Set all slots to 'none'
     */
    var resetGear = function(event) {
        swlcalc.gear.reset();
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
    };

    var oPublic = {
        el: el,
        init: init,
        resetGear: resetGear
    };

    return oPublic;
}();
