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

    var bindEvents = function() {
        el.btn_all_dps.on('click', setRoleOnAllSlots);
        el.btn_all_healer.on('click', setRoleOnAllSlots);
        el.btn_all_tank.on('click', setRoleOnAllSlots);
        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);
        el.btn_reset.on('click', resetAllSlots);
    };

    var setRoleOnAllSlots = function(event) {
        var newItem = extractRole(event);
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.itemId(newItem);
                slot.el.itemId.change();
            }
        }
        swlcalc.summary.updateAllStats();
    };

    var setRarityOnAllSlots = function(event) {
        var newRarity = extractRarity(event);
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                //if(!slot.item().rarity) {
                slot.rarity(newRarity);
                slot.el.rarity.change();
                //}
                //if(!slot.item().glyph) {
                slot.glyphRarity(newRarity);
                slot.el.glyphRarity.change();
                //}
                slot.signetRarity(newRarity);
                slot.el.signetRarity.change();
            }
        }
        swlcalc.summary.updateAllStats();
    };

    var resetAllSlots = function(event) {
        swlcalc.slots.reset();
        swlcalc.summary.updateAllStats();
    };

    var extractRarity = function (event) {
        return event.target.id.split('-')[2];
    };

    var extractRole = function(event) {
        return event.target.id.split('-')[2];
    };

    var oPublic = {
        el: el,
        init: init,
        setRoleOnAllSlots: setRoleOnAllSlots,
        setRarityOnAllSlots: setRarityOnAllSlots,
        resetAllSlots: resetAllSlots
    };

    return oPublic;
}();
