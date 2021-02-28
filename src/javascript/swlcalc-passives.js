var swlcalc = swlcalc || {};

swlcalc.passives = function() {

    var el = {};

    var elInit = function() {
        return {
            // Base
            valAttackRatingBase:            $('#passive-attack-rating-base'),
            rangeAttackRatingBase:          $('#passive-attack-rating-base-slider'),
            valHealRatingBase:              $('#passive-heal-rating-base'),
            rangeHealRatingBase:            $('#passive-heal-rating-base-slider'),
            valHitPointsBase:               $('#passive-hit-points-base'),
            rangeHitPointsBase:             $('#passive-hit-points-base-slider'),
            valCriticalRatingBase:          $('#passive-critical-rating-base'),
            valCriticalChanceBase:          $('#passive-critical-chance-base'),
            valCriticalPowerBase:           $('#passive-critical-power-base'),
            valCriticalPowerPercentageBase: $('#passive-critical-power-percentage-base'),
            valHitRatingBase:               $('#passive-hit-rating-base'),
            valGlanceReductionBase:         $('#passive-glance-reduction-base'),
            valProtectionBase:              $('#passive-protection-base'),
            valDamageMitigationBase:        $('#passive-damage-mitigation-base'),
            valDefenseRatingBase:           $('#passive-defense-rating-base'),
            valGlanceChanceBase:            $('#passive-glance-chance-base'),
            valEvadeRatingBase:             $('#passive-evade-rating-base'),
            valEvadeChanceBase:             $('#passive-evade-chance-base'),

            // Passive Skills
            valAttackRatingPassiveSkills:     $('#passive-attack-rating-passive-skills'),
            rangeAttackRatingPassiveSkills:   $('#passive-attack-rating-passive-skills-slider'),
            valHealRatingPassiveSkills:       $('#passive-heal-rating-passive-skills'),
            rangeHealRatingPassiveSkills:     $('#passive-heal-rating-passive-skills-slider'),
            valHitPointsPassiveSkills:        $('#passive-hit-points-passive-skills'),
            rangeHitPointsPassiveSkills:      $('#passive-hit-points-passive-skills-slider'),
            valCriticalRatingPassiveSkills:   $('#passive-critical-rating-passive-skills'),
            rangeCriticalRatingPassiveSkills: $('#passive-critical-rating-passive-skills-slider'),
            valCriticalPowerPassiveSkills:    $('#passive-critical-power-passive-skills'),
            rangeCriticalPowerPassiveSkills:  $('#passive-critical-power-passive-skills-slider'),
            valHitRatingPassiveSkills:        $('#passive-hit-rating-passive-skills'),
            rangeHitRatingPassiveSkills:      $('#passive-hit-rating-passive-skills-slider'),
            valProtectionPassiveSkills:       $('#passive-protection-passive-skills'),
            rangeProtectionPassiveSkills:     $('#passive-protection-passive-skills-slider'),
            valDefenseRatingPassiveSkills:    $('#passive-defense-rating-passive-skills'),
            rangeDefenseRatingPassiveSkills:  $('#passive-defense-rating-passive-skills-slider'),
            valEvadeRatingPassiveSkills:      $('#passive-evade-rating-passive-skills'),
            rangeEvadeRatingPassiveSkills:    $('#passive-evade-rating-passive-skills-slider'),

            // Capstones
            valAttackRatingCapstones:   $('#passive-attack-rating-capstones'),
            rangeAttackRatingCapstones: $('#passive-attack-rating-capstones-slider'),
            valHealRatingCapstones:     $('#passive-heal-rating-capstones'),
            rangeHealRatingCapstones:   $('#passive-heal-rating-capstones-slider'),
            valHitPointsCapstones:      $('#passive-hit-points-capstones'),
            rangeHitPointsCapstones:    $('#passive-hit-points-capstones-slider'),

            // Expertise
            valCriticalChanceExpertise:            $('#passive-critical-chance-expertise'),
            rangeCriticalChanceExpertise:          $('#passive-critical-chance-expertise-slider'),
            valCriticalPowerPercentageExpertise:   $('#passive-critical-power-percentage-expertise'),
            rangeCriticalPowerPercentageExpertise: $('#passive-critical-power-percentage-expertise-slider'),
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
        reset(); //TODO : temporary
    };

    /**
     * Associates the right processing to each trigger.
     */
    var bindEvents = function() {
        el.rangeAttackRatingBase.change(handleAttackRatingBaseChange);
        el.rangeHealRatingBase.change(handleHealRatingBaseChange);
        el.rangeHitPointsBase.change(handleHitPointsBaseChange);

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
     * Update the value displayed for the Attack Rating > Base part
     */
    var handleAttackRatingBaseChange = function(event) {
        el.valAttackRatingBase.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Heal Rating > Base part
     */
    var handleHealRatingBaseChange = function(event) {
        el.valHealRatingBase.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Hit Points > Base part
     */
    var handleHitPointsBaseChange = function(event) {
        el.valHitPointsBase.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Attack Rating > Passive Skills part
     */
    var handleAttackRatingPassiveSkillsChange = function(event) {
        el.valAttackRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Heal Rating > Passive Skills part
     */
    var handleHealRatingPassiveSkillsChange = function(event) {
        el.valHealRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Hit Points > Passive Skills part
     */
    var handleHitPointsPassiveSkillsChange = function(event) {
        el.valHitPointsPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Rating > Passive Skills part
     */
    var handleCriticalRatingPassiveSkillsChange = function(event) {
        el.valCriticalRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Power > Passive Skills part
     */
    var handleCriticalPowerPassiveSkillsChange = function(event) {
        el.valCriticalPowerPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Hit Rating > Passive Skills part
     */
    var handleHitRatingPassiveSkillsChange = function(event) {
        el.valHitRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Protection > Passive Skills part
     */
    var handleProtectionPassiveSkillsChange = function(event) {
        el.valProtectionPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Defense Rating > Passive Skills part
     */
    var handleDefenseRatingPassiveSkillsChange = function(event) {
        el.valDefenseRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Evade Rating > Passive Skills part
     */
    var handleEvadeRatingPassiveSkillsChange = function(event) {
        el.valEvadeRatingPassiveSkills.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Attack Rating > Capstones part
     */
    var handleAttackRatingCapstonesChange = function(event) {
        el.valAttackRatingCapstones.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Heal Rating > Capstones part
     */
    var handleHealRatingCapstonesChange = function(event) {
        el.valHealRatingCapstones.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Hit Poiints > Capstones part
     */
    var handleHitPointsCapstonesChange = function(event) {
        el.valHitPointsCapstones.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Critical Chance > Expertise part
     */
    var handleCriticalChanceExpertiseChange = function(event) {
        el.valCriticalChanceExpertise.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Power percentage > Expertise part
     */
    var handleCriticalPowerPercentageExpertiseChange = function(event) {
        el.valCriticalPowerPercentageExpertise.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /*************************************************************************************/

    /**
     * Get the total passive amount of Attack Rating
     */
    var getTotalAttackRating = function(event) {
        return parseInt(el.valAttackRatingBase.text())
             + parseInt(el.valAttackRatingPassiveSkills.text())
             + parseInt(el.valAttackRatingCapstones.text());
    };

    /**
     * Get the total passive amount of Heal Rating
     */
    var getTotalHealRating = function(event) {
        return parseInt(el.valHealRatingBase.text())
             + parseInt(el.valHealRatingPassiveSkills.text())
             + parseInt(el.valHealRatingCapstones.text());
    };

    /**
     * Get the total passive amount of Hit Points
     */
    var getTotalHitPoints = function(event) {
        return parseInt(el.valHitPointsBase.text())
             + parseInt(el.valHitPointsPassiveSkills.text())
             + parseInt(el.valHitPointsCapstones.text());
    };

    /**
     * Get the total passive amount of Critical Rating
     */
    var getTotalCriticalRating = function(event) {
        return parseInt(el.valCriticalRatingBase.text())
             + parseInt(el.valCriticalRatingPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Critical Chance
     */
    var getTotalCriticalChance = function(event) {
        return parseFloat(el.valCriticalChanceBase.text())
             + parseFloat(el.valCriticalChanceExpertise.text());
    };

    /**
     * Get the total passive amount of Critical Power
     */
    var getTotalCriticalPower = function(event) {
        return parseInt(el.valCriticalPowerBase.text())
             + parseInt(el.valCriticalPowerPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Critical Power percentage
     */
    var getTotalCriticalPowerPercentage = function(event) {
        return parseFloat(el.valCriticalPowerPercentageBase.text())
             + parseFloat(el.valCriticalPowerPercentageExpertise.text());
    };

    /**
     * Get the total passive amount of Hit Rating
     */
    var getTotalHitRating = function(event) {
        return parseInt(el.valHitRatingBase.text())
             + parseInt(el.valHitRatingPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Glance Reduction
     */
    var getTotalGlanceReduction = function(event) {
        return parseFloat(el.valGlanceReductionBase.text());
    };

    /**
     * Get the total passive amount of Protection
     */
    var getTotalProtection = function(event) {
        return parseInt(el.valProtectionBase.text())
             + parseInt(el.valProtectionPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Damage Mitigation
     */
    var getTotalDamageMitigation = function(event) {
        return parseFloat(el.valDamageMitigationBase.text());
    };

    /**
     * Get the total passive amount of Defense Rating
     */
    var getTotalDefenseRating = function(event) {
        return parseInt(el.valDefenseRatingBase.text())
             + parseInt(el.valDefenseRatingPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Glance Chance
     */
    var getTotalGlanceChance = function(event) {
        return parseFloat(el.valGlanceChanceBase.text());
    };

    /**
     * Get the total passive amount of Evade Rating
     */
    var getTotalEvadeRating = function(event) {
        return parseInt(el.valEvadeRatingBase.text())
             + parseInt(el.valEvadeRatingPassiveSkills.text());
    };

    /**
     * Get the total passive amount of Evade Chance
     */
    var getTotalEvadeChance = function(event) {
        return parseFloat(el.valEvadeChanceBase.text());
    };

    /*************************************************************************************/

    var getAttackRatingBase = function(value) {
        return parseInt(el.valAttackRatingBase.text());
    }

    var getHealRatingBase = function(value) {
        return parseInt(el.valHealRatingBase.text());
    }

    var getHitPointsBase = function(value) {
        return parseInt(el.valHitPointsBase.text());
    }

    var getAttackRatingPassiveSkills = function(value) {
        return parseInt(el.valAttackRatingPassiveSkills.text());
    }

    var getHealRatingPassiveSkills = function(value) {
        return parseInt(el.valHealRatingPassiveSkills.text());
    }

    var getHitPointsPassiveSkills = function(value) {
        return parseInt(el.valHitPointsPassiveSkills.text());
    }

    var getCriticalRatingPassiveSkills = function(value) {
        return parseInt(el.valCriticalRatingPassiveSkills.text());
    }

    var getCriticalPowerPassiveSkills = function(value) {
        return parseInt(el.valCriticalPowerPassiveSkills.text());
    }

    var getHitRatingPassiveSkills = function(value) {
        return parseInt(el.valHitRatingPassiveSkills.text());
    }

    var getProtectionPassiveSkills = function(value) {
        return parseInt(el.valProtectionPassiveSkills.text());
    }

    var getDefenseRatingPassiveSkills = function(value) {
        return parseInt(el.valDefenseRatingPassiveSkills.text());
    }

    var getEvadeRatingPassiveSkills = function(value) {
        return parseInt(el.valEvadeRatingPassiveSkills.text());
    }

    var getAttackRatingCapstones = function(value) {
        return parseInt(el.valAttackRatingCapstones.text());
    }

    var getHealRatingCapstones = function(value) {
        return parseInt(el.valHealRatingCapstones.text());
    }

    var getHitPointsCapstones = function(value) {
        return parseInt(el.valHitPointsCapstones.text());
    }

    var getCriticalChanceExpertise = function(value) {
        return parseFloat(el.valCriticalChanceExpertise.text());
    }

    var getCriticalPowerPercentageExpertise = function(value) {
        return parseInt(el.valCriticalPowerPercentageExpertise.text());
    }

    /*************************************************************************************/

    var setAttackRatingBase = function(value) {
        el.rangeAttackRatingBase.val(value).change();
    }

    var setHealRatingBase = function(value) {
        el.rangeHealRatingBase.val(value).change();
    }

    var setHitPointsBase = function(value) {
        el.rangeHitPointsBase.val(value).change();
    }

    var setAttackRatingPassiveSkills = function(value) {
        el.rangeAttackRatingPassiveSkills.val(value).change();
    }

    var setHealRatingPassiveSkills = function(value) {
        el.rangeHealRatingPassiveSkills.val(value).change();
    }

    var setHitPointsPassiveSkills = function(value) {
        el.rangeHitPointsPassiveSkills.val(value).change();
    }

    var setCriticalRatingPassiveSkills = function(value) {
        el.rangeCriticalRatingPassiveSkills.val(value).change();
    }

    var setCriticalPowerPassiveSkills = function(value) {
        el.rangeCriticalPowerPassiveSkills.val(value).change();
    }

    var setHitRatingPassiveSkills = function(value) {
        el.rangeHitRatingPassiveSkills.val(value).change();
    }

    var setProtectionPassiveSkills = function(value) {
        el.rangeProtectionPassiveSkills.val(value).change();
    }

    var setDefenseRatingPassiveSkills = function(value) {
        el.rangeDefenseRatingPassiveSkills.val(value).change();
    }

    var setEvadeRatingPassiveSkills = function(value) {
        el.rangeEvadeRatingPassiveSkills.val(value).change();
    }

    var setAttackRatingCapstones = function(value) {
        el.rangeAttackRatingCapstones.val(value).change();
    }

    var setHealRatingCapstones = function(value) {
        el.rangeHealRatingCapstones.val(value).change();
    }

    var setHitPointsCapstones = function(value) {
        el.rangeHitPointsCapstones.val(value).change();
    }

    var setCriticalChanceExpertise = function(value) {
        el.rangeCriticalChanceExpertise.val(value).change();
    }

    var setCriticalPowerPercentageExpertise = function(value) {
        el.rangeCriticalPowerPercentageExpertise.val(value).change();
    }

    /*************************************************************************************/

    /**
     * Reset passives configuration (= set everything to max)
     */
    var reset = function() {
        setAttackRatingBase(el.rangeAttackRatingBase.attr("max"));
        setHealRatingBase(el.rangeHealRatingBase.attr("max"));
        setHitPointsBase(el.rangeHitPointsBase.attr("max"));

        setAttackRatingPassiveSkills(el.rangeAttackRatingPassiveSkills.attr("max"));
        setHealRatingPassiveSkills(el.rangeHealRatingPassiveSkills.attr("max"));
        setHitPointsPassiveSkills(el.rangeHitPointsPassiveSkills.attr("max"));
        setCriticalRatingPassiveSkills(el.rangeCriticalRatingPassiveSkills.attr("max"));
        setCriticalPowerPassiveSkills(el.rangeCriticalPowerPassiveSkills.attr("max"));
        setHitRatingPassiveSkills(el.rangeHitRatingPassiveSkills.attr("max"));
        setProtectionPassiveSkills(el.rangeProtectionPassiveSkills.attr("max"));
        setDefenseRatingPassiveSkills(el.rangeDefenseRatingPassiveSkills.attr("max"));
        setEvadeRatingPassiveSkills(el.rangeEvadeRatingPassiveSkills.attr("max"));

        setAttackRatingCapstones(el.rangeAttackRatingCapstones.attr("max"));
        setHealRatingCapstones(el.rangeHealRatingCapstones.attr("max"));
        setHitPointsCapstones(el.rangeHitPointsCapstones.attr("max"));

        setCriticalChanceExpertise(el.rangeCriticalChanceExpertise.attr("max"));
        setCriticalPowerPercentageExpertise(el.rangeCriticalPowerPercentageExpertise.attr("max"));
    };

    var oPublic = {
        // misc
        init: init,
        reset: reset,
        // getters
        getAttackRatingBase: getAttackRatingBase,
        getHealRatingBase: getHealRatingBase,
        getHitPointsBase: getHitPointsBase,
        getAttackRatingPassiveSkills: getAttackRatingPassiveSkills,
        getHealRatingPassiveSkills: getHealRatingPassiveSkills,
        getHitPointsPassiveSkills: getHitPointsPassiveSkills,
        getCriticalRatingPassiveSkills: getCriticalRatingPassiveSkills,
        getCriticalPowerPassiveSkills: getCriticalPowerPassiveSkills,
        getHitRatingPassiveSkills: getHitRatingPassiveSkills,
        getProtectionPassiveSkills: getProtectionPassiveSkills,
        getDefenseRatingPassiveSkills: getDefenseRatingPassiveSkills,
        getEvadeRatingPassiveSkills: getEvadeRatingPassiveSkills,
        getAttackRatingCapstones: getAttackRatingCapstones,
        getHealRatingCapstones: getHealRatingCapstones,
        getHitPointsCapstones: getHitPointsCapstones,
        getCriticalChanceExpertise: getCriticalChanceExpertise,
        getCriticalPowerPercentageExpertise: getCriticalPowerPercentageExpertise,

        getTotalAttackRating: getTotalAttackRating,
        getTotalHealRating: getTotalHealRating,
        getTotalHitPoints: getTotalHitPoints,
        getTotalCriticalRating: getTotalCriticalRating,
        getTotalCriticalChance: getTotalCriticalChance,
        getTotalCriticalPower: getTotalCriticalPower,
        getTotalCriticalPowerPercentage: getTotalCriticalPowerPercentage,
        getTotalHitRating: getTotalHitRating,
        getTotalGlanceReduction: getTotalGlanceReduction,
        getTotalProtection: getTotalProtection,
        getTotalDamageMitigation: getTotalDamageMitigation,
        getTotalDefenseRating: getTotalDefenseRating,
        getTotalGlanceChance: getTotalGlanceChance,
        getTotalEvadeRating: getTotalEvadeRating,
        getTotalEvadeChance: getTotalEvadeChance,
        // setters
        setAttackRatingBase: setAttackRatingBase,
        setHealRatingBase: setHealRatingBase,
        setHitPointsBase: setHitPointsBase,
        setAttackRatingPassiveSkills: setAttackRatingPassiveSkills,
        setHealRatingPassiveSkills: setHealRatingPassiveSkills,
        setHitPointsPassiveSkills: setHitPointsPassiveSkills,
        setCriticalRatingPassiveSkills: setCriticalRatingPassiveSkills,
        setCriticalPowerPassiveSkills: setCriticalPowerPassiveSkills,
        setHitRatingPassiveSkills: setHitRatingPassiveSkills,
        setProtectionPassiveSkills: setProtectionPassiveSkills,
        setDefenseRatingPassiveSkills: setDefenseRatingPassiveSkills,
        setEvadeRatingPassiveSkills: setEvadeRatingPassiveSkills,
        setAttackRatingCapstones: setAttackRatingCapstones,
        setHealRatingCapstones: setHealRatingCapstones,
        setHitPointsCapstones: setHitPointsCapstones,
        setCriticalChanceExpertise: setCriticalChanceExpertise,
        setCriticalPowerPercentageExpertise: setCriticalPowerPercentageExpertise,
    };

    return oPublic;
}();
