var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.template_data = {
    slots: [
        {
            id_prefix: 'weapon',
            name: 'Primary Weapon',
            is_weapon: true,
            group: 'weapon',
            is_primary: true
        },
        {
            id_prefix: 'weapon2',
            name: 'Secondary Weapon',
            is_weapon: true,
            group: 'weapon',
            is_primary: false
        },
        {
            id_prefix: 'head',
            name: 'Head Talisman',
            group: 'head'
        },
        {
            id_prefix: 'finger',
            name: 'Finger Talisman',
            group: 'major'
        },
        {
            id_prefix: 'neck',
            name: 'Neck Talisman',
            group: 'major'
        },
        {
            id_prefix: 'wrist',
            name: 'Wrist Talisman',
            group: 'major'
        },
        {
            id_prefix: 'luck',
            name: 'Luck Talisman',
            group: 'minor'
        },
        {
            id_prefix: 'waist',
            name: 'Waist Talisman',
            group: 'minor'
        },
        {
            id_prefix: 'occult',
            name: 'Occult Talisman',
            group: 'minor'
        }
    ]
};
