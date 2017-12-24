var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};
    var elInit = function() {
        return {
			//TODO : QLs TO UPDATE
            btn_all_dps: $('#btn-all-3'),
            btn_all_healer: $('#btn-all-2'),
            btn_all_tank: $('#btn-all-1'),
            btn_all_10_4: $('#btn-all-10-4'),
            btn_all_10_5: $('#btn-all-10-5'),
            btn_all_10_9: $('#btn-all-10-9'),
            btn_all_11_0: $('#btn-all-11-0'),
            btn_reset: $('#btn-reset')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

	//TODO : QLs TO UPDATE
    var bindEvents = function() {
        el.btn_all_dps.on('click', setRoleOnAllSlots);
        el.btn_all_healer.on('click', setRoleOnAllSlots);
        el.btn_all_tank.on('click', setRoleOnAllSlots);
        // el.btn_all_10_4.on('click', setQlOnAllSlots); //TODO : TO UPDATE
        // el.btn_all_10_5.on('click', setQlOnAllSlots); //TODO : TO UPDATE
        // el.btn_all_10_9.on('click', setQlOnAllSlots); //TODO : TO UPDATE
        // el.btn_all_11_0.on('click', setQlOnAllSlots); //TODO : TO UPDATE
        el.btn_reset.on('click', resetAllSlots);
    };

	//TODO : potentially needed update
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

	//TODO : potentially needed update
    var setQlOnAllSlots = function (event) {
        var newItemQl = extractItemQl(event);
        var newGlyphQl = extractGlyphQl(event);

        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if(!slot.item().ql) {
                    slot.ql(newItemQl);
                }
                if(!slot.item().glyph) {
                    slot.glyphQl(newGlyphQl);
                    slot.el.glyphQl.change();
                }
            }
        }
        swlcalc.summary.updateAllStats();
    };

    var resetAllSlots = function(event) {
        swlcalc.slots.reset();
        swlcalc.summary.updateAllStats();
    };

    var extractItemQl = function (event) {
        return event.target.id.split('-')[2] + '.' + event.target.id.split('-')[3];
    };

    var extractGlyphQl = function (event) {
        var majorLevel = parseInt(event.target.id.split('-')[2]);
        var minorLevel = parseInt(event.target.id.split('-')[3]);
        if (majorLevel === 10 && minorLevel > 5) {
            return 'epic'; //TODO : tsw value '10.5' replaced arbitrary by 'epic'
        }
        return majorLevel + '.' + minorLevel;
    };

    var extractRole = function(event) {
        return event.target.id.split('-')[2];
    };

    var oPublic = {
        el: el,
        init: init,
        setRoleOnAllSlots: setRoleOnAllSlots,
        setQlOnAllSlots: setQlOnAllSlots,
        resetAllSlots: resetAllSlots
    };

    return oPublic;
}();
