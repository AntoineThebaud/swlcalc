
QUnit.module("import-unit-tests", {
    beforeEach: function(assert) {
        renderSlots();
        renderSummary();
        renderButtonbar(); // remove need of button bar in this unit test (= save anima allocation as attribute to gear maybe ?)
        initiateButtonBar();
        initiateSummary();
        initiateSelectHandlers();
    }
});

//TODO/TEST : test to complete/enhance
// - phys & mag protection (TODO/FEATURE)
// - add real signets (TODO/FEATURE)
// - add slot titles (TODO/FEATURE)
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
    assert.equal($("#stat-critical-chance").html(), "13.8%");
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

    assert.equal($("#weapon-ilvl").html(), "353");
    assert.equal($("#weapon-equipment-id").val(), "1");
    assert.equal($("#weapon-equipment-rarity").val(), "epic");
    assert.equal($("#weapon-equipment-quality").val(), "1");
    assert.equal($("#weapon-equipment-level").val(), "30");
    assert.equal($("#weapon-equipment-stat-value").html(), "1832");
    assert.equal($("#weapon-equipment-ilvl").html(), "320");
    assert.equal($("#weapon-glyph-id").val(), "critical-rating");
    assert.equal($("#weapon-glyph-rarity").val(), "superior");
    assert.equal($("#weapon-glyph-quality").val(), "1");
    assert.equal($("#weapon-glyph-level").val(), "1");
    assert.equal($("#weapon-glyph-stat-rating").html(), "+85");
    assert.equal($("#weapon-glyph-stat-text").html(), "Critical Rating");
    assert.equal($("#weapon-glyph-ilvl").html(), "34");
    assert.equal($("#weapon-signet-id").val(), "6");
    assert.equal($("#weapon-signet-rarity").val(), undefined);
    assert.equal($("#weapon-signet-level").val(), undefined);
    assert.equal($("#weapon-signet-ilvl").html(), undefined);
    assert.equal($("#weapon-signet-description").html(), 'When you hit or heal a target with this weapon you have a <span class="bonus-val const">50%</span> chance to restore <span id="weapon-signet-bonus" class="bonus-val const">0.75</span><span class="bonus-val const">%</span> of your health.');

    assert.equal($("#weapon2-ilvl").html(), "353");
    assert.equal($("#weapon2-equipment-id").val(), "2");
    assert.equal($("#weapon2-equipment-rarity").val(), "epic");
    assert.equal($("#weapon2-equipment-quality").val(), "3");
    assert.equal($("#weapon2-equipment-level").val(), "30");
    assert.equal($("#weapon2-equipment-stat-value").html(), "1832");
    assert.equal($("#weapon2-equipment-ilvl").html(), "320");
    assert.equal($("#weapon2-glyph-id").val(), "critical-rating");
    assert.equal($("#weapon2-glyph-rarity").val(), "superior");
    assert.equal($("#weapon2-glyph-quality").val(), "1");
    assert.equal($("#weapon2-glyph-level").val(), "1");
    assert.equal($("#weapon2-glyph-stat-rating").html(), "+85");
    assert.equal($("#weapon2-glyph-stat-text").html(), "Critical Rating");
    assert.equal($("#weapon2-glyph-ilvl").html(), "34");
    assert.equal($("#weapon2-signet-id").val(), "2");
    assert.equal($("#weapon2-signet-rarity").val(), undefined);
    assert.equal($("#weapon2-signet-level").val(), undefined);
    assert.equal($("#weapon2-signet-ilvl").html(), undefined);
    assert.equal($("#weapon2-signet-description").html(), 'This weapon deals <span id="weapon2-signet-bonus" class="bonus-val attack">333.45</span> additional damage to enemies that are below <span class="bonus-val const">35%</span> health.');

    assert.equal($("#head-ilvl").html(), "480");
    assert.equal($("#head-equipment-id").val(), "1");
    assert.equal($("#head-equipment-rarity").val(), "epic");
    assert.equal($("#head-equipment-quality").val(), "1");
    assert.equal($("#head-equipment-level").val(), "30");
    assert.equal($("#head-equipment-stat-value").html(), "1070");
    assert.equal($("#head-equipment-ilvl").html(), "278");
    assert.equal($("#head-glyph-id").val(), "hit-rating");
    assert.equal($("#head-glyph-rarity").val(), "mythic");
    assert.equal($("#head-glyph-quality").val(), "3");
    assert.equal($("#head-glyph-level").val(), "1");
    assert.equal($("#head-glyph-stat-rating").html(), "+488");
    assert.equal($("#head-glyph-stat-text").html(), "Hit Rating");
    assert.equal($("#head-glyph-ilvl").html(), "175");
    assert.equal($("#head-signet-id").val(), "20");
    assert.equal($("#head-signet-rarity").val(), "superior");
    assert.equal($("#head-signet-level").val(), "15");
    assert.equal($("#head-signet-ilvl").html(), "26");
    assert.equal($("#head-signet-description").html(), 'Reduces the cooldown of all Elite Abilities by <span id="head-signet-bonus" class="bonus-val const">7.0286</span><span class="bonus-val const">%</span>.');

    assert.equal($("#finger-ilvl").html(), "411");
    assert.equal($("#finger-equipment-id").val(), "1");
    assert.equal($("#finger-equipment-rarity").val(), "epic");
    assert.equal($("#finger-equipment-quality").val(), "1");
    assert.equal($("#finger-equipment-level").val(), "30");
    assert.equal($("#finger-equipment-stat-value").html(), "642");
    assert.equal($("#finger-equipment-ilvl").html(), "278");
    assert.equal($("#finger-glyph-id").val(), "defense-rating");
    assert.equal($("#finger-glyph-rarity").val(), "epic");
    assert.equal($("#finger-glyph-quality").val(), "2");
    assert.equal($("#finger-glyph-level").val(), "20");
    assert.equal($("#finger-glyph-stat-rating").html(), "+381");
    assert.equal($("#finger-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#finger-glyph-ilvl").html(), "128");
    assert.equal($("#finger-signet-id").val(), "10");
    assert.equal($("#finger-signet-rarity").val(), "standard");
    assert.equal($("#finger-signet-level").val(), "9");
    assert.equal($("#finger-signet-ilvl").html(), "5");
    assert.equal($("#finger-signet-description").html(), 'Increases the damage and healing of all Basic Abilities by <span id="finger-signet-bonus" class="bonus-val const">2.1011</span><span class="bonus-val const">%</span>.');

    assert.equal($("#neck-ilvl").html(), "421");
    assert.equal($("#neck-equipment-id").val(), "1");
    assert.equal($("#neck-equipment-rarity").val(), "epic");
    assert.equal($("#neck-equipment-quality").val(), "1");
    assert.equal($("#neck-equipment-level").val(), "30");
    assert.equal($("#neck-equipment-stat-value").html(), "642");
    assert.equal($("#neck-equipment-ilvl").html(), "278");
    assert.equal($("#neck-glyph-id").val(), "defense-rating");
    assert.equal($("#neck-glyph-rarity").val(), "epic");
    assert.equal($("#neck-glyph-quality").val(), "2");
    assert.equal($("#neck-glyph-level").val(), "20");
    assert.equal($("#neck-glyph-stat-rating").html(), "+381");
    assert.equal($("#neck-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#neck-glyph-ilvl").html(), "128");
    assert.equal($("#neck-signet-id").val(), "10");
    assert.equal($("#neck-signet-rarity").val(), "superior");
    assert.equal($("#neck-signet-level").val(), "3");
    assert.equal($("#neck-signet-ilvl").html(), "16");
    assert.equal($("#neck-signet-description").html(), 'Increases the damage and healing of all Power Abilities by <span id="neck-signet-bonus" class="bonus-val const">1.6271</span><span class="bonus-val const">%</span>.');

    assert.equal($("#wrist-ilvl").html(), "286");
    assert.equal($("#wrist-equipment-id").val(), "1");
    assert.equal($("#wrist-equipment-rarity").val(), "epic");
    assert.equal($("#wrist-equipment-quality").val(), "1");
    assert.equal($("#wrist-equipment-level").val(), "1");
    assert.equal($("#wrist-equipment-stat-value").html(), "406");
    assert.equal($("#wrist-equipment-ilvl").html(), "150");
    assert.equal($("#wrist-glyph-id").val(), "defense-rating");
    assert.equal($("#wrist-glyph-rarity").val(), "epic");
    assert.equal($("#wrist-glyph-quality").val(), "2");
    assert.equal($("#wrist-glyph-level").val(), "20");
    assert.equal($("#wrist-glyph-stat-rating").html(), "+381");
    assert.equal($("#wrist-glyph-stat-text").html(), "Defense Rating");
    assert.equal($("#wrist-glyph-ilvl").html(), "128");
    assert.equal($("#wrist-signet-id").val(), "1");
    assert.equal($("#wrist-signet-rarity").val(), "standard");
    assert.equal($("#wrist-signet-level").val(), "14");
    assert.equal($("#wrist-signet-ilvl").html(), "8");
    assert.equal($("#wrist-signet-description").html(), 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-signet-bonus" class="bonus-val const">2.6362</span><span class="bonus-val const">%</span>.');

    assert.equal($("#luck-ilvl").html(), "325");
    assert.equal($("#luck-equipment-id").val(), "1");
    assert.equal($("#luck-equipment-rarity").val(), "epic");
    assert.equal($("#luck-equipment-quality").val(), "1");
    assert.equal($("#luck-equipment-level").val(), "1");
    assert.equal($("#luck-equipment-stat-value").html(), "271");
    assert.equal($("#luck-equipment-ilvl").html(), "150");
    assert.equal($("#luck-glyph-id").val(), "evade-rating");
    assert.equal($("#luck-glyph-rarity").val(), "epic");
    assert.equal($("#luck-glyph-quality").val(), "2");
    assert.equal($("#luck-glyph-level").val(), "20");
    assert.equal($("#luck-glyph-stat-rating").html(), "+381");
    assert.equal($("#luck-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#luck-glyph-ilvl").html(), "128");
    assert.equal($("#luck-signet-id").val(), "8");
    assert.equal($("#luck-signet-rarity").val(), "epic");
    assert.equal($("#luck-signet-level").val(), "6");
    assert.equal($("#luck-signet-ilvl").html(), "47");
    assert.equal($("#luck-signet-description").html(), 'When you critically hit, you are given a beneficial effect that damages attackers for <span id="luck-signet-bonus" class="bonus-val attack">69.7008</span> when they hit you for <span class="bonus-val const">5</span> seconds. This ability can only occur once every <span class="bonus-val const">15</span> seconds.');

    assert.equal($("#waist-ilvl").html(), "428");
    assert.equal($("#waist-equipment-id").val(), "1");
    assert.equal($("#waist-equipment-rarity").val(), "epic");
    assert.equal($("#waist-equipment-quality").val(), "1");
    assert.equal($("#waist-equipment-level").val(), "30");
    assert.equal($("#waist-equipment-stat-value").html(), "428");
    assert.equal($("#waist-equipment-ilvl").html(), "278");
    assert.equal($("#waist-glyph-id").val(), "evade-rating");
    assert.equal($("#waist-glyph-rarity").val(), "epic");
    assert.equal($("#waist-glyph-quality").val(), "2");
    assert.equal($("#waist-glyph-level").val(), "20");
    assert.equal($("#waist-glyph-stat-rating").html(), "+381");
    assert.equal($("#waist-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#waist-glyph-ilvl").html(), "128");
    assert.equal($("#waist-signet-id").val(), "3");
    assert.equal($("#waist-signet-rarity").val(), "superior");
    assert.equal($("#waist-signet-level").val(), "11");
    assert.equal($("#waist-signet-ilvl").html(), "23");
    assert.equal($("#waist-signet-description").html(), 'Reduces the cooldown of Gadgets by <span id="waist-signet-bonus" class="bonus-val const">17.5547</span><span class="bonus-val const">%</span>.');

    assert.equal($("#occult-ilvl").html(), "339");
    assert.equal($("#occult-equipment-id").val(), "1");
    assert.equal($("#occult-equipment-rarity").val(), "epic");
    assert.equal($("#occult-equipment-quality").val(), "1");
    assert.equal($("#occult-equipment-level").val(), "1");
    assert.equal($("#occult-equipment-stat-value").html(), "271");
    assert.equal($("#occult-equipment-ilvl").html(), "150");
    assert.equal($("#occult-glyph-id").val(), "evade-rating");
    assert.equal($("#occult-glyph-rarity").val(), "epic");
    assert.equal($("#occult-glyph-quality").val(), "2");
    assert.equal($("#occult-glyph-level").val(), "20");
    assert.equal($("#occult-glyph-stat-rating").html(), "+381");
    assert.equal($("#occult-glyph-stat-text").html(), "Evade Rating");
    assert.equal($("#occult-glyph-ilvl").html(), "128");
    assert.equal($("#occult-signet-id").val(), "4");
    assert.equal($("#occult-signet-rarity").val(), "epic");
    assert.equal($("#occult-signet-level").val(), "18");
    assert.equal($("#occult-signet-ilvl").html(), "61");
    assert.equal($("#occult-signet-description").html(), 'After using Active Dodge, you receive a speed bonus of <span id="occult-signet-bonus" class="bonus-val const">26.1579</span><span class="bonus-val const">%</span> for <span class="bonus-val const">4</span> seconds.');
});
