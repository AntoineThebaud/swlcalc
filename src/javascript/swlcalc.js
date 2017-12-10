$(document).ready(function() {
    swlcalc.init();
});

var swlcalc = swlcalc || {};

swlcalc = function() {
    var init = function() {
        renderContainer(swlcalc.data.template_data);
        addHash();

        activateToolTips();

        startSubModules();
        if (!checkIfExported()) {
            triggerReset();
        }

        $('#summary').scrollToFixed();
    };

    var triggerReset = function() {
        $('#btn-reset').trigger('click');
    };

    var activateToolTips = function() {
        $('.glyph-tooltip, .signet-tooltip, .consumable-tooltip').tooltip({
            placement: 'left'
        });
        $('.cost-tooltip').tooltip({
            placement: function(context, source) {
                var position = $(source).position();
                if (position.top < 50) {
                    return 'bottom';
                } else {
                    return 'top';
                }
            }
        });
        $('#table-primary > label').tooltip({
            placement: 'left'
        });
        $('#raid-stats > label').tooltip({
            placement: 'bottom'
        });
        $('.cost-tooltip, .glyph-tooltip, .signet-tooltip, .slot-warning, .swap-weapon, .consumable-tooltip').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });

    };

    var renderContainer = function(data) {
        dust.render('container', {
            slots: swlcalc.data.template_data.slots,
            signets: swlcalc.data.signet_data
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            //$('#main-container').html(out);
			//$('.container-fluid').html(out);
			$('.container').html(out);
        });
    };

    var checkIfExported = function() {
        var vars = $.getUrlVars();
        // length == 8 is pre 1.3 links
        // length == 9 is post 1.3 links (secondary weapon added)
        if (!$.isEmptyObject(vars) && Object.keys(vars).length == 8 || Object.keys(vars).length == 9) {
            swlcalc.import.start(vars);
            return true;
        }
        return false;
    };

    var startSubModules = function() {
        swlcalc.slots.init();
        swlcalc.miscslot.init();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startSelectHandler(swlcalc.data.template_data.slots[i]);
        }
        swlcalc.button.init();
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
    };

    var addHash = function() {
        if (location.hash == '') {
            location.hash = ' ';
        }
    };

    var startSelectHandler = function(slot) {
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].initiate();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();