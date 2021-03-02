var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.SlotEdit = function SlotEdit(slotData) {
    var self   = this;
    this.id    = slotData.id;

    this.el = {
        div:                     $('#' + this.id + '-edit-div'),
        iLvl:                    $('#' + this.id + '-edit-ilvl'),
        equipmentId:             $('#' + this.id + '-edit-equipment-id'),
        equipmentRarity:         $('#' + this.id + '-edit-equipment-rarity'),
        equipmentQuality:        $('#' + this.id + '-edit-equipment-quality'),
        equipmentLevel:          $('#' + this.id + '-edit-equipment-level'),
        equipmentStatPowerValue: $('#' + this.id + '-edit-equipment-stat-power-value'),
        equipmentStatProtValue:  $('#' + this.id + '-edit-equipment-stat-prot-value'),
        equipmentILvl:           $('#' + this.id + '-edit-equipment-ilvl'),
        equipmentImgItem:        $('#' + this.id + '-edit-equipment-img-item'),
        equipmentImgRarity:      $('#' + this.id + '-edit-equipment-img-rarity'),
        equipmentImgQuality:     $('#' + this.id + '-edit-equipment-img-quality'),
        equipmentLabelLevel:     $('#' + this.id + '-edit-equipment-label-level'),
        equipmentDescription:    $('#' + this.id + '-edit-equipment-description'),
        glyphId:                 $('#' + this.id + '-edit-glyph-id'),
        glyphRarity:             $('#' + this.id + '-edit-glyph-rarity'),
        glyphQuality:            $('#' + this.id + '-edit-glyph-quality'),
        glyphLevel:              $('#' + this.id + '-edit-glyph-level'),
        glyphStatRating:         $('#' + this.id + '-edit-glyph-stat-rating'),
        glyphStatText:           $('#' + this.id + '-edit-glyph-stat-text'),
        glyphImgItem:            $('#' + this.id + '-edit-glyph-img-item'),
        glyphImgRarity:          $('#' + this.id + '-edit-glyph-img-rarity'),
        glyphImgQuality:         $('#' + this.id + '-edit-glyph-img-quality'),
        glyphLabelLevel:         $('#' + this.id + '-edit-glyph-label-level'),
        glyphILvl:               $('#' + this.id + '-edit-glyph-ilvl'),
        signetId:                $('#' + this.id + '-edit-signet-id'),
        signetRarity:            $('#' + this.id + '-edit-signet-rarity'),
        signetLevel:             $('#' + this.id + '-edit-signet-level'),
        signetImgItem:           $('#' + this.id + '-edit-signet-img-item'),
        signetImgRarity:         $('#' + this.id + '-edit-signet-img-rarity'),
        signetDescription:       $('#' + this.id + '-edit-signet-description'),
        signetLabelLevel:        $('#' + this.id + '-edit-signet-label-level'),
        signetILvl:              $('#' + this.id + '-edit-signet-ilvl')
    };

    /**************************************************************************
     * Accessors :
     * ---------------------------------------------------------------------- */

    /* GLOBAL : ------------------------------------------------------------- */

    /* #slot-edit-ilvl : */
    this.getILvl = function() {
        return this.el.iLvl.text();
    };
    this.setILvl = function(arg) {
        this.el.iLvl.text(arg).change();
    };

    /* EQUIPMENT : ---------------------------------------------------------- */

     /* #slot-edit-equipment-id : */
    this.getEquipmentId = function() {
        return this.el.equipmentId.val();
    };
    this.setEquipmentId = function(arg) {
        this.el.equipmentId.val(arg).change();
    };

    /* #slot-edit-equipment-rarity : */
    this.getEquipmentRarity = function() {
        return this.el.equipmentRarity.val();
    };
    this.setEquipmentRarity = function(arg) {
        this.el.equipmentRarity.val(arg).change();
    };

    /* #slot-edit-equipment-quality : */
    this.getEquipmentQuality = function() {
        return this.el.equipmentQuality.val();
    };
    this.setEquipmentQuality = function(arg) {
        this.el.equipmentQuality.val(arg).change();
    };

    /* #slot-edit-equipment-level : */
    this.getEquipmentLevel = function() {
        return this.el.equipmentLevel.val();
    };
    this.setEquipmentLevel = function(arg) {
        this.el.equipmentLevel.val(arg).change();
    };

    /* #slot-edit-equipment-level (min attribute) : */
    this.getEquipmentLevelMin = function() {
        return this.el.equipmentLevel.attr('min');
    };
    this.setEquipmentLevelMin = function(arg) {
        this.el.equipmentLevel.attr('min', arg).change();
    };

    /* #slot-edit-equipment-level (max attribute) : */
    this.getEquipmentLevelMax = function() {
        return this.el.equipmentLevel.attr('max');
    };
    this.setEquipmentLevelMax = function(arg) {
        this.el.equipmentLevel.attr('max', arg).change();
    };

    /* #slot-edit-equipment-stat-power-value : */
    this.getEquipmentStatPowerValue = function() {
        return this.el.equipmentStatPowerValue.text();
    };
    this.setEquipmentStatPowerValue = function(arg) {
        this.el.equipmentStatPowerValue.text(arg).change();
    };

    /* #slot-edit-equipment-stat-prot-value : */
    this.getEquipmentStatProtValue = function() {
        return this.el.equipmentStatProtValue.text();
    };
    this.setEquipmentStatProtValue = function(arg) {
        this.el.equipmentStatProtValue.text(arg).change();
    };

    /* #slot-edit-equipment-iLvl : */
    this.getEquipmentILvl = function() {
        return this.el.equipmentILvl.text();
    };
    this.setEquipmentILvl = function(arg) {
        this.el.equipmentILvl.text(arg).change();
    };

    /* #slot-edit-equipment-description : */
    this.getEquipmentDescription = function() {
        return this.el.equipmentDescription.html();
    };
    this.setEquipmentDescription = function(arg) {
        this.el.equipmentDescription.html(arg).change();
    };

    /* #slot-edit-equipment-bonusN object : */
    this.getEquipmentBonusN = function(index) {
        return $('#' + this.id + '-edit-equipment-bonus' + index).html();
    };
    this.setEquipmentBonusN = function(index, value) {
        $('#' + this.id + '-edit-equipment-bonus' + index).html(value).change();
    };

    /* #slot-edit-equipment-img-item : */
    this.getEquipmentImgItem = function() {
        return this.el.equipmentImgItem.attr('src');
    };
    this.setEquipmentImgItem = function(arg) {
        this.el.equipmentImgItem.attr('src', arg).change();
    };

    /* #slot-edit-equipment-img-rarity : */
    this.getEquipmentImgRarity = function() {
        return this.el.equipmentImgRarity.attr('src');
    };
    this.setEquipmentImgRarity = function(arg) {
        this.el.equipmentImgRarity.attr('src', arg).change();
    };

    /* #slot-edit-equipment-img-quality : */
    this.getEquipmentImgQuality = function() {
        return this.el.equipmentImgQuality.attr('src');
    };
    this.setEquipmentImgQuality = function(arg) {
        this.el.equipmentImgQuality.attr('src', arg).change();
    };

    /* #slot-edit-equipment-label-level : */
    this.getEquipmentLabelLevel = function() {
        return this.el.equipmentLabelLevel.text();
    };
    this.setEquipmentLabelLevel = function(arg) {
        this.el.equipmentLabelLevel.text(arg).change();
    };

    /* GLYPH : -------------------------------------------------------------- */

    /* #slot-edit-glyph : */
    this.getGlyphId = function() {
        return this.el.glyphId.val();
    };
    this.setGlyphId = function(arg) {
        this.el.glyphId.val(arg).change();
    };

    /* #slot-edit-glyph-rarity : */
    this.getGlyphRarity = function() {
        return this.el.glyphRarity.val();
    };
    this.setGlyphRarity = function(arg) {
        this.el.glyphRarity.val(arg).change();
    };

    /* #slot-edit-glyph-quality : */
    this.getGlyphQuality = function() {
        return this.el.glyphQuality.val();
    };
    this.setGlyphQuality = function(arg) {
        this.el.glyphQuality.val(arg).change();
    };

    /* #slot-edit-glyph-level : */
    this.getGlyphLevel = function() {
        return this.el.glyphLevel.val();
    };
    this.setGlyphLevel = function(arg) {
        this.el.glyphLevel.val(arg).change();
    };

    /* #slot-edit-glyph-level (min attribute) : */
    this.getGlyphLevelMin = function() {
        return this.el.glyphLevel.attr('min');
    };
    this.setGlyphLevelMin = function(arg) {
        this.el.glyphLevel.attr('min', arg).change();
    };

    /* #slot-edit-glyph-level (max attribute) : */
    this.getGlyphLevelMax = function() {
        return this.el.glyphLevel.attr('max');
    };
    this.setGlyphLevelMax = function(arg) {
        this.el.glyphLevel.attr('max', arg).change();
    };

    /* #slot-edit-glyph-stat-rating : */
    this.getGlyphStatRating = function() {
        return this.el.glyphStatRating.text();
    };
    this.setGlyphStatRating = function(arg) {
        this.el.glyphStatRating.text(arg).change();
    };

    /* #slot-edit-glyph-stat-text : */
    this.getGlyphStatText = function() {
        return this.el.glyphStatText.text();
    };
    this.setGlyphStatText = function() {
        this.el.glyphStatText.text(arguments[0]).change();
    };

    /* #slot-edit-glyph-iLvl : */
    this.getGlyphILvl = function() {
        return this.el.glyphILvl.text();
    };
    this.setGlyphILvl = function(arg) {
        this.el.glyphILvl.text(arg).change();
    };

    /* #slot-edit-glyph-img-item : */
    this.getGlyphImgItem = function() {
        return this.el.glyphImgItem.attr('src');
    };
    this.setGlyphImgItem = function(arg) {
        this.el.glyphImgItem.attr('src', arg).change();
    };

    /* #slot-edit-glyph-img-rarity : */
    this.getGlyphImgRarity = function() {
        return this.el.glyphImgRarity.attr('src');
    };
    this.setGlyphImgRarity = function(arg) {
        this.el.glyphImgRarity.attr('src', arg).change();
    };

    /* #slot-edit-glyph-img-quality : */
    this.getGlyphImgQuality = function() {
        return this.el.glyphImgQuality.attr('src');
    };
    this.setGlyphImgQuality = function(arg) {
        this.el.glyphImgQuality.attr('src', arg).change();
    };

    /* #slot-edit-glyph-label-level : */
    this.getGlyphLabelLevel = function() {
        return this.el.glyphLabelLevel.text();
    };
    this.setGlyphLabelLevel = function(arg) {
        this.el.glyphLabelLevel.text(arg).change();
    };

    /* SIGNET : ------------------------------------------------------------- */

    /* #slot-edit-signet : */
    this.getSignetId = function() {
        return this.el.signetId.val();
    };
    this.setSignetId = function(arg) {
        this.el.signetId.val(arg).change();
    };

    /* #slot-edit-signet-rarity : */
    this.getSignetRarity = function() {
        return this.el.signetRarity.val();
    };
    this.setSignetRarity = function(arg) {
        this.el.signetRarity.val(arg).change();
    };

    /* #slot-edit-signet-level : */
    this.getSignetLevel = function() {
        return this.el.signetLevel.val();
    };
    this.setSignetLevel = function(arg) {
        this.el.signetLevel.val(arg).change();
    };

    /* #slot-edit-signet-level (min attribute) : */
    this.getSignetLevelMin = function() {
        return this.el.signetLevel.attr('min');
    };
    this.setSignetLevelMin = function(arg) {
        this.el.signetLevel.attr('min', arg).change();
    };

    /* #slot-edit-signet-level (max attribute) : */
    this.getSignetLevelMax = function() {
        return this.el.signetLevel.attr('max');
    };
    this.setSignetLevelMax = function(arg) {
        this.el.signetLevel.attr('max', arg).change();
    };

    /* #slot-edit-signet-ilvl : */
    this.getSignetILvl = function() {
        return this.el.signetILvl.text();
    };
    this.setSignetILvl = function(arg) {
        this.el.signetILvl.text(arg).change();
    };

    /* #slot-edit-signet-description : */
    this.getSignetDescription = function() {
        return this.el.signetDescription.html();
    };
    this.setSignetDescription = function() {
        this.el.signetDescription.html(arguments[0]).change();
    };

    /* #slot-edit-signet-bonusN object :
     * (not accessible through like this.el.signetBonus1 because this element doesn't exist at application start) */
    this.getSignetBonusN = function(index) {
        return $('#' + this.id + '-edit-signet-bonus' + index).text();
    };
    this.setSignetBonusN = function(index, value) {
        $('#' + this.id + '-edit-signet-bonus' + index).text(value).change();
    };

    /* #slot-edit-signet-bonus-wrapper :
     * (not accessible through like this.el.signetBonusWrapper because this element doesn't exist at application start) */
    this.setSignetBonusWrapper = function(newClass) {
        $('#' + this.id + '-edit-signet-bonus-wrapper').attr('class', newClass);
    };

    /* #slot-edit-signet-img-item : */
    this.getSignetImgItem = function() {
        return this.el.signetImgItem.attr('src');
    };
    this.setSignetImgItem = function(arg) {
        this.el.signetImgItem.attr('src', arg).change();
    };

    /* #slot-edit-signet-img-rarity : */
    this.getSignetImgRarity = function() {
        return this.el.signetImgRarity.attr('src');
    };
    this.setSignetImgRarity = function(arg) {
        this.el.signetImgRarity.attr('src', arg).change();
    };

    /* #slot-edit-signet-label-level : */
    this.getSignetLabelLevel = function() {
        return this.el.signetLabelLevel.text();
    };
    this.setSignetLabelLevel = function(arg) {
        this.el.signetLabelLevel.text(arg).change();
    };
};
