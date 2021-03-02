var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.SlotRecap = function SlotRecap(slotData) {
    var self   = this;
    this.id    = slotData.id;
    this.kind  = slotData.kind;
    this.group = slotData.group;

    this.el = {
        section:                     $('#' + this.id + '-recap-section'),
        div:                         $('#' + this.id + '-recap-div'),
        editBtn:                     $('#' + this.id + '-recap-editbtn'),
        editBtnImg:                  $('#' + this.id + '-recap-editbtn-img'),
        weaponActive:                $('#' + this.id + '-recap-active'),
        iLvl:                        $('#' + this.id + '-recap-ilvl'),
        equipmentEmpty:              $('#' + this.id + '-recap-equipment-empty'),
        equipmentTitleSection:       $('#' + this.id + '-recap-equipment-title-section'),
        equipmentTitle:              $('#' + this.id + '-recap-equipment-title'),
        equipmentSubtitleSection:    $('#' + this.id + '-recap-equipment-subtitle-section'),
        equipmentItem:               $('#' + this.id + '-recap-equipment-item'),
        equipmentRarity:             $('#' + this.id + '-recap-equipment-rarity'),
        equipmentQuality:            $('#' + this.id + '-recap-equipment-quality'),
        equipmentLevel:              $('#' + this.id + '-recap-equipment-level'),
        equipmentStatSection:        $('#' + this.id + '-recap-equipment-stat-section'),
        equipmentStatPowerValue:     $('#' + this.id + '-recap-equipment-stat-power-value'),
        equipmentStatHPSection:      $('#' + this.id + '-recap-equipment-stat-hp-section'),
        equipmentStatARSection:      $('#' + this.id + '-recap-equipment-stat-ar-section'),
        equipmentStatHRSection:      $('#' + this.id + '-recap-equipment-stat-hr-section'),
        equipmentStatProtSection:    $('#' + this.id + '-recap-equipment-stat-prot-section'),
        equipmentStatHPValue:        $('#' + this.id + '-recap-equipment-stat-hp-value'),
        equipmentStatARValue:        $('#' + this.id + '-recap-equipment-stat-ar-value'),
        equipmentStatHRValue:        $('#' + this.id + '-recap-equipment-stat-hr-value'),
        equipmentStatProtValue:      $('#' + this.id + '-recap-equipment-stat-prot-value'),
        equipmentImgSection:         $('#' + this.id + '-recap-equipment-img-section'),
        equipmentImgItem:            $('#' + this.id + '-recap-equipment-img-item'),
        equipmentImgRarity:          $('#' + this.id + '-recap-equipment-img-rarity'),
        equipmentImgQuality:         $('#' + this.id + '-recap-equipment-img-quality'),
        equipmentDescription:        $('#' + this.id + '-recap-equipment-description'),
        equipmentDescriptionSection: $('#' + this.id + '-recap-equipment-description-section'),
        equipmentLabelLevel:         $('#' + this.id + '-recap-equipment-label-level'),
        glyphSection:                $('#' + this.id + '-recap-glyph-section'),
        glyphEmpty:                  $('#' + this.id + '-recap-glyph-empty'),
        glyphTitle:                  $('#' + this.id + '-recap-glyph-title'),
        glyphItem:                   $('#' + this.id + '-recap-glyph-item'),
        glyphRarity:                 $('#' + this.id + '-recap-glyph-rarity'),
        glyphQuality:                $('#' + this.id + '-recap-glyph-quality'),
        glyphLevel:                  $('#' + this.id + '-recap-glyph-level'),
        glyphStatRating:             $('#' + this.id + '-recap-glyph-stat-rating'),
        glyphStatText:               $('#' + this.id + '-recap-glyph-stat-text'),
        signetSection:               $('#' + this.id + '-recap-signet-section'),
        signetEmpty:                 $('#' + this.id + '-recap-signet-empty'),
        signetTitle:                 $('#' + this.id + '-recap-signet-title'),
        signetItem:                  $('#' + this.id + '-recap-signet-item'),
        signetRarity:                $('#' + this.id + '-recap-signet-rarity'),
        signetLevel:                 $('#' + this.id + '-recap-signet-level'),
        signetDescription:           $('#' + this.id + '-recap-signet-description'),
        affix:                       $('#' + this.id + '-recap-affix'),
        affixQuality:                $('#' + this.id + '-recap-affix-quality')
    };

    /**************************************************************************
     * Accessors :
     * ---------------------------------------------------------------------- */

    /* GLOBAL : ------------------------------------------------------------- */

    /* #slot-recap-ilvl : */
    this.getILvl = function() {
        return this.el.iLvl.text();
    };
    this.setILvl = function(val) {
        this.el.iLvl.text(val);
    };

    /* EQUIPMENT : ---------------------------------------------------------- */

    /* #slot-recap-equipment-item : */
    this.getEquipmentItem = function() {
        return this.el.equipmentItem.text();
    };
    this.setEquipmentItem = function(val) {
        this.el.equipmentItem.text(val);
        // recap : hide whole section if slot is empty
        if (val == 'Empty') {
            this.el.equipmentTitleSection.hide();
            this.el.equipmentSubtitleSection.hide();
            this.el.equipmentStatSection.hide();
            this.el.equipmentEmpty.show();
        } else if (this.el.equipmentTitleSection.is(":hidden")) {
            this.el.equipmentTitleSection.show();
            this.el.equipmentSubtitleSection.show();
            this.el.equipmentStatSection.show();
            this.el.equipmentEmpty.hide();
        }
    };

    /* #slot-recap-equipment-rarity : */
    this.getEquipmentRarity = function() {
        return this.el.equipmentRarity.text();
    };
    this.setEquipmentRarity = function(val) {
        this.el.equipmentRarity.text(val);
    };

    /* #slot-recap-equipment-quality : */
    this.getEquipmentQuality = function() {
        return this.el.equipmentQuality.text();
    };
    this.setEquipmentQuality = function(val) {
        this.el.equipmentQuality.text(val);
    };

    /* #slot-recap-equipment-level : */
    this.getEquipmentLevel = function() {
        return this.el.equipmentLevel.text();
    };
    this.setEquipmentLevel = function(val) {
        this.el.equipmentLevel.text(val);
    };

    /* #slot-recap-equipment-stat-power-value : */
    this.getEquipmentStatPowerValue = function() {
        return this.el.equipmentStatPowerValue.text();
    };
    this.setEquipmentStatPowerValue = function(val) {
        this.el.equipmentStatPowerValue.text(val);
    };

    /* #slot-recap-equipment-stat-hp-value : */
    this.getEquipmentStatHPValue = function() {
        return this.el.equipmentStatHPValue.text();
    };
    this.setEquipmentStatHPValue = function(val) {
        this.el.equipmentStatHPValue.text(val);
        if (val == 0) {
            this.el.equipmentStatHPSection.hide();
        } else if (this.el.equipmentStatHPSection.is(":hidden")) {
            this.el.equipmentStatHPSection.show();
        }
    };

    /* #slot-recap-equipment-stat-ar-value : */
    this.getEquipmentStatARValue = function() {
        return this.el.equipmentStatARValue.text();
    };
    this.setEquipmentStatARValue = function(val) {
        this.el.equipmentStatARValue.text(val);
        if (val == 0) {
            this.el.equipmentStatARSection.hide();
        } else if (this.el.equipmentStatARSection.is(":hidden")) {
            this.el.equipmentStatARSection.show();
        }
    };

    /* #slot-recap-equipment-stat-hr-value : */
    this.getEquipmentStatHRValue = function() {
        return this.el.equipmentStatHRValue.text();
    };
    this.setEquipmentStatHRValue = function(val) {
        this.el.equipmentStatHRValue.text(val);
        if (val == 0) {
            this.el.equipmentStatHRSection.hide();
        } else if (this.el.equipmentStatHRSection.is(":hidden")) {
            this.el.equipmentStatHRSection.show();
        }
    };

    /* #slot-recap-equipment-stat-prot-value : */
    this.getEquipmentStatProtValue = function() {
        return this.el.equipmentStatProtValue.text();
    };
    this.setEquipmentStatProtValue = function(val) {
        this.el.equipmentStatProtValue.text(val);
        if (val == 0) {
            this.el.equipmentStatProtSection.hide();
        } else if (this.el.equipmentStatProtSection.is(":hidden")) {
            this.el.equipmentStatProtSection.show();
        }
    };

    /* #slot-recap-equipment-description : */
    this.getEquipmentDescription = function() {
        return this.el.equipmentDescription.html();
    };
    this.setEquipmentDescription = function(val) {
        this.el.equipmentDescription.html(val);
        if (val == '') {
            this.el.equipmentDescriptionSection.hide();
        } else if (this.el.equipmentDescriptionSection.is(":hidden")) {
            this.el.equipmentDescriptionSection.show();
        }
    };

    /* #slot-recap-equipment-bonusN object : */
    this.getEquipmentBonusN = function(index) {
        return $('#' + this.id + '-recap-equipment-bonus' + index).html();
    };
    this.setEquipmentBonusN = function(index, val) {
        $('#' + this.id + '-recap-equipment-bonus' + index).html(val);
    };

    /* #slot-recap-equipment-img-item : */
    this.getEquipmentImgItem = function() {
        return this.el.equipmentImgItem.attr('src');
    };
    this.setEquipmentImgItem = function(val) {
        this.el.equipmentImgItem.attr('src', val);
        // recap : hide whole section if img is None
        if (val == 'assets/images/icons/equipment/' + this.kind + '/None.png') {
            this.el.equipmentImgSection.hide();
        } else if (this.el.equipmentImgSection.is(":hidden")) {
            this.el.equipmentImgSection.show();
        }
    };

    /* #slot-recap-equipment-img-rarity : */
    this.getEquipmentImgRarity = function() {
        return this.el.equipmentImgRarity.attr('src');
    };
    this.setEquipmentImgRarity = function(val) {
        this.el.equipmentImgRarity.attr('src', val);
    };

    /* #slot-recap-equipment-img-quality : */
    this.getEquipmentImgQuality = function() {
        return this.el.equipmentImgQuality.attr('src');
    };
    this.setEquipmentImgQuality = function(val) {
        this.el.equipmentImgQuality.attr('src', val);
    };


    /* #slot-recap-equipment-label-level : */
    this.getEquipmentLabelLevel = function() {
        return this.el.equipmentLabelLevel.text();
    };
    this.setEquipmentLabelLevel = function(val) {
        this.el.equipmentLabelLevel.text(val);
    };

    /* GLYPH : -------------------------------------------------------------- */


    /* #slot-recap-glyph-item : */
    this.getGlyphItem = function() {
        return this.el.glyphItem.text();
    };
    this.setGlyphItem = function(val) {
        this.el.glyphItem.text(val);
        // recap : hide whole section if glyph slot is empty
        if (val == '') {
            this.el.glyphSection.hide();
            this.el.glyphEmpty.show();
        } else if (this.el.glyphSection.is(":hidden")) {
            this.el.glyphSection.show();
            this.el.glyphEmpty.hide();
        }
    };

    /* #slot-recap-glyph-rarity : */
    this.getGlyphRarity = function() {
        return this.el.glyphRarity.text();
    };
    this.setGlyphRarity = function(val) {
        this.el.glyphRarity.text(val);
    };

    /* #slot-recap-glyph-quality : */
    this.getGlyphQuality = function() {
        return this.el.glyphQuality.text();
    };
    this.setGlyphQuality = function(val) {
        this.el.glyphQuality.text(val);
    };

    /* #slot-recap-glyph-level : */
    this.getGlyphLevel = function() {
        return this.el.glyphLevel.text();
    };
    this.setGlyphLevel = function(val) {
        this.el.glyphLevel.text(val);
    };

    /*  #slot-recap-glyph-stat-rating : */
    this.getGlyphStatRating = function() {
        return this.el.glyphStatRating.text();
    };
    this.setGlyphStatRating = function(val) {
        this.el.glyphStatRating.text(val);
    };

    /* #slot-recap-glyph-stat-text : */
    this.getGlyphStatText = function() {
        return this.el.glyphStatText.text();
    };
    this.setGlyphStatText = function(val) {
        this.el.glyphStatText.text(val);
    };

    /* SIGNET : ------------------------------------------------------------- */

    /* #slot-recap-signet-item : */
    this.getSignetItem = function() {
        return this.el.signetItem.text();
    };
    this.setSignetItem = function(val) {
        this.el.signetItem.text(val);
        // recap : hide whole section if signet is empty
        if (val == '') {
            this.el.signetSection.hide();
            this.el.signetEmpty.show();
        } else if (this.el.signetSection.is(":hidden")) {
            this.el.signetSection.show();
            this.el.signetEmpty.hide();
        }
    };

    /* #slot-recap-signet-rarity : */
    this.getSignetRarity = function() {
        return this.el.signetRarity.text();
    };
    this.setSignetRarity = function(val) {
        this.el.signetRarity.text(val);
    };

    /* #slot-recap-signet-level : */
    this.getSignetLevel = function() {
        return this.el.signetLevel.text();
    };
    this.setSignetLevel = function(val) {
        this.el.signetLevel.text(val);
    };

    /* #slot-recap-signet-description : */
    this.getSignetDescription = function() {
        return this.el.signetDescription.html();
    };
    this.setSignetDescription = function(val) {
        this.el.signetDescription.html(val);
    };

    /* #slot-recap-signet-bonusN objects
     * => not accessible through like this.el.signetBonus1 because this element doesn't exist at application start : */
    this.getSignetBonusN = function(index) {
        return $('#' + this.id + '-recap-signet-bonus' + index).text();
    };
    this.setSignetBonusN = function(index, val) {
        $('#' + this.id + '-recap-signet-bonus' + index).text(val);
    };

    /* #slot-edit-signet-bonus-wrapper
     * => not accessible through like this.el.signetBonusWrapper because this element doesn't exist at application start : */
    this.setSignetBonusWrapper = function(newClass) {
        $('#' + this.id + '-recap-signet-bonus-wrapper').attr('class', newClass);
    };

    /* #slot-recap-affix : */
    this.getAffix = function() {
        return this.el.affix.text();
    };
    this.setAffix = function(val) {
        this.el.affix.text('of '+ val);
        if (val == '') {
            this.el.affix.hide();
        } else if (this.el.affix.is(":hidden")) {
            this.el.affix.show();
        }
    };

    /* #slot-recap-affix-quality : */
    this.getAffixQuality = function() {
        return this.el.affixQuality.text();
    };
    this.setAffixQuality = function(val) {
        this.el.affixQuality.text(val);
    };
};
