var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    // useless here but kept for future updates
    var init = function() {
    };

    /**
     * Refreshes all values in the summary
     * -> triggered after any change that affects a stat
     */
    //TODO/REFACTOR : to avoid useless refreshes ?
    var updateAllStats = function() {
        updatePrimaryStats();
        updateSecondaryStats();
        updateDescriptions();
        updateURL();
    };

    /**
     * Updates URL field of the browser
     */
    var updateURL = function(event) {
        window.location.hash = swlcalc.export.createExportUrl();
    };

    /**
     * Collects all stats
     * => forwards to sub functions
     */
    var collectAllStats = function() {
        return {
            primary:   collectPrimaryStats(),
            secondary: collectSecondaryStats()
        };
    };

    /**
     * Updates the chosen primary stat in the summary
     */
    var updateOnePrimaryStat = function(stat, value) {
        $('#stat-' + stat).text(value);
    };

    /**
     * Updates all primary stats in the summary
     */
    var updatePrimaryStats = function() {
        var sums = collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) { // TODO/REFACTOR this if could be removed ?
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    /**
     * Collects primary stats by going through the whole gear
     */
    var collectPrimaryStats = function() {
        // initial values
        var sums = {
            'combat-power': 0,
            'healing-power': 0,
            'weapon-power': 0,
            'hitpoints': 7512,     // = 3300 (base HP at lvl 50) + 2997 (amount brought by passives skills) + 1215 (capstone points)
            'attack-rating': 4322, // = 2000 (base stat at lvl 50) + 1512 (amount brought by passives skills) + 810 (capstone points)
            'heal-rating': 4310,   // = 2000 (base stat at lvl 50) + 1500 (amount brought by passives skills) + 810 (capstone points)
            'power-rating': 0,
            'ilvl': 0
        };

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sums['ilvl'] += parseInt(slot.edit.iLvl());
            if (slot.isWeapon() && !slot.active) {
                continue;
            } else if (slot.isWeapon() && slot.edit.equipmentId() != 'none') {
                sums['weapon-power'] = parseInt(slot.edit.equipmentStatValue());
            } else if (!slot.isWeapon() && slot.edit.equipmentId() != 'none') {
                sums['power-rating'] += parseInt(slot.edit.equipmentStatValue());
            }
        }
        // first basic implementation of anima allocation
        // TODO/FEATURE : add conversion to AR/HR/HP based on a ratio
        var animaAllocation = swlcalc.buttonBar.getAnimaAllocation();
        if (animaAllocation == 'dps') {
            sums['attack-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'heal') {
            sums['heal-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'tank') {
            sums['hitpoints'] += Math.round(sums['power-rating'] * swlcalc.data.stats.hp_multiplier);
        }

        sums['combat-power'] = computeCombatPower(sums['attack-rating'], sums['weapon-power']);
        sums['healing-power'] = computeHealingPower(sums['heal-rating'], sums['weapon-power']);
        sums['ilvl'] = computeAverageILvl(sums['ilvl']); //TODO/REFACTOR : refactor (it's weird)

        return sums;
    };

    /**
     * Computes the Combat Power for the given Attack Rating and Weapon Power values
     * SWL formula for Combat Power is like :
     * -> +1 Combat Power every 13.33 Attack Rating
     * -> +1 Combat Power every 13.33 Weapon Power
     */
    var computeCombatPower = function(attack_rating, weapon_power) {
        var ratio = 13 + 1/3;

        return Math.round((attack_rating + weapon_power) / ratio);
    };

    /**
     * Computes the Healing Power for the given Heal Rating and Weapon Power values
     * SWL formula for Combat Power is like :
     * -> +1 Healing Power every 13.33 Heal Rating
     * -> +1 Healing Power every 13.33 Weapon Power
     */
    var computeHealingPower = function(heal_rating, weapon_power) {
        var ratio = 13 + 1/3;

        return Math.round((heal_rating + weapon_power) / ratio);
    };

    /**
     * Updates secondary stats in the summary
     */
    var updateSecondaryStats = function() {
        var sums = collectSecondaryStats();
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString() + "%" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0%" : "0");
                }
            }
        }
    };

    /**
     * Collects glyph stats by going through the whole gear
     */
    var collectSecondaryStats = function() {
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
            'evade-chance': 0,
            //TODO/FEATURE : protection stats are not functional yet
            // 'physical-protection': 2259,   // amount brought by passives skills
            // 'magical-protection': 2259     // amount brought by passives skills
        };
        // get flat stats
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if(slot.isWeapon() && !slot.active) {
                continue;
            }
            sums[slot.edit.glyphId()] += parseInt(slot.edit.glyphStatRating());
        }
        // get ratio stats
        sums['critical-chance'] += computeCriticalChance(sums['critical-rating']);
        sums['critical-power-percentage'] += computeCriticalPowerPercentage(sums['critical-power']);
        sums['glance-reduction'] = computeGlanceReduction(sums['hit-rating']);
        sums['glance-chance'] = computeGlanceChance(sums['defense-rating']);
        sums['evade-chance'] = computeEvadeChance(sums['evade-rating']);
        // round values for display purpose
        sums['critical-rating'] = sums['critical-rating'].toFixed(0);
        sums['critical-chance'] = sums['critical-chance'].toFixed(1);
        sums['critical-power'] = sums['critical-power'].toFixed(0);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(1);
        sums['evade-chance'] = sums['evade-chance'].toFixed(1);
        //TODO/FEATURE : prot stats are not functional yet
        // sums['magical-protection'] = parseInt(sums['magical-protection'].toFixed(0), 10);
        // sums['physical-protection'] = parseInt(sums['physical-protection'].toFixed(0), 10);
        return sums;
    };

    /**
     * Computes the critical chance given by the whole gear
     * SWL formula for critical chances is like :
     * -> Up to 6536 rating => 1% Critical Chance every 157.49 Rating
     * -> After 6536 rating => 1% Critical Chance every 683.00 Rating
     * The calculation includes weapon expertise
     */
    var computeCriticalChance = function(critical_rating) {
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
     * Computes the % critical power given by the whole gear
     * SWL formula for % critical power is like :
     * -> Up to 3258 rating => 1% Critical Power every 28.31 Rating
     * -> After 3258 rating => 1% Critical Power every 136.00 Rating
     * The calculation includes weapon expertise (= 30% at max level)
     */
    var computeCriticalPowerPercentage = function(critical_power) {
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
     * Computes the % evade chance given by the whole gear
     * SWL formula for % evade chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 145.55 Rating
     * -> After 4221 rating => 1% Evade Chance every 977.40 Rating
     */
    var computeEvadeChance = function(evade_rating) {
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
     * Computes the % glance chance given by the whole gear
     * SWL formula for % glance chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 101.71 Rating
     * -> After 4221 rating => 1% Evade Chance every 683.00 Rating
     */
    var computeGlanceChance = function(defense_rating) {
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
     * Computes the % glance reduction given by the whole gear
     * SWL formula for % glance reduction is like :
     * -> 1% Evade Chance every 50.85 Rating (no hard cap)
     */
    var computeGlanceReduction = function(hit_rating) {
        var ratio = 50.85;

        return swlcalc.util.precisionRound(hit_rating / ratio, 1);
    };

    /**
     * Computes the average Item Power given by the whole gear
     */
    var computeAverageILvl = function(sum_ilvl) {
        return Math.round(sum_ilvl / swlcalc.gear.nbSlots());
    }

    /**
     * Boolean function. Determines whether a stat is percentage-based or not
     */
    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage'
            || statName == 'critical-chance'
            || statName == 'glance-reduction'
            || statName == 'evade-chance'
            || statName == 'glance-chance';
    };
    
    /**
     * Launch an update on each slot's description (in order to display the right bonus values)
     */
    var updateDescriptions = function() {
        for (var id in swlcalc.gear.slots) {
            swlcalc.gear.slots[id].updateEquipmentBonuses(combatPower(), healingPower());
            swlcalc.gear.slots[id].updateSignetBonus(combatPower(), healingPower()); //TODO : should be a better way to handle this, here it will be useful in like 1% of the cases..
        }
    };

    /**
     * Getter for Combat Power
     */
    var combatPower = function() {
        return parseInt($('#stat-combat-power').text());
    }

    /**
     * Getter for Healing Power
     */
    var healingPower = function() {
        return parseInt($('#stat-healing-power').text());
    }

    var oPublic = {
        init: init,
        computeCriticalChance: computeCriticalChance,                   //TODO/REFACTOR : visibility relevant only for tests
        computeCriticalPowerPercentage: computeCriticalPowerPercentage, //TODO/REFACTOR : visibility relevant only for tests
        computeEvadeChance: computeEvadeChance,                         //TODO/REFACTOR : visibility relevant only for tests
        computeGlanceChance: computeGlanceChance,                       //TODO/REFACTOR : visibility relevant only for tests
        computeGlanceReduction: computeGlanceReduction,                 //TODO/REFACTOR : visibility relevant only for tests
        computeCombatPower: computeCombatPower,                         //TODO/REFACTOR : visibility relevant only for tests
        computeHealingPower: computeHealingPower,                       //TODO/REFACTOR : visibility relevant only for tests
        computeAverageILvl: computeAverageILvl,                         //TODO/REFACTOR : visibility relevant only for tests
        collectPrimaryStats: collectPrimaryStats,                       //TODO/REFACTOR : visibility relevant only for tests
        collectSecondaryStats: collectSecondaryStats,                   //TODO/REFACTOR : visibility relevant only for tests
        collectAllStats: collectAllStats,                               //TODO/REFACTOR : visibility relevant only for tests
        updateAllStats: updateAllStats,
        updateDescriptions: updateDescriptions
    };

    return oPublic;
}();
