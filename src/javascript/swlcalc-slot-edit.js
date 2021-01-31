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

    /**
     * Getter/Setter for #slot-ilvl
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
     * Getter/Setter for #slot-edit-equipment-id
     */
    this.equipmentId = function() {
        if (arguments.length == 1) {
            this.el.equipmentId.val(arguments[0]);
        } else {
            return this.el.equipmentId.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-rarity
     */
    this.equipmentRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentRarity.val(arguments[0]);
        } else {
            return this.el.equipmentRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-quality
     */
    this.equipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentQuality.val(arguments[0]);
        } else {
            return this.el.equipmentQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-level
     */
    this.equipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.val(arguments[0]);
        } else {
            return this.el.equipmentLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-edit-equipment-level (min attribute)
     */
    this.equipmentLevelMin = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.attr('min', arguments[0])
        } else {
            return this.el.equipmentLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-edit-equipment-level (max attribute)
     */
    this.equipmentLevelMax = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.attr('max', arguments[0])
        } else {
            return this.el.equipmentLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-stat-power-value
     */
    this.equipmentStatPowerValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatPowerValue.text(arguments[0]);
        } else {
            return this.el.equipmentStatPowerValue.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-stat-prot-value
     */
    this.equipmentStatProtValue = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatProtValue.text(arguments[0]);
        } else {
            return this.el.equipmentStatProtValue.text();
        }
    };


    equipmentStatRawProtValue = 0;

    /**
     * Getter/Setter for #slot-edit-equipment-iLvl
     */
    this.equipmentILvl = function() {
        if (arguments.length == 1) {
            this.el.equipmentILvl.text(arguments[0]);
        } else {
            return this.el.equipmentILvl.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-description
     */
    this.equipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.equipmentDescription.html(arguments[0]);
        } else {
            return this.el.equipmentDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-edit-equipment-bonusN object
     */
    this.equipmentBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-edit-equipment-bonus' + index).html(arguments[1]);
        } else {
            return $('#' + this.id + '-edit-equipment-bonus' + index).html();
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-img-item
     */
    this.equipmentImgItem = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgItem.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-img-rarity
     */
    this.equipmentImgRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgRarity.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-img-quality
     */
    this.equipmentImgQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgQuality.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-equipment-label-level
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
     * Getter/Setter for #slot-edit-glyph
     */
    this.glyphId = function() {
        if (arguments.length == 1) {
            this.el.glyphId.val(arguments[0]);
        } else {
            return this.el.glyphId.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-rarity
     */
    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.val(arguments[0]);
        } else {
            return this.el.glyphRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-quality
     */
    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.val(arguments[0]);
        } else {
            return this.el.glyphQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-level
     */
    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.val(arguments[0]);
        } else {
            return this.el.glyphLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-edit-glyph-level (min attribute)
     */
    this.glyphLevelMin = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.attr('min', arguments[0])
        } else {
            return this.el.glyphLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-edit-glyph-level (max attribute)
     */
    this.glyphLevelMax = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.attr('max', arguments[0])
        } else {
            return this.el.glyphLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-stat-rating
     */
    this.glyphStatRating = function() {
        if (arguments.length == 1) {
            this.el.glyphStatRating.text(arguments[0]);
        } else {
            return this.el.glyphStatRating.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-stat-text
     */
    this.glyphStatText = function() {
        if (arguments.length == 1) {
            this.el.glyphStatText.text(arguments[0]);
        } else {
            return this.el.glyphStatText.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-iLvl
     */
    this.glyphILvl = function() {
        if (arguments.length == 1) {
            this.el.glyphILvl.text(arguments[0]);
        } else {
            return this.el.glyphILvl.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-img-item
     */
    this.glyphImgItem = function() {
        if (arguments.length == 1) {
            this.el.glyphImgItem.attr('src', arguments[0])
        } else {
            return this.el.glyphImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-img-rarity
     */
    this.glyphImgRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphImgRarity.attr('src', arguments[0])
        } else {
            return this.el.glyphImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-img-quality
     */
    this.glyphImgQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphImgQuality.attr('src', arguments[0])
        } else {
            return this.el.glyphImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-glyph-label-level
     */
    this.glyphLabelLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLabelLevel.text(arguments[0]);
        } else {
            return this.el.glyphLabelLevel.text();
        }
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-edit-signet
     */
    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-rarity
     */
    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.val(arguments[0]);
        } else {
            return this.el.signetRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-level
     */
    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.val(arguments[0]);
        } else {
            return this.el.signetLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-edit-signet-level (min attribute)
     */
    this.signetLevelMin = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.attr('min', arguments[0])
        } else {
            return this.el.signetLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-edit-signet-level (max attribute)
     */
    this.signetLevelMax = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.attr('max', arguments[0])
        } else {
            return this.el.signetLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-ilvl
     */
    this.signetILvl = function() {
        if (arguments.length == 1) {
            this.el.signetILvl.text(arguments[0]);
        } else {
            return this.el.signetILvl.text();
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-description
     */
    this.signetDescription = function() {
        if (arguments.length == 1) {
            this.el.signetDescription.html(arguments[0]);
        } else {
            return this.el.signetDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-edit-signet-bonusN object
     * => not accessible through like this.el.signetBonus1 because this element doesn't exist at application start
     */
    this.signetBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-edit-signet-bonus' + index).text(arguments[1]);
        } else {
            return $('#' + this.id + '-edit-signet-bonus' + index).text();
        }
    };

    /**
     * Getter for #slot-edit-signet-bonus-wrapper
     * => not accessible through like this.el.signetBonusWrapper because this element doesn't exist at application start
     */
    this.signetBonusWrapper = function() {
        return $('#' + this.id + '-edit-signet-bonus-wrapper');
    };

    /**
     * Getter/Setter for #slot-edit-signet-img-item
     */
    this.signetImgItem = function() {
        if (arguments.length == 1) {
            this.el.signetImgItem.attr('src', arguments[0])
        } else {
            return this.el.signetImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-img-rarity
     */
    this.signetImgRarity = function() {
        if (arguments.length == 1) {
            this.el.signetImgRarity.attr('src', arguments[0])
        } else {
            return this.el.signetImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-edit-signet-label-level
     */
    this.signetLabelLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLabelLevel.text(arguments[0]);
        } else {
            return this.el.signetLabelLevel.text();
        }
    };
};
