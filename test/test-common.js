//TODO/REFACTOR : use these functions for each test module setup !

function renderSlots() {
    renderTemplate("slots_recap", {
        slots_recap: swlcalc.data.template_data.slots
    });
    renderTemplate("slots_edit", {
        slots_edit: swlcalc.data.template_data.slots
    });

    swlcalc.gear.init();
}

function renderSummary() {
    renderTemplate("summary", {});
}

function renderButtonbar() {
    renderTemplate("buttonbar", {});
}

function renderTemplate(template_name, data) {
    dust.render(template_name, data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $("#qunit-fixture").append(out);
    });
}

function clearFixture() {
    $("#qunit-fixture").html("");
}

function initiateSummary() {
    swlcalc.summary.init();
}

function initiateSwapHandlers() {
    swlcalc.swap['weapon'] = new swlcalc.swap.SwapHandler('weapon');
    swlcalc.swap['weapon'].init();
    swlcalc.swap['weapon2'] = new swlcalc.swap.SwapHandler('weapon2');
    swlcalc.swap['weapon2'].init();
}

function initiateControllerHandlers() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slot = swlcalc.data.template_data.slots[ i ];
        swlcalc.controller[slot.id] = new swlcalc.controller.ControllerHandler(slot);
        swlcalc.controller[slot.id].init();
    }
}

function initiateButtonBar() {
    swlcalc.buttonBar.init();
}

function initiateExport() {
    swlcalc.export.init();
}
