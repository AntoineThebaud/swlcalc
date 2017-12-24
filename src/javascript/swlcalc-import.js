/*==================================================================================================
 *										ABOUT HASH STRUCTURE :
 *==============================================================|===================================
 *							Element								| 				Values
 *--------------------------------------------------------------|-----------------------------------
 *                  ____________ Item's QL						[0,1,2,3,4,5,6,7,8,9,11]			TODO: still tsw version
 *                 / ___________ Item's Type (ID)				[refer to swlcalc-data-items.js]	TODO: still tsw version
 *                / / __________ Glyph's QL						[0,1,2,3,4,5,11]					TODO: still tsw version
 *               / / / _________ Glyph's Primary Stat			[0,1,2,3,4,5]
 *              / / / / ________ Glyph's Secondary Stat			[0,1,2,3,4,5]
 *             / / / / / _______ Glyph's Primary Distribution	[0,1,2,3,4]							TODO: still tsw version
 *            / / / / / / ______ Glyph's Secondary Distribution [0,1,2,3,4]							TODO: still tsw version
 *           / / / / / / / _____ (Optional) Signet's QL			[1,2,3]								TODO: still tsw version
 *          / / / / / / / /  ___ (Optional) Signet's Type (ID)	[refer to swlcalc-data-signets.js]	TODO: still tsw version
 *         / / / / / / / /  /
 *        / / / / / / / /  /
 *       v v v v v v v v  v
 * wrist=4,1,4,6,0,4,0,3,85
 *==============================================================|===================================*/

var swlcalc = swlcalc || {};

swlcalc.import = function() {

    var start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                updateSlot(slotId, splitVars);
            }
        }
        swlcalc.summary.updateAllStats();
    };

    var updateSlot = function(slotId, values) {
        var slotObj = swlcalc.slots[slotId];
		// console.log("swlcalc.import.updateSlot.slotId == ");
		// console.log(slotId);
		// console.log("swlcalc.import.updateSlot.values == ");
		// console.log(values);
		// console.log("swlcalc.import.updateSlot.slotObj == ");
		// console.log(slotObj);
        if(values[0] > 10){
			//TODO : to remove
            // slotObj.ql('11.0');
        }
        else {
			//slotObj.ql(swlcalc.data.signet_quality_mapping.to_name[values[0+1]]);
            slotObj.ql(swlcalc.data.signet_quality_mapping.to_name[1]); //TODO : +1 to change
        }
        if(slotObj.isWeapon()) {
            slotObj.wtype(swlcalc.data.wtype_mapping.to_name[values[1]]);
            slotObj.el.wtype.change();
        } else {
            slotObj.itemId(values[1]);
            slotObj.el.itemId.change();
        }
        if(values[2] > 10) {
			//TODO : to remove
            // slotObj.glyphQl('11.0');
            // slotObj.el.glyphQl.change();
        }
        else {
			//slotObj.glyphQl('10.' + values[2]);
            slotObj.glyphQl('standard'); //TODO : fixed value to change
        }
        slotObj.primaryGlyph(swlcalc.data.glyph_stat_mapping.to_stat[values[3]]);
        slotObj.secondaryGlyph(swlcalc.data.glyph_stat_mapping.to_stat[values[4]]);
        slotObj.el.btn.primary[values[5]].click();
        slotObj.el.btn.secondary[values[6]].click();
        // support signets
        if (typeof values[7] !== 'undefined' && typeof values[8] !== 'undefined' && values[8] !== "999") {
            if(values[8] >= 80 && values[8] <= 92) {
                //Legacy import support for NY/WC items, the old signet IDs 80-92 became the new Item IDs for those items
                slotObj.itemId(values[8]);
                slotObj.el.itemId.change();
            }
            else {
                var signetQuality = swlcalc.data.signet_quality_mapping.to_name[values[7]];
                var signetId = values[8] != '0' ? values[8] : 'none';
                changeSignet(slotId, signetQuality, signetId);
            }
        }
    };

    var changeSignet = function(slotId, quality, id) {
        var slotObj = swlcalc.slots[slotId];
        slotObj.signetQuality(quality);
        slotObj.signetId(id);
        slotObj.el.signetId.change();
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
