var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {
    var self = this;
    var slotObj = swlcalc.slots[slot.id_prefix];
    
    //TODO/REFACTOR : to rename as "init"
    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    /**
     * Associates the right process to each trigger.
     */
    this.bindEvents = function() {
        if (slotObj.isWeapon()) {
            slotObj.el.wtype.change(this.handleWtypeChange);
        } else {
            slotObj.el.itemId.change(this.handleItemChange);
        }
        slotObj.el.rarity.change(this.handleRarityChange);
        slotObj.el.quality.change(this.handleQualityChange);
        slotObj.el.level.change(this.handleLevelChange);

        slotObj.el.glyph.change(this.handleGlyphChange);
        slotObj.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.el.glyphLevel.change(this.handleGlyphLevelChange);

        slotObj.el.signetId.change(this.handleSignetChange);
        slotObj.el.signetRarity.change(this.handleSignetRarityChange);
        slotObj.el.signetLevel.change(this.handleSignetLevelChange);
    };
  
    /**
     * Loads items (swlcalc-data-items) as options list in the #slot-itemId select
     */
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
  
    /**
     * Loads signets (swlcalc-data-signets) as options list in the #slot-signet select
     */
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

    /**
     * Resets this signet field to the default value ("none" value, white border...)
     */
    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/signet/none.png';
        var signet_rarity_url = 'assets/images/icons/rarity/none-42x42.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    /**********************************************************************************
     * Event handlers : Item |
     *                       V
     **********************************************************************************/
    
    /**
     * Handler for #slot-itemId
     * -> triggers image update for the slot.
     */
    this.handleItemChange = function(event) {
        slotObj.updateTalismanImgIcon();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-wtype
     * -> triggers an image update.
     */
    this.handleWtypeChange = function(event) {
        var wtype = $(this).val();
        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
        slotObj.updateWeaponImgIcon();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-rarity
     * -> triggers a text color update.
     * -> triggers an image update.
     * -> triggers a dropdown options refresh.
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
        for (i = maxLvl; i >= minLvl ; i--) {
           slotObj.el.level.append($('<option>', {
               value: i,
               text: i
           }));
        }

        slotObj.updateILvl();
        slotObj.updateTotalILvl();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-quality
     */
    this.handleQualityChange = function(event) {
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-level
     * -> triggers item power updates.
     */
    this.handleLevelChange = function(event) {
        slotObj.updateILvl();
        slotObj.updateTotalILvl();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };

    /**********************************************************************************
     * Event handlers : Glyph |
     *                        V
     **********************************************************************************/
    
    /**
     * Handler for #slot-glyph
     * -> triggers a label update.
     * -> triggers an image update.
     */
    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphStatLabel();
        slotObj.updateGlyphImgIcon();
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-rarity
     * -> triggers a label update.
     * -> triggers an image update.
     * -> triggers item power updates.
     * -> triggers a text color update.
     */
    this.handleGlyphRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-glyph-rarity option:selected").attr('class'));
        slotObj.updateGlyphImgBorder();
        slotObj.updateGlyphILvl();
        slotObj.updateTotalILvl();
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-quality
     */
    this.handleGlyphQualityChange = function(event) {
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-level
     * -> triggers item power updates.
     */
    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphILvl();
        slotObj.updateTotalILvl();
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    }

    /**********************************************************************************
     * Event handlers : Signet |
     *                         V
     **********************************************************************************/

    /**
     * Handler for #slot-signet
     * -> triggers signet update. //TODO : review slotObj.updateSignet()
     * -> triggers item power updates.
     */
    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        //weapon signets (= suffixes) don't have item power attribute
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetILvl();
            slotObj.updateTotalILvl();
        }
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-signet-rarity
     * -> triggers text color update.
     */
    //TODO : forwards the call to handleSignetChange => to review
    this.handleSignetRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-signet-rarity option:selected").attr('class'));
        self.handleSignetChange(event);
    };

    /**
     * Handler for #slot-signet-level
     * -> triggers item power updates.
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetILvl();
        slotObj.updateTotalILvl();
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
