var importModule = {};

module('import-integration-tests', {
    setup: function() {
        renderSlots();
        renderSummary();
        initiateSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
    }
});

//TODO/TEST : test to complete/enhance
// - phys & mag protection (TODO/FEATURE)
// - add real signets (TODO/FEATURE)
// - add slot titles (TODO/FEATURE)
test('should import URL and set summary and slots', 189, function() {
    var vars = {
        head: '3,1,1,30,4,1,3,1,2,20,15',
        luck: '3,1,1,1,3,4,2,20,3,8,6',
        neck: '3,1,1,30,3,5,2,20,2,10,3',
        occult: '3,1,1,1,3,4,2,20,3,4,18',
        finger: '3,1,1,30,3,5,2,20,1,10,9',
        waist: '3,1,1,30,3,4,2,20,2,3,11',
        weapon: '3,1,1,30,2,2,1,1,0,6,0',
        weapon2: '3,2,3,30,2,2,1,1,0,2,0',
        wrist: '3,1,1,1,3,5,2,20,1,1,14'
    };

    swlcalc.import.start(vars);

    // Summary
    // --- Primary Stats
    equal($('#stat-ilvl').html(), '377');
    equal($('#stat-power-rating').html(), '3730');
    equal($('#stat-weapon-power').html(), '1832');
    equal($('#stat-attack-rating').html(), '8052');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
    equal($('#stat-combat-power').html(), '741');
    equal($('#stat-healing-power').html(), '461');
    // --- Offensive Stats
    equal($('#stat-critical-rating').html(), '+841');
    equal($('#stat-critical-chance').html(), '13.8%');
    equal($('#stat-critical-power').html(), '+1008');
    equal($('#stat-critical-power-percentage').html(), '90.6%');
    equal($('#stat-hit-rating').html(), '+1244');
    equal($('#stat-glance-reduction').html(), '24.5%');
    // --- Defensive Stats
    equal($('#stat-defense-rating').html(), '+1896');
    equal($('#stat-glance-chance').html(), '18.6%');
    equal($('#stat-evade-rating').html(), '+1896');
    equal($('#stat-evade-chance').html(), '13.0%');
    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');

    equal($('#weapon-ilvl').html(), '353');
    equal($('#weapon-equipment-id').val(), '1');
    equal($('#weapon-equipment-rarity').val(), 'epic');
    equal($('#weapon-equipment-quality').val(), '1');
    equal($('#weapon-equipment-level').val(), '30');
    equal($('#weapon-equipment-power-rating').html(), '+1832');
    equal($('#weapon-equipment-ilvl').html(), '320');
    equal($('#weapon-glyph-id').val(), 'critical-rating');
    equal($('#weapon-glyph-rarity').val(), 'superior');
    equal($('#weapon-glyph-quality').val(), '1');
    equal($('#weapon-glyph-level').val(), '1');
    equal($('#weapon-glyph-rating').html(), '+85');
    equal($('#weapon-glyph-label').html(), ' Critical Rating');
    equal($('#weapon-glyph-ilvl').html(), '34');
    equal($('#weapon-signet-id').val(), '6');
    equal($('#weapon-signet-rarity').val(), undefined);
    equal($('#weapon-signet-level').val(), undefined);
    equal($('#weapon-signet-ilvl').html(), undefined);
    equal($('#weapon-signet-description').html(), 'When you hit or heal a target with this weapon you have a 50% chance to restore <span id="weapon-signet-bonus" class="bonus-const">0.75</span><span class="bonus-const">%</span> of your health.');

    equal($('#weapon2-ilvl').html(), '353');
    equal($('#weapon2-equipment-id').val(), '2');
    equal($('#weapon2-equipment-rarity').val(), 'epic');
    equal($('#weapon2-equipment-quality').val(), '3');
    equal($('#weapon2-equipment-level').val(), '30');
    equal($('#weapon2-equipment-power-rating').html(), '+1832');
    equal($('#weapon2-equipment-ilvl').html(), '320');
    equal($('#weapon2-glyph-id').val(), 'critical-rating');
    equal($('#weapon2-glyph-rarity').val(), 'superior');
    equal($('#weapon2-glyph-quality').val(), '1');
    equal($('#weapon2-glyph-level').val(), '1');
    equal($('#weapon2-glyph-rating').html(), '+85');
    equal($('#weapon2-glyph-label').html(), ' Critical Rating');
    equal($('#weapon2-glyph-ilvl').html(), '34');
    equal($('#weapon2-signet-id').val(), '2');
    equal($('#weapon2-signet-rarity').val(), undefined);
    equal($('#weapon2-signet-level').val(), undefined);
    equal($('#weapon2-signet-ilvl').html(), undefined);
    equal($('#weapon2-signet-description').html(), 'This weapon deals <span id="weapon2-signet-bonus" class="bonus-var-attack">333.45</span> additional damage to enemies that are below 35% health.');

    equal($('#head-ilvl').html(), '480');
    equal($('#head-equipment-id').val(), '1');
    equal($('#head-equipment-rarity').val(), 'epic');
    equal($('#head-equipment-quality').val(), '1');
    equal($('#head-equipment-level').val(), '30');
    equal($('#head-equipment-power-rating').html(), '+1070');
    equal($('#head-equipment-ilvl').html(), '278');
    equal($('#head-glyph-id').val(), 'hit-rating');
    equal($('#head-glyph-rarity').val(), 'mythic');
    equal($('#head-glyph-quality').val(), '3');
    equal($('#head-glyph-level').val(), '1');
    equal($('#head-glyph-rating').html(), '+488');
    equal($('#head-glyph-label').html(), ' Hit Rating');
    equal($('#head-glyph-ilvl').html(), '175');
    equal($('#head-signet-id').val(), '20');
    equal($('#head-signet-rarity').val(), 'superior');
    equal($('#head-signet-level').val(), '15');
    equal($('#head-signet-ilvl').html(), '26');
    equal($('#head-signet-description').html(), 'Reduces the cooldown of all Elite Abilities by <span id="head-signet-bonus" class="bonus-const">7.0286</span><span class="bonus-const">%</span>.');


    equal($('#finger-ilvl').html(), '411');
    equal($('#finger-equipment-id').val(), '1');
    equal($('#finger-equipment-rarity').val(), 'epic');
    equal($('#finger-equipment-quality').val(), '1');
    equal($('#finger-equipment-level').val(), '30');
    equal($('#finger-equipment-power-rating').html(), '+642');
    equal($('#finger-equipment-ilvl').html(), '278');
    equal($('#finger-glyph-id').val(), 'defense-rating');
    equal($('#finger-glyph-rarity').val(), 'epic');
    equal($('#finger-glyph-quality').val(), '2');
    equal($('#finger-glyph-level').val(), '20');
    equal($('#finger-glyph-rating').html(), '+381');
    equal($('#finger-glyph-label').html(), ' Defense Rating');
    equal($('#finger-glyph-ilvl').html(), '128');
    equal($('#finger-signet-id').val(), '10');
    equal($('#finger-signet-rarity').val(), 'standard');
    equal($('#finger-signet-level').val(), '9');
    equal($('#finger-signet-ilvl').html(), '5');
    equal($('#finger-signet-description').html(), 'Increases the damage and healing of all Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">2.1011</span><span class="bonus-const">%</span>.');

    equal($('#neck-ilvl').html(), '421');
    equal($('#neck-equipment-id').val(), '1');
    equal($('#neck-equipment-rarity').val(), 'epic');
    equal($('#neck-equipment-quality').val(), '1');
    equal($('#neck-equipment-level').val(), '30');
    equal($('#neck-equipment-power-rating').html(), '+642');
    equal($('#neck-equipment-ilvl').html(), '278');
    equal($('#neck-glyph-id').val(), 'defense-rating');
    equal($('#neck-glyph-rarity').val(), 'epic');
    equal($('#neck-glyph-quality').val(), '2');
    equal($('#neck-glyph-level').val(), '20');
    equal($('#neck-glyph-rating').html(), '+381');
    equal($('#neck-glyph-label').html(), ' Defense Rating');
    equal($('#neck-glyph-ilvl').html(), '128');
    equal($('#neck-signet-id').val(), '10');
    equal($('#neck-signet-rarity').val(), 'superior');
    equal($('#neck-signet-level').val(), '3');
    equal($('#neck-signet-ilvl').html(), '16');
    equal($('#neck-signet-description').html(), 'Increases the damage and healing of all Power Abilities by <span id="neck-signet-bonus" class="bonus-const">1.6271</span><span class="bonus-const">%</span>.');

    equal($('#wrist-ilvl').html(), '286');
    equal($('#wrist-equipment-id').val(), '1');
    equal($('#wrist-equipment-rarity').val(), 'epic');
    equal($('#wrist-equipment-quality').val(), '1');
    equal($('#wrist-equipment-level').val(), '1');
    equal($('#wrist-equipment-power-rating').html(), '+406');
    equal($('#wrist-equipment-ilvl').html(), '150');
    equal($('#wrist-glyph-id').val(), 'defense-rating');
    equal($('#wrist-glyph-rarity').val(), 'epic');
    equal($('#wrist-glyph-quality').val(), '2');
    equal($('#wrist-glyph-level').val(), '20');
    equal($('#wrist-glyph-rating').html(), '+381');
    equal($('#wrist-glyph-label').html(), ' Defense Rating');
    equal($('#wrist-glyph-ilvl').html(), '128');
    equal($('#wrist-signet-id').val(), '1');
    equal($('#wrist-signet-rarity').val(), 'standard');
    equal($('#wrist-signet-level').val(), '14');
    equal($('#wrist-signet-ilvl').html(), '8');
    equal($('#wrist-signet-description').html(), 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-signet-bonus" class="bonus-const">2.6362</span><span class="bonus-const">%</span>.');

    equal($('#luck-ilvl').html(), '325');
    equal($('#luck-equipment-id').val(), '1');
    equal($('#luck-equipment-rarity').val(), 'epic');
    equal($('#luck-equipment-quality').val(), '1');
    equal($('#luck-equipment-level').val(), '1');
    equal($('#luck-equipment-power-rating').html(), '+271');
    equal($('#luck-equipment-ilvl').html(), '150');
    equal($('#luck-glyph-id').val(), 'evade-rating');
    equal($('#luck-glyph-rarity').val(), 'epic');
    equal($('#luck-glyph-quality').val(), '2');
    equal($('#luck-glyph-level').val(), '20');
    equal($('#luck-glyph-rating').html(), '+381');
    equal($('#luck-glyph-label').html(), ' Evade Rating');
    equal($('#luck-glyph-ilvl').html(), '128');
    equal($('#luck-signet-id').val(), '8');
    equal($('#luck-signet-rarity').val(), 'epic');
    equal($('#luck-signet-level').val(), '6');
    equal($('#luck-signet-ilvl').html(), '47');
    equal($('#luck-signet-description').html(), 'When you critically hit, you are given a beneficial effect that damages attackers for <span id="luck-signet-bonus" class="bonus-var-attack">69.7008</span> when they hit you for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.');

    equal($('#waist-ilvl').html(), '428');
    equal($('#waist-equipment-id').val(), '1');
    equal($('#waist-equipment-rarity').val(), 'epic');
    equal($('#waist-equipment-quality').val(), '1');
    equal($('#waist-equipment-level').val(), '30');
    equal($('#waist-equipment-power-rating').html(), '+428');
    equal($('#waist-equipment-ilvl').html(), '278');
    equal($('#waist-glyph-id').val(), 'evade-rating');
    equal($('#waist-glyph-rarity').val(), 'epic');
    equal($('#waist-glyph-quality').val(), '2');
    equal($('#waist-glyph-level').val(), '20');
    equal($('#waist-glyph-rating').html(), '+381');
    equal($('#waist-glyph-label').html(), ' Evade Rating');
    equal($('#waist-glyph-ilvl').html(), '128');
    equal($('#waist-signet-id').val(), '3');
    equal($('#waist-signet-rarity').val(), 'superior');
    equal($('#waist-signet-level').val(), '11');
    equal($('#waist-signet-ilvl').html(), '23');
    equal($('#waist-signet-description').html(), 'Reduces the cooldown of Gadgets by <span id="waist-signet-bonus" class="bonus-const">17.5547</span><span class="bonus-const">%</span>.');

    equal($('#occult-ilvl').html(), '339');
    equal($('#occult-equipment-id').val(), '1');
    equal($('#occult-equipment-rarity').val(), 'epic');
    equal($('#occult-equipment-quality').val(), '1');
    equal($('#occult-equipment-level').val(), '1');
    equal($('#occult-equipment-power-rating').html(), '+271');
    equal($('#occult-equipment-ilvl').html(), '150');
    equal($('#occult-glyph-id').val(), 'evade-rating');
    equal($('#occult-glyph-rarity').val(), 'epic');
    equal($('#occult-glyph-quality').val(), '2');
    equal($('#occult-glyph-level').val(), '20');
    equal($('#occult-glyph-rating').html(), '+381');
    equal($('#occult-glyph-label').html(), ' Evade Rating');
    equal($('#occult-glyph-ilvl').html(), '128');
    equal($('#occult-signet-id').val(), '4');
    equal($('#occult-signet-rarity').val(), 'epic');
    equal($('#occult-signet-level').val(), '18');
    equal($('#occult-signet-ilvl').html(), '61');
    equal($('#occult-signet-description').html(), 'After using Active Dodge, you recieve a speed bonus of <span id="occult-signet-bonus" class="bonus-const">26.1579</span><span class="bonus-const">%</span> for 4 seconds.');
});
