var swlcalc = swlcalc || {};

swlcalc.export = function() {

    var el = {};

    var elInit = function() {
        return {
            export_btn: $('a.export'),
            export_text: $('#export-text'),
            open_export_modal: $('#open-export-modal')
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
        el.export_btn.on('click', function(event) {
            startExportUrl();
        });

        el.open_export_modal.on('shown.bs.modal', function() {
          el.export_text.focus();
        });

        el.export_text.focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    /**
     * Starts URL export : collect stats then forwards to createExportUrl .
     */
    //TODO/REFACTOR : remove or change name ?
    var startExportUrl = function() {
        var url = createExportUrl();
        el.export_text.val(location.origin + location.pathname + '#' + url);
    };

    /**
     * Builds the URL containing all the informations entered in swlcalc
     */
    var createExportUrl = function() {
        var url = '';
        var i = 0;
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            url += createSlotUrl(slot, slot.mappedState());
            if (i < swlcalc.gear.nbSlots() - 1) {
                url += '&';
            }
            i++;
        }
        return url;
    };

    /**
     * Builds the subpart of the export URL for the submitted slot
     */
    var createSlotUrl = function(slot, state) {
        // see swlcalc-import.js for the order
        var slotUrl = slot.id + '='
            + state.equipment_rarity + ','
            + state.equipment_id + ','
            + state.equipment_quality + ','
            + state.equipment_level + ','
            + state.glyph_rarity + ','
            + state.glyph_id + ','
            + state.glyph_quality + ','
            + state.glyph_level;

            //TODO/REFACTOR : this commented if{} allows the url to be smaller when no signet is set
            // it is temporary disabled for visual issue (select color not updating)
            // in the future, should be reenabled + same behavior for glyphs and even complete slot ?
            // that could allow to see the stats for only one item (but is it usefull ?)
            /* if(state.signet_id !== 0 && state.signet_id !== '999') { */
            slotUrl += ',' + state.signet_rarity
                    + ',' + state.signet_id
                    + ',' + state.signet_level;
            /* }*/

        return slotUrl;
    };

    var oPublic = {
        init: init,
        createSlotUrl: createSlotUrl,
        createExportUrl: createExportUrl,
        startExportUrl: startExportUrl,
    };

    return oPublic;
}();
