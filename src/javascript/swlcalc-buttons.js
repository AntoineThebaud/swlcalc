var swlcalc = swlcalc || {};

/**
 * Defines the not-in-buttonbar buttons of swlcalc
 */
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
