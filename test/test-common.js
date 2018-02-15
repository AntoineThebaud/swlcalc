function renderSlots() {
    renderTemplate('slots', {
        slots: swlcalc.data.template_data.slots,
        signets: swlcalc.data.signets
    });
    swlcalc.slots.init();
    renderMiscSlot();
}

function renderMiscSlot() {
    renderTemplate('miscslot', {});
    swlcalc.miscslot.init();
}

function renderSummary() {
    renderTemplate('summary', {});
}

function renderButtonbar() {
    renderTemplate("buttonbar", {});
}

function renderGlyphButtons(id_prefix, id_suffix) {
    renderTemplate('glyphbuttons', {
        id_prefix: id_prefix,
        id_suffix: id_suffix
    });
}

function renderTemplate(template_name, data) {
    dust.render(template_name, data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').append(out);
    });
}

function clearFixture() {
    $('#qunit-fixture').html('');
}

function initiateSummary() {
    swlcalc.summary.init();
}

function initiateButtonHandlers() {
    swlcalc.button.init();
}

function initiateSelectHandlers() {
    for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
        var slot = swlcalc.data.template_data.slots[i];
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].initiate();
    }
}
