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
        updateOtherBonuses();
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
     * Updates all primary stats in the summary
     */
    var updatePrimaryStats = function() {
        var totals = collectPrimaryStats();

        for (var stat in totals) {
            $('#stat-' + stat).text(totals[stat] + (isStatPercentageBased(stat) ? "%" : ""));
        }
    };

    /**
     * Collects primary stats by going through the whole gear
     */
    var collectPrimaryStats = function() {
        // initial values
        var totals = {
            'attack-rating':     swlcalc.passives.getTotalAttackRating(),
            'heal-rating':       swlcalc.passives.getTotalHealRating(),
            'hit-points':        swlcalc.passives.getTotalHitPoints(),
            'protection':        swlcalc.passives.getTotalProtection(),
            'damage-mitigation': swlcalc.passives.getTotalDamageMitigation(),
            'combat-power':      0,
            'healing-power':     0,
            'weapon-power':      0,
            'power-rating':      0,
            'ilvl':              0,
        };
        var sumOfIlvl = 0;

        // collect amount brought by gear slots
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sumOfIlvl += parseInt(slot.edit.iLvl());
            if (slot.isWeapon() && !slot.active || slot.edit.equipmentId() == 'none') {
                continue;
            } else if (slot.isWeapon()) {
                totals['weapon-power'] = parseInt(slot.edit.equipmentStatPowerValue());
            } else if (!slot.isWeapon()) {
                totals['power-rating'] += parseInt(slot.edit.equipmentStatPowerValue());
                totals['protection']   += parseInt(slot.edit.equipmentStatProtValue());
            }
        }

        // collect amount brought by agents
        for (var index in swlcalc.gear.agents) {
            var ad = swlcalc.gear.agents[index].agentData

            if (swlcalc.util.isPrimaryStat(ad.levels["25"].type)) {
                totals[ad.levels["25"].type] += parseInt(ad.levels["25"].value)
            }
            if (swlcalc.gear.agents[index].level() == 50) {
                if (swlcalc.util.isPrimaryStat(ad.levels["50"].type)) {
                    totals[ad.levels["50"].type] += parseInt(ad.levels["50"].value)
                }
            }
        }

        // Increment HP/AR/HR based on anima allocation repartition
        totals['attack-rating'] += Math.round(totals['power-rating'] * swlcalc.data.stats.arCoefficient * swlcalc.animaAllocation.getDamageRatio());
        totals['heal-rating']   += Math.round(totals['power-rating'] * swlcalc.data.stats.hrCoefficient * swlcalc.animaAllocation.getHealingRatio());
        totals['hit-points']    += Math.round(totals['power-rating'] * swlcalc.data.stats.hpCoefficient * swlcalc.animaAllocation.getSurvivabilityRatio());

        // Main, "head" stats are computed at the end when all required underlying stats have been computed
        totals['combat-power']  = computePrimaryPower('ar', totals['attack-rating'], totals['weapon-power']);
        totals['healing-power'] = computePrimaryPower('hr', totals['heal-rating'], totals['weapon-power']);
        totals['ilvl']          = computeAverageILvl(sumOfIlvl);

        totals['damage-mitigation'] += computeDamageMitigation(totals['protection'])

        return totals;
    };

    /*
     * Computes the Primary (= Combat or Healing) Power for the given Primary Stat Rating and Weapon Power values
     * SWL formula for Primary Power is like :
     * -> Primary Power = (Primary Stat Rating + Weapon Power) * coef
     */
    var computePrimaryPower = function(primaryStat, sumPrimaryStatPoints, weaponPower) {
        var result = (sumPrimaryStatPoints + weaponPower) * swlcalc.data.stats.computationFigures.primary[primaryStat].coef
        return swlcalc.util.precisionRound(result, 1)
    };

    /*
     * Damage mitigation function, based on protection
     *
     * SWL formula for damage mitigation is :
     * (Protection rating * 100) / (Protection rating + const divisor)
     */
    var computeDamageMitigation = function(sumProtectionPoints) {
        var protectionFigures = swlcalc.data.stats.computationFigures.primary['protection'];

        return swlcalc.util.precisionRound((sumProtectionPoints * 100) / (sumProtectionPoints + protectionFigures.constDivisor), 1);
    };

    /**
     * Updates secondary stats in the summary
     */
    var updateSecondaryStats = function() {
        var totals = collectSecondaryStats();
        for (var stat in totals) {
            if (totals[stat] > 0) {
                $('#stat-' + stat).html(isStatPercentageBased(stat) ? totals[stat].toString() + "%" : '+' + totals[stat]);
            } else {
                $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0%" : "0");
            }
        }
    };

    /**
     * Collects glyph stats by going through the whole gear
     */
    var collectSecondaryStats = function() {
        // initial values
        var totals = {
            'critical-rating':           swlcalc.passives.getTotalCriticalRating(),
            'critical-chance':           swlcalc.passives.getTotalCriticalChance(),
            'critical-power':            swlcalc.passives.getTotalCriticalPower(),
            'critical-power-percentage': swlcalc.passives.getTotalCriticalPowerPercentage(),
            'hit-rating':                swlcalc.passives.getTotalHitRating(),
            'glance-reduction':          swlcalc.passives.getTotalGlanceReduction(),
            'defense-rating':            swlcalc.passives.getTotalDefenseRating(),
            'glance-chance':             swlcalc.passives.getTotalGlanceChance(),
            'evade-rating':              swlcalc.passives.getTotalEvadeRating(),
            'evade-chance':              swlcalc.passives.getTotalEvadeChance(),
        };

        // retrieve flat stats
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if(slot.isWeapon() && !slot.active) {
                continue;
            }
            totals[slot.edit.glyphId()] += parseInt(slot.edit.glyphStatRating());
        }

        // sum bonuses brought by agents
        for (var index in swlcalc.gear.agents) {
            var ad = swlcalc.gear.agents[index].agentData

            if (swlcalc.util.isSecondaryStat(ad.levels["25"].type)) {
                totals[ad.levels["25"].type] += parseInt(ad.levels["25"].value)
            }
            if (swlcalc.gear.agents[index].level() == 50) {
                if (swlcalc.util.isSecondaryStat(ad.levels["50"].type)) {
                    totals[ad.levels["50"].type] += parseInt(ad.levels["50"].value)
                }
            }
        }

        // compute percentage stats
        totals['critical-chance']           += computeSecondaryStat('crit', totals['critical-rating']);
        totals['critical-power-percentage'] += computeSecondaryStat('cpow', totals['critical-power']);
        totals['glance-reduction']          += computeSecondaryStat('hit',  totals['hit-rating']);
        totals['glance-chance']             += computeSecondaryStat('def',  totals['defense-rating']);
        totals['evade-chance']              += computeSecondaryStat('evad', totals['evade-rating']);

        totals['critical-chance']           = swlcalc.util.precisionRound(totals['critical-chance'], 1);
        totals['critical-power-percentage'] = swlcalc.util.precisionRound(totals['critical-power-percentage'], 1);
        totals['glance-reduction']          = swlcalc.util.precisionRound(totals['glance-reduction'], 1);
        totals['glance-chance']             = swlcalc.util.precisionRound(totals['glance-chance'], 1);
        totals['evade-chance']              = swlcalc.util.precisionRound(totals['evade-chance'], 1);

        return totals;
    };

    /*
     * Glyph stats computation function
     *
     * SWL formulas for glyph stats computation are always like :
     * -> Up to {hardCap} => +1% in the considered stat every {softCapRate}
     * -> After {hardCap} => +1% in the considered stat every {hardCapRate}
     */
    var computeSecondaryStat = function(statName, sumGlyphPoints) {
        var stat = swlcalc.data.stats.computationFigures.secondary[statName];

        return swlcalc.util.precisionRound(
                 Math.min(sumGlyphPoints, stat.hardCap) / stat.softCapRate
                 + Math.max(sumGlyphPoints - stat.hardCap, 0) / stat.hardCapRate,
               1);
    };

    /**
     * Display any remaining miscellaneous bonus brought by agents
     */
    var updateOtherBonuses = function() {
        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];

            var b25 = $('#stat-agent' + (parseInt(index) + 1) + '-bonus25'); // TODO : abstract access
            if (agent.agentData.levels["25"].type == "miscellaneous") {
                b25.html(agent.text25());
                b25.show();
            } else {
                b25.html("");
                b25.hide();
            }

            var b50 = $('#stat-agent' + (parseInt(index) + 1) + '-bonus50'); // TODO : abstract access
            if (agent.level() == "50" && agent.agentData.levels["50"].type == "miscellaneous") {
                b50.html(agent.text50());
                b50.show();
            } else {
                b50.html("");
                b50.hide();
            }
        }
    };

    /**
     * Computes the average Item Power given by the whole gear
     */
    var computeAverageILvl = function(sumIlvl) {
        return Math.round(sumIlvl / swlcalc.gear.nbSlots());
    }

    /**
     * Boolean function. Determines whether a stat is percentage-based or not
     */
    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage'
            || statName == 'critical-chance'
            || statName == 'glance-reduction'
            || statName == 'evade-chance'
            || statName == 'glance-chance'
            || statName == 'damage-mitigation';
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
        combatPower: combatPower,
        healingPower: healingPower,
        computeSecondaryStat: computeSecondaryStat,       // public scope relevant only for unit tests
        computePrimaryPower: computePrimaryPower,         // public scope relevant only for unit tests
        computeDamageMitigation: computeDamageMitigation, // public scope relevant only for unit tests
        computeAverageILvl: computeAverageILvl,           // public scope relevant only for unit tests
        collectPrimaryStats: collectPrimaryStats,         // public scope relevant only for unit tests
        collectSecondaryStats: collectSecondaryStats,     // public scope relevant only for unit tests
        collectAllStats: collectAllStats,                 // public scope relevant only for unit tests
        updateAllStats: updateAllStats,
        updateOtherBonuses: updateOtherBonuses
    };

    return oPublic;
}();
