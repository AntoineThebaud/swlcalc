var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

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
                description: 'Your attacks and heals with this weapon have a 50% chance to reduce the remaining cooldown time on your Elite Ability by %d%.',
                quality: {
                    'mkI': 11,
                    'mkII': 22,
                    'mkIII': 33
                }
            },
            {
                id: 4,
                name: 'Efficiency',
                description: 'When you use a Power Ability with this weapon you have %d% of consuming one less Energy.',
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
                name: 'Signet of the Gunslinger',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Elite Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cataclysms',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elemental Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Deadly Force',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Disequilibrium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Rituals',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Master',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Veteran',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Fervour',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Weapon Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Shattering',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Elite Abilities by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Paragon',
                type: 'All',
                description: 'Increases the damage and healing of all Elite Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 11,
                name: 'Signet of Quick Draw',
                type: 'Pistols',
                description: 'Reduces the cooldown of Pistols Elite Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 12,
                name: 'Signet of the Conflux',
                type: 'Elementalism',
                description: 'Reduces the cooldown of Elemental Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 13,
                name: 'Signet of Rapid Response',
                type: 'Shotgun',
                description: 'Reduces the cooldown of Shotgun Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 14,
                name: 'Signet of Transience',
                type: 'Chaos',
                description: 'Reduces the cooldown of Chaos Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 15,
                name: 'Signet of Bloodletting',
                type: 'Blood',
                description: 'Reduces the cooldown of Blood Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 16,
                name: 'Signet of Bladestorm',
                type: 'Blade',
                description: 'Reduces the cooldown of Blade Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 17,
                name: 'Signet of Burst Fire',
                type: 'Assault Rifle',
                description: 'Reduces the cooldown of Assault Rifle Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 18,
                name: 'Signet of Zeal',
                type: 'Fist',
                description: 'Reduces the cooldown of Fist Weapon Elite Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 19,
                name: 'Signet of Mauling',
                type: 'Hammer',
                description: 'Reduces the cooldown of Hammer Elite Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 20,
                name: 'Signet of the Ascendant',
                type: 'All',
                description: 'Reduces the cooldown of all Elite Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Signet of the Gambler',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Basic Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Elements',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Engagement',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Waxing Delirium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Incantations',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Pupil',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Rifleman\'s Creed',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Intensity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Basic Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Bludgeoning',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Basic Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Neophyte',
                type: 'All',
                description: 'Increases the damage and healing of all Basic Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'neck': [
            {
                id: 1,
                name: 'Signet of the Outlaw',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Power Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Devastation',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Riot Control',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Capriciousness',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Blood Rites',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Adept',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Commando',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Ferocity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Power Abilities by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Crushing',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Power Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Journeyman',
                type: 'All',
                description: 'Increases the damage and healing of all Power Abilities by x%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a x% bonus to healing for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Overwhelming Power',
                type: 'All',
                description: 'Increases the damage and healing of Ultimate Abilities by x%',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a x% bonus to healing for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.32,
                        rating_per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 13.07,
                        rating_per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 23.76,
                        rating_per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 37.1,
                        rating_per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cruel Delight',
                type: 'All',
                description: 'When you critically hit, you are healed for x.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Echoes',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that heals for xHP every second for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Empowerment',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that increases their damage by x% for 5 seconds. This ability can only occur once every 15 seconds',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Laceration',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a x% bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of Sadism',
                type: 'All',
                description: 'When you critically hit, your target is affected with a detrimental effect that deals xCP damage every second for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Thirst',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a x% leech effect for 5 seconds. This effect can heal up to y damage before being removed, and can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Thorns',
                type: 'All',
                description: 'When you critically hit, you are given a beneficial effect that damages attackers for xCP when they hit you for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Biological Metamorphosis',
                type: 'All',
                description: 'Increases the healing of Gadgets by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Matter Creation',
                type: 'All',
                description: 'Increases the damage of Gadgets by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Time and Space Alteration',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                type: 'All',
                description: 'Reduces the cooldown of Active Dodge by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Contortion',
                type: 'All',
                description: 'Active dodges break movement hindering effects, but also have their cooldown increased by x%',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Shoulder Tackle',
                type: 'All',
                description: 'Your active dodges have a x% to knock down enemies in your path, but also have their cooldown increased by y%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Quickness',
                type: 'All',
                description: 'After using Active Dodge, you recieve a speed bonus of x% for 4 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Agility',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by x%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0,
                        per_level: 0 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ]
    }
}
