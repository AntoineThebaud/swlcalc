// buttonbar.dust
(function(){dust.register("buttonbar",body_0);function body_0(chk,ctx){return chk.write("<!-- [ Reset ]--><div class=\"btn-group\"><button id=\"btn-reset\" class=\"btn btn-danger\">Reset</button></div><!-- [ All Standard ][ All Superior ][ All Epic ][ All Mythic ][ All Legendary ] --><div class=\"btn-group\"><button id=\"btn-all-standard\" class=\"btn\">All <span class=\"color-standard\">Standard</span></button><button id=\"btn-all-superior\" class=\"btn\">All <span class=\"color-superior\">Superior</span></button><button id=\"btn-all-epic\" class=\"btn\">All <span class=\"color-epic\">Epic</span></button><button id=\"btn-all-mythic\" class=\"btn\">All <span class=\"color-mythic\">Mythic</span></button><button id=\"btn-all-legendary\" class=\"btn\">All <span class=\"color-legendary\">Legendary</span></button></div><!-- [ 100% DPS ][ 100% Healer ][ 100% Tank ] --><div class=\"btn-group\"><button id=\"btn-all-3\" class=\"btn\" disabled>100% DPS</button><button id=\"btn-all-2\" class=\"btn\" disabled>100% Healer</button><button id=\"btn-all-1\" class=\"btn\" disabled>100% Tank</button></div><!-- [ Export ] --><div class=\"btn-group\"><a class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Export <span class=\"caret\"></span></a><ul class=\"dropdown-menu\"><li><a class=\"export\" href=\"#open-export-modal\" data=\"url\" data-toggle=\"modal\">URL</a></li></ul></div><!-- Pop-up window on [ Export ] --><div id=\"open-export-modal\" class=\"modal hide fade\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h5>Export</h5></div><div class=\"modal-body\">Copy this and share:<br/><textarea id=\"export-textarea\" class=\"field span12\" wrap=\"off\" rows=\"10\"></textarea></div></div>");}return body_0;})();;// container.dust
(function(){dust.register("container",body_0);function body_0(chk,ctx){return chk.write("<div class=\"masthead\"><!--   <div class=\"btn-group pull-right\"><button class=\"btn btn-info\"><a href=\"https://github.com/AntoineThebaud/swlcalc\" target=\"_blank\" style=\"color: white;\">Github</a></button><button class=\"btn\"><a href=\"https://forums.funcom.com/c/secret-world-legends/orochi-labs\" target=\"_blank\">forum post</a></button><a href=\"http://dgamers.guildi.com/\" target=\"_blank\"><img class=\"dg-img\" src=\"assets/images/logos/DG.png\"/></a></div> --><div class=\"btn-group pull-right\"><a class=\"btn btn-info\" href=\"https://github.com/AntoineThebaud/swlcalc\" target=\"_blank\" style=\"color: white;\">Github</a><a class=\"btn\" href=\"https://forums.funcom.com/c/secret-world-legends/orochi-labs\" target=\"_blank\">forum post</a><a href=\"http://dgamers.guildi.com/\" target=\"_blank\"><img class=\"dg-img\" src=\"assets/images/logos/DG.png\"/></a></div><div class=\"div-logo\"><img class=\"logo-img\" src=\"assets/images/logos/swlcalc.png\" /><span class=\"logo-slogan lightgrey\">A gear planner for [SWL Logo].</span></div></div><hr><div class=\"row-fluid\"><div class=\"span12\">").partial("buttonbar",ctx,null).write("</div></div><hr/><div class=\"row-fluid\"><div class=\"span8\">").partial("slots",ctx,null).write("</div><div class=\"span4\">").partial("summary",ctx,null).write("</div></div><hr><div class=\"footer\"><p>swlcalc &copy; 2017-2018 Antoine THEBAUD. Version <a href=\"https://github.com/AntoineThebaud/swlcalc/tree/0.1.0\" target=\"_new\">0.1.0</a>. Hosted on Github Pages.</p></div>");}return body_0;})();;// levelselect.dust
(function(){dust.register("levelselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-level\" title=\"Please select level\"><option value=\"20\">20</option><!--<option value=\"19\">19</option><option value=\"18\">18</option><option value=\"17\">17</option><option value=\"16\">16</option><option value=\"15\">15</option><option value=\"14\">14</option><option value=\"13\">13</option><option value=\"12\">12</option><option value=\"11\">11</option><option value=\"10\">10</option><option value=\"9\">9</option><option value=\"8\">8</option><option value=\"7\">7</option><option value=\"6\">6</option><option value=\"5\">5</option><option value=\"4\">4</option><option value=\"3\">3</option><option value=\"2\">2</option>--><option value=\"1\">1</option></select>");}return body_0;})();;// qualityselect.dust
(function(){dust.register("qualityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-quality\" title=\"Please select quality\"><option value=\"").reference(ctx.get("pip1_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip1_n"),ctx,"h").write("</option><option value=\"").reference(ctx.get("pip2_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip2_n"),ctx,"h").write("</option><option value=\"").reference(ctx.get("pip3_v"),ctx,"h").write("\" class=\"pips\">").reference(ctx.get("pip3_n"),ctx,"h").write("</option></select>");}return body_0;})();;// rarityselect.dust
(function(){dust.register("rarityselect",body_0);function body_0(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").reference(ctx.get("id_suffix"),ctx,"h").write("-rarity\" title=\"Please select rarity\"><option value=\"standard\" class=\"color-standard\">Standard</option><option value=\"superior\" class=\"color-superior\">Superior</option><option value=\"epic\" class=\"color-epic\">Epic</option><option value=\"mythic\" class=\"color-mythic\">Mythic</option><option value=\"legendary\" class=\"color-legendary\">Legendary</option></select>");}return body_0;})();;// slots.dust
(function(){dust.register("slots",body_0);function body_0(chk,ctx){return chk.section(ctx.get("slots"),ctx,{"else":body_1,"block":body_2},null);}function body_1(chk,ctx){return chk.write("<p>No slots found (Bug)!</p>");}function body_2(chk,ctx){return chk.write("<div id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-slot\" class=\"slot\"><table class=\"table-title\"><tr><td><span><h4 class=\"slot\">").reference(ctx.get("name"),ctx,"h").write("</h4><h4 id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-name\" class=\"slot-name\"></h4><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-name-warning\" class=\"label label-important\"><a class=\"slot-warning\" href=\"#\" data-toggle=\"tooltip\"><i class=\"icon-warning-sign icon-white\"></i></a></span></span></td><td class=\"slot-item-power\">Item Power : <span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-total-item-power\">0</span></td></tr></table><table class=\"table table-slots\"><tr>").exists(ctx.get("is_weapon"),ctx,{"else":body_3,"block":body_4},null).write("<td class=\"rarity-label\"><strong>Rarity :</strong></td><td class=\"rarity-select\">").partial("rarityselect",ctx,{"id_suffix":""}).write("</td>").exists(ctx.get("is_weapon"),ctx,{"else":body_5,"block":body_6},null).write("</tr><tr class=\"tr-with-icon\"><td class=\"item-img\"><a href=\"#\" class=\"item-tooltip\" data-toggle=\"tooltip\" title=\"Item for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-img-rarity\" class=\"item-icon-border\" src=\"\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-img-icon\" class=\"item-icon\" src=\"\" alt=\"Item\"/></a></td><td class=\"item-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_7,"block":body_8},null).write("</td><td class=\"quality-label\"><strong>Quality :</strong></td><td class=\"quality-select\">").exists(ctx.get("is_weapon"),ctx,{"else":body_9,"block":body_10},null).write("</td><td class=\"stat-value\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-power-value\">0</span>").exists(ctx.get("is_weapon"),ctx,{"else":body_11,"block":body_12},null).write("</td></tr><tr><td class=\"filler\"></td><td class=\"filler\"></td><td class=\"level-label\"><strong>Level :</strong></td><td class=\"level-select\">").partial("levelselect",ctx,{"id_suffix":""}).write("</td><td class=\"item-power\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-item-power\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyphs\" class=\"table table-slots\"><tr><td class=\"glyph-title\" colspan=\"2\">Glyph</td><td class=\"rarity-label\"><strong>Rarity :</strong></td><td class=\"rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"-glyph"}).write("</td><td class=\"filler\"></td></tr><tr class=\"tr-with-icon\"><td class=\"glyph-img\"><a href=\"#\" class=\"glyph-tooltip\" data-toggle=\"tooltip\" title=\"Glyph for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose which rarity, quality, level and stats it will have in your build.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-rarity\" class=\"glyph-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-img-icon\" class=\"glyph-icon\" src=\"assets/images/icons/glyph/none.png\" alt=\"Glyph\"/></a></td><td class=\"glyph-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph\" title=\"Please select stat\"><option value=\"none\" selected=\"true\">None</option><option value=\"hit-rating\">Accurate</option><option value=\"critical-rating\">Fierce</option><option value=\"critical-power\">Devastating</option><option value=\"evade-rating\">Elusive</option><option value=\"defense-rating\">Stalwart</option></select></td><td class=\"quality-label\"><strong>Quality :</strong></td><td class=\"quality-select\">").partial("qualityselect",ctx,{"id_suffix":"-glyph","pip1_v":"crude","pip1_n":"Crude","pip2_v":"simple","pip2_n":"Simple","pip3_v":"intricate","pip3_n":"Intricate"}).write("</td><td class=\"stat-value\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-value\">0</span><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-stat\"></span></td></tr><tr><td class=\"filler\"></td><td class=\"filler\"></td><td class=\"level-label\"><strong>Level :</strong></td><td class=\"level-select\">").partial("levelselect",ctx,{"id_suffix":"-glyph"}).write("</td><td class=\"item-power\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-glyph-item-power\">0</span></td></tr></table><table id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signets\" class=\"table table-slots\">").exists(ctx.get("is_weapon"),ctx,{"else":body_13,"block":body_14},null).write("</table></div>");}function body_3(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Talisman</td>");}function body_4(chk,ctx){return chk.write("<td class=\"item-title\" colspan=\"2\">Weapon</td>");}function body_5(chk,ctx){return chk.write("<td class=\"filler\"></td>");}function body_6(chk,ctx){return chk.write("<td><a id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-swap-weapon\" class=\"btn btn-success swap-weapon\"><i class=\"icon-retweet icon-white icon-align-left\"></i>    Swap weapon</a></td>");}function body_7(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-itemId\" title=\"Please select item\"></select>");}function body_8(chk,ctx){return chk.write("<select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-wtype\" title=\"Please select weapon type\"><option value=\"none\" selected=\"true\">None</option><option value=\"blade\" selected=\"true\">Blade</option><option value=\"hammer\">Hammer</option><option value=\"fist\">Fist Weapon</option><option value=\"blood\">Blood Magic Focus</option><option value=\"chaos\">Chaos Focus</option><option value=\"elementalism\">Elementalism Focus</option><option value=\"shotgun\">Shotgun</option><option value=\"pistols\">Pistols</option><option value=\"assault-rifle\">Assault Rifle</option></select>");}function body_9(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"","pip1_v":"faded","pip1_n":"Faded","pip2_v":"luminous","pip2_n":"Luminous","pip3_v":"radiant","pip3_n":"Radiant"});}function body_10(chk,ctx){return chk.partial("qualityselect",ctx,{"id_suffix":"","pip1_v":"mkI","pip1_n":"MK I","pip2_v":"mkII","pip2_n":"MK II","pip3_v":"mkIII","pip3_n":"MK III"});}function body_11(chk,ctx){return chk.write("<span> Power Rating</span>");}function body_12(chk,ctx){return chk.write("<span> Weapon Power</span>");}function body_13(chk,ctx){return chk.write("<tr><td class=\"signet-title\" colspan=\"2\">Signet</td><td class=\"rarity-label\"><strong>Rarity :</strong></td><td class=\"rarity-select\">").partial("rarityselect",ctx,{"id_suffix":"-signet"}).write("</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\"></td></tr><tr class=\"tr-with-icon\"><td class=\"signet-img\"><a href=\"#\" class=\"signet-tooltip\" data-toggle=\"tooltip\" title=\"Signet for the ").reference(ctx.get("name"),ctx,"h").write(" slot. Choose the rarity and type of signet.\"><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-rarity\" class=\"signet-icon-border\" src=\"assets/images/icons/rarity/none-42x42.png\"/><img id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-img-icon\" class=\"signet-icon\" src=\"assets/images/icons/signet/none.png\" alt=\"Signet\"/></a></td><td class=\"signet-select\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet\" title=\"Please select signet\"></select></td><td class=\"level-label\"><strong>Level :</strong></td><td class=\"level-select\">").partial("levelselect",ctx,{"id_suffix":"-signet"}).write("</td><td class=\"item-power\"><span id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-item-power\">0</span></td></tr>");}function body_14(chk,ctx){return chk.write("<tr><td class=\"item-title\" colspan=\"2\">Suffixe</td><td id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet-description\" class=\"item-description\" colspan=\"3\" rowspan=\"2\"></td><tr><td class=\"item-select\" colspan=\"2\"><select id=\"").reference(ctx.get("id_prefix"),ctx,"h").write("-signet\" title=\"Please select signet\"></select></td></tr>");}return body_0;})();;// summary.dust
(function(){dust.register("summary",body_0);function body_0(chk,ctx){return chk.write("<div id=\"summary\"><div id=\"table-primary\"><h4>Gear stats</h4><table class=\"table table-stats\"><thead><th>Primary Stats</th><th>Value</th></thead><tbody><tr><td class=\"statname\">Item Power</td><td id=\"stat-item-power\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Power Rating</td><td id=\"stat-power-rating\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Weapon Power</td><td id=\"stat-weapon-power\" class=\"stat-value\">0</td></tr><!--below stats are not functionnal yet--><tr><td class=\"statname not-functionnal\">Attack Rating</td><td id=\"stat-attack-rating\" class=\"stat-value not-functionnal\">0</td></tr><tr><td class=\"statname not-functionnal\">Heal Rating</td><td id=\"stat-heal-rating\" class=\"stat-value not-functionnal\">0</td></tr><tr><td class=\"statname not-functionnal\">Hitpoints</td><td id=\"stat-hitpoints\" class=\"stat-value not-functionnal\">3300</td></tr><tr><td class=\"statname not-functionnal\">Combat Power</td><td id=\"stat-combat-power\" class=\"stat-value not-functionnal\">0</td></tr><tr><td class=\"statname not-functionnal\">Healing Power</td><td id=\"stat-healing-power\" class=\"stat-value not-functionnal\">0</td></tr></tbody></table></div><div id=\"table-offensive\"><table class=\"table table-stats\"><thead><th>Offensive Stats</th><th>Value</th></thead><tbody><tr><td class=\"statname\">Critical Rating</td><td id=\"stat-critical-rating\" class=\"stat-value\">0 %</td></tr><tr><td class=\"statname\">Critical Chance %</td><td id=\"stat-critical-chance\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Critical Power Rating</td><td id=\"stat-critical-power\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Critical Power %</td><td id=\"stat-critical-power-percentage\" class=\"stat-value\">0 %</td></tr><tr><td class=\"statname\">Hit Rating</td><td id=\"stat-hit-rating\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Glance Reduction %</td><td id=\"stat-glance-reduction\" class=\"stat-value\">0 %</td></tr></tbody></table></div><div id=\"table-defensive\"><table class=\"table table-stats\"><thead><th>Defensive Stats</th><th>Value</th></thead><tbody><tr><td class=\"statname\">Defense Rating</td><td id=\"stat-defense-rating\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Glance Chance %</td><td id=\"stat-glance-chance\" class=\"stat-value\">0 %</td></tr><tr><td class=\"statname\">Evade Rating</td><td id=\"stat-evade-rating\" class=\"stat-value\">0</td></tr><tr><td class=\"statname\">Evade Chance %</td><td id=\"stat-evade-chance\" class=\"stat-value\">0 %</td></tr><!--below stats are not functionnal yet--><tr><td class=\"statname not-functionnal\">Physical Protection</td><td id=\"stat-physical-protection\" class=\"stat-value not-functionnal\">249</td></tr><tr><td class=\"statname not-functionnal\">Magical Protection</td><td id=\"stat-magical-protection\" class=\"stat-value not-functionnal\">249</td></tr></tbody></table></div></div>");}return body_0;})();;$(document).ready(function() {
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
     * TODO/REFACTOR : description missing.
     */
    var startSelectHandler = function(slot) {
        swlcalc.select[slot.id_prefix] = new swlcalc.select.SelectHandler(slot);
        swlcalc.select[slot.id_prefix].initiate();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};

swlcalc.summary = function() {

    //TODO/REFACTOR : remove ? currently needed for compatibility
    var init = function() {};

    var updateAllStats = function() {
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
        updateGlyphValues();
        updatePowerValues();
        updateURL();
    };

   var updateURL = function(event) {
        window.location.hash = swlcalc.export.createExportUrl();
    };

    var collectAllStats = function() {
        return {
            primary: collectPrimaryStats(),
            offensive_defensive: collectOffensiveDefensiveStats()
        };
    };

    var updatePrimaryStats = function() {
        var sums = collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    var updateOnePrimaryStat = function(stat, value) {
        $('#stat-' + stat).text(value);
    };

    var collectPrimaryStats = function() {
        var sums = {
            'combat-power': 0,
            'healing-power': 0,
            'weapon-power': 0, //TODO/REFACTOR : weapon power in the summary is the same as weapon power shown in the weapon slot
            //TODO/FEATURE : HP, AR & HR disabled for the moment (as long as power rating conversion is not implemented)
            // 'hitpoints': 7512,     // = 3300 (base HP at lvl 50) + 2997 (amount brought by passives skills) + 1215 (capstone points)
            // 'attack-rating': 4322, // = 2000 (base stat at lvl 50) + 1512 (amount brought by passives skills) + 810 (capstone points)
            // 'heal-rating': 4310,   // = 2000 (base stat at lvl 50) + 1500 (amount brought by passives skills) + 810 (capstone points)
            'power-rating': 0,
            'item-power': 0
        };

        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                if (slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                } else if (slot.isWeapon() && slot.wtype() != 'none') {
                    sums['weapon-power'] = swlcalc.data.custom_gear_data.slot[slot.group].rarity[slot.rarity()].level[slot.level()];
                } else if (!slot.isWeapon() && slot.itemId() != 'none') {
                    sums['power-rating'] += swlcalc.data.custom_gear_data.slot[slot.group].rarity[slot.rarity()].quality[slot.quality()].level[slot.level()];
                }
                //TODO/FEATURE : add conversion to AR/HR/HP based on ratio selected
                sums['item-power'] += slot.itemPower();
            }
        }
        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        sums['healing-power'] = calculateHealingPower(sums['heal-rating'], sums['weapon-power']);
        //TODO/REFACTOR : refactor (it's weird)
        sums['item-power'] = calculateAverageItemPower(sums['item-power']);
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

    var updateOffensiveDefensiveStats = function() {
        var sums = collectOffensiveDefensiveStats();
        updateStats(sums);
    };

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
            'evade-chance': 0,                // base percentage
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
                sums[slot.glyph()] += slot.glyphValue();
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

    //TODO/REFACTOR if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO/REFACTOR should be updated independently for each slot in swlcalc-slots.js
    var updateGlyphValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updateGlyphValue();
            }
        }
    };

    //TODO/REFACTOR if (swlcalc.slots.hasSlot) is weird, find a better solution
    //TODO/REFACTOR refactor : should be updated independently for each slot in swlcalc-slots.js
    var updatePowerValues = function() {
        for (var slotId in swlcalc.slots) {
            if (swlcalc.slots.hasSlot(slotId)) {
                var slot = swlcalc.slots[slotId];
                slot.updatePowerValue();
            }
        }
    }

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

    var calculateAverageItemPower = function(sum_item_power) {
        return Math.round(sum_item_power / 8);
    }

    var updateStats = function(sums) {
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString() + " %" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0 %" : "0");
                }
            }
        }
    };

    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage'
            || statName == 'critical-chance'
            || statName == 'glance-reduction'
            || statName == 'evade-chance'
            || statName == 'glance-chance';
    };

    var oPublic = {
        init: init,
        calculateCriticalChance: calculateCriticalChance,
        calculateCriticalPowerPercentage: calculateCriticalPowerPercentage,
        calculateEvadeChance: calculateEvadeChance,
        calculateCombatPower: calculateCombatPower,
        collectPrimaryStats: collectPrimaryStats,
        collectOffensiveDefensiveStats: collectOffensiveDefensiveStats,
        collectAllStats: collectAllStats,
        updateAllStats: updateAllStats
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};
swlcalc.select = swlcalc.select || {};

swlcalc.select.SelectHandler = function SelectHandler(slot) {
    var self = this;
    var slotObj = swlcalc.slots[slot.id_prefix];

    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
        this.addItemsToSelect();
    };

    this.bindEvents = function() {
        if (slotObj.isWeapon()) {
            slotObj.el.wtype.change(this.handleWtypeChange);
        } else {
            slotObj.el.itemId.change(this.handleItemChange);
        }
        slotObj.el.rarity.change(this.handleRarityChange);
        slotObj.el.quality.change(swlcalc.summary.updateAllStats);
        slotObj.el.level.change(this.handleLevelChange);

        slotObj.el.glyph.change(this.handleGlyphChange);
        slotObj.el.glyphRarity.change(this.handleGlyphRarityChange);
        slotObj.el.glyphQuality.change(this.handleGlyphQualityChange);
        slotObj.el.glyphLevel.change(this.handleGlyphLevelChange);

        slotObj.el.signetId.change(this.handleSignetChange);
        slotObj.el.signetRarity.change(this.handleSignetRarityChange);
        slotObj.el.signetLevel.change(this.handleSignetLevelChange);
    };

    this.addItemsToSelect = function() {
        //TODO/REFACTOR : shall be done in a better way
        //skip this function for the weapons (their dropdown is already filled)
        if (slot.group == 'weapon') return;

        slotObj.el.itemId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        //TODO/REFACTOR : possible confusion between slot.group (major, minor..) and slot.id_prefix (ring, neck..)
        var items = swlcalc.data.items.slot[slot.id_prefix];

        items.forEach(function(item) {
            slotObj.el.itemId.append($('<option>', {
                value: item.id,
                text: item.name
            }));
        });
    };

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

    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/signet/none.png';
        var signet_rarity_url = 'assets/images/icons/rarity/none-42x42.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    /**
     * Event handlers : Item |
     *                       V
     */

    this.handleItemChange = function(event) {
        slotObj.updateTalismanImgIcon();
        swlcalc.summary.updateAllStats();
    };

    this.handleWtypeChange = function(event) {
        var wtype = $(this).val();
        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
        slotObj.updateWeaponImgIcon();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Triggered when the value of a rarity select is changed.
     * Triggers color change for the rarity select that sent the event.
     * Triggers color change for the related item image border.
     * Triggers choices list update for the select level of the same slot.
     */
    //TODO/REFACTOR : review the way it uses slotObj.id
    this.handleRarityChange = function(event) {
        var newRarity = $("#" + slotObj.id + "-rarity option:selected").val();

        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-rarity option:selected").attr('class'));

        slotObj.updateImgBorder();

        slotObj.el.level.empty();
        var minLvl = 1;
        var maxLvl = swlcalc.data.rarity_mapping.to_max_level[newRarity];
        // TODO/FEATURE : the for loop to generate all the values between min(1) & max(20/25/30/35/70) is disabled
        // as long as intermediary values are not referenced. Thus only min & max are displayed for the moment
        // for (i = maxLvl; i >= minLvl ; i--) {
        //    slotObj.el.level.append($('<option>', {
        //        value: i,
        //        text: i
        //    }));
        // }
        slotObj.el.level.append($('<option>', {value: maxLvl, text: maxLvl}));
        slotObj.el.level.append($('<option>', {value: minLvl, text: minLvl}));

        slotObj.updateItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleLevelChange = function(event) {
        slotObj.updateItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    /**
     * Event handlers : Glyph |
     *                        V
     */

    this.handleGlyphChange = function(event) {
        slotObj.updateGlyphStatLabel();
        slotObj.updateGlyphImgIcon();
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-glyph-rarity option:selected").attr('class'));
        slotObj.updateGlyphImgBorder();
        slotObj.updateGlyphItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphQualityChange = function(event) {
        swlcalc.summary.updateAllStats();
    };

    this.handleGlyphLevelChange = function(event) {
        slotObj.updateGlyphItemPower();
        slotObj.updateTotalItemPower();
        swlcalc.summary.updateAllStats();
    }

    /**
     * Event handlers : Signet |
     *                         V
     */

    this.handleSignetChange = function(event) {
        slotObj.updateSignet();
        //weapon don't have signet item power
        if (!slotObj.isWeapon()) {
            slotObj.updateSignetItemPower();
            slotObj.updateTotalItemPower();
        }
        swlcalc.summary.updateAllStats();
    };

    this.handleSignetRarityChange = function(event) {
        //self.updateTextColor(event.target);
        //TODO/REFACTOR : to reuse updateTextColor
        $(event.target).attr("class", $("#" + slotObj.id + "-signet-rarity option:selected").attr('class'));
        self.handleSignetChange(event);
    };

    this.handleSignetLevelChange = function(event) {
        slotObj.updateSignetItemPower();
        slotObj.updateTotalItemPower();
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

    var oPublic = {
        init: init
    };

    return oPublic;
}();

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
            btn_all_dps: $('#btn-all-3'),
            btn_all_healer: $('#btn-all-2'),
            btn_all_tank: $('#btn-all-1'),
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

    var bindEvents = function() {
        el.btn_all_standard.on('click', setRarityOnAllSlots);
        el.btn_all_superior.on('click', setRarityOnAllSlots);
        el.btn_all_epic.on('click', setRarityOnAllSlots);
        el.btn_all_mythic.on('click', setRarityOnAllSlots);
        el.btn_all_legendary.on('click', setRarityOnAllSlots);
        el.btn_reset.on('click', resetAllSlots);
    };

    var setRarityOnAllSlots = function(event) {
        var newRarity = extractRarity(event);
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

    var resetAllSlots = function(event) {
        swlcalc.slots.reset();
        swlcalc.summary.updateAllStats();
    };

    var extractRarity = function (event) {
        return event.target.id.split('-')[2];
    };

    var extractRole = function(event) {
        return event.target.id.split('-')[2];
    };

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
    var exportType = 0;
    var slotState = {};

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

    var bindEvents = function() {
        el.export_btn.on('click', function(event) {
            exportType = $(event.target).attr('data');
            startExport();
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

    var startExport = function() {
        //TODO/FEATURE : put back bbcode export feature ?
        startExportUrl();
    };

    var startExportUrl = function() {
        collectAllSlotStates();
        var url = createExportUrl();
        el.export_textarea.attr('rows', '1');
        el.export_textarea.html(location.origin + location.pathname + '#' + url);
    };

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

    var collectAllSlotStates = function() {
        slotState = swlcalc.slots.mappedState();
    };

    var oPublic = {
        init: init,
        createSlotUrl: createSlotUrl,
        createExportUrl: createExportUrl,
        collectAllSlotStates: collectAllSlotStates,
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
    * load the slot informations from the hash and update GUI with it
    * TODO/REFACTOR maybe there is a better way to update GUI than simulating change() ?
    */
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

    var changeSignet = function(slotId, rarity, id, level) {
        var slotObj = swlcalc.slots[slotId];
        slotObj.signetRarity(rarity);
        slotObj.signetId(id);
        slotObj.signetLevel(level);
        slotObj.el.signetId.change();
        slotObj.el.signetRarity.change();
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();
;var swlcalc = swlcalc || {};

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

    var drawPrimaryWeapon = function() {
        swlcalc.slots.weapon2.sheathWeapon();
        swlcalc.slots.weapon.weaponDrawn = true;
    };

    var length = function() {
        return swlcalc.data.template_data.slots.length;
    };

    var indices = function() {
        return ['head', 'weapon', 'weapon2', 'finger', 'neck', 'wrist', 'luck', 'waist', 'occult'];
    };

    var hasSlot = function(slot) {
        return this.hasOwnProperty(slot) && $.inArray(slot, indices()) != -1;
    };

    var reset = function() {
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                this[slotId].reset();
            }
        }
    };

    var state = function() {
        var slotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                slotStates[slotId] = this[slotId].state();
            }
        }
        return slotStates;
    };

    var mappedState = function() {
        var mappedSlotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                mappedSlotStates[slotId] = this[slotId].mappedState();
            }
        }
        return mappedSlotStates;
    };

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

    this.el = {
        div: $('#' + this.id + '-slot'),
        name: $('#' + this.id + '-name'),
        totalItemPower: $('#' + this.id + '-total-item-power'),
        itemId: $('#' + this.id + '-itemId'),
        wtype: $('#' + this.id + '-wtype'),
        rarity: $('#' + this.id + '-rarity'),
        quality: $('#' + this.id + '-quality'),
        level: $('#' + this.id + '-level'),
        powerValue: $('#' + this.id + '-power-value'),
        itemPower: $('#' + this.id + '-item-power'),
        imgIcon: $('#' + this.id + '-img-icon'),
        imgBorder: $('#' + this.id + '-img-rarity'),
        glyph: $('#' + this.id + '-glyph'),
        glyphRarity: $('#' + this.id + '-glyph-rarity'),
        glyphQuality: $('#' + this.id + '-glyph-quality'),
        glyphLevel: $('#' + this.id + '-glyph-level'),
        glyphValue: $('#' + this.id + '-glyph-value'),
        glyphStat: $('#' + this.id + '-glyph-stat'),
        glyphImgIcon: $('#' + this.id + '-glyph-img-icon'),
        glyphImgBorder: $('#' + this.id + '-glyph-img-rarity'),
        glyphItemPower: $('#' + this.id + '-glyph-item-power'),
        signetId: $('#' + this.id + '-signet'),
        signetRarity: $('#' + this.id + '-signet-rarity'),
        signetLevel: $('#' + this.id + '-signet-level'),
        signetImgIcon: $('#' + this.id + '-signet-img-icon'),
        signetImgBorder: $('#' + this.id + '-signet-img-rarity'),
        signetDescription: $('#' + this.id + '-signet-description'),
        signetItemPower: $('#' + this.id + '-signet-item-power'),
        nameWarning: $('#' + this.id + '-name-warning'),
    };

    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
    };

    this.itemPower = function() {
        if (arguments.length == 1) {
            this.el.totalItemPower.html(arguments[0]);
        } else {
            return parseInt(this.el.totalItemPower.html());
        }
    };


    /**
     * Calculate item power for the whole slot (talisman/weapon + glyph + signet) and updates GUI with it
     * TODO/REFACTOR : code duplication with updateItemPower, updateGlyphItemPower and updateSignetItemPower : should reuse these individual item power calculations
     */
    this.updateTotalItemPower = function() {
        var itemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_init,
                                                swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_per_level,
                                                (this.level() - 1));
        // Weapons are worth ~15% more Item Power than talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            itemPower = itemPower * 1.15;
        }

        var glyphItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_init,
                                                     swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_per_level,
                                                     (this.glyphLevel() - 1));
        // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            glyphItemPower = glyphItemPower * 1.225;
        }

        //weapons dont have signetItemPower
        var signetItemPower = 0;
        if (!this.isWeapon()) {
            var signetItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_per_level,
                                                          (this.signetLevel() - 1));
        }
        this.itemPower(Math.round(itemPower + glyphItemPower + signetItemPower));
    };

    /**
     * Weapon functions |
     *                  V
     */

    this.isWeapon = function() {
        return this.group == 'weapon';
    };

    this.sheathWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = false;
            this.el.div.hide();
        }
    };

    this.drawWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = true;
            this.el.div.show();
        }
    };

    this.wtype = function() {
        if (arguments.length == 1) {
            this.el.wtype.val(arguments[0]);
        } else {
            return this.isWeapon() ? this.el.wtype.val() : 'none';
        }
    };

    /**
     * Item functions |
     *                V
     */

    this.item = function() {
        var itemId = this.itemId()
        var item = swlcalc.data.items.find(function(item) {
            return item.id == itemId;
        });
        if (item) {
            return item;
        }
    }

    this.itemId = function() {
        if (arguments.length == 1) {
            this.el.itemId.val(arguments[0]);
        } else {
            return this.group != 'weapon' ? this.el.itemId.val() : 'none';
        }
    };

    this.rarity = function() {
        if (arguments.length == 1) {
            this.el.rarity.val(arguments[0]);
        } else {
            return this.el.rarity.val();
        }
    };

    this.quality = function() {
        if (arguments.length == 1) {
            this.el.quality.val(arguments[0]);
        } else {
            return this.el.quality.val();
        }
    };

    this.level = function() {
        if (arguments.length == 1) {
            this.el.level.val(arguments[0]);
        } else {
            return this.el.level.val();
        }
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateTalismanImgIcon = function() {
        var item_url = 'assets/images/icons/talisman/' + $("#" + this.id + "-itemId option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateWeaponImgIcon = function() {
        var item_url = 'assets/images/icons/weapon/' + $("#" + this.id + "-wtype option:selected").text() + '.png';
        this.el.imgIcon.attr('src', item_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-rarity option:selected").val() + '-42x42.png';
        this.el.imgBorder.attr('src', rarity_url);
    };

    this.powerValue = function() {
        if (this.isWeapon()) {
            if (this.wtype() == 'none') {
                return 0;
            } else {
                return swlcalc.data.custom_gear_data.slot[this.group].rarity[this.rarity()].level[this.level()];
            }
        } else {
            if (this.itemId() == 'none') {
                return 0;
            } else {
                return swlcalc.data.custom_gear_data.slot[this.group].rarity[this.rarity()].quality[this.quality()].level[this.level()];
            }
        }
    };

    this.updatePowerValue = function() {
        var powerValueDisplay = this.powerValue();
        if (this.powerValue() !== 0) {
            powerValueDisplay = '+' + powerValueDisplay;
        }
        this.el.powerValue.html(powerValueDisplay);
    };

    /**
     * Calculate item power for the slot's item (talisman or weapon) and updates GUI with it
     * => calls calculateItemPower() function with item parameters
     * TODO/REFACTOR : rename function ?
     */
    this.updateItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['talisman-or-weapon'].rarity[this.rarity()].item_power_per_level,
                                                          (this.level() - 1));
        // Weapons are worth ~15% more Item Power than talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            calculatedItemPower = calculatedItemPower * 1.15;
        }
        this.el.itemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Glyph functions |
     *                 V
     */

    this.glyph = function() {
        if (arguments.length == 1) {
            this.el.glyph.val(arguments[0]);
        } else {
            return this.el.glyph.val();
        }
    };

    this.glyphRarity = function() {
        if (arguments.length == 1) {
            this.el.glyphRarity.val(arguments[0]);
        } else {
            return this.el.glyphRarity.val();
        }
    };

    this.glyphQuality = function() {
        if (arguments.length == 1) {
            this.el.glyphQuality.val(arguments[0]);
        } else {
            return this.el.glyphQuality.val();
        }
    };

    this.glyphLevel = function() {
        if (arguments.length == 1) {
            this.el.glyphLevel.val(arguments[0]);
        } else {
            return this.el.glyphLevel.val();
        }
    };

    this.glyphValue = function() {
        if (this.glyph() == 'none') {
            return 0;
        }
        // Glyph value depends on the rarity-quality-level trio, neither the slot nor the stat are taken into account (while they were in TSW).
        // /!\ exception for crit power glyphs that give 97.3% of the value of other glyphs)
        var glyphValue = swlcalc.data.glyph_data.rarity[this.glyphRarity()].quality[this.glyphQuality()].level[this.glyphLevel()];
        if (this.glyph() == 'critical-power') {
            glyphValue = 0.973 * glyphValue;
        }
        return glyphValue;
    };

    this.updateGlyphValue = function() {
        this.el.glyphValue.html(this.glyphValue() !== 0 ? '+' + this.glyphValue().toFixed(0) : 0);
    };

    this.updateGlyphStatLabel = function() {
        var newStat = $("#" + this.id + "-glyph option:selected").val();
        this.el.glyphStat.html(' ' + swlcalc.data.glyph_stat_mapping.to_stat_GUIformat[newStat]);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgIcon = function() {
        var rarity_url = 'assets/images/icons/glyph/' + $("#" + this.id + "-glyph option:selected").val() + '.png';
        this.el.glyphImgIcon.attr('src', rarity_url);
    };

    //TODO/REFACTOR : review the way it uses this.id
    this.updateGlyphImgBorder = function() {
        var rarity_url = 'assets/images/icons/rarity/' + $("#" + this.id + "-glyph-rarity option:selected").val() + '-42x42.png';
        this.el.glyphImgBorder.attr('src', rarity_url);
    };

    /**
     * Calculate item power for the slot's glyph and updates GUI with it
     * => calls calculateItemPower() function with glyph parameters
     * TODO/REFACTOR : rename function ?
     */
    this.updateGlyphItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['glyph'].rarity[this.glyphRarity()].item_power_per_level,
                                                          (this.glyphLevel() - 1));
        // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans
        // TODO/REFACTOR : could be done in  a better way
        if (this.isWeapon()) {
            calculatedItemPower = calculatedItemPower * 1.225;
        }
        this.el.glyphItemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Signet functions |
     *                  V
     */

    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    this.signetRarity = function() {
        if (arguments.length == 1) {
            this.el.signetRarity.val(arguments[0]);
        } else {
            return this.el.signetRarity.val();
        }
    };

    this.signetLevel = function() {
        if (arguments.length == 1) {
            this.el.signetLevel.val(arguments[0]);
        } else {
            return this.el.signetLevel.val();
        }
    };

    //TODO/REFACTOR : move code and delete this function ?
    this.signet = function() {
        if (this.signetId() == 'none' || this.signetId() == undefined || this.signetId() == null) {
            return swlcalc.data.signets.noneSignet;
//         } else if (this.id == 'weapon' || this.id == 'weapon2') {
//             return swlcalc.data.suffixes.slot[this.signetId()];
        } else {
            return swlcalc.data.signets.slot[this.id][this.signetId() - 1];
        }
    };

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

    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };

    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetRarity = this.signetRarity();
        this.updateSignetIconImage(signet);
        this.updateSignetIconBorder(signetRarity);
    };

    this.updateSignetIconBorder = function(signetRarity) {
        var signet_rarity_url = 'assets/images/icons/rarity/' + signetRarity + '-42x42.png';
        this.el.signetImgBorder.attr('src', signet_rarity_url);
    };

    this.updateSignetIconImage = function(signet) {
        var pngName = (signet == swlcalc.data.signets.noneSignet ? 'none' : this.id)
        var signet_icon_url = 'assets/images/icons/signet/' + pngName + '.png';
        this.el.signetImgIcon.attr('src', signet_icon_url);
    };

    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    /**
     * Calculate item power for the slot's signet and updates GUI with it
     * => calls calculateItemPower() function with signet parameters
     */
    this.updateSignetItemPower = function() {
        var calculatedItemPower = this.calculateItemPower(swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_init,
                                                          swlcalc.data.upgrading_data.gear['signet'].rarity[this.signetRarity()].item_power_per_level,
                                                          (this.signetLevel() - 1));
        this.el.signetItemPower.html(Math.round(calculatedItemPower));
    };

    /**
     * Other functions |
     *                 V
     */

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
     * Calculate item power for the given item (talisman, weapon, glyph or signet)
     */
    this.calculateItemPower = function(itemPowerInit, itemPowerPerLevel, levelMultiplier) {
        return itemPowerInit + itemPowerPerLevel * levelMultiplier;
    }
};
