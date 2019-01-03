var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.template_data = {
    slots: [
        {
            id_prefix: 'weapon',
            name: 'Primary Weapon',
            kind: 'weapon',
            group: 'weapon',
            type: 'weapon',
            is_weapon: true,
            is_primary: true
        },
        {
            id_prefix: 'weapon2',
            name: 'Secondary Weapon',
            kind: 'weapon',
            group: 'weapon',
            type: 'weapon',
            is_weapon: true,
            is_primary: false
        },
        {
            id_prefix: 'head',
            name: 'Head Talisman',
            kind: 'head',
            group: 'head',
            type: 'talisman'
        },
        {
            id_prefix: 'finger',
            name: 'Finger Talisman',
            kind: 'finger',
            group: 'major',
            type: 'talisman'
        },
        {
            id_prefix: 'neck',
            name: 'Neck Talisman',
            kind: 'neck',
            type: 'talisman',
            group: 'major'
        },
        {
            id_prefix: 'wrist',
            name: 'Wrist Talisman',
            kind: 'wrist',
            type: 'talisman',
            group: 'major'
        },
        {
            id_prefix: 'luck',
            name: 'Luck Talisman',
            kind: 'luck',
            type: 'talisman',
            group: 'minor'
        },
        {
            id_prefix: 'waist',
            name: 'Waist Talisman',
            kind: 'waist',
            type: 'talisman',
            group: 'minor'
        },
        {
            id_prefix: 'occult',
            name: 'Occult Talisman',
            kind: 'occult',
            type: 'talisman',
            group: 'minor'
        }
    ]
};
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.power_rating = {
    'weapon': {
        'standard': {
            weapon_power_init: 50,
            weapon_power_per_level: 329/19 // == (5000 - 3293) / (20 - 1)
        },
        'superior': {
            weapon_power_init: 500,
            weapon_power_per_level: 500/24 // == (1000 - 500) / (25 - 1)
        },
        'epic': {
            weapon_power_init: 1160,
            weapon_power_per_level: 672/29 // == (1832 - 1160) / (30 - 1)
        },
        'mythic': {
            weapon_power_init: 2110,
            weapon_power_per_level: 844/34 // == (2954 - 2110) / (35 - 1)
        },
        'legendary': {
            weapon_power_init: 3293,
            weapon_power_per_level: 1707/69 // == (5000 - 3293) / (70 - 1)
        }
    },
    'head': {
        'standard': {
            'faded': {
                power_rating_init: 42,
                power_rating_per_level: 190/19 // == (232 - 42) / (20 - 1)
            },
            'luminous': {
                power_rating_init: 47,
                power_rating_per_level: 216/19 // == (263 - 47) / (20 - 1)
            },
            'radiant': {
                power_rating_init: 53,
                power_rating_per_level: 240/19 // == (293 - 53) / (20 - 1)
            }
        },
        'superior': {
            'faded': {
                power_rating_init: 293,
                power_rating_per_level: 291/24 // == (584 - 293) / (25 - 1)
            },
            'luminous': {
                power_rating_init: 329,
                power_rating_per_level: 328/24 // == (657 - 329) / (25 - 1)
            },
            'radiant': {
                power_rating_init: 366,
                power_rating_per_level: 364/24 // == (730 - 366) / (25 - 1)
            }
        },
        'epic': {
            'faded': {
                power_rating_init: 677,
                power_rating_per_level: 393/29 // == (1070 - 677) / (30 - 1)
            },
            'luminous': {
                power_rating_init: 762,
                power_rating_per_level: 442/29 // == (1204 - 762) / (30 - 1)
            },
            'radiant': {
                power_rating_init: 847,
                power_rating_per_level: 490/29 // == (1337 - 847) / (30 - 1)
            }
        },
        'mythic': {
            'faded': {
                power_rating_init: 1232,
                power_rating_per_level: 493/34 // == (1725 - 1232) / (35 - 1)
            },
            'luminous': {
                power_rating_init: 1386,
                power_rating_per_level: 555/34 // == (1941 - 1386) / (35 - 1)
            },
            'radiant': {
                power_rating_init: 1540,
                power_rating_per_level: 616/34 // == (2156 - 1540) / (35 - 1)
            }
        },
        'legendary': {
            'faded': {
                power_rating_init: 1923,
                power_rating_per_level: 997/69 // == (2920 - 1923) / (70 - 1)
            },
            'luminous': {
                power_rating_init: 2164,
                power_rating_per_level: 1121/69 // == (3285 - 2164) / (70 - 1)
            },
            'radiant': {
                power_rating_init: 2404,
                power_rating_per_level: 1246/69 // == (3650 - 2404) / (70 - 1)
            }
        }
    },
    'major': {
        'standard': {
            'faded': {
                power_rating_init: 25,
                power_rating_per_level: 115/19 // == (140 - 25) / (20 - 1)
            },
            'luminous': {
                power_rating_init: 28,
                power_rating_per_level: 130/19 // == (158 - 28) / (20 - 1)
            },
            'radiant': {
                power_rating_init: 32,
                power_rating_per_level: 144/19 // == (176 - 32) / (20 - 1)
            }
        },
        'superior': {
            'faded': {
                power_rating_init: 176,
                power_rating_per_level: 174/24 // == (350 - 176) / (25 - 1)
            },
            'luminous': {
                power_rating_init: 198,
                power_rating_per_level: 196/24 // == (394 - 198) / (25 - 1)
            },
            'radiant': {
                power_rating_init: 220,
                power_rating_per_level: 218/24 // == (438 - 220) / (25 - 1)
            }
        },
        'epic': {
            'faded': {
                power_rating_init: 406,
                power_rating_per_level: 236/29 // == (642 - 406) / (30 - 1)
            },
            'luminous': {
                power_rating_init: 457,
                power_rating_per_level: 265/29 // == (722 - 457) / (30 - 1)
            },
            'radiant': {
                power_rating_init: 508,
                power_rating_per_level: 294/29 // == (802 - 508) / (30 - 1)
            }
        },
        'mythic': {
            'faded': {
                power_rating_init: 739,
                power_rating_per_level: 296/34 // == (1035 - 739) / (35 - 1)
            },
            'luminous': {
                power_rating_init: 832,
                power_rating_per_level: 332/34 // == (1164 - 832) / (35 - 1)
            },
            'radiant': {
                power_rating_init: 924,
                power_rating_per_level: 370/34 // == (1294 - 924) / (35 - 1)
            }
        },
        'legendary': {
            'faded': {
                power_rating_init: 1154,
                power_rating_per_level: 598/69 // == (1752 - 1154) / (70 - 1)
            },
            'luminous': {
                power_rating_init: 1298,
                power_rating_per_level: 673/69 // == (1971 - 1298) / (70 - 1)
            },
            'radiant': {
                power_rating_init: 1442,
                power_rating_per_level: 748/69 // == (2190 - 1442) / (70 - 1)
            }
        }
    },
    'minor': {
        'standard': {
            'faded': {
                power_rating_init: 17,
                power_rating_per_level: 77/19 // == (94 - 17) / (20 - 1)
            },
            'luminous': {
                power_rating_init: 19,
                power_rating_per_level: 86/19 // == (105 - 19) / (20 - 1)
            },
            'radiant': {
                power_rating_init: 21,
                power_rating_per_level: 96/19 // == (117 - 21) / (20 - 1)
            }
        },
        'superior': {
            'faded': {
                power_rating_init: 117,
                power_rating_per_level: 117/24 // == (234 - 117) / (25 - 1)
            },
            'luminous': {
                power_rating_init: 132,
                power_rating_per_level: 131/24 // == (263 - 132) / (25 - 1)
            },
            'radiant': {
                power_rating_init: 146,
                power_rating_per_level: 146/24 // == (292 - 146) / (25 - 1)
            }
        },
        'epic': {
            'faded': {
                power_rating_init: 271,
                power_rating_per_level: 157/29 // == (428 - 271) / (30 - 1)
            },
            'luminous': {
                power_rating_init: 305,
                power_rating_per_level: 176/29 // == (481 - 305) / (30 - 1)
            },
            'radiant': {
                power_rating_init: 339,
                power_rating_per_level: 196/29 // == (535 - 339) / (30 - 1)
            }
        },
        'mythic': {
            'faded': {
                power_rating_init: 493,
                power_rating_per_level: 197/34 // == (690 - 493) / (35 - 1)
            },
            'luminous': {
                power_rating_init: 554,
                power_rating_per_level: 222/34 // == (776 - 554) / (35 - 1)
            },
            'radiant': {
                power_rating_init: 616,
                power_rating_per_level: 246/34 // == (862 - 616) / (35 - 1)
            }
        },
        'legendary': {
            'faded': {
                power_rating_init: 769,
                power_rating_per_level: 399/69 // == (1168 - 769) / (70 - 1)
            },
            'luminous': {
                power_rating_init: 865,
                power_rating_per_level: 449/69 // == (1314 - 865) / (70 - 1)
            },
            'radiant': {
                power_rating_init: 962,
                power_rating_per_level: 498/69 // == (1460 - 962) / (70 - 1)
            }
        }
    }
};
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.glyph_stat_mapping = {
    to_num: {
        'none': 0,
        'hit-rating': 1,
        'critical-rating': 2,
        'critical-power': 3,
        'evade-rating': 4,
        'defense-rating': 5,
    },
    to_stat: {
        0: 'none',
        1: 'hit-rating',
        2: 'critical-rating',
        3: 'critical-power',
        4: 'evade-rating',
        5: 'defense-rating',
    },
    to_stat_GUIformat: {
        'none': '',
        'hit-rating': 'Hit Rating',
        'critical-rating': 'Critical Rating',
        'critical-power': 'Critical Power',
        'evade-rating': 'Evade Rating',
        'defense-rating': 'Defense Rating',
    }
};

swlcalc.data.rarity_mapping = {
    to_num: {
        'none': 0,
        'standard': 1,
        'superior': 2,
        'epic': 3,
        'mythic': 4,
        'legendary': 5
    },
    to_name: {
        0: 'none',
        1: 'standard',
        2: 'superior',
        3: 'epic',
        4: 'mythic',
        5: 'legendary'
    },
    to_colour: {
        'none': 'white',
        'standard': 'green',
        'superior': 'blue',
        'epic': 'purple',
        'mythic': 'yellow',
        'legendary': 'red'
    },
    to_max_level: {
        'none': 0,
        'standard': 20,
        'superior': 25,
        'epic': 30,
        'mythic': 35,
        'legendary': 70
    }
};

swlcalc.data.weapon_quality_mapping = {
    to_num: {
        'none': 0,
        'mkI': 1,
        'mkII': 2,
        'mkIII': 3,
    },
    to_name: {
        0: 'none',
        1: 'mkI',
        2: 'mkII',
        3: 'mkIII',
    }
};

swlcalc.data.glyph_quality_mapping = {
    to_num: {
        'none': 0,
        'crude': 1,
        'simple': 2,
        'intricate': 3,
    },
    to_name: {
        0: 'none',
        1: 'crude',
        2: 'simple',
        3: 'intricate',
    }
};

swlcalc.data.talisman_quality_mapping = {
    to_num: {
        'none': 0,
        'faded': 1,
        'luminous': 2,
        'radiant': 3,
    },
    to_name: {
        0: 'none',
        1: 'faded',
        2: 'luminous',
        3: 'radiant',
    }
};

swlcalc.data.suffix_mapping = {
    to_num: {
        'alacrity': 1,
        'destruction': 2,
        'energy': 3,
        'efficiency': 4,
        'havoc': 5,
        'restoration': 6,
        'recovery': 7,
        'warding': 8
    },
    to_name: {
        1: 'alacrity',
        2: 'destruction',
        3: 'energy',
        4: 'efficiency',
        5: 'havoc',
        6: 'restoration',
        7: 'recovery',
        8: 'warding'
    }
};
;var swlcalc = swlcalc || {};
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
                description: 'Increased your move speed by <span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> while in combat.',
                quality: {
                    'mkI': 10,
                    'mkII': 15,
                    'mkIII': 20
                }
            },
            {
                id: 2,
                name: 'Destruction',
                description: 'This weapon deals <span id="%id-signet-bonus" class="bonus-var-attack">%d</span> additional damage to enemies that are below 35% health.',
                quality: {
                    'mkI': 0.15,
                    'mkII': 0.30,
                    'mkIII': 0.45
                },
                stat: 'Combat Power'
            },
            {
                id: 3,
                name: 'Energy',
                description: 'When you use a Power Ability with this weapon you have <span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> of consuming one less Energy.',
                quality: {
                    'mkI': 11,
                    'mkII': 22,
                    'mkIII': 33
                }
            },
            {
                id: 4,
                name: 'Efficiency',
                description: 'Your attacks and heals with this weapon have a 50% chance to reduce the remaining cooldown time on your Elite Ability by <span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                quality: {
                    'mkI': 2,
                    'mkII': 3,
                    'mkIII': 5
                }
            },
            {
                id: 5,
                name: 'Havoc',
                description: '+<span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> critical hit damage and critical healing.',
                quality: {
                    'mkI': 2.5,
                    'mkII': 5,
                    'mkIII': 7.5
                }
            },
            {
                id: 6,
                name: 'Restoration',
                description: 'When you hit or heal a target with this weapon you have a 50% chance to restore <span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> of your health.',
                quality: {
                    'mkI': 0.75,
                    'mkII': 1.5,
                    'mkIII': 2.25
                }
            },
            {
                id: 7,
                name: 'Recovery',
                description: 'You receive <span id="%id-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> more health from incoming heals.',
                quality: {
                    'mkI': 1,
                    'mkII': 2,
                    'mkIII': 3
                }
            },
            {
                id: 8,
                name: 'Warding',
                description: 'Increases Protection by <span id="%id-signet-bonus" class="bonus-const">%d</span> while wielded.',
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
                description: 'Increases the damage and healing of Pistols Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cataclysms',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elemental Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Deadly Force',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Disequilibrium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Rituals',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Master',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Veteran',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Fervour',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Weapon Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Shattering',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Paragon',
                type: 'All',
                description: 'Increases the damage and healing of all Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.448,
                        per_level: 2.928/19 // == (3.376 - 0.448) / (20 - 1)
                    },
                    'superior': {
                        init: 4.256,
                        per_level: 4.752/19 // == (9.008 - 4.256) / (20 - 1)
                    },
                    'epic': {
                        init: 10.456,
                        per_level: 6.056/19 // == (16.512 - 10.456) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.008,
                        per_level: 7.608/19 // == (26.616 - 19.008) / (20 - 1)
                    },
                    'legendary': {
                        init: 29.68,
                        per_level: 15.376/19 // == (45.056 - 29.68) / (20 - 1)
                    }
                }
            },
            {
                id: 11,
                name: 'Signet of Quick Draw',
                type: 'Pistols',
                description: 'Reduces the cooldown of Pistols Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 12,
                name: 'Signet of the Conflux',
                type: 'Elementalism',
                description: 'Reduces the cooldown of Elemental Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 13,
                name: 'Signet of Rapid Response',
                type: 'Shotgun',
                description: 'Reduces the cooldown of Shotgun Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 14,
                name: 'Signet of Transience',
                type: 'Chaos',
                description: 'Reduces the cooldown of Chaos Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 15,
                name: 'Signet of Bloodletting',
                type: 'Blood',
                description: 'Reduces the cooldown of Blood Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 16,
                name: 'Signet of Bladestorm',
                type: 'Blade',
                description: 'Reduces the cooldown of Blade Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 17,
                name: 'Signet of Burst Fire',
                type: 'Assault Rifle',
                description: 'Reduces the cooldown of Assault Rifle Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 18,
                name: 'Signet of Zeal',
                type: 'Fist',
                description: 'Reduces the cooldown of Fist Weapon Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 19,
                name: 'Signet of Mauling',
                type: 'Hammer',
                description: 'Reduces the cooldown of Hammer Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.49/19 // == (4.05 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.05,
                        per_level: 5.07/19 // == (10.12 - 5.05) / (20 - 1)
                    },
                    'epic': {
                        init: 11.56,
                        per_level: 5.55/19 // == (17.11 - 11.56) / (20 - 1)
                    },
                    'mythic': {
                        init: 19.2,
                        per_level: 5.76/19 // == (24.96 - 19.2) / (20 - 1)
                    },
                    'legendary': {
                        init: 27.06,
                        per_level: 8.97/19 // == (36.03 - 27.06) / (20 - 1)
                    }
                }
            },
            {
                id: 20,
                name: 'Signet of the Ascendant',
                type: 'All',
                description: 'Reduces the cooldown of all Elite Abilities by <span id="head-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.448,
                        per_level: 2.792/19 // == (3.24 - 0.448) / (20 - 1)
                    },
                    'superior': {
                        init: 4.04,
                        per_level: 4.056/19 // == (8.096 - 4.04) / (20 - 1)
                    },
                    'epic': {
                        init: 9.248,
                        per_level: 4.44/19 // == (13.688 - 9.248) / (20 - 1)
                    },
                    'mythic': {
                        init: 15.36,
                        per_level: 4.608/19 // == (19.968 - 15.36) / (20 - 1)
                    },
                    'legendary': {
                        init: 21.648,
                        per_level: 7.176/19 // == (28.824 - 21.648) / (20 - 1)
                    }
                }
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Signet of the Gambler',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Elements',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Engagement',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Waxing Delirium',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Incantations',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Pupil',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of Rifleman\'s Creed',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Intensity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Bludgeoning',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 1.11,
                        per_level: 7.23/19 // == (8.34 - 1.11) / (20 - 1)
                    },
                    'superior': {
                        init: 10.51,
                        per_level: 11.73/19 // == (22.24 - 10.51) / (20 - 1)
                    },
                    'epic': {
                        init: 25.8,
                        per_level: 14.95/19 // == (40.75 - 25.8) / (20 - 1)
                    },
                    'mythic': {
                        init: 46.92,
                        per_level: 18.77/19 // == (65.69 - 46.92) / (20 - 1)
                    },
                    'legendary': {
                        init: 73.25,
                        per_level: 37.96/19 // == (111.21 - 73.25) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Neophyte',
                type: 'All',
                description: 'Increases the damage and healing of all Basic Abilities by <span id="finger-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            }
        ],
        'neck': [
            {
                id: 1,
                name: 'Signet of the Outlaw',
                type: 'Pistols',
                description: 'Increases the damage and healing of Pistols Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Devastation',
                type: 'Elementalism',
                description: 'Increases the damage and healing of Elementalism Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Riot Control',
                type: 'Shotgun',
                description: 'Increases the damage and healing of Shotgun Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Capriciousness',
                type: 'Chaos',
                description: 'Increases the damage and healing of Chaos Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Blood Rites',
                type: 'Blood',
                description: 'Increases the damage and healing of Blood Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of the Adept',
                type: 'Blade',
                description: 'Increases the damage and healing of Blade Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 7,
                name: 'Signet of the Commando',
                type: 'Assault Rifle',
                description: 'Increases the damage and healing of Assault Rifle Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Ferocity',
                type: 'Fist',
                description: 'Increases the damage and healing of Fist Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 9,
                name: 'Signet of Crushing',
                type: 'Hammer',
                description: 'Increases the damage and healing of Hammer Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.29,
                        per_level: 1.79/19 // == (2.08 - 0.29) / (20 - 1)
                    },
                    'superior': {
                        init: 2.63,
                        per_level: 3.12/19 // == (5.75 - 2.63) / (20 - 1)
                    },
                    'epic': {
                        init: 6.67,
                        per_level: 3.86/19 // == (10.53 - 6.67) / (20 - 1)
                    },
                    'mythic': {
                        init: 12.13,
                        per_level: 4.85/19 // == (16.98 - 12.13) / (20 - 1)
                    },
                    'legendary': {
                        init: 18.94,
                        per_level: 9.81/19 // == (28.75 - 18.94) / (20 - 1)
                    }
                }
            },
            {
                id: 10,
                name: 'Signet of the Journeyman',
                type: 'All',
                description: 'Increases the damage and healing of all Power Abilities by <span id="neck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.1595,
                        per_level: 0.9845/19 // == (1.144 - 0.1595) / (20 - 1)
                    },
                    'superior': {
                        init: 1.4465,
                        per_level: 1.716/19 // == (3.1625 - 1.4465) / (20 - 1)
                    },
                    'epic': {
                        init: 3.6685,
                        per_level: 2.123/19 // == (5.7915 - 3.6685) / (20 - 1)
                    },
                    'mythic': {
                        init: 6.6715,
                        per_level: 2.6675/19 // == (9.339 - 6.6715) / (20 - 1)
                    },
                    'legendary': {
                        init: 10.417,
                        per_level: 5.3955/19 // == (15.8125 - 10.417) / (20 - 1)
                    }
                }
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                type: 'All',
                description: 'Increases the rate at which your Ultimate Ability recharges on ability activation by <span id="wrist-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.5,
                        per_level: 3.12208/19 // == (3.62208 - 0.5) / (20 - 1)
                    },
                    'superior': {
                        init: 4.72463,
                        per_level: 4.59049/19 // == (9.31512 - 4.72463) / (20 - 1)
                    },
                    'epic': {
                        init: 11.6,
                        per_level: 5.1027/19 // == (16.7027 - 11.6) / (20 - 1)
                    },
                    'mythic': {
                        init: 21.0972,
                        per_level: 5.3949/19 // == (26.4921 - 21.0972) / (20 - 1)
                    },
                    'legendary': {
                        init: 32.9327,
                        per_level: 8.5981/19 // == (41.5308 - 32.9327) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Overwhelming Power',
                type: 'All',
                description: 'Increases the damage and healing of Ultimate Abilities by <span id="wrist-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.5,
                        per_level: 3.12/19 // == (3.62 - 0.5) / (20 - 1)
                    },
                    'superior': {
                        init: 4.72,
                        per_level: 5.28/19 // == (10 - 4.72) / (20 - 1)
                    },
                    'epic': {
                        init: 11.6,
                        per_level: 5.1/19 // == (16.7 - 11.6) / (20 - 1)
                    },
                    'mythic': {
                        init: 21.1,
                        per_level: 5.39/19 // == (26.49 - 21.1) / (20 - 1)
                    },
                    'legendary': {
                        init: 32.93,
                        per_level: 8.60/19 // == (41.53 - 32.93) / (20 - 1)
                    }
                }
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Amelioration',
                type: 'All',
                description: 'When you critically heal, you gain a beneficial effect that grants you a <span id="luck-signet-bonus" class="bonus-var-heal">%d</span><span class="bonus-var-heal">%</span> bonus to healing for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
                ratio: {
                    'standard': {
                        init: 0.56,
                        per_level: 3.66/19 // == (4.22 - 0.56) / (20 - 1)
                    },
                    'superior': {
                        init: 5.32,
                        per_level: 5.94/19 // == (11.26 - 5.32) / (20 - 1)
                    },
                    'epic': {
                        init: 13.07,
                        per_level: 7.57/19 // == (20.64 - 13.07) / (20 - 1)
                    },
                    'mythic': {
                        init: 23.76,
                        per_level: 9.51/19 // == (33.27 - 23.76) / (20 - 1)
                    },
                    'legendary': {
                        init: 37.1,
                        per_level: 19.22/19 // == (56.32 - 37.1) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Cruel Delight',
                type: 'All',
                description: 'When you critically hit, you are healed for <span id="luck-signet-bonus" class="bonus-var-heal">%d</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 14,
                        per_level: 91/19 // == (105 - 14) / (20 - 1)
                    },
                    'superior': {
                        init: 132,
                        per_level: 158/19 // == (280 - 132) / (20 - 1)
                    },
                    'epic': {
                        init: 325,
                        per_level: 288/19 // == (513 - 325) / (20 - 1)
                    },
                    'mythic': {
                        init: 591,
                        per_level: 236/19 // == (827 - 591) / (20 - 1)
                    },
                    'legendary': {
                        init: 922,
                        per_level: 478/19 // == (1400 - 922) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Echoes',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that heals for <span id="luck-signet-bonus" class="bonus-var-heal">%d</span> every second for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.001,
                        per_level: 0.099/19 // == (0.01 - 0.001) / (20 - 1)
                    },
                    'superior': {
                        init: 0.0129,
                        per_level: 0.143/19 // == (0.0272 - 0.0129) / (20 - 1)
                    },
                    'epic': {
                        init: 0.0315,
                        per_level: 0.0186/19 // == (0.0501 - 0.0315) / (20 - 1)
                    },
                    'mythic': {
                        init: 0.0587,
                        per_level: 0.0229/19 // == (0.0816 - 0.0587) / (20 - 1)
                    },
                    'legendary': {
                        init: 0.0917,
                        per_level: 0.0483/19 // == (0.14 - 0.0917) / (20 - 1)
                    }
                },
                stat: 'Healing Power'
            },
            {
                id: 4,
                name: 'Signet of Empowerment',
                type: 'All',
                description: 'When you critically heal, your defensive target is given a beneficial effect that increases their damage by <span id="luck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.09,
                        per_level: 0.62/19 // == (0.71 - 0.09) / (20 - 1)
                    },
                    'superior': {
                        init: 0.89,
                        per_level: 0.99/19 // == (1.88 - 0.89) / (20 - 1)
                    },
                    'epic': {
                        init: 2.18,
                        per_level: 1.27/19 // == (3.45 - 2.18) / (20 - 1)
                    },
                    'mythic': {
                        init: 3.97,
                        per_level: 1.59/19 // == (5.56 - 3.97) / (20 - 1)
                    },
                    'legendary': {
                        init: 6.2,
                        per_level: 3.21/19 // == (9.41 - 6.2) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Laceration',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="luck-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> bonus to critical damage for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.19,
                        per_level: 1.22/19 // == (1.41 - 0.19) / (20 - 1)
                    },
                    'superior': {
                        init: 1.78,
                        per_level: 1.98/19 // == (3.76 - 1.78) / (20 - 1)
                    },
                    'epic': {
                        init: 4.37,
                        per_level: 2.53/19 // == (6.9 - 4.37) / (20 - 1)
                    },
                    'mythic': {
                        init: 7.94,
                        per_level: 3.18/19 // == (11.12 - 7.94) / (20 - 1)
                    },
                    'legendary': {
                        init: 12.4,
                        per_level: 6.42/19 // == (18.82 - 12.4) / (20 - 1)
                    }
                }
            },
            {
                id: 6,
                name: 'Signet of Sadism',
                type: 'All',
                description: 'When you critically hit, your target is affected with a detrimental effect that deals <span id="luck-signet-bonus" class="bonus-var-attack">%d</span> damage every second for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.002,
                        per_level: 0.0086/19 // == (0.0106 - 0.002) / (20 - 1)
                    },
                    'superior': {
                        init: 0.0133,
                        per_level: 0.0153/19 // == (0.0286 - 0.0133) / (20 - 1)
                    },
                    'epic': {
                        init: 0.0326,
                        per_level: 0.0193/19 // == (0.0519 - 0.0326) / (20 - 1)
                    },
                    'mythic': {
                        init: 0.0592,
                        per_level: 0.0240/19 // == (0.0832 - 0.0592) / (20 - 1)
                    },
                    'legendary': {
                        init: 0.0925,
                        per_level: 0.0479/19 // == (0.1404 - 0.0925) / (20 - 1)
                    }
                },
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Signet of Thirst',
                type: 'All',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a <span id="luck-signet-bonus" class="bonus-var-heal">%d</span><span class="bonus-const">%</span> leech effect for <span class="bonus-const">5</span> seconds. This effect can heal up to y damage before being removed, and can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 8,
                        per_level: 1/19 // == (9 - 8) / (20 - 1)
                    },
                    'superior': {
                        init: 10,
                        per_level: 1/19 // == (11 - 10) / (20 - 1)
                    },
                    'epic': {
                        init: 12,
                        per_level: 1/19 // == (13 - 12) / (20 - 1)
                    },
                    'mythic': {
                        init: 14,
                        per_level: 1/19 // == (15 - 14) / (20 - 1)
                    },
                    'legendary': {
                        init: 16,
                        per_level: 1/19 // == (17 - 16) / (20 - 1)
                    }
                }
            },
            {
                id: 8,
                name: 'Signet of Thorns',
                type: 'All',
                description: 'When you critically hit, you are given a beneficial effect that damages attackers for <span id="luck-signet-bonus" class="bonus-var-attack">%d</span> when they hit you for <span class="bonus-const">5</span> seconds. This ability can only occur once every <span class="bonus-const">15</span> seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.004,
                        per_level: 0.0226/19 // == (0.0266 - 0.004) / (20 - 1)
                    },
                    'superior': {
                        init: 0.0333,
                        per_level: 0.0372/19 // == (0.0705 - 0.0333) / (20 - 1)
                    },
                    'epic': {
                        init: 0.0818,
                        per_level: 0.0466/19 // == (0.1284 - 0.0818) / (20 - 1)
                    },
                    'mythic': {
                        init: 0.1477,
                        per_level: 0.0592/19 // == (0.2069 - 0.1477) / (20 - 1)
                    },
                    'legendary': {
                        init: 0.2309,
                        per_level: 0.1191/19 // == (0.35 - 0.2309) / (20 - 1)
                    }
                },
                stat: 'Combat Power'
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Biological Metamorphosis',
                type: 'All',
                description: 'Increases the healing of Gadgets by <span id="waist-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.45,
                        per_level: 9.44/19 // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        init: 13.72,
                        per_level: 15.32/19 // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        init: 33.68,
                        per_level: 19.52/19 // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        init: 61.26,
                        per_level: 24.5/19 // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        init: 95.63,
                        per_level: 49.53/19 // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Matter Creation',
                type: 'All',
                description: 'Increases the damage of Gadgets by <span id="waist-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.45,
                        per_level: 9.44/19 // == (10.89 - 1.45) / (20 - 1)
                    },
                    'superior': {
                        init: 13.72,
                        per_level: 15.32/19 // == (29.04 - 13.72) / (20 - 1)
                    },
                    'epic': {
                        init: 33.68,
                        per_level: 19.52/19 // == (53.2 - 33.68) / (20 - 1)
                    },
                    'mythic': {
                        init: 61.26,
                        per_level: 24.5/19 // == (85.76 - 61.26) / (20 - 1)
                    },
                    'legendary': {
                        init: 95.63,
                        per_level: 49.53/19 // == (145.16 - 95.63) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Time and Space Alteration',
                type: 'All',
                description: 'Reduces the cooldown of Gadgets by <span id="waist-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1.43,
                        per_level: 8.39/19 // == (9.82 - 1.43) / (20 - 1)
                    },
                    'superior': {
                        init: 12.06,
                        per_level: 10.44/19 // == (22.5 - 12.06) / (20 - 1)
                    },
                    'epic': {
                        init: 25.2,
                        per_level: 9.52/19 // == (34.72 - 25.2) / (20 - 1)
                    },
                    'mythic': {
                        init: 37.99,
                        per_level: 8.18/19 // == (46.17 - 37.99) / (20 - 1)
                    },
                    'legendary': {
                        init: 48.88,
                        per_level: 10.33/19 // == (59.21 - 48.88) / (20 - 1)
                    }
                }
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                type: 'All',
                description: 'Reduces the cooldown of Active Dodge by <span id="occult-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.99,
                        per_level: 5.99/19 // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        init: 8.63,
                        per_level: 8.04/19 // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        init: 18.83,
                        per_level: 7.98/19 // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        init: 29.67,
                        per_level: 7.47/19 // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        init: 39.71,
                        per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 2,
                name: 'Signet of Contortion',
                type: 'All',
                description: 'Active dodges break movement hindering effects, but also have their cooldown increased by <span id="occult-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '', // TODO for this one the number decreases with levels !
                ratio: {
                    'standard': {
                        init: 99.01,
                        per_level: 5.99/19 // == (99.01 - 93.02) / (20 - 1)
                    },
                    'superior': {
                        init: 91.37,
                        per_level: 8.04/19 // == (91.37 - 83.33) / (20 - 1)
                    },
                    'epic': {
                        init: 81.17,
                        per_level: 7.98/19 // == (81.17 - 73.19) / (20 - 1)
                    },
                    'mythic': {
                        init: 70.33,
                        per_level: 7.47/19 // == (70.33 - 62.86) / (20 - 1)
                    },
                    'legendary': {
                        init: 62.29,
                        per_level: 12.29/19 // == (62.29 - 50) / (20 - 1)
                    }
                }
            },
            {
                id: 3,
                name: 'Signet of Shoulder Tackle',
                type: 'All',
                description: 'Your active dodges have a <span id="occult-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> to knock down enemies in your path, but also have their cooldown increased by <span id="occult-signet-bonus2" class="bonus-const">%d</span><span class="bonus-const">%</span>.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: [ 10, 99.01 ],
                        per_level: [ 0, 5.99/19 ] // == (10 - 10) / (20 - 1) | (99.01 - 93.02) / (20 - 1)
                    },
                    'superior': {
                        init: [ 20, 91.37 ],
                        per_level: [ 0, 8.04/19 ] // == (20 - 20) / (20 - 1) | (91.37 - 83.33) / (20 - 1)
                    },
                    'epic': {
                        init: [ 30, 81.17 ],
                        per_level: [ 0, 7.98/19 ] // == (30 - 30) / (20 - 1) | (81.17 - 73.19) / (20 - 1)
                    },
                    'mythic': {
                        init: [ 40, 70.33 ],
                        per_level: [ 0, 7.47/19 ] // == (40 - 40) / (20 - 1) | (70.33 - 62.86) / (20 - 1)
                    },
                    'legendary': {
                        init: [ 50, 60.29 ],
                        per_level: [ 0, 10.29/19 ] // == (50 - 50) / (20 - 1) | (60.29 - 50) / (20 - 1)
                    }
                }
            },
            {
                id: 4,
                name: 'Signet of Quickness',
                type: 'All',
                description: 'After using Active Dodge, you recieve a speed bonus of <span id="occult-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> for 4 seconds.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 1,
                        per_level: 6/19 // == (7 - 1) / (20 - 1)
                    },
                    'superior': {
                        init: 9,
                        per_level: 8/19 // == (17 - 9) / (20 - 1)
                    },
                    'epic': {
                        init: 19,
                        per_level: 8/19 // == (27 - 19) / (20 - 1)
                    },
                    'mythic': {
                        init: 30,
                        per_level: 7/19 // == (37 - 30) / (20 - 1)
                    },
                    'legendary': {
                        init: 39.71,
                        per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            },
            {
                id: 5,
                name: 'Signet of Agility',
                type: 'All',
                description: 'Your active dodges have a <span id="occult-signet-bonus" class="bonus-const">%d</span><span class="bonus-const">%</span> chance to not trigger their cooldown.',
                cooldown: '',
                ratio: {
                    'standard': {
                        init: 0.99,
                        per_level: 5.99/19 // == (6.98 - 0.99) / (20 - 1)
                    },
                    'superior': {
                        init: 8.63,
                        per_level: 8.04/19 // == (16.67 - 8.63) / (20 - 1)
                    },
                    'epic': {
                        init: 18.83,
                        per_level: 7.98/19 // == (26.81 - 18.83) / (20 - 1)
                    },
                    'mythic': {
                        init: 29.67,
                        per_level: 7.47/19 // == (37.14 - 29.67) / (20 - 1)
                    },
                    'legendary': {
                        init: 39.71,
                        per_level: 10.29/19 // == (50 - 39.71) / (20 - 1)
                    }
                }
            }
        ]
    }
}
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.glyph = {
    'standard': {
        'crude': {
            rating_init: 12,
            rating_per_level: 55/19 // == (67 - 12) / (20 - 1)
        },
        'simple': {
            rating_init: 14,
            rating_per_level: 62/19 // == (76 - 14) / (20 - 1)
        },
        'intricate': {
            rating_init: 15,
            rating_per_level: 69/19 // == (84 - 15) / (20 - 1)
        }
    },
    'superior': {
        'crude': {
            rating_init: 85,
            rating_per_level: 100/19 // == (185 - 85) / (20 - 1)
        },
        'simple': {
            rating_init: 95,
            rating_per_level: 113/19 // == (208 - 95) / (20 - 1)
        },
        'intricate': {
            rating_init: 106,
            rating_per_level: 125/19 // == (231 - 106) / (20 - 1)
        }
    },
    'epic': {
        'crude': {
            rating_init: 215,
            rating_per_level: 124/19 // == (339 - 215) / (20 - 1)
        },
        'simple': {
            rating_init: 241,
            rating_per_level: 140/19 // == (381 - 241) / (20 - 1)
        },
        'intricate': {
            rating_init: 268,
            rating_per_level: 156/19 // == (424 - 268) / (20 - 1)
        }
    },
    'mythic': {
        'crude': {
            rating_init: 390,
            rating_per_level: 156/19 // == (546 - 390) / (20 - 1)
        },
        'simple': {
            rating_init: 439,
            rating_per_level: 176/19 // == (615 - 439) / (20 - 1)
        },
        'intricate': {
            rating_init: 488,
            rating_per_level: 195/19 // == (683 - 488) / (20 - 1)
        }
    },
    'legendary': {
        'crude': {
            rating_init: 610,
            rating_per_level: 315/19 // == (925 - 610) / (20 - 1)
        },
        'simple': {
            rating_init: 686,
            rating_per_level: 354/19 // == (1040 - 686) / (20 - 1)
        },
        'intricate': {
            rating_init: 762,
            rating_per_level: 394/19 // == (1156 - 762) / (20 - 1)
        }
    }
};
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.equipments = {
    slot: {
        'weapon': [
            {
                id: 1,
                type: 'Blade',
                name: 'Blade',
                description: ''
            },
            {
                id: 2,
                type: 'Hammer',
                name: 'Hammer',
                description: ''
            },
            {
                id: 3,
                type: 'Fist',
                name: 'Fist Weapon',
                description: ''
            },
            {
                id: 4,
                type: 'Blood',
                name: 'Blood Magic Focus',
                description: ''
            },
            {
                id: 5,
                type: 'Chaos',
                name: 'Chaos Focus',
                description: ''
            },
            {
                id: 6,
                type: 'Elementalism',
                name: 'Elementalism Focus',
                description: ''
            },
            {
                id: 7,
                type: 'Shotgun',
                name: 'Shotgun',
                description: ''
            },
            {
                id: 8,
                type: 'Pistols',
                name: 'Dual Pistols',
                description: ''
            },
            {
                id: 9,
                type: 'Assault Rifle',
                name: 'Assault Rifle',
                description: ''
            },
            // TODO/REFACTOR : duplication in below code (all Anima-Touched weapons have the same effect)
            {
                id: 10,
                type: 'Blade',
                name: 'Anima-Touched Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 11,
                type: 'Hammer',
                name: 'Anima-Touched Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 12,
                type: 'Fist',
                name: 'Anima-Touched Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 13,
                type: 'Blood',
                name: 'Anima-Touched Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 14,
                type: 'Chaos',
                name: 'Anima-Touched Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 15,
                type: 'Elementalism',
                name: 'Anima-Touched Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 16,
                type: 'Shotgun',
                name: 'Anima-Touched Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 17,
                type: 'Pistols',
                name: 'Anima-Touched Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 18,
                type: 'Assault Rifle',
                name: 'Anima-Touched Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage. You are healed for 100% of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 19,
                type: 'Blade',
                name: 'Flame-Wreathed Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 15% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to your target every second for 5 seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 20,
                type: 'Hammer',
                name: 'Flame-Wreathed Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for 5 seconds. Once this effect expires, it will return 5 seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 21,
                type: 'Fist',
                name: 'Flame-Wreathed Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a 10% chance to apply a barrier which absorbs 100% of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span>. This effect can only occur once every 5 seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 22,
                type: 'Blood',
                name: 'Flame-Wreathed Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a 10% chance to apply a barrier which absorbs 100% of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span>. This effect can only occur once every 5 seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 23,
                type: 'Chaos',
                name: 'Flame-Wreathed Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for 5 seconds. Once this effect expires, it will return 5 seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 24,
                type: 'Elementalism',
                name: 'Flame-Wreathed Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 15% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to your target every second for 5 seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 25,
                type: 'Shotgun',
                name: 'Flame-Wreathed Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for 5 seconds. Once this effect expires, it will return 5 seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 26,
                type: 'Pistols',
                name: 'Flame-Wreathed Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 15% chance to deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to your target every second for 5 seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 27,
                type: 'Assault Rifle',
                name: 'Flame-Wreathed Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a 10% chance to apply a barrier which absorbs 100% of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span>. This effect can only occur once every 5 seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 28,
                type: 'Blade',
                name: 'Plasma-Forged Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 29,
                type: 'Hammer',
                name: 'Plasma-Forged Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 30,
                type: 'Fist',
                name: 'Plasma-Forged Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 31,
                type: 'Blood',
                name: 'Plasma-Forged Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 32,
                type: 'Chaos',
                name: 'Plasma-Forged Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 33,
                type: 'Elementalism',
                name: 'Plasma-Forged Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 34,
                type: 'Shotgun',
                name: 'Plasma-Forged Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 35,
                type: 'Pistols',
                name: 'Plasma-Forged Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 36,
                type: 'Assault Rifle',
                name: 'Plasma-Forged Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 25% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 37,
                type: 'Blade',
                name: 'Frost-Bound Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 38,
                type: 'Hammer',
                name: 'Frost-Bound Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 39,
                type: 'Fist',
                name: 'Frost-Bound Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 40,
                type: 'Blood',
                name: 'Frost-Bound Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 41,
                type: 'Chaos',
                name: 'Frost-Bound Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 42,
                type: 'Elementalism',
                name: 'Frost-Bound Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 43,
                type: 'Shotgun',
                name: 'Frost-Bound Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 44,
                type: 'Pistols',
                name: 'Frost-Bound Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 45,
                type: 'Assault Rifle',
                name: 'Frost-Bound Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a 20% chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and reduce the amount of damage you receive by 7.5% for 6 seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 46,
                type: 'Blade',
                name: 'Witch Doctor\'s Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 47,
                type: 'Hammer',
                name: 'Witch Doctor\'s Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 48,
                type: 'Fist',
                name: 'Witch Doctor\'s Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 49,
                type: 'Blood',
                name: 'Witch Doctor\'s Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 50,
                type: 'Chaos',
                name: 'Witch Doctor\'s Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 51,
                type: 'Elementalism',
                name: 'Witch Doctor\'s Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 52,
                type: 'Shotgun',
                name: 'Witch Doctor\'s Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 53,
                type: 'Pistols',
                name: 'Witch Doctor\'s Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 54,
                type: 'Assault Rifle',
                name: 'Witch Doctor\'s Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a 33% chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of 5 times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-var-attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-var-attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 55,
                type: 'Blade',
                name: 'Shadow-Bound Blade',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 56,
                type: 'Hammer',
                name: 'Shadow-Bound Hammer',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 57,
                type: 'Fist',
                name: 'Shadow-Bound Fist Weapon',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 58,
                type: 'Blood',
                name: 'Shadow-Bound Blood Magic Focus',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 59,
                type: 'Chaos',
                name: 'Shadow-Bound Chaos Focus',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 60,
                type: 'Elementalism',
                name: 'Shadow-Bound Elementalism Focus',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 61,
                type: 'Shotgun',
                name: 'Shadow-Bound Shotgun',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 62,
                type: 'Pistols',
                name: 'Shadow-Bound Pistols',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 63,
                type: 'Assault Rifle',
                name: 'Shadow-Bound Assault Rifle',
                description: 'Whenever you hit, you have a 20% chance to summon a Revenant who will cast Raven Blade. 15 second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 64,
                type: 'Assault Rifle',
                name: 'AEL-550',
                description: 'Your Assault Rifle Elite abilities will automatically load a grenade.'
            },
            {
                id: 65,
                type: 'Assault Rifle',
                name: 'Auxiliary Loader',
                description: 'Whenever you use an Assault Rifle Power ability and do not load a grenade, your chance to load a grenade with your next Assault Rifle Power ability is increased.'
            },
            {
                id: 66,
                type: 'Assault Rifle',
                name: 'Hellfire Assault Launcher',
                description: 'Your Assault Rifle Power Abilities will now consume any loaded grenade you have, dealing <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 3.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 67,
                type: 'Assault Rifle',
                name: 'High-Yield Launcher',
                description: 'Increases the damage and healing done when you launch a fully cooked grenade.'
            },
            {
                id: 68,
                type: 'Assault Rifle',
                name: 'Infernal Loader',
                description: 'When you have a grenade loaded, your Assault Rifle damage is increased by 7.5%.'
            },
            {
                id: 69,
                type: 'Assault Rifle',
                name: 'KSR-43',
                description: 'When you load a grenade it is fully cooked, but the fuse timer is reduced to 3 seconds.'
            },
            {
                id: 70,
                type: 'Assault Rifle',
                name: 'MIRV Launcher',
                description: 'Whenever you launch a grenade, several secondary explosions go off near your target dealing <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 1.24 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 71,
                type: 'Assault Rifle',
                name: 'Orochi Medical Launcher',
                description: 'Whenever you launch a grenade, your restore <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span> health to your entire group',
                coefficients: [ 1.08 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 72,
                type: 'Assault Rifle',
                name: 'Orochi Tactical Carbine',
                description: 'When you have a grenade loaded, your Assault Rifle healing is increased by 7.5%.'
            },
            {
                id: 73,
                type: 'Blade',
                name: 'Apocalypse',
                description: 'Each point of Chi you have increases your Blade damage by 3.5%.'
            },
            {
                id: 74,
                type: 'Blade',
                name: 'Blade of the Seventh Son',
                description: 'The amount of damage dealt by your Spirit Blade is increased by 61%, however each Blade attack costs 1.5% of your maximum health.'
            },
            {
                id: 75,
                type: 'Blade',
                name: 'Mantric Blade',
                description: 'The amount of health restored by Chi Overflow is doubled.'
            },
            {
                id: 76,
                type: 'Blade',
                name: 'Razor\'s Edge',
                description: 'Whenever you critically hit with a Blade ability, you have a 50% chance to gain 1 Chi.'
            },
            {
                id: 77,
                type: 'Blade',
                name: 'Rhythmic Blade',
                description: 'When increasing the number of attacks remaining on your Spirit Blade, you have a chance to increase the number of attacks gained by an additional amount. The chance and amount gained increase based on the number of attacks gained.'
            },
            {
                id: 78,
                type: 'Blade',
                name: 'Shattered Hellblade',
                description: 'You can no longer use the Spirit Blade ability to reforge an active Spirit Blade. Instead, when your Spirit Blade shatters, it deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage per Chi to nearby enemies.',
                coefficients: [ 1.78 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 79,
                type: 'Blade',
                name: 'Soulblade',
                description: 'Your chance to gain Chi increases by 3% for each point of Chi you currently have.'
            },
            {
                id: 80,
                type: 'Blade',
                name: 'Soviet Techsword',
                description: 'Your Spirit Blade is automatically forged upon reaching 5 Chi. While your Spirit Blade is forged, all Chi gained is immediately converted into Spirit Blade attacks.'
            },
            {
                id: 81,
                type: 'Blade',
                name: 'Stormbringer',
                description: 'Whenever you enter combat, you gain 3 Chi. While in combat, you gain 1 Chi every 10 seconds.'
            },
            {
                id: 82,
                type: 'Blood',
                name: 'Anthology of Hemorrhages',
                description: 'Whenever you take damage from Corruption, you have a chance to reduce further damage from Corruption by 7.5%. This effect can stack up to 5 times. The chance to gain this effect increases with higher Corruption level.'
            },
            {
                id: 83,
                type: 'Blood',
                name: 'Chronicle of Purity',
                description: 'Using "Mend" reduces your Martyrdom level by 2 and heals you for <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span>. "Sanctuary" and "Convalesce" increase your Martyrdom level by an additional 2.',
                coefficients: [ 0.23 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 84,
                type: 'Blood',
                name: 'Compendium of Wards',
                description: 'Increases the power of your Blood Magic barriers by 15%. Also, whenever you cast a Blood Magic barrier your Martyrdom level is increased by an additional 4.'
            },
            {
                id: 85,
                type: 'Blood',
                name: 'Eldritch Tome',
                description: 'Your Blood Magic damage over time effects deal 75% more damage. In addition, your "Reap", "Desecrate", "Runic Hex", and "Eldritch Scourge" abilities generate 4 more Corruption when used.'
            },
            {
                id: 86,
                type: 'Blood',
                name: 'Grimoire of Foul Gods',
                description: 'Whenever you hit with a Blood Magic Power ability while your Corruption level is higher than 90, your target is dealt an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage for every Blood Magic damage over time effect you have active on them.',
                coefficients: [ 0.35 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 87,
                type: 'Blood',
                name: 'Lilith\'s Lab Notes',
                description: 'Whenever you are healed, your Corruption level is reduced based on how much healing was prevented by your Corruption level.'
            },
            {
                id: 88,
                type: 'Blood',
                name: 'Profane Folio',
                description: 'Whenever your Corruption level increases to 100, your next 3 Blood Magic Power Abilities deal 30% more damage and do not deal Corruption damage to you. This effect can only occur once every 9 seconds.'
            },
            {
                id: 89,
                type: 'Blood',
                name: 'Sanguinary Monograph',
                description: 'Whenever you take damage from Martyrdom, the power of your Blood Magic healing abilities is increased by 3%. This effect can stack up to 5 times, but is removed any time your Martyrdom level is reduced.'
            },
            {
                id: 90,
                type: 'Blood',
                name: 'Soul-Infused Manuscript',
                description: 'Whenever you gain a power increase from Martyrdom, your next 2 Blood Magic healing abilities do not trigger Martyrdom damage.'
            },
            {
                id: 91,
                type: 'Chaos',
                name: 'Enigmatic Apparatus',
                description: 'You are more likely to generate Chaotic Enigmas when reaching 8 Paradoxes. In addition, your Chaotic Enigmas are more potent.'
            },
            {
                id: 92,
                type: 'Chaos',
                name: 'Incalculable Abacus',
                description: 'If you generate 8 Paradoxes within 6 seconds of the last time you generated 8 Paradoxes, your Protection is increased by 4350 for 4 seconds.'
            },
            {
                id: 93,
                type: 'Chaos',
                name: 'Irregularity Architect',
                description: 'When you reach 8 Paradoxes, you create an additional Singularity and you are more likely to create Singularities when reaching 8 Paradoxes.'
            },
            {
                id: 94,
                type: 'Chaos',
                name: 'Mayhem',
                description: 'Whenever you reach 8 Paradoxes and trigger Chaotic Effects, you have a 50% chance to trigger an additional set of Chaotic Effects.'
            },
            {
                id: 95,
                type: 'Chaos',
                name: 'Otherworldly Artifact',
                description: 'Your chaos abilities have a 45% chance to generate 1 additional Paradox.'
            },
            {
                id: 96,
                type: 'Chaos',
                name: 'Sanity\'s Aphelion',
                description: 'Your protection is increased by up to 880. The value of Protection gained is based on your current Paradoxes and is at its highest when you have 0 Paradoxes.'
            },
            {
                id: 97,
                type: 'Chaos',
                name: 'Sov-Tech Paradox Generator',
                description: 'Whenever you hit with a Chaos ability, you have a 5.5% chance to trigger Chaotic Effects as if you had reached 8 Paradoxes.'
            },
            {
                id: 98,
                type: 'Chaos',
                name: 'The Cause\'s Effect',
                description: 'Whenever you deal damage divisible by 8, your Protection is increased by 850 for 4 seconds. Also, whenever you evade an attack, your next Chaos attack deals an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage.',
                coefficients: [ 1.15 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 99,
                type: 'Chaos',
                name: 'Warped Visage',
                description: 'When you reach 8 Paradoxes, you create an additional Extradimensional Doppelganger.'
            },
            {
                id: 100,
                type: 'Elementalism',
                name: 'Cryo-Charged Conduit',
                description: 'Your Elemental cold abilities reduce your heat level by an additional 15 and cause any targets hit to become frostbitten for 6 seconds. Critically hitting a frostbitten enemy with an Elemental attack deals an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage.',
                coefficients: [ 3.45 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 101,
                type: 'Elementalism',
                name: 'Frozen Figurine',
                description: 'You no longer dissipate heat naturally while in combat. However, your Elemental cold abilities reduce your heat level by an additional 60 when activated and deal 71% more damage.'
            },
            {
                id: 102,
                type: 'Elementalism',
                name: 'Infernal Apparatus',
                description: 'Whenever you use a heat reducing ability, you do not immediately lose heat. Instead your heat gauge become frozen in place for 2 seconds, neither increasing nor decreasing. After this time, your heat level will be reduced by the amount your ability was meant to reduce it.'
            },
            {
                id: 103,
                type: 'Elementalism',
                name: 'Orochi Thermal Inverter',
                description: 'Your Thermotic meter is inverted, causing you to deal increased damage when at lower heat levels and reduced damage at higher heat levels.'
            },
            {
                id: 104,
                type: 'Elementalism',
                name: 'Overclocked Chronometer',
                description: 'During combat you have a 10% chance every second to increase your Elemental damage by 7.5% for 4 seconds. When this damage increase happens, your heat level is increased by 8.'
            },
            {
                id: 105,
                type: 'Elementalism',
                name: 'Thermotic Simulacrum',
                description: 'Instead of Overheating, you are dealt damage equal to 15% of your maximum health. Doing this more than 2 times without reducing your heat level below 80 will cause you to become stunned for 5 seconds.'
            },
            {
                id: 106,
                type: 'Elementalism',
                name: 'Totemic Hell Lord',
                description: 'Your Elemental fire abilities apply a damage over time effect which deals <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> damage every second for 10 seconds, during which time it can stack up to 10 times. Also, your Elemental lightning abilities deal 13% more critical damage and your Elemental cold abilities deal 32% more damage and reduce your heat level by an additional 15.',
                coefficients: [ 0.03 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 107,
                type: 'Elementalism',
                name: 'Unstable Electron Core',
                description: 'When your heat level is above 50, your Elemental fire and lightning abilities deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage to the target and nearby enemies.',
                coefficients: [ 0.17 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 108,
                type: 'Elementalism',
                name: 'Voltaic Shunt',
                description: 'After naturally dissipating heat for 10 seconds, your next Elemental attack will deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage.',
                coefficients: [ 3.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 109,
                type: 'Fist',
                name: 'Bladed Gauntlets',
                description: 'When entering combat, you gain 15 Fury. In addition, you gain 2 Fury every second while in combat.'
            },
            {
                id: 110,
                type: 'Fist',
                name: 'Blood Drinkers',
                description: 'Whenever you apply damage over time effects with Fist Weapon abilities, you gain 3 Fury. This Fury is not generated while any Wrath effect is active.'
            },
            {
                id: 111,
                type: 'Fist',
                name: 'Infernal Manglers',
                description: 'Whenever your Fury increases, the amount gained is tallied. Once you have gained 100 Fury, your next Fist Weapon attack within 5 seconds will deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> damage.',
                coefficients: [ 6.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 112,
                type: 'Fist',
                name: 'Invigorating Razors',
                description: 'Your "Invigorating Wrath" lasts 10% longer.'
            },
            {
                id: 113,
                type: 'Fist',
                name: 'Manticore Wrath Inducers',
                description: 'When your Fury reaches 100, you automatically enter Frenzied Wrath. If your Healing parameter in Anima Allocation is larger than 50 you instead automatically enter invigorating Wrath.'
            },
            {
                id: 114,
                type: 'Fist',
                name: 'Scalpel',
                description: 'Whenever your "Invigorating Wrath" effect expires, the amount of health restored by your "Nurture", "Renewal", and "Feral Regrowth" abilities is increased by 33% for 4 seconds.'
            },
            {
                id: 115,
                type: 'Fist',
                name: 'Sov-Tech Wrath Enhancers',
                description: 'Whenever you activate "Frenzied Wrath" your entire group deals 8% more damage for 3 seconds.'
            },
            {
                id: 116,
                type: 'Fist',
                name: 'Surgical Steel',
                description: 'The amount of healing done by your "Revitalise", "Invigorate", "Revivify", and "Serenity" abilities is increased by 21% while "Invigorating Wrath" is active.'
            },
            {
                id: 117,
                type: 'Fist',
                name: 'Threshing Claws',
                description: 'While your "Frenzied Wrath" effect is active, you deal <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to nearby enemies every second.',
                coefficients: [ 0.69 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 118,
                type: 'Hammer',
                name: 'Flanged Mallet',
                description: 'Hammer abilities which consume Rage deal increased damage. This damage bonus increases based on your maximum health, up to a maximum of 20%.'
            },
            {
                id: 119,
                type: 'Hammer',
                name: 'Fuming Despoiler',
                description: 'Your Rage consuming abilities deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 0.825 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 120,
                type: 'Hammer',
                name: 'Hell Forged Warhammer',
                description: 'Consecutive Hammer ability uses generate increased Rage. The amount of bonus Rage generated increases with each Hammer ability use and is reset when a non-Hammer ability is used.'
            },
            {
                id: 121,
                type: 'Hammer',
                name: 'Mangler',
                description: 'Whenever you become Enraged, your Crit Power on Hammer attacks is increased by 9% for 3 seconds.'
            },
            {
                id: 122,
                type: 'Hammer',
                name: 'Manticore Riot Suppressor',
                description: 'While you are protected by the Hammer abilities "Enter the Fray," "Thick Skin," "Raging Volcano," "Juggernaut," or "Die Hard" your Hammer abilities deal 8.5% more damage and attacks against you generate 2 more Rage.'
            },
            {
                id: 123,
                type: 'Hammer',
                name: 'Orochi Motivator',
                description: 'Whenever you spend Rage, your Protection is increased by 450 for 8 seconds. This effect can stack up to 5 times.'
            },
            {
                id: 124,
                type: 'Hammer',
                name: 'Pneumatic Maul',
                description: 'Whenever you critically hit with a Hammer ability, you gain a benefical effect which allows you to gain the benefits of the Enrage bonus effects on your abilities without spending any Rage and without being Enraged. This effect can only occur once every 10 seconds.'
            },
            {
                id: 125,
                type: 'Hammer',
                name: 'Red Hand Destroyer',
                description: 'While your Rage is above 50, your Hammer Basic Abilities deal 30% more damage and generate twice as much Rage.'
            },
            {
                id: 126,
                type: 'Hammer',
                name: 'The Tenderiser',
                description: '"Whenever you hit an enemy with a Hammer ability, you gain an effect which lasts 30 seconds. When this effect expires, your Hammer damage is increased by 7.5% for 4 seconds.</br>Using Hammer abilities speeds up the initial countdown and spending Rage increases the duration of the damage increasing effect."'
            },
            {
                id: 127,
                type: 'Pistols',
                name: 'Heavy Caliber Pistols',
                description: 'You are more likely to roll a Double Red set of chambers, but less likely to roll a Double White or Double Blue set of chambers.'
            },
            {
                id: 128,
                type: 'Pistols',
                name: 'Six Shooters',
                description: 'The duration of the damage bonus from a matching set of chambers is increased by 0.5 ] seconds.'
            },
            {
                id: 129,
                type: 'Pistols',
                name: 'Dual TMP-206',
                description: 'If you do not have a matching set of chambers, using Active Dodge will grant a Double White set.'
            },
            {
                id: 130,
                type: 'Pistols',
                name: 'Anansi Probability Adjusters',
                description: 'Whenever you spin the chambers and do not land on a matching set, your next spin is more likely to grant you a matching set.'
            },
            {
                id: 131,
                type: 'Pistols',
                name: 'Misery & Malice',
                description: 'Whenever you land on a matching set of chambers, your Pistol Abilities deal 6% more damage for 3 seconds.'
            },
            {
                id: 132,
                type: 'Pistols',
                name: 'Fortune & Favour',
                description: 'Whenever a chamber lock on a Double Red set expires, you immediately gain a chamber lock on a Double Blue set. Whenever a chamber lock on a Double Blue set expires, you immediately gain a chamber lock on a Double White set.'
            },
            {
                id: 133,
                type: 'Pistols',
                name: 'Twin-Linked Blasters',
                description: 'Whenever your damage bonus from a matching set of chambers expires, if you land on another matching set within 3 seconds your next Pistol attack will deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 134,
                type: 'Pistols',
                name: 'Sov-Tech Harmonisers',
                description: 'Whenever you hit an enemy while you have a Double White set of chambers, you have a 25% chance to be upgraded to Double Blue. Whenever you hit an enemy while you have a Double Blue set of chambers, you have a 15% chance to be upgraded to Double Red.'
            },
            {
                id: 135,
                type: 'Pistols',
                name: 'Soviet CB-3 Annihilators',
                description: 'Whenever you critically hit with a Pistol ability while you have a matching set of chambers you deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.86 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 136,
                type: 'Shotgun',
                name: 'Bolstering Blaster',
                description: 'Whenever an attack glances you, your next 3 Shotgun attacks will deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.24 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 137,
                type: 'Shotgun',
                name: 'Double Barrel',
                description: 'Your Shotgun Power Abilities consume an additional Shell to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.475 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 138,
                type: 'Shotgun',
                name: 'Flame-Charged Blaster',
                description: 'Whenever you spend a Shotgun shell, you have a 25% chance to not spend the shell and increase the damage your next Shotgun Power Ability by 12%. This effect cannot trigger again until its bonus effect is spent.'
            },
            {
                id: 139,
                type: 'Shotgun',
                name: 'Ifritian Despoiler',
                description: 'After firing 12 Shells, your Crit Power is increased by 14% for 4 seconds. Each Dragon\'s Breath Shell fired counts as 2 Shells for the purposes of gaining this bonus.'
            },
            {
                id: 140,
                type: 'Shotgun',
                name: 'Prototype-M402',
                description: 'Whenever you load Anima-Infused Shells, your Protection is increased by 1225 for 3 seconds.'
            },
            {
                id: 141,
                type: 'Shotgun',
                name: 'Sov-Tech Demolisher',
                description: 'You are more likely to have Depleted Uranium Shells show up as an option when reloading, but less likely to have Anima-Infused Shells show up as an option when reloading.'
            },
            {
                id: 142,
                type: 'Shotgun',
                name: 'Soviet TSAR-914',
                description: 'Whenever you run out of Shells, your Protection is increased by 730 for 5 seconds.'
            },
            {
                id: 143,
                type: 'Shotgun',
                name: 'SPES-C221',
                description: 'Whenever you spend a Shell, you have a 20% chance to cause your next Shotgun attack to deal an additional <span id="%id-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 144,
                type: 'Shotgun',
                name: 'The Redeemer',
                description: 'Whenever you reload Anima-Infused Shells or Dragon\'s Breath Shells, you and your group members gain a beneficial effect for 3 seconds which causes attacks to restore <span id="%id-equipment-bonus1" class="bonus-var-heal">%d</span> health. The amount healed scales with each individual group member\'s Healing Power.</br>Whenever you reload Armor-Piercing or Depleted Uranium Shells, you and your group members gain a beneficial effect for 3 seconds which causes attacks to deal an additional <span id="%id-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage. The damage dealt scales with each individual group member\'s Combat Power.',
                coefficients: [ 0.5, 0.5 ],
                stats: [ 'Healing Power', 'Combat Power' ]
            }
        ],
        'head': [
            {
                id: 1,
                name: 'Ashes',
                description: ''
            },
            {
                id: 2,
                name: 'Pigment',
                description: ''
            },
            {
                id: 3,
                name: 'Blood Halo',
                description: 'Whenever you heal the same target 5 times, their Protection is increased by <span class="bonus-const">510</span> for 3 seconds.'
            },
            {
                id: 4,
                name: 'Ashes of Crushed Cities',
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.375 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 5,
                name: 'Revenant Ashes',
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to that enemy and other nearby enemies.',
                coefficients: [ 0.1875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 6,
                name: 'Ashes of Elder Things',
                description: 'Whenever you hit the same enemy 6 times in succession, your next damaging Power Ability deals an additional <span id="head-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 1.05 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Ashes of Shriven Souls',
                description: 'Whenever you are hit 5 times in succession of whenever you hit the same enemy 3 times in succession, your next Power Ability has 20% increased Critical Power.'
            },
            {
                id: 8,
                name: 'Pharaoh\'s Blood',
                description: 'Whenever you heal the same target 5 times, they are healed for an additional <span id="head-equipment-bonus1" class="bonus-var-heal">%d</span> every second for 3 seconds.',
                coefficients: [ 0.2 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 9,
                name: 'Blood of the Old Ones',
                description: 'Whenever you heal the same target 5 times, you heal your entire group for an additional <span id="head-equipment-bonus1" class="bonus-var-heal">%d</span>.',
                coefficients: [ 0.375 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 10,
                name: 'Oni Blood',
                description: 'Whenever you heal the same target 5 times, they gain a leech effect that heals for 10% of their damage dealt for 3 seconds. This effect can heal up to <span id="head-equipment-bonus1" class="bonus-var-heal">%d</span> damage before being removed.',
                coefficients: [ 0.811 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 11,
                name: 'Pigment from Beyond',
                description: 'Whenever you are hit 5 times in succession, your Protection is increased by <span class="bonus-const">640</span> for 3 seconds.'
            },
            {
                id: 12,
                name: 'Cosmic Pigment',
                description: 'Whenever you are hit 5 times in succession, you deal <span id="head-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.',
                coefficients: [ 0.40 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 13,
                name: 'Mark of the Starspawn',
                description: 'Whenever you are hit 5 times in succession, you regain 4.5% of your maximum health.'
            },
            {
                id: 14,
                name: 'Tachyon Pigment',
                description: 'Whenever you are hit 5 times in succession or whenever you hit the same enemy 3 times in succession, the duration of your currently running recharge timers on Special Abilities is reduced by 3%.'
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Ring',
                description: ''
            },
            {
                id: 2,
                name: 'Rurikid Knot',
                description: 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by <span class="bonus-const">1530</span> for 4 seconds.'
            },
            {
                id: 3,
                name: 'Skadi\'s Ring',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you deal <span id="finger-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.625 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Band of the Bacab',
                description: 'Whenever you attempt to cleanse, you also restore <span id="finger-equipment-bonus1" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficients: [ 0.185 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 5,
                name: 'Belobog\'s Blessing',
                description: 'Whenever you attempt to cleanse, your defensive target\'s Protection is increased by <span class="bonus-const">460</span> for 3 seconds.'
            },
            {
                id: 6,
                name: 'Cold Metal',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you are healed for <span id="finger-equipment-bonus1" class="bonus-var-heal">%d</span>.',
                coefficients: [ 0.625 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 7,
                name: 'Recursive Circle',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you reduce the remaining cooldown time on your abilities by 7%.'
            }
        ],
        'neck': [
            {
                id: 1,
                name: 'Medallion',
                description: ''
            },
            {
                id: 2,
                name: 'Fishbone Medallion',
                description: 'Whenever you lose health while below 50% of your maximum health, your Protection is increased by <span class="bonus-const">875</span> for 5 seconds.'
            },
            {
                id: 3,
                name: 'Seed of Aggression',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you have an 15% chance to generate 1 Energy for the weapon which dealt the hit.'
            },
            {
                id: 4,
                name: 'Choker of Shed Blood',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you have a 25% chance to deal an additional <span id="neck-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 5,
                name: 'Egon Pendant',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you apply a damage over time effect that deals <span id="neck-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage over 5 seconds. Your damage is increased by 4.5% for each enemy affected by this effect.',
                coefficients: [ 0.15 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 6,
                name: 'Spectral Essence',
                description: 'This talisman gains more Attack Rating when leveling up.<br/>Whenever you hit an enemy who is below 50% of their maximum health, you have a 33% chance to summon a Spectre who will cast Unravel Soul. 10 second cooldown.<br/>Unravel Soul: An attack that deals <span id="neck-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage.',
                coefficients: [ 2.2 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Linen Amulet',
                description: 'Whenever you heal an ally who is below 50% of their maximum health, you have an 15% chance to generate 1 Energy for the weapon which did the healing.'
            },
            {
                id: 8,
                name: 'Caduceus Amulet',
                description: 'Whenever you heal an ally who is below 50% of their maximum health, their Protection is increased by <span class="bonus-const">875</span> for 3 seconds.'
            },
            {
                id: 9,
                name: 'Vampiric Essence',
                description: 'This talisman gains more Heal Rating when leveling up.<br/>Whenever you heal an ally who is below 50% of their maximum health, their damage is increased by 4.5% and their attacks restore their health up to a maximum of <span id="neck-equipment-bonus1" class="bonus-var-heal">%d</span> health restored for 3 seconds. This effect can only be applied once every 10 seconds.',
                coefficients: [ 0.335 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 10,
                name: 'Medallion of Wadjet',
                description: 'Whenever you lose health while below 50% of your maximum health, you gain a barrier which absorbs 100 of incoming damage and dissipates after absorbing <span id="neck-equipment-bonus1" class="bonus-var-heal">%d</span> damage. This effect can only occur once every 10 seconds.',
                coefficients: [ 1.25 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 11,
                name: 'Lycanthropic Essence',
                description: 'This talisman gains more health when leveling up.</br>Whenever you lose health while below 50% of your maximum health, your damage is increased by 17% for 3 seconds and your next attack during this time will restore 4% of your maximum health. This effect can only occur once every 10 seconds.'
            },
            {
                id: 12,
                name: 'Amulet',
                description: ''
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Bracelet',
                description: ''
            },
            {
                id: 2,
                name: 'Bone Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore <span id="wrist-equipment-bonus1" class="bonus-var-heal">%d</span> health to that ally.',
                coefficients: [ 0.5 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 3,
                name: 'Iron-Sulfur Bracelet',
                description: 'Whenever you hit an enemy who is Exposed or Debilitated, you have a 25% chance to deal <span id="wrist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Fleshwired Fetter',
                description: 'Whenever you hit an enemy who is Exposed, you have a 10% chance to increase the duration of that enemy\'s Exposed effect by 1 second.'
            },
            {
                id: 5,
                name: 'Red Weed Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 15% chance to grant an effect which lasts 3 seconds and will remove the next detrimental effect applied to that ally.'
            },
            {
                id: 6,
                name: 'Bracer of Forgotten Horrors',
                description: 'Whenever an Exposed or Debilitated enemy attacks you, you deal <span id="wrist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage back to them. This damage generates a large amount of hate.',
                coefficients: [ 0.04 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Bracer of Horus',
                description: 'Whenever a Debilitated enemy attacks you, you have a 25% chance to increase the duration of that enemy\'s Debilitated effect by 1 second.',
            },
            {
                id: 8,
                name: 'Wrist',
                description: '',
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Dice',
                description: ''
            },
            {
                id: 2,
                name: 'Obsidian Flakes',
                description: 'Whenever you evade an attack or an attack glances you, your Protection is increased by <span class="bonus-const">705</span> for 5 seconds.'
            },
            {
                id: 3,
                name: 'Gambler\'s Soul',
                description: 'Whenever you critically hit, you additionally deal <span id="luck-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Cold Silver Dice',
                description: 'Whenever you critically hit, you have a 30% chance to gain 1 Energy for the weapon which performed the critical hit.'
            },
            {
                id: 5,
                name: 'Chit of Kinich Ahau',
                description: 'Whenever you critically heal, you additionally restore <span id="luck-equipment-bonus1" class="bonus-var-heal">%d</span> health to your target.',
                coefficients: [ 0.25 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 6,
                name: 'Tarot Cards',
                description: 'Whenever you critically heal, your defensive target\'s Protection is increased by <span class="bonus-const">615</span> for 3 seconds.'
            },
            {
                id: 7,
                name: 'Golden Coin',
                description: 'Whenever you evade an attack or an attack glances you, you deal <span id="luck-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage back to the attacker. This damage generate a large amount of hate.',
                coefficients: [ 0.2875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 8,
                name: 'Laundry Tokens',
                description: 'Whenever you evade an attack or an attack glances you, you have a 50% chance to gain 1 Energy for your currently active weapon.'
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Chain',
                description: ''
            },
            {
                id: 2,
                name: 'High Roller\'s Chain',
                description: 'Whenever you roll a Double Blue or better set of matching chambers, your next Pistol attack deals an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.9 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 3,
                name: 'Black Sash',
                description: 'Whenever you hit an enemy who is facing towards you, the enemy gains increased hate towards you.'
            },
            {
                id: 4,
                name: 'Jaguar Cord',
                description: 'Whenever you hit an enemy who is facing away from you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 5,
                name: 'Barbelith Wire',
                description: 'Whenever you hit an enemy who is facing away from you, you have a 15% chance to slow their movement speed by 25% for 2 seconds and reduce the target\'s hate towards you.'
            },
            {
                id: 6,
                name: 'Khonsu\'s Disc',
                description: 'Whenever you heal an ally who is less than 7 metres away from you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 7,
                name: 'Serum Pouch',
                description: 'Whenever you heal an ally who is less than 7 metres away from you, you generate 15% less hate for 2 seconds.'
            },
            {
                id: 8,
                name: 'Incandescent Capacitor',
                description: 'Whenever you heal an ally who less than 7 metres away from you, you and your ally gain <span class="bonus-const">625</span> protection for 3 seconds.'
            },
            {
                id: 9,
                name: 'Grounding Line',
                description: 'Whenever you hit an enemy who is facing towards you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 10,
                name: 'Master\'s Chain',
                description: 'Whenever you activate Spirit Blade, your next Blade attack will deal an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> - <span id="waist-equipment-bonus2" class="bonus-var-attack">%d</span> physical damage. The amount of damage dealt scales based on the amount of Chi you had when activating Spirit Blade.',
                coefficients: [ 0.25, 1.25 ],
                stats: [ 'Combat Power', 'Combat Power' ]
            },
            {
                id: 11,
                name: 'Brawler\'s Belt',
                description: 'Whenever you spend Rage to empower an attack, you gain 7 Rage. Rage must be spent in order to trigger this effect.'
            },
            {
                id: 12,
                name: 'Primal Rope Belt',
                description: 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id="waist-equipment-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficients: [ 1.125, 1.125 ],
                stats: [ 'Combat Power', 'Healing Power' ]
            },
            {
                id: 13,
                name: 'Pentacle Wrap',
                description: 'Reduces the amount of self-damage dealt by Corruption and Martyrdom by 10%. In addition, once you have lost 10% of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage or your next healing Blood Magic ability will restore an additional <span id="waist-equipment-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficients: [ 0.425, 0.425 ],
                stats: [ 'Combat Power', 'Healing Power' ]
            },
            {
                id: 14,
                name: 'Tumultuous Sash',
                description: 'Whenever your Paradox counts resets, you gain 1 - 2 Paradoxes.'
            },
            {
                id: 15,
                name: 'Thermotic Cinch',
                description: 'Whenever you overheat, your next Elemental cold ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> magical damage.',
                coefficients: [ 1.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 16,
                name: 'Tactical Belt',
                description: 'Whenever you reload your Shotgun, your next Shotgun attack will deal an additional <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 17,
                name: 'Military Strap',
                description: 'Whenever you launch a fully cooked grenade, you gain 1 Energy.'
            },
            {
                id: 18,
                name: 'Generalist\'s Belt',
                description: '"Whenever you activate a Power ability, there is a 33% chance that you will deal <span id="waist-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage or the target is healed for and additional <span id="waist-equipment-bonus2" class="bonus-var-heal">%d</span>. Additional damage occurs when using damaging power abilities and additional healing occurs when using healing power abilities.',
                coefficients: [ 0.375, 0.375 ],
                stats: [ 'Combat Power', 'Healing Power' ]
            },
            {
                id: 19,
                name: 'Buckle',
                description: ''
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Effigy',
                description: ''
            },
            {
                id: 2,
                name: 'Sigil of Ambition',
                description: 'Whenever you or any of your group members defeat an enemy, your next attack will deal <span id="occult-equipment-bonus1" class="bonus-var-attack">%d</span> physical damage.',
                coefficients: [ 0.833 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 3,
                name: 'Avaritia\'s Effigy',
                description: 'Whenever you or any of your group members defeat an enemy, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 4,
                name: 'Razor Fossil',
                description: 'Whenever you or any of your group members defeat an enemy, your damage is increased by 8% for 3 seconds. This effect can stack up to 5 times.'
            },
            {
                id: 5,
                name: 'Ankh',
                description: 'Whenever you or any of your group members defeat an enemy, your next heal will restore <span id="occult-equipment-bonus1" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficients: [ 0.833 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 6,
                name: 'Rakshani Charm',
                description: 'Whenever you or any of your group members defeat an enemy, you have a 20% chance to gain 1 Energy for your currently active weapon.'
            },
            {
                id: 7,
                name: 'Whalebone Rune',
                description: 'Whenever you or any of your group members defeat an enemy, your Protection is increased by <span class="bonus-const">2045</span> for 5 seconds.'
            },
            {
                id: 8,
                name: 'Alloy Heart',
                description: 'Whenever you or any of your group members defeat an enemy, you are healed for <span id="occult-equipment-bonus1" class="bonus-var-heal">%d</span>.',
                coefficients: [ 0.833 ],
                stats: [ 'Healing Power' ]
            }
        ]
    }
}
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.ilvl_base = {
    'standard': {
        ilvl_init: 2 + 1/3,
        ilvl_per_level: 2.2
    },
    'superior': {
        ilvl_init: 50 + 2/3,
        ilvl_per_level: 3.3
    },
    'epic': {
        ilvl_init: 150 + 1/3,
        ilvl_per_level: 4.4
    },
    'mythic': {
        ilvl_init: 321 + 1/3,
        ilvl_per_level: 5.5
    },
    'legendary': {
        ilvl_init: 584,
        ilvl_per_level: 6.6
    }
};

swlcalc.data.ilvl = {
    gear: {
        'talisman-or-weapon': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    ilvl_init: swlcalc.data.ilvl_base['standard'].ilvl_init,
                    ilvl_per_level: swlcalc.data.ilvl_base['standard'].ilvl_per_level,
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    ilvl_init: swlcalc.data.ilvl_base['superior'].ilvl_init,
                    ilvl_per_level: swlcalc.data.ilvl_base['superior'].ilvl_per_level
                },
                'epic': {
                    xp_per_level: 2400,
                    shards_per_level: 600,
                    ilvl_init: swlcalc.data.ilvl_base['epic'].ilvl_init,
                    ilvl_per_level: swlcalc.data.ilvl_base['epic'].ilvl_per_level
                },
                'mythic': {
                    xp_per_level: 12000,
                    shards_per_level: 800,
                    ilvl_init: swlcalc.data.ilvl_base['mythic'].ilvl_init,
                    ilvl_per_level: swlcalc.data.ilvl_base['mythic'].ilvl_per_level
                },
                'legendary': {
                    xp_per_level: 25000,
                    shards_per_level: 1000,
                    ilvl_init: swlcalc.data.ilvl_base['legendary'].ilvl_init,
                    ilvl_per_level: swlcalc.data.ilvl_base['legendary'].ilvl_per_level
                }
            }
        },
        'glyph': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    ilvl_init: swlcalc.data.ilvl_base['standard'].ilvl_init * (0.3 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['standard'].ilvl_per_level * (0.3 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    ilvl_init: swlcalc.data.ilvl_base['superior'].ilvl_init * (0.3 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['superior'].ilvl_per_level * (0.3 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    ilvl_init: swlcalc.data.ilvl_base['epic'].ilvl_init * (0.3 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['epic'].ilvl_per_level * (0.3 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    ilvl_init: swlcalc.data.ilvl_base['mythic'].ilvl_init * (0.3 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['mythic'].ilvl_per_level * (0.3 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    ilvl_init: swlcalc.data.ilvl_base['legendary'].ilvl_init * (0.3 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['legendary'].ilvl_per_level * (0.3 / 0.55)
                }
            }
        },
        'signet': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    ilvl_init: swlcalc.data.ilvl_base['standard'].ilvl_init * (0.15 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['standard'].ilvl_per_level * (0.15 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    ilvl_init: swlcalc.data.ilvl_base['superior'].ilvl_init * (0.15 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['superior'].ilvl_per_level * (0.15 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    ilvl_init: swlcalc.data.ilvl_base['epic'].ilvl_init * (0.15 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['epic'].ilvl_per_level * (0.15 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    ilvl_init: swlcalc.data.ilvl_base['mythic'].ilvl_init * (0.15 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['mythic'].ilvl_per_level * (0.15 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    ilvl_init: swlcalc.data.ilvl_base['legendary'].ilvl_init * (0.15 / 0.55),
                    ilvl_per_level: swlcalc.data.ilvl_base['legendary'].ilvl_per_level * (0.15 / 0.55)
                }
            }
        }
    }
};
