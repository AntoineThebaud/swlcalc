var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.SlotEdit = function SlotEdit(slotData) {
    var self   = this;
    this.id    = slotData.id;
    this.name  = slotData.name;
    this.kind  = slotData.kind;
    this.type  = slotData.type;
    this.group = slotData.group;

    this.el = {
        div:                  $('#' + this.id + '-slot'),
        iLvl:                 $('#' + this.id + '-ilvl'),
        equipmentId:          $('#' + this.id + '-equipment-id'),
        equipmentName:        $('#' + this.id + '-equipment-name'),
        equipmentRarity:      $('#' + this.id + '-equipment-rarity'),
        equipmentQuality:     $('#' + this.id + '-equipment-quality'),
        equipmentLevel:       $('#' + this.id + '-equipment-level'),
        equipmentStatRating:  $('#' + this.id + '-equipment-stat-rating'),
        equipmentILvl:        $('#' + this.id + '-equipment-ilvl'),
        equipmentImgItem:     $('#' + this.id + '-equipment-img-item'),
        equipmentImgRarity:   $('#' + this.id + '-equipment-img-rarity'),
        equipmentImgQuality:  $('#' + this.id + '-equipment-img-quality'),
        equipmentLabelLevel:  $('#' + this.id + '-equipment-label-level'),
        equipmentDescription: $('#' + this.id + '-equipment-description'),
        glyphId:              $('#' + this.id + '-glyph-id'),
        glyphRarity:          $('#' + this.id + '-glyph-rarity'),
        glyphQuality:         $('#' + this.id + '-glyph-quality'),
        glyphLevel:           $('#' + this.id + '-glyph-level'),
        glyphStatRating:      $('#' + this.id + '-glyph-stat-rating'),
        glyphStatText:        $('#' + this.id + '-glyph-stat-text'),
        glyphImgItem:         $('#' + this.id + '-glyph-img-item'),
        glyphImgRarity:       $('#' + this.id + '-glyph-img-rarity'),
        glyphImgQuality:      $('#' + this.id + '-glyph-img-quality'),
        glyphLabelLevel:      $('#' + this.id + '-glyph-label-level'),
        glyphILvl:            $('#' + this.id + '-glyph-ilvl'),
        signetId:             $('#' + this.id + '-signet-id'),
        signetRarity:         $('#' + this.id + '-signet-rarity'),
        signetLevel:          $('#' + this.id + '-signet-level'),
        signetImgItem:        $('#' + this.id + '-signet-img-item'),
        signetImgRarity:      $('#' + this.id + '-signet-img-rarity'),
        signetDescription:    $('#' + this.id + '-signet-description'),
        signetLabelLevel:     $('#' + this.id + '-signet-label-level'),
        signetILvl:           $('#' + this.id + '-signet-ilvl'),
        nameWarning:          $('#' + this.id + '-name-warning') // TODO to review
    };

    /**
     * Getter/Setter for #slot-ilvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.text(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**********************************************************************************
     * Equipment functions | (talismans + weapons)
     *                     V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-equipment-name
     */
    this.equipmentName = function() {
        if (arguments.length == 1) {
            this.el.equipmentName.html(arguments[0]);
        } else {
            return this.el.equipmentName.html();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-id
     */
    this.equipmentId = function() {
        if (arguments.length == 1) {
            this.el.equipmentId.val(arguments[0]);
        } else {
            return this.el.equipmentId.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-rarity
     */
    this.equipmentRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentRarity.val(arguments[0]);
        } else {
            return this.el.equipmentRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-quality
     */
    this.equipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentQuality.val(arguments[0]);
        } else {
            return this.el.equipmentQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-level
     */
    this.equipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.val(arguments[0]);
        } else {
            return this.el.equipmentLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-equipment-level (min attribute)
     */
    this.equipmentLevelMin = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.attr('min', arguments[0])
        } else {
            return this.el.equipmentLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-equipment-level (max attribute)
     */
    this.equipmentLevelMax = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.attr('max', arguments[0])
        } else {
            return this.el.equipmentLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-stat-rating
     */
    this.equipmentStatRating = function() {
        if (arguments.length == 1) {
            this.el.equipmentStatRating.text(arguments[0]);
        } else {
            return parseInt(this.el.equipmentStatRating.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**
     * Getter/Setter for #slot-equipment-iLvl
     */
    this.equipmentILvl = function() {
        if (arguments.length == 1) {
            this.el.equipmentILvl.text(arguments[0]);
        } else {
            return parseInt(this.el.equipmentILvl.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**
     * Getter/Setter for #slot-equipment-description
     */
    this.equipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.equipmentDescription.html(arguments[0]);
        } else {
            return this.el.equipmentDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-equipment-bonusN object
     */
    this.equipmentBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-equipment-bonus' + index).html(arguments[1]);
        } else {
            return $('#' + this.id + '-equipment-bonus' + index).html();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-item
     */
    this.equipmentImgItem = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgItem.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-rarity
     */
    this.equipmentImgRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgRarity.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-quality
     */
    this.equipmentImgQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgQuality.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-label-level
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
     * Getter/Setter for #slot-glyph
     */
    this.glyphId = function() {
        if (arguments.length == 1) {
            this.el.glyphId.val(arguments[0]);
        } else {
            return this.el.glyphId.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-rarity
     */
    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.val(arguments[0]);
        } else {
            return this.el.glyphRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-quality
     */
    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.val(arguments[0]);
        } else {
            return this.el.glyphQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-level
     */
    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.val(arguments[0]);
        } else {
            return this.el.glyphLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-glyph-level (min attribute)
     */
    this.glyphLevelMin = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.attr('min', arguments[0])
        } else {
            return this.el.glyphLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-glyph-level (max attribute)
     */
    this.glyphLevelMax = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.attr('max', arguments[0])
        } else {
            return this.el.glyphLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-stat-rating
     */
    this.glyphStatRating = function() {
        if (arguments.length == 1) {
            this.el.glyphStatRating.text(arguments[0]);
        } else {
            return parseInt(this.el.glyphStatRating.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**
     * Getter/Setter for #slot-glyph-stat-text
     */
    this.glyphStatText = function() {
        if (arguments.length == 1) {
            this.el.glyphStatText.text(arguments[0]);
        } else {
            return this.el.glyphStatText.text();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-iLvl
     */
    this.glyphILvl = function() {
        if (arguments.length == 1) {
            this.el.glyphILvl.text(arguments[0]);
        } else {
            return parseInt(this.el.glyphILvl.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-item
     */
    this.glyphImgItem = function() {
        if (arguments.length == 1) {
            this.el.glyphImgItem.attr('src', arguments[0])
        } else {
            return this.el.glyphImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-rarity
     */
    this.glyphImgRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphImgRarity.attr('src', arguments[0])
        } else {
            return this.el.glyphImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-quality
     */
    this.glyphImgQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphImgQuality.attr('src', arguments[0])
        } else {
            return this.el.glyphImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-label-level
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
     * Getter/Setter for #slot-signet
     */
    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    /**
     * Getter/Setter for #slot-signet-rarity
     */
    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.val(arguments[0]);
        } else {
            return this.el.signetRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-signet-level
     */
    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.val(arguments[0]);
        } else {
            return this.el.signetLevel.val();
        }
    };
    /**
     * Getter/Setter for #slot-signet-level (min attribute)
     */
    this.signetLevelMin = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.attr('min', arguments[0])
        } else {
            return this.el.signetLevel.attr('min');
        }
    };
    /**
     * Getter/Setter for #slot-signet-level (max attribute)
     */
    this.signetLevelMax = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.attr('max', arguments[0])
        } else {
            return this.el.signetLevel.attr('max');
        }
    };

    /**
     * Getter/Setter for #slot-signet-ilvl
     */
    this.signetILvl = function() {
        if (arguments.length == 1) {
            this.el.signetILvl.text(arguments[0]);
        } else {
            return parseInt(this.el.signetILvl.text()); // TODO remove parseInt to align set and get methods
        }
    };

    /**
     * Getter/Setter for #slot-signet-description
     */
    this.signetDescription = function() {
        if (arguments.length == 1) {
            this.el.signetDescription.html(arguments[0]);
        } else {
            return this.el.signetDescription.html();
        }
    };

    /**
     * Getter/Setter for #slot-signet-bonus
     * => not accessible through like this.el.signetBonus because this object doesnt exist at the beginning (like %-bonusN objects)
     */
    this.signetBonus = function() {
        if (arguments.length == 1) {
            $('#' + this.id + '-signet-bonus').text(arguments[0]);
        } else {
            return $('#' + this.id + '-signet-bonus').text();
        }
    };

    /**
     * Getter/Setter for #slot-signet-img-item
     */
    this.signetImgItem = function() {
        if (arguments.length == 1) {
            this.el.signetImgItem.attr('src', arguments[0])
        } else {
            return this.el.signetImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-signet-img-rarity
     */
    this.signetImgRarity = function() {
        if (arguments.length == 1) {
            this.el.signetImgRarity.attr('src', arguments[0])
        } else {
            return this.el.signetImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-signet-label-level
     */
    this.signetLabelLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLabelLevel.text(arguments[0]);
        } else {
            return this.el.signetLabelLevel.text();
        }
    };
};
