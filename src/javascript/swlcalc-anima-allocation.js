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

    /**************************************************************************
     * Accessors :
     * ---------------------------------------------------------------------- */
    /* Damage : */
    var getDamagePercentage = function() {
        return el.rangeDamage.val();
    }
    var setDamagePercentage = function(value) {
        el.rangeDamage.val(value).change();
    }
    var getDamageRatio = function() {
        return getDamagePercentage() / 100;
    }

    /* Healing : */
    var getHealingPercentage = function() {
        return el.rangeHealing.val();
    }
    var setHealingPercentage = function(value) {
        el.rangeHealing.val(value).change();
    }
    var getHealingRatio = function() {
        return getHealingPercentage() / 100;
    }

    /* Survivability : */
    var getSurvivabilityPercentage = function() {
        return el.rangeSurvivability.val();
    }
    var setSurvivabilityPercentage = function(value) {
        el.rangeSurvivability.val(value).change();
    }
    var getSurvivabilityRatio = function() {
        return getSurvivabilityPercentage() / 100;
    }
    
    /**************************************************************************/

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
