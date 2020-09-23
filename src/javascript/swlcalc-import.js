/*========================================================================================
 *                                        SWLCALC HASH STRUCTURE :
 *=====================================================|====================================
 *                      Element                        |               Values
 *-----------------------------------------------------|------------------------------------
 *                  ____________ Equipment's Rarity     [1,2,3,4,5]
 *                 / ___________ Equipment's ID         [refer to swlcalc-data-equipments.js]
 *                / / __________ Equipment's Quality    [1,2,3]
 *               / / / _________ Equipment's Level      [1->20/25/30/35/70]
 *              / / / / ________ Glyph's Rarity         [1,2,3,4,5]
 *             / / / / / _______ Glyph's Stat           [0,1,2,3,4,5]
 *            / / / / / / ______ Glyph's Quality        [1,2,3]
 *           / / / / / / / _____ Glyph's Level          [1->20]
 *          / / / / / / / /  ___ Signet's Rarity        [1,2,3,4,5]
 *         / / / / / / / /  / __ Signet's ID            [refer to swlcalc-data-signets.js]
 *        / / / / / / / /  / / _ Signet's Level         [1->20]
 *       v v v v v v v v  v v v
 * wrist=4,1,4,3,4,4,0,3,5,85,3
 *===================================================|====================================*/

var swlcalc = swlcalc || {};

swlcalc.import = function() {

    /**
     * Imports a (compatible) URL into swlcalc
     */
    var start = function(vars) {
        for (var slotId in vars) {
            splitVars = vars[slotId].split(',');
            if (slotId.substring(0, 5) == 'agent') {
                var index = parseInt(slotId.substring(5, 6)) - 1; // either equal to 0, 1 or 2
                loadAgent(index, splitVars)
            } else {
                loadSlot(slotId, splitVars);
            }
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Loads the slot informations from the hash and update GUI with it.
     */
    //TODO/REFACTOR maybe there is a better way to update GUI than simulating change() for each element ?
    var loadSlot = function(slotId, values) {
        var slotObj = swlcalc.gear.slots[slotId];
        // values[0] == Item's Rarity
        slotObj.edit.equipmentRarity(swlcalc.data.rarity_mapping.to_name[values[0]]);
        slotObj.edit.el.equipmentRarity.change();
        // values[1] == Item's Type (ID)
        slotObj.edit.equipmentId(values[1] == '0' ? 'none' : values[1]);
        slotObj.edit.el.equipmentId.change();
        // values[2] == Item's Quality
        slotObj.edit.equipmentQuality(values[2]);
        slotObj.edit.el.equipmentQuality.change();
        // values[3] == Item's Level
        slotObj.edit.equipmentLevel(values[3]);
        slotObj.edit.el.equipmentLevel.change();
        // values[4] == Glyph's Rarity
        slotObj.edit.glyphRarity(swlcalc.data.rarity_mapping.to_name[values[4]]);
        slotObj.edit.el.glyphRarity.change();
        // values[5] == Glyph's Stat
        slotObj.edit.glyphId(swlcalc.data.secondary_stat_mapping.to_stat[values[5]]);
        slotObj.edit.el.glyphId.change();
        // values[6] == Glyph's Quality
        slotObj.edit.glyphQuality(values[6]);
        slotObj.edit.el.glyphQuality.change();
        // values[7] == Glyph's Level
        slotObj.edit.glyphLevel(values[7]);
        slotObj.edit.el.glyphLevel.change();
        // support signets (values [8], [9] & [10])
        if (typeof values[8] !== 'undefined'
        && typeof values[9] !== 'undefined' && values[9] !== "999"
        && typeof values[10] !== 'undefined') {
            // values[8] == Signet's Rarity
            slotObj.edit.signetRarity(swlcalc.data.rarity_mapping.to_name[values[8]]);
            slotObj.edit.el.signetRarity.change();
            // values[9] == Signet's Type (ID)
            slotObj.edit.signetId((values[9] != '0' ? values[9] : 'none'));
            slotObj.edit.el.signetId.change();
            // values[10] == Signet's Level
            slotObj.edit.signetLevel(values[10]);
            slotObj.edit.el.signetLevel.change();
        }
    };

    /**
     * Loads the agent informations from the hash and update GUI with it.
     */
    //TODO/REFACTOR maybe there is a better way to update GUI than simulating change() for each element ?
    var loadAgent = function(index, values) {
        var agentObj = swlcalc.gear.agents[index];
        // values[0] == Agent's ID
        agentObj.id(values[0]);
        agentObj.el.id.change();
        // values[1] == Agent's Level
        agentObj.level(values[1]);
        agentObj.el.level.change();
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
