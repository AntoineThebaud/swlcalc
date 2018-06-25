var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.template_data = {
    slots: [
        {
            id_prefix: 'weapon',
            name: 'Primary Weapon',
            type: 'weapon',
            group: 'weapon',
            is_weapon: true,
            is_primary: true
        },
        {
            id_prefix: 'weapon2',
            name: 'Secondary Weapon',
            type: 'weapon',
            group: 'weapon',
            is_weapon: true,
            is_primary: false
        },
        {
            id_prefix: 'head',
            name: 'Head Talisman',
            group: 'head',
            type: 'talisman'
        },
        {
            id_prefix: 'finger',
            name: 'Finger Talisman',
            type: 'talisman',
            group: 'major',
        },
        {
            id_prefix: 'neck',
            name: 'Neck Talisman',
            type: 'talisman',
            group: 'major'
        },
        {
            id_prefix: 'wrist',
            name: 'Wrist Talisman',
            type: 'talisman',
            group: 'major'
        },
        {
            id_prefix: 'luck',
            name: 'Luck Talisman',
            type: 'talisman',
            group: 'minor'
        },
        {
            id_prefix: 'waist',
            name: 'Waist Talisman',
            type: 'talisman',
            group: 'minor'
        },
        {
            id_prefix: 'occult',
            name: 'Occult Talisman',
            type: 'talisman',
            group: 'minor'
        }
    ]
};
