var swlcalc = swlcalc || {};

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
     * Public exposition of the functions that are called remotely
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
