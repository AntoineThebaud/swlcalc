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
        updateMiscellaneousBonuses();
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
            if (sums.hasOwnProperty(stat)) { // TODO/REFACTOR this "if" could be removed ?
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    /**
     * Collects primary stats by going through the whole gear
     */
    var collectPrimaryStats = function() {
        var statsData = swlcalc.data.stats.computationFigures.primary;
        // initial values
        var sums = {
            'combat-power':  0,
            'healing-power': 0,
            'weapon-power':  0,
            'hitpoints':     statsData['hp'].base + statsData['hp'].capstone + statsData['hp'].sp_passive,
            'attack-rating': statsData['ar'].base + statsData['ar'].capstone + statsData['ar'].sp_passive,
            'heal-rating':   statsData['hr'].base + statsData['hr'].capstone + statsData['hr'].sp_passive,
            'power-rating':  0,
            'ilvl':          0
        };
        var sumOfIlvl = 0;

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sumOfIlvl += parseInt(slot.edit.iLvl());
            if (slot.isWeapon() && !slot.active) {
                continue;
            } else if (slot.isWeapon() && slot.edit.equipmentId() != 'none') {
                sums['weapon-power'] = parseInt(slot.edit.equipmentStatValue());
            } else if (!slot.isWeapon() && slot.edit.equipmentId() != 'none') {
                sums['power-rating'] += parseInt(slot.edit.equipmentStatValue());
            }
        }

        // sum bonuses brought by agents
        for (var i = 1; i <= 3; i++) {
            var ad = swlcalc.gear.agents[i].agentData

            if (swlcalc.util.isPrimaryStat(ad.lvl25_type)) {
                sums[ad.lvl25_type] += parseInt(ad.lvl25_value)
            }
            if (swlcalc.gear.agents[i].level() == 50) {
                if (swlcalc.util.isPrimaryStat(ad.lvl50_type)) {
                    sums[ad.lvl50_type] += parseInt(ad.lvl50_value)
                }
            }
        }

        // first basic implementation of anima allocation
        var animaAllocation = swlcalc.buttonBar.getAnimaAllocation();
        if (animaAllocation == 'dps') {
            sums['attack-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'heal') {
            sums['heal-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'tank') {
            sums['hitpoints'] += Math.round(sums['power-rating'] * swlcalc.data.stats.hp_coefficient);
        }

        sums['combat-power']  = computePrimaryPower('ar', sums['attack-rating'], sums['weapon-power']);
        sums['healing-power'] = computePrimaryPower('hr', sums['heal-rating'], sums['weapon-power']);
        sums['ilvl']          = computeAverageILvl(sumOfIlvl);

        return sums;
    };

    /*
     * Computes the Primary (= Combat or Healing) Power for the given Primary Stat Rating and Weapon Power values
     * SWL formula for Primary Power is like :
     * -> +1 Primary Power every {rate} of Primary Stat Rating
     * -> +1 Primary Power every {rate} of Weapon Power
     */
    var computePrimaryPower = function(primaryStat, sumPrimaryStatPoints, weaponPower) {
        return Math.round((sumPrimaryStatPoints + weaponPower) / swlcalc.data.stats.computationFigures.primary[primaryStat].rate);
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
        var statsData = swlcalc.data.stats.computationFigures.secondary;
        // initial values
        var sums = {
            'critical-rating':           statsData['crit'].sp_passive_flat,
            'critical-chance':           0,
            'critical-power':            statsData['cpow'].sp_passive_flat,
            'critical-power-percentage': 0,
            'hit-rating':                statsData['hit'].sp_passive_flat,
            'glance-reduction':          0,
            'defense-rating':            statsData['def'].sp_passive_flat,
            'glance-chance':             0,
            'evade-rating':              statsData['evad'].sp_passive_flat,
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
        for (var i = 1; i <= 3; i++) {
            var ad = swlcalc.gear.agents[i].agentData

            if (swlcalc.util.isSecondaryStat(ad.lvl25_type)) {
                sums[ad.lvl25_type] += parseInt(ad.lvl25_value)
            }
            if (swlcalc.gear.agents[i].level() == 50) {
                if (swlcalc.util.isSecondaryStat(ad.lvl50_type)) {
                    sums[ad.lvl50_type] += parseInt(ad.lvl50_value)
                }
            }
        }

        // compute percentage stats
        sums['critical-chance']           = computeSecondaryStat('crit', sums['critical-rating']);
        sums['critical-power-percentage'] = computeSecondaryStat('cpow', sums['critical-power']);
        sums['glance-reduction']          = computeSecondaryStat('hit', sums['hit-rating']);
        sums['glance-chance']             = computeSecondaryStat('def', sums['defense-rating']);
        sums['evade-chance']              = computeSecondaryStat('evad', sums['evade-rating']);
        // round values for display purpose
        sums['critical-rating']           = sums['critical-rating'].toFixed(0);
        sums['critical-chance']           = sums['critical-chance'].toFixed(1);
        sums['critical-power']            = sums['critical-power'].toFixed(0);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(1);
        sums['evade-chance']              = sums['evade-chance'].toFixed(1);

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

        return stat.sp_passive_percent
               + stat.expertise
               + swlcalc.util.precisionRound(
                     Math.min(sumGlyphPoints, stat.hardCap) / stat.softCapRate
                     + Math.max(sumGlyphPoints - stat.hardCap, 0) / stat.hardCapRate,
                 1);
    };

      /**
       * Display any remaining miscellaneous bonus brought by agents
       */
      var updateMiscellaneousBonuses = function() {
          for (var i = 1; i <= 3; i++) {
              var bonus = ""
              if (swlcalc.gear.agents[i].agentData.lvl25_type == "miscellaneous") {
                  bonus = swlcalc.gear.agents[i].text25();
              } else if (swlcalc.gear.agents[i].agentData.lvl50_type == "miscellaneous") {
                  bonus = swlcalc.gear.agents[i].text50();
              }
              $('#stat-agent' + i + '-bonus').html(bonus);
          }
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
        computeSecondaryStat: computeSecondaryStat,    //TODO/REFACTOR : visibility relevant only for tests
        computePrimaryPower: computePrimaryPower,      //TODO/REFACTOR : visibility relevant only for tests
        computeAverageILvl: computeAverageILvl,        //TODO/REFACTOR : visibility relevant only for tests
        collectPrimaryStats: collectPrimaryStats,      //TODO/REFACTOR : visibility relevant only for tests
        collectSecondaryStats: collectSecondaryStats,  //TODO/REFACTOR : visibility relevant only for tests
        collectAllStats: collectAllStats,              //TODO/REFACTOR : visibility relevant only for tests
        updateAllStats: updateAllStats,
        updateDescriptions: updateDescriptions
    };

    return oPublic;
}();
