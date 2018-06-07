/**
 * Creates tank build
 * -> equivalent to : weapon=3,1,1,30,2,2,1,1,0,0,0&weapon2=3,2,3,30,2,2,1,1,0,0,0&head=3,1,1,30,4,1,3,1,1,0,20&finger=3,1,1,30,3,5,2,20,1,0,1&neck=3,1,1,30,3,5,2,20,1,0,1&wrist=3,1,1,1,3,5,2,20,1,0,20&luck=3,1,1,1,3,4,2,20,1,0,20&waist=3,1,1,30,3,4,2,20,1,0,20&occult=3,1,1,1,3,4,2,20,1,0,20
 */
function createTankBuild() {
    $('#weapon-wtype').val('blade');
    $('#weapon-rarity').val('epic');
    $('#weapon-rarity').change(); //required because triggers update of #weapon-level
    $('#weapon-quality').val('mkI');
    $('#weapon-level').val('30');
    $('#weapon-level').change(); //required because triggers update of #weapon-power-rating
    $('#weapon-glyph').val('critical-rating');
    $('#weapon-glyph-rarity').val('superior');
    $('#weapon-glyph-quality').val('crude');
    $('#weapon-glyph-level').val('1');
    $('#weapon-glyph').change(); //required because triggers update of #weapon-glyph-rating
    $('#weapon-signet').val('none');//TODO/TEST add a true suffixe

    $('#weapon2-wtype').val('hammer');
    $('#weapon2-rarity').val('epic');
    $('#weapon2-rarity').change(); //required because triggers update of #weapon2-level
    $('#weapon2-quality').val('mkIII');
    $('#weapon2-level').val('30');
    $('#weapon2-level').change(); //required because triggers update of #weapon2-power-rating
    $('#weapon2-glyph').val('critical-rating');
    $('#weapon2-glyph-rarity').val('superior');
    $('#weapon2-glyph-quality').val('crude');
    $('#weapon2-glyph-level').val('1');
    $('#weapon2-glyph').change(); //required because triggers update of #weapon2-glyph-rating
    $('#weapon2-signet').val('none');//TODO/TEST add a true suffixe

    $('#head-itemId').val('1');
    $('#head-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#head-rarity').val('epic');
    $('#head-rarity').change(); //required because triggers update of #head-level
    $('#head-quality').val('faded');
    $('#head-level').val('30');
    $('#head-level').change(); //required because triggers update of #head-power-rating
    $('#head-glyph').val('hit-rating');
    $('#head-glyph-rarity').val('mythic');
    $('#head-glyph-quality').val('intricate');
    $('#head-glyph-level').val('1');
    $('#head-glyph').change(); //required because triggers update of #head-glyph-rating
    $('#head-signet').val('none');//TODO/TEST add a true signet
    $('#head-signet-rarity').val('standard');
    $('#head-signet-level').val('20');

    $('#finger-itemId').val('1');
    $('#finger-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#finger-rarity').val('epic');
    $('#finger-rarity').change(); //required because triggers update of #finger-level
    $('#finger-quality').val('faded');
    $('#finger-level').val('30');
    $('#finger-level').change(); //required because triggers update of #finger-power-rating
    $('#finger-glyph').val('defense-rating');
    $('#finger-glyph-rarity').val('epic');
    $('#finger-glyph-quality').val('simple');
    $('#finger-glyph-level').val('20');
    $('#finger-glyph').change(); //required because triggers update of #finger-glyph-rating
    $('#finger-signet').val('none');//TODO/TEST add a true signet
    $('#finger-signet-rarity').val('standard');
    $('#finger-signet-level').val('20');

    $('#neck-itemId').val('1');
    $('#neck-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#neck-rarity').val('epic');
    $('#neck-rarity').change(); //required because triggers update of #neck-level
    $('#neck-quality').val('faded');
    $('#neck-level').val('30');
    $('#neck-level').change(); //required because triggers update of #neck-power-rating
    $('#neck-glyph').val('defense-rating');
    $('#neck-glyph-rarity').val('epic');
    $('#neck-glyph-quality').val('simple');
    $('#neck-glyph-level').val('20');
    $('#neck-glyph').change(); //required because triggers update of #neck-glyph-rating
    $('#neck-signet').val('none');//TODO/TEST add a true signet
    $('#neck-signet-rarity').val('standard');
    $('#neck-signet-level').val('20');

    $('#wrist-itemId').val('1');
    $('#wrist-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#wrist-rarity').val('epic');
    $('#wrist-rarity').change(); //required because triggers update of #wrist-level
    $('#wrist-quality').val('faded');
    $('#wrist-level').val('1');
    $('#wrist-level').change(); //required because triggers update of #wrist-power-rating
    $('#wrist-glyph').val('defense-rating');
    $('#wrist-glyph-rarity').val('epic');
    $('#wrist-glyph-quality').val('simple');
    $('#wrist-glyph-level').val('20');
    $('#wrist-glyph').change(); //required because triggers update of #wrist-glyph-rating
    $('#wrist-signet').val('none');//TODO/TEST add a true signet
    $('#wrist-signet-rarity').val('standard');
    $('#wrist-signet-level').val('20');

    $('#luck-itemId').val('1');
    $('#luck-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#luck-rarity').val('epic');
    $('#luck-rarity').change(); //required because triggers update of #luck-level
    $('#luck-quality').val('faded');
    $('#luck-level').val('1');
    $('#luck-level').change(); //required because triggers update of #luck-power-rating
    $('#luck-glyph').val('evade-rating');
    $('#luck-glyph-rarity').val('epic');
    $('#luck-glyph-quality').val('simple');
    $('#luck-glyph-level').val('20');
    $('#luck-glyph').change(); //required because triggers update of #luck-glyph-rating
    $('#luck-signet').val('none');//TODO/TEST add a true signet
    $('#luck-signet-rarity').val('standard');
    $('#luck-signet-level').val('20');

    $('#waist-itemId').val('1');
    $('#waist-itemId').change(); //TODO/TEST indentify if change needed and when it should be triggered
    $('#waist-rarity').val('epic');
    $('#waist-rarity').change(); //required because triggers update of #waist-level
    $('#waist-quality').val('faded');
    $('#waist-level').val('30');
    $('#waist-level').change(); //required because triggers update of #waist-power-rating
    $('#waist-glyph').val('evade-rating');
    $('#waist-glyph-rarity').val('epic');
    $('#waist-glyph-quality').val('simple');
    $('#waist-glyph-level').val('20');
    $('#waist-glyph').change(); //required because triggers update of #waist-glyph-rating
    $('#waist-signet').val('none');//TODO/TEST add a true signet
    $('#waist-signet-rarity').val('standard');
    $('#waist-signet-level').val('20');

    $('#occult-itemId').val('1');
    $('#occult-itemId').change(); //TODO : indentify if change needed and when it should be triggered
    $('#occult-rarity').val('epic');
    $('#occult-rarity').change(); //required because triggers update of #occult-level
    $('#occult-quality').val('faded');
    $('#occult-level').val('1');
    $('#occult-level').change(); //required because triggers update of #occult-power-rating
    $('#occult-glyph').val('evade-rating');
    $('#occult-glyph-rarity').val('epic');
    $('#occult-glyph-quality').val('simple');
    $('#occult-glyph-level').val('20');
    $('#occult-glyph').change(); //required because triggers update of #occult-glyph-rating
    $('#occult-signet').val('none');//TODO/TEST add a true signet
    $('#occult-signet-rarity').val('standard');
    $('#occult-signet-level').val('20');
}

//TODO/TEST tswcalc test. swlcalc equivalent needed
// function createDPSNYRaidBuild() {
//     $('#weapon-rarity').val('standard');
//     $('#weapon-glyph-rarity').val('standard');
//     $('#weapon-primary-glyph').val('hit-rating');
//     $('#weapon-secondary-glyph').val('none');
//     $('#weapon-primary-glyph-dist-btn4').trigger('click');
//     $('#weapon-secondary-glyph-dist-btn0').trigger('click');
//     $('#weapon-signet-rarity').val('superior');
//     $('#weapon-pick-signet').val('5');
//
//     $('#head-itemId').val('82');
//     $('#head-itemId').change();
//     $('#head-glyph-rarity').val('standard');
//     $('#head-primary-glyph').val('hit-rating');
//     $('#head-secondary-glyph').val('none');
//     $('#head-primary-glyph-dist-btn4').trigger('click');
//     $('#head-secondary-glyph-dist-btn0').trigger('click');
//
//     $('#ring-itemId').val('83');
//     $('#ring-itemId').change();
//     $('#ring-glyph-rarity').val('standard');
//     $('#ring-primary-glyph').val('hit-rating');
//     $('#ring-secondary-glyph').val('none');
//     $('#ring-primary-glyph-dist-btn4').trigger('click');
//     $('#ring-secondary-glyph-dist-btn0').trigger('click');
//
//     $('#neck-itemId').val('84');
//     $('#neck-itemId').change();
//     $('#neck-glyph-rarity').val('standard');
//     $('#neck-primary-glyph').val('critical-rating');
//     $('#neck-secondary-glyph').val('none');
//     $('#neck-primary-glyph-dist-btn4').trigger('click');
//     $('#neck-secondary-glyph-dist-btn0').trigger('click');
//
//     $('#wrist-itemId').val('85');
//     $('#wrist-itemId').change();
//     $('#wrist-glyph-rarity').val('standard');
//     $('#wrist-primary-glyph').val('defense-rating');
//     $('#wrist-secondary-glyph').val('none');
//     $('#wrist-primary-glyph-dist-btn4').trigger('click');
//     $('#wrist-secondary-glyph-dist-btn0').trigger('click');
//
//     $('#luck-rarity').val('standard');
//     $('#luck-itemId').val('3');
//     $('#luck-itemId').change();
//     $('#luck-glyph-rarity').val('standard');
//     $('#luck-primary-glyph').val('critical-power');
//     $('#luck-secondary-glyph').val('none');
//     $('#luck-primary-glyph-dist-btn4').trigger('click');
//     $('#luck-secondary-glyph-dist-btn0').trigger('click');
//     $('#luck-signet-rarity').val('epic');
//     $('#luck-pick-signet').val('39');
//
//     $('#waist-itemId').val('87');
//     $('#waist-itemId').change();
//     $('#waist-glyph-rarity').val('standard');
//     $('#waist-primary-glyph').val('critical-power');
//     $('#waist-secondary-glyph').val('none');
//     $('#waist-primary-glyph-dist-btn4').trigger('click');
//     $('#waist-secondary-glyph-dist-btn0').trigger('click');
//
//     $('#occult-rarity').val('standard');
//     $('#occult-itemId').val('3');
//     $('#occult-itemId').change();
//     $('#occult-glyph-rarity').val('standard');
//     $('#occult-primary-glyph').val('hit-rating');
//     $('#occult-secondary-glyph').val('none');
//     $('#occult-primary-glyph-dist-btn4').trigger('click');
//     $('#occult-secondary-glyph-dist-btn0').trigger('click');
//     $('#occult-signet-rarity').val('epic');
//     $('#occult-pick-signet').val('41');
// }
