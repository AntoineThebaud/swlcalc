var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    // useless here but kept for future updates
    var init = function() {
    };

    /**
     * Updates the total ilvl in the summary
     */
    var updateILvl = function() {
        var sumOfIlvl = 0;

        // sum amount brought by gear slots
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sumOfIlvl += parseInt(slot.edit.getILvl());
        }

        var newIlvl = computeAverageILvl(sumOfIlvl);
        $("#stat-ilvl").text(newIlvl);
    };

    /**
     * Computes the average Item Power given by the whole gear
     */
    var computeAverageILvl = function(sumIlvl) {
        return Math.round(sumIlvl / swlcalc.gear.nbSlots());
    }

    /**
     * Updates all primary stats in the summary
     */
    var updatePrimaryStats = function() {
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
            'power-rating':      0
        };

        // collect amount brought by gear slots
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if (slot.isWeapon() && !slot.active || slot.edit.getEquipmentId() == 'none') {
                continue;
            } else if (slot.isWeapon()) {
                totals['weapon-power'] = parseInt(slot.edit.getEquipmentStatPowerValue());
            } else if (!slot.isWeapon()) {
                totals['power-rating'] += parseInt(slot.edit.getEquipmentStatPowerValue());
                totals['protection']   += parseInt(slot.edit.getEquipmentStatProtValue());
            }
        }

        // collect amount brought by agents
        for (var index in swlcalc.gear.agents) {
            var ad = swlcalc.gear.agents[index].agentData

            if (swlcalc.util.isPrimaryStat(ad.bonuses["25"].type)) {
                totals[ad.bonuses["25"].type] += parseInt(ad.bonuses["25"].value)
            }
            if (swlcalc.gear.agents[index].getLevel() == 50) {
                if (swlcalc.util.isPrimaryStat(ad.bonuses["50"].type)) {
                    totals[ad.bonuses["50"].type] += parseInt(ad.bonuses["50"].value)
                }
            }
        }

        // exception : collect amount brought by weapon affix (only valid for Warding)
        totals['protection'] += retrieveAmountFromAffix('Warding');

        // Increment HP/AR/HR based on anima allocation repartition
        totals['attack-rating'] += Math.round(totals['power-rating'] * swlcalc.data.stats.arConversionCoef * swlcalc.animaAllocation.getDamageRatio());
        totals['heal-rating']   += Math.round(totals['power-rating'] * swlcalc.data.stats.hrConversionCoef * swlcalc.animaAllocation.getHealingRatio());
        totals['hit-points']    += Math.round(totals['power-rating'] * swlcalc.data.stats.hpConversionCoef * swlcalc.animaAllocation.getSurvivabilityRatio());

        // Main, "head" stats are computed at the end when all required underlying stats have been computed
        totals['combat-power']      =  computePrimaryPower('cp', totals['attack-rating'], totals['weapon-power']);
        totals['healing-power']     =  computePrimaryPower('hp', totals['heal-rating'], totals['weapon-power']);
        totals['damage-mitigation'] += computeDamageMitigation(totals['protection'])

        for (var stat in totals) {
            $('#stat-' + stat).text(totals[stat] + (isStatPercentageBased(stat) ? "%" : ""));
        }
    };

    /*
     * Computes the Primary (= Combat or Healing) Power for the given Primary Stat Rating and Weapon Power values
     * SWL formula for Primary Power is like :
     * -> Primary Power = (Primary Stat Rating + Weapon Power) * coef
     */
    var computePrimaryPower = function(primaryStat, sumPrimaryStatPoints, weaponPower) {
        var result = (sumPrimaryStatPoints + weaponPower) * swlcalc.data.stats.primaryPowerCoefs[primaryStat]
        return swlcalc.util.precisionRound(result, 1)
    };

    /*
     * Damage mitigation function, based on protection
     *
     * SWL formula for damage mitigation is :
     * (Protection rating * 100) / (Protection rating + const divisor)
     */
    var computeDamageMitigation = function(sumProtectionPoints) {
        return swlcalc.util.precisionRound((sumProtectionPoints * 100) / (sumProtectionPoints + swlcalc.data.stats.protConstDivisor), 1);
    };

    /**
     * Update the given secondary stat in the summary
     */
    var updateSecondaryStat = function(stat) {
        if (stat == "none") return;

        var totalValue        = 0;
        var statPercent       = swlcalc.data.secondaryStatMapping.toPercentStat[stat];
        var totalValuePercent = 0;

        // sum amount brought by passives
        switch (stat) {
            case 'critical-rating':
                totalValue        += swlcalc.passives.getTotalCriticalRating();
                totalValuePercent += swlcalc.passives.getTotalCriticalChance();
                break;
            case 'critical-power':
                totalValue        += swlcalc.passives.getTotalCriticalPower();
                totalValuePercent += swlcalc.passives.getTotalCriticalPowerPercentage();
                break;
            case 'hit-rating':
                totalValue        += swlcalc.passives.getTotalHitRating();
                totalValuePercent += swlcalc.passives.getTotalGlanceReduction();
                break;
            case 'evade-rating':
                totalValue        += swlcalc.passives.getTotalEvadeRating();
                totalValuePercent += swlcalc.passives.getTotalEvadeChance();
                break;
            case 'defense-rating':
                totalValue        += swlcalc.passives.getTotalDefenseRating();
                totalValuePercent += swlcalc.passives.getTotalGlanceChance();
                break;
            default:
                break;
        }

        // sum amount brought by glyphs
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if (slot.isWeapon() && !slot.active) {
                continue;
            }
            if (slot.edit.getGlyphId() == stat) {
                totalValue += parseInt(slot.edit.getGlyphStatRating());
            }
        }

        // sum amount brought by agents
        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];
            var ad = swlcalc.gear.agents[index].agentData

            if (agent.agentData.bonuses["25"].type == stat) {
                totalValue += parseInt(agent.agentData.bonuses["25"].value)
            }
            if (agent.getLevel() == 50 && agent.agentData.bonuses["50"].type == stat) {
                totalValue += parseInt(agent.agentData.bonuses["50"].value)
            }
        }

        // exception : collect amount brought by weapon affix (only valid for Havoc)
        if (stat == 'critical-power') {
            totalValuePercent += retrieveAmountFromAffix('Havoc');
        }

        // compute corresponding percentage stat
        totalValuePercent = swlcalc.util.precisionRound(totalValuePercent + computeSecondaryStat(stat, totalValue), 1);

        // set the final values on the display
        $("#stat-" + stat).html((totalValue > 0 ? "+" : "") + totalValue);
        $("#stat-" + statPercent).html(totalValuePercent.toString() + "%");
    };

    /*
     * Glyph stats computation function
     *
     * SWL formulas for glyph stats computation are always like :
     * -> Up to {hardCap} => +1% in the considered stat every {softCapRate}
     * -> After {hardCap} => +1% in the considered stat every {hardCapRate}
     */
    var computeSecondaryStat = function(statName, sumGlyphPoints) {
        var statConsts = swlcalc.data.stats.glyphComputationFigures[statName];

        return swlcalc.util.precisionRound(
                 Math.min(sumGlyphPoints, statConsts.hardCap) / statConsts.softCapRate
                 + Math.max(sumGlyphPoints - statConsts.hardCap, 0) / statConsts.hardCapRate,
               1);
    };

    /**
     * Display any remaining miscellaneous bonus brought by agents
     */
    var updateOtherBonuses = function() {
        for (var index in swlcalc.gear.agents) {
            var agent = swlcalc.gear.agents[index];

            var b25 = $('#stat-agent' + (parseInt(index) + 1) + '-bonus25'); // TODO : abstract access
            if (agent.agentData.bonuses["25"].type == "miscellaneous") {
                b25.html(agent.getText25());
                b25.show();
            } else {
                b25.html("");
                b25.hide();
            }

            var b50 = $('#stat-agent' + (parseInt(index) + 1) + '-bonus50'); // TODO : abstract access
            if (agent.getLevel() == "50" && agent.agentData.bonuses["50"].type == "miscellaneous") {
                b50.html(agent.getText50());
                b50.show();
            } else {
                b50.html("");
                b50.hide();
            }
        }
    };

    /**
     * Boolean function. Determines whether a stat is percentage-based or not
     */
    // TODO : move to utils
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

    /**
     * Retrieve the amount of stats brought by the provided Affix
     * /!\ As of now should only be used either with Havoc or Warding
     */
    var retrieveAmountFromAffix = function(affixName) {
        var currentWeapon = swlcalc.gear.slots[swlcalc.gear.activeWeapon()];
        if (currentWeapon.edit.getSignetId() != "none") {
            var currentAffixData = swlcalc.data.signets.slot['weapon'][currentWeapon.edit.getSignetId() - 1];
            if (currentAffixData.name == affixName) {
                return currentAffixData.quality[currentWeapon.edit.getEquipmentQuality()][0];
            }
        }
        return 0;
    }

    var oPublic = {
        init: init,
        computeAverageILvl: computeAverageILvl, // visibility for testing purpose only
        combatPower: combatPower,
        healingPower: healingPower,
        updatePrimaryStats: updatePrimaryStats,
        computePrimaryPower: computePrimaryPower, // visibility for testing purpose only
        computeDamageMitigation: computeDamageMitigation, // visibility for testing purpose only
        updateSecondaryStat: updateSecondaryStat,
        computeSecondaryStat: computeSecondaryStat, // visibility for testing purpose only
        updateILvl: updateILvl,
        updateOtherBonuses: updateOtherBonuses,
        retrieveAmountFromAffix: retrieveAmountFromAffix // visibility for testing purpose only
    };

    return oPublic;
}();
