
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

test('should create slot url for head', 1, function() {
    createTankBuild();
    var slotUrl = swlcalc.export.createSlotUrl(swlcalc.slots.head, swlcalc.slots.head.mappedState());

    equal(slotUrl, 'head=3,1,1,30,4,1,3,1,1,0,20');
});

test('should create slot url for wrist', 1, function() {
    createTankBuild();
    var slotUrl = swlcalc.export.createSlotUrl(swlcalc.slots.wrist, swlcalc.slots.wrist.mappedState());

    equal(slotUrl, 'wrist=3,1,1,1,3,5,2,20,1,0,20');
});

test('should create slot url for weapon with type', 1, function() {
    createTankBuild();
    var slotUrl = swlcalc.export.createSlotUrl(swlcalc.slots.weapon, swlcalc.slots.weapon.mappedState());

    equal(slotUrl, 'weapon=3,1,1,30,2,2,1,1,0,0,0');
});

test('should create export url', 1, function() {
    createTankBuild();
    var url = swlcalc.export.createExportUrl();

    deepEqual(url, 'weapon=3,1,1,30,2,2,1,1,0,0,0&weapon2=3,2,3,30,2,2,1,1,0,0,0&head=3,1,1,30,4,1,3,1,1,0,20&finger=3,1,1,30,3,5,2,20,1,0,20&neck=3,1,1,30,3,5,2,20,1,0,20&wrist=3,1,1,1,3,5,2,20,1,0,20&luck=3,1,1,1,3,4,2,20,1,0,20&waist=3,1,1,30,3,4,2,20,1,0,20&occult=3,1,1,1,3,4,2,20,1,0,20');
});

test('should start export url and set in textfield', 1, function() {
    createTankBuild();
    swlcalc.export.startExportUrl();

    equal($('#export-textarea').html(), location.origin + location.pathname + '#weapon=3,1,1,30,2,2,1,1,0,0,0&amp;weapon2=3,2,3,30,2,2,1,1,0,0,0&amp;head=3,1,1,30,4,1,3,1,1,0,20&amp;finger=3,1,1,30,3,5,2,20,1,0,20&amp;neck=3,1,1,30,3,5,2,20,1,0,20&amp;wrist=3,1,1,1,3,5,2,20,1,0,20&amp;luck=3,1,1,1,3,4,2,20,1,0,20&amp;waist=3,1,1,30,3,4,2,20,1,0,20&amp;occult=3,1,1,1,3,4,2,20,1,0,20');
});
