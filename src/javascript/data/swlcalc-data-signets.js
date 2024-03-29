var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.signets = {
    noneSignet: {
        id: 0,
        name: '',
        description: '',
        icon: 'none'
    },
    slot: {
        'weapon': [
            {
                id: 1,
                name: 'Alacrity',
                description: 'Increased your move speed by <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span>%</span> while in combat.',
                decimals: [ 0 ],
                quality: {
                    '1': [ 10 ],
                    '2': [ 15 ],
                    '3': [ 20 ],
                    '4': [ 22 ]
                }
            },
            {
                id: 2,
                name: 'Destruction',
                description: 'This weapon deals <span id="%id-signet-bonus1" class="stat-value dps">%d</span> additional damage to enemies that are below <span class="stat-value const">35%</span> health.',
                decimals: [ 0 ],
                quality: {
                    '1': [ 0.36 ],
                    '2': [ 0.71 ],
                    '3': [ 1.07 ],
                    '4': [ 1.43 ]
                },
                stat: 'Combat Power'
            },
            {
                id: 3,
                name: 'Energy',
                description: 'When you use a Power Ability with this weapon you have <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span>%</span> of consuming one less Energy.',
                decimals: [ 0 ],
                quality: {
                    '1': [ 11 ],
                    '2': [ 22 ],
                    '3': [ 33 ],
                    '4': [ 44 ]
                }
            },
            {
                id: 4,
                name: 'Efficiency',
                description: 'Your attacks and heals with this weapon have a <span class="stat-value const">50%</span> chance to reduce the remaining cooldown time on your Elite Ability by <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span>%</span>.',
                decimals: [ 1 ],
                quality: {
                    '1': [ 2 ],
                    '2': [ 3 ],
                    '3': [ 5 ],
                    '4': [ 6.5 ]
                }
            },
            {
                id: 5,
                name: 'Havoc',
                description: '<span id="%id-affix-bonus-wrapper">+<span id="%id-signet-bonus1">%d</span>%</span> critical hit damage and critical healing.',
                decimals: [ 1 ],
                quality: {
                    '1': [ 2.5 ],
                    '2': [ 5 ],
                    '3': [ 7.5 ],
                    '4': [ 10 ]
                }
            },
            {
                id: 6,
                name: 'Restoration',
                description: 'When you hit or heal a target with this weapon you have a <span class="stat-value const">50%</span> chance to restore <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span>%</span> of your health (up to <span id="%id-signet-bonus2" class="stat-value heal">%d</span>).',
                decimals: [ 2, 0 ],
                quality: {
                    '1': [ 0.75, 150 ],
                    '2': [ 1.5, 300 ],
                    '3': [ 2.25, 450 ],
                    '4': [ 3, 600 ]
                }
            },
            {
                id: 7,
                name: 'Recovery',
                description: 'You receive <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span>%</span> more health from incoming heals.',
                decimals: [ 1 ],
                quality: {
                    '1': [ 2.5 ],
                    '2': [ 5 ],
                    '3': [ 7.5 ],
                    '4': [ 10 ]
                }
            },
            {
                id: 8,
                name: 'Warding',
                description: 'Increases Protection by <span id="%id-affix-bonus-wrapper"><span id="%id-signet-bonus1">%d</span></span> while wielded.',
                decimals: [ 0 ],
                quality: {
                    '1': [ 525 ],
                    '2': [ 1050 ],
                    '3': [ 1575 ],
                    '4': [ 2100 ]
                }
            }
        ],
        'head': [
            {
                id: 1,
                name: 'Signet of the Gunslinger',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cataclysms',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elemental Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Deadly Force',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Disequilibrium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Rituals',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Master',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Veteran',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Fervour',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Weapon Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Shattering',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Paragon',
                type: 'All',
                description: 'Increases the damage and healing of all Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.448 ],
                        perLevel: [ 2.928/19 ] // == (3.376 - 0.448) / (20 - 1)
                    },
                    'superior': {
                        init: [ 4.256 ],
                        perLevel: [ 4.752/19 ] // == (9.008 - 4.256) / (20 - 1)
                    },
                    'epic': {
                        init: [ 10.456 ],
                        perLevel: [ 6.056/19 ] // == (16.512 - 10.456) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.008 ],
                        perLevel: [ 7.608/19 ] // == (26.616 - 19.008) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 29.68 ],
                        perLevel: [ 15.376/19 ] // == (45.056 - 29.68) / (20 - 1)
                    }
                }
            },
            {
                id: 11,
                name: 'Signet of Quick Draw',
                type: 'Pistols',
                description: 'Reduces the cooldown of Pistols Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 12,
                name: 'Signet of the Conflux',
                type: 'Elementalism',
                description: 'Reduces the cooldown of Elemental Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 13,
                name: 'Signet of Rapid Response',
                type: 'Shotgun',
                description: 'Reduces the cooldown of Shotgun Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 14,
                name: 'Signet of Transience',
                type: 'Chaos',
                description: 'Reduces the cooldown of Chaos Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 15,
                name: 'Signet of Bloodletting',
                type: 'Blood',
                description: 'Reduces the cooldown of Blood Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 16,
                name: 'Signet of Bladestorm',
                type: 'Blade',
                description: 'Reduces the cooldown of Blade Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 17,
                name: 'Signet of Burst Fire',
                type: 'Assault Rifle',
                description: 'Reduces the cooldown of Assault Rifle Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 18,
                name: 'Signet of Zeal',
                type: 'Fist',
                description: 'Reduces the cooldown of Fist Weapon Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 19,
                name: 'Signet of Mauling',
                type: 'Hammer',
                description: 'Reduces the cooldown of Hammer Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.49/19 ] // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.05 ],
                        perLevel: [ 5.07/19 ] // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.56 ],
                        perLevel: [ 5.55/19 ] // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 19.2 ],
                        perLevel: [ 5.76/19 ] // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 27.06 ],
                        perLevel: [ 8.97/19 ] // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 20,
                name: 'Signet of the Ascendant',
                type: 'All',
                description: 'Reduces the cooldown of all Elite Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.448 ],
                        perLevel: [ 2.792/19 ] // == (3.24 - 0.448) / (20 - 1)
                    },
                    'superior': {
                        init: [ 4.04 ],
                        perLevel: [ 4.056/19 ] // == (8.096 - 4.04) / (20 - 1)
                    },
                    'epic': {
                        init: [ 9.248 ],
                        perLevel: [ 4.44/19 ] // == (13.688 - 9.248) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 15.36 ],
                        perLevel: [ 4.608/19 ] // == (19.968 - 15.36) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 21.648 ],
                        perLevel: [ 7.176/19 ] // == (28.824 - 21.648) / (20 - 1)
                    }
                }
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Signet of the Gambler',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Elements',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Engagement',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Waxing Delirium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Incantations',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Pupil',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Rifleman\'s Creed',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Intensity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Bludgeoning',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.11 ],
                        perLevel: [ 7.23/19 ] // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10.51 ],
                        perLevel: [ 11.73/19 ] // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.8 ],
                        perLevel: [ 14.95/19 ] // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 46.92 ],
                        perLevel: [ 18.77/19 ] // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 73.25 ],
                        perLevel: [ 37.96/19 ] // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Neophyte',
                type: 'All',
                description: 'Increases the damage and healing of all Basic Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'neck': [
            {
                id: 1,
                name: 'Signet of the Outlaw',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Devastation',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Riot Control',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Capriciousness',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Blood Rites',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Adept',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Commando',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Ferocity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Crushing',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.29 ],
                        perLevel: [ 1.79/19 ] // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 2.63 ],
                        perLevel: [ 3.12/19 ] // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 6.67 ],
                        perLevel: [ 3.86/19 ] // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 12.13 ],
                        perLevel: [ 4.85/19 ] // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 18.94 ],
                        perLevel: [ 9.81/19 ] // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Journeyman',
                type: 'All',
                description: 'Increases the damage and healing of all Power Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.1595 ],
                        perLevel: [ 0.9845/19 ] // == (1.144 - 0.1595) / (20 - 1)
                    },
                    'superior': {
                        init: [ 1.4465 ],
                        perLevel: [ 1.716/19 ] // == (3.1625 - 1.4465) / (20 - 1)
                    },
                    'epic': {
                        init: [ 3.6685 ],
                        perLevel: [ 2.123/19 ] // == (5.7915 - 3.6685) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 6.6715 ],
                        perLevel: [ 2.6675/19 ] // == (9.339 - 6.6715) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 10.417 ],
                        perLevel: [ 5.3955/19 ] // == (15.8125 - 10.417) / (20 - 1)
                    }
                }
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                type: 'All',
                description: 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.5 ],
                        perLevel: [ 3.12208/19 ] // == (3.62208 - 0.5) / (20 - 1)
                    },
                    'superior': {
                        init: [ 4.72463 ],
                        perLevel: [ 4.59049/19 ] // == (9.31512 - 4.72463) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.6 ],
                        perLevel: [ 5.1027/19 ] // == (16.7027 - 11.6) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 21.0972 ],
                        perLevel: [ 5.3949/19 ] // == (26.4921 - 21.0972) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 32.9327 ],
                        perLevel: [ 8.5981/19 ] // == (41.5308 - 32.9327) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Overwhelming Power',
                type: 'All',
                description: 'Increases the damage and healing of Ultimate Abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.5 ],
                        perLevel: [ 3.12/19 ] // == (3.62 - 0.5) / (20 - 1)
                    },
                    'superior': {
                        init: [ 4.72 ],
                        perLevel: [ 5.28/19 ] // == (10 - 4.72) / (20 - 1)
                    },
                    'epic': {
                        init: [ 11.6 ],
                        perLevel: [ 5.1/19 ] // == (16.7 - 11.6) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 21.1 ],
                        perLevel: [ 5.39/19 ] // == (26.49 - 21.1) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 32.93 ],
                        perLevel: [ 8.60/19 ] // == (41.53 - 32.93) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Nemain',
                type: 'All',
                description: 'Increases the maximum number of targets hit by area abilities by <span id="%id-signet-bonus1" class="stat-value const">%d</span> and increases damage by <span id="%id-signet-bonus2" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 0, 4 ],
                ratio: {
                    'standard': {
                        init: [ 1, 0.29 ],
                        perLevel: [ 0, 1.79/19 ] // == - | (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: [ 1, 2.63 ],
                        perLevel: [ 0, 3.12/19 ] // == - | (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 2, 6.67 ],
                        perLevel: [ 0, 3.86/19 ] // == - | (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 2, 12.13 ],
                        perLevel: [ 0, 4.85/19 ] // == - | (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 3, 18.94 ],
                        perLevel: [ 0, 9.81/19 ] // == - | (28.75 - 18.94) / (20 - 1)
                    }
                }
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a <span id="%id-signet-bonus1" class="stat-value heal">%d</span><span class="stat-value heal">%</span> bonus to healing for <span class="stat-value const">5</span> seconds. This ability can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.56 ],
                        perLevel: [ 3.66/19 ] // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: [ 5.32 ],
                        perLevel: [ 5.94/19 ] // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: [ 13.07 ],
                        perLevel: [ 7.57/19 ] // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 23.76 ],
                        perLevel: [ 9.51/19 ] // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 37.1 ],
                        perLevel: [ 19.22/19 ] // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cruel Delight',
                type: 'All',
                description: 'When you critically hit, you are healed for <span id="%id-signet-bonus1" class="stat-value heal">%d</span>.',
                decimals: [ 4 ],
                ratio: { // TODO : estimated values here
                    'standard': {
                        init: [ 5 ],
                        perLevel: [ 30/19 ]
                    },
                    'superior': {
                        init: [ 43 ],
                        perLevel: [ 53/19 ]
                    },
                    'epic': {
                        init: [ 108 ],
                        perLevel: [ 96/19 ]
                    },
                    'mythic': {
                        init: [ 197 ],
                        perLevel: [ 79/19 ]
                    },
                    'legendary': {
                        init: [ 307 ],
                        perLevel: [ 159/19 ]
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Echoes',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that heals for <span id="%id-signet-bonus1" class="stat-value heal">%d</span> every second for <span class="stat-value const">5</span> seconds. This ability can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.001 ],
                        perLevel: [ 0.099/19 ] // == (0.01 - 0.001) / (20 - 1)
                    },
                    'superior': {
                        init: [ 0.0129 ],
                        perLevel: [ 0.143/19 ] // == (0.0272 - 0.0129) / (20 - 1)
                    },
                    'epic': {
                        init: [ 0.0315 ],
                        perLevel: [ 0.0186/19 ] // == (0.0501 - 0.0315) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 0.0587 ],
                        perLevel: [ 0.0229/19 ] // == (0.0816 - 0.0587) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 0.0917 ],
                        perLevel: [ 0.0483/19 ] // == (0.14 - 0.0917) / (20 - 1)
                    }
                },
                stat: 'Healing Power'
            },
            {
                id: 4,
                name: 'Signet of Empowerment',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that increases their damage by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span> for <span class="stat-value const">5</span> seconds. This ability can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.09 ],
                        perLevel: [ 0.62/19 ] // == (0.71 - 0.09) / (20 - 1)
                    },
                    'superior': {
                        init: [ 0.89 ],
                        perLevel: [ 0.99/19 ] // == (1.88 - 0.89) / (20 - 1)
                    },
                    'epic': {
                        init: [ 2.18 ],
                        perLevel: [ 1.27/19 ] // == (3.45 - 2.18) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 3.97 ],
                        perLevel: [ 1.59/19 ] // == (5.56 - 3.97) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 6.2 ],
                        perLevel: [ 3.21/19 ] // == (9.41 - 6.2) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Laceration',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span> bonus to critical damage for <span class="stat-value const">5</span> seconds. This ability can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.19 ],
                        perLevel: [ 1.22/19 ] // == (1.41 - 0.19) / (20 - 1)
                    },
                    'superior': {
                        init: [ 1.78 ],
                        perLevel: [ 1.98/19 ] // == (3.76 - 1.78) / (20 - 1)
                    },
                    'epic': {
                        init: [ 4.37 ],
                        perLevel: [ 2.53/19 ] // == (6.9 - 4.37) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 7.94 ],
                        perLevel: [ 3.18/19 ] // == (11.12 - 7.94) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 12.4 ],
                        perLevel: [ 6.42/19 ] // == (18.82 - 12.4) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of Sadism',
                type: 'All',
                description: 'When you critically hit, your target is affected with a detrimental effect that deals <span id="%id-signet-bonus1" class="stat-value dps">%d</span> damage every second for <span class="stat-value const">5</span> seconds. This ability can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.002 ],
                        perLevel: [ 0.0086/19 ] // == (0.0106 - 0.002) / (20 - 1)
                    },
                    'superior': {
                        init: [ 0.0133 ],
                        perLevel: [ 0.0153/19 ] // == (0.0286 - 0.0133) / (20 - 1)
                    },
                    'epic': {
                        init: [ 0.0326 ],
                        perLevel: [ 0.0193/19 ] // == (0.0519 - 0.0326) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 0.0592 ],
                        perLevel: [ 0.0240/19 ] // == (0.0832 - 0.0592) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 0.0925 ],
                        perLevel: [ 0.0479/19 ] // == (0.1404 - 0.0925) / (20 - 1)
                    }
                },
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Signet of Thirst',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="%id-signet-bonus1" class="stat-value heal">%d</span><span class="stat-value heal">%</span> leech effect for <span class="stat-value const">5</span> seconds. This effect can heal up to <span id="%id-signet-bonus2" class="stat-value const">2248</span> damage before being removed, and can only occur once every <span class="stat-value const">15</span> seconds.',
                decimals: [ 4, 0 ],
                ratio: {
                    'standard': {
                        init: [ 8, 105 ],
                        perLevel: [ 1/19, 682/19 ] // == (9 - 8) / (20 - 1) ; (787 - 105) / (20 - 1)
                    },
                    'superior': {
                        init: [ 10, 992 ],
                        perLevel: [ 1/19, 1108/19 ] // == (11 - 10) / (20 - 1) ; (2100 - 992) / (20 - 1)
                    },
                    'epic': {
                        init: [ 12, 2436 ],
                        perLevel: [ 1/19, 1411/19 ] // == (13 - 12) / (20 - 1) ; (3847 - 2436) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 14, 4430 ],
                        perLevel: [ 1/19, 1773/19 ] // == (15 - 14) / (20 - 1) ; (6203 - 4430) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 16, 6916 ],
                        perLevel: [ 1/19, 3584/19 ] // == (17 - 16) / (20 - 1) ; (10500 - 6916) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Thorns',
                type: 'All',
                description: 'When you activate a Signature ability, gain a beneficial effect that damages attackers for <span id="%id-signet-bonus1" class="stat-value dps">%d</span> when they hit you for <span class="stat-value const">5</span> seconds. This damage scales with your Maximum Health.',
                decimals: [ 0 ],
                ratio: { // TODO wrong figures ! extrapolated from the lvl 1 standard figure found here https://www.tswdb.com/miscellaneous/signets/ + pre-rebalance patch figures (all in all : ~ divided by 10 compared to before)
                    'standard': {
                        init: [ 0.0003 ],
                        perLevel: [ 0.0024/19 ] // == (0.0027 - 0.0003) / (20 - 1)
                    },
                    'superior': {
                        init: [ 0.0033 ],
                        perLevel: [ 0.0037/19 ] // == (0.0071 - 0.0033) / (20 - 1)
                    },
                    'epic': {
                        init: [ 0.0082 ],
                        perLevel: [ 0.0046/19 ] // == (0.0128 - 0.0082) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 0.0148 ],
                        perLevel: [ 0.0059/19 ] // == (0.0207 - 0.0148) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 0.0231 ],
                        perLevel: [ 0.0119/19 ] // == (0.035 - 0.0231) / (20 - 1)
                    }
                },
                stat: 'Hit Points'
            },
            {
                id: 9,
                name: 'Signet of Vitalization',
                type: 'All',
                description: 'When you activate a Signature ability, gain <span id="%id-signet-bonus1" class="stat-value heal">%d</span> temporary health for <span class="stat-value const">5</span> seconds.',
                decimals: [ 0 ],
                ratio: {
                    'standard': {
                        init: [ 59 ],
                        perLevel: [ 378/19 ] // == (437 - 59) / (20 - 1)
                    },
                    'superior': {
                        init: [ 550 ],
                        perLevel: [ 613/19 ] // == (1163 - 550) / (20 - 1)
                    },
                    'epic': {
                        init: [ 1344 ],
                        perLevel: [ 783/19 ] // == (2127 - 1344) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 2434 ],
                        perLevel: [ 982/19 ] // == (3416 - 2434) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 3778 ],
                        perLevel: [ 1987/19 ] // == (5765 - 3778) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of Resilience',
                type: 'All',
                description: 'When you activate a Signature ability, gain <span id="%id-signet-bonus1" class="stat-value const">%d</span> Protection for <span class="stat-value const">3</span> seconds.',
                decimals: [ 0 ],
                ratio: {
                    'standard': {
                        init: [ 23 ],
                        perLevel: [ 149/19 ] // == (172 - 23) / (20 - 1)
                    },
                    'superior': {
                        init: [ 218 ],
                        perLevel: [ 242/19 ] // == (460 - 218) / (20 - 1)
                    },
                    'epic': {
                        init: [ 541 ],
                        perLevel: [ 307/19 ] // == (848 - 541) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 996 ],
                        perLevel: [ 386/19 ] // == (1382 - 996) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 1582 ],
                        perLevel: [ 783/19 ] // == (2365 - 1582) / (20 - 1)
                    }
                }
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Biological Metamorphosis',
                type: 'All',
                description: 'Increases the healing of Gadgets by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.45 ],
                        perLevel: [ 9.44/19 ] // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        init: [ 13.72 ],
                        perLevel: [ 15.32/19 ] // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        init: [ 33.68 ],
                        perLevel: [ 19.52/19 ] // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 61.26 ],
                        perLevel: [ 24.5/19 ] // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 95.63 ],
                        perLevel: [ 49.53/19 ] // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Matter Creation',
                type: 'All',
                description: 'Increases the damage of Gadgets by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.45 ],
                        perLevel: [ 9.44/19 ] // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        init: [ 13.72 ],
                        perLevel: [ 15.32/19 ] // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        init: [ 33.68 ],
                        perLevel: [ 19.52/19 ] // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 61.26 ],
                        perLevel: [ 24.5/19 ] // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 95.63 ],
                        perLevel: [ 49.53/19 ] // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Time and Space Alteration',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1.43 ],
                        perLevel: [ 8.39/19 ] // == (9.82 - 1.43) / (20 - 1)
                    },
                    'superior': {
                        init: [ 12.06 ],
                        perLevel: [ 10.44/19 ] // == (22.5 - 12.06) / (20 - 1)
                    },
                    'epic': {
                        init: [ 25.2 ],
                        perLevel: [ 9.52/19 ] // == (34.72 - 25.2) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 37.99 ],
                        perLevel: [ 8.18/19 ] // == (46.17 - 37.99) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 48.88 ],
                        perLevel: [ 10.33/19 ] // == (59.21 - 48.88) / (20 - 1)
                    }
                }
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                type: 'All',
                description: 'Reduces the cooldown of Active Dodge by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.99 ],
                        perLevel: [ 5.99/19 ] // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        init: [ 8.63 ],
                        perLevel: [ 8.04/19 ] // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 18.83 ],
                        perLevel: [ 7.98/19 ] // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 29.67 ],
                        perLevel: [ 7.47/19 ] // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 39.71 ],
                        perLevel: [ 10.29/19 ] // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Contortion',
                type: 'All',
                description: 'Active dodges break movement hindering effects, but also have their cooldown increased by <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 99.01 ],
                        perLevel: [ -5.99/19 ] // == (99.01 - 93.02) / (20 - 1)
                    },
                    'superior': {
                        init: [ 91.37 ],
                        perLevel: [ -8.04/19 ] // == (91.37 - 83.33) / (20 - 1)
                    },
                    'epic': {
                        init: [ 81.17 ],
                        perLevel: [ -7.98/19 ] // == (81.17 - 73.19) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 70.33 ],
                        perLevel: [ -7.47/19 ] // == (70.33 - 62.86) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 62.29 ],
                        perLevel: [ -12.29/19 ] // == (62.29 - 50) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Shoulder Tackle',
                type: 'All',
                description: 'Your active dodges have a <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span> to knock down enemies in your path, but also have their cooldown increased by <span id="%id-signet-bonus2" class="stat-value const">%d</span><span class="stat-value const">%</span>.',
                decimals: [ 0, 4 ],
                ratio: {
                    'standard': {
                        init: [ 10, 99.01 ],
                        perLevel: [ 0, 5.99/19 ] // == (10 - 10) / (20 - 1) | (99.01 - 93.02) / (20 - 1)
                    },
                    'superior': {
                        init: [ 20, 91.37 ],
                        perLevel: [ 0, 8.04/19 ] // == (20 - 20) / (20 - 1) | (91.37 - 83.33) / (20 - 1)
                    },
                    'epic': {
                        init: [ 30, 81.17 ],
                        perLevel: [ 0, 7.98/19 ] // == (30 - 30) / (20 - 1) | (81.17 - 73.19) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 40, 70.33 ],
                        perLevel: [ 0, 7.47/19 ] // == (40 - 40) / (20 - 1) | (70.33 - 62.86) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 50, 60.29 ],
                        perLevel: [ 0, 10.29/19 ] // == (50 - 50) / (20 - 1) | (60.29 - 50) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Quickness',
                type: 'All',
                description: 'After using Active Dodge, you receive a speed bonus of <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span> for <span class="stat-value const">4</span> seconds.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 1 ],
                        perLevel: [ 6/19 ] // == (7 - 1) / (20 - 1)
                    },
                    'superior': {
                        init: [ 9 ],
                        perLevel: [ 8/19 ] // == (17 - 9) / (20 - 1)
                    },
                    'epic': {
                        init: [ 19 ],
                        perLevel: [ 8/19 ] // == (27 - 19) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 30 ],
                        perLevel: [ 7/19 ] // == (37 - 30) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 39.71 ],
                        perLevel: [ 10.29/19 ] // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Agility',
                type: 'All',
                description: 'Your active dodges have a <span id="%id-signet-bonus1" class="stat-value const">%d</span><span class="stat-value const">%</span> chance to not trigger their cooldown.',
                decimals: [ 4 ],
                ratio: {
                    'standard': {
                        init: [ 0.99 ],
                        perLevel: [ 5.99/19 ] // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        init: [ 8.63 ],
                        perLevel: [ 8.04/19 ] // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        init: [ 18.83 ],
                        perLevel: [ 7.98/19 ] // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 29.67 ],
                        perLevel: [ 7.47/19 ] // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 39.71 ],
                        perLevel: [ 10.29/19 ] // == (50 - 39.71) / (20 - 1)
                    }
                }
            }
        ]
    }
}
