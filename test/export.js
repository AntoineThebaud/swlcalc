
QUnit.module("export-integration-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderButtonbar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateSelectHandlers();
        initiateButtonBar();
        initiateSummary();
        swlcalc.export.init();
        createTankBuild();
    }
});

QUnit.test("should create slot url for weapon, head and wrist", function(assert) {
    var slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.head, swlcalc.gear.slots.head.mappedState());
    assert.equal(slotUrl, "head=3,1,1,30,4,1,3,1,2,20,15");
    slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.wrist, swlcalc.gear.slots.wrist.mappedState());
    assert.equal(slotUrl, "wrist=3,1,1,1,3,5,2,20,1,1,14");
    slotUrl = swlcalc.export.createSlotUrl(swlcalc.gear.slots.weapon, swlcalc.gear.slots.weapon.mappedState());
    assert.equal(slotUrl, "weapon=3,1,1,30,2,2,1,1,0,6,0");
});

QUnit.test("should create export url", function(assert) {
    var url = swlcalc.export.createExportUrl();
    assert.deepEqual(url, "weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,1,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18");
});

QUnit.test("should start export url and set in textfield", function(assert) {
    swlcalc.export.startExportUrl();
    assert.equal($("#export-text").val(), location.origin + location.pathname + "#weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,1,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18");
});
