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
        slotObj.el.ql.change(this.qlChange);
        slotObj.el.glyphQl.change(this.glyphChange);
        slotObj.el.primaryGlyph.change(this.glyphChange);
        slotObj.el.secondaryGlyph.change(this.glyphChange);
        slotObj.el.signetId.change(this.signetChange);
        slotObj.el.signetQuality.change(this.signetChange);
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
        var signet_quality_url = 'assets/images/icons/standard.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-quality').attr('src', signet_quality_url);
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
            slotObj.signetQuality('epic');
            slotObj.el.signetQuality.attr('disabled', 'disabled');
            slotObj.el.nameWarning.tooltip({
                title: cadoro.warning_text,
                placement: 'top'
            });
            slotObj.el.nameWarning.show();
        } else if(!slotObj.item().signet) {
            slotObj.el.signetQuality.removeAttr('disabled');
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

    this.qlChange = function(event) {
        swlcalc.summary.updateAllStats();
    };

    this.glyphChange = function(id_suffix) {
        self.updateGlyphDistributionButtons();
        swlcalc.summary.updateAllStats();
    };
    
    this.updateGlyphDistributionButtons = function() {
        if(slotObj.el.glyphQl.val() === "11.0") {
            this.updateGlyphDistributionButton(slotObj.el.btn.primary[1], false, 'top');
            this.updateGlyphDistributionButton(slotObj.el.btn.primary[3], false, 'top');
            this.updateGlyphDistributionButton(slotObj.el.btn.secondary[1], false, 'bottom');
            this.updateGlyphDistributionButton(slotObj.el.btn.secondary[3], false, 'bottom');
            
            if(slotObj.primaryDist() == 1 || slotObj.primaryDist() == 3) {
                slotObj.el.btn.primary[4].trigger('click');
                slotObj.el.btn.secondary[0].trigger('click');
            }
        } else {
            this.updateGlyphDistributionButton(slotObj.el.btn.primary[1], true, 'top');
            this.updateGlyphDistributionButton(slotObj.el.btn.primary[3], true, 'top');
            this.updateGlyphDistributionButton(slotObj.el.btn.secondary[1], true, 'bottom');
            this.updateGlyphDistributionButton(slotObj.el.btn.secondary[3], true, 'bottom');
        }
    };
    
    this.updateGlyphDistributionButton = function(button, enable, tooltipPlacement) {
        if(enable) {
            button.removeAttr('disabled');
            button.next('div').remove();
        } else {
            button.attr('disabled', 'disabled');
            button.after(function (e) {
                d = $("<div>");
                d.css({
                    height: button.outerHeight(),
                    width: button.outerWidth(),
                    position: 'absolute',
                })
                d.css(button.position());
                d.attr('title', 'QL11 glyphs do not support 1/3 splits.');
                d.tooltip({placement: tooltipPlacement});
                return d;
            });
        }
    };

    this.updateControlsForItem = function() {
        var item = slotObj.item();
        slotObj.name(': ' + item.name);
        if(item.ql) {
            if(Array.isArray(item.ql)) {
                slotObj.el.ql.find('option').each(function(idx, qlOption) {
                    if(item.ql.indexOf(qlOption.value) == -1) {
                        if(slotObj.ql() == qlOption.value) {
                            slotObj.ql(item.ql[0]);
                        }
                        $(this).attr('disabled', 'disabled');
                    }
                });
            } else {
                slotObj.ql(item.ql);
                slotObj.el.ql.attr('disabled', 'disabled');
            }
        }
        if(item.glyph) {
            slotObj.glyphQl(item.glyph.ql);
            slotObj.primaryGlyph(item.glyph.primary.stat);
            slotObj.secondaryGlyph(item.glyph.secondary.stat);
            slotObj.el.btn.primary[item.glyph.primary.dist].trigger('click');
            slotObj.el.btn.secondary[item.glyph.secondary.dist].trigger('click');
            slotObj.el.ql.attr('disabled', 'disabled');
            slotObj.el.glyphQl.attr('disabled', 'disabled');
            slotObj.el.primaryGlyph.attr('disabled', 'disabled');
            slotObj.el.secondaryGlyph.attr('disabled', 'disabled');
            self.disableAllGlyphDistButtonsExcept(slotObj.el.btn.primary, item.glyph.primary.dist);
            self.disableAllGlyphDistButtonsExcept(slotObj.el.btn.secondary, item.glyph.secondary.dist);
        }
        if(item.signet) {
            slotObj.updateSignet();
            slotObj.signetQuality(item.signet.quality);
            slotObj.el.signetId.attr('disabled', 'disabled');
            slotObj.el.signetQuality.attr('disabled', 'disabled');
            
            slotObj.el.signetId.append($('<option>', {
                value: 999,
                text: item.signet.name,
                selected: true
            }));
        }
        slotObj.el.signetId.change();
    };

    this.disableAllGlyphDistButtonsExcept = function(glyphtype, dist) {
        for (var i = 0; i <= 4; i++) {
            if(i !== dist) {
                glyphtype[i].attr('disabled', 'disabled');
            }
        }
    };

    this.enableAllGlyphDistButtons = function(glyphtype) {
        for (var i = 0; i <= 4; i++) {
            glyphtype[i].removeAttr('disabled');
        }
    };

    this.enableControls = function() {
        self.enableAllGlyphDistButtons(slotObj.el.btn.primary);
        self.enableAllGlyphDistButtons(slotObj.el.btn.secondary);
        slotObj.el.glyphQl.removeAttr('disabled');
        slotObj.el.primaryGlyph.removeAttr('disabled');
        slotObj.el.secondaryGlyph.removeAttr('disabled');
        slotObj.el.ql.removeAttr('disabled');
        slotObj.el.ql.find('option[disabled]').removeAttr('disabled');
        slotObj.el.signetId.removeAttr('disabled');
        if(slotObj.signetQuality() === 'mythic') {
            slotObj.signetQuality('none');
        }
        slotObj.el.signetQuality.removeAttr('disabled');
        slotObj.el.signetId.find('option[value=999]').remove();
        slotObj.updateSignet();
        slotObj.el.signetId.change();
        swlcalc.summary.updateAllStats();
    };
};