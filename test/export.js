
module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        swlcalc.export.init();
        createTankBuild();
    }
});

test('should create slot url for weapon, head and wrist', 3, function() {
    var slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.head, swlcalc.gear.slots.head.mappedState());
    equal(slotUrl, 'head=3,1,1,30,4,1,3,1,2,20,15');
    slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.wrist, swlcalc.gear.slots.wrist.mappedState());
    equal(slotUrl, 'wrist=3,1,1,1,3,5,2,20,1,1,14');
    slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.weapon, swlcalc.gear.slots.weapon.mappedState());
    equal(slotUrl, 'weapon=3,1,1,30,2,2,1,1,0,6,0');
});

test('should create export url', 1, function() {
    var url = swlcalc.export.createExportUrl();
    deepEqual(url, 'weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,1,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18');
});

test('should start export url and set in textfield', 1, function() {
    swlcalc.export.startExportUrl();
    equal($('#export-textarea').html(), location.origin + location.pathname + '#weapon=3,1,1,30,2,2,1,1,0,6,0&amp;weapon2=3,2,3,30,2,2,1,1,0,2,0&amp;head=3,1,1,30,4,1,3,1,2,20,15&amp;finger=3,1,1,30,3,5,2,20,1,10,9&amp;neck=3,1,1,30,3,5,2,20,2,10,3&amp;wrist=3,1,1,1,3,5,2,20,1,1,14&amp;luck=3,1,1,1,3,4,2,20,3,8,6&amp;waist=3,1,1,30,3,4,2,20,2,3,11&amp;occult=3,1,1,1,3,4,2,20,3,4,18');
});
