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
            this.slots[slotData.id_prefix] = new swlcalc.gear.Slot(slotData);
            this.slots[slotData.id_prefix].el.nameWarning.hide();
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
    this.id = slotData.id_prefix;
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
        div:               $('#' + this.id + '-slot'),
        name:              $('#' + this.id + '-name'),
        totalILvl:         $('#' + this.id + '-total-ilvl'),
        itemId:            $('#' + this.id + '-itemId'),
        rarity:            $('#' + this.id + '-rarity'),
        quality:           $('#' + this.id + '-quality'),
        level:             $('#' + this.id + '-level'),
        powerRating:       $('#' + this.id + '-power-rating'),
        iLvl:              $('#' + this.id + '-ilvl'),
        imgIcon:           $('#' + this.id + '-img-icon'),
        imgBorder:         $('#' + this.id + '-img-rarity'),
        description:       $('#' + this.id + '-description'),
        glyph:             $('#' + this.id + '-glyph'),
        glyphRarity:       $('#' + this.id + '-glyph-rarity'),
        glyphQuality:      $('#' + this.id + '-glyph-quality'),
        glyphLevel:        $('#' + this.id + '-glyph-level'),
        glyphRating:       $('#' + this.id + '-glyph-rating'),
        glyphLabel:        $('#' + this.id + '-glyph-label'),
        glyphImgIcon:      $('#' + this.id + '-glyph-img-icon'),
        glyphImgBorder:    $('#' + this.id + '-glyph-img-rarity'),
        glyphILvl:         $('#' + this.id + '-glyph-ilvl'),
        signetId:          $('#' + this.id + '-signet'),
        signetRarity:      $('#' + this.id + '-signet-rarity'),
        signetLevel:       $('#' + this.id + '-signet-level'),
        signetImgIcon:     $('#' + this.id + '-signet-img-icon'),
        signetImgBorder:   $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        signetILvl:        $('#' + this.id + '-signet-ilvl'),
        nameWarning:       $('#' + this.id + '-name-warning'),
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
     * Item functions | (talismans + weapons)
     *                V
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
     * Getter/Setter for #slot-itemId
     */
    this.itemId = function() {
        if (arguments.length == 1) {
            this.el.itemId.val(arguments[0]);
        } else {
            return this.el.itemId.val();
        }
    };

    /**
     * Getter to retrieve full item object from the data model
     */
    this.getItem = function() {
        var slotToUse = this.id
        //TODO/REFACTOR : maybe there is a better way to get weapon items for secondary weapon
        if (this.isWeapon()) {
            slotToUse = 'weapon';
        }
        return swlcalc.data.items.slot[slotToUse][this.itemId() - 1];
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
     * Getter/Setter for #slot-img-rarity
     */
    this.imgBorder = function() {
        if (arguments.length == 1) {
            this.el.imgBorder.attr('src', arguments[0])
        } else {
            return this.el.imgBorder.attr('src');
        }
    };

    /**
     * Getter/Setter for any #slot-bonusN element (#slot-bonus1, #slot-bonus2, #slot-bonus3 ...)
     */
    this.bonusN = function() {
        if (arguments.length == 2) {
            $('#' + this.id + '-bonus' + arguments[0]).html(arguments[1]);
        } else if (arguments.length == 1) {
            return $('#' + this.id + '-bonus' + arguments[0]).html();
        } else {
            console.log("Error on this.bonusN() call")
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
            this.imgIcon('assets/images/icons/' + this.type + '/None.png');
            newDescription = '';
        } else {
            var newSelectedItem = swlcalc.data.items.slot[this.kind][this.itemId() - 1];
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/' + this.type + '/' + newSelectedItem.name + '.png';
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.imgIcon('assets/images/icons/' + self.type + '/' + newSelectedItem.name + '.png');
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    self.imgIcon('assets/images/icons/' + self.type + '/temp/' + newSelectedItem.type + '.png');
                } else {
                    self.imgIcon('assets/images/icons/' + self.type + '/' + swlcalc.data.items.slot[self.id][0].name + '.png');
                }
            }
            image.src = 'assets/images/icons/' + this.type + '/' + newSelectedItem.name + '.png';
            /* temporary code ********************************************************************************/
            newDescription = newSelectedItem.description;

            if (this.isWeapon()) {
                // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
                // TODO/REFACTOR : maybe there's a better way to achieve this..
                newDescription = newDescription.replace(/%id/g, this.id);
            }
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
        if (this.itemId() != 'none') {
            // calculation rule for weapons
            if (this.isWeapon()) {
                base_value = swlcalc.data.power_rating.weapon[this.rarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating.weapon[this.rarity()].weapon_power_per_level * (this.level() - 1);
            }
            // calculation rule for talismans
            else {
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
     * Updates #slot-img-rarity
     */
    this.updateImgBorder = function() {
        var img_path = 'assets/images/icons/rarity/' + this.rarity() + '-42x42.png';
        this.imgBorder(img_path);
    };

    /**
     * Updates #slot-ilvl
     * -> Calculates item power for the slot's talisman (or weapon) and updates GUI with it
     */
    this.updateILvl = function() {
        var calculatedILvl = 0;
        if (!(this.itemId() == 'none')) {
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
     * Updates every #slot-bonusN element
     */
    this.refreshItemBonuses = function(combatPower, healingPower) {
        if (this.bonusN(1) === undefined) return;
        var item = this.getItem();
        var statForComputation = 0;

        for (i = 0; i < item.coefficients.length; i++) {
            if (item.stats[i] == 'Combat Power') {
                statForComputation = combatPower;
            } else if (item.stats[i] == 'Healing Power') {
                statForComputation = healingPower;
            }
            this.bonusN(i + 1, Math.round(item.coefficients[i] * statForComputation));
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
    this.glyphImgBorder = function() {
        if (arguments.length == 1) {
            this.el.glyphImgBorder.attr('src', arguments[0])
        } else {
            return this.el.glyphImgBorder.attr('src');
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
     * Updates #slot-glyph-img-icon
     */
    this.updateGlyphImgIcon = function() {
        var img_path = 'assets/images/icons/glyph/' + this.glyph() + '.png';
        this.glyphImgIcon(img_path);
    };

    /**
     * Updates #slot-glyph-img-rarity
     */
    this.updateGlyphImgBorder = function() {
        var img_path = 'assets/images/icons/rarity/' + this.glyphRarity() + '-42x42.png';
        this.glyphImgBorder(img_path);
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

    /**
     * Updates for #slot-glyph-label
     */
    this.updateGlyphLabel = function() {
        this.glyphLabel(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[this.glyph()]);
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Getter to retrieve full signet object from the data model
     */
    //TODO : find better name for getSignet method (and also getItem above)
    this.getSignet = function() {
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
     * Updates signet (#slot-signet-icon + #slot-signet-description)
     */
    this.updateSignet = function() {
        this.updateSignetIcon();

        var signet = this.getSignet();
        var newDescription = signet.description;
        if (this.isWeapon()) {
            // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
            // TODO/REFACTOR : maybe there's a better way to achieve this..
            newDescription = newDescription.replace(/%id/g, this.id);
        }
        this.signetDescription(newDescription);

        this.refreshSignetBonus();
    };

    /**
     * Updates signet icon
     */
    this.updateSignetIcon = function() {
        var signet = this.getSignet();
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
     * Updates the dynamic bonus displayed in the signet's description (#slot-signet-bonus)
     */
    // TODO to enhance
    this.refreshSignetBonus = function(combatPower, healingPower){
        var newValue = 0;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1

        // TODO/REFACTOR : there should  a better way to handle the particular cases of Signet of Shoulder Tackle & Signet of Contortion
        if (this.getSignet().id != 0) {
            var signet = swlcalc.data.signets.slot[this.kind][this.signetId() - 1]

            if (this.isWeapon()) {
                newValue = signet.quality[this.quality()]
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
            rarity:        this.rarity(),
            quality:       this.quality(),
            level:         this.level(),
            glyph:         this.glyph(),
            glyph_rarity:  this.glyphRarity(),
            glyph_quality: this.glyphQuality(),
            glyph_level:   this.glyphLevel(),
            signet_id:     this.signetId(),
            signet_rarity: this.signetRarity(),
            signet_level:  this.signetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var gmap  = swlcalc.data.glyph_stat_mapping.to_num;
        var rmap  = swlcalc.data.rarity_mapping.to_num;
        var wqmap = swlcalc.data.weapon_quality_mapping.to_num;
        var gqmap = swlcalc.data.glyph_quality_mapping.to_num;
        var tqmap = swlcalc.data.talisman_quality_mapping.to_num;
        return {
            itemId:        this.stripContent(this.itemId()),
            rarity:        this.stripContent(this.rarity(), rmap),
            quality:       this.isWeapon() ? this.stripContent(this.quality(), wqmap) : this.stripContent(this.quality(), tqmap),
            level:         this.level(),
            glyph:         this.stripContent(this.glyph(), gmap),
            glyph_rarity:  this.stripContent(this.glyphRarity(), rmap),
            glyph_quality: this.stripContent(this.glyphQuality(), gqmap),
            glyph_level:   this.glyphLevel(),
            signet_id:     this.stripContent(this.signetId()),
            signet_rarity: this.stripContent(this.signetRarity(), rmap),
            signet_level:  this.stripContent(this.signetLevel())
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