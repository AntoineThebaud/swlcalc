var tswcalc = tswcalc || {};

tswcalc.export = function() {
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
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                url += createSlotUrl(slot, slot.mappedState());
                if (i < tswcalc.slots.length() - 1) {
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
        var slotUrl = slot.id + '=' + state.ql + ',' + idOrWtype + ',' + state.glyph_ql + ',' + state.primary_glyph + ',' +
            state.secondary_glyph + ',' + state.primary_dist + ',' + state.secondary_dist;

        if(state.signet_id !== 0 && state.signet_id !== '999') {
            slotUrl += ',' + state.signet_quality + ',' + state.signet_id;
        }
                
        return slotUrl;
    };

    var startExportBBCode = function() {
        collectAllSlotStates();
        dust.render('export@@pathsepbbcode', {
            slotState: dustSlotState(),
            summary: tswcalc.summary.collectAllStats()
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
        for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
            var slot = tswcalc.data.template_data.slots[i];
            var slotId = slot.id_prefix;
            var group = slot.group;
            var curState = slotState[slotId];
            var primaryValue = tswcalc.slots[slotId].primaryGlyphValue();
            var secondaryValue = tswcalc.slots[slotId].secondaryGlyphValue();
            var statType = 0;
            var statValue = 0;
            if (tswcalc.data.template_data.slots[i].is_weapon) {
                statType = 'Weapon Power';
                statValue = tswcalc.data.custom_gear_data[group]['10.' + curState.ql].weapon_power;
            } else {
                switch(curState.role) {
                    case 'healer':
                        statType = 'Heal Rating';
                        statValue = tswcalc.data.custom_gear_data[group].heal_dps['ql10.' + curState.ql].rating;
                        break;
                    case 'dps':
                        statType = 'Attack Rating';
                        statValue = tswcalc.data.custom_gear_data[group].heal_dps['ql10.' + curState.ql].rating;
                        break;
                    case 'tank':
                        statType = 'Hitpoints';
                        statValue = tswcalc.data.custom_gear_data[group].tank['ql10.' + curState.ql].hitpoints;
                        break;
                }
            }

            var signet = tswcalc.slots[slotId].signet();

            var state = {
                name: slot.is_weapon ? tswcalc.util.capitalise(slot.name + ": " + tswcalc.util.capitalise(tswcalc.data.wtype_mapping.to_name[curState.wtype])) : tswcalc.util.capitalise(slotId),
                role: slot.is_weapon ? null : (curState.role === 'dps' ? 'DPS' : tswcalc.util.capitalise(curState.role)),
                ql: curState.ql,
                stat_type: statType,
                stat_value: statValue,
                glyph_ql: curState.glyph_ql,
                primary_glyph: tswcalc.util.blankIfNone(tswcalc.util.capitalise(tswcalc.data.stat_mapping.to_stat[curState.primary_glyph])),
                primary_dist: curState.primary_dist,
                primary_value: primaryValue,
                secondary_glyph: tswcalc.util.blankIfNone(tswcalc.util.capitalise(tswcalc.data.stat_mapping.to_stat[curState.secondary_glyph])),
                secondary_dist: curState.secondary_dist,
                secondary_value: secondaryValue,
                signet_name: signet.name,
                signet_quality: tswcalc.util.blankIfNone(tswcalc.util.capitalise(tswcalc.data.signet_quality_mapping.to_name[curState.signet_quality])),
                signet_description: tswcalc.slots[slotId].signetDescription(),
                signet_colour: tswcalc.data.signet_quality_mapping.to_colour[tswcalc.data.signet_quality_mapping.to_name[curState.signet_quality]],
                is_item: curState.itemId > 3 ? true : false
            };
            states.push(state);
        }
        return states;
    };

    var collectAllSlotStates = function() {
        slotState = tswcalc.slots.mappedState();
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