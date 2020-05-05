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


function renderAgents() {
    for (var i = 0; i < 3; i++) {
        renderTemplate("agent", {
            id: i
        });
    }
}

function renderSummary() {
    renderTemplate("summary", {});
}

function renderButtonbar() {
    renderTemplate("navbar", {});
    renderTemplate("exportmodal", {});
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
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slot = swlcalc.data.template_data.slots[i];
        swlcalc.handler[slot.id] = new swlcalc.gear.SlotHandler(slot);
        swlcalc.handler[slot.id].init();
    }
}

function initiateAgentHandlers() {
    for (var i = 1; i <= 4; i++) {
        swlcalc.agenthandler[i] = new swlcalc.gear.AgentSlotHandler(i);
        swlcalc.agenthandler[i].init();
    }
}

function initiateButtonBar() {
    swlcalc.buttonBar.init();
}

function initiateExport() {
    swlcalc.export.init();
}
