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
        adjustPlacement();
        window.addEventListener('resize', adjustPlacement, true);
    };

    /**
     * Trigger "Reset" button.
     */
    var triggerReset = function() {
        $('#btn-reset').trigger('click');
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
        // start slots handlers
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startSlotHandler(swlcalc.data.template_data.slots[i]);
        }
        // start handlers for agents slots
        for (var i = 1; i <= 3; i++) {
            startAgentSlotHandler(i);
        }
        startSwapHandler('weapon');
        startSwapHandler('weapon2');
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
        swlcalc.themeSwitch.init();
    };

    /**
     * Create handler for a slot.
     */
    var startSlotHandler = function(slot) {
        swlcalc.handler[slot.id] = new swlcalc.gear.SlotHandler(slot);
        swlcalc.handler[slot.id].init();
    };

    /**
     * Create handler for an agent slot
     */
    var startAgentSlotHandler = function(id) {
        swlcalc.agenthandler[id] = new swlcalc.gear.AgentSlotHandler(id);
        swlcalc.agenthandler[id].init();
    };

    /**
     * Create swap button handler for a slot.
     */
    var startSwapHandler = function(slot) {
        swlcalc.swap[slot] = new swlcalc.swap.SwapHandler(slot);
        swlcalc.swap[slot].init();
    };

    /**
     * Adjusts placement of elements when window is resized.
     */
    var adjustPlacement = function(slot) {
        // makes body top padding equal to navbar height
        var navHeight = $("nav").height();
        $("body").css("padding-top", navHeight + "px");
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();
