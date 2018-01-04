var swlcalc = swlcalc || {};
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
            slotObj.el.wtype.change(this.wtypeChange);
        } else {
            slotObj.el.itemId.change(this.itemChange);
        }
        slotObj.el.rarity.change(this.rarityChange);
        slotObj.el.quality.change(this.glyphChange); //TODO refactor name because "glyphChange" is not clear
        slotObj.el.level.change(this.glyphChange);  //TODO refactor name because "glyphChange" is not clear

        slotObj.el.glyph.change(this.glyphChange);
        slotObj.el.glyphRarity.change(this.rarityChange);
        slotObj.el.glyphQuality.change(this.glyphChange);
        slotObj.el.glyphLevel.change(this.glyphChange);

        slotObj.el.signetId.change(this.signetChange);
        slotObj.el.signetRarity.change(this.rarityChange);
        slotObj.el.signetLevel.change(this.glyphChange); //TODO refactor name because "glyphChange" is not clear
    };

    this.addItemsToSelect = function() {
        var items = swlcalc.data.findItems(slot.group);
        if(slot.id_prefix != 'head'){
            items = items.concat(swlcalc.data.findItems(slot.id_prefix));
        }

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

        var signetsInSlotGroup = $.merge([], swlcalc.data.signet_data[slot.group]);
        // weapon signets can also be slotted in head
        $.merge(signetsInSlotGroup, this.getSignetsForHead(slot.group));
        // merge in non-head and non-weapon signets in this slot
        $.merge(signetsInSlotGroup, this.getSignetsForSlot());

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
        var signet_icon_url = 'assets/images/icons/' + slot.group + '_dps.png';
        var signet_rarity_url = 'assets/images/icons/standard.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-rarity').attr('src', signet_rarity_url);
    };

    this.getSignetsForHead = function(group) {
        if (group == 'head') {
            return swlcalc.data.signet_data['weapon'];
        }
        return [];
    };

    this.getSignetsForSlot = function() {
        if (slot.id_prefix !== 'head' && slot.id_prefix !== 'weapon' && typeof swlcalc.data.signet_data[slot.id_prefix] !== 'undefined') {
            return swlcalc.data.signet_data[slot.id_prefix];
        }
        return [];
    };

    this.signetChange = function(event) {
        var signet = slotObj.signet();

        if (typeof signet.requires !== 'undefined') {
            var cadoro = swlcalc.data.cadoro_items[signet.requires];
            var cadoroItem = cadoro[slot.id_prefix][slotObj.item().role];
            if (cadoroItem !== undefined && cadoroItem.name !== '') {
                slotObj.name(': ' + cadoroItem.name);
            }
            slotObj.signetRarity('epic');
            slotObj.el.signetRarity.attr('disabled', 'disabled');
            slotObj.el.nameWarning.tooltip({
                title: cadoro.warning_text,
                placement: 'top'
            });
            slotObj.el.nameWarning.show();
        } else if(!slotObj.item().signet) {
            slotObj.el.signetRarity.removeAttr('disabled');
            slotObj.el.nameWarning.hide();
        }
        slotObj.updateSignet();
        swlcalc.summary.updateAllStats();
    };

    this.itemChange = function(event) {
        self.enableControls();
        self.updateControlsForItem();
        swlcalc.summary.updateAllStats();
    };

    this.wtypeChange = function(event) {
        var wtype = $(this).val();

        if(wtype != 'none') {
            slotObj.name(': ' + swlcalc.util.capitalise(wtype));
        } else {
            slotObj.name('');
        }
    };

    //TODO : level select must be updated when rarity is changed (max 20 for standard, max 70 for legendary etc.. )
    this.rarityChange = function(event) {
        swlcalc.summary.updateAllStats();
        self.updateColor(event.target);
    };

    this.glyphChange = function(id_suffix) {
        swlcalc.summary.updateAllStats();
    };

    this.updateControlsForItem = function() {
        var item = slotObj.item();
        slotObj.name(': ' + item.name);
        if(item.rarity) {
            if(Array.isArray(item.rarity)) {
                slotObj.el.rarity.find('option').each(function(idx, qlOption) {
                    if(item.rarity.indexOf(qlOption.value) == -1) {
                        if(slotObj.rarity() == qlOption.value) {
                            slotObj.rarity(item.rarity[0]);
                        }
                        $(this).attr('disabled', 'disabled');
                    }
                });
            } else {
                slotObj.rarity(item.rarity);
                slotObj.el.rarity.attr('disabled', 'disabled');
            }
        }
        if(item.glyph) {
            slotObj.glyphRarity(item.glyph.rarity);
            slotObj.glyph(item.glyph.stat);
            slotObj.el.rarity.attr('disabled', 'disabled');
            slotObj.el.glyphRarity.attr('disabled', 'disabled');
            slotObj.el.glyph.attr('disabled', 'disabled');
        }
        if(item.signet) {
            slotObj.updateSignet();
            slotObj.signetRarity(item.signet.rarity);
            slotObj.el.signetId.attr('disabled', 'disabled');
            slotObj.el.signetRarity.attr('disabled', 'disabled');

            slotObj.el.signetId.append($('<option>', {
                value: 999,
                text: item.signet.name,
                selected: true
            }));
        }
        slotObj.el.signetId.change();
    };

    this.enableControls = function() {
        slotObj.el.glyph.removeAttr('disabled');
        slotObj.el.glyphRarity.removeAttr('disabled');
        slotObj.el.rarity.removeAttr('disabled');
        slotObj.el.rarity.find('option[disabled]').removeAttr('disabled');
        slotObj.el.signetId.removeAttr('disabled');
        if(slotObj.signetRarity() === 'mythic') {
            slotObj.signetRarity('none'); //TODO : to change ?
        }
        slotObj.el.signetRarity.removeAttr('disabled');
        slotObj.el.signetId.find('option[value=999]').remove();
        slotObj.updateSignet();
        slotObj.el.signetId.change();
        swlcalc.summary.updateAllStats();
    };

    this.updateColor = function(select) {
        $(select).attr("class", select.selectedOptions[0].className);
    };
};
