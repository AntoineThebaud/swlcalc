var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.findItems = function (slot) {
    var slotItems = swlcalc.data.items.filter(function (item) {
        return item.slots.indexOf(slot) != -1;
    });
    return slotItems;
}

//TODO : to complete
swlcalc.data.items = [
    {
        id: '1',
        name: 'Tank',
        slots: ['head', 'major', 'minor']
    },
    {
        id: '2',
        name: 'Healer',
        slots: ['head', 'major', 'minor']
    },
    {
        id: '3',
        name: 'DPS',
        slots: ['head', 'major', 'minor']
    }
];
