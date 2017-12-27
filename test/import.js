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

test('should import URL and set summary and slots for 0.4.0 links', 92, function() {
    var vars = {
        head: '4,1,5,5,0,4,0',
        luck: '4,3,4,4,0,4,0',
        neck: '4,1,5,5,0,4,0',
        occult: '4,3,4,4,0,4,0',
        ring: '4,3,4,3,0,4,0',
        waist: '4,1,4,2,0,4,0,3,2',//TODO : test to enhance, last number previously was 87
        weapon: '5,0,4,4,0,4,0',
        wrist: '4,1,4,5,0,4,0,3,1' //TODO : test to enhance, last number previously was 87
    };

    swlcalc.import.start(vars);

    // Summary
    equal($('#stat-hitpoints').html(), '10458');
    equal($('#stat-combat-power').html(), '496');
    equal($('#stat-attack-rating').html(), '1518');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '5.0 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');

    equal($('#weapon-rarity').val(), '10.5');
    equal($('#weapon-glyph-rarity').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-rarity').val(), 'none');
    equal($('#weapon-pick-signet').val(), 'none');

    equal($('#head-rarity').val(), '10.4');
    equal($('#head-itemId').val(), '1');
    equal($('#head-glyph-rarity').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-rarity').val(), 'none');
    equal($('#head-pick-signet').val(), 'none');

    equal($('#ring-rarity').val(), '10.4');
    equal($('#ring-itemId').val(), '3');
    equal($('#ring-glyph-rarity').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'defense-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-rarity').val(), 'none');
    equal($('#ring-pick-signet').val(), 'none');

    equal($('#neck-rarity').val(), '10.4');
    equal($('#neck-itemId').val(), '1');
    equal($('#neck-glyph-rarity').val(), '10.5');
    equal($('#neck-primary-glyph').val(), 'block-rating');
    equal($('#neck-secondary-glyph').val(), 'none');
    ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#neck-signet-rarity').val(), 'none');
    equal($('#neck-pick-signet').val(), 'none');

    //Brooklyn Bracer
    equal($('#wrist-rarity').val(), '10.4');
    equal($('#wrist-itemId').val(), '85');
    equal($('#wrist-glyph-rarity').val(), '10.4');
    equal($('#wrist-primary-glyph').val(), 'defense-rating');
    equal($('#wrist-secondary-glyph').val(), 'none');
    ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#wrist-signet-rarity').val(), 'epic');
    ok($('#wrist-signet-rarity').attr('disabled'));
    ok($('#wrist-pick-signet').attr('disabled'));
    ok($('#wrist-rarity').attr('disabled'));

    equal($('#luck-rarity').val(), '10.4');
    equal($('#luck-itemId').val(), '3');
    equal($('#luck-glyph-rarity').val(), '10.4');
    equal($('#luck-primary-glyph').val(), 'physical-protection');
    equal($('#luck-secondary-glyph').val(), 'none');
    ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#luck-signet-rarity').val(), 'none');
    equal($('#luck-pick-signet').val(), 'none');

    //NY Buckle
    equal($('#waist-rarity').val(), '10.4');
    equal($('#waist-itemId').val(), '87');
    equal($('#waist-glyph-rarity').val(), '10.4');
    equal($('#waist-primary-glyph').val(), 'physical-protection');
    equal($('#waist-secondary-glyph').val(), 'none');
    ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#waist-signet-rarity').val(), 'epic');
    ok($('#waist-signet-rarity').attr('disabled'));
    ok($('#waist-pick-signet').attr('disabled'));
    ok($('#waist-rarity option[value="10.1"]').attr('disabled'));
    ok($('#waist-rarity option[value="10.7"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.4"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.9"]').attr('disabled'));

    equal($('#occult-rarity').val(), '10.4');
    equal($('#occult-itemId').val(), '3');
    equal($('#occult-glyph-rarity').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'hit-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-rarity').val(), 'none');
    equal($('#occult-pick-signet').val(), 'none');
});

test('should import URL and set summary and slots for pre-1.3 links', 96, function() {
    var vars = {
        head: '4,1,5,5,0,4,0,3,1',//TODO : test to enhance, last number previously 18
        luck: '4,3,4,5,0,4,0,3,2',//TODO : test to enhance, last number previously 39
        neck: '4,1,5,5,0,4,0,1,3',//TODO : test to enhance, last number previously 21
        occult: '4,3,4,4,0,4,0,3,1',//TODO : test to enhance, last number previously 21
        ring: '4,3,4,4,0,4,0,2,2',//TODO : test to enhance, last number previously 22
        waist: '4,1,4,3,0,4,0,3,3',//TODO : test to enhance, last number previously 87
        weapon: '5,1,4,4,0,4,0,2,1',//TODO : test to enhance, last number previously 5
        wrist: '4,1,4,2,0,4,0,3,2'//TODO : test to enhance, last number previously 85
    };

    swlcalc.import.start(vars);

    // Summary
    equal($('#stat-hitpoints').html(), '10788');
    equal($('#stat-combat-power').html(), '504');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '5.0 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');

    equal($('#weapon-name').html(), ': Blade');
    equal($('#weapon-wtype').val(), 'blade');
    equal($('#weapon-rarity').val(), '10.5');
    equal($('#weapon-glyph-rarity').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-rarity').val(), 'superior');
    equal($('#weapon-pick-signet').val(), '5');

    equal($('#head-rarity').val(), '10.4');
    equal($('#head-itemId').val(), '1');
    equal($('#head-glyph-rarity').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-rarity').val(), 'epic');
    equal($('#head-pick-signet').val(), '18');

    equal($('#ring-rarity').val(), '10.4');
    equal($('#ring-itemId').val(), '3');
    equal($('#ring-glyph-rarity').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'defense-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-rarity').val(), 'superior');
    equal($('#ring-pick-signet').val(), '22');

    equal($('#neck-rarity').val(), '10.4');
    equal($('#neck-itemId').val(), '1');
    equal($('#neck-glyph-rarity').val(), '10.5');
    equal($('#neck-primary-glyph').val(), 'block-rating');
    equal($('#neck-secondary-glyph').val(), 'none');
    ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#neck-signet-rarity').val(), 'normal');
    equal($('#neck-pick-signet').val(), '21');

    //Brooklyn Bracer
    equal($('#wrist-name').html(), ': Brooklyn Bracer');
    equal($('#wrist-rarity').val(), '10.4');
    equal($('#wrist-itemId').val(), '85');
    equal($('#wrist-glyph-rarity').val(), '10.4');
    equal($('#wrist-primary-glyph').val(), 'defense-rating');
    equal($('#wrist-secondary-glyph').val(), 'none');
    ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#wrist-signet-rarity').val(), 'epic');
    ok($('#wrist-signet-rarity').attr('disabled'));
    ok($('#wrist-pick-signet').attr('disabled'));
    ok($('#wrist-rarity').attr('disabled'));

    equal($('#luck-rarity').val(), '10.4');
    equal($('#luck-itemId').val(), '3');
    equal($('#luck-glyph-rarity').val(), '10.4');
    equal($('#luck-primary-glyph').val(), 'physical-protection');
    equal($('#luck-secondary-glyph').val(), 'none');
    ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#luck-signet-rarity').val(), 'epic');
    equal($('#luck-pick-signet').val(), '39');

    //NY Buckle
    equal($('#waist-name').html(), ': NY Buckle');
    equal($('#waist-rarity').val(), '10.4');
    equal($('#waist-itemId').val(), '87');
    equal($('#waist-glyph-rarity').val(), '10.4');
    equal($('#waist-primary-glyph').val(), 'physical-protection');
    equal($('#waist-secondary-glyph').val(), 'none');
    ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#waist-signet-rarity').val(), 'epic');
    ok($('#waist-signet-rarity').attr('disabled'));
    ok($('#waist-pick-signet').attr('disabled'));
    ok($('#waist-rarity option[value="10.1"]').attr('disabled'));
    ok($('#waist-rarity option[value="10.7"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.4"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.9"]').attr('disabled'));

    equal($('#occult-rarity').val(), '10.4');
    equal($('#occult-itemId').val(), '3');
    equal($('#occult-glyph-rarity').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'hit-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-rarity').val(), 'epic');
    equal($('#occult-pick-signet').val(), '41');
});

test('should import URL and set summary and slots for 1.3 links (secondary weapon added)', 108, function() {
    var vars = {
        head: '4,1,5,5,0,4,0,3,1',//TODO : test to enhance, last number previously 18
        luck: '4,3,4,4,0,4,0,3,2',//TODO : test to enhance, last number previously 39
        neck: '4,1,5,5,0,4,0,1,3',//TODO : test to enhance, last number previously 21
        occult: '4,3,4,4,0,4,0,3,1',//TODO : test to enhance, last number previously 41
        ring: '4,3,4,3,0,4,0,2,2',//TODO : test to enhance, last number previously 22
        waist: '9,1,4,2,0,4,0,3,3',//TODO : test to enhance, last number previously 87
        weapon: '5,1,4,4,0,4,0,2,1',//TODO : test to enhance, last number previously 5
        weapon2: '5,2,4,4,0,4,0,2,2',//TODO : test to enhance, last number previously 6
        wrist: '4,1,4,1,0,4,0,3,3'//TODO : test to enhance, last number previously 85
    };

    swlcalc.import.start(vars);

    // Summary
    equal($('#stat-hitpoints').html(), '11104');
    equal($('#stat-combat-power').html(), '504');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '5.0 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-name').html(), ': Blade');
    equal($('#weapon-wtype').val(), 'blade');
    equal($('#weapon-rarity').val(), '10.5');
    equal($('#weapon-glyph-rarity').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-rarity').val(), 'superior');
    equal($('#weapon-pick-signet').val(), '5');

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-name').html(), ': Hammer');
    equal($('#weapon2-wtype').val(), 'hammer');
    equal($('#weapon2-rarity').val(), '10.5');
    equal($('#weapon2-glyph-rarity').val(), '10.4');
    equal($('#weapon2-primary-glyph').val(), 'hit-rating');
    equal($('#weapon2-secondary-glyph').val(), 'none');
    ok($('#weapon2-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon2-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon2-signet-rarity').val(), 'superior');
    equal($('#weapon2-pick-signet').val(), '6');

    equal($('#head-rarity').val(), '10.4');
    equal($('#head-itemId').val(), '1');
    equal($('#head-glyph-rarity').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-rarity').val(), 'epic');
    equal($('#head-pick-signet').val(), '18');

    equal($('#ring-rarity').val(), '10.4');
    equal($('#ring-itemId').val(), '3');
    equal($('#ring-glyph-rarity').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'defense-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-rarity').val(), 'superior');
    equal($('#ring-pick-signet').val(), '22');

    equal($('#neck-rarity').val(), '10.4');
    equal($('#neck-itemId').val(), '1');
    equal($('#neck-glyph-rarity').val(), '10.5');
    equal($('#neck-primary-glyph').val(), 'block-rating');
    equal($('#neck-secondary-glyph').val(), 'none');
    ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#neck-signet-rarity').val(), 'normal');
    equal($('#neck-pick-signet').val(), '21');

    //Brooklyn Bracer
    equal($('#wrist-name').html(), ': Brooklyn Bracer');
    equal($('#wrist-rarity').val(), '10.4');
    equal($('#wrist-itemId').val(), '85');
    equal($('#wrist-glyph-rarity').val(), '10.4');
    equal($('#wrist-primary-glyph').val(), 'defense-rating');
    equal($('#wrist-secondary-glyph').val(), 'none');
    ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#wrist-signet-rarity').val(), 'epic');
    ok($('#wrist-signet-rarity').attr('disabled'));
    ok($('#wrist-pick-signet').attr('disabled'));
    ok($('#wrist-rarity').attr('disabled'));

    equal($('#luck-rarity').val(), '10.4');
    equal($('#luck-itemId').val(), '3');
    equal($('#luck-glyph-rarity').val(), '10.4');
    equal($('#luck-primary-glyph').val(), 'physical-protection');
    equal($('#luck-secondary-glyph').val(), 'none');
    ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#luck-signet-rarity').val(), 'epic');
    equal($('#luck-pick-signet').val(), '39');

    //NY Buckle
    equal($('#waist-name').html(), ': NY Buckle');
    equal($('#waist-rarity').val(), '10.9');
    equal($('#waist-itemId').val(), '87');
    equal($('#waist-glyph-rarity').val(), '10.4');
    equal($('#waist-primary-glyph').val(), 'physical-protection');
    equal($('#waist-secondary-glyph').val(), 'none');
    ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#waist-signet-rarity').val(), 'epic');
    ok($('#waist-signet-rarity').attr('disabled'));
    ok($('#waist-pick-signet').attr('disabled'));
    ok($('#waist-rarity option[value="10.1"]').attr('disabled'));
    ok($('#waist-rarity option[value="10.7"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.4"]').attr('disabled'));
    ok(!$('#waist-rarity option[value="10.9"]').attr('disabled'));

    equal($('#occult-rarity').val(), '10.4');
    equal($('#occult-itemId').val(), '3');
    equal($('#occult-glyph-rarity').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'hit-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-rarity').val(), 'epic');
    equal($('#occult-pick-signet').val(), '41');
});
