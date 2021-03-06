var swlcalc = swlcalc || {};

/**
 * Utility functions
 */
swlcalc.util = function() {

    var capitalize = function(string) {
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

    var isPrimaryStat = function(stat) {
        return swlcalc.data.statMapping.primaryStats.indexOf(stat) != -1
    }

    var isSecondaryStat = function(stat) {
        return swlcalc.data.statMapping.secondaryStats.indexOf(stat) != -1
    }

    /**
     * Public interface
     */
    var oPublic = {
        capitalize: capitalize,
        blankIfNone: blankIfNone,
        precisionRound: precisionRound,
        sortAsc: sortAsc,
        isPrimaryStat: isPrimaryStat,
        isSecondaryStat: isSecondaryStat
    }
    return oPublic;
}();
