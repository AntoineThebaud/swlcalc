/*
 * swlcalc hash structure is like :                                       SWLCALC HASH STRUCTURE (for gear slots):
 * wrist=4,1,4,3,4,4,0,3,5,85,3&occult=[...]&aa=33,66,99&passives=1,2,3[...]
 * -> check the code below for the full mapping
 *=====================================================|====================================*/

var swlcalc = swlcalc || {};

swlcalc.import = function() {

    /**
     * Imports a (compatible) URL into swlcalc
     */
    var start = function(urlVars) {
        for (var urlVar in urlVars) {
            paramsArray = urlVars[urlVar].split(',');
            if (urlVar == 'aa') {
                loadAnimaAllocation(paramsArray);
            } else if (urlVar == 'passives') {
                loadPassives(paramsArray);
            } else if (urlVar.substring(0, 5) == 'agent') {
                var index = parseInt(urlVar.substring(5, 6)) - 1; // either equal to 0, 1 or 2
                loadAgent(index, paramsArray);
            } else {
                loadSlot(urlVar, paramsArray);
            }
        }

        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
    };

    /**
     * Loads the slot informations from the hash and update GUI with it.
     */
    var loadSlot = function(slotId, values) {
        var slotObj = swlcalc.gear.slots[slotId];
        var rMap = swlcalc.data.rarityMapping.toName;

        slotObj.edit.setEquipmentRarity(rMap[values[0]]);
        slotObj.edit.setEquipmentId(values[1] == '0' ? 'none' : values[1]);
        slotObj.edit.setEquipmentQuality(values[2]);
        slotObj.edit.setEquipmentLevel(values[3]);
        slotObj.edit.setGlyphRarity(rMap[values[4]]);
        slotObj.edit.setGlyphId(swlcalc.data.secondaryStatMapping.toStat[values[5]]);
        slotObj.edit.setGlyphQuality(values[6]);
        slotObj.edit.setGlyphLevel(values[7]);
        slotObj.edit.setSignetRarity(rMap[values[8]]);
        slotObj.edit.setSignetId((values[9] != '0' ? values[9] : 'none'));
        slotObj.edit.setSignetLevel(values[10]);
    };

    /**
     * Loads the agent informations from the hash and update GUI with it.
     */
    var loadAgent = function(index, values) {
        var agentObj = swlcalc.gear.agents[index];
        agentObj.setId(values[0]);
        agentObj.setLevel(values[1]);
    };

    /**
     * Loads the anima allocation ratios from the hash and update GUI with it.
     */
    var loadAnimaAllocation = function(values) {
        swlcalc.animaAllocation.setDamagePercentage(values[0]);
        swlcalc.animaAllocation.setHealingPercentage(values[1]);
        swlcalc.animaAllocation.setSurvivabilityPercentage(values[2]);
    };

    /**
     * Loads the passives from the hash and update GUI with it.
     */
    var loadPassives = function(values) {
        swlcalc.passives.setAttackRatingBase(values[0]);
        swlcalc.passives.setHealRatingBase(values[1]);
        swlcalc.passives.setHitPointsBase(values[2]);

        swlcalc.passives.setAttackRatingPassiveSkills(values[3]);
        swlcalc.passives.setHealRatingPassiveSkills(values[4]);
        swlcalc.passives.setHitPointsPassiveSkills(values[5]);
        swlcalc.passives.setCriticalRatingPassiveSkills(values[6]);
        swlcalc.passives.setCriticalPowerPassiveSkills(values[7]);
        swlcalc.passives.setHitRatingPassiveSkills(values[8]);
        swlcalc.passives.setProtectionPassiveSkills(values[9]);
        swlcalc.passives.setDefenseRatingPassiveSkills(values[10]);
        swlcalc.passives.setEvadeRatingPassiveSkills(values[11]);

        swlcalc.passives.setAttackRatingCapstones(values[12]);
        swlcalc.passives.setHealRatingCapstones(values[13]);
        swlcalc.passives.setHitPointsCapstones(values[14]);

        swlcalc.passives.setCriticalChanceExpertise(values[15]);
        swlcalc.passives.setCriticalPowerPercentageExpertise(values[16]);
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
