var swlcalc = swlcalc || {};

swlcalc.animaAllocation = function() {

    var el = {};

    var elInit = function() {
        return {
            rangeDamage:        $('#anima-allocation-damage-range'),
            rangeHealing:       $('#anima-allocation-healing-range'),
            rangeSurvivability: $('#anima-allocation-survivability-range'),
            valDamage:          $('#anima-allocation-damage-val'),
            valHealing:         $('#anima-allocation-healing-val'),
            valSurvivability:   $('#anima-allocation-survivability-val')
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
        el.rangeDamage.change(handleAnimaAllocationDamageChange);
        el.rangeHealing.change(handleAnimaAllocationHealingChange);
        el.rangeSurvivability.change(handleAnimaAllocationSurvivabilityChange);
    };

    /**
     * Update the value displayed for the Damage part and apply the anima allocation change on whole gear
     */
    var handleAnimaAllocationDamageChange = function(event) {
        el.valDamage.text(event.currentTarget.value);
        applyAnimaAllocation();
    };

    /**
     * Update the value displayed for the Healing part and apply the anima allocation change on whole gear
     */
    var handleAnimaAllocationHealingChange = function(event) {
        el.valHealing.text(event.currentTarget.value);
        applyAnimaAllocation();
    };

    /**
     * Update the value displayed for the Survivability part and apply the anima allocation change on whole gear
     */
    var handleAnimaAllocationSurvivabilityChange = function(event) {
        el.valSurvivability.text(event.currentTarget.value);
        applyAnimaAllocation();
    };

    /**
     * Apply the anima allocation to gear + summary
     */
    var applyAnimaAllocation = function() {
        for (var slotId in swlcalc.gear.slots) {
            slot = swlcalc.gear.slots[slotId]
            if(!slot.isWeapon()) {
                slot.updateTalismanStatValues();
            }
        }
        swlcalc.summary.updateAllStats();
        swlcalc.gear.updateAllDescriptions();
    }

    /**
     * Get current anima allocation percentage for Damage part
     */
    var getDamagePercentage = function() {
        return el.rangeDamage.val();
    }

    /**
     * Get current anima allocation percentage for Healing part
     */
    var getHealingPercentage = function() {
        return el.rangeHealing.val();
    }

    /**
     * Get current anima allocation percentage for Survivability part
     */
    var getSurvivabilityPercentage = function() {
        return el.rangeSurvivability.val();
    }

    /**
     * Get current anima allocation ratio for Damage part
     */
    var getDamageRatio = function() {
        return getDamagePercentage() / 100;
    }

    /**
     * Get current anima allocation ratio for Healing part
     */
    var getHealingRatio = function() {
        return getHealingPercentage() / 100;
    }

    /**
     * Get current anima allocation ratio for Survivability part
     */
    var getSurvivabilityRatio = function() {
        return getSurvivabilityPercentage() / 100;
    }

    /**
     * Set current anima allocation percentage for Damage part
     */
    var setDamagePercentage = function(value) {
        el.rangeDamage.val(value);
        el.rangeDamage.change();
    }

    /**
     * Set current anima allocation percentage for Healing part
     */
    var setHealingPercentage = function(value) {
        el.rangeHealing.val(value);
        el.rangeHealing.change();
    }

    /**
     * Set current anima allocation percentage for Survivability part
     */
    var setSurvivabilityPercentage = function(value) {
        el.rangeSurvivability.val(value);
        el.rangeSurvivability.change();
    }

    var oPublic = {
        el: el,
        init: init,
        getDamagePercentage: getDamagePercentage,
        getHealingPercentage: getHealingPercentage,
        getSurvivabilityPercentage: getSurvivabilityPercentage,
        getDamageRatio: getDamageRatio,
        getHealingRatio: getHealingRatio,
        getSurvivabilityRatio: getSurvivabilityRatio,
        setDamagePercentage: setDamagePercentage,
        setHealingPercentage: setHealingPercentage,
        setSurvivabilityPercentage: setSurvivabilityPercentage
    };

    return oPublic;
}();
