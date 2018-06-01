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
// - commented fields
// - formulas to update
// - add real signets
// - add tests for ilvl fields
test('should import URL and set summary and slots', 126, function() {
    var vars = {
        head: '3,1,1,30,4,1,3,1,1,0,20',
        luck: '3,1,1,1,3,4,2,20,1,0,20',
        neck: '3,1,1,30,3,5,2,20,1,0,20',
        occult: '3,1,1,1,3,4,2,20,1,0,20',
        finger: '3,1,1,30,3,5,2,20,1,0,20',
        waist: '3,1,1,30,3,4,2,20,1,0,20',
        weapon: '3,1,1,30,2,2,1,1,1,0,20',
        weapon2: '3,2,3,30,2,2,1,1,1,0,20',
        wrist: '3,1,1,1,3,5,2,20,1,0,20'
    };

    swlcalc.import.start(vars);

    // Summary
    // --- Primary Stats
    equal($('#stat-ilvl').html(), '357');
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

    equal($('#weapon-rarity').val(), 'epic');
    equal($('#weapon-quality').val(), 'mkI');
    equal($('#weapon-level').val(), '30');
    equal($('#weapon-power-rating').html(), '+1832');
    equal($('#weapon-glyph').val(), 'critical-rating');
    equal($('#weapon-glyph-rarity').val(), 'superior');
    equal($('#weapon-glyph-quality').val(), 'crude');
    equal($('#weapon-glyph-level').val(), '1');
    equal($('#weapon-glyph-rating').html(), '+85');
    equal($('#weapon-signet').val(), 'none');
    equal($('#weapon-signet-rarity').val(), undefined);
    equal($('#weapon-signet-level').val(), undefined);

    equal($('#weapon2-rarity').val(), 'epic');
    equal($('#weapon2-quality').val(), 'mkIII');
    equal($('#weapon2-level').val(), '30');
    equal($('#weapon2-power-rating').html(), '+1832');
    equal($('#weapon2-glyph').val(), 'critical-rating');
    equal($('#weapon2-glyph-rarity').val(), 'superior');
    equal($('#weapon2-glyph-quality').val(), 'crude');
    equal($('#weapon2-glyph-level').val(), '1');
    equal($('#weapon2-glyph-rating').html(), '+85');
    equal($('#weapon2-signet').val(), 'none');
    equal($('#weapon2-signet-rarity').val(), undefined);
    equal($('#weapon2-signet-level').val(), undefined);

    equal($('#head-rarity').val(), 'epic');
    equal($('#head-quality').val(), 'faded');
    equal($('#head-level').val(), '30');
    equal($('#head-power-rating').html(), '+1070');
    equal($('#head-glyph').val(), 'hit-rating');
    equal($('#head-glyph-rarity').val(), 'mythic');
    equal($('#head-glyph-quality').val(), 'intricate');
    equal($('#head-glyph-level').val(), '1');
    equal($('#head-glyph-rating').html(), '+488');
    equal($('#head-signet').val(), 'none');
    equal($('#head-signet-rarity').val(), 'standard');
    equal($('#head-signet-level').val(), '20');

    equal($('#finger-rarity').val(), 'epic');
    equal($('#finger-quality').val(), 'faded');
    equal($('#finger-level').val(), '30');
    equal($('#finger-power-rating').html(), '+642');
    equal($('#finger-glyph').val(), 'defense-rating');
    equal($('#finger-glyph-rarity').val(), 'epic');
    equal($('#finger-glyph-quality').val(), 'simple');
    equal($('#finger-glyph-level').val(), '20');
    equal($('#finger-glyph-rating').html(), '+381');
    equal($('#finger-signet').val(), 'none');
    equal($('#finger-signet-rarity').val(), 'standard');
    equal($('#finger-signet-level').val(), '20');

    equal($('#neck-rarity').val(), 'epic');
    equal($('#neck-quality').val(), 'faded');
    equal($('#neck-level').val(), '30');
    equal($('#neck-power-rating').html(), '+642');
    equal($('#neck-glyph').val(), 'defense-rating');
    equal($('#neck-glyph-rarity').val(), 'epic');
    equal($('#neck-glyph-quality').val(), 'simple');
    equal($('#neck-glyph-level').val(), '20');
    equal($('#neck-glyph-rating').html(), '+381');
    equal($('#neck-signet').val(), 'none');
    equal($('#neck-signet-rarity').val(), 'standard');
    equal($('#neck-signet-level').val(), '20');

    equal($('#wrist-rarity').val(), 'epic');
    equal($('#wrist-quality').val(), 'faded');
    equal($('#wrist-level').val(), '1');
    equal($('#wrist-power-rating').html(), '+406');
    equal($('#wrist-glyph').val(), 'defense-rating');
    equal($('#wrist-glyph-rarity').val(), 'epic');
    equal($('#wrist-glyph-quality').val(), 'simple');
    equal($('#wrist-glyph-level').val(), '20');
    equal($('#wrist-glyph-rating').html(), '+381');
    equal($('#wrist-signet').val(), 'none');
    equal($('#wrist-signet-rarity').val(), 'standard');
    equal($('#wrist-signet-level').val(), '20');

    equal($('#luck-rarity').val(), 'epic');
    equal($('#luck-quality').val(), 'faded');
    equal($('#luck-level').val(), '1');
    equal($('#luck-power-rating').html(), '+271');
    equal($('#luck-glyph').val(), 'evade-rating');
    equal($('#luck-glyph-rarity').val(), 'epic');
    equal($('#luck-glyph-quality').val(), 'simple');
    equal($('#luck-glyph-level').val(), '20');
    equal($('#luck-glyph-rating').html(), '+381');
    equal($('#luck-signet').val(), 'none');
    equal($('#luck-signet-rarity').val(), 'standard');
    equal($('#luck-signet-level').val(), '20');

    equal($('#waist-rarity').val(), 'epic');
    equal($('#waist-quality').val(), 'faded');
    equal($('#waist-level').val(), '30');
    equal($('#waist-power-rating').html(), '+428');
    equal($('#waist-glyph').val(), 'evade-rating');
    equal($('#waist-glyph-rarity').val(), 'epic');
    equal($('#waist-glyph-quality').val(), 'simple');
    equal($('#waist-glyph-level').val(), '20');
    equal($('#waist-glyph-rating').html(), '+381');
    equal($('#waist-signet').val(), 'none');
    equal($('#waist-signet-rarity').val(), 'standard');
    equal($('#waist-signet-level').val(), '20');

    equal($('#occult-rarity').val(), 'epic');
    equal($('#occult-quality').val(), 'faded');
    equal($('#occult-level').val(), '1');
    equal($('#occult-power-rating').html(), '+271');
    equal($('#occult-glyph').val(), 'evade-rating');
    equal($('#occult-glyph-rarity').val(), 'epic');
    equal($('#occult-glyph-quality').val(), 'simple');
    equal($('#occult-glyph-level').val(), '20');
    equal($('#occult-glyph-rating').html(), '+381');
    equal($('#occult-signet').val(), 'none');
    equal($('#occult-signet-rarity').val(), 'standard');
    equal($('#occult-signet-level').val(), '20');
});

//TODO/TEST : add more tests ?
