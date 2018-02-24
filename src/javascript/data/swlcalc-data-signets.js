var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

//TODO : add the missing items
swlcalc.data.signets = {
    noneSignet: {
        id: 0,
        name: '',
        description: '',
        cooldown: '0',
        icon: 'none'
    },
    slot: {
        'weapon': [
            {
                id: 1,
                name: 'Alacrity',
                description: 'Increased your move speed by %d% while in combat.',
                quality: {
                    'mkI': 10,
                    'mkII': 15,
                    'mkIII': 20
                }
            },
            {
                id: 2,
                name: 'Destruction',
                description: 'This weapon deals %d additional damage to enemies that are below 35% health.',
                quality: {
                    'mkI': 0.15,
                    'mkII': 0.30,
                    'mkIII': 0.45
                }
            },
            {
                id: 3,
                name: 'Energy',
                description: 'When you use a Power Ability with this weapon you have %d% of consuming one less Energy.',
                quality: {
                    'mkI': 11,
                    'mkII': 22,
                    'mkIII': 33
                }
            },
            {
                id: 4,
                name: 'Efficiency',
                description: 'Your attacks and heals with this weapon have a 50% chance to reduce the remaining cooldown time on your Elite Ability by %d%.',
                quality: {
                    'mkI': 2,
                    'mkII': 3,
                    'mkIII': 5
                }
            },
            {
                id: 5,
                name: 'Havoc',
                description: '+%d% critical hit damage and critical healing.',
                quality: {
                    'mkI': 2.5,
                    'mkII': 5,
                    'mkIII': 7.5
                }
            },
            {
                id: 6,
                name: 'Restoration',
                description: 'When you hit or heal a target with this weapon you have a 50% chance to restore %d% of your health.',
                quality: {
                    'mkI': 0.75,
                    'mkII': 1.5,
                    'mkIII': 2.25
                }
            },
            {
                id: 7,
                name: 'Recovery',
                description: 'You receive %d% more health from incoming heals.',
                quality: {
                    'mkI': 1,
                    'mkII': 2,
                    'mkIII': 3
                }
            },
            {
                id: 8,
                name: 'Warding',
                description: 'Increases Protection by %d while wielded',
                quality: {
                    'mkI': 150,
                    'mkII': 300,
                    'mkIII': 450
                }
            }
        ],
        'head': [
            {
                id: 1,
                name: '[Hammer] Signet of Shattering',
                description: 'Increases the damage and healing of Hammer Elite Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'finger': [
            {
                id: 1,
                name: '[Hammer] Signet of Bludgeoning',
                description: 'Increases the damage and healing of Hammer Basic Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'neck': [
            {
                id: 1,
                name: '[Hammer] Signet of Crushing',
                description: 'Increases the damage and healing of Hammer Power Abilities by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                description: 'Increases the rate at which your Ultimate Abilities recharge on ability activation by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Laceration',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a %TODO% bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Matter Creation',
                description: 'Increases the damage of Gadgets by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                description: 'Reduces the cooldown of Active Dodge by %TODO%.',
                cooldown: '0', //TODO : cooldown decrease with gear power
            }
        ]
    }
}
