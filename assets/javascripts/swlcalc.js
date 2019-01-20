// buttonbar.dust
(function(){dust.register("buttonbar",body_0);function body_0(chk,ctx){return chk.write("<div class=\"span8\"><!-- [ Reset ]--><div class=\"btn-group\"><button id=\"btn-reset\" class=\"btn btn-danger\">Reset</button></div><!-- [ All Standard ][ All Superior ][ All Epic ][ All Mythic ][ All Legendary ] --><div class=\"btn-group\"><a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Set rarity <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a id=\"btn-all-standard\"><span class=\"fix-link\">All <span class=\"color-standard\">Standard</span></span></a></li><li><a id=\"btn-all-superior\"><span class=\"fix-link\">All <span class=\"color-superior\">Superior</span></span></a></li><li><a id=\"btn-all-epic\"><span class=\"fix-link\">All <span class=\"color-epic\">Epic</span></span></a></li><li><a id=\"btn-all-mythic\" ><span class=\"fix-link\">All <span class=\"color-mythic\">Mythic</span></span></a></li><li><a id=\"btn-all-legendary\"><span class=\"fix-link\">All <span class=\"color-legendary\">Legendary</span></span></a></li></ul></div><!-- [ All 1 pip ][ All 2 pips ][ All 3 pips ] --><div class=\"btn-group\"><a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Set quality <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a id=\"btn-all-1-pip\"><span class=\"fix-link\">All 1 pip</span></a></li><li><a id=\"btn-all-2-pip\"><span class=\"fix-link\">All 2 pips</span></a></li><li><a id=\"btn-all-3-pip\"><span class=\"fix-link\">All 3 pips</span></a></li></ul></div><!-- [ 100% DPS ][ 100% Healer ][ 100% Tank ] --><div class=\"btn-group\"><p class=\"anima-allocation-label\">Anima allocation :</p><select id=\"select-anima-allocation\" class=\"anima-allocation-select color-dps\"><option value=\"dps\" class=\"color-dps\" selected=\"true\">100% Damage</option><option value=\"heal\" class=\"color-heal\">100% Healing</option><option value=\"tank\" class=\"color-tank\">100% Survivability</option></select></div></div><div class=\"span4\"><!-- [ Export ] --><div class=\"btn-group\"><a class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Export <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a class=\"export\" href=\"#open-export-modal\" data=\"url\" data-toggle=\"modal\">URL</a></li></ul></div><!-- Pop-up window on [ Export ] --><div id=\"open-export-modal\" class=\"modal hide fade\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h5>Export</h5></div><div class=\"modal-body\">Copy this and share:<br/><textarea id=\"export-textarea\" class=\"field span12\" wrap=\"off\" rows=\"10\"></textarea></div></div></div>");}return body_0;})();;// container.dust
(function(){dust.register("container",body_0);function body_0(chk,ctx){return chk.write("<div class=\"masthead\"><div class=\"btn-group pull-right\"><a class=\"btn btn-info\" href=\"https://github.com/AntoineThebaud/swlcalc\" target=\"_blank\" style=\"color: white;\">Github</a><a class=\"btn\" href=\"https://forums.funcom.com/t/swlcalc-gear-planner-for-swl/1908\" target=\"_blank\">forum post</a><a href=\"http://dgamers.guildi.com/\" target=\"_blank\"><img class=\"logo-dg\" src=\"assets/images/logos/DG.png\"/></a></div><div class=\"div-logo\"><img class=\"logo-swlcalc\" src=\"assets/images/logos/swlcalc.png\" /><span class=\"logo-slogan lightgrey\">A gear planner for </span><img class=\"logo-swl\" src=\"assets/images/logos/swl.png\"/></div></div><hr><div class=\"row-fluid\"><div class=\"span12\">").partial("buttonbar",ctx,null).write("</div></div><hr/><div class=\"row-fluid\"><div class=\"span8\">").partial("slots",ctx,null).write("</div><div class=\"span3\">").partial("summary",ctx,null).write("</div></div><hr><div class=\"footer\"><p>swlcalc &copy; 2017-2019 Antoine THEBAUD. Version <a href=\"https://github.com/AntoineThebaud/swlcalc/tree/1.4.0\" target=\"_new\">1.4.0</a>. Hosted on Github Pages.</p></div>");}return body_0;})();;// levelselect.dust
(function(){dust.register("levelselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-").reference(ctx.get("id_suffix"),ctx,"h").write("-level\" title=\"Please select level\"><option value=\"20\">20</option><option value=\"19\">19</option><option value=\"18\">18</option><option value=\"17\">17</option><option value=\"16\">16</option><option value=\"15\">15</option><option value=\"14\">14</option><option value=\"13\">13</option><option value=\"12\">12</option><option value=\"11\">11</option><option value=\"10\">10</option><option value=\"9\">9</option><option value=\"8\">8</option><option value=\"7\">7</option><option value=\"6\">6</option><option value=\"5\">5</option><option value=\"4\">4</option><option value=\"3\">3</option><option value=\"2\">2</option><option value=\"1\">1</option></select>");}return body_0;})();;// qualityselect.dust
(function(){dust.register("qualityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-").reference(ctx.get("id_suffix"),ctx,"h").write("-quality\" title=\"Please select quality\"><option value=\"1\">").reference(ctx.get("pip1_name"),ctx,"h").write("</option><option value=\"2\">").reference(ctx.get("pip2_name"),ctx,"h").write("</option><option value=\"3\">").reference(ctx.get("pip3_name"),ctx,"h").write("</option></select>");}return body_0;})();;// rarityselect.dust
(function(){dust.register("rarityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-").reference(ctx.get("id_suffix"),ctx,"h").write("-rarity\" title=\"Please select rarity\"><option value=\"standard\" class=\"color-standard\">Standard</option><option value=\"superior\" class=\"color-superior\">Superior</option><option value=\"epic\" class=\"color-epic\">Epic</option><option value=\"mythic\" class=\"color-mythic\">Mythic</option><option value=\"legendary\" class=\"color-legendary\">Legendary</option></select>");}return body_0;})();;// slots.dust
(function(){dust.register("slots",body_0);function body_0(chk,ctx){return chk.section(ctx.get("slots"),ctx,{"else":body_1,"block":body_2},null);}function body_1(chk,ctx){return chk.write("<p>No slots found (Bug)!</p>");}function body_2(chk,ctx){return chk.write("<div id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-slot\" class=\"slot\"><table class=\"table-title\"><tr><td class=\"td-title\"><span><h4 class=\"slot\">").reference(ctx.get("name"),ctx,"h").write("</h4><h4 id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-name\" class=\"slot-name\"></h4><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-name-warning\" class=\"label label-important\"><a class=\"slot-warning\" href=\"#\" data-toggle=\"tooltip\"><i class=\"icon-warning-sign icon-white\"></i></a></span></span></td>").exists(ctx.get("is_weapon"),ctx,{"block":body_3},null).write("<td class=\"slot-ilvl\">Item Power : <span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-ilvl\">0</span></td></tr></table><table class=\"table table-slots\"><tr>").exists(ctx.get("is_weapon"),ctx,{"else":body_4,"block":body_5},null).write("<td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"equipment"}).write("</td><td class=\"stat-value stat-inSlot\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-power-rating\">0</span>").exists(ctx.get("is_weapon"),ctx,{"else":body_6,"block":body_7},null).write("</td></tr><tr class=\"tr-with-icon\"><td class=\"equipment-img\"><a href=\"#\" class=\"equipment-tooltip\" data-toggle=\"tooltip\" title=\"Equipment for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-img-quality\" class=\"equipment-icon-quality\" src=\"assets/images/icons/quality/1.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-img-rarity\" class=\"equipment-icon-border\" src=\"\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-img-icon\" class=\"equipment-icon\" src=\"\" alt=\"image\"/></a></td><td class=\"equipment-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_8,"block":body_9},null).write("</td><td class=\"upgrade-label quality-label\"><strong>Quality :</strong></td><td class=\"upgrade-select quality-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_10,"block":body_11},null).write("</td><td rowspan=\"2\" class=\"item-description\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-description\"></span></td></tr><tr><td rowspan=\"2\" class=\"filler\"></td><td rowspan=\"2\" class=\"filler\"></td><td rowspan=\"2\" class=\"upgrade-label level-label\"><strong>Level :</strong></td><td rowspan=\"2\" class=\"upgrade-select level-select\">").partial("levelselect",ctx,{"id_suffix":"equipment"}).write("</td></tr><tr><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-ilvl\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyphs\" class=\"table table-slots\"><tr><td class=\"item-title\" colspan=\"2\">Glyph</td><td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"glyph"}).write("</td><td class=\"filler\"></td></tr><tr class=\"tr-with-icon\"><td class=\"glyph-img\"><a href=\"#\" class=\"glyph-tooltip\" data-toggle=\"tooltip\" title=\"Glyph for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-quality\" class=\"glyph-icon-quality\" src=\"assets/images/icons/quality/1.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-rarity\" class=\"glyph-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-icon\" class=\"glyph-icon\" src=\"assets/images/icons/glyph/none.png\" alt=\"Glyph\"/></a></td><td class=\"glyph-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-id\" title=\"Please select stat\"><option value=\"none\" selected=\"true\">None</option><option value=\"hit-rating\">Accurate</option><option value=\"critical-rating\">Fierce</option><option value=\"critical-power\">Devastating</option><option value=\"evade-rating\">Elusive</option><option value=\"defense-rating\">Stalwart</option></select></td><td class=\"upgrade-label quality-label\"><strong>Quality :</strong></td><td class=\"upgrade-select quality-select\">").partial("qualityselect",ctx,{"id_suffix":"glyph","pip1_name":"Crude","pip2_name":"Simple","pip3_name":"Intricate"}).write("</td><td class=\"stat-value stat-inSlot\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-rating\">0</span><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-label\"></span></td></tr><tr><td class=\"filler\"></td><td class=\"filler\"></td><td class=\"upgrade-label level-label\"><strong>Level :</strong></td><td class=\"upgrade-select level-select\">").partial("levelselect",ctx,{"id_suffix":"glyph"}).write("</td><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-ilvl\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signets\" class=\"table table-slots\">").exists(ctx.get("is_weapon"),ctx,{"else":body_12,"block":body_13},null).write("</table></div>");}function body_3(chk,ctx){return chk.write("<td><a id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-swap-weapon\" class=\"btn btn-success swap-weapon\"><i class=\"icon-retweet icon-white icon-align-left\"></i>    Swap weapon</a></td>");}function body_4(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Talisman</td>");}function body_5(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Weapon</td>");}function body_6(chk,ctx){return chk.write("<span> Power Rating</span>");}function body_7(chk,ctx){return chk.write("<span> Weapon Power</span>");}function body_8(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-id\" title=\"Please select talisman\"></select>");}function body_9(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-equipment-id\" title=\"Please select weapon\"></select>");}function body_10(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"equipment","pip1_name":"Faded","pip2_name":"Luminous","pip3_name":"Radiant"});}function body_11(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"equipment","pip1_name":"MK I","pip2_name":"MK II","pip3_name":"MK III"});}function body_12(chk,ctx){return chk.write("<tr><td class=\"item-title\" colspan=\"2\">Signet</td><td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"signet"}).write("</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\"></td></tr><tr class=\"tr-with-icon\"><td class=\"signet-img\"><a href=\"#\" class=\"signet-tooltip\" data-toggle=\"tooltip\" title=\"Signet for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose the rarity and type of signet.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-rarity\" class=\"signet-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-icon\" class=\"signet-icon\" src=\"assets/images/icons/signet/none.png\" alt=\"Signet\"/></a></td><td class=\"signet-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-id\" title=\"Please select signet\"></select></td><td class=\"upgrade-label quality-label\"><strong>Level :</strong></td> <!-- class is \"quality..\" instead of \"level..\" because we skip quality select for signets --><td class=\"upgrade-select quality-select\">").partial("levelselect",ctx,{"id_suffix":"signet"}).write("</td> <!-- class is \"quality..\" instead of \"level..\" because we skip quality select for signets --><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-ilvl\">0</span></td></tr>");}function body_13(chk,ctx){return chk.write("<tr><td class=\"item-title\" colspan=\"2\">Suffix</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\" colspan=\"3\" rowspan=\"2\"></td><tr><td class=\"signet-select\" colspan=\"2\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-id\" title=\"Please select signet\"></select></td></tr>");}return body_0;})();;// summary.dust
(function(){dust.register("summary",body_0);function body_0(chk,ctx){return chk.write("<div id=\"summary\"><div id=\"table-primary\"><h4>Gear stats</h4><table class=\"table table-stats\"><thead><th>Primary Stats</th><th>Value</th></thead><tbody><tr><td class=\"stat-name\">Item Power</td><td id=\"stat-ilvl\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Power Rating</td><td id=\"stat-power-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Weapon Power</td><td id=\"stat-weapon-power\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Attack Rating</td><td id=\"stat-attack-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Heal Rating</td><td id=\"stat-heal-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Hitpoints</td><td id=\"stat-hitpoints\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Combat Power</td><td id=\"stat-combat-power\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Healing Power</td><td id=\"stat-healing-power\" class=\"stat-value stat-inSummary\">0</td></tr></tbody></table></div><div id=\"table-offensive\"><table class=\"table table-stats\"><thead><th>Offensive Stats</th><th>Value</th></thead><tbody><tr><td class=\"stat-name\">Critical Rating</td><td id=\"stat-critical-rating\" class=\"stat-value stat-inSummary\">0 %</td></tr><tr><td class=\"stat-name\">Critical Chance %</td><td id=\"stat-critical-chance\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Critical Power Rating</td><td id=\"stat-critical-power\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Critical Power %</td><td id=\"stat-critical-power-percentage\" class=\"stat-value stat-inSummary\">0 %</td></tr><tr><td class=\"stat-name\">Hit Rating</td><td id=\"stat-hit-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Glance Reduction %</td><td id=\"stat-glance-reduction\" class=\"stat-value stat-inSummary\">0%</td></tr></tbody></table></div><div id=\"table-defensive\"><table class=\"table table-stats\"><thead><th>Defensive Stats</th><th>Value</th></thead><tbody><tr><td class=\"stat-name\">Defense Rating</td><td id=\"stat-defense-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Glance Chance %</td><td id=\"stat-glance-chance\" class=\"stat-value stat-inSummary\">0%</td></tr><tr><td class=\"stat-name\">Evade Rating</td><td id=\"stat-evade-rating\" class=\"stat-value stat-inSummary\">0</td></tr><tr><td class=\"stat-name\">Evade Chance %</td><td id=\"stat-evade-chance\" class=\"stat-value stat-inSummary\">0%</td></tr><!--below stats are not functionnal yet--><tr><td class=\"stat-name not-functionnal\">Physical Protection</td><td id=\"stat-physical-protection\" class=\"not-functionnal stat-value stat-inSummary\">249</td></tr><tr><td class=\"stat-name not-functionnal\">Magical Protection</td><td id=\"stat-magical-protection\" class=\"not-functionnal stat-value stat-inSummary\">249</td></tr></tbody></table></div></div>");}return body_0;})();;$(document).ready(function() {
    swlcalc.init();
});

var swlcalc = swlcalc || {};

swlcalc = function() {

    /**
     * Init function. Triggered when document is ready.
     */
    var init = function() {
        renderContainer(swlcalc.data.template_data);
        startSubModules();
        if (!checkIfExported()) {
            // if no parameters are present in the URL, trigger artificial reset to generate base parameters ("#weapon=0,0,0,0,0,4,0&weapon2=0,0,[...]")
            triggerReset();
        }
        // visual settings :
        activateToolTips();
        $('#summary').scrollToFixed();
    };

    /**
     * Trigger "Reset" button.
     */
    var triggerReset = function() {
        $('#btn-reset').trigger('click');
    };

    /**
     * Add tooltips for images (signets, glyphs, currencies..)
     */
    var activateToolTips = function() {
        $('.equipment-tooltip, .glyph-tooltip, .signet-tooltip').tooltip({
            placement: 'left'
        });
        $('#table-primary > label').tooltip({
            placement: 'left'
        });
    };

    /**
     * Generate html code in the container, based on .dust template files
     */
    var renderContainer = function(data) {
        dust.render('container', {
            slots: swlcalc.data.template_data.slots,
            signets: swlcalc.data.signets
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('.container').html(out);
        });
    };

    /**
     * Check if parameters are present in the URL.
     */
    var checkIfExported = function() {
        var vars = $.getUrlVars();
        // TODO/REFACTOR : currently we don't check if parameters for each slot are correct !
        if (!$.isEmptyObject(vars) && Object.keys(vars).length == 9) {
            swlcalc.import.start(vars);
            return true;
        }
        return false;
    };

    /**
     * Initialize all sub modules (slots, buttonbar, summary...)
     */
    var startSubModules = function() {
        swlcalc.gear.init();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startSelectHandler(swlcalc.data.template_data.slots[i]);
        }
        swlcalc.button.init();
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
    };

    /**
     * Create select handler for a slot.
     */
    var startSelectHandler = function(slot) {
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].init();
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    // useless here but kept for future updates
    var init = function() {
    };

    var animaAllocation = 'dps';

    /**
     * Refreshes all values in the summary
     * -> triggered after any change that affects a stat
     */
    //TODO/REFACTOR : to avoid useless refreshes ?
    var updateAllStats = function() {
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
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
            primary: collectPrimaryStats(),
            offensive_defensive: collectOffensiveDefensiveStats()
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
            if (sums.hasOwnProperty(stat)) { // TODO/REFACTOR this if could be removed ?
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    /**
     * Collects primary stats by going through the whole gear
     */
    var collectPrimaryStats = function() {
        // initial values
        var sums = {
            'combat-power': 0,
            'healing-power': 0,
            'weapon-power': 0,
            'hitpoints': 7512,     // = 3300 (base HP at lvl 50) + 2997 (amount brought by passives skills) + 1215 (capstone points)
            'attack-rating': 4322, // = 2000 (base stat at lvl 50) + 1512 (amount brought by passives skills) + 810 (capstone points)
            'heal-rating': 4310,   // = 2000 (base stat at lvl 50) + 1500 (amount brought by passives skills) + 810 (capstone points)
            'power-rating': 0,
            'ilvl': 0
        };

        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            sums['ilvl'] += slot.iLvl();
            if (slot.isWeapon() && !slot.weaponDrawn) {
                continue;
            } else if (slot.isWeapon() && slot.equipmentId() != 'none') {
                sums['weapon-power'] = slot.equipmentPowerRating();
            } else if (!slot.isWeapon() && slot.equipmentId() != 'none') {
                sums['power-rating'] += slot.equipmentPowerRating();
            }
        }
        // first basic implementation of anima allocation
        // TODO/FEATURE : add conversion to AR/HR/HP based on a ratio
        if (animaAllocation == 'dps') {
            sums['attack-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'heal') {
            sums['heal-rating'] += sums['power-rating'];
        } else if (animaAllocation == 'tank') {
            // TODO/REFACTOR : to move to a -data file?
            // TODO/REFACTOR : this is a "pretty precise but still approximated" value of the real IG multiplier
            var hitPointsMultiplier = 1.427675;
            sums['hitpoints'] += Math.round(sums['power-rating'] * hitPointsMultiplier);
        }

        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        sums['healing-power'] = calculateHealingPower(sums['heal-rating'], sums['weapon-power']);
        sums['ilvl'] = calculateAverageILvl(sums['ilvl']); //TODO/REFACTOR : refactor (it's weird)

        return sums;
    };

    /**
     * Calculates the Combat Power for the given Attack Rating and Weapon Power values
     * SWL formula for Combat Power is like :
     * -> +1 Combat Power every 13.33 Attack Rating
     * -> +1 Combat Power every 13.33 Weapon Power
     */
    var calculateCombatPower = function(attack_rating, weapon_power) {
        var ratio = 13 + 1/3;

        return Math.round((attack_rating + weapon_power) / ratio);
    };

    /**
     * Calculates the Healing Power for the given Heal Rating and Weapon Power values
     * SWL formula for Combat Power is like :
     * -> +1 Healing Power every 13.33 Heal Rating
     * -> +1 Healing Power every 13.33 Weapon Power
     */
    var calculateHealingPower = function(heal_rating, weapon_power) {
        var ratio = 13 + 1/3;

        return Math.round((heal_rating + weapon_power) / ratio);
    };

    /**
     * Updates glyph stats in the summary
     */
    var updateOffensiveDefensiveStats = function() {
        var sums = collectOffensiveDefensiveStats();
        updateStats(sums);
    };

    /**
     * Collects glyph stats by going through the whole gear
     */
    var collectOffensiveDefensiveStats = function() {
        var sums = {
            'critical-rating': 756,           // amount brought by passives skills
            'critical-chance': 1,             // base percentage
            'critical-power': 1008,           // amount brought by passives skills
            'critical-power-percentage': 25,  // base percentage
            'hit-rating': 756,                // amount brought by passives skills
            'glance-reduction': 0,
            'defense-rating': 753,            // amount brought by passives skills
            'glance-chance': 0,
            'evade-rating': 753,              // amount brought by passives skills
            'evade-chance': 0,
            //TODO/FEATURE : protection stats are not functionnal yet
            // 'physical-protection': 2259,   // amount brought by passives skills
            // 'magical-protection': 2259     // amount brought by passives skills
        };
        // get flat stats
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            if(slot.isWeapon() && !slot.weaponDrawn) {
                continue;
            }
            sums[slot.glyphId()] += slot.glyphRating();
        }
        // get ratio stats
        sums['critical-chance'] += calculateCriticalChance(sums['critical-rating']);
        sums['critical-power-percentage'] += calculateCriticalPowerPercentage(sums['critical-power']);
        sums['glance-reduction'] = calculateGlanceReduction(sums['hit-rating']);
        sums['glance-chance'] = calculateGlanceChance(sums['defense-rating']);
        sums['evade-chance'] = calculateEvadeChance(sums['evade-rating']);
        // round values for display purpose
        sums['critical-rating'] = sums['critical-rating'].toFixed(0);
        sums['critical-chance'] = sums['critical-chance'].toFixed(1);
        sums['critical-power'] = sums['critical-power'].toFixed(0);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(1);
        sums['evade-chance'] = sums['evade-chance'].toFixed(1);
        //TODO/FEATURE : prot stats are not functionnal yet
        // sums['magical-protection'] = parseInt(sums['magical-protection'].toFixed(0), 10);
        // sums['physical-protection'] = parseInt(sums['physical-protection'].toFixed(0), 10);
        return sums;
    };

    /**
     * Calculates the critical chance given by the whole gear
     * SWL formula for critical chances is like :
     * -> Up to 6536 rating => 1% Critical Chance every 157.49 Rating
     * -> After 6536 rating => 1% Critical Chance every 683.00 Rating
     * The calculation includes weapon expertise
     */
    var calculateCriticalChance = function(critical_rating) {
        var hardCap = 6536;
        var softCapRatio = 157.49;
        var hardCapRatio = 683.00;
        var expertise = 7.5;

        if (critical_rating < hardCap) {
            return expertise + swlcalc.util.precisionRound(critical_rating / softCapRatio, 1);
        } else {
            return expertise + swlcalc.util.precisionRound(hardCap / softCapRatio + (critical_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % critical power given by the whole gear
     * SWL formula for % critical power is like :
     * -> Up to 3258 rating => 1% Critical Power every 28.31 Rating
     * -> After 3258 rating => 1% Critical Power every 136.00 Rating
     * The calculation includes weapon expertise (= 30% at max level)
     */
    var calculateCriticalPowerPercentage = function(critical_power) {
        var hardCap = 3258;
        var softCapRatio = 28.31;
        var hardCapRatio = 136.00;
        var expertise = 30;

        if (critical_power < hardCap) {
            return expertise + swlcalc.util.precisionRound(critical_power / softCapRatio, 1);
        } else {
            return expertise + swlcalc.util.precisionRound(hardCap / softCapRatio + (critical_power - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % evade chance given by the whole gear
     * SWL formula for % evade chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 145.55 Rating
     * -> After 4221 rating => 1% Evade Chance every 977.40 Rating
     */
    var calculateEvadeChance = function(evade_rating) {
        var hardCap = 4221;
        var softCapRatio = 145.55;
        var hardCapRatio = 977.40;

        if (evade_rating < hardCap) {
            return swlcalc.util.precisionRound(evade_rating / softCapRatio, 1);
        } else {
            return swlcalc.util.precisionRound(hardCap / softCapRatio + (evade_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % glance chance given by the whole gear
     * SWL formula for % glance chance is like :
     * -> Up to 4221 rating => 1% Evade Chance every 101.71 Rating
     * -> After 4221 rating => 1% Evade Chance every 683.00 Rating
     */
    var calculateGlanceChance = function(defense_rating) {
        var hardCap = 4221;
        var softCapRatio = 101.71;
        var hardCapRatio = 683.00;

        if (defense_rating < hardCap) {
            return swlcalc.util.precisionRound(defense_rating / softCapRatio, 1);
        } else {
            return swlcalc.util.precisionRound(hardCap / softCapRatio + (defense_rating - hardCap) / hardCapRatio, 1);
        }
    };

    /**
     * Calculates the % glance reduction given by the whole gear
     * SWL formula for % glance reduction is like :
     * -> 1% Evade Chance every 50.85 Rating (no hard cap)
     */
    var calculateGlanceReduction = function(hit_rating) {
        var ratio = 50.85;

        return swlcalc.util.precisionRound(hit_rating / ratio, 1);
    };

    /**
     * Calculates the average Item Power given by the whole gear
     * 9 = number of slots to take into account (2 weapons + 7 talismans)
     */
    var calculateAverageILvl = function(sum_ilvl) {
        return Math.round(sum_ilvl / 9);
    }

    /**
     * Updates values (stats) displayed in the summary
     */
    var updateStats = function(sums) {
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
     * Setter for animaAllocation attribute
     */
    var setAnimaAllocation = function(newAllocation) {
        animaAllocation = newAllocation
        this.updateAllStats();
    }

    /**
     * Launch a description refresh for each item (in order to display the right bonus values)
     */
    var updateDescriptions = function() {
        for (var id in swlcalc.gear.slots) {
            swlcalc.gear.slots[id].refreshEquipmentBonuses(combatPower(), healingPower());
            swlcalc.gear.slots[id].refreshSignetBonus(combatPower(), healingPower()); //TODO : should be a better way to handle this, here it will be useful in like 1% of the cases..
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

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init,
        calculateCriticalChance: calculateCriticalChance,
        calculateCriticalPowerPercentage: calculateCriticalPowerPercentage,
        calculateEvadeChance: calculateEvadeChance,
        calculateCombatPower: calculateCombatPower,
        collectPrimaryStats: collectPrimaryStats,
        collectOffensiveDefensiveStats: collectOffensiveDefensiveStats,
        collectAllStats: collectAllStats,
        updateAllStats: updateAllStats,
        updateDescriptions: updateDescriptions,
        setAnimaAllocation: setAnimaAllocation
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {

    var slotObj = swlcalc.gear.slots[slot.id_prefix];

    this.init = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    /**
     * Associates the right process to each trigger.
     */
    this.bindEvents = function() {
        slotObj.el.equipmentId.change(this.handleItemChange);
        slotObj.el.equipmentRarity.change(this.handleRarityChange);
        slotObj.el.equipmentQuality.change(this.handleQualityChange);
        slotObj.el.equipmentLevel.change(this.handleLevelChange);

        slotObj.el.glyphId.change(this.handleGlyphChange);
        slotObj.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.el.glyphLevel.change(this.handleGlyphLevelChange);

        if (slot.kind == "weapon") {
            slotObj.el.signetId.change(this.handleSuffixChange);
        } else {
            slotObj.el.signetId.change(this.handleSignetChange);
            slotObj.el.signetRarity.change(this.handleSignetRarityChange);
            slotObj.el.signetLevel.change(this.handleSignetLevelChange);
        }
    };

    /**
     * Loads items (swlcalc-data-equipments) as options list in the #slot-itemId select
     */
    this.addItemsToSelect = function() {
        var items = swlcalc.data.equipments.slot[slot.kind].slice();

        slotObj.el.equipmentId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        if (slot.group == 'weapon') {
            //sort alphabetically for a better ergonomy
            items.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.type + a.name.toLowerCase(), b.type + b.name.toLowerCase())
            });
            items.forEach(function(item) {
                slotObj.el.equipmentId.append($('<option>', {
                    value: item.id,
                    text: '[' + item.type + '] ' + item.name
                }));
            });
        } else {
            items.sort(function(a, b) {
                return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
            });
            items.forEach(function(item) {
                slotObj.el.equipmentId.append($('<option>', {
                    value: item.id,
                    text:  item.name
                }));
            });
        }
    };

    /**
     * Loads signets (swlcalc-data-signets) as options list in the #slot-signet select
     */
    this.addSignetsToSelect = function() {
        slotObj.el.signetId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));
        this.updateToDefaultSignet();

        var signetsInSlotGroup = swlcalc.data.signets.slot[slot.kind].slice();
        //reorder elements to improve ergonomy
        signetsInSlotGroup.sort(function(a, b) {
            return swlcalc.util.sortAsc(a.name.toLowerCase(), b.name.toLowerCase())
        });
        $.each(signetsInSlotGroup, function(index, value) {
            slotObj.el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };


    /**
     * Updates the text color of the dropdown "select" by reusing the color of the selected option.
     */
    var updateTextColor = function(select) {
        $(select).attr("class", "color-" + select.value);
    };

    /**
     * Resets this signet field to the default value ("none" value, white border...)
     */
    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/signet/none.png';
        var signet_rarity_url = 'assets/images/icons/rarity/none-42x42.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    /**********************************************************************************
     * Event handlers : Item |
     *                       V
     **********************************************************************************/

    /**
     * Handler for #slot-itemId
     */
    this.handleItemChange = function(event) {
        //TODO/FEATURE : reenable slot name display
//      var wtype = $(this).val();
//      if(wtype != 'none') {
//          slotObj.name(': ' + swlcalc.util.capitalise(wtype));
//      } else {
//          slotObj.name('');
//      }
        slotObj.updateEquipment();
        slotObj.updateEquipmentPowerRating();
        slotObj.updateEquipmentILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-rarity
     */
    this.handleRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateEquipmentImgRarity();

        //refresh the list of available levels
        slotObj.el.equipmentLevel.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[this.value];
        for (i = maxLvl; i >= minLvl ; i--) {
           slotObj.el.equipmentLevel.append($('<option>', {
               value: i,
               text: i
           }));
        }

        slotObj.updateEquipmentPowerRating();
        slotObj.updateEquipmentILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-quality
     */
    this.handleQualityChange = function(event) {
        slotObj.updateEquipmentPowerRating();
        slotObj.updateEquipmentImgQuality();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-level
     */
    this.handleLevelChange = function(event) {
        slotObj.updateEquipmentILvl();
        slotObj.updateEquipmentPowerRating();
        swlcalc.summary.updateAllStats();
    };

    /**********************************************************************************
     * Event handlers : Glyph |
     *                        V
     **********************************************************************************/

    /**
     * Handler for #slot-glyph
     */
    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphImgIcon();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphLabel();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-rarity
     */
    this.handleGlyphRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateGlyphImgRarity();
        slotObj.updateGlyphILvl();
        slotObj.updateGlyphRating();

        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-quality
     */
    this.handleGlyphQualityChange = function(event) {
        slotObj.updateGlyphRating();
        slotObj.updateGlyphImgQuality();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-glyph-level
     */
    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    }

    /**********************************************************************************
     * Event handlers : Signet |
     *                         V
     **********************************************************************************/

     /**
      * Handler for #slot-signet for weapons
      */
     this.handleSuffixChange = function(event) {
         slotObj.updateSignet();
         swlcalc.summary.updateAllStats();
     };

    /**
     * Handler for #slot-signet for talismans
     */
    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-rarity
     */
    this.handleSignetRarityChange = function(event) {
        updateTextColor(this);
        slotObj.updateSignetIcon();
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-level
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };
};
;var swlcalc = swlcalc || {};

/**
 * Defines the not-in-buttonbar buttons of swlcalc
 */
//TODO/REFACTOR : merge swlcalc.button and swlcalc.button.SwapWeaponButton ? (since glyph
//distribution doesn't exist in SWL, the only remaining button here is the weapon-swap one)
swlcalc.button = function() {
    
    var weaponSwap = {};

    var init = function() {
        initWeaponSwap('weapon');
        initWeaponSwap('weapon2');
    };

    var initWeaponSwap = function(slotId) {
        weaponSwap[slotId] = new swlcalc.button.SwapWeaponButton(slotId);
        weaponSwap[slotId].init();
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init
    };

    return oPublic;
}();

/**
 * Defines the weapon swap button
 */
swlcalc.button.SwapWeaponButton = function SwapWeaponButton(slotId) {
    var self = this;

    this.init = function() {
        this.bindEvents();
    };

    this.bindEvents = function() {
        $('#' + slotId + '-swap-weapon').on('click', this.weaponSwap);
    };

    this.weaponSwap = function(event) {
        swlcalc.gear.slots[slotId].sheathWeapon();
        swlcalc.gear.slots[self.otherWeapon()].drawWeapon();
        swlcalc.summary.updateAllStats();
    };

    this.otherWeapon = function() {
        return slotId == 'weapon' ? 'weapon2' : 'weapon';
    };
};
;var swlcalc = swlcalc || {};

swlcalc.buttonBar = function() {

    var el = {};

    var elInit = function() {
        return {
            select_anima_allocation: $('#select-anima-allocation'),

            btn_all_standard: $('#btn-all-standard'),
            btn_all_superior: $('#btn-all-superior'),
            btn_all_epic: $('#btn-all-epic'),
            btn_all_mythic: $('#btn-all-mythic'),
            btn_all_legendary: $('#btn-all-legendary'),

            btn_all_1_pip: $('#btn-all-1-pip'),
            btn_all_2_pip: $('#btn-all-2-pip'),
            btn_all_3_pip: $('#btn-all-3-pip'),

            btn_reset: $('#btn-reset')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    /**
     * Associates the right process to each trigger.
     */
    var bindEvents = function() {
        el.select_anima_allocation.on('change', setAnimaAllocation);

        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);

        el.btn_all_1_pip.on('click', setQualityOnAllSlots);
        el.btn_all_2_pip.on('click', setQualityOnAllSlots);
        el.btn_all_3_pip.on('click', setQualityOnAllSlots);

        el.btn_reset.on('click', resetGear);
    };

    /**
     * Sets anima allocation ratio
     */
    //TODO/REFACTOR : basic implementation, everything to review
    var setAnimaAllocation = function(event) {
        $(this).attr("class", "anima-allocation-select color-" + this.value);
        swlcalc.summary.setAnimaAllocation(event.target.value);
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.equipmentRarity(newRarity);
            slot.el.equipmentRarity.change();
            slot.glyphRarity(newRarity);
            slot.el.glyphRarity.change();
            slot.signetRarity(newRarity);
            slot.el.signetRarity.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set the same chosen rarity to all equipments+glyphs+signets.
     */
    var setQualityOnAllSlots = function(event) {
        var newQuality = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            slot.equipmentQuality(newQuality);
            slot.el.equipmentQuality.change();
            slot.glyphQuality(newQuality);
            slot.el.glyphQuality.change();
        }
        swlcalc.summary.updateAllStats(); //TODO maybe useless ?
    };

    /**
     * Set all slots to 'none'
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var resetGear = function(event) {
        swlcalc.gear.reset();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        el: el,
        init: init,
        setRarityOnAllSlots: setRarityOnAllSlots,
        resetGear: resetGear
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};

swlcalc.export = function() {

    var el = {};

    var elInit = function() {
        return {
            export_btn: $('a.export'),
            export_textarea: $('#export-textarea'),
            open_export_modal: $('#open-export-modal')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    /**
     * Associates the right process to each trigger.
     */
    var bindEvents = function() {
        el.export_btn.on('click', function(event) {
            startExportUrl();
        });

        el.open_export_modal.on('shown', function() {
            el.export_textarea.focus();
        });

        el.export_textarea.focus(function() {
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
        el.export_textarea.attr('rows', '1');
        el.export_textarea.html(location.origin + location.pathname + '#' + url);
    };

    /**
     * Builds the URL containing all the informations entered in swlcalc
     */
    var createExportUrl = function() {
        var url = '';
        var i = 0;
        for (var id in swlcalc.gear.slots) {
            var slot = swlcalc.gear.slots[id];
            url += createSlotUrl(slot, slot.mappedState());
            if (i < swlcalc.gear.nbSlots() - 1) {
                url += '&';
            }
            i++;
        }
        return url;
    };

    /**
     * Builds the subpart of the export URL for the submitted slot
     */
    var createSlotUrl = function(slot, state) {
        // see swlcalc-import.js for the order
        var slotUrl = slot.id + '='
            + state.equipment_rarity + ','
            + state.equipment_id + ','
            + state.equipment_quality + ','
            + state.equipment_level + ','
            + state.glyph_rarity + ','
            + state.glyph_id + ','
            + state.glyph_quality + ','
            + state.glyph_level;

            //TODO/REFACTOR : this commented if{} allows the url to be smaller when no signet is set
            // it is temporary disabled for visual issue (select color not updating)
            // in the future, should be reenabled + same behavior for glyphs and even complete slot ?
            // that could allow to see the stats for only one item (but is it usefull ?)
            /* if(state.signet_id !== 0 && state.signet_id !== '999') { */
            slotUrl += ',' + state.signet_rarity
                    + ',' + state.signet_id
                    + ',' + state.signet_level;
            /* }*/

        return slotUrl;
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init,
        createSlotUrl: createSlotUrl,
        createExportUrl: createExportUrl,
        startExportUrl: startExportUrl,
    };

    return oPublic;
}();
;/*========================================================================================
 *                                        SWLCALC HASH STRUCTURE :
 *=====================================================|====================================
 *                      Element                        |               Values
 *-----------------------------------------------------|------------------------------------
 *                  ____________ Equipment's Rarity     [1,2,3,4,5]
 *                 / ___________ Equipment's Type (ID)  [refer to swlcalc-data-equipments.js]
 *                / / __________ Equipment's Quality    [1,2,3]
 *               / / / _________ Equipment's Level      [1->20/25/30/35/70]
 *              / / / / ________ Glyph's Rarity         [1,2,3,4,5]
 *             / / / / / _______ Glyph's Stat           [0,1,2,3,4,5]
 *            / / / / / / ______ Glyph's Quality        [1,2,3]
 *           / / / / / / / _____ Glyph's Level          [1->20]
 *          / / / / / / / /  ___ Signet's Rarity        [1,2,3,4,5]
 *         / / / / / / / /  / __ Signet's Type (ID)     [refer to swlcalc-data-signets.js]
 *        / / / / / / / /  / / _ Signet's Level         [1->20]
 *       v v v v v v v v  v v v
 * wrist=4,1,4,3,4,4,0,3,5,85,3
 *===================================================|====================================*/

var swlcalc = swlcalc || {};

swlcalc.import = function() {

    /**
     * Imports a (compatible) URL into swlcalc
     */
    var start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                loadSlot(slotId, splitVars);
            }
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Loads the slot informations from the hash and update GUI with it.
     */
    //TODO/REFACTOR maybe there is a better way to update GUI than simulating change() ?
    var loadSlot = function(slotId, values) {
        var slotObj = swlcalc.gear.slots[slotId];
        // values[0] == Item's Rarity
        slotObj.equipmentRarity(swlcalc.data.rarity_mapping.to_name[values[0]]);
        slotObj.el.equipmentRarity.change();
        // values[1] == Item's Type (ID)
        slotObj.equipmentId(values[1] == '0' ? 'none' : values[1]);
        slotObj.el.equipmentId.change();
        // values[2] == Item's Quality
        if(slotObj.isWeapon()) {
            slotObj.equipmentQuality(values[2]);
        } else {
            slotObj.equipmentQuality(values[2]);
        }
        slotObj.el.equipmentQuality.change();
        // values[3] == Item's Level
        slotObj.equipmentLevel(values[3]);
        slotObj.el.equipmentLevel.change();
        // values[4] == Glyph's Rarity
        slotObj.glyphRarity(swlcalc.data.rarity_mapping.to_name[values[4]]);
        slotObj.el.glyphRarity.change();
        // values[5] == Glyph's Stat
        slotObj.glyphId(swlcalc.data.glyph_stat_mapping.to_stat[values[5]]);
        slotObj.el.glyphId.change();
        // values[6] == Glyph's Quality
        slotObj.glyphQuality(values[6]);
        slotObj.el.glyphQuality.change();
        // values[7] == Glyph's Level
        slotObj.glyphLevel(values[7]);
        slotObj.el.glyphLevel.change();
        // support signets (values [8], [9] & [10])
        if (typeof values[8] !== 'undefined'
        && typeof values[9] !== 'undefined' && values[9] !== "999"
        && typeof values[10] !== 'undefined') {
            // values[8] == Signet's Rarity
            slotObj.signetRarity(swlcalc.data.rarity_mapping.to_name[values[8]]);
            // values[9] == Signet's Type (ID)
            slotObj.signetId((values[9] != '0' ? values[9] : 'none'));
            // values[10] == Signet's Level
            slotObj.signetLevel(values[10]);
            slotObj.el.signetId.change();
            slotObj.el.signetRarity.change();
        }
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        start: start
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};

/**
 * Utility functions
 */
swlcalc.util = function() {

    var capitalise = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var blankIfNone = function(arg) {
        if (arg == 'None' || arg == 'none') {
            return '';
        }
        return arg;
    };

    var precisionRound = function(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    var sortAsc = function(a, b) {
        if (a > b) return 1;
        else return -1;
    }

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        capitalise: capitalise,
        blankIfNone: blankIfNone,
        precisionRound: precisionRound,
        sortAsc: sortAsc
    }
    return oPublic;
}();

//Array.find polyfill
if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) {
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
;var swlcalc = swlcalc || {};

swlcalc.gear = function() {

    /*
     * Map object to store the Slot objects (see below)
     */
    var slots = {};

    /**
     * This method can only be called after the document is ready
     */
    var init = function() {
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotData = swlcalc.data.template_data.slots[i];
            this.slots[slotData.id_prefix] = new swlcalc.gear.Slot(slotData);
            this.slots[slotData.id_prefix].el.nameWarning.hide();
        }
        drawPrimaryWeapon();
    };

    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        swlcalc.gear.slots.weapon2.sheathWeapon();
        swlcalc.gear.slots.weapon.weaponDrawn = true;
    };

    /**
     * Returns the total number of slots in the gear (= 9 as of now)
     */
    var nbSlots = function() {
        return Object.keys(this.slots).length;
    };

    /**
     * Resets all slots
     */
    //TODO/FEATURE : reset should logically set level to 1
    var reset = function() {
        for (var id in this.slots) {
            this.slots[id].reset();
        }
    };

    /**
     * Returns the list of slots states
     */
    var state = function() {
        var slotStates = {};
        for (var id in this.slots) {
            slotStates[id] = this.slots[id].state();
        }
        return slotStates;
    };

    /**
     * Returns the list of slots states (mapped version)
     */
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var id in this.slots) {
            mappedSlotStates[id] = this.slots[id].mappedState();
        }
        return mappedSlotStates;
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        slots: slots,
        init: init,
        nbSlots: nbSlots,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();

swlcalc.gear.Slot = function Slot(slotData) {

    var self = this;
    this.id = slotData.id_prefix;
    this.name = slotData.name;
    this.kind = slotData.kind;
    this.type = slotData.type;
    this.group = slotData.group;
    this.weaponDrawn = false;

    // for calculations precision issues
    this.rawILvl = 0.0;
    this.rawGlyphILvl = 0.0;
    this.rawSignetILvl = 0.0;

    this.el = {
        div:                  $('#' + this.id + '-slot'),
        iLvl:                 $('#' + this.id + '-ilvl'),
        equipmentId:          $('#' + this.id + '-equipment-id'),
        equipmentName:        $('#' + this.id + '-equipment-name'),
        equipmentRarity:      $('#' + this.id + '-equipment-rarity'),
        equipmentQuality:     $('#' + this.id + '-equipment-quality'),
        equipmentLevel:       $('#' + this.id + '-equipment-level'),
        equipmentPowerRating: $('#' + this.id + '-equipment-power-rating'),
        equipmentILvl:        $('#' + this.id + '-equipment-ilvl'),
        equipmentImgIcon:     $('#' + this.id + '-equipment-img-icon'),
        equipmentImgRarity:   $('#' + this.id + '-equipment-img-rarity'),
        equipmentImgQuality:  $('#' + this.id + '-equipment-img-quality'),
        equipmentDescription: $('#' + this.id + '-equipment-description'),
        glyphId:              $('#' + this.id + '-glyph-id'),
        glyphRarity:          $('#' + this.id + '-glyph-rarity'),
        glyphQuality:         $('#' + this.id + '-glyph-quality'),
        glyphLevel:           $('#' + this.id + '-glyph-level'),
        glyphRating:          $('#' + this.id + '-glyph-rating'),
        glyphLabel:           $('#' + this.id + '-glyph-label'),
        glyphImgIcon:         $('#' + this.id + '-glyph-img-icon'),
        glyphImgRarity:       $('#' + this.id + '-glyph-img-rarity'),
        glyphImgQuality:      $('#' + this.id + '-glyph-img-quality'),
        glyphILvl:            $('#' + this.id + '-glyph-ilvl'),
        signetId:             $('#' + this.id + '-signet-id'),
        signetRarity:         $('#' + this.id + '-signet-rarity'),
        signetLevel:          $('#' + this.id + '-signet-level'),
        signetImgIcon:        $('#' + this.id + '-signet-img-icon'),
        signetImgRarity:      $('#' + this.id + '-signet-img-rarity'),
        signetDescription:    $('#' + this.id + '-signet-description'),
        signetILvl:           $('#' + this.id + '-signet-ilvl'),
        nameWarning:          $('#' + this.id + '-name-warning'),
    };

    /**
     * Getter/Setter for #slot-ilvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.html(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.html());
        }
    };

    /**
     * Updates #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     */
    this.refreshILvl = function() {
        this.iLvl(Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl));
    };

    /**
     * Getter/Setter for #slot-equipment-name
     */
    this.equipmentName = function() {
        if (arguments.length == 1) {
            this.el.equipmentName.html(arguments[0]);
        } else {
            return this.el.equipmentName.html();
        }
    };

    /**********************************************************************************
     * Equipment functions | (talismans + weapons)
     *                     V
     **********************************************************************************/

    /**
     * Returns true if the slot belongs to the weapon group
     */
    this.isWeapon = function() {
        return this.group == 'weapon';
    };

    /**
     * Hides the current slot (for weapons only)
     */
    this.sheathWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = false;
            this.el.div.hide();
        }
    };

    /**
     * Displays the current slot (for weapons only)
     */
    this.drawWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = true;
            this.el.div.show();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-id
     */
    this.equipmentId = function() {
        if (arguments.length == 1) {
            this.el.equipmentId.val(arguments[0]);
        } else {
            return this.el.equipmentId.val();
        }
    };

    /**
     * Getter to retrieve full item object from the data model
     */
    this.getItem = function() {
        var slotToUse = this.id
        //TODO/REFACTOR : maybe there is a better way to get weapon items for secondary weapon
        if (this.isWeapon()) {
            slotToUse = 'weapon';
        }
        return swlcalc.data.equipments.slot[slotToUse][this.equipmentId() - 1];
    };

    /**
     * Getter/Setter for #slot-equipment-rarity
     */
    this.equipmentRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentRarity.val(arguments[0]);
        } else {
            return this.el.equipmentRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-quality
     */
    this.equipmentQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentQuality.val(arguments[0]);
        } else {
            return this.el.equipmentQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-level
     */
    this.equipmentLevel = function() {
        if (arguments.length == 1) {
            this.el.equipmentLevel.val(arguments[0]);
        } else {
            return this.el.equipmentLevel.val();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-power-rating
     */
    this.equipmentPowerRating = function() {
        if (arguments.length == 1) {
            this.el.equipmentPowerRating.html(arguments[0]);
        } else {
            return parseInt(this.el.equipmentPowerRating.html());
        }
    };

    /**
     * Getter/Setter for #slot-equipment-iLvl
     */
    this.equipmentILvl = function() {
        if (arguments.length == 1) {
            this.el.equipmentILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.equipmentILvl.html());
        }
    };

    /**
     * Getter/Setter for #slot-equipment-description
     */
    this.equipmentDescription = function() {
        if (arguments.length == 1) {
            this.el.equipmentDescription.html(arguments[0]);
        } else {
            return this.el.equipmentDescription.text();
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-icon
     */
    this.equipmentImgIcon = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgIcon.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgIcon.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-rarity
     */
    this.equipmentImgRarity = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgRarity.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-equipment-img-quality
     */
    this.equipmentImgQuality = function() {
        if (arguments.length == 1) {
            this.el.equipmentImgQuality.attr('src', arguments[0])
        } else {
            return this.el.equipmentImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for any #slot-equipment-bonusN element (#slot-equipment-bonus1, #slot-equipment-bonus2, #slot-equipment-bonus3 ...)
     */
    this.equipmentBonusN = function() {
        if (arguments.length == 2) {
            $('#' + this.id + '-equipment-bonus' + arguments[0]).html(arguments[1]);
        } else if (arguments.length == 1) {
            return $('#' + this.id + '-equipment-bonus' + arguments[0]).html();
        } else {
            console.log("Error on this.equipmentBonusN() call")
        }
    };

    /**
     * Updates #slot-equipment-image + #slot-equipment-description
     */
    this.updateEquipment = function() {
        var newImage;
        var newDescription;
        if (this.equipmentId() == 'none') {
            //To enable when all images will be present :
            // newImage = 'assets/images/icons/talisman/None.png';
            this.equipmentImgIcon('assets/images/icons/' + this.type + '/None.png');
            newDescription = '';
        } else {
            var newSelectedItem = swlcalc.data.equipments.slot[this.kind][this.equipmentId() - 1];
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/' + this.type + '/' + newSelectedItem.name + '.png';
             * => For now replaced by : */
            var image = new Image();
            image.onload = function() {
                self.equipmentImgIcon('assets/images/icons/' + self.type + '/' + newSelectedItem.name + '.png');
            }
            image.onerror = function() {
                if (self.isWeapon()) {
                    self.equipmentImgIcon('assets/images/icons/' + self.type + '/temp/' + newSelectedItem.type + '.png');
                } else {
                    self.equipmentImgIcon('assets/images/icons/' + self.type + '/' + swlcalc.data.equipments.slot[self.id][0].name + '.png');
                }
            }
            image.src = 'assets/images/icons/' + this.type + '/' + newSelectedItem.name + '.png';
            /* temporary code ********************************************************************************/
            newDescription = newSelectedItem.description;

            if (this.isWeapon()) {
                // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
                // TODO/REFACTOR : maybe there's a better way to achieve this..
                newDescription = newDescription.replace(/%id/g, this.id);
            }
        }
        //To enable when all images will be present :
        //this.equipmentImgIcon(newImage);
        this.equipmentDescription(newDescription);
    };

    /**
     * Updates #slot-equipment-power-rating (calculatations with stats data)
     */
    this.updateEquipmentPowerRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        if (this.equipmentId() != 'none') {
            // calculation rule for weapons
            if (this.isWeapon()) {
                base_value = swlcalc.data.power_rating.weapon[this.equipmentRarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating.weapon[this.equipmentRarity()].weapon_power_per_level * (this.equipmentLevel() - 1);
            }
            // calculation rule for talismans
            else {
                base_value = swlcalc.data.power_rating[this.group][this.equipmentRarity()][this.equipmentQuality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.group][this.equipmentRarity()][this.equipmentQuality()].power_rating_per_level * (this.equipmentLevel() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        // add '+' for display
        if (newValue !== 0) {
            newValue = '+' + newValue;
        }
        this.equipmentPowerRating(newValue);
    };

    /**
     * Updates #slot-equipment-img-rarity
     */
    this.updateEquipmentImgRarity = function() {
        var img_path = 'assets/images/icons/rarity/' + this.equipmentRarity() + '-42x42.png';
        this.equipmentImgRarity(img_path);
    };

    /**
     * Updates #slot-equipment-img-quality
     */
    this.updateEquipmentImgQuality = function() {
        var img_path = 'assets/images/icons/quality/' + this.equipmentQuality() + '.png';
        this.equipmentImgQuality(img_path);
    };

    /**
     * Updates #slot-equipment-ilvl
     * -> Calculates item power for the slot's talisman (or weapon) and updates GUI with it
     */
    this.updateEquipmentILvl = function() {
        var newILvl = 0;
        if (!(this.equipmentId() == 'none')) {
            newILvl = this.computeItemILvl('talisman-or-weapon', this.equipmentRarity(), this.equipmentLevel());
            // Weapons are worth ~15% more Item Power than talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                newILvl = newILvl * 1.15;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawILvl = newILvl;

        this.equipmentILvl(Math.round(newILvl));
        this.refreshILvl();
    };

    /**
     * Updates every #slot-equipment-bonusN element
     */
        this.refreshEquipmentBonuses = function(combatPower, healingPower) {
        if (this.equipmentBonusN(1) === undefined) return;
        var item = this.getItem();
        var statForComputation = 0;

        for (i = 0; i < item.coefficients.length; i++) {
            if (item.stats[i] == 'Combat Power') {
                statForComputation = combatPower;
            } else if (item.stats[i] == 'Healing Power') {
                statForComputation = healingPower;
            }
            this.equipmentBonusN(i + 1, Math.round(item.coefficients[i] * statForComputation));
        }
    }

    /**********************************************************************************
     * Glyph functions |
     *                 V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-glyph
     */
    this.glyphId = function() {
        if (arguments.length == 1) {
            this.el.glyphId.val(arguments[0]);
        } else {
            return this.el.glyphId.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-rarity
     */
    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.val(arguments[0]);
        } else {
            return this.el.glyphRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-quality
     */
    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.val(arguments[0]);
        } else {
            return this.el.glyphQuality.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-level
     */
    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.val(arguments[0]);
        } else {
            return this.el.glyphLevel.val();
        }
    };

    /**
     * Getter/Setter for #slot-glyph-rating
     */
    this.glyphRating = function() {
        if (arguments.length == 1) {
            this.el.glyphRating.html(arguments[0]);
        } else {
            return parseInt(this.el.glyphRating.html());
        }
    };

    /**
     * Getter/Setter for #slot-glyph-label
     */
    this.glyphLabel = function() {
        if (arguments.length == 1) {
            this.el.glyphLabel.html(arguments[0]);
        } else {
            return this.el.glyphLabel.html();
        }
    };
    /**
     * Getter/Setter for #slot-glyph-img-icon
     */
    this.glyphImgIcon = function() {
        if (arguments.length == 1) {
            this.el.glyphImgIcon.attr('src', arguments[0])
        } else {
            return this.el.glyphImgIcon.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-rarity
     */
    this.glyphImgRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphImgRarity.attr('src', arguments[0])
        } else {
            return this.el.glyphImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-img-quality
     */
    this.glyphImgQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphImgQuality.attr('src', arguments[0])
        } else {
            return this.el.glyphImgQuality.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-glyph-iLvl
     */
    this.glyphILvl = function() {
        if (arguments.length == 1) {
            this.el.glyphILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.glyphILvl.html());
        }
    };

    /**
     * Updates #slot-glyph-rating (calculatations with stats data)
     *   INFO : in SWL a glyph rating value depends on its rarity-quality-level, neither the slot (head/major/minor) nor
     *   the glyph stat impact the calculation (whereas it was the case in TSW) => /!\ exception for crit power
     *   glyphs that give 97.3% of the value of other glyphs)
     */
    this.updateGlyphRating = function() {
        var newValue = 0;
        if (this.glyphId() != 'none') {
            var baseValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_init;
            var bonusValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_per_level * (this.glyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.glyphId() == 'critical-power') {
                newValue = 0.973 * newValue;
            }
            // remove decimals for display
            newValue = newValue.toFixed(0);
            // add '+' for display
            if (newValue !== 0) {
                newValue = '+' + newValue;
            }
        }
        this.glyphRating(newValue);
    };

    /**
     * Updates #slot-glyph-img-icon
     */
    this.updateGlyphImgIcon = function() {
        var img_path = 'assets/images/icons/glyph/' + this.glyphId() + '.png';
        this.glyphImgIcon(img_path);
    };

    /**
     * Updates #slot-glyph-img-rarity
     */
    this.updateGlyphImgRarity = function() {
        var img_path = 'assets/images/icons/rarity/' + this.glyphRarity() + '-42x42.png';
        this.glyphImgRarity(img_path);
    };

    /**
     * Updates #slot-glyph-img-quality
     */
    this.updateGlyphImgQuality = function() {
        var img_path = 'assets/images/icons/quality/' + this.glyphQuality() + '.png'; // TODO maybe not accurate
        this.glyphImgQuality(img_path);
    };

    /**
     * Updates #slot-glyph-ilvl
     * -> Calculates item power for the slot's glyph and updates GUI with it
     */
    this.updateGlyphILvl = function() {
        var newILvl = 0;
        if (this.glyphId() != 'none') {
            newILvl = this.computeItemILvl('glyph', this.glyphRarity(), this.glyphLevel());
            // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                newILvl = newILvl * 1.225;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = newILvl;

        this.glyphILvl(Math.round(newILvl));
        this.refreshILvl();
    };

    /**
     * Updates for #slot-glyph-label
     */
    this.updateGlyphLabel = function() {
        this.glyphLabel(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[this.glyphId()]);
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/

    /**
     * Getter to retrieve full signet object from the data model
     */
    //TODO : find better name for getSignet method (and also getItem above)
    this.getSignet = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
        }
        return swlcalc.data.signets.slot[this.kind][this.signetId() - 1];
    };

    /**
     * Getter/Setter for #slot-signet
     */
    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    /**
     * Getter/Setter for #slot-signet-rarity
     */
    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.val(arguments[0]);
        } else {
            return this.el.signetRarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-signet-level
     */
    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.val(arguments[0]);
        } else {
            return this.el.signetLevel.val();
        }
    };

    /**
     * Getter/Setter for #slot-signet-img-icon
     */
    this.signetImgIcon = function() {
        if (arguments.length == 1) {
            this.el.signetImgIcon.attr('src', arguments[0])
        } else {
            return this.el.signetImgIcon.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-signet-img-rarity
     */
    this.signetImgRarity = function() {
        if (arguments.length == 1) {
            this.el.signetImgRarity.attr('src', arguments[0])
        } else {
            return this.el.signetImgRarity.attr('src');
        }
    };

    /**
     * Getter/Setter for #slot-signet-ilvl
     */
    this.signetILvl = function() {
        if (arguments.length == 1) {
            this.el.signetILvl.html(arguments[0]);
        } else {
            return (this.isWeapon() ? undefined : parseInt(this.el.signetILvl.html()));
        }
    };

    /**
     * Builds (calculates) signet description
     */
    //TODO/FEATURE : to use for signets like in tswcalc
    this.signetDescription = function() {
        if (arguments.length == 1) {
            this.el.signetDescription.html(arguments[0]);
        } else {
            return this.el.signetDescription.text();
        }
    };

    /**
     * Getter/Setter for #id-signet-bonus
     */
    this.signetBonus = function() {
        if (arguments.length == 1) {
            $('#' + this.id + '-signet-bonus').html(arguments[0]);
        } else {
            return $('#' + this.id + 'signet-bonus').html();
        }
    };

    /**
     * Updates signet (#slot-signet-icon + #slot-signet-description)
     */
    this.updateSignet = function() {
        this.updateSignetIcon();

        var signet = this.getSignet();
        var newDescription = signet.description;
        if (this.isWeapon()) {
            // Replaces %id% either by 'weapon' or 'weapon2' depending on the current slot
            // TODO/REFACTOR : maybe there's a better way to achieve this..
            newDescription = newDescription.replace(/%id/g, this.id);
        }
        this.signetDescription(newDescription);

        this.refreshSignetBonus();
    };

    /**
     * Updates signet icon
     */
    //TODO/REFACTOR : change name/responsability / or delete function, according to the previous Getter/Setter/"refresher" functions ?
    this.updateSignetIcon = function() {
        this.updateSignetImgIcon();
        this.updateSignetImgRarity();
    };

    /**
     * Updates #slot-signet-img-icon
     */
    this.updateSignetImgIcon = function() {
        var signet = this.getSignet();
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var img_path = 'assets/images/icons/signet/' + pngName + '.png';
        this.signetImgIcon(img_path);
    };

    /**
     * Getter/Setter for #slot-signet-img-rarity
     */
    this.updateSignetImgRarity = function() {
        var img_path = 'assets/images/icons/rarity/' + this.signetRarity() + '-42x42.png';
        this.signetImgRarity(img_path);
    };

    /**
     * Setter for #slot-signet-description
     */
    //TODO/REFACTOR : change name/responsability / or delete function, according to the previous Getter/Setter/"refresher" functions ?
    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Updates the dynamic bonus displayed in the signet's description (#slot-signet-bonus)
     */
    // TODO to enhance
    this.refreshSignetBonus = function(combatPower, healingPower){
        var newValue = 0;
        // coefficient in case CP or HP is used in the bonus computation
        var coef = 1

        // TODO/REFACTOR : there should  a better way to handle the particular cases of Signet of Shoulder Tackle & Signet of Contortion
        if (this.getSignet().id != 0) {
            var signet = swlcalc.data.signets.slot[this.kind][this.signetId() - 1]

            if (this.isWeapon()) {
                newValue = signet.quality[this.equipmentQuality()]
            } else if (signet.name == "Signet of Shoulder Tackle") {
                bonus1 = signet.ratio[this.signetRarity()].init[0];
                bonus2 = signet.ratio[this.signetRarity()].init[1]
                           - signet.ratio[this.signetRarity()].per_level[1] * (this.signetLevel() - 1);
                $('#' + this.id + '-signet-bonus').html(bonus1);
                $('#' + this.id + '-signet-bonus2').html(swlcalc.util.precisionRound(bonus2, 4));
                return;
            } else if (signet.name == "Signet of Contortion") {
                newValue = signet.ratio[this.signetRarity()].init
                           - signet.ratio[this.signetRarity()].per_level * (this.signetLevel() - 1)
            } else {
                newValue = signet.ratio[this.signetRarity()].init
                           + signet.ratio[this.signetRarity()].per_level * (this.signetLevel() - 1)
            }

            if (signet.stat != undefined) {
                if (signet.stat == 'Combat Power') {
                    coef = combatPower;
                } else if (signet.stat == 'Healing Power') {
                    coef = healingPower;
                }
            }
        }
        newValue *= coef
        newValue = swlcalc.util.precisionRound(newValue, 4)
        this.signetBonus(newValue);
    };

    /**
     * Updates #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var newILvl = 0;
        if (this.signetId() != 'none') {
            newILvl = this.computeItemILvl('signet', this.signetRarity(), this.signetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = newILvl;

        this.signetILvl(Math.round(newILvl));
        this.refreshILvl();
    };

    /**********************************************************************************
     * Other functions |
     *                 V
     **********************************************************************************/

    /**
     * Reset slot by setting default values for each select
     */
    this.reset = function() {
        this.el.equipmentId.prop("selectedIndex", 0);
        this.el.equipmentRarity.prop("selectedIndex", 0);
        this.el.equipmentQuality.prop("selectedIndex", 0);
        //this.el.equipmentId.change();

        this.el.glyphId.prop("selectedIndex", 0);
        this.el.glyphRarity.prop("selectedIndex", 0);
        this.el.glyphQuality.prop("selectedIndex", 0);
        this.el.glyphLevel.prop("selectedIndex", 0);

        this.el.signetId.prop("selectedIndex", 0);
        this.el.signetRarity.prop("selectedIndex", 0);
        this.el.signetLevel.prop("selectedIndex", 0);

        this.el.equipmentId.change();
        this.el.equipmentRarity.change();
        this.el.glyphId.change();
        this.el.glyphRarity.change();
        this.el.signetId.change();
        this.el.signetRarity.change();
        this.updateSignet();
    };

    /**
     * Mapping function for import/export feature
     */
    this.state = function() {
        return {
            equipment_rarity:  this.equipmentRarity(),
            equipment_quality: this.equipmentQuality(),
            equipment_level:   this.equipmentLevel(),
            glyph_id:          this.glyphId(),
            glyph_rarity:      this.glyphRarity(),
            glyph_quality:     this.glyphQuality(),
            glyph_level:       this.glyphLevel(),
            signet_id:         this.signetId(),
            signet_rarity:     this.signetRarity(),
            signet_level:      this.signetLevel(),
        };
    };

    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var gmap  = swlcalc.data.glyph_stat_mapping.to_num;
        var rmap  = swlcalc.data.rarity_mapping.to_num;
        return {
            equipment_id:      this.stripContent(this.equipmentId()),
            equipment_rarity:  this.stripContent(this.equipmentRarity(), rmap),
            equipment_quality: this.equipmentQuality(),
            equipment_level:   this.equipmentLevel(),
            glyph_id:          this.stripContent(this.glyphId(), gmap),
            glyph_rarity:      this.stripContent(this.glyphRarity(), rmap),
            glyph_quality:     this.glyphQuality(),
            glyph_level:       this.glyphLevel(),
            signet_id:         this.stripContent(this.signetId()),
            signet_rarity:     this.stripContent(this.signetRarity(), rmap),
            signet_level:      this.stripContent(this.signetLevel())
        };
    };

    /**
     * Strips submitted content (= used by mappedState)
     */
    //TODO/REFACTOR : to change ? not clear
    this.stripContent = function(val, mapping) {
        if (val == null || val == 'none' || val === undefined) {
            return 0;
        } else if (mapping !== undefined) {
            return mapping[val];
        } else {
            return val;
        }
    };

    /**
     * Calculates item power for the given item (talisman, weapon, glyph or signet)
     */
    this.computeItemILvl = function(element, rarity, level) {
        var dataToUse = swlcalc.data.ilvl.gear[element].rarity[rarity];
        return dataToUse.ilvl_init + dataToUse.ilvl_per_level * (level - 1);
    }
};
