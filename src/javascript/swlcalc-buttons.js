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

swlcalc.button.ButtonHandler = function ButtonHandler(slot) {

    var slotObj = swlcalc.gear.slots[slot.id];

    this.init = function() {
        this.bindEvents();
    };

    /**
     * Associates the right processing to each trigger.
     */
    this.bindEvents = function() {
        slotObj.el.editBtn.click(this.handleEditBtnClick);
        slotObj.el.editModal.click(this.handleEditModalClick);
    };

    /**
     * Handler for #slot-editbtn : display edit modal box
     */
    this.handleEditBtnClick = function(event) {
        slotObj.showEditModal();
    };

    /**
     * Handler for #slot-editbtn : close edit window
     */
    this.handleEditModalClick = function(event) {
        if (event.target == slotObj.el.editModal[0]) {
            slotObj.hideEditModal();
        }
    };
};
