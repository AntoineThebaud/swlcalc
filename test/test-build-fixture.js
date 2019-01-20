/**
 * Creates tank build
 * -> equivalent to : weapon=3,1,1,30,2,2,1,1,0,6,0&weapon2=3,2,3,30,2,2,1,1,0,2,0&head=3,1,1,30,4,1,3,1,2,20,15&finger=3,1,1,30,3,5,2,20,1,10,9&neck=3,1,1,30,3,5,2,20,2,10,3&wrist=3,1,1,1,3,5,2,20,1,1,14&luck=3,1,1,1,3,4,2,20,3,8,6&waist=3,1,1,30,3,4,2,20,2,3,11&occult=3,1,1,1,3,4,2,20,3,4,18
 */
function createTankBuild() {
    $('#weapon-equipment-id').val('1');
    $('#weapon-equipment-rarity').val('epic');
    $('#weapon-equipment-rarity').change(); //required because triggers update of #weapon-level
    $('#weapon-equipment-quality').val('1');
    $('#weapon-equipment-level').val('30');
    $('#weapon-equipment-level').change(); //required because triggers update of #weapon-power-rating
    $('#weapon-glyph-id').val('critical-rating');
    $('#weapon-glyph-rarity').val('superior');
    $('#weapon-glyph-quality').val('1');
    $('#weapon-glyph-level').val('1');
    $('#weapon-glyph-id').change(); //required because triggers update of #weapon-glyph-rating
    $('#weapon-signet-id').val('6');
    $('#weapon-signet-id').change(); //required because triggers update of #weapon-signet-description

    $('#weapon2-equipment-id').val('2');
    $('#weapon2-equipment-rarity').val('epic');
    $('#weapon2-equipment-rarity').change(); //required because triggers update of #weapon2-level
    $('#weapon2-equipment-quality').val('3');
    $('#weapon2-equipment-level').val('30');
    $('#weapon2-equipment-level').change(); //required because triggers update of #weapon2-power-rating
    $('#weapon2-glyph-id').val('critical-rating');
    $('#weapon2-glyph-rarity').val('superior');
    $('#weapon2-glyph-quality').val('1');
    $('#weapon2-glyph-level').val('1');
    $('#weapon2-glyph-id').change(); //required because triggers update of #weapon2-glyph-rating
    $('#weapon2-signet-id').val('2');
    $('#weapon2-signet-id').change(); //required because triggers update of #weapon2-signet-description

    $('#head-equipment-id').val('1');
    $('#head-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#head-equipment-rarity').val('epic');
    $('#head-equipment-rarity').change(); //required because triggers update of #head-level
    $('#head-equipment-quality').val('1');
    $('#head-equipment-level').val('30');
    $('#head-equipment-level').change(); //required because triggers update of #head-power-rating
    $('#head-glyph-id').val('hit-rating');
    $('#head-glyph-rarity').val('mythic');
    $('#head-glyph-quality').val('3');
    $('#head-glyph-level').val('1');
    $('#head-glyph-id').change(); //required because triggers update of #head-glyph-rating
    $('#head-signet-id').val('20');
    $('#head-signet-rarity').val('superior');
    $('#head-signet-level').val('15');
    $('#head-signet-id').change(); //required because triggers update of #head-signet-description

    $('#finger-equipment-id').val('1');
    $('#finger-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#finger-equipment-rarity').val('epic');
    $('#finger-equipment-rarity').change(); //required because triggers update of #finger-level
    $('#finger-equipment-quality').val('1');
    $('#finger-equipment-level').val('30');
    $('#finger-equipment-level').change(); //required because triggers update of #finger-power-rating
    $('#finger-glyph-id').val('defense-rating');
    $('#finger-glyph-rarity').val('epic');
    $('#finger-glyph-quality').val('2');
    $('#finger-glyph-level').val('20');
    $('#finger-glyph-id').change(); //required because triggers update of #finger-glyph-rating
    $('#finger-signet-id').val('10');
    $('#finger-signet-rarity').val('standard');
    $('#finger-signet-level').val('9');
    $('#finger-signet-id').change(); //required because triggers update of #finger-signet-description

    $('#neck-equipment-id').val('1');
    $('#neck-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#neck-equipment-rarity').val('epic');
    $('#neck-equipment-rarity').change(); //required because triggers update of #neck-level
    $('#neck-equipment-quality').val('1');
    $('#neck-equipment-level').val('30');
    $('#neck-equipment-level').change(); //required because triggers update of #neck-power-rating
    $('#neck-glyph-id').val('defense-rating');
    $('#neck-glyph-rarity').val('epic');
    $('#neck-glyph-quality').val('2');
    $('#neck-glyph-level').val('20');
    $('#neck-glyph-id').change(); //required because triggers update of #neck-glyph-rating
    $('#neck-signet-id').val('10');
    $('#neck-signet-rarity').val('superior');
    $('#neck-signet-level').val('3');
    $('#neck-signet-id').change(); //required because triggers update of #neck-signet-description

    $('#wrist-equipment-id').val('1');
    $('#wrist-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#wrist-equipment-rarity').val('epic');
    $('#wrist-equipment-rarity').change(); //required because triggers update of #wrist-level
    $('#wrist-equipment-quality').val('1');
    $('#wrist-equipment-level').val('1');
    $('#wrist-equipment-level').change(); //required because triggers update of #wrist-power-rating
    $('#wrist-glyph-id').val('defense-rating');
    $('#wrist-glyph-rarity').val('epic');
    $('#wrist-glyph-quality').val('2');
    $('#wrist-glyph-level').val('20');
    $('#wrist-glyph-id').change(); //required because triggers update of #wrist-glyph-rating
    $('#wrist-signet-id').val('1');
    $('#wrist-signet-rarity').val('standard');
    $('#wrist-signet-level').val('14');
    $('#wrist-signet-id').change(); //required because triggers update of #wrist-signet-description

    $('#luck-equipment-id').val('1');
    $('#luck-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#luck-equipment-rarity').val('epic');
    $('#luck-equipment-rarity').change(); //required because triggers update of #luck-level
    $('#luck-equipment-quality').val('1');
    $('#luck-equipment-level').val('1');
    $('#luck-equipment-level').change(); //required because triggers update of #luck-power-rating
    $('#luck-glyph-id').val('evade-rating');
    $('#luck-glyph-rarity').val('epic');
    $('#luck-glyph-quality').val('2');
    $('#luck-glyph-level').val('20');
    $('#luck-glyph-id').change(); //required because triggers update of #luck-glyph-rating
    $('#luck-signet-id').val('8');
    $('#luck-signet-rarity').val('epic');
    $('#luck-signet-level').val('6');
    $('#luck-signet-id').change(); //required because triggers update of #luck-signet-description

    $('#waist-equipment-id').val('1');
    $('#waist-equipment-id').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#waist-equipment-rarity').val('epic');
    $('#waist-equipment-rarity').change(); //required because triggers update of #waist-level
    $('#waist-equipment-quality').val('1');
    $('#waist-equipment-level').val('30');
    $('#waist-equipment-level').change(); //required because triggers update of #waist-power-rating
    $('#waist-glyph-id').val('evade-rating');
    $('#waist-glyph-rarity').val('epic');
    $('#waist-glyph-quality').val('2');
    $('#waist-glyph-level').val('20');
    $('#waist-glyph-id').change(); //required because triggers update of #waist-glyph-rating
    $('#waist-signet-id').val('3');
    $('#waist-signet-rarity').val('superior');
    $('#waist-signet-level').val('11');
    $('#waist-signet-id').change(); //required because triggers update of #waist-signet-description

    $('#occult-equipment-id').val('1');
    $('#occult-equipment-id').change(); //TODO : indentify if change needed and when it should be triggered
    $('#occult-equipment-rarity').val('epic');
    $('#occult-equipment-rarity').change(); //required because triggers update of #occult-level
    $('#occult-equipment-quality').val('1');
    $('#occult-equipment-level').val('1');
    $('#occult-equipment-level').change(); //required because triggers update of #occult-power-rating
    $('#occult-glyph-id').val('evade-rating');
    $('#occult-glyph-rarity').val('epic');
    $('#occult-glyph-quality').val('2');
    $('#occult-glyph-level').val('20');
    $('#occult-glyph-id').change(); //required because triggers update of #occult-glyph-rating
    $('#occult-signet-id').val('4');
    $('#occult-signet-rarity').val('epic');
    $('#occult-signet-level').val('18');
    $('#occult-signet-id').change(); //required because triggers update of #occult-signet-description
}
