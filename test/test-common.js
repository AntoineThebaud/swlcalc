/* GEAR ----------------------------------------------------------------------*/
// TEMP keep old version for not-yet-updated tests
function renderGearOLD() {
    renderTemplate("slots_recap", {
        slots: swlcalc.data.templateData.slots
    });
    renderTemplate("slots_edit", {
        slots: swlcalc.data.templateData.slots
    });

    renderAgents();

    initiateGear();
}
function renderGear() {
    renderTemplate("slots_recap", {
        slots: swlcalc.data.templateData.slots
    });
    renderTemplate("slots_edit", {
        slots: swlcalc.data.templateData.slots
    });

    renderAgents();
}
function initiateGear() {
    swlcalc.gear.init();
}
function initiateGearHandlers() {
    initiateSlotHandlers();
    initiateAgentHandlers();
}
function includeGear() {
    renderGear();
    initiateGear();
    initiateGearHandlers();
}
/* SLOTS --------------------------------------------------------------------*/
function initiateSlots() {
    swlcalc.gear.initSlots();
}
function initiateSlotHandlers() {
    for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
        var slot = swlcalc.data.templateData.slots[i];
        swlcalc.handler[slot.id] = new swlcalc.gear.SlotHandler(slot);
        swlcalc.handler[slot.id].init();
    }
}
/* AGENTS --------------------------------------------------------------------*/
function renderAgents() {
    for (var i = 0; i < 3; i++) {
        renderTemplate("agent", {
            id: (i + 1)
        });
    }
}
function initiateAgents() {
    swlcalc.gear.initAgents();
}
function initiateAgentHandlers() {
    for (var i = 0; i < 3; i++) {
        swlcalc.agenthandler[i] = new swlcalc.gear.AgentSlotHandler(i);
        swlcalc.agenthandler[i].init();
    }
}
function includeAgents() {
    renderAgents();
    initiateAgents();
    initiateAgentHandlers();
}
/* ANIMA ALLOCATION  ---------------------------------------------------------*/
function renderAnimaAllocation() {
    renderTemplate("anima_allocation", {});
}
function initiateAnimaAllocation() {
    swlcalc.animaAllocation.init();
}
function includeAnimaAllocation() {
    renderAnimaAllocation();
    initiateAnimaAllocation();
}
/* PASSIVES ------------------------------------------------------------------*/
function renderPassives() {
    renderTemplate("passives", {
        passives: swlcalc.data.stats.passives
    });
}
function initiatePassives() {
    swlcalc.passives.init();
}
function includePassives() {
    renderPassives();
    initiatePassives();
}
/* SUMMARY -------------------------------------------------------------------*/
function renderSummary() {
    renderTemplate("summary", {});
}
function initiateSummary() {
    swlcalc.summary.init();
}
function includeSummary() {
    renderSummary();
    initiateSummary();
}
/* BUTTONBAR -----------------------------------------------------------------*/
function renderButtonbar() {
    renderTemplate("navbar", {});
    renderTemplate("export_modal", {});
}
function initiateButtonBar() {
    swlcalc.buttonBar.init();
}
function includeButtonBar() {
    renderButtonbar();
    initiateButtonBar();
}
/* EXPORT --------------------------------------------------------------------*/
function initiateExport() {
    swlcalc.export.init();
}
/* SWAP ----------------------------------------------------------------------*/
function initiateSwapHandlers() {
    swlcalc.swap['weapon'] = new swlcalc.swap.SwapHandler('weapon');
    swlcalc.swap['weapon'].init();
    swlcalc.swap['weapon2'] = new swlcalc.swap.SwapHandler('weapon2');
    swlcalc.swap['weapon2'].init();
}
/* OTHER ---------------------------------------------------------------------*/
function clearFixture() {
    $("#qunit-fixture").html("");
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
