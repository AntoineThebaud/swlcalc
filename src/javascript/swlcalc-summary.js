var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    var el = {};

    var elInit = function() {
        return {
            // Base
            valAttackRatingBase:            $('#stat-attack-rating-base'),
            valHealRatingBase:              $('#stat-heal-rating-base'),
            valHitPointsBase:               $('#stat-heal-rating-base'),
            valCriticalRatingBase:          $('#stat-critical-rating-base'),
            valCriticalChanceBase:          $('#stat-critical-chance-base'),
            valCriticalPowerBase:           $('#stat-critical-power-base'),
            valCriticalPowerPercentageBase: $('#stat-critical-power-percentage-base'),
            valHitRatingBase:               $('#stat-hit-rating-base'),
            valGlanceReductionBase:         $('#stat-glance-reduction-base'),
            valProtectionBase:              $('#stat-protection-base'),
            valDamageMitigationBase:        $('#stat-damage-mitigation-base'),
            valDefenseRatingBase:           $('#stat-defense-rating-base'),
            valGlanceChanceBase:            $('#stat-glance-chance-base'),
            valEvadeRatingBase:             $('#stat-evade-rating-base'),
            valEvadeChanceBase:             $('#stat-evade-chance-base'),

            // Passive Skills
            valAttackRatingPassiveSkills:     $('#stat-attack-rating-passive-skills'),
            rangeAttackRatingPassiveSkills:   $('#stat-attack-rating-passive-skills-slider'),
            valHealRatingPassiveSkills:       $('#stat-heal-rating-passive-skills'),
            rangeHealRatingPassiveSkills:     $('#stat-heal-rating-passive-skills-slider'),
            valHitPointsPassiveSkills:        $('#stat-hit-points-passive-skills'),
            rangeHitPointsPassiveSkills:      $('#stat-hit-points-passive-skills-slider'),
            valCriticalRatingPassiveSkills:   $('#stat-critical-rating-passive-skills'),
            rangeCriticalRatingPassiveSkills: $('#stat-critical-rating-passive-skills-slider'),
            valCriticalPowerPassiveSkills:    $('#stat-critical-power-passive-skills'),
            rangeCriticalPowerPassiveSkills:  $('#stat-critical-power-passive-skills-slider'),
            valHitRatingPassiveSkills:        $('#stat-hit-rating-passive-skills'),
            rangeHitRatingPassiveSkills:      $('#stat-hit-rating-passive-skills-slider'),
            valProtectionPassiveSkills:       $('#stat-protection-passive-skills'),
            rangeProtectionPassiveSkills:     $('#stat-protection-passive-skills-slider'),
            valDefenseRatingPassiveSkills:    $('#stat-defense-rating-passive-skills'),
            rangeDefenseRatingPassiveSkills:  $('#stat-defense-rating-passive-skills-slider'),
            valEvadeRatingPassiveSkills:      $('#stat-evade-rating-passive-skills'),
            rangeEvadeRatingPassiveSkills:    $('#stat-evade-rating-passive-skills-slider'),

            // Capstones
            valAttackRatingCapstones:   $('#stat-attack-rating-capstones'),
            rangeAttackRatingCapstones: $('#stat-attack-rating-capstones-slider'),
            valHealRatingCapstones:     $('#stat-heal-rating-capstones'),
            rangeHealRatingCapstones:   $('#stat-heal-rating-capstones-slider'),
            valHitPointsCapstones:      $('#stat-hit-points-capstones'),
            rangeHitPointsCapstones:    $('#stat-hit-points-capstones-slider'),

            // Expertise
            valCriticalChanceExpertise:            $('#stat-critical-chance-expertise'),
            rangeCriticalChanceExpertise:          $('#stat-critical-chance-expertise-slider'),
            valCriticalPowerPercentageExpertise:   $('#stat-critical-power-percentage-expertise'),
            rangeCriticalPowerPercentageExpertise: $('#stat-critical-power-percentage-expertise-slider'),
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    /**
     * Associates the right processing to each trigger.
     */
    var bindEvents = function() {
        el.rangeAttackRatingPassiveSkills.change(handleAttackRatingPassiveSkillsChange);
        el.rangeHealRatingPassiveSkills.change(handleHealRatingPassiveSkillsChange);
        el.rangeHitPointsPassiveSkills.change(handleHitPointsPassiveSkillsChange);
        el.rangeCriticalRatingPassiveSkills.change(handleCriticalRatingPassiveSkillsChange);
        el.rangeCriticalPowerPassiveSkills.change(handleCriticalPowerPassiveSkillsChange);
        el.rangeHitRatingPassiveSkills.change(handleHitRatingPassiveSkillsChange);
        el.rangeProtectionPassiveSkills.change(handleProtectionPassiveSkillsChange);
        el.rangeDefenseRatingPassiveSkills.change(handleDefenseRatingPassiveSkillsChange);
        el.rangeEvadeRatingPassiveSkills.change(handleEvadeRatingPassiveSkillsChange);

        el.rangeAttackRatingCapstones.change(handleAttackRatingCapstonesChange);
        el.rangeHealRatingCapstones.change(handleHealRatingCapstonesChange);
        el.rangeHitPointsCapstones.change(handleHitPointsCapstonesChange);

        el.rangeCriticalChanceExpertise.change(handleCriticalChanceExpertiseChange);
        el.rangeCriticalPowerPercentageExpertise.change(handleCriticalPowerPercentageExpertiseChange);
    };

    /**
     * Update the value displayed for the Attack Rating > Passive Skills part
     */
    var handleAttackRatingPassiveSkillsChange = function(event) {
        el.valAttackRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleHealRatingPassiveSkillsChange = function(event) {
        el.valHealRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleHitPointsPassiveSkillsChange = function(event) {
        el.valHitPointsPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleCriticalRatingPassiveSkillsChange = function(event) {
        el.valCriticalRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleCriticalPowerPassiveSkillsChange = function(event) {
        el.valCriticalPowerPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleHitRatingPassiveSkillsChange = function(event) {
        el.valHitRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleProtectionPassiveSkillsChange = function(event) {
        el.valProtectionPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleDefenseRatingPassiveSkillsChange = function(event) {
        el.valDefenseRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleEvadeRatingPassiveSkillsChange = function(event) {
        el.valEvadeRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleAttackRatingCapstonesChange = function(event) {
        el.valAttackRatingCapstones.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleHealRatingCapstonesChange = function(event) {
        el.valHealRatingCapstones.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleHitPointsCapstonesChange = function(event) {
        el.valHitPointsCapstones.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleCriticalChanceExpertiseChange = function(event) {
        el.valCriticalChanceExpertise.text(event.currentTarget.value);
    };

    /**
     * TODO comment
     */
    var handleCriticalPowerPercentageExpertiseChange = function(event) {
        el.valCriticalPowerPercentageExpertise.text(event.currentTarget.value);
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

        totals['damage-mitigation'] = computeDamageMitigation(totals['protection'])

        return totals;
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
        var statsData = swlcalc.data.stats.computationFigures.secondary;
        // initial values
        var totals = {
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
        totals['critical-chance']           = computeSecondaryStat('crit', totals['critical-rating']);
        totals['critical-power-percentage'] = computeSecondaryStat('cpow', totals['critical-power']);
        totals['glance-reduction']          = computeSecondaryStat('hit',  totals['hit-rating']);
        totals['glance-chance']             = computeSecondaryStat('def',  totals['defense-rating']);
        totals['evade-chance']              = computeSecondaryStat('evad', totals['evade-rating']);

        return totals;
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
