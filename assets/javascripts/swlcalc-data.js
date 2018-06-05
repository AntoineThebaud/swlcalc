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

swlcalc.data.wtype_mapping = {
    to_num: {
        'none': 0,
        'blade': 1,
        'hammer': 2,
        'fist': 3,
        'blood': 4,
        'chaos': 5,
        'elementalism': 6,
        'shotgun': 7,
        'pistols': 8,
        'assault-rifle': 9
    },
    to_name: {
        0: 'none',
        1: 'blade',
        2: 'hammer',
        3: 'fist',
        4: 'blood',
        5: 'chaos',
        6: 'elementalism',
        7: 'shotgun',
        8: 'pistols',
        9: 'assault-rifle'
    }
};

swlcalc.data.suffixe_mapping = {
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

//TODO/FEATURE : add missing signets
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
                name: '[Hammer] Signet of Shattering',
                description: 'Increases the damage and healing of Hammer Elite Abilities by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'finger': [
            {
                id: 1,
                name: '[Hammer] Signet of Bludgeoning',
                description: 'Increases the damage and healing of Hammer Basic Abilities by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'neck': [
            {
                id: 1,
                name: '[Hammer] Signet of Crushing',
                description: 'Increases the damage and healing of Hammer Power Abilities by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                description: 'Increases the rate at which your Ultimate Abilities recharge on ability activation by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Laceration',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a %d% bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Matter Creation',
                description: 'Increases the damage of Gadgets by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                description: 'Reduces the cooldown of Active Dodge by %d%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
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

//TODO/FEATURE : add missing items
swlcalc.data.items = {
    slot: {
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
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.375,
                stat: 'Combat Power'
            },
            {
                id: 5,
                name: 'Revenant Ashes',
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage to that enemy and other nearby enemies.',
                coefficient: 0.1875,
                stat: 'Combat Power'
            },
            {
                id: 6,
                name: 'Ashes of Elder Things',
                description: 'Whenever you hit the same enemy 6 times in succession, your next damaging Power Ability deals an additional <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 1.05,
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Ashes of Shriven Souls',
                description: 'Whenever you are hit 5 times in succession of whenever you hit the same enemy 3 times in succession, your next Power Ability has 20% increased Critical Power.'
            },
            {
                id: 8,
                name: 'Pharaoh\'s Blood',
                description: 'Whenever you heal the same target 5 times, they are healed for an additional <span id="head-bonus" class="bonus-var-heal">%d</span> every second for 3 seconds.',
                coefficient: 0.2,
                stat: 'Healing Power'
            },
            {
                id: 9,
                name: 'Blood of the Old Ones',
                description: 'Whenever you heal the same target 5 times, you heal your entire group for an additional <span id="head-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.375,
                stat: 'Healing Power'
            },
            {
                id: 10,
                name: 'Oni Blood',
                description: 'Whenever you heal the same target 5 times, they gain a leech effect that heals for 10% of their damage dealt for 3 seconds. This effect can heal up to <span id="head-bonus" class="bonus-var-heal">%d</span> damage before being removed.',
                coefficient: 0.811,
                stat: 'Healing Power'
            },
            {
                id: 11,
                name: 'Pigment from Beyond',
                description: 'Whenever you are hit 5 times in succession, your Protection is increased by <span class="bonus-const">640</span> for 3 seconds.'
            },
            {
                id: 12,
                name: 'Cosmic Pigment',
                description: 'Whenever you are hit 5 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.',
                coefficient: 0.40,
                stat: 'Combat Power'
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
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you deal <span id="finger-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.625,
                stat: 'Combat Power'
            },
            {
                id: 4,
                name: 'Band of the Bacab',
                description: 'Whenever you attempt to cleanse, you also restore <span id="finger-bonus" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficient: 0.185,
                stat: 'Healing Power'
            },
            {
                id: 5,
                name: 'Belobog\'s Blessing',
                description: 'Whenever you attempt to cleanse, your defensive target\'s Protection is increased by <span class="bonus-const">460</span> for 3 seconds.'
            },
            {
                id: 6,
                name: 'Cold Metal',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you are healed for <span id="finger-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.625,
                stat: 'Healing Power'
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
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you have a 25% chance to deal an additional <span id="neck-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.5,
                stat: 'Combat Power'
            },
            {
                id: 5,
                name: 'Egon Pendant',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you apply a damage over time effect that deals <span id="neck-bonus" class="bonus-var-attack">%d</span> physical damage over 5 seconds. Your damage is increased by 4.5% for each enemy affected by this effect.',
                coefficient: 0.15,
                stat: 'Combat Power'
            },
            {
                id: 6,
                name: 'Spectral Essence',
                description: 'This talisman gains more Attack Rating when leveling up.<br/>Whenever you hit an enemy who is below 50% of their maximum health, you have a 33% chance to summon a Spectre who will cast Unravel Soul. 10 second cooldown.<br/>Unravel Soul: An attack that deals <span id="neck-bonus" class="bonus-var-attack">%d</span> magical damage.',
                coefficient: 2.2,
                stat: 'Combat Power'
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
                description: 'This talisman gains more Heal Rating when leveling up.<br/>Whenever you heal an ally who is below 50% of their maximum health, their damage is increased by 4.5% and their attacks restore their health up to a maximum of <span id="neck-bonus" class="bonus-var-heal">%d</span> health restored for 3 seconds. This effect can only be applied once every 10 seconds.',
                coefficient: 0.335,
                stat: 'Healing Power'
            },
            {
                id: 10,
                name: 'Fishbone Medallion',
                description: 'Whenever you lose health while below 50% of your maximum health, your Protection is increased by <span class="bonus-const">875</span> for 5 seconds.',
            },
            {
                id: 11,
                name: 'Medallion of Wadjet',
                description: 'Whenever you lose health while below 50% of your maximum health, you gain a barrier which absorbs 100 of incoming damage and dissipates after absorbing <span id="neck-bonus" class="bonus-var-heal">%d</span> damage. This effect can only occur once every 10 seconds.',
                coefficient: 1.25,
                stat: 'Healing Power'
            },
            {
                id: 12,
                name: 'Lycanthropic Essence',
                description: 'This talisman gains more health when leveling up.</br>Whenever you lose health while below 50% of your maximum health, your damage is increased by 17% for 3 seconds and your next attack during this time will restore 4% of your maximum health. This effect can only occur once every 10 seconds.'
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
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore <span id="wrist-bonus" class="bonus-var-heal">%d</span> health to that ally.',
                coefficient: 0.5,
                stat: 'Healing Power'
            },
            {
                id: 3,
                name: 'Iron-Sulfur Bracelet',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore <span id="wrist-bonus" class="bonus-var-attack">%d</span> health to that ally.',
                coefficient: 0.5,
                stat: 'Combat Power'
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
                description: 'Whenever an Exposed or Debilitated enemy attacks you, you deal <span id="wrist-bonus" class="bonus-var-attack">%d</span> physical damage back to them. This damage generates a large amount of hate.',
                coefficient: 0.04,
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Bracer of Horus',
                description: 'Whenever a Debilitated enemy attacks you, you have a 25% chance to increase the duration of that enemy\'s Debilitated effect by 1 second.',
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
                description: 'Whenever you critically hit, you additionally deal <span id="luck-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.25,
                stat: 'Combat Power'
            },
            {
                id: 4,
                name: 'Cold Silver Dice',
                description: 'Whenever you critically hit, you have a 30% chance to gain 1 Energy for the weapon which performed the critical hit.'
            },
            {
                id: 5,
                name: 'Chit of Kinich Ahau',
                description: 'Whenever you critically heal, you additionally restore <span id="luck-bonus" class="bonus-var-heal">%d</span> health to your target.',
                coefficient: 0.25,
                stat: 'Healing Power'
            },
            {
                id: 6,
                name: 'Tarot Cards',
                description: 'Whenever you critically heal, your defensive target\'s Protection is increased by <span class="bonus-const">615</span> for 3 seconds.'
            },
            {
                id: 7,
                name: 'Obsidian Flakes',
                description: 'Whenever you evade an attack or an attack glances you, your Protection is increased by <span class="bonus-const">705</span> for 5 seconds.'
            },
            {
                id: 8,
                name: 'Golden Coin',
                description: 'Whenever you evade an attack or an attack glances you, you deal <span id="luck-bonus" class="bonus-var-attack">%d</span> physical damage back to the attacker. This damage generate a large amount of hate.',
                coefficient: 0.2875,
                stat: 'Combat Power'
            },
            {
                id: 9,
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
                description: 'Whenever you roll a Double Blue or better set of matching chambers, your next Pistol attack deals an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.9,
                stat: 'Combat Power'
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
                description: 'Whenever you activate Spirit Blade, your next Blade attack will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> - <span id="waist-bonus2" class="bonus-var-attack">%d</span> physical damage. The amount of damage dealt scales based on the amount of Chi you had when activating Spirit Blade.',
                coefficient: 0.25,
                coefficient2: 1.25,
                stat: 'Combat Power',
                stat2: 'Combat Power'
            },
            {
                id: 11,
                name: 'Brawler\'s Belt',
                description: 'Whenever you spend Rage to empower an attack, you gain 7 Rage. Rage must be spent in order to trigger this effect.'
            },
            {
                id: 12,
                name: 'Primal Rope Belt',
                description: 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id="waist-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficient: 1.125,
                coefficient2: 1.125,
                stat: 'Combat Power',
                stat2: 'Healing Power'
            },
            {
                id: 13,
                name: 'Pentacle Wrap',
                description: 'Reduces the amount of self-damage dealt by Corruption and Martyrdom by 10%. In addition, once you have lost 10% of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> magical damage or your next healing Blood Magic ability will restore an additional <span id="waist-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficient: 0.425,
                coefficient2: 0.425,
                stat: 'Combat Power',
                stat2: 'Healing Power'
            },
            {
                id: 14,
                name: 'Tumultuous Sash',
                description: 'Whenever your Paradox counts resets, you gain 1 - 2 Paradoxes.'
            },
            {
                id: 15,
                name: 'Thermotic Cinch',
                description: 'Whenever you overheat, your next Elemental cold ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> magical damage.',
                coefficient: 1.25,
                stat: 'Combat Power'
            },
            {
                id: 16,
                name: 'Tactical Belt',
                description: 'Whenever you reload your Shotgun, your next Shotgun attack will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.875,
                stat: 'Combat Power'
            },
            {
                id: 17,
                name: 'Military Strap',
                description: 'Whenever you launch a fully cooked grenade, you gain 1 Energy.'
            },
            {
                id: 18,
                name: 'Generalist\'s Belt',
                description: '"Whenever you activate a Power ability, there is a 33% chance that you will deal <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage or the target is healed for and additional <span id="waist-bonus2" class="bonus-var-heal">%d</span>. Additional damage occurs when using damaging power abilities and additional healing occurs when using healing power abilities.',
                coefficient: 0.375,
                coefficient2: 0.375,
                stat: 'Combat Power',
                stat2: 'Healing Power'
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
                description: 'Whenever you or any of your group members defeat an enemy, your next attack will deal <span id="occult-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.833,
                stat: 'Combat Power'
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
                description: 'Whenever you or any of your group members defeat an enemy, your next heal will restore <span id="occult-bonus" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficient: 0.833,
                stat: 'Healing Power'
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
                description: 'Whenever you or any of your group members defeat an enemy, you are healed for <span id="occult-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.833,
                stat: 'Healing Power'
            }
        ]
    }
};var swlcalc = swlcalc || {};
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
