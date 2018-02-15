var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

//TODO : add the missing items
swlcalc.data.signets = {
    noneSignet: {
        id: 0,
        name: '',
        description: '',
        cooldown: '0',
        icon: 'minor_dps'
    },
    slot: {
        'weapon': [ // this one is a placeholder
            {
                id: 1,
                name: 'Suffixe',
                description: 'This signet choice will be replace by suffixes in the future',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'head_dps' //TODO : update icon
            }
        ],
        'weapon2': [ // this one is a placeholder
            {
                id: 1,
                name: 'Suffixe',
                description: 'This signet choice will be replace by suffixes in the future',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'head_dps' //TODO : update icon
            }
        ],
        'head': [
            {
                id: 1,
                name: '[Hammer] Signet of Shattering',
                description: 'Increases the damage and healing of Hammer Elite Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'head_dps' //TODO : update icon
            }
        ],
        'ring': [ //TODO : rename in "finger"
            {
                id: 1,
                name: '[Hammer] Signet of Bludgeoning',
                description: 'Increases the damage and healing of Hammer Basic Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'major_dps' //TODO : update icon
            }
        ],
        'neck': [
            {
                id: 1,
                name: '[Hammer] Signet of Crushing',
                description: 'Increases the damage and healing of Hammer Power Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'major_dps' //TODO : update icon
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                description: 'Increases the rate at which your Ultimate Abilities recharge on ability activation by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'major_dps' //TODO : update with swl icon
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Laceration',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a %TODO% bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'minor_dps' //TODO : update with swl icon
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Matter Creation',
                description: 'Effect: Increases the damage of Gadgets by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'minor_dps' //TODO : update with swl icon
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                description: 'Effect: Reduces the cooldown of Active Dodge by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
                icon: 'minor_dps' //TODO : update with swl icon
            }
        ]
    }
}
