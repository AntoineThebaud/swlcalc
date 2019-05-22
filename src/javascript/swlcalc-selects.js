var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {

    var slotObj = swlcalc.gear.slots[slot.id];

    this.init = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    /**
     * Associates the right processing to each trigger.
     */
    this.bindEvents = function() {
        slotObj.edit.el.equipmentId.change(this.handleEquipmentItemChange);
        slotObj.edit.el.equipmentRarity.change(this.handleEquipmentRarityChange);
        slotObj.edit.el.equipmentQuality.change(this.handleEquipmentQualityChange);
        slotObj.edit.el.equipmentLevel.change(this.handleEquipmentLevelChange);

        slotObj.edit.el.glyphId.change(this.handleGlyphChange);
        slotObj.edit.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.edit.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.edit.el.glyphLevel.change(this.handleGlyphLevelChange);

        if (slot.kind == "weapon") {
            slotObj.edit.el.signetId.change(this.handleSuffixChange);
        } else {
            slotObj.edit.el.signetId.change(this.handleSignetChange);
            slotObj.edit.el.signetRarity.change(this.handleSignetRarityChange);
            slotObj.edit.el.signetLevel.change(this.handleSignetLevelChange);
        }
    };

    /**
     * Loads items (swlcalc-data-equipments) as options list in the #slot-itemId select
     */
    this.addItemsToSelect = function() {
        var items = swlcalc.data.equipments.slot[slot.kind].slice();

        slotObj.edit.el.equipmentId.append($('<option>', {
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
                slotObj.edit.el.equipmentId.append($('<option>', {
                    value: item.id,
                    text: '[' + item.type + '] ' + item.name
                }));
            });
        } else {
            items.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
            });
            items.forEach(function(item) {
                slotObj.edit.el.equipmentId.append($('<option>', {
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
        slotObj.edit.el.signetId.append($('<option>', {
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
            slotObj.edit.el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };


    /**
     * Updates the text color of the dropdown "select" by reusing the color of the selected option.
     */
    var updateTextColor = function(select) {
        $(select).attr('class', 'color-' + select.value);
    };

    /**
     * Resets this signet field to the default value ("none" value, white border...)
     */
    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/signet/none.png';
        var signet_rarity_url = 'assets/images/icons/rarity/none-42x42.png';
        $('#' + slot.id + '-signet-img-item').attr('src', signet_icon_url);
        $('#' + slot.id + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    /**********************************************************************************
     * Event handlers : Item |
     *                       V
     **********************************************************************************/

    /**
     * Handler for #slot-itemId
     */
    this.handleEquipmentItemChange = function(event) {
        slotObj.updateEquipment();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-rarity
     */
    this.handleEquipmentRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateEquipmentRarity();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-quality
     */
    this.handleEquipmentQualityChange = function(event) {
        slotObj.updateEquipmentQuality();
        slotObj.updateEquipmentStatRating();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-level
     */
    this.handleEquipmentLevelChange = function(event) {
        slotObj.updateEquipmentLevel();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();
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
        slotObj.updateGlyph();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-rarity
     */
    this.handleGlyphRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateGlyphRarity();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-quality
     */
    this.handleGlyphQualityChange = function(event) {
        slotObj.updateGlyphQuality();
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-level
     */
    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphLevel();
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
        slotObj.updateSignetRarity();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-level
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetLevel();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };
};
