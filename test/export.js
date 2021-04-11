
QUnit.module("export-integration-tests", {
    beforeEach: function(assert) {
        includeGear();
        includeAnimaAllocation();
        includePassives();
        includeButtonBar();
        initiateExport();

        createShuffledBuild();
    }
});

QUnit.test("should start export url and set in textfield", function(assert) {
    swlcalc.export.startExportUrl();
    assert.equal($("#export-text").val(), location.origin + location.pathname + "#weapon=5,119,3,19,2,2,1,20,0,2,0&weapon2=4,27,2,28,3,4,4,17,0,8,0&head=1,3,1,4,2,1,3,11,3,10,15&finger=5,2,3,69,4,2,1,11,3,1,7&neck=4,5,3,35,1,0,1,20,1,0,20&wrist=1,0,1,20,3,3,4,20,1,0,20&luck=1,0,1,20,1,0,1,20,5,8,20&waist=2,13,3,1,2,3,2,1,2,1,1&occult=5,4,4,70,1,0,1,20,3,2,13&agent1=15,50&agent2=37,25&agent3=10,50&aa=38,5,57&passives=1400,880,960,388,916,2997,488,477,634,2154,494,753,520,270,1950,7.2,4.2,28.8,16.8");
});
