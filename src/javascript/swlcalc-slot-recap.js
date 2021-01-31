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

    /**
     * Getter/Setter for #slot-recap-ilvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.text(arguments[0]);
        } else {
            return this.el.iLvl.text();
        }
    };

    /**********************************************************************************
     * Equipment functions | (talismans + weapons)
     *                     V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-recap-equipment-item
     */
    this.equipmentItem = function() {
        if (arguments.length == 1) {
            this.el.equipmentItem.text(arguments[0]);
            // recap : hide whole section if slot is empty
            if (arguments[0] == 'Empty') {
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
        } else {
            return this.el.equipmentItem.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-rarity
     */
    this.equipmentRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentRarity.text(arguments[0]);
        } else {
            return this.el.equipmentRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-quality
     */
    this.equipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentQuality.text(arguments[0]);
        } else {
            return this.el.equipmentQuality.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-level
     */
    this.equipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.text(arguments[0]);
        } else {
            return this.el.equipmentLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-power-value
     */
    this.equipmentStatPowerValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatPowerValue.text(arguments[0]);
        } else {
            return this.el.equipmentStatPowerValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-hp-value
     */
    this.equipmentStatHPValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatHPValue.text(arguments[0]);
            if (arguments[0] == 0) {
                this.el.equipmentStatHPSection.hide();
            } else if (this.el.equipmentStatHPSection.is(":hidden")) {
                this.el.equipmentStatHPSection.show();
            }
        } else {
            return this.el.equipmentStatHPValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-ar-value
     */
    this.equipmentStatARValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatARValue.text(arguments[0]);
            if (arguments[0] == 0) {
                this.el.equipmentStatARSection.hide();
            } else if (this.el.equipmentStatARSection.is(":hidden")) {
                this.el.equipmentStatARSection.show();
            }
        } else {
            return this.el.equipmentStatARValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-hr-value
     */
    this.equipmentStatHRValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatHRValue.text(arguments[0]);
            if (arguments[0] == 0) {
                this.el.equipmentStatHRSection.hide();
            } else if (this.el.equipmentStatHRSection.is(":hidden")) {
                this.el.equipmentStatHRSection.show();
            }
        } else {
            return this.el.equipmentStatHRValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-prot-value
     */
    this.equipmentStatProtValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatProtValue.text(arguments[0]);
            if (arguments[0] == 0) {
                this.el.equipmentStatProtSection.hide();
            } else if (this.el.equipmentStatProtSection.is(":hidden")) {
                this.el.equipmentStatProtSection.show();
            }
        } else {
            return this.el.equipmentStatProtValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-description
     */
    this.equipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.equipmentDescription.html(arguments[0]);
            // recap : hide whole section if description is empty
            if (arguments[0] == '') {
                this.el.equipmentDescriptionSection.hide();
            } else if (this.el.equipmentDescriptionSection.is(":hidden")) {
                this.el.equipmentDescriptionSection.show();
            }
        } else {
            return this.el.equipmentDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-recap-equipment-bonusN object
     */
    this.equipmentBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-recap-equipment-bonus' + index).html(arguments[1]);
        } else {
            return $('#' + this.id + '-recap-equipment-bonus' + index).html();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-item
     */
    this.equipmentImgItem = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgItem.attr('src', arguments[0])
            // recap : hide whole section if img is None
            if (arguments[0] == 'assets/images/icons/equipment/' + this.kind + '/None.png') {
                this.el.equipmentImgSection.hide();
            } else if (this.el.equipmentImgSection.is(":hidden")) {
                this.el.equipmentImgSection.show();
            }
        } else {
            return this.el.equipmentImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-rarity
     */
    this.equipmentImgRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgRarity.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-quality
     */
    this.equipmentImgQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgQuality.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgQuality.attr('src');
        }
    };


    /**
     * Getter/Setter for #slot-recap-equipment-label-level
     */
    this.equipmentLabelLevel = function() {
        if (arguments.length == 1) {
            this.el.equipmentLabelLevel.text(arguments[0]);
        } else {
            return this.el.equipmentLabelLevel.text();
        }
    };

    /**********************************************************************************
     * Glyph functions |
     *                 V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-recap-glyph-item
     */
    this.glyphItem = function() {
        if (arguments.length == 1) {
            this.el.glyphItem.text(arguments[0]);
            // recap : hide whole section if glyph slot is empty
            if (arguments[0] == '') {
                this.el.glyphSection.hide();
                this.el.glyphEmpty.show();
            } else if (this.el.glyphSection.is(":hidden")) {
                this.el.glyphSection.show();
                this.el.glyphEmpty.hide();
            }
        } else {
            return this.el.glyphItem.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-rarity
     */
    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.text(arguments[0]);
        } else {
            return this.el.glyphRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-quality
     */
    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.text(arguments[0]);
        } else {
            return this.el.glyphQuality.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-level
     */
    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.text(arguments[0]);
        } else {
            return this.el.glyphLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-stat-rating
     */
    this.glyphStatRating = function() {
        if (arguments.length == 1) {
            this.el.glyphStatRating.text(arguments[0]);
        } else {
            return this.el.glyphStatRating.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-stat-text
     */
    this.glyphStatText = function() {
        if (arguments.length == 1) {
            this.el.glyphStatText.text(arguments[0]);
        } else {
            return this.el.glyphStatText.text();
        }
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-recap-signet-item
     */
    this.signetItem = function() {
        if (arguments.length == 1) {
            this.el.signetItem.text(arguments[0]);
            // recap : hide whole section if signet is empty
            if (arguments[0] == '') {
                this.el.signetSection.hide();
                this.el.signetEmpty.show();
            } else if (this.el.signetSection.is(":hidden")) {
                this.el.signetSection.show();
                this.el.signetEmpty.hide();
            }
        } else {
            return this.el.signetItem.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-rarity
     */
    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.text(arguments[0]);
        } else {
            return this.el.signetRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-level
     */
    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.text(arguments[0]);
        } else {
            return this.el.signetLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-description
     */
    this.signetDescription = function() {
        if (arguments.length == 1) {
            this.el.signetDescription.html(arguments[0]);
        } else {
            return this.el.signetDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-recap-signet-bonusN object
     * => not accessible through like this.el.signetBonus1 because this element doesn't exist at application start
     */
    this.signetBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-recap-signet-bonus' + index).text(arguments[1]);
        } else {
            return $('#' + this.id + '-recap-signet-bonus' + index).text();
        }
    };

    /**
     * Getter for #slot-edit-signet-bonus-wrapper
     * => not accessible through like this.el.signetBonusWrapper because this element doesn't exist at application start
     */
    this.signetBonusWrapper = function() {
        return $('#' + this.id + '-recap-signet-bonus-wrapper');
    };

    /**
     * Getter/Setter for #slot-recap-affix
     */
    this.affix = function() {
        if (arguments.length == 1) {
            this.el.affix.text('of '+ arguments[0]);
            if (arguments[0] == '') {
                this.el.affix.hide();
            } else if (this.el.affix.is(":hidden")) {
                this.el.affix.show();
            }
        } else {
            return this.el.affix.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-affix-quality
     */
    this.affixQuality = function() {
        if (arguments.length == 1) {
            this.el.affixQuality.text(arguments[0]);
        } else {
            return this.el.affixQuality.text();
        }
    };
};
