var swlcalc = swlcalc || {};
swlcalc.gear = swlcalc.gear || {};
swlcalc.handler = swlcalc.handler || {};

swlcalc.gear.SlotHandler = function SlotHandler(slot) {

    var slotObj = swlcalc.gear.slots[slot.id];
    var previousGlyphId = "none";

    this.init = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addEquipmentsToSelect();

        // replace weapon dropdowns by enhanced version (text search..)
        if (slot.kind == "weapon") {
            slotObj.edit.el.equipmentId.select2({
              dropdownParent: $('#' + slot.id + '-edit-modal')
            });
        }
    };

    /**
     * Associates the right processing to each controller.
     */
    this.bindEvents = function() {
        slotObj.edit.el.equipmentId.change(this.handleEquipmentIdChange);
        slotObj.edit.el.equipmentRarity.change(this.handleEquipmentRarityChange);
        slotObj.edit.el.equipmentQuality.change(this.handleEquipmentQualityChange);
        slotObj.edit.el.equipmentLevel.change(this.handleEquipmentLevelChange);

        slotObj.edit.el.glyphId.change(this.handleGlyphIdChange);
        slotObj.edit.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.edit.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.edit.el.glyphLevel.change(this.handleGlyphLevelChange);

        if (slot.kind == "weapon") {
            slotObj.edit.el.signetId.change(this.handleAffixIdChange);
        } else {
            slotObj.edit.el.signetId.change(this.handleSignetIdChange);
            slotObj.edit.el.signetRarity.change(this.handleSignetRarityChange);
            slotObj.edit.el.signetLevel.change(this.handleSignetLevelChange);
        }
    };

    /**
     * Loads items (swlcalc-data-equipments) as options list in the #slot-equipment-id select
     */
    this.addEquipmentsToSelect = function() {
        slotObj.edit.el.equipmentId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        var equipments = swlcalc.data.equipments.slot[slot.kind].slice();

        if (slot.group == 'weapon') {
            //sort alphabetically on weapon type + name for a better ergonomy
            equipments.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.type + a.name.toLowerCase(), b.type + b.name.toLowerCase())
            });
            equipments.forEach(function(equipment) {
                slotObj.edit.el.equipmentId.append($('<option>', {
                    value: equipment.id,
                    text: '[' + equipment.type + '] ' + equipment.name
                }));
            });
        } else {
            //sort alphabetically on equipment name for a better ergonomy
            equipments.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
            });
            equipments.forEach(function(equipment) {
                slotObj.edit.el.equipmentId.append($('<option>', {
                    value: equipment.id,
                    text:  equipment.name
                }));
            });
        }
    };

    /**
     * Loads signets (swlcalc-data-signets) as options list in the #slot-signet-id select
     */
    this.addSignetsToSelect = function() {
        slotObj.edit.el.signetId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        var signets = swlcalc.data.signets.slot[slot.kind].slice();
        //reorder elements to improve ergonomy
        signets.sort(function(a, b) {
            return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
        });
        signets.forEach(function(signet) {
            slotObj.edit.el.signetId.append($('<option>', {
                value: signet.id,
                text: signet.name
            }));
        });
    };


    /**
     * Updates the text color of the dropdown "select" by reusing the color of the selected option.
     */
    var updateTextColor = function(select) {
        $(select).attr('class', 'color-' + select.value);
    };

    /**********************************************************************************
     * Event handlers : Item |
     *                       V
     **********************************************************************************/

    /**
     * Handler for #slot-equipment-id
     */
    this.handleEquipmentIdChange = function(event) {
        slotObj.updateEquipment();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();

        swlcalc.summary.updatePrimaryStats();
        swlcalc.summary.updateILvl();

        swlcalc.gear.updateAllDescriptions();
        swlcalc.summary.updateOtherBonuses();
    };

    /**
     * Handler for #slot-equipment-rarity
     */
    this.handleEquipmentRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateEquipmentRarity();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();

        swlcalc.summary.updatePrimaryStats();
        swlcalc.summary.updateILvl();

        swlcalc.gear.updateAllDescriptions();
        swlcalc.summary.updateOtherBonuses();
    };

    /**
     * Handler for #slot-equipment-quality
     */
    this.handleEquipmentQualityChange = function(event) {
        slotObj.updateEquipmentQuality();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();

        swlcalc.summary.updatePrimaryStats();
        swlcalc.summary.updateILvl();

        swlcalc.gear.updateAllDescriptions();
        swlcalc.summary.updateOtherBonuses();
    };

    /**
     * Handler for #slot-equipment-level
     */
    this.handleEquipmentLevelChange = function(event) {
        slotObj.updateEquipmentLevel();
        slotObj.updateEquipmentStatRating();
        slotObj.updateEquipmentILvl();

        swlcalc.summary.updatePrimaryStats();
        swlcalc.summary.updateILvl();

        swlcalc.gear.updateAllDescriptions();
        swlcalc.summary.updateOtherBonuses();
    };

    /**********************************************************************************
     * Event handlers : Glyph |
     *                        V
     **********************************************************************************/

    /**
     * Handler for #slot-glyph-id
     */
    this.handleGlyphIdChange = function(event) {
        slotObj.updateGlyph();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();

        var newGlyphId = slotObj.edit.getGlyphId();

        // TODO : parallelize these calls ?
        swlcalc.summary.updateSecondaryStat(newGlyphId);
        swlcalc.summary.updateSecondaryStat(previousGlyphId);
        swlcalc.summary.updateILvl();

        previousGlyphId = newGlyphId;
    };

    /**
     * Handler for #slot-glyph-rarity
     */
    this.handleGlyphRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateGlyphRarity();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();

        swlcalc.summary.updateSecondaryStat(slotObj.edit.getGlyphId());
        swlcalc.summary.updateILvl();
    };

    /**
     * Handler for #slot-glyph-quality
     */
    this.handleGlyphQualityChange = function(event) {
        slotObj.updateGlyphQuality();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();

        swlcalc.summary.updateSecondaryStat(slotObj.edit.getGlyphId());
        swlcalc.summary.updateILvl();
    };

    /**
     * Handler for #slot-glyph-level
     */
    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphLevel();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();

        swlcalc.summary.updateSecondaryStat(slotObj.edit.getGlyphId());
        swlcalc.summary.updateILvl();
    }

    /**********************************************************************************
     * Event handlers : Signet |
     *                         V
     **********************************************************************************/

    /**
     * Handler for #slot-signet-id for weapons
     */
    this.handleAffixIdChange = function(event) {
        slotObj.updateSignet();

        swlcalc.gear.updateSignetsBonuses();
    };

    /**
     * Handler for #slot-signet-id for talismans
     */
    this.handleSignetIdChange = function(event) {
        slotObj.updateSignet();
        slotObj.updateSignetILvl();

        swlcalc.summary.updateILvl();
        swlcalc.gear.updateSignetsBonuses(); // TODO : needed to replace the %d but not optimal (we should refresh only the current signet)
    };

    /**
     * Handler for #slot-signet-rarity
     */
    this.handleSignetRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateSignetRarity();
        slotObj.updateSignetILvl();

        swlcalc.summary.updateILvl();
        swlcalc.gear.updateSignetsBonuses(); // TODO : needed to replace the %d but not optimal (we should refresh only the current signet)
    };

    /**
     * Handler for #slot-signet-level
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetLevel();
        slotObj.updateSignetILvl();

        swlcalc.summary.updateILvl();
        swlcalc.gear.updateSignetsBonuses(); // TODO : needed to replace the %d but not optimal (we should refresh only the current signet)
    };
};
