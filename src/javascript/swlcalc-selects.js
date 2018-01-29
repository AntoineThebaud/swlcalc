var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {
    var self = this;
    var slotObj = swlcalc.slots[slot.id_prefix];

    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    this.bindEvents = function() {
        if (slotObj.isWeapon()) {
            slotObj.el.wtype.change(this.handleWtypeChange);
        } else {
            slotObj.el.itemId.change(this.handleItemChange);
        }
        slotObj.el.rarity.change(this.handleRarityChange);
        slotObj.el.quality.change(swlcalc.summary.updateAllStats);
        slotObj.el.level.change(this.handleLevelChange);

        slotObj.el.glyph.change(this.handleGlyphChange);
        slotObj.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.el.glyphLevel.change(this.handleGlyphLevelChange);

        slotObj.el.signetId.change(this.handleSignetChange);
        slotObj.el.signetRarity.change(this.handleSignetRarityChange);
        slotObj.el.signetLevel.change(this.handleSignetLevelChange);
    };

    this.addItemsToSelect = function() {
        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        var items = swlcalc.data.findItems(slot.group);
        if(slot.id_prefix != 'head'){
            items = items.concat(swlcalc.data.findItems(slot.id_prefix));
        }

        items.forEach(function(item) {
            slotObj.el.itemId.append($('<option>', {
                value: item.id,
                text: item.name
            }));
        });
    };

    this.addSignetsToSelect = function() {
        slotObj.el.signetId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        this.updateToDefaultSignet();

        var signetsInSlotGroup = $.merge([], swlcalc.data.signet_data[slot.group]);
        // weapon signets can also be slotted in head
        $.merge(signetsInSlotGroup, this.getSignetsForHead(slot.group));
        // merge in non-head and non-weapon signets in this slot
        $.merge(signetsInSlotGroup, this.getSignetsForSlot());

        signetsInSlotGroup.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });
        $.each(signetsInSlotGroup, function(index, value) {
            slotObj.el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };

    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/' + slot.group + '_dps.png';
        var signet_rarity_url = 'assets/images/icons/standard.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    this.getSignetsForHead = function(group) {
        if (group == 'head') {
            return swlcalc.data.signet_data['weapon'];
        }
        return [];
    };

    this.getSignetsForSlot = function() {
        if (slot.id_prefix !== 'head' && slot.id_prefix !== 'weapon' && typeof swlcalc.data.signet_data[slot.id_prefix] !== 'undefined') {
            return swlcalc.data.signet_data[slot.id_prefix];
        }
        return [];
    };

    /**
     * Event handlers |
     *                V
     */

    //TODO : refactor
    this.handleItemChange = function(event) {
        swlcalc.summary.updateAllStats();
    };

    this.handleWtypeChange = function(event) {
        var wtype = $(this).val();

        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Triggered when the value of a rarity select is changed.
     * Triggers color change for the rarity select that sent the event.
     * Triggers color change for the related item image border.
     * Triggers choices list update for the select level of the same slot.
     */
    this.handleRarityChange = function(event) {
        var newRarity = event.target.selectedOptions[0].value;

        self.updateTextColor(event.target);
        slotObj.updateIconBorder(newRarity); //TODO : abstract layer ?

        slotObj.el.level.empty();

        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        // TODO : the for loop to generate all the values between min(1) & max(20/25/30/35/70) is disabled
        // as long as intermediary values are not referenced. Thus only min & max are displayed for the moment
        // for (i = maxLvl; i >= minLvl ; i--) {
        //    slotObj.el.level.append($('<option>', {
        //        value: i,
        //        text: i
        //    }));
        // }
        slotObj.el.level.append($('<option>', {value: maxLvl, text: maxLvl}));
        slotObj.el.level.append($('<option>', {value: minLvl, text: minLvl}));

        slotObj.updateItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleLevelChange = function(event) {
        slotObj.updateItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphStatLabel(event.target.selectedOptions[0].value); //TODO : abstract layer ?
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphRarityChange = function(event) {
        self.updateTextColor(event.target);
        slotObj.updateGlyphIconBorder(event.target.selectedOptions[0].value); //TODO : abstract layer ?
        slotObj.updateGlyphItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphQualityChange = function(event) {
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    }

    this.handleSignetChange = function(event) {
        var signet = slotObj.signet();
        slotObj.updateSignet();
        slotObj.updateSignetItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleSignetRarityChange = function(event) {
        self.updateTextColor(event.target);
        self.handleSignetChange(event);
    };

    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.updateTextColor = function(select) {
        $(select).attr("class", select.selectedOptions[0].className);
    };
};
