
QUnit.module("import-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        renderButtonbar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateButtonBar();
        initiateSummary();
        initiateControllerHandlers();
    }
});

//TODO/TEST : test to complete/enhance
// - phys & mag protection (TODO/FEATURE)
QUnit.test("should import URL and set summary and slots", function(assert) {
    var vars = {
        head: "3,1,1,30,4,1,3,1,2,20,15",
        luck: "3,1,1,1,3,4,2,20,3,8,6",
        neck: "3,1,1,30,3,5,2,20,2,10,3",
        occult: "3,1,1,1,3,4,2,20,3,4,18",
        finger: "3,1,1,30,3,5,2,20,1,10,9",
        waist: "3,1,1,30,3,4,2,20,2,3,11",
        weapon: "3,1,1,30,2,2,1,1,0,6,0",
        weapon2: "3,2,3,30,2,2,1,1,0,2,0",
        wrist: "3,1,1,1,3,5,2,20,1,1,14"
    };

    swlcalc.import.start(vars);

    // Summary
    // --- Primary Stats
    assert.equal($("#stat-ilvl").html(), "377");
    assert.equal($("#stat-power-rating").html(), "3730");
    assert.equal($("#stat-weapon-power").html(), "1832");
    assert.equal($("#stat-attack-rating").html(), "8052");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "7512");
    assert.equal($("#stat-combat-power").html(), "741");
    assert.equal($("#stat-healing-power").html(), "461");

    // --- Offensive Stats
    assert.equal($("#stat-critical-rating").html(), "+841");
    assert.equal($("#stat-critical-chance").html(), "13.9%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.6%");
    assert.equal($("#stat-hit-rating").html(), "+1244");
    assert.equal($("#stat-glance-reduction").html(), "24.5%");

    // --- Defensive Stats
    assert.equal($("#stat-defense-rating").html(), "+1896");
    assert.equal($("#stat-glance-chance").html(), "18.6%");
    assert.equal($("#stat-evade-rating").html(), "+1896");
    assert.equal($("#stat-evade-chance").html(), "13.0%");

    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');

    assert.equal($("#weapon-edit-ilvl").html(), "353");
    assert.equal($("#weapon-edit-equipment-id").val(), "1");
    assert.equal($("#weapon-edit-equipment-rarity").val(), "epic");
    assert.equal($("#weapon-edit-equipment-quality").val(), "1");
    assert.equal($("#weapon-edit-equipment-level").val(), "30");
    assert.equal($("#weapon-edit-equipment-stat-value").html(), "1832");
    assert.equal($("#weapon-edit-equipment-ilvl").html(), "320");
    assert.equal($("#weapon-edit-glyph-id").val(), "critical-rating");
    assert.equal($("#weapon-edit-glyph-rarity").val(), "superior");
    assert.equal($("#weapon-edit-glyph-quality").val(), "1");
    assert.equal($("#weapon-edit-glyph-level").val(), "1");
    assert.equal($("#weapon-edit-glyph-stat-rating").html(), "+85");
    assert.equal($("#weapon-edit-glyph-stat-text").html(), "Critical Rating");
    assert.equal($("#weapon-edit-glyph-ilvl").html(), "34");
    assert.equal($("#weapon-edit-signet-id").val(), "6");
    assert.equal($("#weapon-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon-edit-signet-level").val(), undefined);
    assert.equal($("#weapon-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon-edit-signet-description").html(), 'When you hit or heal a target with this weapon you have a 50% chance to restore <span id=\"weapon-edit-signet-bonus-wrapper\" class=\"bonus-val color-standard\"><span id=\"weapon-edit-signet-bonus\">0.75</span>%</span> of your health.');

    assert.equal($("#weapon2-edit-ilvl").html(), "353");
    assert.equal($("#weapon2-edit-equipment-id").val(), "2");
    assert.equal($("#weapon2-edit-equipment-rarity").val(), "epic");
    assert.equal($("#weapon2-edit-equipment-quality").val(), "3");
    assert.equal($("#weapon2-edit-equipment-level").val(), "30");
    assert.equal($("#weapon2-edit-equipment-stat-value").html(), "1832");
    assert.equal($("#weapon2-edit-equipment-ilvl").html(), "320");
    assert.equal($("#weapon2-edit-glyph-id").val(), "critical-rating");
    assert.equal($("#weapon2-edit-glyph-rarity").val(), "superior");
    assert.equal($("#weapon2-edit-glyph-quality").val(), "1");
    assert.equal($("#weapon2-edit-glyph-level").val(), "1");
    assert.equal($("#weapon2-edit-glyph-stat-rating").html(), "+85");
    assert.equal($("#weapon2-edit-glyph-stat-text").html(), "Critical Rating");
    assert.equal($("#weapon2-edit-glyph-ilvl").html(), "34");
    assert.equal($("#weapon2-edit-signet-id").val(), "2");
    assert.equal($("#weapon2-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon2-edit-signet-level").val(), undefined);
    assert.equal($("#weapon2-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon2-edit-signet-description").html(), 'This weapon deals <span id=\"weapon2-edit-signet-bonus-wrapper\" class=\"bonus-val color-epic\"><span id=\"weapon2-edit-signet-bonus\">333.45</span></span> additional damage to enemies that are below 35% health.');

    assert.equal($("#head-edit-ilvl").html(), "480");
    assert.equal($("#head-edit-equipment-id").val(), "1");
    assert.equal($("#head-edit-equipment-rarity").val(), "epic");
    assert.equal($("#head-edit-equipment-quality").val(), "1");
    assert.equal($("#head-edit-equipment-level").val(), "30");
    assert.equal($("#head-edit-equipment-stat-value").html(), "1070");
    assert.equal($("#head-edit-equipment-ilvl").html(), "278");
    assert.equal($("#head-edit-glyph-id").val(), "hit-rating");
    assert.equal($("#head-edit-glyph-rarity").val(), "mythic");
    assert.equal($("#head-edit-glyph-quality").val(), "3");
    assert.equal($("#head-edit-glyph-level").val(), "1");
    assert.equal($("#head-edit-glyph-stat-rating").html(), "+488");
    assert.equal($("#head-edit-glyph-stat-text").html(), "Hit Rating");
    assert.equal($("#head-edit-glyph-ilvl").html(), "175");
    assert.equal($("#head-edit-signet-id").val(), "20");
    assert.equal($("#head-edit-signet-rarity").val(), "superior");
    assert.equal($("#head-edit-signet-level").val(), "15");
    assert.equal($("#head-edit-signet-ilvl").html(), "26");
    assert.equal($("#head-edit-signet-description").html(), 'Reduces the cooldown of all Elite Abilities by <span id="head-edit-signet-bonus" class="bonus-val const">7.0286</span><span class="bonus-val const">%</span>.');

    assert.equal($("#finger-edit-ilvl").html(), "411");
    assert.equal($("#finger-edit-equipment-id").val(), "1");
    assert.equal($("#finger-edit-equipment-rarity").val(), "epic");
    assert.equal($("#finger-edit-equipment-quality").val(), "1");
    assert.equal($("#finger-edit-equipment-level").val(), "30");
    assert.equal($("#finger-edit-equipment-stat-value").html(), "642");
    assert.equal($("#finger-edit-equipment-ilvl").html(), "278");
    assert.equal($("#finger-edit-glyph-id").val(), "defense-rating");
    assert.equal($("#finger-edit-glyph-rarity").val(), "epic");
    assert.equal($("#finger-edit-glyph-quality").val(), "2");
    assert.equal($("#finger-edit-glyph-level").val(), "20");
    assert.equal($("#finger-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#finger-edit-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#finger-edit-glyph-ilvl").html(), "128");
    assert.equal($("#finger-edit-signet-id").val(), "10");
    assert.equal($("#finger-edit-signet-rarity").val(), "standard");
    assert.equal($("#finger-edit-signet-level").val(), "9");
    assert.equal($("#finger-edit-signet-ilvl").html(), "5");
    assert.equal($("#finger-edit-signet-description").html(), 'Increases the damage and healing of all Basic Abilities by <span id="finger-edit-signet-bonus" class="bonus-val const">2.1011</span><span class="bonus-val const">%</span>.');

    assert.equal($("#neck-edit-ilvl").html(), "421");
    assert.equal($("#neck-edit-equipment-id").val(), "1");
    assert.equal($("#neck-edit-equipment-rarity").val(), "epic");
    assert.equal($("#neck-edit-equipment-quality").val(), "1");
    assert.equal($("#neck-edit-equipment-level").val(), "30");
    assert.equal($("#neck-edit-equipment-stat-value").html(), "642");
    assert.equal($("#neck-edit-equipment-ilvl").html(), "278");
    assert.equal($("#neck-edit-glyph-id").val(), "defense-rating");
    assert.equal($("#neck-edit-glyph-rarity").val(), "epic");
    assert.equal($("#neck-edit-glyph-quality").val(), "2");
    assert.equal($("#neck-edit-glyph-level").val(), "20");
    assert.equal($("#neck-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#neck-edit-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#neck-edit-glyph-ilvl").html(), "128");
    assert.equal($("#neck-edit-signet-id").val(), "10");
    assert.equal($("#neck-edit-signet-rarity").val(), "superior");
    assert.equal($("#neck-edit-signet-level").val(), "3");
    assert.equal($("#neck-edit-signet-ilvl").html(), "16");
    assert.equal($("#neck-edit-signet-description").html(), 'Increases the damage and healing of all Power Abilities by <span id="neck-edit-signet-bonus" class="bonus-val const">1.6271</span><span class="bonus-val const">%</span>.');

    assert.equal($("#wrist-edit-ilvl").html(), "286");
    assert.equal($("#wrist-edit-equipment-id").val(), "1");
    assert.equal($("#wrist-edit-equipment-rarity").val(), "epic");
    assert.equal($("#wrist-edit-equipment-quality").val(), "1");
    assert.equal($("#wrist-edit-equipment-level").val(), "1");
    assert.equal($("#wrist-edit-equipment-stat-value").html(), "406");
    assert.equal($("#wrist-edit-equipment-ilvl").html(), "150");
    assert.equal($("#wrist-edit-glyph-id").val(), "defense-rating");
    assert.equal($("#wrist-edit-glyph-rarity").val(), "epic");
    assert.equal($("#wrist-edit-glyph-quality").val(), "2");
    assert.equal($("#wrist-edit-glyph-level").val(), "20");
    assert.equal($("#wrist-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#wrist-edit-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#wrist-edit-glyph-ilvl").html(), "128");
    assert.equal($("#wrist-edit-signet-id").val(), "1");
    assert.equal($("#wrist-edit-signet-rarity").val(), "standard");
    assert.equal($("#wrist-edit-signet-level").val(), "14");
    assert.equal($("#wrist-edit-signet-ilvl").html(), "8");
    assert.equal($("#wrist-edit-signet-description").html(), 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-edit-signet-bonus" class="bonus-val const">2.6362</span><span class="bonus-val const">%</span>.');

    assert.equal($("#luck-edit-ilvl").html(), "325");
    assert.equal($("#luck-edit-equipment-id").val(), "1");
    assert.equal($("#luck-edit-equipment-rarity").val(), "epic");
    assert.equal($("#luck-edit-equipment-quality").val(), "1");
    assert.equal($("#luck-edit-equipment-level").val(), "1");
    assert.equal($("#luck-edit-equipment-stat-value").html(), "271");
    assert.equal($("#luck-edit-equipment-ilvl").html(), "150");
    assert.equal($("#luck-edit-glyph-id").val(), "evade-rating");
    assert.equal($("#luck-edit-glyph-rarity").val(), "epic");
    assert.equal($("#luck-edit-glyph-quality").val(), "2");
    assert.equal($("#luck-edit-glyph-level").val(), "20");
    assert.equal($("#luck-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#luck-edit-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#luck-edit-glyph-ilvl").html(), "128");
    assert.equal($("#luck-edit-signet-id").val(), "8");
    assert.equal($("#luck-edit-signet-rarity").val(), "epic");
    assert.equal($("#luck-edit-signet-level").val(), "6");
    assert.equal($("#luck-edit-signet-ilvl").html(), "47");
    assert.equal($("#luck-edit-signet-description").html(), 'When you critically hit, you are given a beneficial effect that damages attackers for <span id="luck-edit-signet-bonus" class="bonus-val dps">69.7008</span> when they hit you for <span class="bonus-val const">5</span> seconds. This ability can only occur once every <span class="bonus-val const">15</span> seconds.');

    assert.equal($("#waist-edit-ilvl").html(), "428");
    assert.equal($("#waist-edit-equipment-id").val(), "1");
    assert.equal($("#waist-edit-equipment-rarity").val(), "epic");
    assert.equal($("#waist-edit-equipment-quality").val(), "1");
    assert.equal($("#waist-edit-equipment-level").val(), "30");
    assert.equal($("#waist-edit-equipment-stat-value").html(), "428");
    assert.equal($("#waist-edit-equipment-ilvl").html(), "278");
    assert.equal($("#waist-edit-glyph-id").val(), "evade-rating");
    assert.equal($("#waist-edit-glyph-rarity").val(), "epic");
    assert.equal($("#waist-edit-glyph-quality").val(), "2");
    assert.equal($("#waist-edit-glyph-level").val(), "20");
    assert.equal($("#waist-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#waist-edit-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#waist-edit-glyph-ilvl").html(), "128");
    assert.equal($("#waist-edit-signet-id").val(), "3");
    assert.equal($("#waist-edit-signet-rarity").val(), "superior");
    assert.equal($("#waist-edit-signet-level").val(), "11");
    assert.equal($("#waist-edit-signet-ilvl").html(), "23");
    assert.equal($("#waist-edit-signet-description").html(), 'Reduces the cooldown of Gadgets by <span id="waist-edit-signet-bonus" class="bonus-val const">17.5547</span><span class="bonus-val const">%</span>.');

    assert.equal($("#occult-edit-ilvl").html(), "339");
    assert.equal($("#occult-edit-equipment-id").val(), "1");
    assert.equal($("#occult-edit-equipment-rarity").val(), "epic");
    assert.equal($("#occult-edit-equipment-quality").val(), "1");
    assert.equal($("#occult-edit-equipment-level").val(), "1");
    assert.equal($("#occult-edit-equipment-stat-value").html(), "271");
    assert.equal($("#occult-edit-equipment-ilvl").html(), "150");
    assert.equal($("#occult-edit-glyph-id").val(), "evade-rating");
    assert.equal($("#occult-edit-glyph-rarity").val(), "epic");
    assert.equal($("#occult-edit-glyph-quality").val(), "2");
    assert.equal($("#occult-edit-glyph-level").val(), "20");
    assert.equal($("#occult-edit-glyph-stat-rating").html(), "+381");
    assert.equal($("#occult-edit-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#occult-edit-glyph-ilvl").html(), "128");
    assert.equal($("#occult-edit-signet-id").val(), "4");
    assert.equal($("#occult-edit-signet-rarity").val(), "epic");
    assert.equal($("#occult-edit-signet-level").val(), "18");
    assert.equal($("#occult-edit-signet-ilvl").html(), "61");
    assert.equal($("#occult-edit-signet-description").html(), 'After using Active Dodge, you receive a speed bonus of <span id="occult-edit-signet-bonus" class="bonus-val const">26.1579</span><span class="bonus-val const">%</span> for <span class="bonus-val const">4</span> seconds.');
});
