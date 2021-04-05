
QUnit.module("export-unit-tests", {
    beforeEach: function(assert) {
        renderGearOLD();
        renderPassives();
        renderAnimaAllocation();
        renderButtonbar(); // TODO/REFACTOR : remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateGearHandlers();
        initiateButtonBar();
        initiateAnimaAllocation();
        initiatePassives();
        initiateExport();
        createTankBuild();
    }
});

QUnit.test("should start export url and set in textfield", function(assert) {
    swlcalc.export.startExportUrl();
    assert.equal($("#export-text").val(), location.origin + location.pathname + "#weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,13,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18&agent1=2,25&agent2=42,50&agent3=0,25&aa=66,55,44&passives=2000,2000,3300,1512,1500,2997,756,1008,756,2259,753,753,810,810,2430,7.5,7.5,30,30");
});
