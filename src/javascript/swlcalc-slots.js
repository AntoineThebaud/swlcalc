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
        return ['head', 'weapon', 'weapon2', 'ring', 'neck', 'wrist', 'luck', 'waist', 'occult'];
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
        itemId: $('#' + this.id + '-itemId'),
        wtype: $('#' + this.id + '-wtype'),
        rarity: $('#' + this.id + '-rarity'),
        quality: $('#' + this.id + '-quality'),
        level: $('#' + this.id + '-level'),
        powerValue: $('#' + this.id + '-power-value'),
        iconBorderImg: $('#' + this.id + '-img-rarity'),
        glyph: $('#' + this.id + '-glyph'),
        glyphRarity: $('#' + this.id + '-glyph-rarity'),
        glyphQuality: $('#' + this.id + '-glyph-quality'),
        glyphLevel: $('#' + this.id + '-glyph-level'),
        glyphValue: $('#' + this.id + '-glyph-value'),
        glyphStat: $('#' + this.id + '-glyph-stat'),
        glyphIconBorderImg: $('#' + this.id + '-glyph-img-rarity'),
        signetId: $('#' + this.id + '-signet'),
        signetRarity: $('#' + this.id + '-signet-rarity'),
        signetLevel: $('#' + this.id + '-signet-level'),
        signetIconImg: $('#' + this.id + '-signet-img-icon'),
        signetIconBorderImg: $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        nameWarning: $('#' + this.id + '-name-warning'),
    };

    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
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
            return this.group == 'weapon' ? this.el.wtype.val() : 'none';
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

    this.updateIconBorder = function(rarity) {
        var rarity_url = 'assets/images/icons/' + rarity + '.png';
        this.el.iconBorderImg.attr('src', rarity_url);
    };

    //TODO : it doesn't refresh when changing item ID
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
        this.el.powerValue.html(this.powerValue() !== 0 ? '+' + this.powerValue() : 0);
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
        // console.log("============================================");
        // console.log("this.glyph() == ");console.log(this.glyph());
        // console.log(swlcalc.data.glyph_data.stat[this.glyph()]);
        // console.log("this.glyphRarity() == ");console.log(this.glyphRarity());
        // console.log(swlcalc.data.glyph_data.stat[this.glyph()].rarity[this.glyphRarity()]);
        // console.log("this.glyphQuality() == ");console.log(this.glyphQuality());
        // console.log(swlcalc.data.glyph_data.stat[this.glyph()].rarity[this.glyphRarity()].quality[this.glyphQuality()]);
        // console.log("this.glyphLevel() == ");console.log(this.glyphLevel());
        // console.log(swlcalc.data.glyph_data.stat[this.glyph()].rarity[this.glyphRarity()].quality[this.glyphQuality()].level[this.glyphLevel()]);
        // console.log("============================================");
        return swlcalc.data.glyph_data.stat[this.glyph()].rarity[this.glyphRarity()].quality[this.glyphQuality()].level[this.glyphLevel()];
    };

    this.updateGlyphValue = function() {
        this.el.glyphValue.html(this.glyphValue() !== 0 ? '+' + this.glyphValue() : 0);
    };

    this.updateGlyphStatLabel = function(newStat) {
        this.el.glyphStat.html(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newStat]);
    };

    this.updateGlyphIconBorder = function(rarity) {
        var rarity_url = 'assets/images/icons/' + rarity + '.png';
        this.el.glyphIconBorderImg.attr('src', rarity_url);
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

    this.signet = function() {
        foundSignet = swlcalc.data.signet_data.find(this.group, this.signetId());
        if (foundSignet.id == 0 && swlcalc.data.signet_data[this.id] !== undefined) {
            return foundSignet = swlcalc.data.signet_data.find(this.id, this.signetId());
        }
        return foundSignet !== 0 || foundSignet !== undefined ? foundSignet : null;
    };

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
        if (signet.id !== 0 && signetRarity != 'none') {
            this.updateSignetIconBorder(signetRarity);
            this.updateSignetIconImage(signet);
        } else if (signet.id !== 0 && signetRarity == 'none') {
            this.signetRarity('normal');
        } else if (signetRarity != 'none' && signet.id === 0) {
            this.updateSignetIconBorder(signetRarity);
            this.updateSignetIconImageFromName(this.group + '_dps');
        } else {
            this.updateSignetIconBorder('normal');
            this.updateSignetIconImageFromName(this.group + '_dps');
        }
    };

    this.updateSignetIconBorder = function(signetRarity) {
        var signet_rarity_url = 'assets/images/icons/' + signetRarity + '.png';
        this.el.signetIconBorderImg.attr('src', signet_rarity_url);
    };

    this.updateSignetIconImage = function(signet) {
        this.updateSignetIconImageFromName(signet.icon);
    };

    this.updateSignetIconImageFromName = function(name) {
        var signet_icon_url = 'assets/images/icons/' + name + '.png';
        this.el.signetIconImg.attr('src', signet_icon_url);
    };

    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
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
        this.el.itemId.change();

        this.el.glyph.prop("selectedIndex", 0);
        this.el.glyphRarity.prop("selectedIndex", 0);
        this.el.glyphQuality.prop("selectedIndex", 0);
        this.el.glyphLevel.prop("selectedIndex", 0);

        this.el.signetId.prop("selectedIndex", 0);
        this.el.signetRarity.prop("selectedIndex", 0);
        this.el.signetLevel.prop("selectedIndex", 0);

        this.el.itemId.change();
        this.el.rarity.change();
        this.el.glyphRarity.change();
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
            //itemId: this.stripContent(this.item().id),
            itemId: this.stripContent(this.itemId()),
            wtype: this.stripContent(this.wtype(), wmap),
            //role: this.isWeapon() ? '' : this.stripContent(this.item().role), TODO!
            rarity: this.stripContent(this.rarity(), rmap),
            quality: this.isWeapon() ? this.stripContent(this.quality(), wqmap) : this.stripContent(this.quality(), tqmap),
            level: this.level(),
            glyph: this.stripContent(this.glyph(), gmap),
            glyph_rarity: this.stripContent(this.glyphRarity(), rmap),
            glyph_quality: this.stripContent(this.glyphQuality(), gqmap),
            glyph_level: this.glyphLevel(),
            signet_id: this.stripContent(this.signetId()),
            signet_rarity: this.stripContent(this.signetRarity(), rmap),
            signet_level: this.signetLevel()
        };
    };

    this.stripContent = function(val, mapping) {
        if (val == null || val == 'none') {
            return 0;
        } else if (mapping !== undefined) {
            return mapping[val];
        } else {
            return val;
        }
    };

    // COST FEATURE DISABLED. NEED REVAMP
    // this.itemCost = function () {
    //     // non-custom items do not cost bullion/pantheon
    //     if(this.item().id > 3) {
    //         return {
    //             bullion: 0,
    //             pantheon: 0
    //         };
    //     }
    //     return swlcalc.data.costs[this.isWeapon() ? 'weapon' : 'talisman'][this.rarity()];
    // };
    //
    // this.glyphCost = function () {
    //     // items with built in glyphs do not cost bullion/pantheon
    //     if(this.item().glyph) {
    //         return {
    //             bullion: 0,
    //             pantheon: 0
    //         };
    //     }
    //     return swlcalc.data.costs['glyph'][this.glyphRarity()];
    // }
    //
    // this.blackBullionCost = function() {
    //     var blackBullions = 0;
    //     blackBullions += this.glyphCost().bullion;
    //     blackBullions += this.itemCost().bullion;
    //     return blackBullions;
    // };
    //
    // this.markOfThePantheonCost = function () {
    //     return this.itemCost().pantheon || 0;
    // };
    //
    // this.astralFuseCost = function() {
    //     return this.glyphCost().astral_fuse ? 1 : 0;
    // };
    //
    // this.criterionUpgradeCost = function () {
    //     return this.itemCost().criterion_upgrade ? 1 : 0;
    // };
    //
    // this.supernalUpgradeCost = function () {
    //     return this.itemCost().supernal_upgrade ? 1 : 0;
    // };
    //
    // this.eleventhHourCost = function () {
    //     return this.glyphCost().eleventh_hour_kit ? 1 : 0;
    // };
};
