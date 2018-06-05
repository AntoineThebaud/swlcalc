// buttonbar.dust
(function(){dust.register("buttonbar",body_0);function body_0(chk,ctx){return chk.write("<!-- [ Reset ]--><div class=\"btn-group\"><button id=\"btn-reset\" class=\"btn btn-danger\">Reset</button></div><!-- [ All Standard ][ All Superior ][ All Epic ][ All Mythic ][ All Legendary ] --><div class=\"btn-group\"><button id=\"btn-all-standard\" class=\"btn\">All <span class=\"color-standard\">Standard</span></button><button id=\"btn-all-superior\" class=\"btn\">All <span class=\"color-superior\">Superior</span></button><button id=\"btn-all-epic\" class=\"btn\">All <span class=\"color-epic\">Epic</span></button><button id=\"btn-all-mythic\" class=\"btn\">All <span class=\"color-mythic\">Mythic</span></button><button id=\"btn-all-legendary\" class=\"btn\">All <span class=\"color-legendary\">Legendary</span></button></div><!-- [ 100% DPS ][ 100% Healer ][ 100% Tank ] --><div class=\"btn-group\"><button id=\"btn-all-dps\" class=\"btn active\">100%<br/>Damage</button><button id=\"btn-all-heal\" class=\"btn\">100%<br/>Healing</button><button id=\"btn-all-tank\" class=\"btn\">100%<br/>Survivability</button></div><!-- [ Export ] --><div class=\"btn-group\"><a class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Export <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a class=\"export\" href=\"#open-export-modal\" data=\"url\" data-toggle=\"modal\">URL</a></li></ul></div><!-- Pop-up window on [ Export ] --><div id=\"open-export-modal\" class=\"modal hide fade\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h5>Export</h5></div><div class=\"modal-body\">Copy this and share:<br/><textarea id=\"export-textarea\" class=\"field span12\" wrap=\"off\" rows=\"10\"></textarea></div></div>");}return body_0;})();;// container.dust
(function(){dust.register("container",body_0);function body_0(chk,ctx){return chk.write("<div class=\"masthead\"><div class=\"btn-group pull-right\"><a class=\"btn btn-info\" href=\"https://github.com/AntoineThebaud/swlcalc\" target=\"_blank\" style=\"color: white;\">Github</a><a class=\"btn\" href=\"https://forums.funcom.com/t/swlcalc-gear-planner-for-swl/1908\" target=\"_blank\">forum post</a><a href=\"http://dgamers.guildi.com/\" target=\"_blank\"><img class=\"logo-dg\" src=\"assets/images/logos/DG.png\"/></a></div><div class=\"div-logo\"><img class=\"logo-swlcalc\" src=\"assets/images/logos/swlcalc.png\" /><span class=\"logo-slogan lightgrey\">A gear planner for </span><img class=\"logo-swl\" src=\"assets/images/logos/swl.png\"/></div></div><hr><div class=\"row-fluid\"><div class=\"span12\">").partial("buttonbar",ctx,null).write("</div></div><hr/><div class=\"row-fluid\"><div class=\"span8\">").partial("slots",ctx,null).write("</div><div class=\"span3\">").partial("summary",ctx,null).write("</div></div><hr><div class=\"footer\"><p>swlcalc &copy; 2017-2018 Antoine THEBAUD. Version <a href=\"https://github.com/AntoineThebaud/swlcalc/tree/1.2.0\" target=\"_new\">1.2.0</a>. Hosted on Github Pages.</p></div>");}return body_0;})();;// levelselect.dust
(function(){dust.register("levelselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-level\" title=\"Please select level\"><option value=\"20\">20</option><option value=\"19\">19</option><option value=\"18\">18</option><option value=\"17\">17</option><option value=\"16\">16</option><option value=\"15\">15</option><option value=\"14\">14</option><option value=\"13\">13</option><option value=\"12\">12</option><option value=\"11\">11</option><option value=\"10\">10</option><option value=\"9\">9</option><option value=\"8\">8</option><option value=\"7\">7</option><option value=\"6\">6</option><option value=\"5\">5</option><option value=\"4\">4</option><option value=\"3\">3</option><option value=\"2\">2</option><option value=\"1\">1</option></select>");}return body_0;})();;// qualityselect.dust
(function(){dust.register("qualityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-quality\" title=\"Please select quality\"><option value=\"").reference(ctx.get("pip1_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip1_n"),ctx,"h").write("</option><option value=\"").reference(ctx.get("pip2_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip2_n"),ctx,"h").write("</option><option value=\"").reference(ctx.get("pip3_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip3_n"),ctx,"h").write("</option></select>");}return body_0;})();;// rarityselect.dust
(function(){dust.register("rarityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-rarity\" title=\"Please select rarity\"><option value=\"standard\" class=\"color-standard\">Standard</option><option value=\"superior\" class=\"color-superior\">Superior</option><option value=\"epic\" class=\"color-epic\">Epic</option><option value=\"mythic\" class=\"color-mythic\">Mythic</option><option value=\"legendary\" class=\"color-legendary\">Legendary</option></select>");}return body_0;})();;// slots.dust
(function(){dust.register("slots",body_0);function body_0(chk,ctx){return chk.section(ctx.get("slots"),ctx,{"else":body_1,"block":body_2},null);}function body_1(chk,ctx){return chk.write("<p>No slots found (Bug)!</p>");}function body_2(chk,ctx){return chk.write("<div id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-slot\" class=\"slot\"><table class=\"table-title\"><tr><td class=\"td-title\"><span><h4 class=\"slot\">").reference(ctx.get("name"),ctx,"h").write("</h4><h4 id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-name\" class=\"slot-name\"></h4><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-name-warning\" class=\"label label-important\"><a class=\"slot-warning\" href=\"#\" data-toggle=\"tooltip\"><i class=\"icon-warning-sign icon-white\"></i></a></span></span></td>").exists(ctx.get("is_weapon"),ctx,{"block":body_3},null).write("<td class=\"slot-ilvl\">Item Power : <span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-total-ilvl\">0</span></td></tr></table><table class=\"table table-slots\"><tr>").exists(ctx.get("is_weapon"),ctx,{"else":body_4,"block":body_5},null).write("<td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":""}).write("</td><td class=\"stat-value stat-inSlot\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-power-rating\">0</span>").exists(ctx.get("is_weapon"),ctx,{"else":body_6,"block":body_7},null).write("</td></tr><tr class=\"tr-with-icon\"><td class=\"item-img\"><a href=\"#\" class=\"item-tooltip\" data-toggle=\"tooltip\" title=\"Item for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-img-rarity\" class=\"item-icon-border\" src=\"\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-img-icon\" class=\"item-icon\" src=\"\" alt=\"image\"/></a></td><td class=\"item-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_8,"block":body_9},null).write("</td><td class=\"upgrade-label quality-label\"><strong>Quality :</strong></td><td class=\"upgrade-select quality-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_10,"block":body_11},null).write("</td><td rowspan=\"2\" class=\"item-description\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-description\"></span></td></tr><tr><td rowspan=\"2\" class=\"filler\"></td><td rowspan=\"2\" class=\"filler\"></td><td rowspan=\"2\" class=\"upgrade-label level-label\"><strong>Level :</strong></td><td rowspan=\"2\" class=\"upgrade-select level-select\">").partial("levelselect",ctx,{"id_suffix":""}).write("</td></tr><tr><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-ilvl\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyphs\" class=\"table table-slots\"><tr><td class=\"glyph-title\" colspan=\"2\">Glyph</td><td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"-glyph"}).write("</td><td class=\"filler\"></td></tr><tr class=\"tr-with-icon\"><td class=\"glyph-img\"><a href=\"#\" class=\"glyph-tooltip\" data-toggle=\"tooltip\" title=\"Glyph for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-rarity\" class=\"glyph-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-icon\" class=\"glyph-icon\" src=\"assets/images/icons/glyph/none.png\" alt=\"Glyph\"/></a></td><td class=\"glyph-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph\" title=\"Please select stat\"><option value=\"none\" selected=\"true\">None</option><option value=\"hit-rating\">Accurate</option><option value=\"critical-rating\">Fierce</option><option value=\"critical-power\">Devastating</option><option value=\"evade-rating\">Elusive</option><option value=\"defense-rating\">Stalwart</option></select></td><td class=\"upgrade-label quality-label\"><strong>Quality :</strong></td><td class=\"upgrade-select quality-select\">").partial("qualityselect",ctx,{"id_suffix":"-glyph","pip1_v":"crude","pip1_n":"Crude","pip2_v":"simple","pip2_n":"Simple","pip3_v":"intricate","pip3_n":"Intricate"}).write("</td><td class=\"stat-value stat-inSlot\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-rating\">0</span><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-stat\"></span></td></tr><tr><td class=\"filler\"></td><td class=\"filler\"></td><td class=\"upgrade-label level-label\"><strong>Level :</strong></td><td class=\"upgrade-select level-select\">").partial("levelselect",ctx,{"id_suffix":"-glyph"}).write("</td><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-ilvl\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signets\" class=\"table table-slots\">").exists(ctx.get("is_weapon"),ctx,{"else":body_12,"block":body_13},null).write("</table></div>");}function body_3(chk,ctx){return chk.write("<td><a id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-swap-weapon\" class=\"btn btn-success swap-weapon\"><i class=\"icon-retweet icon-white icon-align-left\"></i>    Swap weapon</a></td>");}function body_4(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Talisman</td>");}function body_5(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Weapon</td>");}function body_6(chk,ctx){return chk.write("<span> Power Rating</span>");}function body_7(chk,ctx){return chk.write("<span> Weapon Power</span>");}function body_8(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-itemId\" title=\"Please select item\"></select>");}function body_9(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-wtype\" title=\"Please select weapon type\"><option value=\"none\" selected=\"true\">None</option><option value=\"blade\" selected=\"true\">Blade</option><option value=\"hammer\">Hammer</option><option value=\"fist\">Fist Weapon</option><option value=\"blood\">Blood Magic Focus</option><option value=\"chaos\">Chaos Focus</option><option value=\"elementalism\">Elementalism Focus</option><option value=\"shotgun\">Shotgun</option><option value=\"pistols\">Pistols</option><option value=\"assault-rifle\">Assault Rifle</option></select>");}function body_10(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"","pip1_v":"faded","pip1_n":"Faded","pip2_v":"luminous","pip2_n":"Luminous","pip3_v":"radiant","pip3_n":"Radiant"});}function body_11(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"","pip1_v":"mkI","pip1_n":"MK I","pip2_v":"mkII","pip2_n":"MK II","pip3_v":"mkIII","pip3_n":"MK III"});}function body_12(chk,ctx){return chk.write("<tr><td class=\"signet-title\" colspan=\"2\">Signet</td><td class=\"upgrade-label rarity-label\"><strong>Rarity :</strong></td><td class=\"upgrade-select rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"-signet"}).write("</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\"></td></tr><tr class=\"tr-with-icon\"><td class=\"signet-img\"><a href=\"#\" class=\"signet-tooltip\" data-toggle=\"tooltip\" title=\"Signet for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose the rarity and type of signet.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-rarity\" class=\"signet-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-icon\" class=\"signet-icon\" src=\"assets/images/icons/signet/none.png\" alt=\"Signet\"/></a></td><td class=\"signet-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet\" title=\"Please select signet\"></select></td><td class=\"upgrade-label quality-label\"><strong>Level :</strong></td> <!-- class is \"quality..\" instead of \"level..\" because we skip quality select for signets --><td class=\"upgrade-select quality-select\">").partial("levelselect",ctx,{"id_suffix":"-signet"}).write("</td> <!-- class is \"quality..\" instead of \"level..\" because we skip quality select for signets --><td class=\"ilvl\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-ilvl\">0</span></td></tr>");}function body_13(chk,ctx){return chk.write("<tr><td class=\"item-title\" colspan=\"2\">Suffixe</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\" colspan=\"3\" rowspan=\"2\"></td><tr><td class=\"item-select\" colspan=\"2\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet\" title=\"Please select signet\"></select></td></tr>");}return body_0;})();;// summary.dust
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
        addHash();
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
        $('.item-tooltip, .glyph-tooltip, .signet-tooltip').tooltip({
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
        // TODO/REFACTOR : check if parameters for each slot are correct !
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
        swlcalc.slots.init();
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            startSelectHandler(swlcalc.data.template_data.slots[i]);
        }
        swlcalc.button.init();
        swlcalc.buttonBar.init();
        swlcalc.summary.init();
        swlcalc.export.init();
    };

    /**
     * Add an empty hash if current is null
     * TODO/REFACTOR : check if still accurate ?
     */
    var addHash = function() {
        if (location.hash == '') {
            location.hash = ' ';
        }
    };

    /**
     * Create select handler for a slot.
     */
    var startSelectHandler = function(slot) {
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].initiate();
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

    //TODO/REFACTOR : remove ? currently needed for compatibility
    var init = function() {
    };
  
    //TODO/REFACTOR : to be sure to use 'this' instead of 'var'
    var animaAllocation = 'DAMAGE';
  
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
            if (sums.hasOwnProperty(stat)) {
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

        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                sums['ilvl'] += slot.totalILvl();
                if (slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                } else if (slot.isWeapon() && slot.wtype() != 'none') {
                    sums['weapon-power'] = slot.powerRating();
                } else if (!slot.isWeapon() && slot.itemId() != 'none') {
                    sums['power-rating'] += slot.powerRating();
                }
            }
        }
        // first basic implementation of anima allocation
        // TODO/FEATURE : add conversion to AR/HR/HP based on a ratio
        if (animaAllocation == 'DAMAGE') {
            sums['attack-rating'] += sums['power-rating'];            
        } else if (animaAllocation == 'HEALING') {
            sums['heal-rating'] += sums['power-rating'];          
        } else if (animaAllocation == 'SURVIVABILITY') {
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
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                sums[slot.glyph()] += slot.glyphRating();
            }
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
     * The calculation includes weapon expertise
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
        animaAllocation = newAllocation;
    }
    
    /**
     * Launch a description refresh for each item in order to display the right bonus values
     */
    var updateDescriptions = function() {
        //TODO/REFACTOR : avoid using hasSlot
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                swlcalc.slots[slotId].refreshItemBonus(combatPower(), healingPower());
            }
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
    var self = this;
    var slotObj = swlcalc.slots[slot.id_prefix];
    
    //TODO/REFACTOR : to rename as "init"
    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    /**
     * Associates the right process to each trigger.
     */
    this.bindEvents = function() {
        if (slotObj.isWeapon()) {
            slotObj.el.wtype.change(this.handleWtypeChange);
        } else {
            slotObj.el.itemId.change(this.handleItemChange);
        }
        slotObj.el.rarity.change(this.handleRarityChange);
        slotObj.el.quality.change(this.handleQualityChange);
        slotObj.el.level.change(this.handleLevelChange);

        slotObj.el.glyph.change(this.handleGlyphChange);
        slotObj.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.el.glyphLevel.change(this.handleGlyphLevelChange);

        slotObj.el.signetId.change(this.handleSignetChange);
        slotObj.el.signetRarity.change(this.handleSignetRarityChange);
        slotObj.el.signetLevel.change(this.handleSignetLevelChange);
    };
  
    /**
     * Loads items (swlcalc-data-items) as options list in the #slot-itemId select
     */
    this.addItemsToSelect = function() {
        //TODO/REFACTOR : shall be done in a better way
        //skip this function for the weapons (their dropdown is already filled)
        if (slot.group == 'weapon') return;

        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        var items = swlcalc.data.items.slot[slot.id_prefix].slice();
        //sort alphabetically for a better ergonomy
        items.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });

        items.forEach(function(item) {
            slotObj.el.itemId.append($('<option>', {
                value: item.id,
                text: item.name
            }));
        });
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

        //TODO/REFACTOR : to improve
        var idToUse = (slot.id_prefix == 'weapon2' ? 'weapon' : slot.id_prefix);
        var signetsInSlotGroup = swlcalc.data.signets.slot[idToUse];
        //sort alphabetically for a better ergonomy
        signetsInSlotGroup.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });
      
        $.each(signetsInSlotGroup, function(index, value) {
            slotObj.el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
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
     * -> triggers item update for the slot (= image + description).
     * -> triggers power rating update for the slot.
     * -> triggers ilvl update for the slot (to cover the case when previous value was or new value is 'none').
     */
    this.handleItemChange = function(event) {
        slotObj.updateItem() // == slotObjupdateTalismanImgIcon() + slotObj.updateDescription();
        slotObj.updatePowerRating();
        slotObj.updateILvl();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-wtype
     * -> triggers image update for the weapon.
     * -> triggers power rating update for the slot.
     * -> triggers ilvl update for the slot (to cover the case when previous value was or new value is 'none').
     */
    this.handleWtypeChange = function(event) {
        var wtype = $(this).val();
        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
        slotObj.updateWeaponImgIcon();
        slotObj.updatePowerRating();
        slotObj.updateILvl();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-rarity
     * -> triggers rarity's text color update for the slot.
     * -> triggers border image update for the slot.
     * -> triggers image update for the slot.
     * -> triggers available levels refresh for the slot.
     * -> triggers power rating update for the slot.
     * -> triggers ilvl update for the slot.
     */
    //TODO/REFACTOR : review the way it uses slotObj.id
    this.handleRarityChange = function(event) {
        var newRarity = $("#" + slotObj.id + "-rarity option:selected").val();

        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-rarity option:selected").attr('class'));

        slotObj.updateImgBorder();

        //refresh the list of available levels
        slotObj.el.level.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        for (i = maxLvl; i >= minLvl ; i--) {
           slotObj.el.level.append($('<option>', {
               value: i,
               text: i
           }));
        }

        slotObj.updatePowerRating();
        slotObj.updateILvl();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-quality
     * -> triggers power rating update for the slot.
     */
    this.handleQualityChange = function(event) {
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-level
     * -> triggers power rating update for the slot.
     * -> triggers ilvl update for the slot.
     */
    this.handleLevelChange = function(event) {
        slotObj.updateILvl();
        slotObj.updatePowerRating();
        swlcalc.summary.updateAllStats();
    };

    /**********************************************************************************
     * Event handlers : Glyph |
     *                        V
     **********************************************************************************/
    
    /**
     * Handler for #slot-glyph
     * -> triggers label update for the glyph.
     * -> triggers image update for the glyph.
     * -> triggers rating update for the glyph.
     * -> triggers ilvl update for the glyph (to cover the case when previous value was or new value is 'none').
     */
    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphStatLabel();
        slotObj.updateGlyphImgIcon();
        slotObj.updateGlyphRating();
        slotObj.updateGlyphILvl();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-rarity
     * -> triggers rarity's text color update for the glyph.
     * -> triggers border image update for the glyph.
     * -> triggers ilvl update for the glyph.
     * -> triggers rating update for the glyph.
     */
    this.handleGlyphRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-glyph-rarity option:selected").attr('class'));
        slotObj.updateGlyphImgBorder();
        slotObj.updateGlyphILvl();
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-quality
     * -> triggers rating update for the glyph.
     */
    this.handleGlyphQualityChange = function(event) {
        slotObj.updateGlyphRating();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-glyph-level
     * -> triggers rating update for the glyph.
     * -> triggers ilvl update for the glyph.
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
     * Handler for #slot-signet
     * -> triggers signet update for the signet. //TODO : review slotObj.updateSignet()
     * -> triggers ilvl update for the signet (to cover the case when previous value was or new value is 'none').
     */
    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        //weapon signets (= suffixes) don't have item power attribute
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetILvl();
        }
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Handler for #slot-signet-rarity
     * -> triggers rarity's text color update for the signet.
     * -> triggers signet update for the signet. //TODO : review slotObj.updateSignet()
     * -> triggers ilvl update for the signet.
     */
    //TODO/REFACTOR : code duplication with handleSignetChange()
    this.handleSignetRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-signet-rarity option:selected").attr('class'));
        slotObj.updateSignet();
        //weapon signets (= suffixes) don't have item power attribute
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetILvl();
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Handler for #slot-signet-level
     * -> triggers ilvl update for the signet.
     */
    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetILvl();
        swlcalc.summary.updateAllStats();
    };

    //TODO/REFACTOR : to reimplement
    // this.updateTextColor = function(select) {
    //     console.log("select = ");
    //     console.log(select);
    //     var newClass = $("#" + select.attr('id') + " option:selected").attr('class');
    //     console.log("newClass = " + newClass);
    //     $(select).attr("class", newClass);
    // };
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
        swlcalc.slots[slotId].sheathWeapon();
        swlcalc.slots[self.otherWeapon()].drawWeapon();
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
            btn_all_dps: $('#btn-all-dps'),
            btn_all_heal: $('#btn-all-heal'),
            btn_all_tank: $('#btn-all-tank'),
            btn_all_standard: $('#btn-all-standard'),
            btn_all_superior: $('#btn-all-superior'),
            btn_all_epic: $('#btn-all-epic'),
            btn_all_mythic: $('#btn-all-mythic'),
            btn_all_legendary: $('#btn-all-legendary'),
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
        el.btn_all_dps.on('click', setAnimaAllocation);
        el.btn_all_heal.on('click', setAnimaAllocation);
        el.btn_all_tank.on('click', setAnimaAllocation);
        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);
        el.btn_reset.on('click', resetAllSlots);
    };

    /**
     * Sets anima allocation ratio
     */
    //TODO/REFACTOR : basic implementation, everything to review
    var setAnimaAllocation = function(event) {
        el.btn_all_dps.removeClass('active');
        el.btn_all_heal.removeClass('active');
        el.btn_all_tank.removeClass('active');
        $(event.target).addClass('active');
                             
        if (event.target.id == 'btn-all-dps') {
            swlcalc.summary.setAnimaAllocation('DAMAGE');
        } else if (event.target.id == 'btn-all-heal') {
            swlcalc.summary.setAnimaAllocation('HEALING');
        } else if (event.target.id == 'btn-all-tank') {
            swlcalc.summary.setAnimaAllocation('SURVIVABILITY');          
        }
      
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Set the same chosen rarity to all items+glyphs+signets.
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var setRarityOnAllSlots = function(event) {
        var newRarity = event.currentTarget.id.split('-')[2];
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.rarity(newRarity);
                slot.el.rarity.change();

                slot.glyphRarity(newRarity);
                slot.el.glyphRarity.change();

                slot.signetRarity(newRarity);
                slot.el.signetRarity.change();
            }
        }
        swlcalc.summary.updateAllStats();
    };

    /**
     * Set all slots to 'none'
     */
    //TODO/REFACTOR : to define if "slot" is the right term here
    var resetAllSlots = function(event) {
        swlcalc.slots.reset();
        swlcalc.summary.updateAllStats();
    };
  
    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        el: el,
        init: init,
        setRarityOnAllSlots: setRarityOnAllSlots,
        resetAllSlots: resetAllSlots
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
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                url += createSlotUrl(slot, slot.mappedState());
                if (i < swlcalc.slots.length() - 1) {
                    url += '&';
                }
                i++;
            }
        }
        return url;
    };

    /**
     * Builds the subpart of the export URL for the submitted slot
     */
    var createSlotUrl = function(slot, state) {
        var idOrWtype = state.itemId;
        if(slot.isWeapon()) {
            idOrWtype = state.wtype;
        }
        // see swlcalc-import.js for the order
        var slotUrl = slot.id + '='
            + state.rarity + ','
            + idOrWtype + ','
            + state.quality + ','
            + state.level + ','
            + state.glyph_rarity + ','
            + state.glyph + ','
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
 *===================================================|====================================
 *                      Element                      |               Values
 *---------------------------------------------------|------------------------------------
 *                  ____________ Item's Rarity        [1,2,3,4,5]
 *                 / ___________ Item's Type (ID)     [refer to swlcalc-data-items.js]
 *                / / __________ Item's Quality       [1,2,3]
 *               / / / _________ Item's Level         [1->20/25/30/35/70]
 *              / / / / ________ Glyph's Rarity       [1,2,3,4,5]
 *             / / / / / _______ Glyph's Stat         [0,1,2,3,4,5]
 *            / / / / / / ______ Glyph's Quality      [1,2,3]
 *           / / / / / / / _____ Glyph's Level        [1->20]
 *          / / / / / / / /  ___ Signet's Rarity      [1,2,3,4,5]
 *         / / / / / / / /  / __ Signet's Type (ID)   [refer to swlcalc-data-signets.js]
 *        / / / / / / / /  / / _ Signet's Level       [1->20]
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
        var slotObj = swlcalc.slots[slotId];
        // values[0] == Item's Rarity
        slotObj.rarity(swlcalc.data.rarity_mapping.to_name[values[0]]);
        slotObj.el.rarity.change();
        // values[1] == Item's Type (ID)
        if(slotObj.isWeapon()) {
            slotObj.wtype(swlcalc.data.wtype_mapping.to_name[values[1]]);
            slotObj.el.wtype.change();
        } else {
            slotObj.itemId(values[1] == '0' ? 'none' : values[1]);
            slotObj.el.itemId.change();
        }
        // values[2] == Item's Quality
        if(slotObj.isWeapon()) {
            slotObj.quality(swlcalc.data.weapon_quality_mapping.to_name[values[2]]);
        } else {
            slotObj.quality(swlcalc.data.talisman_quality_mapping.to_name[values[2]]);
        }
        slotObj.el.quality.change();
        // values[3] == Item's Level
        slotObj.level(values[3]);
        slotObj.el.level.change();
        // values[4] == Glyph's Rarity
        slotObj.glyphRarity(swlcalc.data.rarity_mapping.to_name[values[4]]);
        slotObj.el.glyphRarity.change();
        // values[5] == Glyph's Stat
        slotObj.glyph(swlcalc.data.glyph_stat_mapping.to_stat[values[5]]);
        slotObj.el.glyph.change();
        // values[6] == Glyph's Quality
        slotObj.glyphQuality(swlcalc.data.glyph_quality_mapping.to_name[values[6]]);
        slotObj.el.glyphQuality.change();
        // values[7] == Glyph's Level
        slotObj.glyphLevel(values[7]);
        slotObj.el.glyphLevel.change();
        // support signets (values [8], [9] & [10])
        if (typeof values[8] !== 'undefined'
        && typeof values[9] !== 'undefined' && values[9] !== "999"
        && typeof values[10] !== 'undefined') {
            // values[8] == Signet's Rarity
            var signetRarity = swlcalc.data.rarity_mapping.to_name[values[8]];
            // values[9] == Signet's Type (ID)
            var signetId = values[9] != '0' ? values[9] : 'none';
            // values[10] == Signet's Level
            var signetLevel = values[10];
            changeSignet(slotId, signetRarity, signetId, signetLevel);
        }
    };

    /**
     * Loads informations about a signet into swlcalc.
     */
    //TODO/REFACTOR maybe there is a better way to update GUI than simulating change() ?
    var changeSignet = function(slotId, rarity, id, level) {
        var slotObj = swlcalc.slots[slotId];
        slotObj.signetRarity(rarity);
        slotObj.signetId(id);
        slotObj.signetLevel(level);
        slotObj.el.signetId.change();
        slotObj.el.signetRarity.change();
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
    
    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        capitalise: capitalise,
        blankIfNone: blankIfNone,
        precisionRound: precisionRound
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

swlcalc.slots = function() {
    //this method can only be called after the document is ready
    var init = function() {
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotData = swlcalc.data.template_data.slots[i];
            this[slotData.id_prefix] = new swlcalc.slots.Slot(slotData.id_prefix, slotData.name, slotData.group);
            this[slotData.id_prefix].el.nameWarning.hide();
        }
        drawPrimaryWeapon();
    };
  
    /**
     * Draw primary weapon (-> hide secondary weapon)
     */
    var drawPrimaryWeapon = function() {
        swlcalc.slots.weapon2.sheathWeapon();
        swlcalc.slots.weapon.weaponDrawn = true;
    };
  
    /**
     * Returns the number of slots of a gear (= 9 as of now)
     */
    var length = function() {
        return swlcalc.data.template_data.slots.length;
    };
  
    /**
     * Defines the list of slots names
     */
    //TODO/REFACTOR : to change : redundancy with swlcalc-data-slots.js
    var indices = function() {
        return ['head', 'weapon', 'weapon2', 'finger', 'neck', 'wrist', 'luck', 'waist', 'occult'];
    };
  
    /**
     * Returns true if a slot of the name <parameter> exists
     */
    //TODO/REFACTOR : to find a solution to remove hasSlot
    var hasSlot = function(slot) {
        return this.hasOwnProperty(slot) && $.inArray(slot, indices()) != -1;
    };
  
    /**
     * Resets all slots
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var reset = function() {
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                this[slotId].reset();
            }
        }
    };
  
    /**
     * Returns the list of slots states
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var state = function() {
        var slotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                slotStates[slotId] = this[slotId].state();
            }
        }
        return slotStates;
    };
  
    /**
     * Returns the list of slots states (mapped version)
     */
    //TODO/REFACTOR : to find a solution to avoid the call to hasSlot
    var mappedState = function() {
        var mappedSlotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                mappedSlotStates[slotId] = this[slotId].mappedState();
            }
        }
        return mappedSlotStates;
    };

    /**
     * Exposition of functions that are going to be called from outside
     */
    var oPublic = {
        init: init,
        length: length,
        indices: indices,
        hasSlot: hasSlot,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();

swlcalc.slots.Slot = function Slot(id, name, group) {
    var self = this;
    this.id = id;
    this.name = name;
    this.group = group;
    this.weaponDrawn = false;
  
    // for calculations precision issues
    this.rawILvl = 0.0;
    this.rawGlyphILvl = 0.0;
    this.rawSignetILvl = 0.0;
  
    this.el = {
        div: $('#' + this.id + '-slot'),
        name: $('#' + this.id + '-name'),
        totalILvl: $('#' + this.id + '-total-ilvl'),
        itemId: $('#' + this.id + '-itemId'), //TODO/refactor : remove "Id" ?
        wtype: $('#' + this.id + '-wtype'),
        rarity: $('#' + this.id + '-rarity'),
        quality: $('#' + this.id + '-quality'),
        level: $('#' + this.id + '-level'),
        powerRating: $('#' + this.id + '-power-rating'),
        iLvl: $('#' + this.id + '-ilvl'),
        imgIcon: $('#' + this.id + '-img-icon'),
        imgBorder: $('#' + this.id + '-img-rarity'),
        description: $('#' + this.id + '-description'),
        glyph: $('#' + this.id + '-glyph'),
        glyphRarity: $('#' + this.id + '-glyph-rarity'),
        glyphQuality: $('#' + this.id + '-glyph-quality'),
        glyphLevel: $('#' + this.id + '-glyph-level'),
        glyphRating: $('#' + this.id + '-glyph-rating'),
        glyphStat: $('#' + this.id + '-glyph-stat'),
        glyphImgIcon: $('#' + this.id + '-glyph-img-icon'),
        glyphImgBorder: $('#' + this.id + '-glyph-img-rarity'),
        glyphILvl: $('#' + this.id + '-glyph-ilvl'),
        signetId: $('#' + this.id + '-signet'),
        signetRarity: $('#' + this.id + '-signet-rarity'),
        signetLevel: $('#' + this.id + '-signet-level'),
        signetImgIcon: $('#' + this.id + '-signet-img-icon'),
        signetImgBorder: $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        signetILvl: $('#' + this.id + '-signet-ilvl'),
        nameWarning: $('#' + this.id + '-name-warning'),
    };
  
    /**
     * Getter/Setter for #slot-name
     */
    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
    };
  
    /**
     * Getter/Setter for #slot-total-ilvl
     */
    this.totalILvl = function() {
        if (arguments.length == 1) {
            this.el.totalILvl.html(arguments[0]);
        } else {
            return parseInt(this.el.totalILvl.html());
        }
    };

    /**
     * Updates #slot-total-ilvl
     * -> Calculates total ilvl of the slot (talisman or weapon + glyph + signet) by reusing the "raw" values previously registered
     */
    this.refreshTotalILvl = function() {
        this.totalILvl(Math.round(this.rawILvl + this.rawGlyphILvl + this.rawSignetILvl));
    };

    /**********************************************************************************
     * Weapon functions |
     *                  V
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
     * Getter/Setter for #slot-wtype
     */
    this.wtype = function() {
        if (arguments.length == 1) {
            this.el.wtype.val(arguments[0]);
        } else {
            return this.isWeapon() ? this.el.wtype.val() : 'none';
        }
    };

    /**********************************************************************************
     * Item functions |
     *                V
     **********************************************************************************/

    /**
     * Getter/Setter for #slot-itemId
     */
    this.itemId = function() {
        if (arguments.length == 1) {
            this.el.itemId.val(arguments[0]);
        } else {
            return this.group != 'weapon' ? this.el.itemId.val() : 'none';
        }
    };
  
    /**
     * Getter to retrieve full item object from the data model
     */
    this.getItem = function() {
        return swlcalc.data.items.slot[this.id][this.itemId() - 1];
    };

    /**
     * Getter/Setter for #slot-rarity
     */
    this.rarity = function() {
        if (arguments.length == 1) {
            this.el.rarity.val(arguments[0]);
        } else {
            return this.el.rarity.val();
        }
    };

    /**
     * Getter/Setter for #slot-quality
     */
    this.quality = function() {
        if (arguments.length == 1) {
            this.el.quality.val(arguments[0]);
        } else {
            return this.el.quality.val();
        }
    };
  
    /**
     * Getter/Setter for #slot-level
     */
    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    /**
     * Getter/Setter for #slot-power-rating
     */
    this.powerRating = function() {
        if (arguments.length == 1) {
            this.el.powerRating.html(arguments[0]);
        } else {
            return parseInt(this.el.powerRating.html());
        }
    };
  
    /**
     * Getter/Setter for #slot-iLvl
     */
    this.iLvl = function() {
        if (arguments.length == 1) {
            this.el.iLvl.html(arguments[0]);
        } else {
            return parseInt(this.el.iLvl.html());
        }
    };
      
    /**
     * Getter/Setter for #slot-description
     */
    this.description = function() {
        if (arguments.length == 1) {
            this.el.description.html(arguments[0]);
        } else {
            return this.el.description.text();
        }
    };
       
    /**
     * Getter/Setter for #slot-bonus
     */
    this.bonus = function() {
        if (arguments.length == 1) {
            //this.el.bonus.html(arguments[0]);
            $('#' + this.id + '-bonus').html(arguments[0]);
        } else {
            //return this.el.bonus.html();
            return $('#' + this.id + '-bonus').html();
        }
    };
       
    /**
     * Getter/Setter for #slot-bonus2
     */
    // TODO/REFACTOR : to avoid code duplication with this.bonus()
    this.bonus2 = function() {
        if (arguments.length == 1) {
            //this.el.bonus.html(arguments[0]);
            $('#' + this.id + '-bonus2').html(arguments[0]);
        } else {
            //return this.el.bonus.html();
            return $('#' + this.id + '-bonus2').html();
        }
    };
  
    /**
     * Getter/Setter for #slot-img-icon
     */
    this.imgIcon = function() {
        if (arguments.length == 1) {
            this.el.imgIcon.attr('src', arguments[0])
        } else {
            return this.el.imgIcon.attr('src');
        }
    };
  
    /**
     * Updates #slot-image + #slot-description
     */
    this.updateItem = function() {
        var newImage;
        var newDescription;
        if (this.itemId() == 'none') {
            newImage = 'assets/images/icons/talisman/None.png';
            newDescription = '';
        } else {
            var newSelectedItem = swlcalc.data.items.slot[this.id][this.itemId() - 1];
            //TODO/FEATURE :
            /* temporary code ********************************************************************************
             * => Will be used as long as item images are not added to the resources. The final code will be :
            newImage = 'assets/images/icons/talisman/' + newSelectedItem.name + '.png';
             * => For now replaced by : */
            var itemForImage = swlcalc.data.items.slot[this.id][0];
            newImage = 'assets/images/icons/talisman/' + itemForImage.name + '.png';
            /* temporary code ********************************************************************************/
          
            newDescription = newSelectedItem.description;
        }
        this.imgIcon(newImage);
        this.description(newDescription);
    };
  
    /**
     * Updates #slot-power-rating (calculatations with stats data)
     */
    this.updatePowerRating = function() {
        var base_value = 0;
        var bonus_value = 0;
        // calculation rule for weapons
        if (this.isWeapon()) {
            if (this.wtype() != 'none') {
                base_value = swlcalc.data.power_rating['weapon'][this.rarity()].weapon_power_init;
                bonus_value = swlcalc.data.power_rating['weapon'][this.rarity()].weapon_power_per_level * (this.level() - 1);
            }
        }
        // calculation rule for talismans
        else {
            if (this.itemId() != 'none') {
                base_value = swlcalc.data.power_rating[this.group][this.rarity()][this.quality()].power_rating_init;
                bonus_value = swlcalc.data.power_rating[this.group][this.rarity()][this.quality()].power_rating_per_level * (this.level() - 1);
            }
        }
        var newValue = base_value + Math.round(bonus_value);
        // add '+' for display
        if (newValue !== 0) {
            newValue = '+' + newValue;
        }
        this.powerRating(newValue);
    };

    /**
     * Setter for #slot-img-icon (talisman)
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateTalismanImgIcon = function() {
        var item_url = 'assets/images/icons/talisman/' + $("#" + this.id + "-itemId option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    /**
     * Setter for #slot-img-icon (weapon)
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateWeaponImgIcon = function() {
        var item_url = 'assets/images/icons/weapon/' + $("#" + this.id + "-wtype option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    /**
     * Setter for #slot-img-rarity
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-rarity option:selected").val() + '-42x42.png';
        this.el.imgBorder.attr('src', rarity_url);
    };

    /**
     * Updates #slot-ilvl
     * -> Calculates item power for the slot's talisman (or weapon) and updates GUI with it
     */
    this.updateILvl = function() {
        var calculatedILvl = 0;
        if (!(this.itemId() == 'none' && this.wtype() == 'none')) {
            calculatedILvl = this.calculateILvl('talisman-or-weapon', this.rarity(), this.level());
            // Weapons are worth ~15% more Item Power than talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                calculatedILvl = calculatedILvl * 1.15;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawILvl = calculatedILvl;
      
        this.iLvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };
  
    /**
     * Updates #slot-bonus + #slot-bonus2
     */ 
    this.refreshItemBonus = function(combatPower, healingPower) {
        if (this.bonus() === undefined) return;
        var item = this.getItem();
        var statForComputation = 0;
        if (item.stat == 'Combat Power') {
            statForComputation = combatPower;
        } else if (item.stat == 'Healing Power') {
            statForComputation = healingPower;              
        }
        this.bonus(Math.round(item.coefficient * statForComputation));
      
        // particular case : items with 2 dynamic values
        // TODO/REFACTOR : to avoid code duplication
        if (this.bonus2() !== undefined) {
            item = this.getItem();
            statForComputation = 0;
            if (item.stat2 == 'Combat Power') {
                statForComputation = combatPower;
            } else if (item.stat2 == 'Healing Power') {
                statForComputation = healingPower;              
            }
            this.bonus2(Math.round(item.coefficient2 * statForComputation));
        }
    }

    /**********************************************************************************
     * Glyph functions |
     *                 V
     **********************************************************************************/
  
    /**
     * Getter/Setter for #slot-glyph
     */
    this.glyph = function() {
        if (arguments.length == 1) {
            this.el.glyph.val(arguments[0]);
        } else {
            return this.el.glyph.val();
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
        if (this.glyph() != 'none') {
            var baseValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_init;
            var bonusValue = swlcalc.data.glyph[this.glyphRarity()][this.glyphQuality()].rating_per_level * (this.glyphLevel() - 1);
            newValue = baseValue + Math.round(bonusValue);
            if (this.glyph() == 'critical-power') {
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
     * Setter for #slot-glyph-stat 
     */
    //TODO/REFACTOR : review the way it uses this.id
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateGlyphStatLabel = function() {
        var newStat = $("#" + this.id + "-glyph option:selected").val();
        this.el.glyphStat.html(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newStat]);
    };
  
    /**
     * Setter for #slot-glyph-img-icon 
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgIcon = function() {
        var rarity_url = 'assets/images/icons/glyph/' + $("#" + this.id + "-glyph option:selected").val() + '.png';
        this.el.glyphImgIcon.attr('src', rarity_url);
    };
  
    /**
     * Setter for #slot-glyph-img-border 
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-glyph-rarity option:selected").val() + '-42x42.png';
        this.el.glyphImgBorder.attr('src', rarity_url);
    };

    /**
     * Updates #slot-glyph-ilvl
     * -> Calculates item power for the slot's glyph and updates GUI with it
     */
    this.updateGlyphILvl = function() {
        var calculatedILvl = 0;
        if (this.glyph() != 'none') {
            calculatedILvl = this.calculateILvl('glyph', this.glyphRarity(), this.glyphLevel());
            // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
            // TODO/REFACTOR : could be done in  a better way
            if (this.isWeapon()) {
                calculatedILvl = calculatedILvl * 1.225;
            }
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawGlyphILvl = calculatedILvl;
      
        this.glyphILvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };

    /**********************************************************************************
     * Signet functions |
     *                  V
     **********************************************************************************/
    
    /**
     * Big mess here
     */
    //TODO/REFACTOR : move code and delete this function ?
    this.signet = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
     // } else if (this.id == 'weapon' || this.id == 'weapon2') {
     //     return swlcalc.data.suffixes.slot[this.signetId()];
        } else {
            //TODO/REFACTOR : patch to improve
            var idToUse = (this.id == 'weapon2' ? 'weapon' : this.id);
            return swlcalc.data.signets.slot[idToUse][this.signetId() - 1];
        }
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
        var signet = this.signet();
        if (signet === null) {
            return '';
        }
        var description = signet.description;
        if(signet.rarity) {
            description = description.replace('%s', this.determineSignetRarityValue(signet));
            description = description.replace('%d', this.determineSignetRarityValue(signet));
            if (Object.prototype.toString.call(signet.rarity) === '[object Array]') {
                description = description.replace('%0', this.determineSignetRarityValue(signet, 0));
                description = description.replace('%1', this.determineSignetRarityValue(signet, 1));
            }
        }
        if (signet.cooldown && signet.cooldown != '0') {
            description += ' ' + signet.cooldown + ' seconds cooldown.';
        }

        return description;
    };
  
    /**
     * Determines signet rarity value
     */
    //TODO/FEATURE : to use for signets like in tswcalc
    //TODO/REFACTOR : is it still accurate in swlcalc ?
    this.determineSignetRarityValue = function(signet, quality_index) {
        quality_index = typeof quality_index !== 'undefined' ? quality_index : -1;
        var rarity = this.signetRarity();
        switch (rarity) {
            case 'none':
                return 0;
            case 'standard':
                return quality_index == -1 ? signet.rarity.normal : signet.rarity[quality_index].normal;
            case 'superior':
                return quality_index == -1 ? signet.rarity.superior : signet.rarity[quality_index].superior;
            case 'epic':
                return quality_index == -1 ? signet.rarity.epic : signet.rarity[quality_index].epic;
            case 'mythic':
                return quality_index == -1 ? signet.rarity.mythic : signet.rarity[quality_index].mythic;
            case 'legendary':
                return quality_index == -1 ? signet.rarity.mythic : signet.rarity[quality_index].legendary;
            default:
                return 0;
        }
    };

    /**
     * Updates signet
     */
    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };
  
    /**
     * Updates signet icon
     */
    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetRarity = this.signetRarity();
        this.updateSignetIconImage(signet);
        this.updateSignetIconBorder(signetRarity);
    };

    /**
     * Updates #slot-signet-img-icon
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateSignetIconImage = function(signet) {
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var signet_icon_url = 'assets/images/icons/signet/' + pngName + '.png';
        this.el.signetImgIcon.attr('src', signet_icon_url);
    };
  
    /**
     * Getter/Setter for #slot-signet-img-border
     */
    //TODO/REFACTOR : change name/responsability according to the previous Getter/Setter functions ?
    this.updateSignetIconBorder = function(signetRarity) {
        var signet_rarity_url = 'assets/images/icons/rarity/' + signetRarity + '-42x42.png';
        this.el.signetImgBorder.attr('src', signet_rarity_url);
    };
  
    /**
     * Setter for #slot-signet-description
     */
    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Updates #slot-signet-ilvl
     * -> Calculates item power for the slot's signet and updates GUI with it
     */
    this.updateSignetILvl = function() {
        var calculatedILvl = 0;
        if (this.signetId() != 'none') {
            calculatedILvl = this.calculateILvl('signet', this.signetRarity(), this.signetLevel());
        }
        //register value before it is rounded (used for #slot-total-ilvl)
        this.rawSignetILvl = calculatedILvl;
      
        this.signetILvl(Math.round(calculatedILvl));
        this.refreshTotalILvl();
    };

    /**********************************************************************************
     * Other functions |
     *                 V
     **********************************************************************************/
  
    /**
     * Reset slot by setting default values for each select
     */
    this.reset = function() {
        this.el.wtype.prop("selectedIndex", 0);
        this.el.itemId.prop("selectedIndex", 0);
        this.el.rarity.prop("selectedIndex", 0);
        this.el.quality.prop("selectedIndex", 0);
        //this.el.itemId.change();

        this.el.glyph.prop("selectedIndex", 0);
        this.el.glyphRarity.prop("selectedIndex", 0);
        this.el.glyphQuality.prop("selectedIndex", 0);
        this.el.glyphLevel.prop("selectedIndex", 0);

        this.el.signetId.prop("selectedIndex", 0);
        this.el.signetRarity.prop("selectedIndex", 0);
        this.el.signetLevel.prop("selectedIndex", 0);

        this.el.itemId.change();
        this.el.wtype.change();
        this.el.rarity.change();
        this.el.glyph.change();
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
            rarity: this.rarity(),
            quality: this.quality(),
            level: this.level(),
            glyph: this.glyph(),
            glyph_rarity: this.glyphRarity(),
            glyph_quality: this.glyphQuality(),
            glyph_level: this.glyphLevel(),
            signet_id: this.signetId(),
            signet_rarity: this.signetRarity(),
            signet_level: this.signetLevel(),
        };
    };
  
    /**
     * Mapping function for import/export feature
     */
    this.mappedState = function() {
        var wmap = swlcalc.data.wtype_mapping.to_num;
        var gmap = swlcalc.data.glyph_stat_mapping.to_num;
        var rmap = swlcalc.data.rarity_mapping.to_num;
        var wqmap = swlcalc.data.weapon_quality_mapping.to_num;
        var gqmap = swlcalc.data.glyph_quality_mapping.to_num;
        var tqmap = swlcalc.data.talisman_quality_mapping.to_num;
        return {
            itemId: this.stripContent(this.itemId()),
            wtype: this.stripContent(this.wtype(), wmap),
            rarity: this.stripContent(this.rarity(), rmap),
            quality: this.isWeapon() ? this.stripContent(this.quality(), wqmap) : this.stripContent(this.quality(), tqmap),
            level: this.level(),
            glyph: this.stripContent(this.glyph(), gmap),
            glyph_rarity: this.stripContent(this.glyphRarity(), rmap),
            glyph_quality: this.stripContent(this.glyphQuality(), gqmap),
            glyph_level: this.glyphLevel(),
            signet_id: this.stripContent(this.signetId()),
            signet_rarity: this.stripContent(this.signetRarity(), rmap),
            signet_level: this.stripContent(this.signetLevel())
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
    this.calculateILvl = function(element, rarity, level) {
        var dataToUse = swlcalc.data.ilvl.gear[element].rarity[rarity];
        return dataToUse.ilvl_init + dataToUse.ilvl_per_level * (level - 1);
    }
};
