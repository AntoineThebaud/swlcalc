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
    };

    /**
     * Update the value displayed for the Heal Rating > Base part
     */
    var handleHealRatingBaseChange = function(event) {
        el.valHealRatingBase.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Hit Points > Base part
     */
    var handleHitPointsBaseChange = function(event) {
        el.valHitPointsBase.text(event.currentTarget.value);
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Attack Rating > Passive Skills part
     */
    var handleAttackRatingPassiveSkillsChange = function(event) {
        el.valAttackRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Heal Rating > Passive Skills part
     */
    var handleHealRatingPassiveSkillsChange = function(event) {
        el.valHealRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Hit Points > Passive Skills part
     */
    var handleHitPointsPassiveSkillsChange = function(event) {
        el.valHitPointsPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Critical Rating > Passive Skills part
     */
    var handleCriticalRatingPassiveSkillsChange = function(event) {
        el.valCriticalRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Critical Power > Passive Skills part
     */
    var handleCriticalPowerPassiveSkillsChange = function(event) {
        el.valCriticalPowerPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Hit Rating > Passive Skills part
     */
    var handleHitRatingPassiveSkillsChange = function(event) {
        el.valHitRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Protection > Passive Skills part
     */
    var handleProtectionPassiveSkillsChange = function(event) {
        el.valProtectionPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Defense Rating > Passive Skills part
     */
    var handleDefenseRatingPassiveSkillsChange = function(event) {
        el.valDefenseRatingPassiveSkills.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Evade Rating > Passive Skills part
     */
    var handleEvadeRatingPassiveSkillsChange = function(event) {
        el.valEvadeRatingPassiveSkills.text(event.currentTarget.value);
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Attack Rating > Capstones part
     */
    var handleAttackRatingCapstonesChange = function(event) {
        el.valAttackRatingCapstones.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Heal Rating > Capstones part
     */
    var handleHealRatingCapstonesChange = function(event) {
        el.valHealRatingCapstones.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Hit Poiints > Capstones part
     */
    var handleHitPointsCapstonesChange = function(event) {
        el.valHitPointsCapstones.text(event.currentTarget.value);
    };

    /*************************************************************************************/

    /**
     * Update the value displayed for the Critical Chance > Expertise part
     */
    var handleCriticalChanceExpertiseChange = function(event) {
        el.valCriticalChanceExpertise.text(event.currentTarget.value);
    };

    /**
     * Update the value displayed for the Critical Power percentage > Expertise part
     */
    var handleCriticalPowerPercentageExpertiseChange = function(event) {
        el.valCriticalPowerPercentageExpertise.text(event.currentTarget.value);
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
        return parseInt(el.valCriticalChanceBase.text())
             + parseInt(el.valCriticalChanceExpertise.text());
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
        return parseInt(el.valCriticalPowerPercentageBase.text())
             + parseInt(el.valCriticalPowerPercentageExpertise.text());
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
        return parseInt(el.valGlanceReductionBase.text());
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
        return parseInt(el.valDamageMitigationBase.text());
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
        return parseInt(el.valGlanceChanceBase.text());
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
        return parseInt(el.valEvadeChanceBase.text());
    };

    /*************************************************************************************/

    /**
     * Reset passives configuration (= set everything to max)
     * (set val then call change() artificially to trigger the event handlers)
     */
    var reset = function() {
        el.rangeAttackRatingBase.val(el.rangeAttackRatingBase.attr("max")).change();
        el.rangeHealRatingBase.val(el.rangeHealRatingBase.attr("max")).change();
        el.rangeHitPointsBase.val(el.rangeHitPointsBase.attr("max")).change();

        el.rangeAttackRatingPassiveSkills.val(el.rangeAttackRatingPassiveSkills.attr("max")).change();
        el.rangeHealRatingPassiveSkills.val(el.rangeHealRatingPassiveSkills.attr("max")).change();
        el.rangeHitPointsPassiveSkills.val(el.rangeHitPointsPassiveSkills.attr("max")).change();
        el.rangeCriticalRatingPassiveSkills.val(el.rangeCriticalRatingPassiveSkills.attr("max")).change();
        el.rangeCriticalPowerPassiveSkills.val(el.rangeCriticalPowerPassiveSkills.attr("max")).change();
        el.rangeHitRatingPassiveSkills.val(el.rangeHitRatingPassiveSkills.attr("max")).change();
        el.rangeProtectionPassiveSkills.val(el.rangeProtectionPassiveSkills.attr("max")).change();
        el.rangeDefenseRatingPassiveSkills.val(el.rangeDefenseRatingPassiveSkills.attr("max")).change();
        el.rangeEvadeRatingPassiveSkills.val(el.rangeEvadeRatingPassiveSkills.attr("max")).change();

        el.rangeAttackRatingCapstones.val(el.rangeAttackRatingCapstones.attr("max")).change();
        el.rangeHealRatingCapstones.val(el.rangeHealRatingCapstones.attr("max")).change();
        el.rangeHitPointsCapstones.val(el.rangeHitPointsCapstones.attr("max")).change();

        el.rangeCriticalChanceExpertise.val(el.rangeCriticalChanceExpertise.attr("max")).change();
        el.rangeCriticalPowerPercentageExpertise.val(el.rangeCriticalPowerPercentageExpertise.attr("max")).change();
    };

    var oPublic = {
        init: init,
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
        reset: reset
    };

    return oPublic;
}();
