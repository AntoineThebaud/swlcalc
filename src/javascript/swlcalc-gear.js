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
        div:                  $('#' + this.id + '-slot'),
        iLvl:                 $('#' + this.id + '-ilvl'),
        equipmentId:          $('#' + this.id + '-equipment-id'),
        equipmentName:        $('#' + this.id + '-equipment-name'),
        equipmentRarity:      $('#' + this.id + '-equipment-rarity'),
        equipmentQuality:     $('#' + this.id + '-equipment-quality'),
        equipmentLevel:       $('#' + this.id + '-equipment-level'),
        equipmentPowerRating: $('#' + this.id + '-equipment-power-rating'),
        equipmentILvl:        $('#' + this.id + '-equipment-ilvl'),
        equipmentImgIcon:     $('#' + this.id + '-equipment-img-icon'),
        equipmentImgRarity:   $('#' + this.id + '-equipment-img-rarity'),
        equipmentImgQuality:  $('#' + this.id + '-equipment-img-quality'),
        equipmentLabelLevel:  $('#' + this.id + '-equipment-label-level'),
        equipmentDescription: $('#' + this.id + '-equipment-description'),
        glyphId:              $('#' + this.id + '-glyph-id'),
        glyphRarity:          $('#' + this.id + '-glyph-rarity'),
        glyphQuality:         $('#' + this.id + '-glyph-quality'),
        glyphLevel:           $('#' + this.id + '-glyph-level'),
        glyphRating:          $('#' + this.id + '-glyph-rating'),
        glyphLabel:           $('#' + this.id + '-glyph-label'),
        glyphImgIcon:         $('#' + this.id + '-glyph-img-icon'),
        glyphImgRarity:       $('#' + this.id + '-glyph-img-rarity'),
        glyphImgQuality:      $('#' + this.id + '-glyph-img-quality'),
        glyphLabelLevel:      $('#' + this.id + '-glyph-label-level'),
        glyphILvl:            $('#' + this.id + '-glyph-ilvl'),
        signetId:             $('#' + this.id + '-signet-id'),
        signetRarity:         $('#' + this.id + '-signet-rarity'),
        signetLevel:          $('#' + this.id + '-signet-level'),
        signetImgIcon:        $('#' + this.id + '-signet-img-icon'),
        signetImgRarity:      $('#' + this.id + '-signet-img-rarity'),
        signetDescription:    $('#' + this.id + '-signet-description'),
        signetLabelLevel:     $('#' + this.id + '-signet-label-level'),
        signetILvl:           $('#' + this.id + '-signet-ilvl'),
        nameWarning:          $('#' + this.id + '-name-warning'),

        editModal:            $('#' + this.id + '-edit-modal'),
        editBtn:              $('#' + this.id + '-editbtn'),
        recapEquipmentTitle  :$('#' + this.id + '-recap-equipment-title'),
        recapEquipmentItem   :$('#' + this.id + '-recap-equipment-item'),
        recapEquipmentQuality:$('#' + this.id + '-recap-equipment-quality'),
        recapEquipmentLevel:  $('#' + this.id + '-recap-equipment-level'),
        recapEquipmentImgIcon:$('#' + this.id + '-recap-equipment-img-item'),
        recapEquipmentImgRarity:$('#' + this.id + '-recap-equipment-img-rarity'),
        recapEquipmentImgQuality:$('#' + this.id + '-recap-equipment-img-quality')
    };

    /**
     * Getter/Setter for #slot-ilvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.html(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.html());
        }
    };

    /**
     * Updates #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     */
    this.updateILvl = function() {
        this.iLvl(Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl));
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
     * Getter to retrieve full equipment object from the data model
     */
    this.equipmentData = function() {
        return swlcalc.data.equipments.slot[this.kind][this.equipmentId() - 1];
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
     * Special Getter for #slot-equipment-level to retrieve any attribute value (like min, max..)
     */
    this.getAttrFromEquipmentLevel = function(attribute) {
        return this.el.equipmentLevel.attr(attribute);
    }

    /**
     * Getter/Setter for #slot-equipment-power-rating
     */
    this.equipmentPowerRating = function() {
        if (arguments.length == 1) {
            this.el.equipmentPowerRating.html(arguments[0]);
        } else {
            return parseInt(this.el.equipmentPowerRating.html());
        }
    };

    /**
     * Getter/Setter for #slot-equipment-iLvl
     */
    this.equipmentILvl = function() {
        if (arguments.length == 1) {
            this.el.equipmentILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.equipmentILvl.html());
        }
    };

    /**
     * Getter/Setter for #slot-equipment-description
     */
    this.equipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.equipmentDescription.html(arguments[0]);
        } else {
            return this.el.equipmentDescription.text();
        }
    };

    /**
     * Getter/Setter for any #slot-equipment-bonusN element (#slot-equipment-bonus1, #slot-equipment-bonus2, #slot-equipment-bonus3 ...)
     */
    this.equipmentBonusN = function() {
        if (arguments.length == 2) {
            $('#' + this.id + '-equipment-bonus' + arguments[0]).html(arguments[1]);
        } else if (arguments.length == 1) {
            return $('#' + this.id + '-equipment-bonus' + arguments[0]).html();
        } else {
            console.log("Error on this.equipmentBonusN() call")
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-icon
     */
    this.equipmentImgIcon = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgIcon.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgIcon.attr('src');
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
            this.el.equipmentLabelLevel.html(arguments[0]);
        } else {
            return this.el.equipmentLabelLevel.text();
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-item
     */
    this.recapEquipmentItem = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentItem.html(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentItem.html());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-quality
     */
    this.recapEquipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentQuality.html(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentQuality.html());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-level
     */
    this.recapEquipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentLevel.html(arguments[0]);
        } else {
            return parseInt(this.el.recapEquipmentLevel.html());
        }
    };

    /**
     * Getter/Setter for #slot-recap-equipment-img-icon
     */
    this.recapEquipmentImgIcon = function() {
        if (arguments.length == 1) {
            this.el.recapEquipmentImgIcon.attr('src', arguments[0])
        } else {
            return this.el.recapEquipmentImgIcon.attr('src');
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
     * Updates #slot-equipment-image + #slot-equipment-description
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        var newTitle;

        if (this.equipmentId() == 'none') {
            //To enable when all images will be present :
            // newImage = 'assets/images/icons/talisman/None.png';
            this.equipmentImgIcon('assets/images/icons/' + this.type + '/None.png');
            this.recapEquipmentImgIcon('assets/images/icons/' + this.type + '/None.png'); // TODO it's like duplicate call here, wrap these into updateImg function maybe ?
            newDescription = '';
            newTitle = 'Empty';
        } else {
            var newEquipment = this.equipmentData()
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/' + this.type + '/' + newEquipment.name + '.png';
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.equipmentImgIcon('assets/images/icons/' + self.type + '/' + newEquipment.name + '.png');
                self.recapEquipmentImgIcon('assets/images/icons/' + self.type + '/' + newEquipment.name + '.png');
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    self.equipmentImgIcon('assets/images/icons/' + self.type + '/temp/' + newEquipment.type + '.png');
                    self.recapEquipmentImgIcon('assets/images/icons/' + self.type + '/temp/' + newEquipment.type + '.png');
                } else {
                    self.equipmentImgIcon('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                    self.recapEquipmentImgIcon('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                }
            }
            image.src = 'assets/images/icons/' + this.type + '/' + newEquipment.name + '.png';
            /* temporary code ********************************************************************************/
            newDescription = newEquipment.description;
            newTitle = newEquipment.name;

            if (this.isWeapon()) {
                // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
                // TODO/REFACTOR : maybe there's a better way to achieve this..
                newDescription = newDescription.replace(/%id/g, this.id);
            }
        }
        //To enable when all images will be present :
        //this.equipmentImgIcon(newImage);
        this.equipmentDescription(newDescription);
        this.recapEquipmentItem(newTitle);
    };


    /**
     * Updates elements related to equipment's rarity + max available level for equipment
     */
    this.updateEquipmentRarity = function() {
        var newRarity = this.equipmentRarity();

        this.el.recapEquipmentTitle.attr('class', 'color-' + newRarity);
        var img_path = 'assets/images/icons/rarity/' + newRarity + '-42x42.png';
        this.equipmentImgRarity(img_path);
        this.recapEquipmentImgRarity(img_path);
        this.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);

        // update max available level for equipment :
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        this.el.equipmentLevel.attr('max', maxLvl)
        this.equipmentLevel(maxLvl);
        this.equipmentLabelLevel(this.equipmentLevel())
    };

    /**
     * Updates elements related to equipment's quality
     */
    this.updateEquipmentQuality = function() {
        var newQuality = this.equipmentQuality();

        this.recapEquipmentQuality(swlcalc.data.quality_mapping[this.type].to_name[newQuality]);
        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.equipmentImgQuality(img_path);
        this.recapEquipmentImgQuality(img_path);
    };

    /**
     * Updates elements related to equipment's level
     */
    this.updateEquipmentLevel = function() {
        var newLevel = this.equipmentLevel();

        this.equipmentLabelLevel(newLevel);
        this.recapEquipmentLevel(newLevel);
        // TODO : to add this.recapequipmentLabelLevel(newLevel);
    }

    /**
     * Updates #slot-equipment-power-rating (calculatations with stats data)
     */
    this.updateEquipmentPowerRating = function() {
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
        this.equipmentPowerRating(newValue);
    };

    /**
     * Updates #slot-equipment-ilvl
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
     * Updates every #slot-equipment-bonusN element
     */
    this.updateEquipmentBonuses = function(combatPower, healingPower) {
        if (this.equipmentBonusN(1) === undefined) return;
        var item = this.equipmentData();
        var statForComputation = 0;

        for (i = 0; i < item.coefficients.length; i++) {
            if (item.stats[i] == 'Combat Power') {
                statForComputation = combatPower;
            } else if (item.stats[i] == 'Healing Power') {
                statForComputation = healingPower;
            }
            this.equipmentBonusN(i + 1, Math.round(item.coefficients[i] * statForComputation));
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
     * Special Getter for #slot-glyph-level to retrieve any attribute value (like min, max..)
     */
    this.getAttrFromGlyphLevel = function(attribute) {
        return this.el.glyphLevel.attr(attribute);
    }

    /**
     * Getter/Setter for #slot-glyph-rating
     */
    this.glyphRating = function() {
        if (arguments.length == 1) {
            this.el.glyphRating.html(arguments[0]);
        } else {
            return parseInt(this.el.glyphRating.html());
        }
    };

    /**
     * Getter/Setter for #slot-glyph-label
     */
    this.glyphLabel = function() {
        if (arguments.length == 1) {
            this.el.glyphLabel.html(arguments[0]);
        } else {
            return this.el.glyphLabel.html();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-iLvl
     */
    this.glyphILvl = function() {
        if (arguments.length == 1) {
            this.el.glyphILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.glyphILvl.html());
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-icon
     */
    this.glyphImgIcon = function() {
        if (arguments.length == 1) {
            this.el.glyphImgIcon.attr('src', arguments[0])
        } else {
            return this.el.glyphImgIcon.attr('src');
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
            this.el.glyphLabelLevel.html(arguments[0]);
        } else {
            return this.el.glyphLabelLevel.text();
        }
    };

    /**
     * Updates #slot-glyph-quality (refresh list of available qualities after change on glyph rarity)
     */
    this.updateGlyphQuality = function() {
        var elaborateOptionExists = ($('#' + this.id + '-glyph-quality option[value=4]').length > 0); // TODO/REFACTOR to abstract access
        if (swlcalc.data.rarity_mapping.to_num[this.glyphRarity()] >= 3 && !elaborateOptionExists) { // TODO/REFACTOR add global const like EPIC = 3 ?
            this.el.glyphQuality.append("<option value='4'>Elaborate</option>");
        } else if (swlcalc.data.rarity_mapping.to_num[this.glyphRarity()] < 3 && elaborateOptionExists) {
            $('#' + this.id + '-glyph-quality option[value=4]').remove(); // TODO/REFACTOR to abstract access
            this.updateGlyphImgQuality();
        }
    }

    /**
     * Updates #slot-glyph-rating (calculatations with stats data)
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
        this.glyphRating(newValue);
    };

    /**
     * Updates #slot-glyph-img-icon
     */
    this.updateGlyphImgIcon = function() {
        var img_path = 'assets/images/icons/glyph/' + this.glyphId() + '.png';
        this.glyphImgIcon(img_path);
    };

    /**
     * Updates #slot-glyph-img-rarity
     */
    this.updateGlyphImgRarity = function() {
        var img_path = 'assets/images/icons/rarity/' + this.glyphRarity() + '-42x42.png';
        this.glyphImgRarity(img_path);
    };

    /**
     * Updates #slot-glyph-img-quality
     */
    this.updateGlyphImgQuality = function() {
        var img_path = 'assets/images/icons/quality/' + this.glyphQuality() + '.png'; // TODO maybe not accurate
        this.glyphImgQuality(img_path);
    };

    /**
     * Updates #slot-glyph-ilvl
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

    /**
     * Updates for #slot-glyph-label
     */
    this.updateGlyphLabel = function() {
        this.glyphLabel(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[this.glyphId()]);
    };

    /**
     * Updates #slot-glyph-label-level (text)
     */
    this.updateGlyphLabelLevelText = function() {
        this.glyphLabelLevel(this.glyphLevel())
    };

    /**
     * Updates #slot-glyph-label-level (border color)
     */
    this.updateGlyphLabelLevelColor = function() {
        this.el.glyphLabelLevel.attr('class', 'label-level little border-' + this.glyphRarity());
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Getter to retrieve full signet object from the data model
     */
    this.signetData = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
        }
        return swlcalc.data.signets.slot[this.kind][this.signetId() - 1];
    };

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
     * Special Getter for #slot-signet-level to retrieve any attribute value (like min, max..)
     */
    this.getAttrFromSignetLevel = function(attribute) {
        return this.el.signetLevel.attr(attribute);
    }

    /**
     * Getter/Setter for #slot-signet-ilvl
     */
    this.signetILvl = function() {
        if (arguments.length == 1) {
            this.el.signetILvl.html(arguments[0]);
        } else {
            return (this.isWeapon() ? undefined : parseInt(this.el.signetILvl.html()));
        }
    };

    /**
     * Builds (calculates) signet description
     */
    //TODO/FEATURE : to use for signets like in tswcalc
    this.signetDescription = function() {
        if (arguments.length == 1) {
            this.el.signetDescription.html(arguments[0]);
        } else {
            return this.el.signetDescription.text();
        }
    };

    /**
     * Getter/Setter for #id-signet-bonus
     */
    this.signetBonus = function() {
        if (arguments.length == 1) {
            $('#' + this.id + '-signet-bonus').html(arguments[0]);
        } else {
            return $('#' + this.id + 'signet-bonus').html();
        }
    };

    /**
     * Getter/Setter for #slot-signet-img-icon
     */
    this.signetImgIcon = function() {
        if (arguments.length == 1) {
            this.el.signetImgIcon.attr('src', arguments[0])
        } else {
            return this.el.signetImgIcon.attr('src');
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
            this.el.signetLabelLevel.html(arguments[0]);
        } else {
            return this.el.signetLabelLevel.text();
        }
    };

    /**
     * Updates signet (#slot-signet-icon + #slot-signet-description)
     */
    this.updateSignet = function() {
        this.updateSignetImgIcon();
        this.updateSignetImgRarity();

        var signet = this.signetData();
        var newDescription = signet.description;
        if (this.isWeapon()) {
            // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
            // TODO/REFACTOR : maybe there's a better way to achieve this..
            newDescription = newDescription.replace(/%id/g, this.id);
        }
        this.signetDescription(newDescription);

        this.updateSignetBonus();
    };

    /**
     * Updates #slot-signet-img-icon
     */
    this.updateSignetImgIcon = function() {
        var signet = this.signetData();
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var img_path = 'assets/images/icons/signet/' + pngName + '.png';
        this.signetImgIcon(img_path);
    };

    /**
     * Getter/Setter for #slot-signet-img-rarity
     */
    this.updateSignetImgRarity = function() {
        var img_path = 'assets/images/icons/rarity/' + this.signetRarity() + '-42x42.png';
        this.signetImgRarity(img_path);
    };

    /**
     * Setter for #slot-signet-description
     */
    //TODO/REFACTOR : change name/responsability / or delete function, according to the previous Getter/Setter/"updateer" functions ?
    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Updates the dynamic bonus displayed in the signet's description (#slot-signet-bonus)
     */
    // TODO to enhance
    this.updateSignetBonus = function(combatPower, healingPower){
        var newValue = 0;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1

        // TODO/REFACTOR : there should  a better way to handle the particular cases of Signet of Shoulder Tackle & Signet of Contortion
        if (this.signetData().id != 0) {
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
    };

    /**
     * Updates #slot-signet-ilvl
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

    /**
     * Updates #slot-signet-label-level (text)
     */
    this.updateSignetLabelLevelText = function() {
        this.signetLabelLevel(this.signetLevel())
    };

    /**
     * Updates #slot-signet-label-level (border color)
     */
    this.updateSignetLabelLevelColor = function() {
        this.el.signetLabelLevel.attr('class', 'label-level little border-' + this.signetRarity());
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
