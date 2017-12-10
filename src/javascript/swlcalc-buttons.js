var swlcalc = swlcalc || {};

swlcalc.button = function() {
    var dists = {};
    var weaponSwap = {};
    var init = function() {
        for (var i = 0; i < swlcalc.data.template_data.slots.length; i++) {
            var slotId = swlcalc.data.template_data.slots[i].id_prefix;
            dists[slotId] = new swlcalc.button.DistributionButtonHandler(slotId);
            dists[slotId].init();
        }
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

swlcalc.button.DistributionButtonHandler = function DistributionButtonHandler(slotId) {
    var self = this;

    this.init = function() {
        this.bindEvents();
        this.setInitialState();
    };

    this.bindEvents = function() {
        this.bindButtonEvents('primary');
        this.bindButtonEvents('secondary');
    };

    this.bindButtonEvents = function(glyph) {
        $.each(swlcalc.slots[slotId].el.btn[glyph], function(btnIndex, btn) {
            btn.on('click', function(event) {
                var btnId = event.target.id;
                self.activate(btnId.split('-')[1], btnId.substring(btnId.length - 1, btnId.length));
                self.balance(btnId.split('-')[1]);
                swlcalc.summary.updateAllStats();
            });
        });
    };

    this.setInitialState = function() {
        this.activate('primary', 4);
        this.activate('secondary', 0);
    };

    this.balance = function(clicked) {
        var inverseOfClicked = self.inverse(clicked);

        var clickedDist = self.getDist(clicked);
        var inverseDist = self.getDist(inverseOfClicked);
        var sumDist = clickedDist + inverseDist;
        if ((sumDist) > 4) {
            self.activate(inverseOfClicked, (inverseDist - (sumDist - 4)));
        } else if (sumDist == 4) {
            // do nothing
        } else {
            self.activate(inverseOfClicked, 4 - clickedDist);
        }
    };

    this.getDist = function(glyph) {
        var slot = swlcalc.slots[slotId];
        return glyph == 'primary' ? parseInt(slot.primaryDist(), 10) : parseInt(slot.secondaryDist(), 10);
    };

    this.activate = function(glyph, index) {
        var elem = swlcalc.slots[slotId].el.btn[glyph][index];
        elem.siblings().removeClass('active');
        elem.siblings().removeClass('btn-success');
        elem.addClass('active');
        elem.addClass('btn-success');
    };

    this.inverse = function(glyph) {
        return glyph == 'primary' ? 'secondary' : 'primary';
    };
};