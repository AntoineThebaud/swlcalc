
module('swlcalc');

/*test('should initate swlcalc submodules', 8, function() {
    swlcalc.init();
    ok(swlcalc);
    ok(swlcalc.data);
    ok(swlcalc.button);
    ok(swlcalc.select);
    ok(swlcalc.buttonBar);
    ok(swlcalc.summary);
    ok(swlcalc.export);
    ok(swlcalc.import);
});*/

test('should import from hash', 189, function() {
    location.hash = 'weapon=3,4,3,19,3,2,2,13,0,2,0&weapon2=3,7,2,29,4,3,1,15,0,8,0&head=3,4,2,24,4,3,2,18,1,1,16&finger=2,2,1,20,5,4,3,15,4,1,2&neck=1,11,3,6,3,2,1,20,4,1,3&wrist=5,2,2,68,3,3,2,6,5,1,8&luck=1,1,1,10,2,2,1,18,3,1,13&waist=5,11,1,2,4,5,3,8,3,3,16&occult=1,7,3,19,5,1,3,2,5,2,10'
    swlcalc.init();

    // Summary
    equal($('#stat-ilvl').html(), '565');
    equal($('#stat-power-rating').html(), '4388');
    equal($('#stat-weapon-power').html(), '1577');
    equal($('#stat-attack-rating').html(), '8710');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
    equal($('#stat-combat-power').html(), '772');
    equal($('#stat-healing-power').html(), '442');
    equal($('#stat-critical-rating').html(), '+1598');
    equal($('#stat-critical-chance').html(), '18.6%');
    equal($('#stat-critical-power').html(), '+1858');
    equal($('#stat-critical-power-percentage').html(), '120.6%');
    equal($('#stat-hit-rating').html(), '+1539');
    equal($('#stat-glance-reduction').html(), '30.3%');
    equal($('#stat-defense-rating').html(), '+1313');
    equal($('#stat-glance-chance').html(), '12.9%');
    equal($('#stat-evade-rating').html(), '+1805');
    equal($('#stat-evade-chance').html(), '12.4%');
    // equal($('#stat-physical-protection').html(), '+660');
    // equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-ilvl').html(), '400');
    //TODO/FEATURE equal($('#weapon-name').html(), ': Blood');
    equal($('#weapon-equipment-id').val(), '4');
    equal($('#weapon-equipment-rarity').val(), 'epic');
    equal($('#weapon-equipment-quality').val(), '3');
    equal($('#weapon-equipment-level').val(), '19');
    equal($('#weapon-equipment-power-rating').html(), '+1577');
    equal($('#weapon-equipment-ilvl').html(), '264');
    equal($('#weapon-glyph-id').val(), 'critical-rating');
    equal($('#weapon-glyph-rarity').val(), 'epic');
    equal($('#weapon-glyph-quality').val(), '2');
    equal($('#weapon-glyph-level').val(), '13');
    equal($('#weapon-glyph-rating').html(), '+329');
    equal($('#weapon-glyph-ilvl').html(), '136');
    equal($('#weapon-signet-id').val(), '2');
    equal($('#weapon-signet-rarity').val(), undefined);
    equal($('#weapon-signet-level').val(), undefined);
    equal($('#weapon-signet-ilvl').html(), undefined);
    equal($('#weapon-signet-description').html(), 'This weapon deals <span id="weapon-signet-bonus" class="bonus-val attack">347.4</span> additional damage to enemies that are below <span class="bonus-val const">35%</span> health.');

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-ilvl').html(), '581');
    //TODO/FEATURE equal($('#weapon2-name').html(), ': Shotgun');
    equal($('#weapon2-equipment-id').val(), '7');
    equal($('#weapon2-equipment-rarity').val(), 'epic');
    equal($('#weapon2-equipment-quality').val(), '2');
    equal($('#weapon2-equipment-level').val(), '29');
    equal($('#weapon2-equipment-power-rating').html(), '+1809');
    equal($('#weapon2-equipment-ilvl').html(), '315');
    equal($('#weapon2-glyph-id').val(), 'critical-power');
    equal($('#weapon2-glyph-rarity').val(), 'mythic');
    equal($('#weapon2-glyph-quality').val(), '1');
    equal($('#weapon2-glyph-level').val(), '15');
    equal($('#weapon2-glyph-rating').html(), '+491');
    equal($('#weapon2-glyph-ilvl').html(), '266');
    equal($('#weapon2-signet-id').val(), '8');
    equal($('#weapon2-signet-rarity').val(), undefined);
    equal($('#weapon2-signet-level').val(), undefined);
    equal($('#weapon2-signet-ilvl').html(), undefined);
    equal($('#weapon2-signet-description').html(), 'Increases Protection by <span id="weapon2-signet-bonus" class="bonus-val const">300</span> while wielded.');

    equal($('#head-ilvl').html(), '487');
    equal($('#head-equipment-id').val(), '4');
    equal($('#head-equipment-rarity').val(), 'epic');
    equal($('#head-equipment-quality').val(), '2');
    equal($('#head-equipment-level').val(), '24');
    equal($('#head-equipment-power-rating').html(), '+1113');
    equal($('#head-equipment-ilvl').html(), '252');
    equal($('#head-equipment-description').html(), 'Whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, you deal <span id="head-equipment-bonus1" class="bonus-val attack">290</span> physical damage.');
    equal($('#head-glyph-id').val(), 'critical-power');
    equal($('#head-glyph-rarity').val(), 'mythic');
    equal($('#head-glyph-quality').val(), '2');
    equal($('#head-glyph-level').val(), '18');
    equal($('#head-glyph-rating').html(), '+580');
    equal($('#head-glyph-ilvl').html(), '226');
    equal($('#head-signet-id').val(), '1');
    equal($('#head-signet-rarity').val(), 'standard');
    equal($('#head-signet-level').val(), '16');
    equal($('#head-signet-ilvl').html(), '10');
    equal($('#head-signet-description').html(), 'Increases the damage and healing of Pistols Elite Abilities by <span id="head-signet-bonus" class="bonus-val const">3.4495</span><span class="bonus-val const">%</span>.');


    equal($('#finger-ilvl').html(), '571');
    equal($('#finger-equipment-id').val(), '2');
    equal($('#finger-equipment-rarity').val(), 'superior');
    equal($('#finger-equipment-quality').val(), '1');
    equal($('#finger-equipment-level').val(), '20');
    equal($('#finger-equipment-power-rating').html(), '+314');
    equal($('#finger-equipment-ilvl').html(), '113');
    equal($('#finger-equipment-description').html(), 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by <span class="bonus-val const">1530</span> for <span class="bonus-val const">4</span> seconds.');
    equal($('#finger-glyph-id').val(), 'evade-rating');
    equal($('#finger-glyph-rarity').val(), 'legendary');
    equal($('#finger-glyph-quality').val(), '3');
    equal($('#finger-glyph-level').val(), '15');
    equal($('#finger-glyph-rating').html(), '+1052');
    equal($('#finger-glyph-ilvl').html(), '369');
    equal($('#finger-signet-id').val(), '1');
    equal($('#finger-signet-rarity').val(), 'mythic');
    equal($('#finger-signet-level').val(), '2');
    equal($('#finger-signet-ilvl').html(), '89');
    equal($('#finger-signet-description').html(), 'Increases the damage and healing of Pistols Basic Abilities by <span id="finger-signet-bonus" class="bonus-val const">47.9079</span><span class="bonus-val const">%</span>.');

    equal($('#neck-ilvl').html(), '232');
    equal($('#neck-equipment-id').val(), '11');
    equal($('#neck-equipment-rarity').val(), 'standard');
    equal($('#neck-equipment-quality').val(), '3');
    equal($('#neck-equipment-level').val(), '6');
    equal($('#neck-equipment-power-rating').html(), '+70');
    equal($('#neck-equipment-ilvl').html(), '13');
    equal($('#neck-equipment-description').html(), 'This talisman gains more health when leveling up.<br>Whenever you lose health while below <span class="bonus-val const">50%</span> of your maximum health, your damage is increased by <span class="bonus-val const">17%</span> for <span class="bonus-val const">3</span> seconds and your next attack during this time will restore <span class="bonus-val const">4%</span> of your maximum health. This effect can only occur once every <span class="bonus-val const">10</span> seconds.');
    equal($('#neck-glyph-id').val(), 'critical-rating');
    equal($('#neck-glyph-rarity').val(), 'epic');
    equal($('#neck-glyph-quality').val(), '1');
    equal($('#neck-glyph-level').val(), '20');
    equal($('#neck-glyph-rating').html(), '+339');
    equal($('#neck-glyph-ilvl').html(), '128');
    equal($('#neck-signet-id').val(), '1');
    equal($('#neck-signet-rarity').val(), 'mythic');
    equal($('#neck-signet-level').val(), '3');
    equal($('#neck-signet-ilvl').html(), '91');
    equal($('#neck-signet-description').html(), 'Increases the damage and healing of Pistols Power Abilities by <span id="neck-signet-bonus" class="bonus-val const">12.6405</span><span class="bonus-val const">%</span>.');

    equal($('#wrist-ilvl').html(), '1292');
    equal($('#wrist-equipment-id').val(), '2');
    equal($('#wrist-equipment-rarity').val(), 'legendary');
    equal($('#wrist-equipment-quality').val(), '2');
    equal($('#wrist-equipment-level').val(), '68');
    equal($('#wrist-equipment-power-rating').html(), '+1951');
    equal($('#wrist-equipment-ilvl').html(), '1026');
    equal($('#wrist-equipment-description').html(), 'Whenever you heal an ally who does not have any active detrimental effects, you have a <span class="bonus-val const">25%</span> chance to restore <span id="wrist-equipment-bonus1" class="bonus-val heal">221</span> health to that ally.');
    equal($('#wrist-glyph-id').val(), 'critical-power');
    equal($('#wrist-glyph-rarity').val(), 'epic');
    equal($('#wrist-glyph-quality').val(), '2');
    equal($('#wrist-glyph-level').val(), '6');
    equal($('#wrist-glyph-rating').html(), '+270');
    equal($('#wrist-glyph-ilvl').html(), '94');
    equal($('#wrist-signet-id').val(), '1');
    equal($('#wrist-signet-rarity').val(), 'legendary');
    equal($('#wrist-signet-level').val(), '8');
    equal($('#wrist-signet-ilvl').html(), '172');
    equal($('#wrist-signet-description').html(), 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-signet-bonus" class="bonus-val const">36.1004</span><span class="bonus-val const">%</span>.');

    equal($('#luck-ilvl').html(), '136');
    equal($('#luck-equipment-id').val(), '1');
    equal($('#luck-equipment-rarity').val(), 'standard');
    equal($('#luck-equipment-quality').val(), '1');
    equal($('#luck-equipment-level').val(), '10');
    equal($('#luck-equipment-power-rating').html(), '+53');
    equal($('#luck-equipment-ilvl').html(), '22');
    equal($('#luck-equipment-description').html(), '');
    equal($('#luck-glyph-id').val(), 'critical-rating');
    equal($('#luck-glyph-rarity').val(), 'superior');
    equal($('#luck-glyph-quality').val(), '1');
    equal($('#luck-glyph-level').val(), '18');
    equal($('#luck-glyph-rating').html(), '+174');
    equal($('#luck-glyph-ilvl').html(), '58');
    equal($('#luck-signet-id').val(), '1');
    equal($('#luck-signet-rarity').val(), 'epic');
    equal($('#luck-signet-level').val(), '13');
    equal($('#luck-signet-ilvl').html(), '55');
    equal($('#luck-signet-description').html(), 'When you critically heal, you gain a beneficial effect that grants you a <span id="luck-signet-bonus" class="bonus-val heal">17.8511</span><span class="bonus-val heal">%</span> bonus to healing for <span class="bonus-val const">5</span> seconds. This ability can only occur once every <span class="bonus-val const">15</span> seconds.');

    equal($('#waist-ilvl').html(), '846');
    equal($('#waist-equipment-id').val(), '11');
    equal($('#waist-equipment-rarity').val(), 'legendary');
    equal($('#waist-equipment-quality').val(), '1');
    equal($('#waist-equipment-level').val(), '2');
    equal($('#waist-equipment-power-rating').html(), '+775');
    equal($('#waist-equipment-ilvl').html(), '591');
    equal($('#waist-equipment-description').html(), 'Whenever you spend Rage to empower an attack, you gain <span class="bonus-val const">7</span> Rage. Rage must be spent in order to trigger this effect.');
    equal($('#waist-glyph-id').val(), 'defense-rating');
    equal($('#waist-glyph-rarity').val(), 'mythic');
    equal($('#waist-glyph-quality').val(), '3');
    equal($('#waist-glyph-level').val(), '8');
    equal($('#waist-glyph-rating').html(), '+560');
    equal($('#waist-glyph-ilvl').html(), '196');
    equal($('#waist-signet-id').val(), '3');
    equal($('#waist-signet-rarity').val(), 'epic');
    equal($('#waist-signet-level').val(), '16');
    equal($('#waist-signet-ilvl').html(), '59');
    equal($('#waist-signet-description').html(), 'Reduces the cooldown of Gadgets by <span id="waist-signet-bonus" class="bonus-val const">32.7158</span><span class="bonus-val const">%</span>.');

    equal($('#occult-ilvl').html(), '540');
    equal($('#occult-equipment-id').val(), '7');
    equal($('#occult-equipment-rarity').val(), 'standard');
    equal($('#occult-equipment-quality').val(), '3');
    equal($('#occult-equipment-level').val(), '19');
    equal($('#occult-equipment-power-rating').html(), '+112');
    equal($('#occult-equipment-ilvl').html(), '42');
    equal($('#occult-equipment-description').html(), 'Whenever you or any of your group members defeat an enemy, your Protection is increased by <span class="bonus-val const">2045</span> for <span class="bonus-val const">5</span> seconds.');
    equal($('#occult-glyph-id').val(), 'hit-rating');
    equal($('#occult-glyph-rarity').val(), 'legendary');
    equal($('#occult-glyph-quality').val(), '3');
    equal($('#occult-glyph-level').val(), '2');
    equal($('#occult-glyph-rating').html(), '+783');
    equal($('#occult-glyph-ilvl').html(), '322');
    equal($('#occult-signet-id').val(), '2');
    equal($('#occult-signet-rarity').val(), 'legendary');
    equal($('#occult-signet-level').val(), '10');
    equal($('#occult-signet-ilvl').html(), '175');
    equal($('#occult-signet-description').html(), 'Active dodges break movement hindering effects, but also have their cooldown increased by <span id="occult-signet-bonus" class="bonus-val const">56.4684</span><span class="bonus-val const">%</span>.');
});

test('should set default values with an empty hash', 191, function() {
    location.hash = ''
    swlcalc.init();

    // Summary
    // --- Primary Stats
    equal($('#stat-ilvl').html(), '0');
    equal($('#stat-power-rating').html(), '0');
    equal($('#stat-weapon-power').html(), '0');
    equal($('#stat-attack-rating').html(), '4322');
    equal($('#stat-heal-rating').html(), '4310');
    equal($('#stat-hitpoints').html(), '7512');
    equal($('#stat-combat-power').html(), '324');
    equal($('#stat-healing-power').html(), '323');
    // --- Offensive Stats
    equal($('#stat-critical-rating').html(), '+756');
    equal($('#stat-critical-chance').html(), '13.3%');
    equal($('#stat-critical-power').html(), '+1008');
    equal($('#stat-critical-power-percentage').html(), '90.6%');
    equal($('#stat-hit-rating').html(), '+756');
    equal($('#stat-glance-reduction').html(), '14.9%');
    // --- Defensive Stats
    equal($('#stat-defense-rating').html(), '+753');
    equal($('#stat-glance-chance').html(), '7.4%');
    equal($('#stat-evade-rating').html(), '+753');
    equal($('#stat-evade-chance').html(), '5.2%');
    // equal($('#stat-physical-protection').html(), '+660');
    // equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-ilvl').html(), '0');
    //TODO/FEATURE equal($('#weapon-name').html(), '');
    equal($('#weapon-equipment-id').val(), 'none');
    equal($('#weapon-equipment-rarity').val(), 'standard');
    equal($('#weapon-equipment-quality').val(), '1');
    equal($('#weapon-equipment-level').val(), '20');
    equal($('#weapon-equipment-power-rating').html(), '0');
    equal($('#weapon-equipment-ilvl').html(), '0');
    equal($('#weapon-glyph-id').val(), 'none');
    equal($('#weapon-glyph-rarity').val(), 'standard');
    equal($('#weapon-glyph-quality').val(), '1');
    equal($('#weapon-glyph-level').val(), '20');
    equal($('#weapon-glyph-rating').html(), '0');
    equal($('#weapon-glyph-ilvl').html(), '0');
    equal($('#weapon-signet-id').val(), 'none');
    equal($('#weapon-signet-rarity').val(), undefined);
    equal($('#weapon-signet-level').val(), undefined);
    equal($('#weapon-signet-ilvl').html(), undefined);
    equal($('#weapon-signet-description').html(), '');
    equal($('#weapon-signet-bonus').val(), undefined);

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-ilvl').html(), '0');
    //TODO/FEATURE equal($('#weapon2-name').html(), '');
    equal($('#weapon2-equipment-id').val(), 'none');
    equal($('#weapon2-equipment-rarity').val(), 'standard');
    equal($('#weapon2-equipment-quality').val(), '1');
    equal($('#weapon2-equipment-level').val(), '20');
    equal($('#weapon2-equipment-power-rating').html(), '0');
    equal($('#weapon2-equipment-ilvl').html(), '0');
    equal($('#weapon2-glyph-id').val(), 'none');
    equal($('#weapon2-glyph-rarity').val(), 'standard');
    equal($('#weapon2-glyph-quality').val(), '1');
    equal($('#weapon2-glyph-level').val(), '20');
    equal($('#weapon2-glyph-rating').html(), '0');
    equal($('#weapon2-glyph-ilvl').html(), '0');
    equal($('#weapon2-signet-id').val(), 'none');
    equal($('#weapon2-signet-rarity').val(), undefined);
    equal($('#weapon2-signet-level').val(), undefined);
    equal($('#weapon2-signet-ilvl').html(), undefined);
    equal($('#weapon2-signet-description').html(), '');
    equal($('#weapon2-signet-bonus').val(), undefined);

    equal($('#head-ilvl').html(), '0');
    equal($('#head-equipment-id').val(), 'none');
    equal($('#head-equipment-rarity').val(), 'standard');
    equal($('#head-equipment-quality').val(), '1');
    equal($('#head-equipment-level').val(), '20');
    equal($('#head-equipment-power-rating').html(), '0');
    equal($('#head-equipment-ilvl').html(), '0');
    equal($('#head-glyph-id').val(), 'none');
    equal($('#head-glyph-rarity').val(), 'standard');
    equal($('#head-glyph-quality').val(), '1');
    equal($('#head-glyph-level').val(), '20');
    equal($('#head-glyph-rating').html(), '0');
    equal($('#head-glyph-ilvl').html(), '0');
    equal($('#head-signet-id').val(), 'none');
    equal($('#head-signet-rarity').val(), 'standard');
    equal($('#head-signet-level').val(), '20');
    equal($('#head-signet-ilvl').html(), '0');
    equal($('#head-signet-description').html(), '');
    equal($('#head-signet-bonus').val(), undefined);

    equal($('#finger-ilvl').html(), '0');
    equal($('#finger-equipment-id').val(), 'none');
    equal($('#finger-equipment-rarity').val(), 'standard');
    equal($('#finger-equipment-quality').val(), '1');
    equal($('#finger-equipment-level').val(), '20');
    equal($('#finger-equipment-power-rating').html(), '0');
    equal($('#finger-equipment-ilvl').html(), '0');
    equal($('#finger-glyph-id').val(), 'none');
    equal($('#finger-glyph-rarity').val(), 'standard');
    equal($('#finger-glyph-quality').val(), '1');
    equal($('#finger-glyph-level').val(), '20');
    equal($('#finger-glyph-rating').html(), '0');
    equal($('#finger-glyph-ilvl').html(), '0');
    equal($('#finger-signet-id').val(), 'none');
    equal($('#finger-signet-rarity').val(), 'standard');
    equal($('#finger-signet-level').val(), '20');
    equal($('#finger-signet-ilvl').html(), '0');
    equal($('#finger-signet-description').html(), '');
    equal($('#finger-signet-bonus').val(), undefined);

    equal($('#neck-ilvl').html(), '0');
    equal($('#neck-equipment-id').val(), 'none');
    equal($('#neck-equipment-rarity').val(), 'standard');
    equal($('#neck-equipment-quality').val(), '1');
    equal($('#neck-equipment-level').val(), '20');
    equal($('#neck-equipment-power-rating').html(), '0');
    equal($('#neck-equipment-ilvl').html(), '0');
    equal($('#neck-glyph-id').val(), 'none');
    equal($('#neck-glyph-rarity').val(), 'standard');
    equal($('#neck-glyph-quality').val(), '1');
    equal($('#neck-glyph-level').val(), '20');
    equal($('#neck-glyph-rating').html(), '0');
    equal($('#neck-glyph-ilvl').html(), '0');
    equal($('#neck-signet-id').val(), 'none');
    equal($('#neck-signet-rarity').val(), 'standard');
    equal($('#neck-signet-level').val(), '20');
    equal($('#neck-signet-ilvl').html(), '0');
    equal($('#neck-signet-description').html(), '');
    equal($('#neck-signet-bonus').val(), undefined);

    equal($('#wrist-ilvl').html(), '0');
    equal($('#wrist-equipment-id').val(), 'none');
    equal($('#wrist-equipment-rarity').val(), 'standard');
    equal($('#wrist-equipment-quality').val(), '1');
    equal($('#wrist-equipment-level').val(), '20');
    equal($('#wrist-equipment-power-rating').html(), '0');
    equal($('#wrist-equipment-ilvl').html(), '0');
    equal($('#wrist-glyph-id').val(), 'none');
    equal($('#wrist-glyph-rarity').val(), 'standard');
    equal($('#wrist-glyph-quality').val(), '1');
    equal($('#wrist-glyph-level').val(), '20');
    equal($('#wrist-glyph-rating').html(), '0');
    equal($('#wrist-glyph-ilvl').html(), '0');
    equal($('#wrist-signet-id').val(), 'none');
    equal($('#wrist-signet-rarity').val(), 'standard');
    equal($('#wrist-signet-level').val(), '20');
    equal($('#wrist-signet-ilvl').html(), '0');
    equal($('#wrist-signet-description').html(), '');
    equal($('#wrist-signet-bonus').val(), undefined);

    equal($('#luck-ilvl').html(), '0');
    equal($('#luck-equipment-id').val(), 'none');
    equal($('#luck-equipment-rarity').val(), 'standard');
    equal($('#luck-equipment-quality').val(), '1');
    equal($('#luck-equipment-level').val(), '20');
    equal($('#luck-equipment-power-rating').html(), '0');
    equal($('#luck-equipment-ilvl').html(), '0');
    equal($('#luck-glyph-id').val(), 'none');
    equal($('#luck-glyph-rarity').val(), 'standard');
    equal($('#luck-glyph-quality').val(), '1');
    equal($('#luck-glyph-level').val(), '20');
    equal($('#luck-glyph-rating').html(), '0');
    equal($('#luck-glyph-ilvl').html(), '0');
    equal($('#luck-signet-id').val(), 'none');
    equal($('#luck-signet-rarity').val(), 'standard');
    equal($('#luck-signet-level').val(), '20');
    equal($('#luck-signet-ilvl').html(), '0');
    equal($('#luck-signet-description').html(), '');
    equal($('#luck-signet-bonus').val(), undefined);

    equal($('#waist-ilvl').html(), '0');
    equal($('#waist-equipment-id').val(), 'none');
    equal($('#waist-equipment-rarity').val(), 'standard');
    equal($('#waist-equipment-quality').val(), '1');
    equal($('#waist-equipment-level').val(), '20');
    equal($('#waist-equipment-power-rating').html(), '0');
    equal($('#waist-equipment-ilvl').html(), '0');
    equal($('#waist-glyph-id').val(), 'none');
    equal($('#waist-glyph-rarity').val(), 'standard');
    equal($('#waist-glyph-quality').val(), '1');
    equal($('#waist-glyph-level').val(), '20');
    equal($('#waist-glyph-rating').html(), '0');
    equal($('#waist-glyph-ilvl').html(), '0');
    equal($('#waist-signet-id').val(), 'none');
    equal($('#waist-signet-rarity').val(), 'standard');
    equal($('#waist-signet-level').val(), '20');
    equal($('#waist-signet-ilvl').html(), '0');
    equal($('#waist-signet-description').html(), '');
    equal($('#waist-signet-bonus').val(), undefined);

    equal($('#occult-ilvl').html(), '0');
    equal($('#occult-equipment-id').val(), 'none');
    equal($('#occult-equipment-rarity').val(), 'standard');
    equal($('#occult-equipment-quality').val(), '1');
    equal($('#occult-equipment-level').val(), '20');
    equal($('#occult-equipment-power-rating').html(), '0');
    equal($('#occult-equipment-ilvl').html(), '0');
    equal($('#occult-glyph-id').val(), 'none');
    equal($('#occult-glyph-rarity').val(), 'standard');
    equal($('#occult-glyph-quality').val(), '1');
    equal($('#occult-glyph-level').val(), '20');
    equal($('#occult-glyph-rating').html(), '0');
    equal($('#occult-glyph-ilvl').html(), '0');
    equal($('#occult-signet-id').val(), 'none');
    equal($('#occult-signet-rarity').val(), 'standard');
    equal($('#occult-signet-level').val(), '20');
    equal($('#occult-signet-ilvl').html(), '0');
    equal($('#occult-signet-description').html(), '');
    equal($('#occult-signet-bonus').val(), undefined);
});
