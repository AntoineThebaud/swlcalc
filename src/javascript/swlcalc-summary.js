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
        var sums = collectPrimaryStats();

        for (var stat in sums) {
            $('#stat-' + stat).text(sums[stat] + (isStatPercentageBased(stat) ? "%" : ""));
        }
    };

    /**
     * Collects primary stats by going through the whole gear
     */
    var collectPrimaryStats = function() {
        // initial values
        var sums = { // TODO "sums" is actually bad wording here
            'combat-power':      0,
            'healing-power':     0,
            'weapon-power':      0,
            'hit-points':        computePrimaryStatInitialAmount('hp'),
            'attack-rating':     computePrimaryStatInitialAmount('ar'),
            'heal-rating':       computePrimaryStatInitialAmount('hr'),
            'power-rating':      0,
            'ilvl':              0,
            'protection':        computePrimaryStatInitialAmount('protection'),
            'damage-mitigation': 0
        };
        var sumOfIlvl = 0;

        // collect amount brought by gear slots
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sumOfIlvl += parseInt(slot.edit.iLvl());
            if (slot.isWeapon() && !slot.active || slot.edit.equipmentId() == 'none') {
                continue;
            } else if (slot.isWeapon()) {
                sums['weapon-power'] = parseInt(slot.edit.equipmentStatPowerValue());
            } else if (!slot.isWeapon()) {
                sums['power-rating'] += parseInt(slot.edit.equipmentStatPowerValue());
                sums['protection']   += parseInt(slot.edit.equipmentStatProtValue());
            }
        }

        // collect amount brought by agents
        for (var index in swlcalc.gear.agents) {
            var ad = swlcalc.gear.agents[index].agentData

            if (swlcalc.util.isPrimaryStat(ad.levels["25"].type)) {
                sums[ad.levels["25"].type] += parseInt(ad.levels["25"].value)
            }
            if (swlcalc.gear.agents[index].level() == 50) {
                if (swlcalc.util.isPrimaryStat(ad.levels["50"].type)) {
                    sums[ad.levels["50"].type] += parseInt(ad.levels["50"].value)
                }
            }
        }

        // Increment HP/AR/HR based on anima allocation repartition
        sums['attack-rating'] += Math.round(sums['power-rating'] * swlcalc.data.stats.arCoefficient * swlcalc.animaAllocation.getDamageRatio());
        sums['heal-rating']   += Math.round(sums['power-rating'] * swlcalc.data.stats.hrCoefficient * swlcalc.animaAllocation.getHealingRatio());
        sums['hit-points']    += Math.round(sums['power-rating'] * swlcalc.data.stats.hpCoefficient * swlcalc.animaAllocation.getSurvivabilityRatio());

        // Main, "head" stats are computed at the end when all required underlying stats have been computed
        sums['combat-power']  = computePrimaryPower('ar', sums['attack-rating'], sums['weapon-power']);
        sums['healing-power'] = computePrimaryPower('hr', sums['heal-rating'], sums['weapon-power']);
        sums['ilvl']          = computeAverageILvl(sumOfIlvl);

        sums['damage-mitigation'] = computeDamageMitigation(sums['protection'])

        return sums;
    };

    /*
     * Computes the initial amount for primary stats.
     * The formula for this is simply summing the amounts brought by base stats, capstones and SP passives
     */
    var computePrimaryStatInitialAmount = function(primaryStat) {
        var statData = swlcalc.data.stats.computationFigures.primary[primaryStat];

        return statData.base + statData.capstone + statData.spPassive;
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
        var sums = collectSecondaryStats();
        for (var stat in sums) {
            if (sums[stat] > 0) {
                $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString() + "%" : '+' + sums[stat]);
            } else {
                $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0%" : "0");
            }
        }
    };

    /**
     * Collects glyph stats by going through the whole gear
     */
    var collectSecondaryStats = function() {
        var statsData = swlcalc.data.stats.computationFigures.secondary;
        // initial values
        var sums = { // TODO "sums" is actually bad wording here
            'critical-rating':           statsData['crit'].spPassiveFlat,
            'critical-chance':           0,
            'critical-power':            statsData['cpow'].spPassiveFlat,
            'critical-power-percentage': 0,
            'hit-rating':                statsData['hit'].spPassiveFlat,
            'glance-reduction':          0,
            'defense-rating':            statsData['def'].spPassiveFlat,
            'glance-chance':             0,
            'evade-rating':              statsData['evad'].spPassiveFlat,
            'evade-chance':              0,
        };

        // retrieve flat stats
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if(slot.isWeapon() && !slot.active) {
                continue;
            }
            sums[slot.edit.glyphId()] += parseInt(slot.edit.glyphStatRating());
        }

        // sum bonuses brought by agents
        for (var index in swlcalc.gear.agents) {
            var ad = swlcalc.gear.agents[index].agentData

            if (swlcalc.util.isSecondaryStat(ad.levels["25"].type)) {
                sums[ad.levels["25"].type] += parseInt(ad.levels["25"].value)
            }
            if (swlcalc.gear.agents[index].level() == 50) {
                if (swlcalc.util.isSecondaryStat(ad.levels["50"].type)) {
                    sums[ad.levels["50"].type] += parseInt(ad.levels["50"].value)
                }
            }
        }

        // compute percentage stats
        sums['critical-chance']           = computeSecondaryStat('crit', sums['critical-rating']);
        sums['critical-power-percentage'] = computeSecondaryStat('cpow', sums['critical-power']);
        sums['glance-reduction']          = computeSecondaryStat('hit',  sums['hit-rating']);
        sums['glance-chance']             = computeSecondaryStat('def',  sums['defense-rating']);
        sums['evade-chance']              = computeSecondaryStat('evad', sums['evade-rating']);

        return sums;
    };

    /*
     * Glyph stats computation function
     *
     * SWL formulas for glyph stats computation are always like :
     * -> Up to {hardCap} => +1% in the considered stat every {softCapRate}
     * -> After {hardCap} => +1% in the considered stat every {hardCapRate}
     *
     * The base amount includes capstone points + weapon expertise when relevant
     */
    var computeSecondaryStat = function(statName, sumGlyphPoints) {
        var stat = swlcalc.data.stats.computationFigures.secondary[statName];

        return stat.spPassivePercent
               + stat.expertise
               + swlcalc.util.precisionRound(
                     Math.min(sumGlyphPoints, stat.hardCap) / stat.softCapRate
                     + Math.max(sumGlyphPoints - stat.hardCap, 0) / stat.hardCapRate,
                 1);
    };

    /**
     * Display any remaining miscellaneous bonus brought by agents
     * TODO : improve show/hide + abstract access
     */
    var updateOtherBonuses = function() {
        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];

            if (agent.agentData.levels["25"].type == "miscellaneous") {
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus25').html(agent.text25());
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus25').show();
            } else {
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus25').html("");
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus25').hide();
            }

            if (agent.level() == "50" && agent.agentData.levels["50"].type == "miscellaneous") {
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus50').html(agent.text50());
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus50').show();
            } else {
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus50').html("");
                $('#stat-agent' + (parseInt(index) + 1) + '-bonus50').hide();
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
        computeSecondaryStat: computeSecondaryStat,       //TODO/REFACTOR : visibility relevant only for tests
        computePrimaryPower: computePrimaryPower,         //TODO/REFACTOR : visibility relevant only for tests
        computeDamageMitigation: computeDamageMitigation, //TODO/REFACTOR : visibility relevant only for tests
        computeAverageILvl: computeAverageILvl,           //TODO/REFACTOR : visibility relevant only for tests
        collectPrimaryStats: collectPrimaryStats,         //TODO/REFACTOR : visibility relevant only for tests
        collectSecondaryStats: collectSecondaryStats,     //TODO/REFACTOR : visibility relevant only for tests
        collectAllStats: collectAllStats,                 //TODO/REFACTOR : visibility relevant only for tests
        updateAllStats: updateAllStats,
        updateOtherBonuses: updateOtherBonuses
    };

    return oPublic;
}();
