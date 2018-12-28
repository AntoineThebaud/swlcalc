var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {

    var slotObj = swlcalc.gear.slots[slot.id_prefix];

    this.init = function() {
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

        if (slot.kind == "weapon") {
            slotObj.el.signetId.change(this.handleSuffixChange);
        } else {
            slotObj.el.signetId.change(this.handleSignetChange);
            slotObj.el.signetRarity.change(this.handleSignetRarityChange);
            slotObj.el.signetLevel.change(this.handleSignetLevelChange);
        }
    };

    /**
     * Loads items (swlcalc-data-items) as options list in the #slot-itemId select
     */
    this.addItemsToSelect = function() {
        var items = swlcalc.data.items.slot[slot.kind].slice();

        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        if (slot.group == 'weapon') {
            //sort alphabetically for a better ergonomy
            items.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.type + a.name.toLowerCase(), b.type + b.name.toLowerCase())
            });
            items.forEach(function(item) {
                slotObj.el.itemId.append($('<option>', {
                    value: item.id,
                    text: '[' + item.type + '] ' + item.name
                }));
            });
        } else {
            items.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
            });
            items.forEach(function(item) {
                slotObj.el.itemId.append($('<option>', {
                    value: item.id,
                    text:  item.name
                }));
            });
        }
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

        var signetsInSlotGroup = swlcalc.data.signets.slot[slot.kind].slice();
        //reorder elements to improve ergonomy
        signetsInSlotGroup.sort(function(a, b) {
            return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
        });
        $.each(signetsInSlotGroup, function(index, value) {
            slotObj.el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };


    /**
     * Updates the text color of the dropdown "select" by reusing the color of the selected option.
     */
    var updateTextColor = function(select) {
        $(select).attr("class", "color-" + select.value);
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
     */
    this.handleRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateImgBorder();

        //refresh the list of available levels
        slotObj.el.level.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[this.value];
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
     */
    this.handleGlyphRarityChange = function(event) {
        updateTextColor(this);
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
      * Handler for #slot-signet for weapons
      */
     this.handleSuffixChange = function(event) {
         slotObj.updateSignet();
         swlcalc.summary.updateAllStats();
     };

    /**
     * Handler for #slot-signet for talismans
     */
    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-rarity
     */
    this.handleSignetRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateSignetIcon();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-level
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };
};
