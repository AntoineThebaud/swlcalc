var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    //TODO/REFACTOR : remove ? currently needed for compatibility
    var init = function() {};

    var updateAllStats = function() {
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
        updateGlyphValues();
        updatePowerValues();
        updateURL();
    };

   var updateURL = function(event) {
        window.location.hash = swlcalc.export.createExportUrl();
    };

    var collectAllStats = function() {
        return {
            primary: collectPrimaryStats(),
            offensive_defensive: collectOffensiveDefensiveStats()
        };
    };

    var updatePrimaryStats = function() {
        var sums = collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    var updateOnePrimaryStat = function(stat, value) {
        $('#stat-' + stat).text(value);
    };

    var collectPrimaryStats = function() {
        var sums = {
            'combat-power': 0,
            'weapon-power': 0,
            //TODO/FEATURE : HP, AR & HR disabled for the moment (as long as power rating conversion is not implemented)
            // 'hitpoints': 7512,     // = 3300 (base stat at lvl 50) + 2997 (amount brought by passives skills) + 1215 (capstone points)
            // 'attack-rating': 4322, // = 2000 (base stat at lvl 50) + 1512 (amount brought by passives skills) + 810 (capstone points)
            // 'heal-rating': 4310,   // = 2000 (base stat at lvl 50) + 1500 (amount brought by passives skills) + 810 (capstone points)
            'power-rating': 0,
            'item-power': 0
        };

        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if (slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                } else if (slot.isWeapon() && slot.wtype() != 'none') {
                    sums['weapon-power'] = swlcalc.data.custom_gear_data.slot[slot.group].rarity[slot.rarity()].level[slot.level()];
                } else if (!slot.isWeapon() && slot.itemId() != 'none') {
                    sums['power-rating'] += swlcalc.data.custom_gear_data.slot[slot.group].rarity[slot.rarity()].quality[slot.quality()].level[slot.level()];
                }
                //TODO/FEATURE : add conversion to AR/HR/HP based on ratio selected
                sums['item-power'] += slot.itemPower();
            }
        }
        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        //TODO/REFACTOR : refactor (it's weird)
        sums['item-power'] = calculateAverageItemPower(sums['item-power']);
        return sums;
    };

    //TODO/FEATURE : to implement, still tsw formula
    var calculateCombatPower = function(attack_rating, weapon_power) {
        if (attack_rating < 5200){
            return Math.round((375 - (600 / (Math.pow(Math.E, (attack_rating / 1400)) + 1))) * (1 + (weapon_power / 375)));
        } else {
            var arMultiplier = .00008 * weapon_power + .0301;
            return Math.round(204.38 + .5471 * weapon_power + arMultiplier * attack_rating);
        }
    };

    var updateOffensiveDefensiveStats = function() {
        var sums = collectOffensiveDefensiveStats();
        updateStats(sums);
    };

    var collectOffensiveDefensiveStats = function() {
        var sums = {
            'critical-rating': 756,           // amount brought by passives skills
            'critical-chance': 1,             // base percentage
            'critical-power': 1008,           // amount brought by passives skills
            'critical-power-percentage': 25,  // base percentage
            'hit-rating': 756,                // amount brought by passives skills
            'glance-reduction': 0,
            'defense-rating': 753,            // amount brought by passives skills
            'glance-chance': 0,
            'evade-rating': 753,              // amount brought by passives skills
            'evade-chance': 0,                // base percentage
            //TODO/FEATURE : prot stats are not functionnal yet
            // 'physical-protection': 2259,   // amount brought by passives skills
            // 'magical-protection': 2259     // amount brought by passives skills
        };
        // get flat stats
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                sums[slot.glyph()] += slot.glyphValue();
            }
        }
        // get ratio stats
        sums['critical-chance'] += calculateCriticalChance(sums['critical-rating']);
        sums['critical-power-percentage'] += calculateCriticalPowerPercentage(sums['critical-power']);
        sums['glance-reduction'] = calculateGlanceReduction(sums['hit-rating']);
        sums['glance-chance'] = calculateGlanceChance(sums['defense-rating']);
        sums['evade-chance'] = calculateEvadeChance(sums['evade-rating']);
        // round values for display purpose
        sums['critical-rating'] = sums['critical-rating'].toFixed(0);
        sums['critical-chance'] = sums['critical-chance'].toFixed(1);
        sums['critical-power'] = sums['critical-power'].toFixed(0);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(1);
        sums['evade-chance'] = sums['evade-chance'].toFixed(1);
        //TODO/FEATURE : prot stats are not functionnal yet
        // sums['magical-protection'] = parseInt(sums['magical-protection'].toFixed(0), 10);
        // sums['physical-protection'] = parseInt(sums['physical-protection'].toFixed(0), 10);
        return sums;
    };

    //TODO/REFACTOR if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO/REFACTOR should be updated independently for each slot in swlcalc-slots.js
    var updateGlyphValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updateGlyphValue();
            }
        }
    };

    //TODO/REFACTOR if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO/REFACTOR refactor : should be updated independently for each slot in swlcalc-slots.js
    var updatePowerValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updatePowerValue();
            }
        }
    }

    /**
     * Calculates the critical chance given by the whole gear
     * SWL formula for critical chances is like :
     * -> Up to 6536 rating => 1% Critical Chance every 157.49 Rating
     * -> After 6536 rating => 1% Critical Chance every 683.00 Rating
     * The calculation includes weapon expertise
     */
    var calculateCriticalChance = function(critical_rating) {
        var hardCap = 6536;
        var softCapRatio = 157.49;
        var hardCapRatio = 683.00;
        var expertise = 7.5;

        if (critical_rating < hardCap) {
            return expertise + swlcalc.util.precisionRound(critical_rating / softCapRatio, 1);
        } else {
            return expertise + swlcalc.util.precisionRound(hardCap / softCapRatio + (critical_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % critical power given by the whole gear
     * SWL formula for % critical power is like :
     * -> Up to 3258 rating => 1% Critical Power every 28.31 Rating
     * -> After 3258 rating => 1% Critical Power every 136.00 Rating
     * The calculation includes weapon expertise
     */
    var calculateCriticalPowerPercentage = function(critical_power) {
        var hardCap = 3258;
        var softCapRatio = 28.31;
        var hardCapRatio = 136.00;
        var expertise = 30;

        if (critical_power < hardCap) {
            return expertise + swlcalc.util.precisionRound(critical_power / softCapRatio, 1);
        } else {
            return expertise + swlcalc.util.precisionRound(hardCap / softCapRatio + (critical_power - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % evade chance given by the whole gear
     * SWL formula for % evade chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 145.55 Rating
     * -> After 4221 rating => 1% Evade Chance every 977.40 Rating
     */
    var calculateEvadeChance = function(evade_rating) {
        var hardCap = 4221;
        var softCapRatio = 145.55;
        var hardCapRatio = 977.40;

        if (evade_rating < hardCap) {
            return swlcalc.util.precisionRound(evade_rating / softCapRatio, 1);
        } else {
            return swlcalc.util.precisionRound(hardCap / softCapRatio + (evade_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % glance chance given by the whole gear
     * SWL formula for % glance chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 101.71 Rating
     * -> After 4221 rating => 1% Evade Chance every 683.00 Rating
     */
    var calculateGlanceChance = function(defense_rating) {
        var hardCap = 4221;
        var softCapRatio = 101.71;
        var hardCapRatio = 683.00;

        if (defense_rating < hardCap) {
            return swlcalc.util.precisionRound(defense_rating / softCapRatio, 1);
        } else {
            return swlcalc.util.precisionRound(hardCap / softCapRatio + (defense_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % glance reduction given by the whole gear
     * SWL formula for % glance reduction is like :
     * -> 1% Evade Chance every 50.85 Rating (no hard cap)
     */
    var calculateGlanceReduction = function(hit_rating) {
        var ratio = 50.85;

        return swlcalc.util.precisionRound(hit_rating / ratio, 1);
    };

    var calculateAverageItemPower = function(sum_item_power) {
        return Math.round(sum_item_power / 8);
    }

    var updateStats = function(sums) {
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString() + " %" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0 %" : "0");
                }
            }
        }
    };

    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage'
            || statName == 'critical-chance'
            || statName == 'glance-reduction'
            || statName == 'evade-chance'
            || statName == 'glance-chance';
    };

    var oPublic = {
        init: init,
        calculateCriticalChance: calculateCriticalChance,
        calculateCriticalPowerPercentage: calculateCriticalPowerPercentage,
        calculateEvadeChance: calculateEvadeChance,
        calculateCombatPower: calculateCombatPower,
        collectPrimaryStats: collectPrimaryStats,
        collectOffensiveDefensiveStats: collectOffensiveDefensiveStats,
        collectAllStats: collectAllStats,
        updateAllStats: updateAllStats
    };

    return oPublic;
}();
