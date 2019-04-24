//TODO/REFACTOR : use these functions for each test module setup !

function renderSlots() {
    renderTemplate("slots_recap_layout", {
        slots_recap_layout: swlcalc.data.template_data.slots
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

function initiateButtonHandlers() {
    swlcalc.button.init();
}

function initiateSelectHandlers() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slot = swlcalc.data.template_data.slots[ i ];
        swlcalc.select[ slot.id_prefix ] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[ slot.id_prefix ].init();
    }
}

function initiateButtonBar() {
    swlcalc.buttonBar.init();
}
