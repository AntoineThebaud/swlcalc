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
            valCriticalChanceExpertiseWeapon1:            $('#passive-critical-chance-expertise-weapon1'),
            valCriticalChanceExpertiseWeapon2:            $('#passive-critical-chance-expertise-weapon2'),
            rangeCriticalChanceExpertiseWeapon1:          $('#passive-critical-chance-expertise-slider-weapon1'),
            rangeCriticalChanceExpertiseWeapon2:          $('#passive-critical-chance-expertise-slider-weapon2'),
            valCriticalPowerPercentageExpertiseWeapon1:   $('#passive-critical-power-percentage-expertise-weapon1'),
            valCriticalPowerPercentageExpertiseWeapon2:   $('#passive-critical-power-percentage-expertise-weapon2'),
            rangeCriticalPowerPercentageExpertiseWeapon1: $('#passive-critical-power-percentage-expertise-slider-weapon1'),
            rangeCriticalPowerPercentageExpertiseWeapon2: $('#passive-critical-power-percentage-expertise-slider-weapon2'),
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

        el.rangeCriticalChanceExpertiseWeapon1.change(handleCriticalChanceExpertiseChangeWeapon1);
        el.rangeCriticalChanceExpertiseWeapon2.change(handleCriticalChanceExpertiseChangeWeapon2);
        el.rangeCriticalPowerPercentageExpertiseWeapon1.change(handleCriticalPowerPercentageExpertiseChangeWeapon1);
        el.rangeCriticalPowerPercentageExpertiseWeapon2.change(handleCriticalPowerPercentageExpertiseChangeWeapon2);
    };

    /**************************************************************************
     * Handlers :
     * ---------------------------------------------------------------------- */

    /* BASE : --------------------------------------------------------------- */

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

    /* PASSIVES SKILLS : ---------------------------------------------------- */

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

    /* CAPSTONES : ---------------------------------------------------------- */

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

    /* EXPERTISE : ---------------------------------------------------------- */

    /**
     * Update the value displayed for the Critical Chance > Expertise part for the Primary weapon
     */
    var handleCriticalChanceExpertiseChangeWeapon1 = function(event) {
        el.valCriticalChanceExpertiseWeapon1.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Chance > Expertise part for the Secondary weapon
     */
    var handleCriticalChanceExpertiseChangeWeapon2 = function(event) {
        el.valCriticalChanceExpertiseWeapon2.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Power percentage > Expertise part for the Primary weapon
     */
    var handleCriticalPowerPercentageExpertiseChangeWeapon1 = function(event) {
        el.valCriticalPowerPercentageExpertiseWeapon1.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**
     * Update the value displayed for the Critical Power percentage > Expertise part for the Secondary weapon
     */
    var handleCriticalPowerPercentageExpertiseChangeWeapon2 = function(event) {
        el.valCriticalPowerPercentageExpertiseWeapon2.text(event.currentTarget.value);
        swlcalc.summary.updateAllStats();
    };

    /**************************************************************************/

    /**************************************************************************
     * Accessors :
     * ---------------------------------------------------------------------- */

    /* BASE : --------------------------------------------------------------- */

    /* Attack Rating : */
    var getAttackRatingBase = function(value) {
        return parseInt(el.valAttackRatingBase.text());
    }
    var setAttackRatingBase = function(value) {
        el.rangeAttackRatingBase.val(value).change();
    }

    /* Heal Rating : */
    var getHealRatingBase = function(value) {
        return parseInt(el.valHealRatingBase.text());
    }
    var setHealRatingBase = function(value) {
        el.rangeHealRatingBase.val(value).change();
    }

    /* Hit Points : */
    var getHitPointsBase = function(value) {
        return parseInt(el.valHitPointsBase.text());
    }
    var setHitPointsBase = function(value) {
        el.rangeHitPointsBase.val(value).change();
    }

    /* PASSIVES SKILLS : ---------------------------------------------------- */

    /* Attack Rating : */
    var getAttackRatingPassiveSkills = function(value) {
        return parseInt(el.valAttackRatingPassiveSkills.text());
    }
    var setAttackRatingPassiveSkills = function(value) {
        el.rangeAttackRatingPassiveSkills.val(value).change();
    }

    /* Heal Rating : */
    var getHealRatingPassiveSkills = function(value) {
        return parseInt(el.valHealRatingPassiveSkills.text());
    }
    var setHealRatingPassiveSkills = function(value) {
        el.rangeHealRatingPassiveSkills.val(value).change();
    }

    /* Hit Points : */
    var getHitPointsPassiveSkills = function(value) {
        return parseInt(el.valHitPointsPassiveSkills.text());
    }
    var setHitPointsPassiveSkills = function(value) {
        el.rangeHitPointsPassiveSkills.val(value).change();
    }

    /* Critical Rating : */
    var getCriticalRatingPassiveSkills = function(value) {
        return parseInt(el.valCriticalRatingPassiveSkills.text());
    }
    var setCriticalRatingPassiveSkills = function(value) {
        el.rangeCriticalRatingPassiveSkills.val(value).change();
    }

    /* Critical Power : */
    var getCriticalPowerPassiveSkills = function(value) {
        return parseInt(el.valCriticalPowerPassiveSkills.text());
    }
    var setCriticalPowerPassiveSkills = function(value) {
        el.rangeCriticalPowerPassiveSkills.val(value).change();
    }

    /* Hit Rating : */
    var getHitRatingPassiveSkills = function(value) {
        return parseInt(el.valHitRatingPassiveSkills.text());
    }
    var setHitRatingPassiveSkills = function(value) {
        el.rangeHitRatingPassiveSkills.val(value).change();
    }

    /* Protection : */
    var getProtectionPassiveSkills = function(value) {
        return parseInt(el.valProtectionPassiveSkills.text());
    }
    var setProtectionPassiveSkills = function(value) {
        el.rangeProtectionPassiveSkills.val(value).change();
    }

    /* Defense Rating : */
    var getDefenseRatingPassiveSkills = function(value) {
        return parseInt(el.valDefenseRatingPassiveSkills.text());
    }
    var setDefenseRatingPassiveSkills = function(value) {
        el.rangeDefenseRatingPassiveSkills.val(value).change();
    }

    /* Evade Rating : */
    var getEvadeRatingPassiveSkills = function(value) {
        return parseInt(el.valEvadeRatingPassiveSkills.text());
    }
    var setEvadeRatingPassiveSkills = function(value) {
        el.rangeEvadeRatingPassiveSkills.val(value).change();
    }

    /* CAPSTONES : ---------------------------------------------------------- */

    /* Attack Rating : */
    var getAttackRatingCapstones = function(value) {
        return parseInt(el.valAttackRatingCapstones.text());
    }
    var setAttackRatingCapstones = function(value) {
        el.rangeAttackRatingCapstones.val(value).change();
    }

    /* Heal Rating : */
    var getHealRatingCapstones = function(value) {
        return parseInt(el.valHealRatingCapstones.text());
    }
    var setHealRatingCapstones = function(value) {
        el.rangeHealRatingCapstones.val(value).change();
    }

    /* Hit Points : */
    var getHitPointsCapstones = function(value) {
        return parseInt(el.valHitPointsCapstones.text());
    }
    var setHitPointsCapstones = function(value) {
        el.rangeHitPointsCapstones.val(value).change();
    }

    /* EXPERTISE : ---------------------------------------------------------- */

    /* Critical Chance : */
    var getCriticalChanceExpertiseWeapon1 = function(value) {
        return parseFloat(el.valCriticalChanceExpertiseWeapon1.text());
    }
    var getCriticalChanceExpertiseWeapon2 = function(value) {
        return parseFloat(el.valCriticalChanceExpertiseWeapon2.text());
    }
    var setCriticalChanceExpertiseWeapon1 = function(value) {
        el.rangeCriticalChanceExpertiseWeapon1.val(value).change();
    }
    var setCriticalChanceExpertiseWeapon2 = function(value) {
        el.rangeCriticalChanceExpertiseWeapon2.val(value).change();
    }

    /* Critical Power Percentage : */
    var getCriticalPowerPercentageExpertiseWeapon1 = function(value) {
        return parseFloat(el.valCriticalPowerPercentageExpertiseWeapon1.text());
    }
    var getCriticalPowerPercentageExpertiseWeapon2 = function(value) {
        return parseFloat(el.valCriticalPowerPercentageExpertiseWeapon2.text());
    }
    var setCriticalPowerPercentageExpertiseWeapon1 = function(value) {
        el.rangeCriticalPowerPercentageExpertiseWeapon1.val(value).change();
    }
    var setCriticalPowerPercentageExpertiseWeapon2 = function(value) {
        el.rangeCriticalPowerPercentageExpertiseWeapon2.val(value).change();
    }

    /**************************************************************************
     * Get Totals :
     * ---------------------------------------------------------------------- */

    /**
     * Get the total passive amount of Attack Rating
     */
    var getTotalAttackRating = function() {
        return getAttackRatingBase()
             + getAttackRatingPassiveSkills()
             + getAttackRatingCapstones();
    };

    /**
     * Get the total passive amount of Heal Rating
     */
    var getTotalHealRating = function() {
        return getHealRatingBase()
             + getHealRatingPassiveSkills()
             + getHealRatingCapstones();
    };

    /**
     * Get the total passive amount of Hit Points
     */
    var getTotalHitPoints = function() {
        return getHitPointsBase()
             + getHitPointsPassiveSkills()
             + getHitPointsCapstones();
    };

    /**
     * Get the total passive amount of Critical Rating
     */
    var getTotalCriticalRating = function() {
        return parseInt(el.valCriticalRatingBase.text())
             + getCriticalRatingPassiveSkills();
    };

    /**
     * Get the total passive amount of Critical Chance
     */
    var getTotalCriticalChance = function() {
        return parseFloat(el.valCriticalChanceBase.text())
             + (swlcalc.gear.activeWeapon() == swlcalc.gear.slots.weapon.id ? getCriticalChanceExpertiseWeapon1() : getCriticalChanceExpertiseWeapon2());
    };

    /**
     * Get the total passive amount of Critical Power
     */
    var getTotalCriticalPower = function() {
        return parseInt(el.valCriticalPowerBase.text())
             + getCriticalPowerPassiveSkills();
    };

    /**
     * Get the total passive amount of Critical Power percentage
     */
    var getTotalCriticalPowerPercentage = function() {
        return parseFloat(el.valCriticalPowerPercentageBase.text())
             + (swlcalc.gear.activeWeapon() == swlcalc.gear.slots.weapon.id ? getCriticalPowerPercentageExpertiseWeapon1() : getCriticalPowerPercentageExpertiseWeapon2());
    };

    /**
     * Get the total passive amount of Hit Rating
     */
    var getTotalHitRating = function() {
        return parseInt(el.valHitRatingBase.text())
             + getHitRatingPassiveSkills();
    };

    /**
     * Get the total passive amount of Glance Reduction
     */
    var getTotalGlanceReduction = function() {
        return parseFloat(el.valGlanceReductionBase.text());
    };

    /**
     * Get the total passive amount of Protection
     */
    var getTotalProtection = function() {
        return parseInt(el.valProtectionBase.text())
             + getProtectionPassiveSkills();
    };

    /**
     * Get the total passive amount of Damage Mitigation
     */
    var getTotalDamageMitigation = function() {
        return parseFloat(el.valDamageMitigationBase.text());
    };

    /**
     * Get the total passive amount of Defense Rating
     */
    var getTotalDefenseRating = function() {
        return parseInt(el.valDefenseRatingBase.text())
             + getDefenseRatingPassiveSkills();
    };

    /**
     * Get the total passive amount of Glance Chance
     */
    var getTotalGlanceChance = function() {
        return parseFloat(el.valGlanceChanceBase.text());
    };

    /**
     * Get the total passive amount of Evade Rating
     */
    var getTotalEvadeRating = function() {
        return parseInt(el.valEvadeRatingBase.text())
             + getEvadeRatingPassiveSkills();
    };

    /**
     * Get the total passive amount of Evade Chance
     */
    var getTotalEvadeChance = function() {
        return parseFloat(el.valEvadeChanceBase.text());
    };

    /**************************************************************************/

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

        setCriticalChanceExpertiseWeapon1(el.rangeCriticalChanceExpertiseWeapon1.attr("max"));
        setCriticalChanceExpertiseWeapon2(el.rangeCriticalChanceExpertiseWeapon2.attr("max"));
        setCriticalPowerPercentageExpertiseWeapon1(el.rangeCriticalPowerPercentageExpertiseWeapon1.attr("max"));
        setCriticalPowerPercentageExpertiseWeapon2(el.rangeCriticalPowerPercentageExpertiseWeapon2.attr("max"));
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
        getCriticalChanceExpertiseWeapon1: getCriticalChanceExpertiseWeapon1,
        getCriticalChanceExpertiseWeapon2: getCriticalChanceExpertiseWeapon2,
        getCriticalPowerPercentageExpertiseWeapon1: getCriticalPowerPercentageExpertiseWeapon1,
        getCriticalPowerPercentageExpertiseWeapon2: getCriticalPowerPercentageExpertiseWeapon2,
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
        setCriticalChanceExpertiseWeapon1: setCriticalChanceExpertiseWeapon1,
        setCriticalChanceExpertiseWeapon2: setCriticalChanceExpertiseWeapon2,
        setCriticalPowerPercentageExpertiseWeapon1: setCriticalPowerPercentageExpertiseWeapon1,
        setCriticalPowerPercentageExpertiseWeapon2: setCriticalPowerPercentageExpertiseWeapon2,
        // totals computers :
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
    };

    return oPublic;
}();
