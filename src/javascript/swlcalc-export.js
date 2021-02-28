var swlcalc = swlcalc || {};

swlcalc.export = function() {

    var el = {};

    var elInit = function() {
        return {
            exportBtn: $('a.export'),
            exportText: $('#export-text'),
            openExportModal: $('#open-export-modal')
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
        el.exportBtn.on('click', function(event) {
            startExportUrl();
        });

        el.openExportModal.on('shown.bs.modal', function() {
          el.exportText.focus();
        });

        el.exportText.focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    /**
     * Starts URL export : collect stats then forwards to createExportUrl .
     */
    //TODO/REFACTOR : remove or change name ?
    var startExportUrl = function() {
        var url = createExportUrl();
        el.exportText.val(location.origin + location.pathname + '#' + url);
    };

    /**
     * Builds the URL containing all the informations entered in swlcalc
     */
    var createExportUrl = function() {
        var url = '';

        for (var id in swlcalc.gear.slots) {
            url += createSlotUrl(id);
            url += '&';
        }

        for (var index in swlcalc.gear.agents) {
            url += createAgentUrl(index);
            url += '&';
        }

        url += createAnimaAllocationUrl();
        url += '&';

        url += createPassivesUrl();

        return url;
    };

    /**
     * Builds the subpart of the export URL for the submitted slot
     */
    var createSlotUrl = function(id) {
        var state = swlcalc.gear.slots[id].mappedState();

        var slotUrl = id + '='
            + state.equipmentRarity + ','
            + state.equipmentId + ','
            + state.equipmentQuality + ','
            + state.equipmentLevel + ','
            + state.glyphRarity + ','
            + state.glyphId + ','
            + state.glyphQuality + ','
            + state.glyphLevel + ','
            + state.signetRarity + ','
            + state.signetId + ','
            + state.signetLevel;

        return slotUrl;
    };

    /**
     * Builds the subpart of the export URL for the submitted agent
     */
    var createAgentUrl = function(index) {
        // see swlcalc-import.js for the order
        var agent = swlcalc.gear.agents[index];

        var agentUrl = 'agent' + agent.index + '='
            + agent.getId() + ','
            + agent.getLevel();

        return agentUrl;
    };

    /**
     * Builds the subpart of the export URL for the anima allocation
     */
    var createAnimaAllocationUrl = function(agent, state) {
        // see swlcalc-import.js for the order

        var animaAllocationUrl = 'aa='
            + swlcalc.animaAllocation.getDamagePercentage() + ','
            + swlcalc.animaAllocation.getHealingPercentage() + ','
            + swlcalc.animaAllocation.getSurvivabilityPercentage()

        return animaAllocationUrl;
    };

    /**
     * Builds the subpart of the export URL for the passives
     */
    var createPassivesUrl = function(agent, state) {
        // see swlcalc-import.js for the order

        var animaAllocationUrl = 'passives='
            + swlcalc.passives.getAttackRatingBase() + ','
            + swlcalc.passives.getHealRatingBase() + ','
            + swlcalc.passives.getHitPointsBase() + ','
            + swlcalc.passives.getAttackRatingPassiveSkills() + ','
            + swlcalc.passives.getHealRatingPassiveSkills() + ','
            + swlcalc.passives.getHitPointsPassiveSkills() + ','
            + swlcalc.passives.getCriticalRatingPassiveSkills() + ','
            + swlcalc.passives.getCriticalPowerPassiveSkills() + ','
            + swlcalc.passives.getHitRatingPassiveSkills() + ','
            + swlcalc.passives.getProtectionPassiveSkills() + ','
            + swlcalc.passives.getDefenseRatingPassiveSkills() + ','
            + swlcalc.passives.getEvadeRatingPassiveSkills() + ','
            + swlcalc.passives.getAttackRatingCapstones() + ','
            + swlcalc.passives.getHealRatingCapstones() + ','
            + swlcalc.passives.getHitPointsCapstones() + ','
            + swlcalc.passives.getCriticalChanceExpertise() + ','
            + swlcalc.passives.getCriticalPowerPercentageExpertise();

        return animaAllocationUrl;
    };

    var oPublic = {
        init: init,
        startExportUrl: startExportUrl,
    };

    return oPublic;
}();
