
QUnit.module("swlcalc");

/*Test('should initate swlcalc submodules', 8, function() {
    swlcalc.init();
    ok(swlcalc);
    ok(swlcalc.data);
    ok(swlcalc.swap);
    ok(swlcalc.select);
    ok(swlcalc.buttonBar);
    ok(swlcalc.summary);
    ok(swlcalc.export);
    ok(swlcalc.import);
});*/

QUnit.test("should import from hash", function(assert) {
    location.hash = "weapon=3,4,3,19,3,2,2,13,0,2,0&weapon2=3,7,2,29,4,3,1,15,0,8,0&head=3,4,2,24,4,3,2,18,1,1,16&finger=2,2,1,20,5,4,3,15,4,1,2&neck=1,11,3,6,3,2,1,20,4,1,3&wrist=5,2,2,68,3,3,2,6,5,1,8&luck=1,1,1,10,2,2,1,18,3,1,13&waist=5,11,1,2,4,5,3,8,3,3,16&occult=1,7,3,19,5,1,3,2,5,2,10";
    swlcalc.init();

    // Summary
    assert.equal($("#stat-ilvl").html(), "565");
    assert.equal($("#stat-power-rating").html(), "4388");
    assert.equal($("#stat-weapon-power").html(), "1577");
    assert.equal($("#stat-attack-rating").html(), "8710");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "7512");
    assert.equal($("#stat-combat-power").html(), "772");
    assert.equal($("#stat-healing-power").html(), "442");
    assert.equal($("#stat-critical-rating").html(), "+1598");
    assert.equal($("#stat-critical-chance").html(), "18.6%");
    assert.equal($("#stat-critical-power").html(), "+1858");
    assert.equal($("#stat-critical-power-percentage").html(), "120.6%");
    assert.equal($("#stat-hit-rating").html(), "+1539");
    assert.equal($("#stat-glance-reduction").html(), "30.3%");
    assert.equal($("#stat-defense-rating").html(), "+1313");
    assert.equal($("#stat-glance-chance").html(), "12.9%");
    assert.equal($("#stat-evade-rating").html(), "+1805");
    assert.equal($("#stat-evade-chance").html(), "12.4%");

    // Equal($('#stat-physical-protection').html(), '+660');
    // equal($('#stat-magical-protection').html(), '+300');

    assert.ok($("#weapon-recap-active").is(":visible"));
    assert.equal($("#weapon-edit-ilvl").html(), "400");
    assert.equal($("#weapon-edit-equipment-id").val(), "4");
    assert.equal($("#weapon-edit-equipment-rarity").val(), "epic");
    assert.equal($("#weapon-edit-equipment-quality").val(), "3");
    assert.equal($("#weapon-edit-equipment-level").val(), "19");
    assert.equal($("#weapon-edit-equipment-stat-value").html(), "1577");
    assert.equal($("#weapon-edit-equipment-ilvl").html(), "264");
    assert.equal($("#weapon-edit-glyph-id").val(), "critical-rating");
    assert.equal($("#weapon-edit-glyph-rarity").val(), "epic");
    assert.equal($("#weapon-edit-glyph-quality").val(), "2");
    assert.equal($("#weapon-edit-glyph-level").val(), "13");
    assert.equal($("#weapon-edit-glyph-stat-rating").html(), "+329");
    assert.equal($("#weapon-edit-glyph-ilvl").html(), "136");
    assert.equal($("#weapon-edit-signet-id").val(), "2");
    assert.equal($("#weapon-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon-edit-signet-level").val(), undefined);
    assert.equal($("#weapon-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon-edit-signet-description").html(), 'This weapon deals <span id="weapon-edit-signet-bonus" class="bonus-val attack">347.4</span> additional damage to enemies that are below <span class="bonus-val const">35%</span> health.');

    assert.ok(!$("#weapon2-recap-active").is(":visible"));
    assert.equal($("#weapon2-edit-ilvl").html(), "581");
    assert.equal($("#weapon2-edit-equipment-id").val(), "7");
    assert.equal($("#weapon2-edit-equipment-rarity").val(), "epic");
    assert.equal($("#weapon2-edit-equipment-quality").val(), "2");
    assert.equal($("#weapon2-edit-equipment-level").val(), "29");
    assert.equal($("#weapon2-edit-equipment-stat-value").html(), "1809");
    assert.equal($("#weapon2-edit-equipment-ilvl").html(), "315");
    assert.equal($("#weapon2-edit-glyph-id").val(), "critical-power");
    assert.equal($("#weapon2-edit-glyph-rarity").val(), "mythic");
    assert.equal($("#weapon2-edit-glyph-quality").val(), "1");
    assert.equal($("#weapon2-edit-glyph-level").val(), "15");
    assert.equal($("#weapon2-edit-glyph-stat-rating").html(), "+491");
    assert.equal($("#weapon2-edit-glyph-ilvl").html(), "266");
    assert.equal($("#weapon2-edit-signet-id").val(), "8");
    assert.equal($("#weapon2-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon2-edit-signet-level").val(), undefined);
    assert.equal($("#weapon2-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon2-edit-signet-description").html(), 'Increases Protection by <span id="weapon2-edit-signet-bonus" class="bonus-val const">300</span> while wielded.');

    assert.equal($("#head-edit-ilvl").html(), "487");
    assert.equal($("#head-edit-equipment-id").val(), "4");
    assert.equal($("#head-edit-equipment-rarity").val(), "epic");
    assert.equal($("#head-edit-equipment-quality").val(), "2");
    assert.equal($("#head-edit-equipment-level").val(), "24");
    assert.equal($("#head-edit-equipment-stat-value").html(), "1113");
    assert.equal($("#head-edit-equipment-ilvl").html(), "252");
    assert.equal($("#head-edit-equipment-description").html(), 'Whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, you deal <span id="head-edit-equipment-bonus1" class="bonus-val attack">290</span> physical damage.');
    assert.equal($("#head-edit-glyph-id").val(), "critical-power");
    assert.equal($("#head-edit-glyph-rarity").val(), "mythic");
    assert.equal($("#head-edit-glyph-quality").val(), "2");
    assert.equal($("#head-edit-glyph-level").val(), "18");
    assert.equal($("#head-edit-glyph-stat-rating").html(), "+580");
    assert.equal($("#head-edit-glyph-ilvl").html(), "226");
    assert.equal($("#head-edit-signet-id").val(), "1");
    assert.equal($("#head-edit-signet-rarity").val(), "standard");
    assert.equal($("#head-edit-signet-level").val(), "16");
    assert.equal($("#head-edit-signet-ilvl").html(), "10");
    assert.equal($("#head-edit-signet-description").html(), 'Increases the damage and healing of Pistols Elite Abilities by <span id="head-edit-signet-bonus" class="bonus-val const">3.4495</span><span class="bonus-val const">%</span>.');

    assert.equal($("#finger-edit-ilvl").html(), "571");
    assert.equal($("#finger-edit-equipment-id").val(), "2");
    assert.equal($("#finger-edit-equipment-rarity").val(), "superior");
    assert.equal($("#finger-edit-equipment-quality").val(), "1");
    assert.equal($("#finger-edit-equipment-level").val(), "20");
    assert.equal($("#finger-edit-equipment-stat-value").html(), "314");
    assert.equal($("#finger-edit-equipment-ilvl").html(), "113");
    assert.equal($("#finger-edit-equipment-description").html(), 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by <span class="bonus-val const">1530</span> for <span class="bonus-val const">4</span> seconds.');
    assert.equal($("#finger-edit-glyph-id").val(), "evade-rating");
    assert.equal($("#finger-edit-glyph-rarity").val(), "legendary");
    assert.equal($("#finger-edit-glyph-quality").val(), "3");
    assert.equal($("#finger-edit-glyph-level").val(), "15");
    assert.equal($("#finger-edit-glyph-stat-rating").html(), "+1052");
    assert.equal($("#finger-edit-glyph-ilvl").html(), "369");
    assert.equal($("#finger-edit-signet-id").val(), "1");
    assert.equal($("#finger-edit-signet-rarity").val(), "mythic");
    assert.equal($("#finger-edit-signet-level").val(), "2");
    assert.equal($("#finger-edit-signet-ilvl").html(), "89");
    assert.equal($("#finger-edit-signet-description").html(), 'Increases the damage and healing of Pistols Basic Abilities by <span id="finger-edit-signet-bonus" class="bonus-val const">47.9079</span><span class="bonus-val const">%</span>.');

    assert.equal($("#neck-edit-ilvl").html(), "232");
    assert.equal($("#neck-edit-equipment-id").val(), "11");
    assert.equal($("#neck-edit-equipment-rarity").val(), "standard");
    assert.equal($("#neck-edit-equipment-quality").val(), "3");
    assert.equal($("#neck-edit-equipment-level").val(), "6");
    assert.equal($("#neck-edit-equipment-stat-value").html(), "70");
    assert.equal($("#neck-edit-equipment-ilvl").html(), "13");
    assert.equal($("#neck-edit-equipment-description").html(), 'This talisman gains more health when leveling up.<br>Whenever you lose health while below <span class="bonus-val const">50%</span> of your maximum health, your damage is increased by <span class="bonus-val const">17%</span> for <span class="bonus-val const">3</span> seconds and your next attack during this time will restore <span class="bonus-val const">4%</span> of your maximum health. This effect can only occur once every <span class="bonus-val const">10</span> seconds.');
    assert.equal($("#neck-edit-glyph-id").val(), "critical-rating");
    assert.equal($("#neck-edit-glyph-rarity").val(), "epic");
    assert.equal($("#neck-edit-glyph-quality").val(), "1");
    assert.equal($("#neck-edit-glyph-level").val(), "20");
    assert.equal($("#neck-edit-glyph-stat-rating").html(), "+339");
    assert.equal($("#neck-edit-glyph-ilvl").html(), "128");
    assert.equal($("#neck-edit-signet-id").val(), "1");
    assert.equal($("#neck-edit-signet-rarity").val(), "mythic");
    assert.equal($("#neck-edit-signet-level").val(), "3");
    assert.equal($("#neck-edit-signet-ilvl").html(), "91");
    assert.equal($("#neck-edit-signet-description").html(), 'Increases the damage and healing of Pistols Power Abilities by <span id="neck-edit-signet-bonus" class="bonus-val const">12.6405</span><span class="bonus-val const">%</span>.');

    assert.equal($("#wrist-edit-ilvl").html(), "1292");
    assert.equal($("#wrist-edit-equipment-id").val(), "2");
    assert.equal($("#wrist-edit-equipment-rarity").val(), "legendary");
    assert.equal($("#wrist-edit-equipment-quality").val(), "2");
    assert.equal($("#wrist-edit-equipment-level").val(), "68");
    assert.equal($("#wrist-edit-equipment-stat-value").html(), "1951");
    assert.equal($("#wrist-edit-equipment-ilvl").html(), "1026");
    assert.equal($("#wrist-edit-equipment-description").html(), 'Whenever you heal an ally who does not have any active detrimental effects, you have a <span class="bonus-val const">25%</span> chance to restore <span id="wrist-edit-equipment-bonus1" class="bonus-val heal">221</span> health to that ally.');
    assert.equal($("#wrist-edit-glyph-id").val(), "critical-power");
    assert.equal($("#wrist-edit-glyph-rarity").val(), "epic");
    assert.equal($("#wrist-edit-glyph-quality").val(), "2");
    assert.equal($("#wrist-edit-glyph-level").val(), "6");
    assert.equal($("#wrist-edit-glyph-stat-rating").html(), "+270");
    assert.equal($("#wrist-edit-glyph-ilvl").html(), "94");
    assert.equal($("#wrist-edit-signet-id").val(), "1");
    assert.equal($("#wrist-edit-signet-rarity").val(), "legendary");
    assert.equal($("#wrist-edit-signet-level").val(), "8");
    assert.equal($("#wrist-edit-signet-ilvl").html(), "172");
    assert.equal($("#wrist-edit-signet-description").html(), 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-edit-signet-bonus" class="bonus-val const">36.1004</span><span class="bonus-val const">%</span>.');

    assert.equal($("#luck-edit-ilvl").html(), "136");
    assert.equal($("#luck-edit-equipment-id").val(), "1");
    assert.equal($("#luck-edit-equipment-rarity").val(), "standard");
    assert.equal($("#luck-edit-equipment-quality").val(), "1");
    assert.equal($("#luck-edit-equipment-level").val(), "10");
    assert.equal($("#luck-edit-equipment-stat-value").html(), "53");
    assert.equal($("#luck-edit-equipment-ilvl").html(), "22");
    assert.equal($("#luck-edit-equipment-description").html(), "");
    assert.equal($("#luck-edit-glyph-id").val(), "critical-rating");
    assert.equal($("#luck-edit-glyph-rarity").val(), "superior");
    assert.equal($("#luck-edit-glyph-quality").val(), "1");
    assert.equal($("#luck-edit-glyph-level").val(), "18");
    assert.equal($("#luck-edit-glyph-stat-rating").html(), "+174");
    assert.equal($("#luck-edit-glyph-ilvl").html(), "58");
    assert.equal($("#luck-edit-signet-id").val(), "1");
    assert.equal($("#luck-edit-signet-rarity").val(), "epic");
    assert.equal($("#luck-edit-signet-level").val(), "13");
    assert.equal($("#luck-edit-signet-ilvl").html(), "55");
    assert.equal($("#luck-edit-signet-description").html(), 'When you critically heal, you gain a beneficial effect that grants you a <span id="luck-edit-signet-bonus" class="bonus-val heal">17.8511</span><span class="bonus-val heal">%</span> bonus to healing for <span class="bonus-val const">5</span> seconds. This ability can only occur once every <span class="bonus-val const">15</span> seconds.');

    assert.equal($("#waist-edit-ilvl").html(), "846");
    assert.equal($("#waist-edit-equipment-id").val(), "11");
    assert.equal($("#waist-edit-equipment-rarity").val(), "legendary");
    assert.equal($("#waist-edit-equipment-quality").val(), "1");
    assert.equal($("#waist-edit-equipment-level").val(), "2");
    assert.equal($("#waist-edit-equipment-stat-value").html(), "775");
    assert.equal($("#waist-edit-equipment-ilvl").html(), "591");
    assert.equal($("#waist-edit-equipment-description").html(), 'Whenever you spend Rage to empower an attack, you gain <span class="bonus-val const">7</span> Rage. Rage must be spent in order to trigger this effect.');
    assert.equal($("#waist-edit-glyph-id").val(), "defense-rating");
    assert.equal($("#waist-edit-glyph-rarity").val(), "mythic");
    assert.equal($("#waist-edit-glyph-quality").val(), "3");
    assert.equal($("#waist-edit-glyph-level").val(), "8");
    assert.equal($("#waist-edit-glyph-stat-rating").html(), "+560");
    assert.equal($("#waist-edit-glyph-ilvl").html(), "196");
    assert.equal($("#waist-edit-signet-id").val(), "3");
    assert.equal($("#waist-edit-signet-rarity").val(), "epic");
    assert.equal($("#waist-edit-signet-level").val(), "16");
    assert.equal($("#waist-edit-signet-ilvl").html(), "59");
    assert.equal($("#waist-edit-signet-description").html(), 'Reduces the cooldown of Gadgets by <span id="waist-edit-signet-bonus" class="bonus-val const">32.7158</span><span class="bonus-val const">%</span>.');

    assert.equal($("#occult-edit-ilvl").html(), "540");
    assert.equal($("#occult-edit-equipment-id").val(), "7");
    assert.equal($("#occult-edit-equipment-rarity").val(), "standard");
    assert.equal($("#occult-edit-equipment-quality").val(), "3");
    assert.equal($("#occult-edit-equipment-level").val(), "19");
    assert.equal($("#occult-edit-equipment-stat-value").html(), "112");
    assert.equal($("#occult-edit-equipment-ilvl").html(), "42");
    assert.equal($("#occult-edit-equipment-description").html(), 'Whenever you or any of your group members defeat an enemy, your Protection is increased by <span class="bonus-val const">2045</span> for <span class="bonus-val const">5</span> seconds.');
    assert.equal($("#occult-edit-glyph-id").val(), "hit-rating");
    assert.equal($("#occult-edit-glyph-rarity").val(), "legendary");
    assert.equal($("#occult-edit-glyph-quality").val(), "3");
    assert.equal($("#occult-edit-glyph-level").val(), "2");
    assert.equal($("#occult-edit-glyph-stat-rating").html(), "+783");
    assert.equal($("#occult-edit-glyph-ilvl").html(), "322");
    assert.equal($("#occult-edit-signet-id").val(), "2");
    assert.equal($("#occult-edit-signet-rarity").val(), "legendary");
    assert.equal($("#occult-edit-signet-level").val(), "10");
    assert.equal($("#occult-edit-signet-ilvl").html(), "175");
    assert.equal($("#occult-edit-signet-description").html(), 'Active dodges break movement hindering effects, but also have their cooldown increased by <span id="occult-edit-signet-bonus" class="bonus-val const">56.4684</span><span class="bonus-val const">%</span>.');
});

QUnit.test("should set default values with an empty hash", function(assert) {
    location.hash = "";
    swlcalc.init();

    // Summary
    // --- Primary Stats
    assert.equal($("#stat-ilvl").html(), "0");
    assert.equal($("#stat-power-rating").html(), "0");
    assert.equal($("#stat-weapon-power").html(), "0");
    assert.equal($("#stat-attack-rating").html(), "4322");
    assert.equal($("#stat-heal-rating").html(), "4310");
    assert.equal($("#stat-hitpoints").html(), "7512");
    assert.equal($("#stat-combat-power").html(), "324");
    assert.equal($("#stat-healing-power").html(), "323");

    // --- Offensive Stats
    assert.equal($("#stat-critical-rating").html(), "+756");
    assert.equal($("#stat-critical-chance").html(), "13.3%");
    assert.equal($("#stat-critical-power").html(), "+1008");
    assert.equal($("#stat-critical-power-percentage").html(), "90.6%");
    assert.equal($("#stat-hit-rating").html(), "+756");
    assert.equal($("#stat-glance-reduction").html(), "14.9%");

    // --- Defensive Stats
    assert.equal($("#stat-defense-rating").html(), "+753");
    assert.equal($("#stat-glance-chance").html(), "7.4%");
    assert.equal($("#stat-evade-rating").html(), "+753");
    assert.equal($("#stat-evade-chance").html(), "5.2%");

    // Equal($('#stat-physical-protection').html(), '+660');
    // equal($('#stat-magical-protection').html(), '+300');

    assert.ok($("#weapon-recap-active").is(":visible"));
    assert.equal($("#weapon-edit-ilvl").html(), "0");

    //TODO/FEATURE equal($('#weapon-name').html(), '');
    assert.equal($("#weapon-edit-equipment-id").val(), "none");
    assert.equal($("#weapon-edit-equipment-rarity").val(), "standard");
    assert.equal($("#weapon-edit-equipment-quality").val(), "1");
    assert.equal($("#weapon-edit-equipment-level").val(), "20");
    assert.equal($("#weapon-edit-equipment-stat-value").html(), "0");
    assert.equal($("#weapon-edit-equipment-ilvl").html(), "0");
    assert.equal($("#weapon-edit-glyph-id").val(), "none");
    assert.equal($("#weapon-edit-glyph-rarity").val(), "standard");
    assert.equal($("#weapon-edit-glyph-quality").val(), "1");
    assert.equal($("#weapon-edit-glyph-level").val(), "20");
    assert.equal($("#weapon-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#weapon-edit-glyph-ilvl").html(), "0");
    assert.equal($("#weapon-edit-signet-id").val(), "none");
    assert.equal($("#weapon-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon-edit-signet-level").val(), undefined);
    assert.equal($("#weapon-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon-edit-signet-description").html(), "");
    assert.equal($("#weapon-edit-edit-signet-bonus").val(), undefined);

    assert.ok(!$("#weapon2-recap-active").is(":visible"));
    assert.equal($("#weapon2-edit-ilvl").html(), "0");

    //TODO/FEATURE equal($('#weapon2-name').html(), '');
    assert.equal($("#weapon2-edit-equipment-id").val(), "none");
    assert.equal($("#weapon2-edit-equipment-rarity").val(), "standard");
    assert.equal($("#weapon2-edit-equipment-quality").val(), "1");
    assert.equal($("#weapon2-edit-equipment-level").val(), "20");
    assert.equal($("#weapon2-edit-equipment-stat-value").html(), "0");
    assert.equal($("#weapon2-edit-equipment-ilvl").html(), "0");
    assert.equal($("#weapon2-edit-glyph-id").val(), "none");
    assert.equal($("#weapon2-edit-glyph-rarity").val(), "standard");
    assert.equal($("#weapon2-edit-glyph-quality").val(), "1");
    assert.equal($("#weapon2-edit-glyph-level").val(), "20");
    assert.equal($("#weapon2-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#weapon2-edit-glyph-ilvl").html(), "0");
    assert.equal($("#weapon2-edit-signet-id").val(), "none");
    assert.equal($("#weapon2-edit-signet-rarity").val(), undefined);
    assert.equal($("#weapon2-edit-signet-level").val(), undefined);
    assert.equal($("#weapon2-edit-signet-ilvl").html(), undefined);
    assert.equal($("#weapon2-edit-signet-description").html(), "");
    assert.equal($("#weapon2-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#head-edit-ilvl").html(), "0");
    assert.equal($("#head-edit-equipment-id").val(), "none");
    assert.equal($("#head-edit-equipment-rarity").val(), "standard");
    assert.equal($("#head-edit-equipment-quality").val(), "1");
    assert.equal($("#head-edit-equipment-level").val(), "20");
    assert.equal($("#head-edit-equipment-stat-value").html(), "0");
    assert.equal($("#head-edit-equipment-ilvl").html(), "0");
    assert.equal($("#head-edit-glyph-id").val(), "none");
    assert.equal($("#head-edit-glyph-rarity").val(), "standard");
    assert.equal($("#head-edit-glyph-quality").val(), "1");
    assert.equal($("#head-edit-glyph-level").val(), "20");
    assert.equal($("#head-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#head-edit-glyph-ilvl").html(), "0");
    assert.equal($("#head-edit-signet-id").val(), "none");
    assert.equal($("#head-edit-signet-rarity").val(), "standard");
    assert.equal($("#head-edit-signet-level").val(), "20");
    assert.equal($("#head-edit-signet-ilvl").html(), "0");
    assert.equal($("#head-edit-signet-description").html(), "");
    assert.equal($("#head-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#finger-edit-ilvl").html(), "0");
    assert.equal($("#finger-edit-equipment-id").val(), "none");
    assert.equal($("#finger-edit-equipment-rarity").val(), "standard");
    assert.equal($("#finger-edit-equipment-quality").val(), "1");
    assert.equal($("#finger-edit-equipment-level").val(), "20");
    assert.equal($("#finger-edit-equipment-stat-value").html(), "0");
    assert.equal($("#finger-edit-equipment-ilvl").html(), "0");
    assert.equal($("#finger-edit-glyph-id").val(), "none");
    assert.equal($("#finger-edit-glyph-rarity").val(), "standard");
    assert.equal($("#finger-edit-glyph-quality").val(), "1");
    assert.equal($("#finger-edit-glyph-level").val(), "20");
    assert.equal($("#finger-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#finger-edit-glyph-ilvl").html(), "0");
    assert.equal($("#finger-edit-signet-id").val(), "none");
    assert.equal($("#finger-edit-signet-rarity").val(), "standard");
    assert.equal($("#finger-edit-signet-level").val(), "20");
    assert.equal($("#finger-edit-signet-ilvl").html(), "0");
    assert.equal($("#finger-edit-signet-description").html(), "");
    assert.equal($("#finger-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#neck-edit-ilvl").html(), "0");
    assert.equal($("#neck-edit-equipment-id").val(), "none");
    assert.equal($("#neck-edit-equipment-rarity").val(), "standard");
    assert.equal($("#neck-edit-equipment-quality").val(), "1");
    assert.equal($("#neck-edit-equipment-level").val(), "20");
    assert.equal($("#neck-edit-equipment-stat-value").html(), "0");
    assert.equal($("#neck-edit-equipment-ilvl").html(), "0");
    assert.equal($("#neck-edit-glyph-id").val(), "none");
    assert.equal($("#neck-edit-glyph-rarity").val(), "standard");
    assert.equal($("#neck-edit-glyph-quality").val(), "1");
    assert.equal($("#neck-edit-glyph-level").val(), "20");
    assert.equal($("#neck-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#neck-edit-glyph-ilvl").html(), "0");
    assert.equal($("#neck-edit-signet-id").val(), "none");
    assert.equal($("#neck-edit-signet-rarity").val(), "standard");
    assert.equal($("#neck-edit-signet-level").val(), "20");
    assert.equal($("#neck-edit-signet-ilvl").html(), "0");
    assert.equal($("#neck-edit-signet-description").html(), "");
    assert.equal($("#neck-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#wrist-edit-ilvl").html(), "0");
    assert.equal($("#wrist-edit-equipment-id").val(), "none");
    assert.equal($("#wrist-edit-equipment-rarity").val(), "standard");
    assert.equal($("#wrist-edit-equipment-quality").val(), "1");
    assert.equal($("#wrist-edit-equipment-level").val(), "20");
    assert.equal($("#wrist-edit-equipment-stat-value").html(), "0");
    assert.equal($("#wrist-edit-equipment-ilvl").html(), "0");
    assert.equal($("#wrist-edit-glyph-id").val(), "none");
    assert.equal($("#wrist-edit-glyph-rarity").val(), "standard");
    assert.equal($("#wrist-edit-glyph-quality").val(), "1");
    assert.equal($("#wrist-edit-glyph-level").val(), "20");
    assert.equal($("#wrist-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#wrist-edit-glyph-ilvl").html(), "0");
    assert.equal($("#wrist-edit-signet-id").val(), "none");
    assert.equal($("#wrist-edit-signet-rarity").val(), "standard");
    assert.equal($("#wrist-edit-signet-level").val(), "20");
    assert.equal($("#wrist-edit-signet-ilvl").html(), "0");
    assert.equal($("#wrist-edit-signet-description").html(), "");
    assert.equal($("#wrist-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#luck-edit-ilvl").html(), "0");
    assert.equal($("#luck-edit-equipment-id").val(), "none");
    assert.equal($("#luck-edit-equipment-rarity").val(), "standard");
    assert.equal($("#luck-edit-equipment-quality").val(), "1");
    assert.equal($("#luck-edit-equipment-level").val(), "20");
    assert.equal($("#luck-edit-equipment-stat-value").html(), "0");
    assert.equal($("#luck-edit-equipment-ilvl").html(), "0");
    assert.equal($("#luck-edit-glyph-id").val(), "none");
    assert.equal($("#luck-edit-glyph-rarity").val(), "standard");
    assert.equal($("#luck-edit-glyph-quality").val(), "1");
    assert.equal($("#luck-edit-glyph-level").val(), "20");
    assert.equal($("#luck-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#luck-edit-glyph-ilvl").html(), "0");
    assert.equal($("#luck-edit-signet-id").val(), "none");
    assert.equal($("#luck-edit-signet-rarity").val(), "standard");
    assert.equal($("#luck-edit-signet-level").val(), "20");
    assert.equal($("#luck-edit-signet-ilvl").html(), "0");
    assert.equal($("#luck-edit-signet-description").html(), "");
    assert.equal($("#luck-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#waist-edit-ilvl").html(), "0");
    assert.equal($("#waist-edit-equipment-id").val(), "none");
    assert.equal($("#waist-edit-equipment-rarity").val(), "standard");
    assert.equal($("#waist-edit-equipment-quality").val(), "1");
    assert.equal($("#waist-edit-equipment-level").val(), "20");
    assert.equal($("#waist-edit-equipment-stat-value").html(), "0");
    assert.equal($("#waist-edit-equipment-ilvl").html(), "0");
    assert.equal($("#waist-edit-glyph-id").val(), "none");
    assert.equal($("#waist-edit-glyph-rarity").val(), "standard");
    assert.equal($("#waist-edit-glyph-quality").val(), "1");
    assert.equal($("#waist-edit-glyph-level").val(), "20");
    assert.equal($("#waist-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#waist-edit-glyph-ilvl").html(), "0");
    assert.equal($("#waist-edit-signet-id").val(), "none");
    assert.equal($("#waist-edit-signet-rarity").val(), "standard");
    assert.equal($("#waist-edit-signet-level").val(), "20");
    assert.equal($("#waist-edit-signet-ilvl").html(), "0");
    assert.equal($("#waist-edit-signet-description").html(), "");
    assert.equal($("#waist-edit-edit-signet-bonus").val(), undefined);

    assert.equal($("#occult-edit-ilvl").html(), "0");
    assert.equal($("#occult-edit-equipment-id").val(), "none");
    assert.equal($("#occult-edit-equipment-rarity").val(), "standard");
    assert.equal($("#occult-edit-equipment-quality").val(), "1");
    assert.equal($("#occult-edit-equipment-level").val(), "20");
    assert.equal($("#occult-edit-equipment-stat-value").html(), "0");
    assert.equal($("#occult-edit-equipment-ilvl").html(), "0");
    assert.equal($("#occult-edit-glyph-id").val(), "none");
    assert.equal($("#occult-edit-glyph-rarity").val(), "standard");
    assert.equal($("#occult-edit-glyph-quality").val(), "1");
    assert.equal($("#occult-edit-glyph-level").val(), "20");
    assert.equal($("#occult-edit-glyph-stat-rating").html(), "0");
    assert.equal($("#occult-edit-glyph-ilvl").html(), "0");
    assert.equal($("#occult-edit-signet-id").val(), "none");
    assert.equal($("#occult-edit-signet-rarity").val(), "standard");
    assert.equal($("#occult-edit-signet-level").val(), "20");
    assert.equal($("#occult-edit-signet-ilvl").html(), "0");
    assert.equal($("#occult-edit-signet-description").html(), "");
    assert.equal($("#occult-edit-edit-signet-bonus").val(), undefined);
});
