//TODO/REFACTOR : use these functions for each test module setup !

function renderGear() {
    renderTemplate("slots_recap", {
        slots: swlcalc.data.templateData.slots
    });
    renderTemplate("slots_edit", {
        slots: swlcalc.data.templateData.slots
    });

    for (var i = 0; i < 3; i++) {
        renderTemplate("agent", {
            id: (i + 1)
        });
    }

    swlcalc.gear.init();
}

function renderAnimaAllocation() {
    renderTemplate("anima_allocation", {});
}

function renderSummary() {
    renderTemplate("summary", {});
}

function renderButtonbar() {
    renderTemplate("navbar", {});
    renderTemplate("export_modal", {});
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

function initiateHandlers() {
    initiateSlotHandlers()
    initiateAgentHandlers()
}

function initiateSlotHandlers() {
    for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
        var slot = swlcalc.data.templateData.slots[i];
        swlcalc.handler[slot.id] = new swlcalc.gear.SlotHandler(slot);
        swlcalc.handler[slot.id].init();
    }
}

function initiateAgentHandlers() {
    for (var i = 0; i < 3; i++) {
        swlcalc.agenthandler[i] = new swlcalc.gear.AgentSlotHandler(i);
        swlcalc.agenthandler[i].init();
    }
}

function initiateButtonBar() {
    swlcalc.buttonBar.init();
}

function initiateAnimaAllocation() {
    swlcalc.animaAllocation.init();
}

function initiateExport() {
    swlcalc.export.init();
}

function initiatePassives() {
    swlcalc.passives.init();
}
