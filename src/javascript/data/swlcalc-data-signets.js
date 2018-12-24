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
                description: 'Increased your move speed by <span id="%id-bonus1" class="bonus-const">%d</span>% while in combat.',
                quality: {
                    'mkI': 10,
                    'mkII': 15,
                    'mkIII': 20
                }
            },
            {
                id: 2,
                name: 'Destruction',
                description: 'This weapon deals <span id="%id-bonus1" class="bonus-const">%d</span> additional damage to enemies that are below 35% health.',
                quality: {
                    'mkI': 0.15,
                    'mkII': 0.30,
                    'mkIII': 0.45
                }
            },
            {
                id: 3,
                name: 'Energy',
                description: 'Your attacks and heals with this weapon have a 50% chance to reduce the remaining cooldown time on your Elite Ability by <span id="%id-bonus1" class="bonus-const">%d</span>%.',
                quality: {
                    'mkI': 11,
                    'mkII': 22,
                    'mkIII': 33
                }
            },
            {
                id: 4,
                name: 'Efficiency',
                description: 'When you use a Power Ability with this weapon you have <span id="%id-bonus1" class="bonus-const">%d</span>% of consuming one less Energy.',
                quality: {
                    'mkI': 2,
                    'mkII': 3,
                    'mkIII': 5
                }
            },
            {
                id: 5,
                name: 'Havoc',
                description: '+<span id="%id-bonus1" class="bonus-const">%d</span>% critical hit damage and critical healing.',
                quality: {
                    'mkI': 2.5,
                    'mkII': 5,
                    'mkIII': 7.5
                }
            },
            {
                id: 6,
                name: 'Restoration',
                description: 'When you hit or heal a target with this weapon you have a 50% chance to restore <span id="%id-bonus1" class="bonus-const">%d</span>% of your health.',
                quality: {
                    'mkI': 0.75,
                    'mkII': 1.5,
                    'mkIII': 2.25
                }
            },
            {
                id: 7,
                name: 'Recovery',
                description: 'You receive <span id="%id-bonus1" class="bonus-const">%d</span>% more health from incoming heals.',
                quality: {
                    'mkI': 1,
                    'mkII': 2,
                    'mkIII': 3
                }
            },
            {
                id: 8,
                name: 'Warding',
                description: 'Increases Protection by <span id="%id-bonus1" class="bonus-const">%d</span> while wielded',
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
                description: 'Increases the damage and healing of Pistols Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
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
                description: 'Increases the damage and healing of Elemental Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 3,
                name: 'Signet of Deadly Force',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 4,
                name: 'Signet of Disequilibrium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 5,
                name: 'Signet of Rituals',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 6,
                name: 'Signet of the Master',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 7,
                name: 'Signet of the Veteran',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 8,
                name: 'Signet of Fervour',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Weapon Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
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
                id: 9,
                name: 'Signet of Shattering',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>%.',
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
                description: 'Increases the damage and healing of all Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
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
                description: 'Reduces the cooldown of Pistols Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 12,
                name: 'Signet of the Conflux',
                type: 'Elementalism',
                description: 'Reduces the cooldown of Elemental Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 13,
                name: 'Signet of Rapid Response',
                type: 'Shotgun',
                description: 'Reduces the cooldown of Shotgun Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 14,
                name: 'Signet of Transience',
                type: 'Chaos',
                description: 'Reduces the cooldown of Chaos Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 15,
                name: 'Signet of Bloodletting',
                type: 'Blood',
                description: 'Reduces the cooldown of Blood Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 16,
                name: 'Signet of Bladestorm',
                type: 'Blade',
                description: 'Reduces the cooldown of Blade Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 17,
                name: 'Signet of Burst Fire',
                type: 'Assault Rifle',
                description: 'Reduces the cooldown of Assault Rifle Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 18,
                name: 'Signet of Zeal',
                type: 'Fist',
                description: 'Reduces the cooldown of Fist Weapon Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 19,
                name: 'Signet of Mauling',
                type: 'Hammer',
                description: 'Reduces the cooldown of Hammer Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 20,
                name: 'Signet of the Ascendant',
                type: 'All',
                description: 'Reduces the cooldown of all Elite Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 5.05,
                        rating_per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 11.56,
                        rating_per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 19.2,
                        rating_per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 27.06,
                        rating_per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Signet of the Gambler',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Elements',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Engagement',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Waxing Delirium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Incantations',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Pupil',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Rifleman\'s Creed',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Intensity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Bludgeoning',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10.51,
                        rating_per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.8,
                        rating_per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 46.92,
                        rating_per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 73.25,
                        rating_per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Neophyte',
                type: 'All',
                description: 'Increases the damage and healing of all Basic Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
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
                description: 'Increases the damage and healing of Pistols Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Devastation',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Riot Control',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Capriciousness',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Blood Rites',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Adept',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Commando',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Ferocity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Crushing',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 2.63,
                        rating_per_level: 3.12 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 6.67,
                        rating_per_level: 3.86 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 12.13,
                        rating_per_level: 4.85 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 18.94,
                        rating_per_level: 9.81 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Journeyman',
                type: 'All',
                description: 'Increases the damage and healing of all Power Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.1595,
                        per_level: 0/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a <span id="%id-bonus1" class="bonus-const">%d</span> bonus to healing for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.1,
                        per_level: 0.66/19 // == (0.76 - 0.1) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0.95,
                        rating_per_level: 1.07/19 // == (2.02 - 0.95) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 2.34,
                        rating_per_level: 1.36/19 // == (3.7 - 2.34) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Overwhelming Power',
                type: 'All',
                description: 'Increases the damage and healing of Ultimate Abilities by <span id="%id-bonus1" class="bonus-const">%d</span>',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.5,
                        per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 32.93,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    }
                }
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a <span id="%id-bonus1" class="bonus-const">%d</span> bonus to healing for 5 seconds. This ability can only occur once every 15 seconds.',
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
                        init: 14,
                        per_level: 91/19 // == (105 - 14) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 132,
                        rating_per_level: 158/19 // == (280 - 132) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 325,
                        rating_per_level: 288/19 // == (513 - 325) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 591,
                        rating_per_level: 236/19 // == (827 - 591) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 922,
                        rating_per_level: 0/19 // == (??? - 922) / (20 - 1)
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
                        per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Empowerment',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that increases their damage by <span id="%id-bonus1" class="bonus-const">%d</span> for 5 seconds. This ability can only occur once every 15 seconds',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.09,
                        per_level: 0.62/19 // == (0.71 - 0.09) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0.89,
                        rating_per_level: 0/19 // == (?? - 0.89) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 2.18,
                        rating_per_level: 1.27/19 // == (3.45 - 2.18) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Laceration',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="%id-bonus1" class="bonus-const">%d</span> bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.19,
                        per_level: 1.22/19 // == (1.41 - 0.19) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 1.78,
                        rating_per_level: 1.98/19 // == (3.76 - 1.78) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 4.37,
                        rating_per_level: 2.53/19 // == (6.9 - 4.37) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (11.12 - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 12.4,
                        rating_per_level: 6.42/19 // == (18.82 - 12.4) / (20 - 1)
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
                        per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 0,
                        rating_per_level: 0/19 // == (?? - ??) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Thirst',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="%id-bonus1" class="bonus-const">%d</span> leech effect for 5 seconds. This effect can heal up to y damage before being removed, and can only occur once every 15 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 8,
                        per_level: 1/19 // == (9 - 8) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 10,
                        rating_per_level: 1/19 // == (11 - 10) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 12,
                        rating_per_level: 1/19 // == (13 - 12) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 14,
                        rating_per_level: 1/19 // == (15 - 14) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 16,
                        rating_per_level: 1/19 // == (17 - 16) / (20 - 1)
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
                description: 'Increases the healing of Gadgets by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.45,
                        per_level: 9.44/19 // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 13.72,
                        rating_per_level: 15.32/19 // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 33.68,
                        rating_per_level: 19.52/19 // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 61.26,
                        rating_per_level: 24.5/19 // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 95.63,
                        rating_per_level: 49.53/19 // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Matter Creation',
                type: 'All',
                description: 'Increases the damage of Gadgets by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.45,
                        per_level: 9.44/19 // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 13.72,
                        rating_per_level: 15.32/19 // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 33.68,
                        rating_per_level: 19.52/19 // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 61.26,
                        rating_per_level: 24.5/19 // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 95.63,
                        rating_per_level: 49.53/19 // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Time and Space Alteration',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.43,
                        per_level: 0/19 // == (9.82 - 1.43) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 12.06,
                        rating_per_level: 10.44/19 // == (22.5 - 12.06) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 25.2,
                        rating_per_level: 9.52/19 // == (34.72 - 25.2) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 37.99,
                        rating_per_level: 8.18/19 // == (46.17 - 37.99) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 48.88,
                        rating_per_level: 10.33/19 // == (59.21 - 48.88) / (20 - 1)
                    }
                }
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                type: 'All',
                description: 'Reduces the cooldown of Active Dodge by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.99,
                        per_level: 5.99/19 // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 8.63,
                        rating_per_level: 8.04/19 // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 18.83,
                        rating_per_level: 7.98/19 // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 29.67,
                        rating_per_level: 7.47/19 // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 39.71,
                        rating_per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Contortion',
                type: 'All',
                description: 'Active dodges break movement hindering effects, but also have their cooldown increased by <span id="%id-bonus1" class="bonus-const">%d</span>',
                cooldown: '', // TODO for this one the number decreases with levels !
                ratio: {
                    'standard': {
                        init: 99.01,
                        per_level: 5.99/19 // == (99.01 - 93.02) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 91.37,
                        rating_per_level: 8.04/19 // == (91.37 - 83.33) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 81.17,
                        rating_per_level: 7.98/19 // == (81.17 - 73.19) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 70.33,
                        rating_per_level: 7.47/19 // == (70.33 - 62.86) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 62.29,
                        rating_per_level: 12.29/19 // == (62.29 - 50) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Shoulder Tackle',
                type: 'All',
                description: 'Your active dodges have a <span id="%id-bonus1" class="bonus-const">%d</span> to knock down enemies in your path, but also have their cooldown increased by y%.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 10,
                        per_level: 0/19 // == (10 - 10) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 11,
                        rating_per_level: 0/19 // == (11 - 11) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 12,
                        rating_per_level: 0/19 // == (12 - 12) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 13,
                        rating_per_level: 0/19 // == (13 - 13) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 14,
                        rating_per_level: 0/19 // == (14 - 14) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Quickness',
                type: 'All',
                description: 'After using Active Dodge, you recieve a speed bonus of <span id="%id-bonus1" class="bonus-const">%d</span> for 4 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1,
                        per_level: 6/19 // == (7 - 1) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 9,
                        rating_per_level: 8/19 // == (17 - 9) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 19,
                        rating_per_level: 8/19 // == (27 - 19) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 30,
                        rating_per_level: 7/19 // == (37 - 30) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 39.71,
                        rating_per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Agility',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by <span id="%id-bonus1" class="bonus-const">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.99,
                        per_level: 5.99/19 // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        rating_init: 8.63,
                        rating_per_level: 8.04/19 // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        rating_init: 18.83,
                        rating_per_level: 7.98/19 // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        rating_init: 29.67,
                        rating_per_level: 7.47/19 // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        rating_init: 39.71,
                        rating_per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            }
        ]
    }
}
