/* GEAR ----------------------------------------------------------------------*/
function renderGear() {
    renderTemplate("slots_recap", {
        slots: swlcalc.data.templateData.slots
    });
    renderTemplate("slots_edit", {
        slots: swlcalc.data.templateData.slots
    });

    renderAgents();
}
function includeGear() {
    renderGear();
    swlcalc.gear.init();
    initiateSlotHandlers();
    initiateAgentsHandlers();
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
function initiateAgentsHandlers() {
    for (var i = 0; i < 3; i++) {
        swlcalc.agenthandler[i] = new swlcalc.gear.AgentSlotHandler(i);
        swlcalc.agenthandler[i].init();
    }
}
function includeAgents() {
    renderAgents();
    swlcalc.gear.initAgents();
    initiateAgentsHandlers();
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
function includePassives() {
    renderPassives();
    swlcalc.passives.init();
}
/* SUMMARY -------------------------------------------------------------------*/
function renderSummary() {
    renderTemplate("summary", {});
}
function includeSummary() {
    renderSummary();
    swlcalc.summary.init();
}
/* BUTTONBAR -----------------------------------------------------------------*/
function renderButtonbar() {
    renderTemplate("navbar", {});
    renderTemplate("export_modal", {});
}
function includeButtonBar() {
    renderButtonbar();
    swlcalc.buttonBar.init();
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
function includeCoreModules() {
    includeGear();
    includeAnimaAllocation();
    includeSummary();
    includePassives();
}
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
