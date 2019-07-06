var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};

swlcalc.gear.Slot = function Slot(slotData) {
    var self   = this;
    this.id    = slotData.id;
    this.name  = slotData.name;
    this.kind  = slotData.kind;
    this.type  = slotData.type;
    this.group = slotData.group;
    this.edit = new swlcalc.gear.SlotEdit(slotData);
    this.recap = new swlcalc.gear.SlotRecap(slotData);
    this.active = true;

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
     * Update equipment //TODO put description
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        var newName;

        //TODO/FEATURE : reenable slot name display
//      var wtype = $(this).val();
//      if(wtype != 'none') {
//          slotObj.name(': ' + swlcalc.util.capitalize(wtype));
//      } else {
//          slotObj.name('');
//      }

        if (this.edit.equipmentId() == 'none') {
            newDescription = '';
            newName = 'Empty';
            this.edit.equipmentImgItem('assets/images/icons/' + this.type + '/None.png');
            this.recap.equipmentImgItem('assets/images/icons/' + this.type + '/None.png');
        } else {
            var newEquipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.equipmentId() - 1];

            /**************************************< temporary code >*********************************************
             * TODO/FEATURE => to add all the missing equipment images to swlcalc
             * => This temporary code will be used as long as item images are not added to the resources. The final code will be :
            this.edit.equipmentImgItem('assets/images/icons/' + this.type + '/' + newEquipmentData.name + '.png');
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.edit.equipmentImgItem('assets/images/icons/' + self.type + '/' + newEquipmentData.name + '.png');
                self.recap.equipmentImgItem('assets/images/icons/' + self.type + '/' + newEquipmentData.name + '.png');
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    self.edit.equipmentImgItem('assets/images/icons/' + self.type + '/temp/' + newEquipmentData.type + '.png');
                    self.recap.equipmentImgItem('assets/images/icons/' + self.type + '/temp/' + newEquipmentData.type + '.png');
                } else {
                    self.edit.equipmentImgItem('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                    self.recap.equipmentImgItem('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                }
            }
            image.src = 'assets/images/icons/' + this.type + '/' + newEquipmentData.name + '.png';
            /**************************************< temporary code />********************************************/

            newDescription = newEquipmentData.description;
            newName = newEquipmentData.name;
        }
        //To enable when all images will be present :
        //this.edit.equipmentImgItem(newImage);
        this.edit.equipmentDescription(newDescription.replace(/%id/g, this.id));
        // add "-recap" suffix here to avoid id collision
        this.recap.equipmentDescription(newDescription.replace(/%id/g, this.id + '-recap'));
        this.recap.equipmentItem(newName);
    };

    /**
     * Update elements related to equipment's rarity + max available level for equipment
     */
    this.updateEquipmentRarity = function() {
        var newRarity = this.edit.equipmentRarity();

        this.recap.el.equipmentTitle.attr('class', 'color-' + newRarity);
        var img_path = 'assets/images/icons/rarity/' + newRarity + '-42x42.png';
        this.edit.equipmentImgRarity(img_path);
        this.recap.equipmentImgRarity(img_path);
        this.edit.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.equipmentRarity(swlcalc.util.capitalize(newRarity));

        // update max available level for equipment :
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        this.edit.equipmentLevelMax(maxLvl)
        this.edit.equipmentLevel(maxLvl);
        this.updateEquipmentLevel();
    };

    /**
     * Update elements related to equipment's quality
     */
    this.updateEquipmentQuality = function() {
        var newQuality = this.edit.equipmentQuality();

        var img_path = 'assets/images/icons/quality/' + newQuality + '.png';
        this.edit.equipmentImgQuality(img_path);
        this.recap.equipmentImgQuality(img_path);

        var qualityName = swlcalc.data.quality_mapping[this.type].to_name[newQuality];
        this.recap.equipmentQuality(qualityName);
        if (this.isWeapon()) {
            this.recap.suffixQuality(qualityName);
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
     * Update elements related to equipement stat's rating (calculatations with stats data)
     */
    this.updateEquipmentStatRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        if (this.edit.equipmentId() != 'none') {
            // calculation rule for weapons
            if (this.isWeapon()) {
                base_value = swlcalc.data.power_rating.weapon[this.edit.equipmentRarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating.weapon[this.edit.equipmentRarity()].weapon_power_per_level * (this.edit.equipmentLevel() - 1);
            }
            // calculation rule for talismans
            else {
                base_value = swlcalc.data.power_rating[this.group][this.edit.equipmentRarity()][this.edit.equipmentQuality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.group][this.edit.equipmentRarity()][this.edit.equipmentQuality()].power_rating_per_level * (this.edit.equipmentLevel() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        this.edit.equipmentStatValue(newValue);
        this.recap.equipmentStatRawValue(newValue);
        this.updateEquipmentStatValueTransformed();
    };

    this.updateEquipmentStatValueTransformed = function() {
        var animaAllocation = swlcalc.buttonBar.getAnimaAllocation();
        var valueRaw = this.edit.equipmentStatValue();

        if (animaAllocation == 'dps') {
            this.recap.equipmentStatTransformedValue('+' + valueRaw);
            this.recap.equipmentStatTransformedText('Attack Rating');
        } else if (animaAllocation == 'heal') {
            this.recap.equipmentStatTransformedValue('+' + valueRaw);
            this.recap.equipmentStatTransformedText('Heal Rating');
        } else if (animaAllocation == 'tank') {
            this.recap.equipmentStatTransformedValue('+' + Math.round(valueRaw * swlcalc.data.stats.hp_multiplier));
            this.recap.equipmentStatTransformedText('Hit Points');
        }
    }

    /**
     * Update elements related to equipement's ilvl
     */
    this.updateEquipmentILvl = function() {
        var newILvl = 0;
        if (!(this.edit.equipmentId() == 'none')) {
            newILvl = this.computeItemILvl('equipment', this.edit.equipmentRarity(), this.edit.equipmentLevel());
            if (this.isWeapon()) {
                newILvl = newILvl * swlcalc.data.stats.weapon_power_multiplier;
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
    this.updateEquipmentBonuses = function(combatPower, healingPower) {
        if (this.edit.equipmentBonusN(1) === undefined) return;
        var equipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.equipmentId() - 1];
        var statForComputation = 0;

        for (i = 0; i < equipmentData.coefficients.length; i++) {
            if (equipmentData.stats[i] == 'Combat Power') {
                statForComputation = combatPower;
            } else if (equipmentData.stats[i] == 'Healing Power') {
                statForComputation = healingPower;
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

        this.edit.glyphStatText(swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newId]);
        this.recap.glyphStatText(swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newId]);

        var img_path = 'assets/images/icons/glyph/' + newId + '.png';
        this.edit.glyphImgItem(img_path);

        if (newId == 'none') {
            this.recap.glyphItem('');
        } else {
            this.recap.glyphItem(swlcalc.data.glyph_stat_mapping.to_name[newId]);
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

        // refresh list of available qualities after change on glyph rarity :
        var elaborateOptionExists = ($('#' + this.id + '-glyph-quality option[value=4]').length > 0); // TODO/REFACTOR to abstract access
        if (swlcalc.data.rarity_mapping.to_num[this.edit.glyphRarity()] >= 3 && !elaborateOptionExists) { // TODO/REFACTOR add global const like EPIC = 3 ?
            this.edit.el.glyphQuality.append("<option value='4'>Elaborate</option>");
        } else if (swlcalc.data.rarity_mapping.to_num[this.edit.glyphRarity()] < 3 && elaborateOptionExists) {
            $('#' + this.id + '-glyph-quality option[value=4]').remove(); // TODO/REFACTOR to abstract access
            this.updateGlyphQuality();
        }
    };

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
                newValue = newValue * swlcalc.data.stats.pcrit_multiplier;
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
            newILvl = this.computeItemILvl('glyph', this.edit.glyphRarity(), this.edit.glyphLevel());
            if (this.isWeapon()) {
                newILvl = newILvl * swlcalc.data.stats.glyph_in_weapon_multiplier;
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
        this.edit.signetDescription(newDescription.replace(/%id/g, this.id));
        this.recap.signetDescription(newDescription.replace(/%id/g, this.id + '-recap'));
        this.updateSignetBonus();

        this.recap.signetItem(newSignet.name);
        if (this.isWeapon()) this.recap.suffix(newSignet.name);
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
     * Update the dynamic bonus displayed in the signet's description (#slot-signet-bonus)
     */
    // TODO to enhance
    this.updateSignetBonus = function(combatPower, healingPower){
        var newValue = 0;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1

        // TODO/REFACTOR : there should  a better way to handle the particular cases of Signet of Shoulder Tackle & Signet of Contortion
        if (this.edit.signetId() != 'none') {
            var signet = swlcalc.data.signets.slot[this.kind][this.edit.signetId() - 1]

            if (this.isWeapon()) {
                newValue = signet.quality[this.edit.equipmentQuality()]
            } else if (signet.name == "Signet of Shoulder Tackle") {
                bonus1 = signet.ratio[this.edit.signetRarity()].init[0];
                bonus2 = swlcalc.util.precisionRound(
                  signet.ratio[this.edit.signetRarity()].init[1] - signet.ratio[this.edit.signetRarity()].per_level[1] * (this.edit.signetLevel() - 1),
                  4
                );
                $('#' + this.id + '-signet-bonus').html(bonus1);
                $('#' + this.id + '-signet-bonus2').html(bonus2);
                $('#' + this.id + '-recap-signet-bonus').html(bonus1);
                $('#' + this.id + '-recap-signet-bonus2').html(bonus2);
                return;
            } else if (signet.name == "Signet of Contortion") {
                newValue = signet.ratio[this.edit.signetRarity()].init
                           - signet.ratio[this.edit.signetRarity()].per_level * (this.edit.signetLevel() - 1)
            } else {
                newValue = signet.ratio[this.edit.signetRarity()].init
                           + signet.ratio[this.edit.signetRarity()].per_level * (this.edit.signetLevel() - 1)
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
        this.edit.signetBonus(newValue);
        this.recap.signetBonus(newValue);
    };

    /**
     * Update #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var newILvl = 0;
        if (this.edit.signetId() != 'none') {
            newILvl = this.computeItemILvl('signet', this.edit.signetRarity(), this.edit.signetLevel());
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
        var gmap  = swlcalc.data.glyph_stat_mapping.to_num;
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

    /**
     * Calculates item power for the given item (talisman, weapon, glyph or signet)
     */
    this.computeItemILvl = function(element, rarity, level) {
        var dataToUse = swlcalc.data.ilvl.gear[element].rarity[rarity];
        return dataToUse.ilvl_init + dataToUse.ilvl_per_level * (level - 1);
    }
};
