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

    /* GLOBAL : ------------------------------------------------------------- */

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

        this.edit.setILvl(newILvl);
        this.recap.setILvl(newILvl);
    };

    /* EQUIPMENT : ---------------------------------------------------------- */

    /**
     * Update elements related to equipment's item (update icon image, description etc)
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        var newName;

        if (this.edit.getEquipmentId() == 'none') {
            newDescription = '';
            newName = 'Empty';
            newImage = 'assets/images/icons/equipment/' + this.kind + '/None.png';
            this.edit.setEquipmentImgItem(newImage);
            this.recap.setEquipmentImgItem(newImage);
        } else {
            var newEquipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.getEquipmentId() - 1];

            var image = new Image();
            image.onload = function() {
                newImage = 'assets/images/icons/equipment/' + self.kind + '/' + newEquipmentData.name + '.png';
                self.edit.setEquipmentImgItem(newImage);
                self.recap.setEquipmentImgItem(newImage);
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    newImage = 'assets/images/icons/equipment/' + self.kind + '/temp/' + newEquipmentData.type + '.png';
                } else {
                    newImage = 'assets/images/icons/equipment/' + self.kind + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png';
                }
                self.edit.setEquipmentImgItem(newImage);
                self.recap.setEquipmentImgItem(newImage);
            }
            image.src = 'assets/images/icons/equipment/' + this.kind + '/' + newEquipmentData.name + '.png';

            newDescription = newEquipmentData.description;
            newName = newEquipmentData.name;
        }

        // add "-edit" suffix here to avoid id collision //TODO/REFACTOR better way to do this ?
        this.edit.setEquipmentDescription(newDescription.replace(/%id/g, this.id + '-edit'));
        // add "-recap" suffix here to avoid id collision //TODO/REFACTOR better way to do this ?
        this.recap.setEquipmentDescription(newDescription.replace(/%id/g, this.id + '-recap'));
        this.recap.setEquipmentItem(newName);
    };

    /**
     * Update elements related to equipment's rarity + max available level for equipment
     */
    this.updateEquipmentRarity = function() {
        var newRarity = this.edit.getEquipmentRarity();

        this.recap.el.equipmentTitle.attr('class', 'color-' + newRarity);
        var imgPath = '';
        if (this.isWeapon()) {
            imgPath = 'assets/images/icons/rarity/' + newRarity + '-42x42.png';
        } else {
            imgPath = 'assets/images/icons/rarity/' + this.id + '/' + newRarity + '-42x42.png';
        }
        this.edit.setEquipmentImgRarity(imgPath);
        this.recap.setEquipmentImgRarity(imgPath);
        this.edit.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.el.equipmentLabelLevel.attr('class', 'label-level big border-' + newRarity);
        this.recap.setEquipmentRarity(swlcalc.util.capitalize(newRarity));

        // refresh the list of available qualities after a change on rarity
        this.handle4pipQuality();

        // update max available level for equipment :
        var maxLvl = swlcalc.data.rarityMapping.toMaxLevel[newRarity];
        this.edit.setEquipmentLevelMax(maxLvl)
        //this.edit.getEquipmentLevel(maxLvl);
        this.updateEquipmentLevel();
    };

    /**
     * Add or remove 4-pip quality ("Resplendent" or "Mk IV") to the list of available qualities for this equipment
     * - 4-pip quality is available starting from Epic rarity, level 1
     */
    this.handle4pipQuality = function() {
        var newQuality = swlcalc.data.qualityMapping[this.group].toName[4];
        var map = swlcalc.data.rarityMapping.toNum;
        var optionExists = (this.edit.el.equipmentQuality.prop("options")[3] != undefined);

        if (map[this.edit.getEquipmentRarity()] >= map['epic'] && !optionExists) {
            this.edit.el.equipmentQuality.append("<option value='4'>" + newQuality + "</option>");
        } else if (map[this.edit.getEquipmentRarity()] < map['epic'] && optionExists) {
            this.edit.el.equipmentQuality.prop("options")[3].remove();
            this.updateEquipmentQuality();
        }
    }

    /**
     * Update elements related to equipment's quality
     */
    this.updateEquipmentQuality = function() {
        var newQuality = this.edit.getEquipmentQuality();

        var imgPath = 'assets/images/icons/quality/' + newQuality + '.png';
        this.edit.setEquipmentImgQuality(imgPath);
        this.recap.setEquipmentImgQuality(imgPath);

        var qualityName = swlcalc.data.qualityMapping[this.group].toName[newQuality];
        this.recap.setEquipmentQuality(qualityName);
        if (this.isWeapon()) {
            this.recap.setAffixQuality(qualityName);
            // little hack here : use quality's index in rarity mapping to display the right color
            this.recap.el.signetTitle.attr('class', 'color-' + swlcalc.data.rarityMapping.toName[newQuality]);
        }
    };

    /**
     * Update elements related to equipment's level
     */
    this.updateEquipmentLevel = function() {
        var newLevel = this.edit.getEquipmentLevel();

        this.edit.setEquipmentLabelLevel(newLevel);
        this.recap.setEquipmentLevel(newLevel);
        this.recap.setEquipmentLabelLevel(newLevel);
    }

    /**
     * Update elements related to equipment stat's rating (calculatations with stats data)
     */
    this.updateEquipmentStatRating = function() {
        var newValue = 0;

        if (this.edit.getEquipmentId() != 'none') {
            var data = {};
            var lvl  = this.edit.getEquipmentLevel() - 1;

            if (this.isWeapon()) {
                data = swlcalc.data.powerRating.weapon[this.edit.getEquipmentRarity()];
            } else {
                data = swlcalc.data.powerRating[this.subgroup][this.edit.getEquipmentRarity()][this.edit.getEquipmentQuality()];
            }
            newValue = data.init + Math.round(data.perLevel * lvl);
        }

        this.edit.setEquipmentStatPowerValue(newValue);
        this.recap.setEquipmentStatPowerValue(newValue);

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
        var valuePowerRaw = this.edit.getEquipmentStatPowerValue();
        this.recap.setEquipmentStatHPValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.hpConversionCoef * swlcalc.animaAllocation.getSurvivabilityRatio()));
        this.recap.setEquipmentStatARValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.arConversionCoef * swlcalc.animaAllocation.getDamageRatio()));
        this.recap.setEquipmentStatHRValue('+' + Math.round(valuePowerRaw * swlcalc.data.stats.hrConversionCoef * swlcalc.animaAllocation.getHealingRatio()));

        var newProtValue = 0;
        if (this.edit.getEquipmentId() != 'none') {
            var valueProtRaw = this.getRawProtValue();
            newProtValue = '+' + Math.round(valueProtRaw + valueProtRaw * swlcalc.data.stats.protSurvivabilityIncreaseCoef * swlcalc.animaAllocation.getSurvivabilityRatio());
        }
        this.edit.setEquipmentStatProtValue(newProtValue);
        this.recap.setEquipmentStatProtValue(newProtValue);
    }

    /**
     * Update elements related to equipment's ilvl
     */
    this.updateEquipmentILvl = function() {
        var newILvl = 0;
        if (!(this.edit.getEquipmentId() == 'none')) {
            if (this.isWeapon()) {
                newILvl = this.computeItemILvlWithoutQuality('weapon', this.edit.getEquipmentRarity(), this.edit.getEquipmentLevel());
            } else {
                newILvl = this.computeItemILvlWithQuality('talisman', this.edit.getEquipmentRarity(), this.edit.getEquipmentQuality(), this.edit.getEquipmentLevel());
            }
        }
        // register value before it is rounded (used to compute total ilvl precisely)
        this.rawILvl = newILvl;

        this.edit.setEquipmentILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /**
     * Update every bonus values present in equipment's description (both edit & recap)
     */
    this.updateEquipmentBonuses = function() {
        if (this.edit.getEquipmentBonusN(1) === undefined) return;
        var equipmentData = swlcalc.data.equipments.slot[this.kind][this.edit.getEquipmentId() - 1];
        var statForComputation = 0;

        for (i = 0; i < equipmentData.coefficients.length; i++) {
            if (equipmentData.stats[i] == 'Combat Power') {
                statForComputation = swlcalc.summary.combatPower();
            } else if (equipmentData.stats[i] == 'Healing Power') {
                statForComputation = swlcalc.summary.healingPower();
            }
            var newBonusVal = Math.round(equipmentData.coefficients[i] * statForComputation)
            this.edit.setEquipmentBonusN(i + 1, newBonusVal);
            this.recap.setEquipmentBonusN(i + 1, newBonusVal);
        }
    }

    /* GLYPH : -------------------------------------------------------------- */

    /**
     * Update elements related to glyph's item/id
     */
    this.updateGlyph = function() {
        var newId = this.edit.getGlyphId();

        this.edit.setGlyphStatText(swlcalc.data.statMapping.toPretty[newId]);
        this.recap.setGlyphStatText(swlcalc.data.statMapping.toPretty[newId]);

        var imgPath = 'assets/images/icons/glyph/' + newId + '.png';
        this.edit.setGlyphImgItem(imgPath);

        if (newId == 'none') {
            this.recap.setGlyphItem('');
        } else {
            this.recap.setGlyphItem(swlcalc.data.secondaryStatMapping.toName[newId]);
        }
    };

    /**
     * Update elements related to glyph's rarity
     */
    this.updateGlyphRarity = function() {
        var newRarity = this.edit.getGlyphRarity();

        this.edit.setGlyphImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.recap.el.glyphTitle.attr('class', 'color-' + newRarity);
        this.edit.el.glyphLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recap.setGlyphRarity(swlcalc.util.capitalize(newRarity));

        // refresh the list of available qualities after a change on rarity
        this.handleElaborate();
    };

    /**
     * Add or remove Elaborate to the list of available qualities for this glyph
     * - Elaborate quality is available starting from Epic rarity, level 1
     */
    this.handleElaborate = function() {
        var rmap = swlcalc.data.rarityMapping.toNum
        var elaborateOptionExists = (this.edit.el.glyphQuality.prop("options")[3] != undefined);
        if (rmap[this.edit.getGlyphRarity()] >= rmap['epic'] && !elaborateOptionExists) {
            this.edit.el.glyphQuality.append("<option value='4'>Elaborate</option>");
        } else if (rmap[this.edit.getGlyphRarity()] < rmap['epic'] && elaborateOptionExists) {
            this.edit.el.glyphQuality.prop("options")[3].remove();
            this.updateGlyphQuality();
        }
    }

    /**
     * Update elements related to glyph's quality
     */
    this.updateGlyphQuality = function() {
        var newQuality = this.edit.getGlyphQuality();

        var imgPath = 'assets/images/icons/quality/' + newQuality + '.png';
        this.edit.setGlyphImgQuality(imgPath);

        this.recap.setGlyphQuality(swlcalc.data.qualityMapping['glyph'].toName[newQuality]);
    }

    /**
     * Update elements related to glyph's level
     */
    this.updateGlyphLevel = function() {
        var newLevel = this.edit.getGlyphLevel();

        this.edit.setGlyphLabelLevel(newLevel);
        this.recap.setGlyphLevel(newLevel);
    }

    /**
     * Update elements related to glyph's stat rating
     *   INFO : in SWL a glyph rating value depends on its rarity-quality-level, neither the slot (head/major/minor) nor
     *   the glyph stat impact the calculation (whereas it was the case in TSW) => /!\ exception for crit power
     *   glyphs that give a bit less)
     */
    this.updateGlyphRating = function() {
        var newValue = 0;
        if (this.edit.getGlyphId() != 'none') {
            var baseValue = swlcalc.data.glyphRating[this.edit.getGlyphRarity()][this.edit.getGlyphQuality()].init;
            var bonusValue = swlcalc.data.glyphRating[this.edit.getGlyphRarity()][this.edit.getGlyphQuality()].perLevel * (this.edit.getGlyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.edit.getGlyphId() == 'critical-power') {
                newValue = newValue * swlcalc.data.stats.pcritAdjustmentCoef;
            }
            // remove decimals for display
            newValue = newValue.toFixed(0);
            // add '+' for display
            if (newValue !== 0) {
                newValue = '+' + newValue;
            }
        }
        this.edit.setGlyphStatRating(newValue);
        this.recap.setGlyphStatRating(newValue);
    };

    /**
     * Update elements related to glyph's ilvl
     */
    this.updateGlyphILvl = function() {
        var newILvl = 0;
        if (this.edit.getGlyphId() != 'none') {
            newILvl = this.computeItemILvlWithQuality('glyph', this.edit.getGlyphRarity(), this.edit.getGlyphQuality(), this.edit.getGlyphLevel());
            if (this.isWeapon()) {
                newILvl = newILvl * swlcalc.data.stats.glyphInWeaponCoef;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = newILvl;

        this.edit.setGlyphILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /* SIGNET : ------------------------------------------------------------- */

    /**
     * Update elements related to signet's item/id
     */
    this.updateSignet = function() {
        var newId = this.edit.getSignetId();

        // retrieve full signet object from the data model
        var newSignet = (newId == 'none' ? swlcalc.data.signets.noneSignet : swlcalc.data.signets.slot[this.kind][this.edit.getSignetId() - 1]);

        // update image
        var newImage = 'assets/images/icons/signet/' + (newSignet == swlcalc.data.signets.noneSignet ? 'none' : this.id) + '.png';
        this.edit.setSignetImgItem(newImage);

        var newDescription = newSignet.description;
        // add "-edit" suffix here to avoid id collision with slot-recap //TODO/REFACTOR better way to do this ?
        this.edit.setSignetDescription(newDescription.replace(/%id/g, this.id + '-edit'));
        // add "-recap" suffix here to avoid id collision with slot-edit //TODO/REFACTOR better way to do this ?
        this.recap.setSignetDescription(newDescription.replace(/%id/g, this.id + '-recap'));

        this.recap.setSignetItem(newSignet.name);
        if (this.isWeapon()) this.recap.setAffix(newSignet.name);
    };


    /**
     * Update elements related to signet's rarity
     */
    this.updateSignetRarity = function() {
        var newRarity = this.edit.getSignetRarity();

        this.edit.setSignetImgRarity('assets/images/icons/rarity/' + newRarity + '-42x42.png');
        this.recap.el.signetTitle.attr('class', 'color-' + newRarity);
        this.edit.el.signetLabelLevel.attr('class', 'label-level little border-' + newRarity);
        this.recap.setSignetRarity(swlcalc.util.capitalize(newRarity));
    };

    /**
     * Update elements related to signet's level
     */
    this.updateSignetLevel = function() {
        var newLevel = this.edit.getSignetLevel();

        this.edit.setSignetLabelLevel(newLevel);
        this.recap.setSignetLevel(newLevel);
    };

    /**
     * Update the dynamic bonus displayed in the signet's description
     */
    this.updateSignetBonus = function() {
        if (this.edit.getSignetId() == 'none') return;

        var signet = swlcalc.data.signets.slot[this.kind][this.edit.getSignetId() - 1]
        var levelMultiplier = this.edit.getSignetLevel() - 1;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1
        if (signet.stat == 'Combat Power') {
            coef = swlcalc.summary.combatPower();
        } else if (signet.stat == 'Healing Power') {
            coef = swlcalc.summary.healingPower();
        }

        if (this.isWeapon()) {
            var signetData = signet.quality[this.edit.getEquipmentQuality()];

            for (i = 0; i < signetData.length; i++) {
                var newBonusVal = swlcalc.util.precisionRound(signetData[i] * coef, signet.decimals[i]);
                this.edit.setSignetBonusN(i + 1, newBonusVal);
                this.recap.setSignetBonusN(i + 1, newBonusVal);
            }

            // update affix bonus's color (will do nothing if signet-wrapper doesnt exist)
            // not part of the above loop because, for the moment, there can be only one value at a time for which this coloring applies
            var newClass = 'bonus-val color-' + swlcalc.data.rarityMapping.toName[this.edit.getEquipmentQuality()];
            this.edit.setSignetBonusWrapper(newClass);
            this.recap.setSignetBonusWrapper(newClass);
        } else {
            var signetData = signet.ratio[this.edit.getSignetRarity()];

            for (i = 0; i < signetData.init.length; i++) {
                var newBonusVal = swlcalc.util.precisionRound((signetData.init[i] + signetData.perLevel[i] * levelMultiplier) * coef, signet.decimals[i]);
                this.edit.setSignetBonusN(i + 1, newBonusVal);
                this.recap.setSignetBonusN(i + 1, newBonusVal);
            }
        }
    };

    /**
     * Update #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var newILvl = 0;
        if (this.edit.getSignetId() != 'none') {
            newILvl = this.computeItemILvlWithoutQuality('signet', this.edit.getSignetRarity(), this.edit.getSignetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = newILvl;

        this.edit.setSignetILvl(Math.round(newILvl));
        this.updateILvl();
    };

    /* OTHER : -------------------------------------------------------------- */

    /**
     * Reset slot by setting default values for each select
     */
    this.reset = function() {
        this.edit.setEquipmentId("none");
        this.edit.setEquipmentRarity("standard");
        this.edit.setEquipmentQuality("1");
        this.edit.setEquipmentLevel("1");

        this.edit.setGlyphId("none");
        this.edit.setGlyphRarity("standard");
        this.edit.setGlyphQuality("1");
        this.edit.setGlyphLevel("1");

        this.edit.setSignetId("none");
        this.edit.setSignetRarity("standard");
        this.edit.setSignetLevel("1");
    };

    /**
     * Mapping function for import/export feature
     */
    this.state = function() {
        return {
            equipmentRarity:  this.edit.getEquipmentRarity(),
            equipmentQuality: this.edit.getEquipmentQuality(),
            equipmentLevel:   this.edit.getEquipmentLevel(),
            glyphId:          this.edit.getGlyphId(),
            glyphRarity:      this.edit.getGlyphRarity(),
            glyphQuality:     this.edit.getGlyphQuality(),
            glyphLevel:       this.edit.getGlyphLevel(),
            signetId:         this.edit.getSignetId(),
            signetRarity:     this.edit.getSignetRarity(),
            signetLevel:      this.edit.getSignetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var gmap  = swlcalc.data.secondaryStatMapping.toNum;
        var rmap  = swlcalc.data.rarityMapping.toNum;
        return {
            equipmentId:      this.stripContent(this.edit.getEquipmentId()),
            equipmentRarity:  this.stripContent(this.edit.getEquipmentRarity(), rmap),
            equipmentQuality: this.edit.getEquipmentQuality(),
            equipmentLevel:   this.edit.getEquipmentLevel(),
            glyphId:          this.stripContent(this.edit.getGlyphId(), gmap),
            glyphRarity:      this.stripContent(this.edit.getGlyphRarity(), rmap),
            glyphQuality:     this.edit.getGlyphQuality(),
            glyphLevel:       this.edit.getGlyphLevel(),
            signetId:         this.stripContent(this.edit.getSignetId()),
            signetRarity:     this.stripContent(this.edit.getSignetRarity(), rmap),
            signetLevel:      this.stripContent(this.edit.getSignetLevel())
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
     * Calculates item power for the given item that has quality attribute
     */
    this.computeItemILvlWithQuality = function(element, rarity, quality, level) {
        var data = swlcalc.data.ilvl[element][rarity][quality];
        return data.init + data.perLevel * (level - 1);
    };

    /**
     * Calculates item power for the given item that doesn't have quality attribute
     */
    this.computeItemILvlWithoutQuality = function(element, rarity, level) {
        var data = swlcalc.data.ilvl[element][rarity];
        return data.init + data.perLevel * (level - 1);
    };

    /**
     * Retrieve "raw" protection value for this slot (i.e without AA applied)
     */
    this.getRawProtValue = function() {
        var data = swlcalc.data.protection[this.subgroup][this.edit.getEquipmentRarity()][this.edit.getEquipmentQuality()];
        var lvl  = this.edit.getEquipmentLevel() - 1;

        return data.init + Math.round(data.perLevel * lvl);
    };
};
