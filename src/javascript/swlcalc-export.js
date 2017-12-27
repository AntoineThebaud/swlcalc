var swlcalc = swlcalc || {};

swlcalc.export = function() {
    var exportType = 0;
    var slotState = {};

    var el = {};
    var elInit = function() {
        return {
            export_btn: $('a.export'),
            export_textarea: $('#export-textarea'),
            open_export_modal: $('#open-export-modal')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.export_btn.on('click', function(event) {
            exportType = $(event.target).attr('data');
            startExport();
        });

        el.open_export_modal.on('shown', function() {
            el.export_textarea.focus();
        });

        el.export_textarea.focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    var startExport = function() {
        if (exportType == 'url') {
            startExportUrl();
        } else if (exportType == 'bbcode') {
            startExportBBCode();
        }
    };

    var startExportUrl = function() {
        collectAllSlotStates();
        var url = createExportUrl();
        el.export_textarea.attr('rows', '1');
        el.export_textarea.html(location.origin + location.pathname + '#' + url);
    };

    var createExportUrl = function() {
        var url = '';
        var i = 0;
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                url += createSlotUrl(slot, slot.mappedState());
                if (i < swlcalc.slots.length() - 1) {
                    url += '&';
                }
                i++;
            }
        }
        return url;
    };

    var createSlotUrl = function(slot, state) {
        var idOrWtype = state.itemId;
        if(slot.isWeapon()) {
            idOrWtype = state.wtype;
        }
        // see swlcalc-import.js for the order
        var slotUrl = slot.id + '='
            + state.rarity + ','
            + idOrWtype + ','
            + state.quality + ','
            + state.level + ','
            + state.glyph_rarity + ','
            + state.glyph + ','
            + state.glyph_quality + ','
            + state.glyph_level;

        if(state.signet_id !== 0 && state.signet_id !== '999') {
            slotUrl += ',' + state.signet_rarity
                    + ',' + state.signet_id
                    + ',' + state.signet_level;
        }

        return slotUrl;
    };

    var startExportBBCode = function() {
        collectAllSlotStates();
        dust.render('export@@pathsepbbcode', {
            slotState: dustSlotState(),
            summary: swlcalc.summary.collectAllStats()
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            el.export_textarea.attr('rows', '10');
            el.export_textarea.html(out);
        });
    };

    //TODO: refactor this mess
    var dustSlotState = function() {
        var states = [];
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slot = swlcalc.data.template_data.slots[i];
            var slotId = slot.id_prefix;
            var group = slot.group;
            var curState = slotState[slotId];
            var primaryValue = swlcalc.slots[slotId].primaryGlyphValue();
            var secondaryValue = swlcalc.slots[slotId].secondaryGlyphValue();
            var statType = 0;
            var statValue = 0;
            if (swlcalc.data.template_data.slots[i].is_weapon) {
                statType = 'Weapon Power';
                statValue = swlcalc.data.custom_gear_data[group]['10.' + curState.rarity].weapon_power;
            } else {
                switch(curState.role) {
                    case 'healer':
                        statType = 'Heal Rating';
                        statValue = swlcalc.data.custom_gear_data[group].heal_dps['ql10.' + curState.rarity].rating;
                        break;
                    case 'dps':
                        statType = 'Attack Rating';
                        statValue = swlcalc.data.custom_gear_data[group].heal_dps['ql10.' + curState.rarity].rating;
                        break;
                    case 'tank':
                        statType = 'Hitpoints';
                        statValue = swlcalc.data.custom_gear_data[group].tank['ql10.' + curState.rarity].hitpoints;
                        break;
                }
            }

            var signet = swlcalc.slots[slotId].signet();

            var state = {
                name: slot.is_weapon ? swlcalc.util.capitalise(slot.name + ": " + swlcalc.util.capitalise(swlcalc.data.wtype_mapping.to_name[curState.wtype])) : swlcalc.util.capitalise(slotId),
                role: slot.is_weapon ? null : (curState.role === 'dps' ? 'DPS' : swlcalc.util.capitalise(curState.role)),
                rarity: curState.rarity,
                stat_type: statType,
                stat_value: statValue,
                glyph_rarity: curState.glyph_rarity,
                primary_glyph: swlcalc.util.blankIfNone(swlcalc.util.capitalise(swlcalc.data.glyph_stat_mapping.to_stat[curState.primary_glyph])),
                primary_dist: curState.primary_dist,
                primary_value: primaryValue,
                secondary_glyph: swlcalc.util.blankIfNone(swlcalc.util.capitalise(swlcalc.data.glyph_stat_mapping.to_stat[curState.secondary_glyph])),
                secondary_dist: curState.secondary_dist,
                secondary_value: secondaryValue,
                signet_name: signet.name,
                signet_rarity: swlcalc.util.blankIfNone(swlcalc.util.capitalise(swlcalc.data.rarity_mapping.to_name[curState.signet_rarity])),
                signet_description: swlcalc.slots[slotId].signetDescription(),
                signet_colour: swlcalc.data.rarity_mapping.to_colour[swlcalc.data.rarity_mapping.to_name[curState.signet_rarity]],
                is_item: curState.itemId > 3 ? true : false
            };
            states.push(state);
        }
        return states;
    };

    var collectAllSlotStates = function() {
        slotState = swlcalc.slots.mappedState();
    };

    var oPublic = {
        init: init,
        createSlotUrl: createSlotUrl,
        createExportUrl: createExportUrl,
        collectAllSlotStates: collectAllSlotStates,
        startExportUrl: startExportUrl,
        startExportBBCode: startExportBBCode
    };

    return oPublic;
}();
