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
        slotObj.el.itemId.change(this.handleItemChange);
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
        // makes the function compatible both for talismans and weapons
        var slotToUse;
        if (slot.group == 'weapon') {
            slotToUse = 'weapon'
        } else {
            slotToUse = slot.id_prefix
        }

        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));
        var items = swlcalc.data.items.slot[slotToUse].slice();

        //sort alphabetically for a better ergonomy
        //sort for weapons include weapon type as prefix => TODO/REFACTOR : code duplication
        if (slot.group == 'weapon') {
            items.sort(function(a, b) {
                if (a.type + a.name.toLowerCase() > b.type + b.name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            });
        } else {
            items.sort(function(a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            });
        }
        items.forEach(function(item) {
            slotObj.el.itemId.append($('<option>', {
                value: item.id,
                //TODO/REFACTOR : quick & dirty ; we test 3 times the weapon condition in this function
                text: (slot.group == 'weapon' ? '[' + item.type + '] ' + item.name : item.name)
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
        var signetsInSlotGroup = swlcalc.data.signets.slot[idToUse].slice();
        //sort alphabetically for a better ergonomy
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
     */
    this.handleItemChange = function(event) {
        //TODO/FEATURE : reenable slot name display
//      var wtype = $(this).val();
//      if(wtype != 'none') {
//          slotObj.name(': ' + swlcalc.util.capitalise(wtype));
//      } else {
//          slotObj.name('');
//      }
        slotObj.updateItem();
        slotObj.updatePowerRating();
        slotObj.updateILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-rarity
     * -> triggers rarity's text color update for the slot.
     * -> triggers border image update for the slot.
     * -> triggers image update for the slot.
     * -> triggers available levels refresh for the slot.
     * -> triggers power rating update for the slot.
     * -> triggers ilvl update for the slot.
     */
    //TODO/REFACTOR : review the way it uses slotObj.id
    this.handleRarityChange = function(event) {
        var newRarity = $("#" + slotObj.id + "-rarity option:selected").val();

        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-rarity option:selected").attr('class'));

        slotObj.updateImgBorder();

        //refresh the list of available levels
        slotObj.el.level.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        for (i = maxLvl; i >= minLvl ; i--) {
           slotObj.el.level.append($('<option>', {
               value: i,
               text: i
           }));
        }

        slotObj.updatePowerRating();
        slotObj.updateILvl();
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
     */
    this.handleLevelChange = function(event) {
        slotObj.updateILvl();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };

    /**********************************************************************************
     * Event handlers : Glyph |
     *                        V
     **********************************************************************************/

    /**
     * Handler for #slot-glyph
     */
    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphImgIcon();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphLabel();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-rarity
     * -> triggers rarity's text color update for the glyph.
     */
    this.handleGlyphRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-glyph-rarity option:selected").attr('class'));
        slotObj.updateGlyphImgBorder();
        slotObj.updateGlyphILvl();
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
     */
    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    }

    /**********************************************************************************
     * Event handlers : Signet |
     *                         V
     **********************************************************************************/

    /**
     * Handler for #slot-signet
     * -> triggers signet update for the signet. //TODO : review slotObj.updateSignet()
     * -> triggers ilvl update for the signet.
     */
    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        //weapon signets (= suffixes) don't have item power attribute
        //TODO/REFACTOR : to bind a handleSuffixChange function for weapons in order to do a "if" just on swlcalc initalization and not on each signet change like this !
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetILvl();
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-rarity
     * -> triggers rarity's text color update for the signet.
     * -> triggers signet update for the signet. //TODO : review slotObj.updateSignet()
     */
    //TODO/REFACTOR : code duplication with handleSignetChange()
    this.handleSignetRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-signet-rarity option:selected").attr('class'));
        slotObj.updateSignetIcon();
        //weapon signets (= suffixes) don't have item power attribute
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetILvl();
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-level
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetILvl();
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
