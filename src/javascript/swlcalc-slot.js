var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Slot = function Slot(slotData) {
    var self      = this;
    this.id       = slotData.id;
    this.name     = slotData.name;
    this.kind     = slotData.kind;
    this.group    = slotData.group;
    this.subgroup = slotData.subgroup;
    this.edit     = new swlcalc.gear.SlotEdit(slotData);
    this.recap    = new swlcalc.gear.SlotRecap(slotData);
    this.active   = true;

    // vars used to solve computation precision issues
    this.rawILvl = 0.0;
    this.rawGlyphILvl = 0.0;
    this.rawSignetILvl = 0.0;

    /**********************************************************************************
     * Slot functions | (related to the whole gear slot)
     *                V
     **********************************************************************************/

     /**
      * Returns true if the slot belongs to the weapon group
      */
     this.isWeapon = function() {
         return this.group == 'weapon';
     };

    /**
     * Slot becomes active. For weapons only.
     */
    this.draw = function() {
        this.active = true;
        // show "Active Weapon" label
        this.recap.el.weaponActive.show();
        this.recap.el.div.addClass("weapon-active-div");
    };

    /**
     * Slot becomes passive. For weapons only.
     */
    this.sheath = function() {
        this.active = false;
        // hide "Active Weapon" label
        this.recap.el.weaponActive.hide();
        this.recap.el.div.removeClass("weapon-active-div");
    };

    /**
     * Update #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     * (because reusing the rounded values returned by equipmentILvl(), glyphILvl() and signetILvl() would lead to wrong result)
     */
    this.updateILvl = function() {
        var newILvl = Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl);

        this.edit.iLvl(newILvl);
        this.recap.iLvl(newILvl);
    };

    /**********************************************************************************
     * Equipment functions | (talismans + weapons)
     *                     V
     **********************************************************************************/

    /**
     * Update elements related to equipment's item (update icon image, description etc)
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        var newName;

        if (this.edit.equipmentId() == 'none') {
            newDescription = '';
            newName = 'Empty';
            newImage = 'assets/images/icons/equipment/' + this.kind + '/None.png';
            this.edit.equipmentImgItem(newImage);
            this.recap.equipmentImgItem(newImage);
        } else {
            var newEquipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.equipmentId() - 1];

            var image = new Image();
            image.onload = function() {
                newImage = 'assets/images/icons/equipment/' + self.kind + '/' + newEquipmentData.name + '.png';
                self.edit.equipmentImgItem(newImage);
                self.recap.equipmentImgItem(newImage);
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    newImage = 'assets/images/icons/equipment/' + self.kind + '/temp/' + newEquipmentData.type + '.png';
                } else {
                    newImage = 'assets/images/icons/equipment/' + self.kind + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png';
                }
                self.edit.equipmentImgItem(newImage);
                self.recap.equipmentImgItem(newImage);
            }
            image.src = 'assets/images/icons/equipment/' + this.kind + '/' + newEquipmentData.name + '.png';

            newDescription = newEquipmentData.description;
            newName = newEquipmentData.name;
        }
        //To enable when all images will be present :
        // this.edit.equipmentImgItem(newImage);
        // this.recap.equipmentImgItem(newImage);
        // add "-edit" suffix here to avoid id collision //TODO/REFACTOR better way to do this ?
        this.edit.equipmentDescription(newDescription.replace(/%id/g, this.id + '-edit'));
        // add "-recap" suffix here to avoid id collision //TODO/REFACTOR better way to do this ?
        this.recap.equipmentDescription(newDescription.replace(/%id/g, this.id + '-recap'));
        this.recap.equipmentItem(newName);
    };

    /**
     * Update elements related to equipment's rarity + max available level for equipment
     */
    this.updateEquipmentRarity = function() {
        var newRarity = this.edit.equipmentRarity();

        this.recap.el.equipmentTitle.attr('class', 'color-' + newRarity);
        var img_path = '';
        if (this.isWeapon()) {
            img_path = 'assets/images/icons/rarity/' + newRarity + '-42x42.png';
        } else {
            img_path = 'assets/images/icons/rarity/' + this.id + '/' + newRarity + '-42x42.png';
        }
        this.edit.equipmentImgRarity(img_path);
        this.recap.equipmentImgRarity(img_path);
        this.edit.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.equipmentRarity(swlcalc.util.capitalize(newRarity));

        // refresh the list of available qualities after a change on rarity
        this.handle4pipQuality();

        // update max available level for equipment :
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        this.edit.equipmentLevelMax(maxLvl)
        this.edit.equipmentLevel(maxLvl);
        this.updateEquipmentLevel();
    };

    /**
     * Add or remove 4-pip quality ("Resplendent" or "MK IV") to the list of available qualities for this equipment
     * - 4-pip quality is available starting from Epic rarity, level 1 //TODO to be confirmed for weapons
     */
    this.handle4pipQuality = function() {
        var newQuality = "";
        if (this.isWeapon()) {
            newQuality = "MK IV"
        } else {
            newQuality = "Resplendent"
        }
        var map = swlcalc.data.rarity_mapping.to_num
        var optionExists = ($('#' + this.id + '-edit-equipment-quality option[value=4]').length > 0); // TODO/REFACTOR to abstract access
        if (map[this.edit.equipmentRarity()] >= map['epic'] && !optionExists) {
            this.edit.el.equipmentQuality.append("<option value='4'>" + newQuality + "</option>");
        } else if (map[this.edit.equipmentRarity()] < map['epic'] && optionExists) {
            $('#' + this.id + '-edit-equipment-quality option[value=4]').remove(); // TODO/REFACTOR to abstract access
            this.updateEquipmentQuality();
        }
    }

    /**
     * Update elements related to equipment's quality
     */
    this.updateEquipmentQuality = function() {
        var newQuality = this.edit.equipmentQuality();

        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.edit.equipmentImgQuality(img_path);
        this.recap.equipmentImgQuality(img_path);

        var qualityName = swlcalc.data.quality_mapping[this.group].to_name[newQuality];
        this.recap.equipmentQuality(qualityName);
        if (this.isWeapon()) {
            this.recap.affixQuality(qualityName);
            // little hack here : use quality's index in rarity mapping to display the right color
            this.recap.el.signetTitle.attr('class', 'color-' + swlcalc.data.rarity_mapping.to_name[newQuality]);
        }
    };

    /**
     * Update elements related to equipment's level
     */
    this.updateEquipmentLevel = function() {
        var newLevel = this.edit.equipmentLevel();

        this.edit.equipmentLabelLevel(newLevel);
        this.recap.equipmentLevel(newLevel);
        this.recap.equipmentLabelLevel(newLevel);
    }

    /**
     * Update elements related to equipment stat's rating (calculatations with stats data)
     */
    this.updateEquipmentStatRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        if (this.edit.equipmentId() != 'none') {
            // calculation rule for weapons
            // TODO rewrite in the style of getRawProtValue() below
            if (this.isWeapon()) {
                base_value = swlcalc.data.power_rating.weapon[this.edit.equipmentRarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating.weapon[this.edit.equipmentRarity()].weapon_power_per_level * (this.edit.equipmentLevel() - 1);
            }
            // calculation rule for talismans
            // TODO rewrite in the style of getRawProtValue() below
            else {
                base_value = swlcalc.data.power_rating[this.subgroup][this.edit.equipmentRarity()][this.edit.equipmentQuality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.subgroup][this.edit.equipmentRarity()][this.edit.equipmentQuality()].power_rating_per_level * (this.edit.equipmentLevel() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        this.edit.equipmentStatPowerValue(newValue);
        this.recap.equipmentStatPowerValue(newValue);

        if (!this.isWeapon()) {
            this.updateTalismanStatValues();
        }
    };

    /**
     * Update the "transformed" equipment stat values (for talismans only) :
     * - HP, AR and HR, based on Power rating and Anima Allocation
     * - Protection, based on raw protection value and Anima Allocation
     */
    this.updateTalismanStatValues = function() {
        var valuePowerRaw = this.edit.equipmentStatPowerValue();
        this.recap.equipmentStatHPValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.hp_coefficient * swlcalc.animaAllocation.getSurvivabilityRatio()));
        this.recap.equipmentStatARValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.ar_coefficient * swlcalc.animaAllocation.getDamageRatio()));
        this.recap.equipmentStatHRValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.hr_coefficient * swlcalc.animaAllocation.getHealingRatio()));

        var valueProtRaw = this.getRawProtValue();
        var newValue = '+' + Math.round(valueProtRaw + valueProtRaw * swlcalc.data.stats.protIncreasePerSurvivabilityPointCoef * swlcalc.animaAllocation.getSurvivabilityRatio());
        this.edit.equipmentStatProtValue(newValue);
        this.recap.equipmentStatProtValue(newValue);
    }

    /**
     * Update elements related to equipment's ilvl
     */
    this.updateEquipmentILvl = function() {
        var newILvl = 0;
        if (!(this.edit.equipmentId() == 'none')) {
            if (this.isWeapon()) {
                newILvl = this.computeItemILvlWithQuality('weapon', this.edit.equipmentRarity(), this.edit.equipmentQuality(), this.edit.equipmentLevel());
            } else {
                newILvl = this.computeItemILvlWithQuality('talisman', this.edit.equipmentRarity(), this.edit.equipmentQuality(), this.edit.equipmentLevel());
            }
        }
        // register value before it is rounded (used to compute total ilvl precisely)
        this.rawILvl = newILvl;

        this.edit.equipmentILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /**
     * Update every bonus values present in equipment's description (both edit & recap)
     */
    this.updateEquipmentBonuses = function() {
        if (this.edit.equipmentBonusN(1) === undefined) return;
        var equipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.equipmentId() - 1];
        var statForComputation = 0;

        for (i = 0; i < equipmentData.coefficients.length; i++) {
            if (equipmentData.stats[i] == 'Combat Power') {
                statForComputation = swlcalc.summary.combatPower();
            } else if (equipmentData.stats[i] == 'Healing Power') {
                statForComputation = swlcalc.summary.healingPower();
            }
            var newBonusVal = Math.round(equipmentData.coefficients[i] * statForComputation)
            this.edit.equipmentBonusN(i + 1, newBonusVal);
            this.recap.equipmentBonusN(i + 1, newBonusVal);
        }
    }

    /**********************************************************************************
     * Glyph functions |
     *                 V
     **********************************************************************************/

    /**
     * Update elements related to glyph's item/id
     */
    this.updateGlyph = function() {
        var newId = this.edit.glyphId();

        this.edit.glyphStatText(swlcalc.data.stat_mapping.to_pretty[newId]);
        this.recap.glyphStatText(swlcalc.data.stat_mapping.to_pretty[newId]);

        var img_path = 'assets/images/icons/glyph/' + newId + '.png';
        this.edit.glyphImgItem(img_path);

        if (newId == 'none') {
            this.recap.glyphItem('');
        } else {
            this.recap.glyphItem(swlcalc.data.secondary_stat_mapping.to_name[newId]);
        }
    };

    /**
     * Update elements related to glyph's rarity
     */
    this.updateGlyphRarity = function() {
        var newRarity = this.edit.glyphRarity();

        this.edit.glyphImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.recap.el.glyphTitle.attr('class', 'color-' + newRarity);
        this.edit.el.glyphLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recap.glyphRarity(swlcalc.util.capitalize(newRarity));

        // refresh the list of available qualities after a change on rarity
        this.handleElaborate();
    };

    /**
     * Add or remove Elaborate to the list of available qualities for this glyph
     * - Elaborate quality is available starting from Epic rarity, level 1
     */
    this.handleElaborate = function() {
        var map = swlcalc.data.rarity_mapping.to_num
        var elaborateOptionExists = ($('#' + this.id + '-edit-glyph-quality option[value=4]').length > 0); // TODO/REFACTOR to abstract access
        if (map[this.edit.glyphRarity()] >= map['epic'] && !elaborateOptionExists) {
            this.edit.el.glyphQuality.append("<option value='4'>Elaborate</option>");
        } else if (map[this.edit.glyphRarity()] < map['epic'] && elaborateOptionExists) {
            $('#' + this.id + '-edit-glyph-quality option[value=4]').remove(); // TODO/REFACTOR to abstract access
            this.updateGlyphQuality();
        }
    }

    /**
     * Update elements related to glyph's quality
     */
    this.updateGlyphQuality = function() {
        var newQuality = this.edit.glyphQuality();

        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.edit.glyphImgQuality(img_path);

        this.recap.glyphQuality(swlcalc.data.quality_mapping['glyph'].to_name[newQuality]);
    }

    /**
     * Update elements related to glyph's level
     */
    this.updateGlyphLevel = function() {
        var newLevel = this.edit.glyphLevel();

        this.edit.glyphLabelLevel(newLevel);
        this.recap.glyphLevel(newLevel);
    }

    /**
     * Update elements related to glyph's stat rating
     *   INFO : in SWL a glyph rating value depends on its rarity-quality-level, neither the slot (head/major/minor) nor
     *   the glyph stat impact the calculation (whereas it was the case in TSW) => /!\ exception for crit power
     *   glyphs that give a bit less)
     */
    this.updateGlyphRating = function() {
        var newValue = 0;
        if (this.edit.glyphId() != 'none') {
            var baseValue = swlcalc.data.glyph[this.edit.glyphRarity()][this.edit.glyphQuality()].rating_init;
            var bonusValue = swlcalc.data.glyph[this.edit.glyphRarity()][this.edit.glyphQuality()].rating_per_level * (this.edit.glyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.edit.glyphId() == 'critical-power') {
                newValue = newValue * swlcalc.data.stats.pcrit_coefficient;
            }
            // remove decimals for display
            newValue = newValue.toFixed(0);
            // add '+' for display
            if (newValue !== 0) {
                newValue = '+' + newValue;
            }
        }
        this.edit.glyphStatRating(newValue);
        this.recap.glyphStatRating(newValue);
    };

    /**
     * Update elements related to glyph's ilvl
     */
    this.updateGlyphILvl = function() {
        var newILvl = 0;
        if (this.edit.glyphId() != 'none') {
            newILvl = this.computeItemILvlWithQuality('glyph', this.edit.glyphRarity(), this.edit.glyphQuality(), this.edit.glyphLevel());
            if (this.isWeapon()) {
                newILvl = newILvl * swlcalc.data.stats.glyph_in_weapon_coefficient;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = newILvl;

        this.edit.glyphILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Update elements related to signet's item/id
     */
    this.updateSignet = function() {
        var newId = this.edit.signetId();

        // retrieve full signet object from the data model
        var newSignet = (newId == 'none' ? swlcalc.data.signets.noneSignet : swlcalc.data.signets.slot[this.kind][this.edit.signetId() - 1]);

        // update image
        var newImage = 'assets/images/icons/signet/' + (newSignet == swlcalc.data.signets.noneSignet ? 'none' : this.id) + '.png';
        this.edit.signetImgItem(newImage);

        var newDescription = newSignet.description;
        // add "-edit" suffix here to avoid id collision with slot-recap //TODO/REFACTOR better way to do this ?
        this.edit.signetDescription(newDescription.replace(/%id/g, this.id + '-edit'));
        // add "-recap" suffix here to avoid id collision with slot-edit //TODO/REFACTOR better way to do this ?
        this.recap.signetDescription(newDescription.replace(/%id/g, this.id + '-recap'));

        this.recap.signetItem(newSignet.name);
        if (this.isWeapon()) this.recap.affix(newSignet.name);
    };


    /**
     * Update elements related to signet's rarity
     */
    this.updateSignetRarity = function() {
        var newRarity = this.edit.signetRarity();

        this.edit.signetImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.recap.el.signetTitle.attr('class', 'color-' + newRarity);
        this.edit.el.signetLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recap.signetRarity(swlcalc.util.capitalize(newRarity));
    };

    /**
     * Update elements related to signet's level
     */
    this.updateSignetLevel = function() {
        var newLevel = this.edit.signetLevel();

        this.edit.signetLabelLevel(newLevel);
        this.recap.signetLevel(newLevel);
    };

    /**
     * Update the dynamic bonus displayed in the signet's description
     */
    this.updateSignetBonus = function() {
        if (this.edit.signetId() == 'none') return;

        var signet = swlcalc.data.signets.slot[this.kind][this.edit.signetId() - 1]
        var levelMultiplier = this.edit.signetLevel() - 1;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1
        if (signet.stat == 'Combat Power') {
            coef = swlcalc.summary.combatPower();
        } else if (signet.stat == 'Healing Power') {
            coef = swlcalc.summary.healingPower();
        }

        if (this.isWeapon()) {
            var signetData = signet.quality[this.edit.equipmentQuality()];

            for (i = 0; i < signetData.length; i++) {
                var newBonusVal = swlcalc.util.precisionRound(signetData[i] * coef, signet.decimals[i]);
                this.edit.signetBonusN(i + 1, newBonusVal);
                this.recap.signetBonusN(i + 1, newBonusVal);
            }

            // update affix bonus's color (will do nothing if signet-wrapper doesnt exist)
            // not part of the above loop because, for the moment, there can be only one value at a time for which this coloring applies
            var newClass = 'bonus-val color-' + swlcalc.data.rarity_mapping.to_name[this.edit.equipmentQuality()];
            this.edit.signetBonusWrapper().attr('class', newClass);
            this.recap.signetBonusWrapper().attr('class', newClass);
        } else {
            var signetData = signet.ratio[this.edit.signetRarity()];

            for (i = 0; i < signetData.init.length; i++) {
                var newBonusVal = swlcalc.util.precisionRound((signetData.init[i] + signetData.per_level[i] * levelMultiplier) * coef, signet.decimals[i]);
                this.edit.signetBonusN(i + 1, newBonusVal);
                this.recap.signetBonusN(i + 1, newBonusVal);
            }
        }
    };

    /**
     * Update #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var newILvl = 0;
        if (this.edit.signetId() != 'none') {
            newILvl = this.computeItemILvlWithoutQuality('signet', this.edit.signetRarity(), this.edit.signetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = newILvl;

        this.edit.signetILvl(Math.round(newILvl));
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
        this.edit.el.equipmentId.prop("selectedIndex", 0);
        this.edit.el.equipmentRarity.prop("selectedIndex", 0);
        this.edit.el.equipmentQuality.prop("selectedIndex", 0);
        // no need to set equipmentLevel here

        this.edit.el.glyphId.prop("selectedIndex", 0);
        this.edit.el.glyphRarity.prop("selectedIndex", 0);
        this.edit.el.glyphQuality.prop("selectedIndex", 0);
        this.edit.el.glyphLevel.val("20");

        this.edit.el.signetId.prop("selectedIndex", 0);
        this.edit.el.signetRarity.prop("selectedIndex", 0);
        this.edit.el.signetLevel.val("20");

        this.edit.el.equipmentId.change();
        this.edit.el.equipmentRarity.change();
        this.edit.el.equipmentQuality.change();
        this.edit.el.glyphId.change();
        this.edit.el.glyphRarity.change();
        this.edit.el.glyphQuality.change();
        this.edit.el.glyphLevel.change();
        this.edit.el.signetId.change();
        this.edit.el.signetRarity.change();
        this.edit.el.signetLevel.change();
        this.updateSignet(); // TODO to remove ?
    };

    /**
     * Mapping function for import/export feature
     */
    this.state = function() {
        return {
            equipment_rarity:  this.edit.equipmentRarity(),
            equipment_quality: this.edit.equipmentQuality(),
            equipment_level:   this.edit.equipmentLevel(),
            glyph_id:          this.edit.glyphId(),
            glyph_rarity:      this.edit.glyphRarity(),
            glyph_quality:     this.edit.glyphQuality(),
            glyph_level:       this.edit.glyphLevel(),
            signet_id:         this.edit.signetId(),
            signet_rarity:     this.edit.signetRarity(),
            signet_level:      this.edit.signetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var gmap  = swlcalc.data.secondary_stat_mapping.to_num;
        var rmap  = swlcalc.data.rarity_mapping.to_num;
        return {
            equipment_id:      this.stripContent(this.edit.equipmentId()),
            equipment_rarity:  this.stripContent(this.edit.equipmentRarity(), rmap),
            equipment_quality: this.edit.equipmentQuality(),
            equipment_level:   this.edit.equipmentLevel(),
            glyph_id:          this.stripContent(this.edit.glyphId(), gmap),
            glyph_rarity:      this.stripContent(this.edit.glyphRarity(), rmap),
            glyph_quality:     this.edit.glyphQuality(),
            glyph_level:       this.edit.glyphLevel(),
            signet_id:         this.stripContent(this.edit.signetId()),
            signet_rarity:     this.stripContent(this.edit.signetRarity(), rmap),
            signet_level:      this.stripContent(this.edit.signetLevel())
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

    // TODO : uniformized computeItemILvlWithQuality and computeItemILvlWithoutQuality with getRawProtValue : pass parameters or retrieve data itself ?

    /**
     * Calculates item power for the given item that has quality attribute (= talisman, weapon or glyph)
     */
    this.computeItemILvlWithQuality = function(element, rarity, quality, level) {
        var data = swlcalc.data.ilvl[element][rarity][quality];
        return data.ilvl_init + data.ilvl_per_level * (level - 1);
    };

    /**
     * Calculates item power for the given item that doesn't have quality attribute (= signets)
     */
    this.computeItemILvlWithoutQuality = function(element, rarity, level) {
        var data = swlcalc.data.ilvl[element][rarity];
        return data.ilvl_init + data.ilvl_per_level * (level - 1);
    };

    /**
     * Retrieve "raw" protection value for this slot (i.e without AA applied)
     */
    this.getRawProtValue = function() {
        var data = swlcalc.data.protection[this.subgroup][this.edit.equipmentRarity()][this.edit.equipmentQuality()];
        var lvl  = this.edit.equipmentLevel() - 1;

        return data.init + Math.round(data.per_level * lvl);
    };
};
