var swlcalc = swlcalc || {};
swlcalc.swap = swlcalc.swap || {};

/**
 * Defines logic for weapon swap
 */
swlcalc.swap.SwapHandler = function SwapHandler(slotId) {
    var self = this;
    var slotObj = swlcalc.gear.slots[slotId];

    this.init = function() {
        this.bindEvents();
    };

    this.bindEvents = function() {
        slotObj.recap.el.section.on('click', this.weaponSwap);
    };

    this.weaponSwap = function(event) {
        // cancel event if click was done on edit button
        if (event.target == slotObj.recap.el.editBtnImg[0]) return;

        slotObj.draw();
        swlcalc.gear.slots[self.otherWeapon()].sheath();

        swlcalc.summary.updateAllStats();
    };

    this.otherWeapon = function() {
        return slotId == 'weapon' ? 'weapon2' : 'weapon';
    };
};
