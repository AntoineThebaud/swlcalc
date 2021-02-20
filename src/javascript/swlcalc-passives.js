var swlcalc = swlcalc || {};

swlcalc.passives = function() {

    var el = {};

    var elInit = function() {
        return {
            // Base
            valAttackRatingBase:            $('#passive-attack-rating-base'),
            valHealRatingBase:              $('#passive-heal-rating-base'),
            valHitPointsBase:               $('#passive-heal-rating-base'),
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

    var oPublic = {
        init: init,
    };

    return oPublic;
}();
