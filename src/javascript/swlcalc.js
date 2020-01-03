$(document).ready(function() {
    swlcalc.init();
});

var swlcalc = swlcalc || {};

swlcalc = function() {

    /**
     * Init function. Triggered when document is ready.
     */
    var init = function() {
        renderBody();
        startSubModules();
        if (!checkIfExported()) {
            // if no parameters are present in the URL, trigger artificial reset to generate base parameters ("#weapon=0,0,0,0,0,4,0&weapon2=0,0,[...]")
            triggerReset();
        }
        // visual settings :
        activateToolTips();
    };

    /**
     * Trigger "Reset" button.
     */
    var triggerReset = function() {
        $('#btn-reset').trigger('click');
    };

    /**
     * Add tooltips for images (signets, glyphs, currencies..)
     */
    var activateToolTips = function() {
        $('.equipment-tooltip, .glyph-tooltip, .signet-tooltip').tooltip({
            placement: 'left'
        });
        $('#table-primary > label').tooltip({
            placement: 'left'
        });
    };

    /**
     * Generate html code in the body, based on .dust template files
     */
    var renderBody = function() {
        dust.render('body', {
            slots_recap: swlcalc.data.template_data.slots,
            slots_edit: swlcalc.data.template_data.slots
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('body').html(out);
        });
    };

    /**
     * Check if parameters are present in the URL.
     */
    var checkIfExported = function() {
        var vars = $.getUrlVars();
        // TODO/REFACTOR : currently we don't check if parameters for each slot are correct !
        if (!$.isEmptyObject(vars) && Object.keys(vars).length == 9) {
            swlcalc.import.start(vars);
            return true;
        }
        return false;
    };

    /**
     * Initialize all sub modules (slots, buttonbar, summary...)
     */
    var startSubModules = function() {
        swlcalc.gear.init();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startControllerHandler(swlcalc.data.template_data.slots[i]);
        }
        startSwapHandler('weapon');
        startSwapHandler('weapon2');
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
    };

    /**
     * Create controller handler for a slot.
     */
    var startControllerHandler = function(slot) {
        swlcalc.controller[slot.id] = new swlcalc.controller.ControllerHandler(slot);
        swlcalc.controller[slot.id].init();
    };

    /**
     * Create swap button handler for a slot.
     */
    var startSwapHandler = function(slot) {
        swlcalc.swap[slot] = new swlcalc.swap.SwapHandler(slot);
        swlcalc.swap[slot].init();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();
