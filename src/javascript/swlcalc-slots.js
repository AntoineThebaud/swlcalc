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

    var drawPrimaryWeapon = function() {
        swlcalc.slots.weapon2.sheathWeapon();
        swlcalc.slots.weapon.weaponDrawn = true;
    };

    var length = function() {
        return swlcalc.data.template_data.slots.length;
    };

    var indices = function() {
        return ['head', 'weapon', 'weapon2', 'finger', 'neck', 'wrist', 'luck', 'waist', 'occult'];
    };

    var hasSlot = function(slot) {
        return this.hasOwnProperty(slot) && $.inArray(slot, indices()) != -1;
    };

    var reset = function() {
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                this[slotId].reset();
            }
        }
    };

    var state = function() {
        var slotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                slotStates[slotId] = this[slotId].state();
            }
        }
        return slotStates;
    };

    var mappedState = function() {
        var mappedSlotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                mappedSlotStates[slotId] = this[slotId].mappedState();
            }
        }
        return mappedSlotStates;
    };

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

    this.el = {
        div: $('#' + this.id + '-slot'),
        name: $('#' + this.id + '-name'),
        totalItemPower: $('#' + this.id + '-total-item-power'),
        itemId: $('#' + this.id + '-itemId'),
        wtype: $('#' + this.id + '-wtype'),
        rarity: $('#' + this.id + '-rarity'),
        quality: $('#' + this.id + '-quality'),
        level: $('#' + this.id + '-level'),
        powerValue: $('#' + this.id + '-power-value'),
        itemPower: $('#' + this.id + '-item-power'),
        imgIcon: $('#' + this.id + '-img-icon'),
        imgBorder: $('#' + this.id + '-img-rarity'),
        glyph: $('#' + this.id + '-glyph'),
        glyphRarity: $('#' + this.id + '-glyph-rarity'),
        glyphQuality: $('#' + this.id + '-glyph-quality'),
        glyphLevel: $('#' + this.id + '-glyph-level'),
        glyphValue: $('#' + this.id + '-glyph-value'),
        glyphStat: $('#' + this.id + '-glyph-stat'),
        glyphImgIcon: $('#' + this.id + '-glyph-img-icon'),
        glyphImgBorder: $('#' + this.id + '-glyph-img-rarity'),
        glyphItemPower: $('#' + this.id + '-glyph-item-power'),
        signetId: $('#' + this.id + '-signet'),
        signetRarity: $('#' + this.id + '-signet-rarity'),
        signetLevel: $('#' + this.id + '-signet-level'),
        signetImgIcon: $('#' + this.id + '-signet-img-icon'),
        signetImgBorder: $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        signetItemPower: $('#' + this.id + '-signet-item-power'),
        nameWarning: $('#' + this.id + '-name-warning'),
    };

    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
    };

    this.itemPower = function() {
        if (arguments.length == 1) {
            this.el.totalItemPower.html(arguments[0]);
        } else {
            return parseInt(this.el.totalItemPower.html());
        }
    };


    /**
     * Calculate item power for the whole slot (talisman/weapon + glyph + signet) and updates GUI with it
     * TODO/REFACTOR : code duplication with updateItemPower, updateGlyphItemPower and updateSignetItemPower : should reuse these individual item power calculations
     */
    this.updateTotalItemPower = function() {
        var itemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_init,
                                                swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_per_level,
                                                (this.level() - 1));
        // Weapons are worth ~15% more Item Power than talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            itemPower = itemPower * 1.15;
        }

        var glyphItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_init,
                                                     swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_per_level,
                                                     (this.glyphLevel() - 1));
        // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            glyphItemPower = glyphItemPower * 1.225;
        }

        //weapons dont have signetItemPower
        var signetItemPower = 0;
        if (!this.isWeapon()) {
            var signetItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_per_level,
                                                          (this.signetLevel() - 1));
        }
        this.itemPower(Math.round(itemPower + glyphItemPower + signetItemPower));
    };

    /**
     * Weapon functions |
     *                  V
     */

    this.isWeapon = function() {
        return this.group == 'weapon';
    };

    this.sheathWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = false;
            this.el.div.hide();
        }
    };

    this.drawWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = true;
            this.el.div.show();
        }
    };

    this.wtype = function() {
        if (arguments.length == 1) {
            this.el.wtype.val(arguments[0]);
        } else {
            return this.isWeapon() ? this.el.wtype.val() : 'none';
        }
    };

    /**
     * Item functions |
     *                V
     */

    this.item = function() {
        var itemId = this.itemId()
        var item = swlcalc.data.items.find(function(item) {
            return item.id == itemId;
        });
        if (item) {
            return item;
        }
    }

    this.itemId = function() {
        if (arguments.length == 1) {
            this.el.itemId.val(arguments[0]);
        } else {
            return this.group != 'weapon' ? this.el.itemId.val() : 'none';
        }
    };

    this.rarity = function() {
        if (arguments.length == 1) {
            this.el.rarity.val(arguments[0]);
        } else {
            return this.el.rarity.val();
        }
    };

    this.quality = function() {
        if (arguments.length == 1) {
            this.el.quality.val(arguments[0]);
        } else {
            return this.el.quality.val();
        }
    };

    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateTalismanImgIcon = function() {
        var item_url = 'assets/images/icons/talisman/' + $("#" + this.id + "-itemId option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateWeaponImgIcon = function() {
        var item_url = 'assets/images/icons/weapon/' + $("#" + this.id + "-wtype option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-rarity option:selected").val() + '-42x42.png';
        this.el.imgBorder.attr('src', rarity_url);
    };

    this.powerValue = function() {
        if (this.isWeapon()) {
            if (this.wtype() == 'none') {
                return 0;
            } else {
                return swlcalc.data.custom_gear_data.slot[this.group].rarity[this.rarity()].level[this.level()];
            }
        } else {
            if (this.itemId() == 'none') {
                return 0;
            } else {
                return swlcalc.data.custom_gear_data.slot[this.group].rarity[this.rarity()].quality[this.quality()].level[this.level()];
            }
        }
    };

    this.updatePowerValue = function() {
        var powerValueDisplay = this.powerValue();
        if (this.powerValue() !== 0) {
            powerValueDisplay = '+' + powerValueDisplay;
        }
        this.el.powerValue.html(powerValueDisplay);
    };

    /**
     * Calculate item power for the slot's item (talisman or weapon) and updates GUI with it
     * => calls calculateItemPower() function with item parameters
     * TODO/REFACTOR : rename function ?
     */
    this.updateItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_per_level,
                                                          (this.level() - 1));
        // Weapons are worth ~15% more Item Power than talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            calculatedItemPower = calculatedItemPower * 1.15;
        }
        this.el.itemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Glyph functions |
     *                 V
     */

    this.glyph = function() {
        if (arguments.length == 1) {
            this.el.glyph.val(arguments[0]);
        } else {
            return this.el.glyph.val();
        }
    };

    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.val(arguments[0]);
        } else {
            return this.el.glyphRarity.val();
        }
    };

    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.val(arguments[0]);
        } else {
            return this.el.glyphQuality.val();
        }
    };

    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.val(arguments[0]);
        } else {
            return this.el.glyphLevel.val();
        }
    };

    this.glyphValue = function() {
        if (this.glyph() == 'none') {
            return 0;
        }
        // Glyph value depends on the rarity-quality-level trio, neither the slot nor the stat are taken into account (while they were in TSW).
        // /!\ exception for crit power glyphs that give 97.3% of the value of other glyphs)
        var glyphValue = swlcalc.data.glyph_data.rarity[this.glyphRarity()].quality[this.glyphQuality()].level[this.glyphLevel()];
        if (this.glyph() == 'critical-power') {
            glyphValue = 0.973 * glyphValue;
        }
        return glyphValue;
    };

    this.updateGlyphValue = function() {
        this.el.glyphValue.html(this.glyphValue() !== 0 ? '+' + this.glyphValue().toFixed(0) : 0);
    };

    this.updateGlyphStatLabel = function() {
        var newStat = $("#" + this.id + "-glyph option:selected").val();
        this.el.glyphStat.html(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newStat]);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgIcon = function() {
        var rarity_url = 'assets/images/icons/glyph/' + $("#" + this.id + "-glyph option:selected").val() + '.png';
        this.el.glyphImgIcon.attr('src', rarity_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-glyph-rarity option:selected").val() + '-42x42.png';
        this.el.glyphImgBorder.attr('src', rarity_url);
    };

    /**
     * Calculate item power for the slot's glyph and updates GUI with it
     * => calls calculateItemPower() function with glyph parameters
     * TODO/REFACTOR : rename function ?
     */
    this.updateGlyphItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_per_level,
                                                          (this.glyphLevel() - 1));
        // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            calculatedItemPower = calculatedItemPower * 1.225;
        }
        this.el.glyphItemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Signet functions |
     *                  V
     */

    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.val(arguments[0]);
        } else {
            return this.el.signetRarity.val();
        }
    };

    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.val(arguments[0]);
        } else {
            return this.el.signetLevel.val();
        }
    };

    //TODO/REFACTOR : move code and delete this function ?
    this.signet = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
//         } else if (this.id == 'weapon' || this.id == 'weapon2') {
//             return swlcalc.data.suffixes.slot[this.signetId()];
        } else {
            //TODO/REFACTOR : patch to improve
            var idToUse = (this.id == 'weapon2' ? 'weapon' : this.id);
            return swlcalc.data.signets.slot[idToUse][this.signetId() - 1];
        }
    };

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

    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };

    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetRarity = this.signetRarity();
        this.updateSignetIconImage(signet);
        this.updateSignetIconBorder(signetRarity);
    };

    this.updateSignetIconBorder = function(signetRarity) {
        var signet_rarity_url = 'assets/images/icons/rarity/' + signetRarity + '-42x42.png';
        this.el.signetImgBorder.attr('src', signet_rarity_url);
    };

    this.updateSignetIconImage = function(signet) {
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var signet_icon_url = 'assets/images/icons/signet/' + pngName + '.png';
        this.el.signetImgIcon.attr('src', signet_icon_url);
    };

    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Calculate item power for the slot's signet and updates GUI with it
     * => calls calculateItemPower() function with signet parameters
     */
    this.updateSignetItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_per_level,
                                                          (this.signetLevel() - 1));
        this.el.signetItemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Other functions |
     *                 V
     */

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
     * Calculate item power for the given item (talisman, weapon, glyph or signet)
     */
    this.calculateItemPower = function(itemPowerInit, itemPowerPerLevel, levelMultiplier) {
        return itemPowerInit + itemPowerPerLevel * levelMultiplier;
    }
};
