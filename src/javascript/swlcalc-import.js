/*==================================================================================================
 *                                        OLD HASH STRUCTURE :
 *==============================================================|===================================
 *                            Element                           |               Values
 *--------------------------------------------------------------|-----------------------------------
 *                  ____________ Item's QL                      [0,1,2,3,4,5,6,7,8,9,11]            TODO: still tsw version
 *                 / ___________ Item's Type (ID)               [refer to swlcalc-data-items.js]    TODO: still tsw version
 *                / / __________ Glyph's QL                     [0,1,2,3,4,5,11]                    TODO: still tsw version
 *               / / / _________ Glyph's Primary Stat           [0,1,2,3,4,5]
 *              / / / / ________ Glyph's Secondary Stat         [0,1,2,3,4,5]
 *             / / / / / _______ Glyph's Primary Distribution   [0,1,2,3,4]                         TODO: still tsw version
 *            / / / / / / ______ Glyph's Secondary Distribution [0,1,2,3,4]                         TODO: still tsw version
 *           / / / / / / / _____ (Optional) Signet's QL         [1,2,3]                             TODO: still tsw version
 *          / / / / / / / /  ___ (Optional) Signet's Type (ID)  [refer to swlcalc-data-signets.js]  TODO: still tsw version
 *         / / / / / / / /  /
 *        / / / / / / / /  /
 *       v v v v v v v v  v
 * wrist=4,1,4,6,0,4,0,3,85
 *==============================================================|===================================*/

 /*==================================================================================================
  *                                        SWLCALC HASH STRUCTURE :
  *=============================================================|===================================
  *                            Element                          |                 Values
  *-------------------------------------------------------------|-----------------------------------
  *                  ____________ Item's Rarity                 [0,1,2,3,4,5]
  *                 / ___________ Item's Type (ID)              [1,2,3] + items with passives
  *                / / __________ Item's Quality                [0,1,2,3]
  *               / / / _________ Item's Level                  [0,1,2,3]
  *              / / / / ________ Glyph's Rarity                [0,1,2,3,4,5]
  *             / / / / / _______ Glyph's Stat                  [0,1,2,3,4,5]
  *            / / / / / / ______ Glyph's Quality               [0,1,2,3]
  *           / / / / / / / _____ Glyph's Level                 [0,1,2,3]
  *          / / / / / / / /  ___ (Optional) Signet's Rarity    [1,2,3,4,5]
  *         / / / / / / / /  / __ (Optional) Signet's Type (ID) [refer to swlcalc-data-signets.js]
  *        / / / / / / / /  / / _ (Optional) Signet's Level     [0,1,2,3]
  *       v v v v v v v v  v v v
  * wrist=4,1,4,3,4,4,0,3,5,85,3
  *==============================================================|===================================*/

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
    */
    var loadSlot = function(slotId, values) {
        var slotObj = swlcalc.slots[slotId];
        // values[0] == Item's Rarity
        slotObj.rarity(swlcalc.data.rarity_mapping.to_name[0]);
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
            slotObj.quality(swlcalc.data.weapon_quality_mapping.to_name[2]);
        } else {
            slotObj.quality(swlcalc.data.talisman_quality_mapping.to_name[2]);
        }
        // values[3] == Item's Level
        slotObj.level([3]);
        // values[4] == Glyph's Rarity
        slotObj.glyphRarity(swlcalc.data.glyph_stat_mapping.to_stat[values[4]]);
        // values[5] == Glyph's Stat
        slotObj.glyph(swlcalc.data.glyph_stat_mapping.to_stat[values[5]]);
        // values[6] == Glyph's Quality
        slotObj.glyphQuality(swlcalc.data.glyph_quality_mapping.to_name[6]);
        // values[7] == Glyph's Level
        slotObj.glyphLevel([7]);
        // support signets (values [8], [9] & [10])
        if (typeof values[8] !== 'undefined'
        && typeof values[9] !== 'undefined' && values[9] !== "999"
        && typeof values[10] !== 'undefined') {
            // values[8] == Signet's Rarity
            var signetRarity = swlcalc.data.rarity_mapping.to_name[values[8]];
            // values[9] == Signet's Type (ID)
            var signetId = values[8] != '0' ? values[8] : 'none';
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
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
