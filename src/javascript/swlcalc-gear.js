var swlcalc = swlcalc || {};

swlcalc.gear = function() {

    /*
     * Map object to store the Slot objects (see below)
     */
    var slots = {};

    /**
     * This method can only be called after the document is ready
     */
    var init = function() {
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotData = swlcalc.data.template_data.slots[i];
            this.slots[slotData.id] = new swlcalc.gear.Slot(slotData);
            this.slots[slotData.id].el.nameWarning.hide(); // TODO/FEATURE : Review this warning stuff
        }
        drawPrimaryWeapon();
    };

    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        swlcalc.gear.slots.weapon2.sheathWeapon();
        swlcalc.gear.slots.weapon.weaponDrawn = true;
    };

    /**
     * Returns the total number of slots in the gear (= 9 as of now)
     */
    var nbSlots = function() {
        return Object.keys(this.slots).length;
    };

    /**
     * Resets all slots
     */
    //TODO/FEATURE : reset should logically set level to 1
    var reset = function() {
        for (var id in this.slots) {
            this.slots[id].reset();
        }
    };

    /**
     * Returns the list of slots states
     */
    var state = function() {
        var slotStates = {};
        for (var id in this.slots) {
            slotStates[id] = this.slots[id].state();
        }
        return slotStates;
    };

    /**
     * Returns the list of slots states (mapped version)
     */
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var id in this.slots) {
            mappedSlotStates[id] = this.slots[id].mappedState();
        }
        return mappedSlotStates;
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        slots: slots,
        init: init,
        nbSlots: nbSlots,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();

swlcalc.gear.Slot = function Slot(slotData) {

    var self = this;
    this.id = slotData.id;
    this.name = slotData.name;
    this.kind = slotData.kind;
    this.type = slotData.type;
    this.group = slotData.group;
    this.weaponDrawn = false;

    // for calculations precision issues
    this.rawILvl = 0.0;
    this.rawGlyphILvl = 0.0;
    this.rawSignetILvl = 0.0;

    this.el = {
        div:                       $('#' + this.id + '-slot'),
        iLvl:                      $('#' + this.id + '-ilvl'),
        equipmentId:               $('#' + this.id + '-equipment-id'),
        equipmentName:             $('#' + this.id + '-equipment-name'),
        equipmentRarity:           $('#' + this.id + '-equipment-rarity'),
        equipmentQuality:          $('#' + this.id + '-equipment-quality'),
        equipmentLevel:            $('#' + this.id + '-equipment-level'),
        equipmentStatRating:       $('#' + this.id + '-equipment-stat-rating'),
        equipmentILvl:             $('#' + this.id + '-equipment-ilvl'),
        equipmentImgItem:          $('#' + this.id + '-equipment-img-item'),
        equipmentImgRarity:        $('#' + this.id + '-equipment-img-rarity'),
        equipmentImgQuality:       $('#' + this.id + '-equipment-img-quality'),
        equipmentLabelLevel:       $('#' + this.id + '-equipment-label-level'),
        equipmentDescription:      $('#' + this.id + '-equipment-description'),
        glyphId:                   $('#' + this.id + '-glyph-id'),
        glyphRarity:               $('#' + this.id + '-glyph-rarity'),
        glyphQuality:              $('#' + this.id + '-glyph-quality'),
        glyphLevel:                $('#' + this.id + '-glyph-level'),
        glyphStatRating:           $('#' + this.id + '-glyph-stat-rating'),
        glyphStatText:             $('#' + this.id + '-glyph-stat-text'),
        glyphImgItem:              $('#' + this.id + '-glyph-img-item'),
        glyphImgRarity:            $('#' + this.id + '-glyph-img-rarity'),
        glyphImgQuality:           $('#' + this.id + '-glyph-img-quality'),
        glyphLabelLevel:           $('#' + this.id + '-glyph-label-level'),
        glyphILvl:                 $('#' + this.id + '-glyph-ilvl'),
        signetId:                  $('#' + this.id + '-signet-id'),
        signetRarity:              $('#' + this.id + '-signet-rarity'),
        signetLevel:               $('#' + this.id + '-signet-level'),
        signetImgItem:             $('#' + this.id + '-signet-img-item'),
        signetImgRarity:           $('#' + this.id + '-signet-img-rarity'),
        signetDescription:         $('#' + this.id + '-signet-description'),
        signetLabelLevel:          $('#' + this.id + '-signet-label-level'),
        signetILvl:                $('#' + this.id + '-signet-ilvl'),
        nameWarning:               $('#' + this.id + '-name-warning'),

        editModal:                 $('#' + this.id + '-edit-modal'),
        editBtn:                   $('#' + this.id + '-editbtn'),
        recapILvl:                 $('#' + this.id + '-recap-ilvl'),
        recapEquipmentTitle:       $('#' + this.id + '-recap-equipment-title'),
        recapEquipmentItem:        $('#' + this.id + '-recap-equipment-item'),
        recapEquipmentRarity:      $('#' + this.id + '-recap-equipment-rarity'),
        recapEquipmentQuality:     $('#' + this.id + '-recap-equipment-quality'),
        recapEquipmentLevel:       $('#' + this.id + '-recap-equipment-level'),
        recapEquipmentStatRating:  $('#' + this.id + '-recap-equipment-stat-rating'),
        recapEquipmentImgItem:     $('#' + this.id + '-recap-equipment-img-item'),
        recapEquipmentImgRarity:   $('#' + this.id + '-recap-equipment-img-rarity'),
        recapEquipmentImgQuality:  $('#' + this.id + '-recap-equipment-img-quality'),
        recapEquipmentDescription: $('#' + this.id + '-recap-equipment-description'),
        recapEquipmentLabelLevel:  $('#' + this.id + '-recap-equipment-label-level'),
        recapGlyphSection:         $('#' + this.id + '-recap-glyph-section'),
        recapGlyphEmpty:           $('#' + this.id + '-recap-glyph-empty'),
        recapGlyphTitle:           $('#' + this.id + '-recap-glyph-title'),
        recapGlyphItem:            $('#' + this.id + '-recap-glyph-item'),
        recapGlyphRarity:          $('#' + this.id + '-recap-glyph-rarity'),
        recapGlyphQuality:         $('#' + this.id + '-recap-glyph-quality'),
        recapGlyphLevel:           $('#' + this.id + '-recap-glyph-level'),
        recapGlyphStatRating:      $('#' + this.id + '-recap-glyph-stat-rating'),
        recapGlyphStatText:        $('#' + this.id + '-recap-glyph-stat-text'),
        recapSignetSection:        $('#' + this.id + '-recap-signet-section'),
        recapSignetEmpty:          $('#' + this.id + '-recap-signet-empty'),
        recapSignetTitle:          $('#' + this.id + '-recap-signet-title'),
        recapSignetItem:           $('#' + this.id + '-recap-signet-item'),
        recapSignetRarity:         $('#' + this.id + '-recap-signet-rarity'),
        recapSignetLevel:          $('#' + this.id + '-recap-signet-level'),
        recapSignetDescription:    $('#' + this.id + '-recap-signet-description')
    };

    /**
     * Getter/Setter for #slot-ilvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.text(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-ilvl
     */
    this.recapILvl = function() {
        if (arguments.length == 1) {
            this.el.recapILvl.text(arguments[0]);
        } else {
            return parseInt(this.el.recapILvl.text());
        }
    };

    /**
     * Update #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     * (because reusing the rounded values returned by equipmentILvl(), glyphILvl() and signetILvl() would lead to wrong result)
     */
    this.updateILvl = function() {
        var newILvl = Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl);

        this.iLvl(newILvl);
        this.recapILvl(newILvl);
    };

    /**********************************************************************************
     * Equipment functions | (talismans + weapons)
     *                     V
     **********************************************************************************/

    /**
     * Returns true if the slot belongs to the weapon group
     */
    this.isWeapon = function() {
        return this.group == 'weapon';
    };

    /**
     * Hides the current slot (for weapons only)
     */
    this.sheathWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = false;
            this.el.div.hide();
        }
    };

    /**
     * Displays the current slot (for weapons only)
     */
    this.drawWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = true;
            this.el.div.show();
        }
    };

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
            return parseInt(this.el.equipmentStatRating.text());
        }
    };

    /**
     * Getter/Setter for #slot-equipment-iLvl
     */
    this.equipmentILvl = function() {
        if (arguments.length == 1) {
            this.el.equipmentILvl.text(arguments[0]);
        } else {
            return parseInt(this.el.equipmentILvl.text());
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

    /**
     * Getter/Setter for #slot-recap-equipment-item
     */
    this.recapEquipmentItem = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentItem.text(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentItem.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-rarity
     */
    this.recapEquipmentRarity = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentRarity.text(arguments[0]);
        } else {
            return this.el.recapEquipmentRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-quality
     */
    this.recapEquipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentQuality.text(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentQuality.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-level
     */
    this.recapEquipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentLevel.text(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentLevel.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-stat-rating
     */
    this.recapEquipmentStatRating = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentStatRating.text(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentStatRating.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-description
     */
    this.recapEquipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentDescription.html(arguments[0]);
        } else {
            return this.el.recapEquipmentDescription.html();
        }
    };

    /**
     * Getter/Setter for any #slot-recap-equipment-bonusN object
     */
    this.recapEquipmentBonusN = function(index) {
        if (arguments.length == 2) {
            $('#' + this.id + '-recap-equipment-bonus' + index).html(arguments[1]);
        } else {
            return $('#' + this.id + '-recap-equipment-bonus' + index).html();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-item
     */
    this.recapEquipmentImgItem = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentImgItem.attr('src', arguments[0])
        } else {
            return this.el.recapEquipmentImgItem.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-rarity
     */
    this.recapEquipmentImgRarity = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentImgRarity.attr('src', arguments[0])
        } else {
            return this.el.recapEquipmentImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-quality
     */
    this.recapEquipmentImgQuality = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentImgQuality.attr('src', arguments[0])
        } else {
            return this.el.recapEquipmentImgQuality.attr('src');
        }
    };


    /**
     * Getter/Setter for #slot-recap-equipment-label-level
     */
    this.recapEquipmentLabelLevel = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentLabelLevel.text(arguments[0]);
        } else {
            return this.el.recapEquipmentLabelLevel.text();
        }
    };

    /**
     * Update equipment //TODO put description
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        var newTitle;

        //TODO/FEATURE : reenable slot name display
//      var wtype = $(this).val();
//      if(wtype != 'none') {
//          slotObj.name(': ' + swlcalc.util.capitalize(wtype));
//      } else {
//          slotObj.name('');
//      }

        if (this.equipmentId() == 'none') {
            //To enable when all images will be present :
            // newImage = 'assets/images/icons/talisman/None.png';
            this.equipmentImgItem('assets/images/icons/' + this.type + '/None.png');
            this.recapEquipmentImgItem('assets/images/icons/' + this.type + '/None.png'); // TODO it's like duplicate call here, wrap these into updateImg function maybe ?
            newDescription = '';
            newTitle = 'Empty';
        } else {
            var newEquipmentData = swlcalc.data.equipments.slot[this.kind][this.equipmentId() - 1];
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/' + this.type + '/' + newEquipment.name + '.png';
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.equipmentImgItem('assets/images/icons/' + self.type + '/' + newEquipmentData.name + '.png');
                self.recapEquipmentImgItem('assets/images/icons/' + self.type + '/' + newEquipmentData.name + '.png');
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    self.equipmentImgItem('assets/images/icons/' + self.type + '/temp/' + newEquipmentData.type + '.png');
                    self.recapEquipmentImgItem('assets/images/icons/' + self.type + '/temp/' + newEquipmentData.type + '.png');
                } else {
                    self.equipmentImgItem('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                    self.recapEquipmentImgItem('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                }
            }
            image.src = 'assets/images/icons/' + this.type + '/' + newEquipmentData.name + '.png';
            /* temporary code ********************************************************************************/
            newDescription = newEquipmentData.description;
            newTitle = newEquipmentData.name;
        }
        //To enable when all images will be present :
        //this.equipmentImgItem(newImage);
        this.equipmentDescription(newDescription.replace(/%id/g, this.id));
        // add "-recap" suffix here to avoid id collision
        this.recapEquipmentDescription(newDescription.replace(/%id/g, this.id + '-recap'));
        this.recapEquipmentItem(newTitle);
    };

    /**
     * Update elements related to equipment's rarity + max available level for equipment
     */
    this.updateEquipmentRarity = function() {
        var newRarity = this.equipmentRarity();

        this.el.recapEquipmentTitle.attr('class', 'color-' + newRarity);
        var img_path = 'assets/images/icons/rarity/' + newRarity + '-42x42.png';
        this.equipmentImgRarity(img_path);
        this.recapEquipmentImgRarity(img_path);
        this.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.el.recapEquipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recapEquipmentRarity(swlcalc.util.capitalize(newRarity));

        // update max available level for equipment :
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        this.equipmentLevelMax(maxLvl)
        this.equipmentLevel(maxLvl);
        this.updateEquipmentLevel();
    };

    /**
     * Update elements related to equipment's quality
     */
    this.updateEquipmentQuality = function() {
        var newQuality = this.equipmentQuality();

        this.recapEquipmentQuality(swlcalc.data.quality_mapping[this.type].to_name[newQuality]);
        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.equipmentImgQuality(img_path);
        this.recapEquipmentImgQuality(img_path);
    };

    /**
     * Update elements related to equipment's level
     */
    this.updateEquipmentLevel = function() {
        var newLevel = this.equipmentLevel();

        this.equipmentLabelLevel(newLevel);
        this.recapEquipmentLevel(newLevel);
        this.recapEquipmentLabelLevel(newLevel);
    }

    /**
     * Update elements related to equipement stat's rating (calculatations with stats data)
     */
    this.updateEquipmentStatRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        if (this.equipmentId() != 'none') {
            // calculation rule for weapons
            if (this.isWeapon()) {
                base_value = swlcalc.data.power_rating.weapon[this.equipmentRarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating.weapon[this.equipmentRarity()].weapon_power_per_level * (this.equipmentLevel() - 1);
            }
            // calculation rule for talismans
            else {
                base_value = swlcalc.data.power_rating[this.group][this.equipmentRarity()][this.equipmentQuality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.group][this.equipmentRarity()][this.equipmentQuality()].power_rating_per_level * (this.equipmentLevel() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        // add '+' for display
        if (newValue !== 0) {
            newValue = '+' + newValue;
        }
        this.equipmentStatRating(newValue);
        this.recapEquipmentStatRating(newValue);
    };

    /**
     * Update #slot-equipment-ilvl
     * -> Calculates item power for the slot's talisman (or weapon) and updates GUI with it
     */
    this.updateEquipmentILvl = function() {
        var newILvl = 0;
        if (!(this.equipmentId() == 'none')) {
            newILvl = this.computeItemILvl('equipment', this.equipmentRarity(), this.equipmentLevel());
            // Weapons are worth ~15% more Item Power than talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                newILvl = newILvl * 1.15;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawILvl = newILvl;

        this.equipmentILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /**
     * Update every bonus values present in equipment desription (both edit & recap)
     */
    this.updateEquipmentBonuses = function(combatPower, healingPower) {
        if (this.equipmentBonusN(1) === undefined) return;
        var equipmentData = swlcalc.data.equipments.slot[this.kind][this.equipmentId() - 1];
        var statForComputation = 0;

        for (i = 0; i < equipmentData.coefficients.length; i++) {
            if (equipmentData.stats[i] == 'Combat Power') {
                statForComputation = combatPower;
            } else if (equipmentData.stats[i] == 'Healing Power') {
                statForComputation = healingPower;
            }
            var newBonusVal = Math.round(equipmentData.coefficients[i] * statForComputation)
            this.equipmentBonusN(i + 1, newBonusVal);
            this.recapEquipmentBonusN(i + 1, newBonusVal);
        }
    }

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
            return parseInt(this.el.glyphStatRating.text());
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
            return parseInt(this.el.glyphILvl.text());
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

    /**
     * Getter/Setter for #slot-recap-glyph-item
     */
    this.recapGlyphItem = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphItem.text(arguments[0]);
        } else {
            return this.el.recapGlyphItem.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-rarity
     */
    this.recapGlyphRarity = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphRarity.text(arguments[0]);
        } else {
            return this.el.recapGlyphRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-quality
     */
    this.recapGlyphQuality = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphQuality.text(arguments[0]);
        } else {
            return this.el.recapGlyphQuality.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-level
     */
    this.recapGlyphLevel = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphLevel.text(arguments[0]);
        } else {
            return this.el.recapGlyphLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-stat-rating
     */
    this.recapGlyphStatRating = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphStatRating.text(arguments[0]);
        } else {
            return parseInt(this.el.recapGlyphStatRating.text());
        }
    };

    /**
     * Getter/Setter for #slot-recap-glyph-stat-text
     */
    this.recapGlyphStatText = function() {
        if (arguments.length == 1) {
            this.el.recapGlyphStatText.text(arguments[0]);
        } else {
            return this.el.recapGlyphStatText.text();
        }
    };

    /**
     * Update elements related to glyph's item/id
     */
    this.updateGlyph = function() {
        var newId = this.glyphId();

        this.glyphStatText(swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newId]);

        var img_path = 'assets/images/icons/glyph/' + newId + '.png';
        this.glyphImgItem(img_path);

        // display "Empty Glyph Slot" in the recap if glyphId is set to None
        if (newId == 'none') {
            this.el.recapGlyphSection.hide();
            this.el.recapGlyphEmpty.show();
        } else {
            this.el.recapGlyphSection.show();
            this.el.recapGlyphEmpty.hide();
            this.recapGlyphItem(swlcalc.data.glyph_stat_mapping.to_name[newId]);
            this.recapGlyphStatText(swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newId]);
        }
    };

    /**
     * Update elements related to glyph's rarity
     */
    this.updateGlyphRarity = function() {
        var newRarity = this.glyphRarity();

        this.glyphImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.el.recapGlyphTitle.attr('class', 'color-' + newRarity);
        this.el.glyphLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recapGlyphRarity(swlcalc.util.capitalize(newRarity));

        // refresh list of available qualities after change on glyph rarity :
        var elaborateOptionExists = ($('#' + this.id + '-glyph-quality option[value=4]').length > 0); // TODO/REFACTOR to abstract access
        if (swlcalc.data.rarity_mapping.to_num[this.glyphRarity()] >= 3 && !elaborateOptionExists) { // TODO/REFACTOR add global const like EPIC = 3 ?
            this.el.glyphQuality.append("<option value='4'>Elaborate</option>");
        } else if (swlcalc.data.rarity_mapping.to_num[this.glyphRarity()] < 3 && elaborateOptionExists) {
            $('#' + this.id + '-glyph-quality option[value=4]').remove(); // TODO/REFACTOR to abstract access
            this.updateGlyphQuality();
        }
    };

    /**
     * Update elements related to glyph's quality
     */
    this.updateGlyphQuality = function() {
        var newQuality = this.glyphQuality();

        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.glyphImgQuality(img_path);

        this.recapGlyphQuality(swlcalc.data.quality_mapping['glyph'].to_name[newQuality]);
    }

    /**
     * Update elements related to glyph's level
     */
    this.updateGlyphLevel = function() {
        var newLevel = this.glyphLevel();

        this.glyphLabelLevel(newLevel);
        this.recapGlyphLevel(newLevel);
    }

    /**
     * Update #slot-glyph-stat-rating (calculatations with stats data)
     *   INFO : in SWL a glyph rating value depends on its rarity-quality-level, neither the slot (head/major/minor) nor
     *   the glyph stat impact the calculation (whereas it was the case in TSW) => /!\ exception for crit power
     *   glyphs that give 97.3% of the value of other glyphs)
     */
    this.updateGlyphRating = function() {
        var newValue = 0;
        if (this.glyphId() != 'none') {
            var baseValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_init;
            var bonusValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_per_level * (this.glyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.glyphId() == 'critical-power') {
                newValue = 0.973 * newValue;
            }
            // remove decimals for display
            newValue = newValue.toFixed(0);
            // add '+' for display
            if (newValue !== 0) {
                newValue = '+' + newValue;
            }
        }
        this.glyphStatRating(newValue);
        this.recapGlyphStatRating(newValue);
    };

    /**
     * Update #slot-glyph-ilvl
     * -> Calculates item power for the slot's glyph and updates GUI with it
     */
    this.updateGlyphILvl = function() {
        var newILvl = 0;
        if (this.glyphId() != 'none') {
            newILvl = this.computeItemILvl('glyph', this.glyphRarity(), this.glyphLevel());
            // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                newILvl = newILvl * 1.225;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = newILvl;

        this.glyphILvl(Math.round(newILvl));
        this.updateILvl();
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
            return (this.isWeapon() ? undefined : parseInt(this.el.signetILvl.text()));
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

    /**
     * Getter/Setter for #slot-recap-signet-item
     */
    this.recapSignetItem = function() {
        if (arguments.length == 1) {
            this.el.recapSignetItem.text(arguments[0]);
        } else {
            return this.el.recapSignetItem.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-rarity
     */
    this.recapSignetRarity = function() {
        if (arguments.length == 1) {
            this.el.recapSignetRarity.text(arguments[0]);
        } else {
            return this.el.recapSignetRarity.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-level
     */
    this.recapSignetLevel = function() {
        if (arguments.length == 1) {
            this.el.recapSignetLevel.text(arguments[0]);
        } else {
            return this.el.recapSignetLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-description
     */
    this.recapSignetDescription = function() {
        if (arguments.length == 1) {
            this.el.recapSignetDescription.html(arguments[0]);
        } else {
            return this.el.recapSignetDescription.html();
        }
    };

    /**
     * Getter/Setter for #slot-recap-signet-bonus
     * => not accessible through like this.el.recapSignetBonus because this object doesnt exist at the beginning (like %-bonusN objects)
     */
    this.recapSignetBonus = function() {
        if (arguments.length == 1) {
            $('#' + this.id + '-recap-signet-bonus').text(arguments[0]);
        } else {
            return $('#' + this.id + '-recap-signet-bonus').text();
        }
    };

    /**
     * Update elements related to signet's item/id
     */
    this.updateSignet = function() {
        var newId = this.signetId();

        // retrieve full signet object from the data model
        var newSignet = (newId == 'none' ? swlcalc.data.signets.noneSignet : swlcalc.data.signets.slot[this.kind][this.signetId() - 1]);

        // update image
        var pngName = (newSignet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var img_path = 'assets/images/icons/signet/' + pngName + '.png';
        this.signetImgItem(img_path);

        var newDescription = newSignet.description;
        this.signetDescription(newDescription.replace(/%id/g, this.id));
        this.updateSignetBonus();

        // display "Empty Signet Slot" in the recap if signetId is set to None
        if (newId == 'none') {
            this.el.recapSignetSection.hide();
            this.el.recapSignetEmpty.show();
        } else {
            this.el.recapSignetSection.show();
            this.el.recapSignetEmpty.hide();
            // add "-recap" suffix here to avoid id collision
            this.recapSignetDescription(newDescription.replace(/%id/g, this.id + '-recap'));
            this.recapSignetItem(newSignet.name);
        }
    };


    /**
     * Update elements related to signet's rarity
     */
    this.updateSignetRarity = function() {
        var newRarity = this.signetRarity();

        this.signetImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.el.recapSignetTitle.attr('class', 'color-' + newRarity);
        this.el.signetLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recapSignetRarity(swlcalc.util.capitalize(newRarity));
    };

    /**
     * Update elements related to signet's level
     */
    this.updateSignetLevel = function() {
        var newLevel = this.signetLevel();

        this.signetLabelLevel(newLevel);
        this.recapSignetLevel(newLevel);
    };

    /**
     * Update the dynamic bonus displayed in the signet's description (#slot-signet-bonus)
     */
    // TODO to enhance
    this.updateSignetBonus = function(combatPower, healingPower){
        var newValue = 0;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1

        // TODO/REFACTOR : there should  a better way to handle the particular cases of Signet of Shoulder Tackle & Signet of Contortion
        if (this.signetId() != 'none') {
            var signet = swlcalc.data.signets.slot[this.kind][this.signetId() - 1]

            if (this.isWeapon()) {
                newValue = signet.quality[this.equipmentQuality()]
            } else if (signet.name == "Signet of Shoulder Tackle") {
                bonus1 = signet.ratio[this.signetRarity()].init[0];
                bonus2 = signet.ratio[this.signetRarity()].init[1]
                           - signet.ratio[this.signetRarity()].per_level[1] * (this.signetLevel() - 1);
                $('#' + this.id + '-signet-bonus').html(bonus1);
                $('#' + this.id + '-signet-bonus2').html(swlcalc.util.precisionRound(bonus2, 4));
                return;
            } else if (signet.name == "Signet of Contortion") {
                newValue = signet.ratio[this.signetRarity()].init
                           - signet.ratio[this.signetRarity()].per_level * (this.signetLevel() - 1)
            } else {
                newValue = signet.ratio[this.signetRarity()].init
                           + signet.ratio[this.signetRarity()].per_level * (this.signetLevel() - 1)
            }

            if (signet.stat != undefined) {
                if (signet.stat == 'Combat Power') {
                    coef = combatPower;
                } else if (signet.stat == 'Healing Power') {
                    coef = healingPower;
                }
            }
        }
        newValue *= coef
        newValue = swlcalc.util.precisionRound(newValue, 4)
        this.signetBonus(newValue);
        this.recapSignetBonus(newValue);
    };

    /**
     * Update #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var newILvl = 0;
        if (this.signetId() != 'none') {
            newILvl = this.computeItemILvl('signet', this.signetRarity(), this.signetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = newILvl;

        this.signetILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /**********************************************************************************
     * Other functions |
     *                 V
     **********************************************************************************/

    /**
     * Reset slot by setting default values for each select
     */
    this.reset = function() {
        this.el.equipmentId.prop("selectedIndex", 0);
        this.el.equipmentRarity.prop("selectedIndex", 0);
        this.el.equipmentQuality.prop("selectedIndex", 0);
        // no need to set equipmentLevel here

        this.el.glyphId.prop("selectedIndex", 0);
        this.el.glyphRarity.prop("selectedIndex", 0);
        this.el.glyphQuality.prop("selectedIndex", 0);
        this.el.glyphLevel.val("20");

        this.el.signetId.prop("selectedIndex", 0);
        this.el.signetRarity.prop("selectedIndex", 0);
        this.el.signetLevel.val("20");

        this.el.equipmentId.change();
        this.el.equipmentRarity.change();
        this.el.equipmentQuality.change();
        this.el.glyphId.change();
        this.el.glyphRarity.change();
        this.el.glyphQuality.change();
        this.el.glyphLevel.change();
        this.el.signetId.change();
        this.el.signetRarity.change();
        this.el.signetLevel.change();
        this.updateSignet();
    };

    /**
     * Mapping function for import/export feature
     */
    this.state = function() {
        return {
            equipment_rarity:  this.equipmentRarity(),
            equipment_quality: this.equipmentQuality(),
            equipment_level:   this.equipmentLevel(),
            glyph_id:          this.glyphId(),
            glyph_rarity:      this.glyphRarity(),
            glyph_quality:     this.glyphQuality(),
            glyph_level:       this.glyphLevel(),
            signet_id:         this.signetId(),
            signet_rarity:     this.signetRarity(),
            signet_level:      this.signetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var gmap  = swlcalc.data.glyph_stat_mapping.to_num;
        var rmap  = swlcalc.data.rarity_mapping.to_num;
        return {
            equipment_id:      this.stripContent(this.equipmentId()),
            equipment_rarity:  this.stripContent(this.equipmentRarity(), rmap),
            equipment_quality: this.equipmentQuality(),
            equipment_level:   this.equipmentLevel(),
            glyph_id:          this.stripContent(this.glyphId(), gmap),
            glyph_rarity:      this.stripContent(this.glyphRarity(), rmap),
            glyph_quality:     this.glyphQuality(),
            glyph_level:       this.glyphLevel(),
            signet_id:         this.stripContent(this.signetId()),
            signet_rarity:     this.stripContent(this.signetRarity(), rmap),
            signet_level:      this.stripContent(this.signetLevel())
        };
    };

    /**
     * Strips submitted content (= used by mappedState)
     */
    //TODO/REFACTOR : to change ? not clear
    this.stripContent = function(val, mapping) {
        if (val == null || val == 'none' || val === undefined) {
            return 0;
        } else if (mapping !== undefined) {
            return mapping[val];
        } else {
            return val;
        }
    };

    /**
     * Calculates item power for the given item (talisman, weapon, glyph or signet)
     */
    this.computeItemILvl = function(element, rarity, level) {
        var dataToUse = swlcalc.data.ilvl.gear[element].rarity[rarity];
        return dataToUse.ilvl_init + dataToUse.ilvl_per_level * (level - 1);
    }

    /**
     * TODO Comment
     */
    this.showEditModal = function() {
        this.el.editModal.show();
    };
    /**
     * TODO Comment
     */
    this.hideEditModal = function() {
        this.el.editModal.hide();
    };
};
