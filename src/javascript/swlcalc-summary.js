var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    var el = {};
    // COST FEATURE DISABLED. NEED REVAMP
    var elInit = function() {
        return {
            black_bullion_cost: $('#bb-cost'),
            pantheon_cost: $('#pantheon-cost'),
            criterion_upgrade_cost: $('#cu-cost'),
            astral_fuse_cost: $('#af-cost'),
            supernal_upgrade_cost: $('#su-cost'),
            eleventh_hour_cost: $('#11th-cost'),
            includeItemCosts: $('#summary-include-item-costs')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.includeItemCosts.on('change', updateAllStats);
    };

    var updateAllStats = function() {
        // updateCosts();
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

    // COST FEATURE DISABLED. NEED REVAMP
    // var updateCosts = function() {
    //     var blackBullions = 0;
    //     var pantheons = 0;
    //     var criterionUpgrades = 0;
    //     var supernalUpgrades = 0;
    //     var astralFuses = 0;
    //     var eleventhHourKits = 0;
    //     for (var slotId in swlcalc.slots) {
    //         if (swlcalc.slots.hasSlot(slotId)) {
    //             var slot = swlcalc.slots[slotId];
    //             blackBullions += slot.blackBullionCost();
    //             pantheons += slot.markOfThePantheonCost();
    //             criterionUpgrades += slot.criterionUpgradeCost();
    //             supernalUpgrades += slot.supernalUpgradeCost();
    //             astralFuses += slot.astralFuseCost();
    //             eleventhHourKits += slot.eleventhHourCost();
    //         }
    //     }
    //     if(el.includeItemCosts.is(':checked')) {
    //         blackBullions += swlcalc.data.costs.item.criterion.bullion * criterionUpgrades;
    //         pantheons += swlcalc.data.costs.item.criterion.pantheon * criterionUpgrades;
    //         blackBullions += swlcalc.data.costs.item.astral.bullion * astralFuses;
    //         pantheons += swlcalc.data.costs.item.astral.pantheon * astralFuses;
    //     }
    //     el.black_bullion_cost.html(blackBullions);
    //     el.pantheon_cost.html(pantheons);
    //     el.criterion_upgrade_cost.html(criterionUpgrades);
    //     el.supernal_upgrade_cost.html(supernalUpgrades);
    //     el.astral_fuse_cost.html(astralFuses);
    //     el.eleventh_hour_cost.html(eleventhHourKits);
    // };

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
            'hitpoints': 3300, // base HP calculation = 300 (HP at lvl 1) + 49 * 60 (49 level ups) + 60 (/!\ don't know where this 60 comes from)
            'attack-rating': 0,
            'heal-rating': 0,
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
                //TODO : add conversion to AR/HR/HP based on ratio selected
                sums['item-power'] += slot.itemPower();
            }
        }
        var pureAnima = swlcalc.miscslot.pureAnima();
        pureAnima.bonus.forEach(function(bonus){
            sums[bonus.stat] += bonus.add;
        });
        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        //TODO : refactor (it's weird)
        sums['item-power'] = calculateAverageItemPower(sums['item-power']);
        return sums;
    };

    //TODO : review needed
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
            'critical-rating': 0,
            'critical-chance': 0,
            'critical-power': 0,
            'critical-power-percentage': 0,
            'hit-rating': 0,
            'defense-rating': 0,
            'glance-chance': 0,
            'evade-rating': 0,
            'evade-chance': 0,
            'physical-protection': 300,
            'magical-protection': 300
        };
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                sums[slot.glyph()] += slot.glyphValue();
            }
        }

        var anima = swlcalc.miscslot.anima();
        sums[anima.bonus.stat] += anima.bonus.add;
        sums['critical-power-percentage'] = calculateCriticalPowerPercentage(sums['critical-power']);

        sums['critical-chance'] = calculateCriticalChance(sums['critical-rating']);
        sums['evade-chance'] = calculateEvadeChance(sums['evade-rating']);

        sums['critical-rating'] = parseInt(sums['critical-rating'].toFixed(0), 10);
        sums['critical-chance'] = sums['critical-chance'].toFixed(1);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(2);
        sums['evade-chance'] = sums['evade-chance'].toFixed(1);
        sums['magical-protection'] = parseInt(sums['magical-protection'].toFixed(0), 10);
        sums['physical-protection'] = parseInt(sums['physical-protection'].toFixed(0), 10);
        return sums;
    };

    //TODO : if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO : refactor : should be updated independently for each slot in swlcalc-slots.js
    var updateGlyphValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updateGlyphValue();
            }
        }
    };

    //TODO :  if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO : refactor : should be updated independently for each slot in swlcalc-slots.js
    var updatePowerValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updatePowerValue();
            }
        }
    }

    //TODO : review needed
    var calculateCriticalChance = function(critical_rating) {
        return 55.14 - (100.3 / (Math.pow(Math.E, (critical_rating / 790.3)) + 1));
    };

    //TODO : review needed
    var calculateCriticalPowerPercentage = function(critical_power) {
        return Math.sqrt(5 * critical_power + 625);
    };

    //TODO : review needed
    var calculateEvadeChance = function(evade_rating) {
        return 30.10 - (50.14 / (Math.pow(Math.E, (evade_rating / 704.70)) + 1));
    };

    var calculateAverageItemPower = function(sum_item_power) {
        return Math.round(sum_item_power / 8); //TODO : set to 9 when gadget will be implemented
    }

    var updateStats = function(sums) {
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString().substring(0, 4) + " %" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0 %" : "0");
                }
            }
        }
    };

    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage' || statName == 'critical-chance' || statName == 'evade-chance';
    };

    // var checkIncludeItemCosts = function() {
    //     el.includeItemCosts.prop('checked', true);
    //     el.includeItemCosts.change();
    // };

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
        // checkIncludeItemCosts : checkIncludeItemCosts
    };

    return oPublic;
}();
