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
        //TODO/REFACTOR : shall be done in a better way
        //skip this function for the weapons (their dropdown is already filled)
        if (slot.group == 'weapon') return;

        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        //TODO/REFACTOR : possible confusion between slot.group (major, minor..) and slot.id_prefix (ring, neck..)
        var items = swlcalc.data.items.slot[slot.id_prefix];

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

        //TODO/REFACTOR : to improve
        var idToUse = (slot.id_prefix == 'weapon2' ? 'weapon' : slot.id_prefix);
        var signetsInSlotGroup = swlcalc.data.signets.slot[idToUse];

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
        var signet_icon_url = 'assets/images/icons/signet/none.png';
        var signet_rarity_url = 'assets/images/icons/rarity/none-42x42.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    /**
     * Event handlers : Item |
     *                       V
     */

    this.handleItemChange = function(event) {
        slotObj.updateTalismanImgIcon();
        swlcalc.summary.updateAllStats();
    };

    this.handleWtypeChange = function(event) {
        var wtype = $(this).val();
        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
        slotObj.updateWeaponImgIcon();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Triggered when the value of a rarity select is changed.
     * Triggers color change for the rarity select that sent the event.
     * Triggers color change for the related item image border.
     * Triggers choices list update for the select level of the same slot.
     */
    //TODO/REFACTOR : review the way it uses slotObj.id
    this.handleRarityChange = function(event) {
        var newRarity = $("#" + slotObj.id + "-rarity option:selected").val();

        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-rarity option:selected").attr('class'));

        slotObj.updateImgBorder();

        slotObj.el.level.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        // TODO/FEATURE : the for loop to generate all the values between min(1) & max(20/25/30/35/70) is disabled
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

    /**
     * Event handlers : Glyph |
     *                        V
     */

    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphStatLabel();
        slotObj.updateGlyphImgIcon();
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-glyph-rarity option:selected").attr('class'));
        slotObj.updateGlyphImgBorder();
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

    /**
     * Event handlers : Signet |
     *                         V
     */

    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        //weapon don't have signet item power
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetItemPower();
            slotObj.updateTotalItemPower();
        }
        swlcalc.summary.updateAllStats();
    };

    this.handleSignetRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-signet-rarity option:selected").attr('class'));
        self.handleSignetChange(event);
    };

    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    //TODO/REFACTOR : to reimplement
    // this.updateTextColor = function(select) {
    //     console.log("select = ");
    //     console.log(select);
    //     var newClass = $("#" + select.attr('id') + " option:selected").attr('class');
    //     console.log("newClass = " + newClass);
    //     $(select).attr("class", newClass);
    // };
};
