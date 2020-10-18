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
        applyAnimaAllocation()
    };

    /**
     * Update the value displayed for the Healing part and apply the anima allocation change on whole gear
     */
    var handleAnimaAllocationHealingChange = function(event) {
        el.valHealing.text(event.currentTarget.value);
        applyAnimaAllocation()
    };

    /**
     * Update the value displayed for the Survivability part and apply the anima allocation change on whole gear
     */
    var handleAnimaAllocationSurvivabilityChange = function(event) {
        el.valSurvivability.text(event.currentTarget.value);
        applyAnimaAllocation()
    };

    /**
     * Apply the anima allocation to gear + summary
     */
    var applyAnimaAllocation = function() {
        for (var id in swlcalc.gear.slots) {
            swlcalc.gear.slots[id].updateEquipmentStatValues();
        }
        swlcalc.summary.updateAllStats();
    }

    /**
     * Get current anima allocation ratio for Damage part
     */
    var getDamageRatio = function() {
        return el.rangeDamage.val() / 100;
    }

    /**
     * Get current anima allocation ratio for Healing part
     */
    var getHealingRatio = function() {
        return el.rangeHealing.val() / 100;
    }

    /**
     * Get current anima allocation ratio for Survivability part
     */
    var getSurvivabilityRatio = function() {
        return el.rangeSurvivability.val() / 100;
    }

    var oPublic = {
        el: el,
        init: init,
        getDamageRatio: getDamageRatio,
        getHealingRatio: getHealingRatio,
        getSurvivabilityRatio: getSurvivabilityRatio
    };

    return oPublic;
}();
