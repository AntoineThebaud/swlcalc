module('swlcalc');

// test('should initate swlcalc submodules', 8, function() {
//     swlcalc.init();
//     ok(swlcalc);
//     ok(swlcalc.data);
//     ok(swlcalc.button);
//     ok(swlcalc.select);
//     ok(swlcalc.buttonBar);
//     ok(swlcalc.summary);
//     ok(swlcalc.export);
//     ok(swlcalc.import);
// });

//TODO/TEST improve test with signets
test('should import from hash', 127, function() {
    location.hash = 'weapon=3,7,1,30,4,3,2,20,5,0,20&weapon2=3,0,1,30,3,0,1,20,3,0,20&head=1,1,3,20,5,3,2,20,4,0,1&finger=5,1,1,70,3,5,2,1,2,0,20&neck=3,1,1,30,1,5,1,1,3,0,20&wrist=5,1,1,70,4,1,2,20,5,0,1&luck=3,1,1,30,4,1,1,20,1,0,1&waist=3,1,3,1,3,2,2,1,5,0,20&occult=2,1,1,1,4,3,1,20,2,0,20'
    swlcalc.init();

    // Summary
    //TODO/TEST equal($('#stat-hitpoints').html(), '10458');
    //TODO/TEST equal($('#stat-combat-power').html(), '278');
    //TODO/TEST equal($('#stat-attack-rating').html(), '474');
    equal($('#stat-weapon-power').html(), '1832');
    //TODO/TEST equal($('#stat-heal-rating').html(), '1091');
    equal($('#stat-critical-rating').html(), '+997');
    //TODO/TEST equal($('#stat-critical-chance').html(), '19.2 %');
    equal($('#stat-critical-power').html(), '+3150');
    //TODO/TEST equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-hit-rating').html(), '+1917');
    equal($('#stat-defense-rating').html(), '+1006');
    equal($('#stat-evade-rating').html(), '+753');
    //TODO/TEST equal($('#stat-physical-protection').html(), '+660');
    //TODO/TEST equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-name').html(), ': Shotgun');
    equal($('#weapon-wtype').val(), 'shotgun');
    equal($('#weapon-rarity').val(), 'epic');
    equal($('#weapon-quality').val(), 'mkI');
    equal($('#weapon-level').val(), '30');
    equal($('#weapon-power-value').html(), '+1832');
    equal($('#weapon-glyph').val(), 'critical-power');
    equal($('#weapon-glyph-rarity').val(), 'mythic');
    equal($('#weapon-glyph-quality').val(), 'simple');
    equal($('#weapon-glyph-level').val(), '20');
    equal($('#weapon-glyph-value').html(), '+598');
    equal($('#weapon-signet').val(), 'none');
    equal($('#weapon-signet-rarity').val(), undefined);
    equal($('#weapon-signet-level').val(), undefined);

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-name').html(), '');
    equal($('#weapon2-wtype').val(), 'none');
    equal($('#weapon2-rarity').val(), 'epic');
    equal($('#weapon2-quality').val(), 'mkI');
    equal($('#weapon2-level').val(), '30');
    equal($('#weapon2-power-value').html(), '0');
    equal($('#weapon2-glyph').val(), 'none');
    equal($('#weapon2-glyph-rarity').val(), 'epic');
    equal($('#weapon2-glyph-quality').val(), 'crude');
    equal($('#weapon2-glyph-level').val(), '20');
    equal($('#weapon2-glyph-value').html(), '0');
    equal($('#weapon2-signet').val(), 'none');
    equal($('#weapon2-signet-rarity').val(), undefined);
    equal($('#weapon2-signet-level').val(), undefined);

    equal($('#head-itemId').val(), '1');
    equal($('#head-rarity').val(), 'standard');
    equal($('#head-quality').val(), 'radiant');
    equal($('#head-level').val(), '20');
    equal($('#head-power-value').html(), '+293');
    equal($('#head-glyph').val(), 'critical-power');
    equal($('#head-glyph-rarity').val(), 'legendary');
    equal($('#head-glyph-quality').val(), 'simple');
    equal($('#head-glyph-level').val(), '20');
    equal($('#head-glyph-value').html(), '+1012');
    equal($('#head-signet').val(), 'none');
    equal($('#head-signet-rarity').val(), 'mythic');
    equal($('#head-signet-level').val(), '1');

    equal($('#finger-itemId').val(), '1');
    equal($('#finger-rarity').val(), 'legendary');
    equal($('#finger-quality').val(), 'faded');
    equal($('#finger-level').val(), '70');
    equal($('#finger-power-value').html(), '+1752');
    equal($('#finger-glyph').val(), 'defense-rating');
    equal($('#finger-glyph-rarity').val(), 'epic');
    equal($('#finger-glyph-quality').val(), 'simple');
    equal($('#finger-glyph-level').val(), '1');
    equal($('#finger-glyph-value').html(), '+241');
    equal($('#finger-signet').val(), 'none');
    equal($('#finger-signet-rarity').val(), 'superior');
    equal($('#finger-signet-level').val(), '20');

    equal($('#neck-itemId').val(), '1');
    equal($('#neck-rarity').val(), 'epic');
    equal($('#neck-quality').val(), 'faded');
    equal($('#neck-level').val(), '30');
    equal($('#neck-power-value').html(), '+642');
    equal($('#neck-glyph').val(), 'defense-rating');
    equal($('#neck-glyph-rarity').val(), 'standard');
    equal($('#neck-glyph-quality').val(), 'crude');
    equal($('#neck-glyph-level').val(), '1');
    equal($('#neck-glyph-value').html(), '+12');
    equal($('#neck-signet').val(), 'none');
    equal($('#neck-signet-rarity').val(), 'epic');
    equal($('#neck-signet-level').val(), '20');

    equal($('#wrist-itemId').val(), '1');
    equal($('#wrist-rarity').val(), 'legendary');
    equal($('#wrist-quality').val(), 'faded');
    equal($('#wrist-level').val(), '70');
    equal($('#wrist-power-value').html(), '+1752');
    equal($('#wrist-glyph').val(), 'hit-rating');
    equal($('#wrist-glyph-rarity').val(), 'mythic');
    equal($('#wrist-glyph-quality').val(), 'simple');
    equal($('#wrist-glyph-level').val(), '20');
    equal($('#wrist-glyph-value').html(), '+615');
    equal($('#wrist-signet').val(), 'none');
    equal($('#wrist-signet-rarity').val(), 'legendary');
    equal($('#wrist-signet-level').val(), '1');

    equal($('#luck-itemId').val(), '1');
    equal($('#luck-rarity').val(), 'epic');
    equal($('#luck-quality').val(), 'faded');
    equal($('#luck-level').val(), '30');
    equal($('#luck-power-value').html(), '+428');
    equal($('#luck-glyph').val(), 'hit-rating');
    equal($('#luck-glyph-rarity').val(), 'mythic');
    equal($('#luck-glyph-quality').val(), 'crude');
    equal($('#luck-glyph-level').val(), '20');
    equal($('#luck-glyph-value').html(), '+546');
    equal($('#luck-signet').val(), 'none');
    equal($('#luck-signet-rarity').val(), 'standard');
    equal($('#luck-signet-level').val(), '1');

    equal($('#waist-itemId').val(), '1');
    equal($('#waist-rarity').val(), 'epic');
    equal($('#waist-quality').val(), 'radiant');
    equal($('#waist-level').val(), '1');
    equal($('#waist-power-value').html(), '+339');
    equal($('#waist-glyph').val(), 'critical-rating');
    equal($('#waist-glyph-rarity').val(), 'epic');
    equal($('#waist-glyph-quality').val(), 'simple');
    equal($('#waist-glyph-level').val(), '1');
    equal($('#waist-glyph-value').html(), '+241');
    equal($('#waist-signet').val(), 'none');
    equal($('#waist-signet-rarity').val(), 'legendary');
    equal($('#waist-signet-level').val(), '20');

    equal($('#occult-itemId').val(), '1');
    equal($('#occult-rarity').val(), 'superior');
    equal($('#occult-quality').val(), 'faded');
    equal($('#occult-level').val(), '1');
    equal($('#occult-power-value').html(), '+117');
    equal($('#occult-glyph').val(), 'critical-power');
    equal($('#occult-glyph-rarity').val(), 'mythic');
    equal($('#occult-glyph-quality').val(), 'crude');
    equal($('#occult-glyph-level').val(), '20');
    equal($('#occult-glyph-value').html(), '+531');
    equal($('#occult-signet').val(), 'none');
    equal($('#occult-signet-rarity').val(), 'superior');
    equal($('#occult-signet-level').val(), '20');
});

//TODO/TEST test to reenable
// test('should import post-1.3 build from hash', 117, function() {
//     location.hash = 'weapon=5,5,4,4,0,4,0,2,5&weapon2=5,3,4,1,2,2,2,3,15&head=4,1,5,5,0,4,0,3,18&finger=4,2,4,1,0,4,0,3,83&neck=4,1,5,5,0,4,0,1,21&wrist=4,1,4,2,0,4,0,3,85&luck=4,3,4,4,0,4,0,3,39&waist=4,1,4,3,0,4,0,3,87&occult=4,2,4,1,0,4,0,3,88';
//     swlcalc.init();

    // Summary
    // TODO/TEST : To update (still tsw values)
    // equal($('#stat-hitpoints').html(), '10458');
    // equal($('#stat-combat-power').html(), '278');
    // equal($('#stat-attack-rating').html(), '474');
    // equal($('#stat-weapon-power').html(), '457');
    // equal($('#stat-heal-rating').html(), '1091');
    // equal($('#stat-critical-rating').html(), '+459');
    // equal($('#stat-critical-chance').html(), '19.2 %');
    // equal($('#stat-critical-power').html(), '0');
    // equal($('#stat-critical-power-percentage').html(), '25.0 %');
    // equal($('#stat-hit-rating').html(), '+319');
    // equal($('#stat-defense-rating').html(), '+288');
    // equal($('#stat-evade-rating').html(), '0');
    // equal($('#stat-physical-protection').html(), '+660');
    // equal($('#stat-magical-protection').html(), '+300');
    //
    // ok($('#weapon-slot').is(':visible'));
    // equal($('#weapon-name').html(), ': Chaos');
    // equal($('#weapon-wtype').val(), 'chaos');
    // equal($('#weapon-rarity').val(), '10.5');
    // equal($('#weapon-glyph-rarity').val(), '10.4');
    // equal($('#weapon-primary-glyph').val(), 'hit-rating');
    // equal($('#weapon-secondary-glyph').val(), 'none');
    // ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#weapon-signet-rarity').val(), 'superior');
    // equal($('#weapon-pick-signet').val(), '5');
    //
    // ok(!$('#weapon2-slot').is(':visible'));
    // equal($('#weapon2-name').html(), ': Fist');
    // equal($('#weapon2-wtype').val(), 'fist');
    // equal($('#weapon2-rarity').val(), '10.5');
    // equal($('#weapon2-glyph-rarity').val(), '10.4');
    // equal($('#weapon2-primary-glyph').val(), 'critical-rating');
    // equal($('#weapon2-secondary-glyph').val(), 'critical-power');
    // ok($('#weapon2-primary-glyph-dist-btn2').hasClass('active'));
    // ok($('#weapon2-secondary-glyph-dist-btn2').hasClass('active'));
    // equal($('#weapon2-signet-rarity').val(), 'epic');
    // equal($('#weapon2-pick-signet').val(), '15');
    //
    // equal($('#head-rarity').val(), '10.4');
    // equal($('#head-itemId').val(), '1');
    // equal($('#head-glyph-rarity').val(), '10.5');
    // equal($('#head-primary-glyph').val(), 'block-rating');
    // equal($('#head-secondary-glyph').val(), 'none');
    // ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#head-signet-rarity').val(), 'epic');
    // equal($('#head-pick-signet').val(), '18');
    //
    // equal($('#ring-name').html(), ': Coney Island Band');
    // equal($('#ring-rarity').val(), '10.4');
    // equal($('#ring-itemId').val(), '83');
    // equal($('#ring-glyph-rarity').val(), '10.4');
    // equal($('#ring-primary-glyph').val(), 'critical-rating');
    // equal($('#ring-secondary-glyph').val(), 'none');
    // ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#ring-signet-rarity').val(), 'epic');
    // ok($('#ring-signet-rarity').attr('disabled'));
    // ok($('#ring-pick-signet').attr('disabled'));
    // ok($('#ring-rarity').attr('disabled'));
    //
    // equal($('#neck-rarity').val(), '10.4');
    // equal($('#neck-itemId').val(), '1');
    // equal($('#neck-glyph-rarity').val(), '10.5');
    // equal($('#neck-primary-glyph').val(), 'block-rating');
    // equal($('#neck-secondary-glyph').val(), 'none');
    // ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#neck-signet-rarity').val(), 'normal');
    // equal($('#neck-pick-signet').val(), '21');
    //
    // //Brooklyn Bracer
    // equal($('#wrist-name').html(), ': Brooklyn Bracer');
    // equal($('#wrist-rarity').val(), '10.4');
    // equal($('#wrist-itemId').val(), '85');
    // equal($('#wrist-glyph-rarity').val(), '10.4');
    // equal($('#wrist-primary-glyph').val(), 'defense-rating');
    // equal($('#wrist-secondary-glyph').val(), 'none');
    // ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#wrist-signet-rarity').val(), 'epic');
    // ok($('#wrist-signet-rarity').attr('disabled'));
    // ok($('#wrist-pick-signet').attr('disabled'));
    // ok($('#wrist-rarity').attr('disabled'));
    //
    // equal($('#luck-rarity').val(), '10.4');
    // equal($('#luck-itemId').val(), '3');
    // equal($('#luck-glyph-rarity').val(), '10.4');
    // equal($('#luck-primary-glyph').val(), 'physical-protection');
    // equal($('#luck-secondary-glyph').val(), 'none');
    // ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#luck-signet-rarity').val(), 'epic');
    // equal($('#luck-pick-signet').val(), '39');
    //
    // //NY Buckle
    // equal($('#waist-name').html(), ': NY Buckle');
    // equal($('#waist-rarity').val(), '10.4');
    // equal($('#waist-itemId').val(), '87');
    // equal($('#waist-glyph-rarity').val(), '10.4');
    // equal($('#waist-primary-glyph').val(), 'physical-protection');
    // equal($('#waist-secondary-glyph').val(), 'none');
    // ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#waist-signet-rarity').val(), 'epic');
    // ok($('#waist-signet-rarity').attr('disabled'));
    // ok($('#waist-pick-signet').attr('disabled'));
    // ok($('#waist-rarity option[value="10.1"]').attr('disabled'));
    // ok($('#waist-rarity option[value="10.7"]').attr('disabled'));
    // ok(!$('#waist-rarity option[value="10.4"]').attr('disabled'));
    // ok(!$('#waist-rarity option[value="10.9"]').attr('disabled'));
    //
    // equal($('#occult-name').html(), ': Broadway Charm');
    // equal($('#occult-rarity').val(), '10.4');
    // equal($('#occult-itemId').val(), '88');
    // equal($('#occult-glyph-rarity').val(), '10.4');
    // equal($('#occult-primary-glyph').val(), 'critical-rating');
    // equal($('#occult-secondary-glyph').val(), 'none');
    // ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    // ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    // equal($('#occult-signet-rarity').val(), 'epic');
    // ok($('#occult-signet-rarity').attr('disabled'));
    // ok($('#occult-pick-signet').attr('disabled'));
    // ok($('#occult-rarity option[value="10.1"]').attr('disabled'));
    // ok($('#occult-rarity option[value="10.7"]').attr('disabled'));
    // ok(!$('#occult-rarity option[value="10.4"]').attr('disabled'));
    // ok(!$('#occult-rarity option[value="10.9"]').attr('disabled'));
// });
