var swlcalc = swlcalc || {};

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
