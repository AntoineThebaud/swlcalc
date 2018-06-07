var swlcalc = swlcalc || {};

swlcalc.slots = function() {
    //this method can only be called after the document is ready
    var init = function() {
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotData = swlcalc.data.template_data.slots[i];
            this[slotData.id_prefix] = new swlcalc.slots.Slot(slotData.id_prefix, slotData.name, slotData.group);
            this[slotData.id_prefix].el.nameWarning.hide();
        }
        drawPrimaryWeapon();
    };

    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        swlcalc.slots.weapon2.sheathWeapon();
        swlcalc.slots.weapon.weaponDrawn = true;
    };

    /**
     * Returns the number of slots of a gear (= 9 as of now)
     */
    var length = function() {
        return swlcalc.data.template_data.slots.length;
    };

    /**
     * Defines the list of slots names
     */
    //TODO/REFACTOR : to change : redundancy with swlcalc-data-slots.js
    var indices = function() {
        return ['head', 'weapon', 'weapon2', 'finger', 'neck', 'wrist', 'luck', 'waist', 'occult'];
    };

    /**
     * Returns true if a slot of the name <parameter> exists
     */
    //TODO/REFACTOR : to find a solution to remove hasSlot
    var hasSlot = function(slot) {
        return this.hasOwnProperty(slot) && $.inArray(slot, indices()) != -1;
    };

    /**
     * Resets all slots
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var reset = function() {
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                this[slotId].reset();
            }
        }
    };

    /**
     * Returns the list of slots states
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var state = function() {
        var slotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                slotStates[slotId] = this[slotId].state();
            }
        }
        return slotStates;
    };

    /**
     * Returns the list of slots states (mapped version)
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                mappedSlotStates[slotId] = this[slotId].mappedState();
            }
        }
        return mappedSlotStates;
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init,
        length: length,
        indices: indices,
        hasSlot: hasSlot,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();

swlcalc.slots.Slot = function Slot(id, name, group) {
    var self = this;
    this.id = id;
    this.name = name;
    this.group = group;
    this.weaponDrawn = false;

    // for calculations precision issues
    this.rawILvl = 0.0;
    this.rawGlyphILvl = 0.0;
    this.rawSignetILvl = 0.0;

    this.el = {
        div: $('#' + this.id + '-slot'),
        name: $('#' + this.id + '-name'),
        totalILvl: $('#' + this.id + '-total-ilvl'),
        itemId: $('#' + this.id + '-itemId'), //TODO/refactor : remove "Id" ?
        wtype: $('#' + this.id + '-wtype'),
        rarity: $('#' + this.id + '-rarity'),
        quality: $('#' + this.id + '-quality'),
        level: $('#' + this.id + '-level'),
        powerRating: $('#' + this.id + '-power-rating'),
        iLvl: $('#' + this.id + '-ilvl'),
        imgIcon: $('#' + this.id + '-img-icon'),
        imgBorder: $('#' + this.id + '-img-rarity'),
        description: $('#' + this.id + '-description'),
        glyph: $('#' + this.id + '-glyph'),
        glyphRarity: $('#' + this.id + '-glyph-rarity'),
        glyphQuality: $('#' + this.id + '-glyph-quality'),
        glyphLevel: $('#' + this.id + '-glyph-level'),
        glyphRating: $('#' + this.id + '-glyph-rating'),
        glyphStat: $('#' + this.id + '-glyph-stat'),
        glyphImgIcon: $('#' + this.id + '-glyph-img-icon'),
        glyphImgBorder: $('#' + this.id + '-glyph-img-rarity'),
        glyphILvl: $('#' + this.id + '-glyph-ilvl'),
        signetId: $('#' + this.id + '-signet'),
        signetRarity: $('#' + this.id + '-signet-rarity'),
        signetLevel: $('#' + this.id + '-signet-level'),
        signetImgIcon: $('#' + this.id + '-signet-img-icon'),
        signetImgBorder: $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        signetILvl: $('#' + this.id + '-signet-ilvl'),
        nameWarning: $('#' + this.id + '-name-warning'),
    };

    /**
     * Getter/Setter for #slot-name
     */
    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
    };

    /**
     * Getter/Setter for #slot-total-ilvl
     */
    this.totalILvl = function() {
        if (arguments.length == 1) {
            this.el.totalILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.totalILvl.html());
        }
    };

    /**
     * Updates #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     */
    this.refreshTotalILvl = function() {
        this.totalILvl(Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl));
    };

    /**********************************************************************************
     * Weapon functions |
     *                  V
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
     * Getter/Setter for #slot-wtype
     */
    this.wtype = function() {
        if (arguments.length == 1) {
            this.el.wtype.val(arguments[0]);
        } else {
            return this.isWeapon() ? this.el.wtype.val() : 'none';
        }
    };

    /**********************************************************************************
     * Item functions |
     *                V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-itemId
     */
    this.itemId = function() {
        if (arguments.length == 1) {
            this.el.itemId.val(arguments[0]);
        } else {
            return this.group != 'weapon' ? this.el.itemId.val() : 'none';
        }
    };

    /**
     * Getter to retrieve full item object from the data model
     */
    this.getItem = function() {
        return swlcalc.data.items.slot[this.id][this.itemId() - 1];
    };

    /**
     * Getter/Setter for #slot-rarity
     */
    this.rarity = function() {
        if (arguments.length == 1) {
            this.el.rarity.val(arguments[0]);
        } else {
            return this.el.rarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-quality
     */
    this.quality = function() {
        if (arguments.length == 1) {
            this.el.quality.val(arguments[0]);
        } else {
            return this.el.quality.val();
        }
    };

    /**
     * Getter/Setter for #slot-level
     */
    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    /**
     * Getter/Setter for #slot-power-rating
     */
    this.powerRating = function() {
        if (arguments.length == 1) {
            this.el.powerRating.html(arguments[0]);
        } else {
            return parseInt(this.el.powerRating.html());
        }
    };

    /**
     * Getter/Setter for #slot-iLvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.html(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.html());
        }
    };

    /**
     * Getter/Setter for #slot-description
     */
    this.description = function() {
        if (arguments.length == 1) {
            this.el.description.html(arguments[0]);
        } else {
            return this.el.description.text();
        }
    };

    /**
     * Getter/Setter for #slot-bonus
     */
    this.bonus = function() {
        if (arguments.length == 1) {
            //this.el.bonus.html(arguments[0]);
            $('#' + this.id + '-bonus').html(arguments[0]);
        } else {
            //return this.el.bonus.html();
            return $('#' + this.id + '-bonus').html();
        }
    };

    /**
     * Getter/Setter for #slot-bonus2
     */
    // TODO/REFACTOR : to avoid code duplication with this.bonus()
    this.bonus2 = function() {
        if (arguments.length == 1) {
            //this.el.bonus.html(arguments[0]);
            $('#' + this.id + '-bonus2').html(arguments[0]);
        } else {
            //return this.el.bonus.html();
            return $('#' + this.id + '-bonus2').html();
        }
    };

    /**
     * Getter/Setter for #slot-img-icon
     */
    this.imgIcon = function() {
        if (arguments.length == 1) {
            this.el.imgIcon.attr('src', arguments[0])
        } else {
            return this.el.imgIcon.attr('src');
        }
    };

    /**
     * Updates #slot-image + #slot-description
     */
    this.updateItem = function() {
        var newImage;
        var newDescription;
        if (this.itemId() == 'none') {
            //To enable when all images will be present :
            // newImage = 'assets/images/icons/talisman/None.png';
            this.imgIcon('assets/images/icons/talisman/None.png');
            newDescription = '';
        } else {
            var newSelectedItem = swlcalc.data.items.slot[this.id][this.itemId() - 1];
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/talisman/' + newSelectedItem.name + '.png';
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.imgIcon('assets/images/icons/talisman/' + newSelectedItem.name + '.png');
            }
            image.onerror = function() {
                self.imgIcon('assets/images/icons/talisman/' + swlcalc.data.items.slot[self.id][0].name + '.png');
            }
            image.src = "assets/images/icons/talisman/" + newSelectedItem.name + ".png";
            /* temporary code ********************************************************************************/
            newDescription = newSelectedItem.description;
        }
        //To enable when all images will be present :
        //this.imgIcon(newImage);
        this.description(newDescription);
    };

    /**
     * Updates #slot-power-rating (calculatations with stats data)
     */
    this.updatePowerRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        // calculation rule for weapons
        if (this.isWeapon()) {
            if (this.wtype() != 'none') {
                base_value = swlcalc.data.power_rating['weapon'][this.rarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating['weapon'][this.rarity()].weapon_power_per_level * (this.level() - 1);
            }
        }
        // calculation rule for talismans
        else {
            if (this.itemId() != 'none') {
                base_value = swlcalc.data.power_rating[this.group][this.rarity()][this.quality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.group][this.rarity()][this.quality()].power_rating_per_level * (this.level() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        // add '+' for display
        if (newValue !== 0) {
            newValue = '+' + newValue;
        }
        this.powerRating(newValue);
    };

    /**
     * Setter for #slot-img-icon (talisman)
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateTalismanImgIcon = function() {
        var item_url = 'assets/images/icons/talisman/' + $("#" + this.id + "-itemId option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    /**
     * Setter for #slot-img-icon (weapon)
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateWeaponImgIcon = function() {
        var item_url = 'assets/images/icons/weapon/' + $("#" + this.id + "-wtype option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    /**
     * Setter for #slot-img-rarity
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-rarity option:selected").val() + '-42x42.png';
        this.el.imgBorder.attr('src', rarity_url);
    };

    /**
     * Updates #slot-ilvl
     * -> Calculates item power for the slot's talisman (or weapon) and updates GUI with it
     */
    this.updateILvl = function() {
        var calculatedILvl = 0;
        if (!(this.itemId() == 'none' && this.wtype() == 'none')) {
            calculatedILvl = this.calculateILvl('talisman-or-weapon', this.rarity(), this.level());
            // Weapons are worth ~15% more Item Power than talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                calculatedILvl = calculatedILvl * 1.15;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawILvl = calculatedILvl;

        this.iLvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };

    /**
     * Updates #slot-bonus + #slot-bonus2
     */
    this.refreshItemBonus = function(combatPower, healingPower) {
        if (this.bonus() === undefined) return;
        var item = this.getItem();
        var statForComputation = 0;
        if (item.stat == 'Combat Power') {
            statForComputation = combatPower;
        } else if (item.stat == 'Healing Power') {
            statForComputation = healingPower;
        }
        this.bonus(Math.round(item.coefficient * statForComputation));

        // particular case : items with 2 dynamic values
        // TODO/REFACTOR : to avoid code duplication
        if (this.bonus2() !== undefined) {
            item = this.getItem();
            statForComputation = 0;
            if (item.stat2 == 'Combat Power') {
                statForComputation = combatPower;
            } else if (item.stat2 == 'Healing Power') {
                statForComputation = healingPower;
            }
            this.bonus2(Math.round(item.coefficient2 * statForComputation));
        }
    }

    /**********************************************************************************
     * Glyph functions |
     *                 V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-glyph
     */
    this.glyph = function() {
        if (arguments.length == 1) {
            this.el.glyph.val(arguments[0]);
        } else {
            return this.el.glyph.val();
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
     * Updates #slot-glyph-rating (calculatations with stats data)
     *   INFO : in SWL a glyph rating value depends on its rarity-quality-level, neither the slot (head/major/minor) nor
     *   the glyph stat impact the calculation (whereas it was the case in TSW) => /!\ exception for crit power
     *   glyphs that give 97.3% of the value of other glyphs)
     */
    this.updateGlyphRating = function() {
        var newValue = 0;
        if (this.glyph() != 'none') {
            var baseValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_init;
            var bonusValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_per_level * (this.glyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.glyph() == 'critical-power') {
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
     * Setter for #slot-glyph-stat
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateGlyphStatLabel = function() {
        var newStat = $("#" + this.id + "-glyph option:selected").val();
        this.el.glyphStat.html(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newStat]);
    };

    /**
     * Setter for #slot-glyph-img-icon
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgIcon = function() {
        var rarity_url = 'assets/images/icons/glyph/' + $("#" + this.id + "-glyph option:selected").val() + '.png';
        this.el.glyphImgIcon.attr('src', rarity_url);
    };

    /**
     * Setter for #slot-glyph-img-border
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-glyph-rarity option:selected").val() + '-42x42.png';
        this.el.glyphImgBorder.attr('src', rarity_url);
    };

    /**
     * Updates #slot-glyph-ilvl
     * -> Calculates item power for the slot's glyph and updates GUI with it
     */
    this.updateGlyphILvl = function() {
        var calculatedILvl = 0;
        if (this.glyph() != 'none') {
            calculatedILvl = this.calculateILvl('glyph', this.glyphRarity(), this.glyphLevel());
            // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                calculatedILvl = calculatedILvl * 1.225;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = calculatedILvl;

        this.glyphILvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Big mess here
     */
    //TODO/REFACTOR : move code and delete this function ?
    this.signet = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
     // } else if (this.id == 'weapon' || this.id == 'weapon2') {
     //     return swlcalc.data.suffixes.slot[this.signetId()];
        } else {
            //TODO/REFACTOR : patch to improve
            var idToUse = (this.id == 'weapon2' ? 'weapon' : this.id);
            return swlcalc.data.signets.slot[idToUse][this.signetId() - 1];
        }
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
        var signet = this.signet();
        if (signet === null) {
            return '';
        }
        var description = signet.description;
        if(signet.rarity) {
            description = description.replace('%s', this.determineSignetRarityValue(signet));
            description = description.replace('%d', this.determineSignetRarityValue(signet));
            if (Object.prototype.toString.call(signet.rarity) === '[object Array]') {
                description = description.replace('%0', this.determineSignetRarityValue(signet, 0));
                description = description.replace('%1', this.determineSignetRarityValue(signet, 1));
            }
        }
        if (signet.cooldown && signet.cooldown != '0') {
            description += ' ' + signet.cooldown + ' seconds cooldown.';
        }

        return description;
    };

    /**
     * Determines signet rarity value
     */
    //TODO/FEATURE : to use for signets like in tswcalc
    //TODO/REFACTOR : is it still accurate in swlcalc ?
    this.determineSignetRarityValue = function(signet, quality_index) {
        quality_index = typeof quality_index !== 'undefined' ? quality_index : -1;
        var rarity = this.signetRarity();
        switch (rarity) {
            case 'none':
                return 0;
            case 'standard':
                return quality_index == -1 ? signet.rarity.normal : signet.rarity[quality_index].normal;
            case 'superior':
                return quality_index == -1 ? signet.rarity.superior : signet.rarity[quality_index].superior;
            case 'epic':
                return quality_index == -1 ? signet.rarity.epic : signet.rarity[quality_index].epic;
            case 'mythic':
                return quality_index == -1 ? signet.rarity.mythic : signet.rarity[quality_index].mythic;
            case 'legendary':
                return quality_index == -1 ? signet.rarity.mythic : signet.rarity[quality_index].legendary;
            default:
                return 0;
        }
    };

    /**
     * Updates signet
     */
    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };

    /**
     * Updates signet icon
     */
    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetRarity = this.signetRarity();
        this.updateSignetIconImage(signet);
        this.updateSignetIconBorder(signetRarity);
    };

    /**
     * Updates #slot-signet-img-icon
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateSignetIconImage = function(signet) {
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var signet_icon_url = 'assets/images/icons/signet/' + pngName + '.png';
        this.el.signetImgIcon.attr('src', signet_icon_url);
    };

    /**
     * Getter/Setter for #slot-signet-img-border
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateSignetIconBorder = function(signetRarity) {
        var signet_rarity_url = 'assets/images/icons/rarity/' + signetRarity + '-42x42.png';
        this.el.signetImgBorder.attr('src', signet_rarity_url);
    };

    /**
     * Setter for #slot-signet-description
     */
    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Updates #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var calculatedILvl = 0;
        if (this.signetId() != 'none') {
            calculatedILvl = this.calculateILvl('signet', this.signetRarity(), this.signetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = calculatedILvl;

        this.signetILvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };

    /**********************************************************************************
     * Other functions |
     *                 V
     **********************************************************************************/

    /**
     * Reset slot by setting default values for each select
     */
    this.reset = function() {
        this.el.wtype.prop("selectedIndex", 0);
        this.el.itemId.prop("selectedIndex", 0);
        this.el.rarity.prop("selectedIndex", 0);
        this.el.quality.prop("selectedIndex", 0);
        //this.el.itemId.change();

        this.el.glyph.prop("selectedIndex", 0);
        this.el.glyphRarity.prop("selectedIndex", 0);
        this.el.glyphQuality.prop("selectedIndex", 0);
        this.el.glyphLevel.prop("selectedIndex", 0);

        this.el.signetId.prop("selectedIndex", 0);
        this.el.signetRarity.prop("selectedIndex", 0);
        this.el.signetLevel.prop("selectedIndex", 0);

        this.el.itemId.change();
        this.el.wtype.change();
        this.el.rarity.change();
        this.el.glyph.change();
        this.el.glyphRarity.change();
        this.el.signetId.change();
        this.el.signetRarity.change();
        this.updateSignet();
    };

    /**
     * Mapping function for import/export feature
     */
    this.state = function() {
        return {
            rarity: this.rarity(),
            quality: this.quality(),
            level: this.level(),
            glyph: this.glyph(),
            glyph_rarity: this.glyphRarity(),
            glyph_quality: this.glyphQuality(),
            glyph_level: this.glyphLevel(),
            signet_id: this.signetId(),
            signet_rarity: this.signetRarity(),
            signet_level: this.signetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var wmap = swlcalc.data.wtype_mapping.to_num;
        var gmap = swlcalc.data.glyph_stat_mapping.to_num;
        var rmap = swlcalc.data.rarity_mapping.to_num;
        var wqmap = swlcalc.data.weapon_quality_mapping.to_num;
        var gqmap = swlcalc.data.glyph_quality_mapping.to_num;
        var tqmap = swlcalc.data.talisman_quality_mapping.to_num;
        return {
            itemId: this.stripContent(this.itemId()),
            wtype: this.stripContent(this.wtype(), wmap),
            rarity: this.stripContent(this.rarity(), rmap),
            quality: this.isWeapon() ? this.stripContent(this.quality(), wqmap) : this.stripContent(this.quality(), tqmap),
            level: this.level(),
            glyph: this.stripContent(this.glyph(), gmap),
            glyph_rarity: this.stripContent(this.glyphRarity(), rmap),
            glyph_quality: this.stripContent(this.glyphQuality(), gqmap),
            glyph_level: this.glyphLevel(),
            signet_id: this.stripContent(this.signetId()),
            signet_rarity: this.stripContent(this.signetRarity(), rmap),
            signet_level: this.stripContent(this.signetLevel())
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
    this.calculateILvl = function(element, rarity, level) {
        var dataToUse = swlcalc.data.ilvl.gear[element].rarity[rarity];
        return dataToUse.ilvl_init + dataToUse.ilvl_per_level * (level - 1);
    }
};
