$(document).ready(function() {
    swlcalc.init();
});

var swlcalc = swlcalc || {};

swlcalc = function() {

    /**
     * Init function. Triggered when document is ready.
     */
    var init = function() {
        renderContainer(swlcalc.data.template_data);
        addHash();
        startSubModules();
        if (!checkIfExported()) {
            // if no parameters are present in the URL, trigger artificial reset to generate base parameters ("#weapon=0,0,0,0,0,4,0&weapon2=0,0,[...]")
            triggerReset();
        }
        // visual settings :
        activateToolTips();
        $('#summary').scrollToFixed();
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
        $('.item-tooltip, .glyph-tooltip, .signet-tooltip').tooltip({
            placement: 'left'
        });
        $('#table-primary > label').tooltip({
            placement: 'left'
        });
    };

    /**
     * Generate html code in the container, based on .dust template files
     */
    var renderContainer = function(data) {
        dust.render('container', {
            slots: swlcalc.data.template_data.slots,
            signets: swlcalc.data.signets
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('.container').html(out);
        });
    };

    /**
     * Check if parameters are present in the URL.
     */
    var checkIfExported = function() {
        var vars = $.getUrlVars();
        // TODO/REFACTOR : check if parameters for each slot are correct !
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
        swlcalc.slots.init();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startSelectHandler(swlcalc.data.template_data.slots[i]);
        }
        swlcalc.button.init();
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
    };

    /**
     * Add an empty hash if current is null
     * TODO/REFACTOR : check if still accurate ?
     */
    var addHash = function() {
        if (location.hash == '') {
            location.hash = ' ';
        }
    };

    /**
     * TODO/REFACTOR : description missing.
     */
    var startSelectHandler = function(slot) {
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].initiate();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();
