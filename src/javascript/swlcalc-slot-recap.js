var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.SlotRecap = function SlotRecap(slotData) {
    var self   = this;
    this.id    = slotData.id;
    this.name  = slotData.name;
    this.kind  = slotData.kind;
    this.type  = slotData.type;
    this.group = slotData.group;

    this.el = {
        div:                           $('#' + this.id + '-recap-slotrecap'),
        editBtn:                       $('#' + this.id + '-recap-editbtn'),
        editBtnImg:                    $('#' + this.id + '-recap-editbtn-img'),
        weaponActive:                  $('#' + this.id + '-recap-active'), // TODO change name
        iLvl:                          $('#' + this.id + '-recap-ilvl'),
        section:                       $('#' + this.id + '-recap-section'),
        equipmentEmpty:                $('#' + this.id + '-recap-equipment-empty'),
        equipmentTitleSection:         $('#' + this.id + '-recap-equipment-title-section'),
        equipmentTitle:                $('#' + this.id + '-recap-equipment-title'),
        equipmentSubtitleSection:      $('#' + this.id + '-recap-equipment-subtitle-section'),
        equipmentItem:                 $('#' + this.id + '-recap-equipment-item'),
        equipmentRarity:               $('#' + this.id + '-recap-equipment-rarity'),
        equipmentQuality:              $('#' + this.id + '-recap-equipment-quality'),
        equipmentLevel:                $('#' + this.id + '-recap-equipment-level'),
        equipmentStatSection:          $('#' + this.id + '-recap-equipment-stat-section'),
        equipmentStatRawValue:         $('#' + this.id + '-recap-equipment-stat-raw-value'),
        equipmentStatTransformedValue: $('#' + this.id + '-recap-equipment-stat-transformed-value'),
        equipmentStatTransformedText:  $('#' + this.id + '-recap-equipment-stat-transformed-text'),
        equipmentImgSection:           $('#' + this.id + '-recap-equipment-img-section'),
        equipmentImgItem:              $('#' + this.id + '-recap-equipment-img-item'),
        equipmentImgRarity:            $('#' + this.id + '-recap-equipment-img-rarity'),
        equipmentImgQuality:           $('#' + this.id + '-recap-equipment-img-quality'),
        equipmentDescription:          $('#' + this.id + '-recap-equipment-description'),
        equipmentDescriptionSection:   $('#' + this.id + '-recap-equipment-description-section'),
        equipmentLabelLevel:           $('#' + this.id + '-recap-equipment-label-level'),
        glyphSection:                  $('#' + this.id + '-recap-glyph-section'),
        glyphEmpty:                    $('#' + this.id + '-recap-glyph-empty'),
        glyphTitle:                    $('#' + this.id + '-recap-glyph-title'),
        glyphItem:                     $('#' + this.id + '-recap-glyph-item'),
        glyphRarity:                   $('#' + this.id + '-recap-glyph-rarity'),
        glyphQuality:                  $('#' + this.id + '-recap-glyph-quality'),
        glyphLevel:                    $('#' + this.id + '-recap-glyph-level'),
        glyphStatRating:               $('#' + this.id + '-recap-glyph-stat-rating'),
        glyphStatText:                 $('#' + this.id + '-recap-glyph-stat-text'),
        signetSection:                 $('#' + this.id + '-recap-signet-section'),
        signetEmpty:                   $('#' + this.id + '-recap-signet-empty'),
        signetTitle:                   $('#' + this.id + '-recap-signet-title'),
        signetItem:                    $('#' + this.id + '-recap-signet-item'),
        signetRarity:                  $('#' + this.id + '-recap-signet-rarity'),
        signetLevel:                   $('#' + this.id + '-recap-signet-level'),
        signetDescription:             $('#' + this.id + '-recap-signet-description'),
        suffix:                        $('#' + this.id + '-recap-suffix'),
        suffixQuality:                 $('#' + this.id + '-recap-suffix-quality')
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
     * Getter/Setter for #slot-recap-equipment-stat-raw-value
     */
    this.equipmentStatRawValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatRawValue.text(arguments[0]);
        } else {
            return this.el.equipmentStatRawValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-transformed-value
     */
    this.equipmentStatTransformedValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatTransformedValue.text(arguments[0]);
        } else {
            return this.el.equipmentStatTransformedValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-transformed-text
     */
    this.equipmentStatTransformedText = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatTransformedText.text(arguments[0]);
        } else {
            return this.el.equipmentStatTransformedText.text();
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
            if (arguments[0] == 'assets/images/icons/' + this.type + '/None.png') {
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
     * Getter/Setter for #slot-recap-signet-bonus
     * => not accessible through like this.el.signetBonus because this object doesnt exist at the beginning (like %-bonusN objects)
     */
    this.signetBonus = function() {
        if (arguments.length == 1) {
            $('#' + this.id + '-recap-signet-bonus').text(arguments[0]);
        } else {
            return $('#' + this.id + '-recap-signet-bonus').text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-suffix
     */
    this.suffix = function() {
        if (arguments.length == 1) {
            this.el.suffix.text('of '+ arguments[0]);
            if (arguments[0] == '') {
                this.el.suffix.hide();
            } else if (this.el.suffix.is(":hidden")) {
                this.el.suffix.show();
            }
        } else {
            return this.el.suffix.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-suffix-quality
     */
    this.suffixQuality = function() {
        if (arguments.length == 1) {
            this.el.suffixQuality.text(arguments[0]);
        } else {
            return this.el.suffixQuality.text();
        }
    };
};
