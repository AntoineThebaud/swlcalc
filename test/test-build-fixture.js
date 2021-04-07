/**
 * Creates tank build
 * -> equivalent to : #weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,13,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18&agent1=2,25&agent2=42,50&agent3=0,25&aa=66,55,44
 */
function createTankBuild() {
    $("#weapon-edit-equipment-id").val("1");
    $("#weapon-edit-equipment-rarity").val("epic");
    $("#weapon-edit-equipment-rarity").change();
    $("#weapon-edit-equipment-quality").val("1");
    $("#weapon-edit-equipment-quality").change();
    $("#weapon-edit-equipment-level").val("30");
    $("#weapon-edit-equipment-level").change();
    $("#weapon-edit-glyph-id").val("critical-rating");
    $("#weapon-edit-glyph-rarity").val("superior");
    $("#weapon-edit-glyph-id").change();
    $("#weapon-edit-glyph-rarity").change();
    $("#weapon-edit-glyph-quality").val("1");
    $("#weapon-edit-glyph-quality").change();
    $("#weapon-edit-glyph-level").val("1");
    $("#weapon-edit-glyph-level").change();
    $("#weapon-edit-signet-id").val("6");
    $("#weapon-edit-signet-id").change();

    $("#weapon2-edit-equipment-id").val("2");
    $("#weapon2-edit-equipment-rarity").val("epic");
    $("#weapon2-edit-equipment-rarity").change();
    $("#weapon2-edit-equipment-quality").val("3");
    $("#weapon2-edit-equipment-quality").change();
    $("#weapon2-edit-equipment-level").val("30");
    $("#weapon2-edit-equipment-level").change();
    $("#weapon2-edit-glyph-id").val("critical-rating");
    $("#weapon2-edit-glyph-rarity").val("superior");
    $("#weapon2-edit-glyph-id").change();
    $("#weapon2-edit-glyph-rarity").change();
    $("#weapon2-edit-glyph-quality").val("1");
    $("#weapon2-edit-glyph-quality").change();
    $("#weapon2-edit-glyph-level").val("1");
    $("#weapon2-edit-glyph-level").change();
    $("#weapon2-edit-signet-id").val("2");
    $("#weapon2-edit-signet-id").change();

    $("#head-edit-equipment-id").val("1");
    $("#head-edit-equipment-id").change();
    $("#head-edit-equipment-rarity").val("epic");
    $("#head-edit-equipment-rarity").change();
    $("#head-edit-equipment-quality").val("1");
    $("#head-edit-equipment-quality").change();
    $("#head-edit-equipment-level").val("30");
    $("#head-edit-equipment-level").change();
    $("#head-edit-glyph-id").val("hit-rating");
    $("#head-edit-glyph-id").change();
    $("#head-edit-glyph-rarity").val("mythic");
    $("#head-edit-glyph-rarity").change();
    $("#head-edit-glyph-quality").val("3");
    $("#head-edit-glyph-quality").change();
    $("#head-edit-glyph-level").val("1");
    $("#head-edit-glyph-level").change();
    $("#head-edit-signet-id").val("20");
    $("#head-edit-signet-id").change();
    $("#head-edit-signet-rarity").val("superior");
    $("#head-edit-signet-rarity").change();
    $("#head-edit-signet-level").val("15");
    $("#head-edit-signet-level").change();

    $("#finger-edit-equipment-id").val("1");
    $("#finger-edit-equipment-id").change();
    $("#finger-edit-equipment-rarity").val("epic");
    $("#finger-edit-equipment-rarity").change();
    $("#finger-edit-equipment-quality").val("1");
    $("#finger-edit-equipment-quality").change();
    $("#finger-edit-equipment-level").val("30");
    $("#finger-edit-equipment-level").change();
    $("#finger-edit-glyph-id").val("defense-rating");
    $("#finger-edit-glyph-id").change();
    $("#finger-edit-glyph-rarity").val("epic");
    $("#finger-edit-glyph-rarity").change();
    $("#finger-edit-glyph-quality").val("2");
    $("#finger-edit-glyph-quality").change();
    $("#finger-edit-glyph-level").val("20");
    $("#finger-edit-glyph-level").change();
    $("#finger-edit-signet-id").val("10");
    $("#finger-edit-signet-id").change();
    $("#finger-edit-signet-rarity").val("standard");
    $("#finger-edit-signet-rarity").change();
    $("#finger-edit-signet-level").val("9");
    $("#finger-edit-signet-level").change();

    $("#neck-edit-equipment-id").val("1");
    $("#neck-edit-equipment-id").change();
    $("#neck-edit-equipment-rarity").val("epic");
    $("#neck-edit-equipment-rarity").change();
    $("#neck-edit-equipment-quality").val("1");
    $("#neck-edit-equipment-quality").change();
    $("#neck-edit-equipment-level").val("30");
    $("#neck-edit-equipment-level").change();
    $("#neck-edit-glyph-id").val("defense-rating");
    $("#neck-edit-glyph-id").change();
    $("#neck-edit-glyph-rarity").val("epic");
    $("#neck-edit-glyph-rarity").change();
    $("#neck-edit-glyph-quality").val("2");
    $("#neck-edit-glyph-quality").change();
    $("#neck-edit-glyph-level").val("20");
    $("#neck-edit-glyph-level").change();
    $("#neck-edit-signet-id").val("10");
    $("#neck-edit-signet-id").change();
    $("#neck-edit-signet-rarity").val("superior");
    $("#neck-edit-signet-rarity").change();
    $("#neck-edit-signet-level").val("3");
    $("#neck-edit-signet-level").change();

    $("#wrist-edit-equipment-id").val("1");
    $("#wrist-edit-equipment-id").change();
    $("#wrist-edit-equipment-rarity").val("epic");
    $("#wrist-edit-equipment-rarity").change();
    $("#wrist-edit-equipment-quality").val("1");
    $("#wrist-edit-equipment-quality").change();
    $("#wrist-edit-equipment-level").val("1");
    $("#wrist-edit-equipment-level").change();
    $("#wrist-edit-glyph-id").val("defense-rating");
    $("#wrist-edit-glyph-id").change();
    $("#wrist-edit-glyph-rarity").val("epic");
    $("#wrist-edit-glyph-rarity").change();
    $("#wrist-edit-glyph-quality").val("2");
    $("#wrist-edit-glyph-quality").change();
    $("#wrist-edit-glyph-level").val("20");
    $("#wrist-edit-glyph-level").change();
    $("#wrist-edit-signet-id").val("1");
    $("#wrist-edit-signet-id").change();
    $("#wrist-edit-signet-rarity").val("standard");
    $("#wrist-edit-signet-rarity").change();
    $("#wrist-edit-signet-level").val("14");
    $("#wrist-edit-signet-level").change();

    $("#luck-edit-equipment-id").val("1");
    $("#luck-edit-equipment-id").change();
    $("#luck-edit-equipment-rarity").val("epic");
    $("#luck-edit-equipment-rarity").change();
    $("#luck-edit-equipment-quality").val("1");
    $("#luck-edit-equipment-quality").change();
    $("#luck-edit-equipment-level").val("1");
    $("#luck-edit-equipment-level").change();
    $("#luck-edit-glyph-id").val("evade-rating");
    $("#luck-edit-glyph-id").change();
    $("#luck-edit-glyph-rarity").val("epic");
    $("#luck-edit-glyph-rarity").change();
    $("#luck-edit-glyph-quality").val("2");
    $("#luck-edit-glyph-quality").change();
    $("#luck-edit-glyph-level").val("20");
    $("#luck-edit-glyph-level").change();
    $("#luck-edit-signet-id").val("8");
    $("#luck-edit-signet-id").change();
    $("#luck-edit-signet-rarity").val("epic");
    $("#luck-edit-signet-rarity").change();
    $("#luck-edit-signet-level").val("6");
    $("#luck-edit-signet-level").change();

    $("#waist-edit-equipment-id").val("13");
    $("#waist-edit-equipment-id").change();
    $("#waist-edit-equipment-rarity").val("epic");
    $("#waist-edit-equipment-rarity").change();
    $("#waist-edit-equipment-quality").val("1");
    $("#waist-edit-equipment-quality").change();
    $("#waist-edit-equipment-level").val("30");
    $("#waist-edit-equipment-level").change();
    $("#waist-edit-glyph-id").val("evade-rating");
    $("#waist-edit-glyph-id").change();
    $("#waist-edit-glyph-rarity").val("epic");
    $("#waist-edit-glyph-rarity").change();
    $("#waist-edit-glyph-quality").val("2");
    $("#waist-edit-glyph-quality").change();
    $("#waist-edit-glyph-level").val("20");
    $("#waist-edit-glyph-level").change();
    $("#waist-edit-signet-id").val("3");
    $("#waist-edit-signet-id").change();
    $("#waist-edit-signet-rarity").val("superior");
    $("#waist-edit-signet-rarity").change();
    $("#waist-edit-signet-level").val("11");
    $("#waist-edit-signet-level").change();

    $("#occult-edit-equipment-id").val("1");
    $("#occult-edit-equipment-id").change();
    $("#occult-edit-equipment-rarity").val("epic");
    $("#occult-edit-equipment-rarity").change();
    $("#occult-edit-equipment-quality").val("1");
    $("#occult-edit-equipment-quality").change();
    $("#occult-edit-equipment-level").val("1");
    $("#occult-edit-equipment-level").change();
    $("#occult-edit-glyph-id").val("evade-rating");
    $("#occult-edit-glyph-id").change();
    $("#occult-edit-glyph-rarity").val("epic");
    $("#occult-edit-glyph-rarity").change();
    $("#occult-edit-glyph-quality").val("2");
    $("#occult-edit-glyph-quality").change();
    $("#occult-edit-glyph-level").val("20");
    $("#occult-edit-glyph-level").change();
    $("#occult-edit-signet-id").val("4");
    $("#occult-edit-signet-id").change();
    $("#occult-edit-signet-rarity").val("epic");
    $("#occult-edit-signet-rarity").change();
    $("#occult-edit-signet-level").val("18");
    $("#occult-edit-signet-level").change();

    $("#agent1-id").val("2");
    $("#agent1-id").change();
    $("#agent1-level").val("25");
    $("#agent1-level").change();

    $("#agent2-id").val("42");
    $("#agent2-id").change();
    $("#agent2-level").val("50");
    $("#agent2-level").change();

    $("#agent3-id").val("0");
    $("#agent3-id").change();
    $("#agent3-level").val("25");
    $("#agent3-level").change();

    $("#anima-allocation-damage-range").val("66");
    $("#anima-allocation-damage-range").change();

    $("#anima-allocation-healing-range").val("55");
    $("#anima-allocation-healing-range").change();

    $("#anima-allocation-survivability-range").val("44");
    $("#anima-allocation-survivability-range").change();
}

/**
 * Create a shuffled build
 * -> equivalent to : #weapon=5,119,3,19,2,2,1,20,0,2,0&weapon2=4,27,2,28,3,4,4,17,0,8,0&head=1,3,1,4,2,1,3,11,3,10,15&finger=5,2,3,69,4,2,1,11,3,1,7&neck=4,5,3,35,1,0,1,1,1,0,1&wrist=1,0,1,1,3,3,4,20,1,0,1&luck=1,0,1,1,1,0,1,1,5,8,20&waist=2,13,3,1,2,3,2,1,2,1,1&occult=5,4,4,70,1,0,1,1,3,2,13&agent1=15,50&agent2=37,25&agent3=10,50&aa=38,5,57&passives=1400,880,960,388,916,2997,488,477,634,2154,494,753,520,270,1950,7.2,4.2,28.8,16.8
 */
function createShuffledBuild() {
    $("#weapon-edit-equipment-id").val("119").change();
    $("#weapon-edit-equipment-rarity").val("legendary").change();
    $("#weapon-edit-equipment-quality").val("3").change();
    $("#weapon-edit-equipment-level").val("19").change();
    $("#weapon-edit-glyph-id").val("critical-rating").change();
    $("#weapon-edit-glyph-rarity").val("superior").change();
    $("#weapon-edit-glyph-quality").val("1").change();
    $("#weapon-edit-glyph-level").val("20").change();
    $("#weapon-edit-signet-id").val("2").change();

    $("#weapon2-edit-equipment-id").val("27").change();
    $("#weapon2-edit-equipment-rarity").val("mythic").change();
    $("#weapon2-edit-equipment-quality").val("2").change();
    $("#weapon2-edit-equipment-level").val("28").change();
    $("#weapon2-edit-glyph-id").val("evade-rating").change();
    $("#weapon2-edit-glyph-rarity").val("epic").change();
    $("#weapon2-edit-glyph-quality").val("4").change();
    $("#weapon2-edit-glyph-level").val("17").change();
    $("#weapon2-edit-signet-id").val("8").change();

    $("#head-edit-equipment-id").val("3").change();
    $("#head-edit-equipment-rarity").val("standard").change();
    $("#head-edit-equipment-quality").val("1").change();
    $("#head-edit-equipment-level").val("4").change();
    $("#head-edit-glyph-id").val("hit-rating").change();
    $("#head-edit-glyph-rarity").val("superior").change();
    $("#head-edit-glyph-quality").val("3").change();
    $("#head-edit-glyph-level").val("11").change();
    $("#head-edit-signet-id").val("10").change();
    $("#head-edit-signet-rarity").val("epic").change();
    $("#head-edit-signet-level").val("15").change();

    $("#finger-edit-equipment-id").val("2").change();
    $("#finger-edit-equipment-rarity").val("legendary").change();
    $("#finger-edit-equipment-quality").val("3").change();
    $("#finger-edit-equipment-level").val("69").change();
    $("#finger-edit-glyph-id").val("critical-rating").change();
    $("#finger-edit-glyph-rarity").val("mythic").change();
    $("#finger-edit-glyph-quality").val("1").change();
    $("#finger-edit-glyph-level").val("11").change();
    $("#finger-edit-signet-id").val("1").change();
    $("#finger-edit-signet-rarity").val("epic").change();
    $("#finger-edit-signet-level").val("7").change();

    $("#neck-edit-equipment-id").val("5").change();
    $("#neck-edit-equipment-rarity").val("mythic").change();
    $("#neck-edit-equipment-quality").val("3").change();
    $("#neck-edit-equipment-level").val("35").change();

    $("#wrist-edit-glyph-id").val("critical-power").change();
    $("#wrist-edit-glyph-rarity").val("epic").change();
    $("#wrist-edit-glyph-quality").val("4").change();
    $("#wrist-edit-glyph-level").val("20").change();

    $("#luck-edit-signet-id").val("8").change();
    $("#luck-edit-signet-rarity").val("legendary").change();
    $("#luck-edit-signet-level").val("20").change();

    $("#waist-edit-equipment-id").val("13").change();
    $("#waist-edit-equipment-rarity").val("superior").change();
    $("#waist-edit-equipment-quality").val("3").change();
    $("#waist-edit-equipment-level").val("1").change();
    $("#waist-edit-glyph-id").val("critical-power").change();
    $("#waist-edit-glyph-rarity").val("superior").change();
    $("#waist-edit-glyph-quality").val("2").change();
    $("#waist-edit-glyph-level").val("1").change();
    $("#waist-edit-signet-id").val("1").change();
    $("#waist-edit-signet-rarity").val("superior").change();
    $("#waist-edit-signet-level").val("1").change();

    $("#occult-edit-equipment-id").val("4").change();
    $("#occult-edit-equipment-rarity").val("legendary").change();
    $("#occult-edit-equipment-quality").val("4").change();
    $("#occult-edit-equipment-level").val("70").change();
    $("#occult-edit-signet-id").val("2").change();
    $("#occult-edit-signet-rarity").val("epic").change();
    $("#occult-edit-signet-level").val("13").change();

    $("#agent1-id").val("15").change();
    $("#agent1-level").val("50").change();

    $("#agent2-id").val("37").change();
    $("#agent2-level").val("25").change();

    $("#agent3-id").val("10").change();
    $("#agent3-level").val("50").change();

    $("#anima-allocation-damage-range").val("38").change();
    $("#anima-allocation-healing-range").val("5").change();
    $("#anima-allocation-survivability-range").val("57").change();

    $('#passive-attack-rating-base-slider').val("1400").change();
    $('#passive-heal-rating-base-slider').val("880").change();
    $('#passive-hit-points-base-slider').val("960").change();
    $('#passive-attack-rating-passive-skills-slider').val("388").change();
    $('#passive-heal-rating-passive-skills-slider').val("916").change();
    $('#passive-hit-points-passive-skills-slider').val("2997").change();
    $('#passive-critical-rating-passive-skills-slider').val("488").change();
    $('#passive-critical-power-passive-skills-slider').val("477").change();
    $('#passive-hit-rating-passive-skills-slider').val("634").change();
    $('#passive-protection-passive-skills-slider').val("2154").change();
    $('#passive-defense-rating-passive-skills-slider').val("494").change();
    $('#passive-evade-rating-passive-skills-slider').val("753").change();
    $('#passive-attack-rating-capstones-slider').val("520").change();
    $('#passive-heal-rating-capstones-slider').val("270").change();
    $('#passive-hit-points-capstones-slider').val("1950").change();
    $('#passive-critical-chance-expertise-slider-weapon1').val("7.2").change();
    $('#passive-critical-chance-expertise-slider-weapon2').val("4.2").change();
    $('#passive-critical-power-percentage-expertise-slider-weapon1').val("28.8").change();
    $('#passive-critical-power-percentage-expertise-slider-weapon2').val("16.8").change();
}
