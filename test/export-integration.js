module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        swlcalc.export.init();
    }
});

// TODO : Disabled. Reactivate when values will be swl compatible
// test('should create BBCode export', 1, function() {
//     createTankBuild();
//
//     swlcalc.export.startExportBBCode();
//
//     equal($('#export-textarea').html(), bbcode);
// });
