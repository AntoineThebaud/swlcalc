/*========================================================================================
 *                                        SWLCALC HASH STRUCTURE :
 *===================================================|====================================
 *                      Element                      |               Values
 *---------------------------------------------------|------------------------------------
 *                  ____________ Item's Rarity        [1,2,3,4,5]
 *                 / ___________ Item's Type (ID)     [0,1,2,3] + items with passives => TODO : to correct
 *                / / __________ Item's Quality       [1,2,3]
 *               / / / _________ Item's Level         [1->20/25/30/35/70]
 *              / / / / ________ Glyph's Rarity       [1,2,3,4,5]
 *             / / / / / _______ Glyph's Stat         [0,1,2,3,4,5]
 *            / / / / / / ______ Glyph's Quality      [1,2,3]
 *           / / / / / / / _____ Glyph's Level        [1->20]
 *          / / / / / / / /  ___ Signet's Rarity      [1,2,3,4,5]
 *         / / / / / / / /  / __ Signet's Type (ID)   [refer to swlcalc-data-signets.js]
 *        / / / / / / / /  / / _ Signet's Level       [1->20]
 *       v v v v v v v v  v v v
 * wrist=4,1,4,3,4,4,0,3,5,85,3
 *===================================================|====================================*/

var swlcalc = swlcalc || {};

swlcalc.import = function() {

    var start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                loadSlot(slotId, splitVars);
            }
        }
        swlcalc.summary.updateAllStats();
    };

    /**
    * load the slot informations from the hash and update GUI with it
    * TODO : maybe there is a better way to update GUI than simulating change() ?
    */
    var loadSlot = function(slotId, values) {
        var slotObj = swlcalc.slots[slotId];
        // values[0] == Item's Rarity
        slotObj.rarity(swlcalc.data.rarity_mapping.to_name[values[0]]);
        slotObj.el.rarity.change();
        // values[1] == Item's Type (ID)
        if(slotObj.isWeapon()) {
            slotObj.wtype(swlcalc.data.wtype_mapping.to_name[values[1]]);
            slotObj.el.wtype.change();
        } else {
            slotObj.itemId(values[1]);
            slotObj.el.itemId.change();
        }
        // values[2] == Item's Quality
        if(slotObj.isWeapon()) {
            slotObj.quality(swlcalc.data.weapon_quality_mapping.to_name[values[2]]);
        } else {
            slotObj.quality(swlcalc.data.talisman_quality_mapping.to_name[values[2]]);
        }
        slotObj.el.quality.change();
        // values[3] == Item's Level
        slotObj.level(values[3]);
        slotObj.el.level.change();
        // values[4] == Glyph's Rarity
        slotObj.glyphRarity(swlcalc.data.rarity_mapping.to_name[values[4]]);
        slotObj.el.glyphRarity.change();
        // values[5] == Glyph's Stat
        slotObj.glyph(swlcalc.data.glyph_stat_mapping.to_stat[values[5]]);
        slotObj.el.glyph.change();
        // values[6] == Glyph's Quality
        slotObj.glyphQuality(swlcalc.data.glyph_quality_mapping.to_name[values[6]]);
        slotObj.el.glyphQuality.change();
        // values[7] == Glyph's Level
        slotObj.glyphLevel(values[7]);
        slotObj.el.glyphLevel.change();
        // support signets (values [8], [9] & [10])
        if (typeof values[8] !== 'undefined'
        && typeof values[9] !== 'undefined' && values[9] !== "999"
        && typeof values[10] !== 'undefined') {
            // values[8] == Signet's Rarity
            var signetRarity = swlcalc.data.rarity_mapping.to_name[values[8]];
            // values[9] == Signet's Type (ID)
            var signetId = values[9] != '0' ? values[9] : 'none';
            // values[10] == Signet's Level
            var signetLevel = values[10];
            changeSignet(slotId, signetRarity, signetId, signetLevel);
        }
    };

    var changeSignet = function(slotId, rarity, id, level) {
        var slotObj = swlcalc.slots[slotId];
        slotObj.signetRarity(rarity);
        slotObj.signetId(id);
        slotObj.signetLevel(level);
        slotObj.el.signetId.change();
        slotObj.el.signetRarity.change();
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
