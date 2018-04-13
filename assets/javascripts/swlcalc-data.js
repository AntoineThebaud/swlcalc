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
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'finger': [
            {
                id: 1,
                name: '[Hammer] Signet of Bludgeoning',
                description: 'Increases the damage and healing of Hammer Basic Abilities by %TODO%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'neck': [
            {
                id: 1,
                name: '[Hammer] Signet of Crushing',
                description: 'Increases the damage and healing of Hammer Power Abilities by %TODO%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Signet of Condensed Anima',
                description: 'Increases the rate at which your Ultimate Abilities recharge on ability activation by %TODO%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Signet of Laceration',
                description: 'When you critically hit or heal, you gain a beneficial effect that grants you a %TODO% bonus to critical damage for 5 seconds. This ability can only occur once every 15 seconds.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Signet of Matter Creation',
                description: 'Increases the damage of Gadgets by %TODO%.',
                cooldown: '0', //TODO/FEATURE : cooldown decrease with gear power
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Signet of Acrobatics',
                description: 'Reduces the cooldown of Active Dodge by %TODO%.',
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
            }/*,
            {
                id: 2,
                name: 'Pigment',
                description: ''
            },
            {
                id: 3,
                name: 'Blood Halo',
                description: 'Whenever you heal the same target 5 times, their Protection is increased by 510 for 3 seconds.'
            }*/
        ],
        'finger': [
            {
                id: 1,
                name: 'Ring',
                description: ''
            }/*,
            {
                id: 2,
                name: 'Rurikid Knot',
                description: 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by 1530 for 4 seconds.'
            }*/
        ],
        'neck': [
            {
                id: 1,
                name: 'Medallion',
                description: ''
            }/*,
            {
                id: 2,
                name: 'Fishbone Medallion',
                description: 'Whenever you lose health while below 50% of your maximum health, your Protection is increased by 875 for 5 seconds.'
            }*/
        ],
        'wrist': [
            {
                id: 1,
                name: 'Bracelet',
                description: ''
            }/*,
            {
                id: 2,
                name: 'Bone Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore %TODO health to that ally.'
            }*/
        ],
        'luck': [
            {
                id: 1,
                name: 'Dice',
                description: ''
            }/*,
            {
                id: 2,
                name: 'Obsidian Flakes',
                description: 'Whenever you evade an attack or an attack glances you, your Protection is increased by 705 for 5 seconds.'
            }*/
        ],
        'waist': [
            {
                id: 1,
                name: 'Chain',
                description: ''
            }/*,
            {
                id: 2,
                name: 'High Roller\'s Chain',
                description: 'Whenever you roll a Double Blue or better set of matching chambers, your next Pistol attack deals an additional %TODO physical damage.'
            },
            {
                id: 3,
                name: 'Black Sash',
                description: 'Whenever you hit an enemy who is facing towards you, the enemy gains increased hate towards you.'
            }*/
        ],
        'occult': [
            {
                id: 1,
                name: 'Effigy',
                description: ''
            }/*,
            {
                id: 2,
                name: 'Sigil of Ambition',
                description: 'Whenever you or any of your group members defeat an enemy, your next attack will deal %TODO physical damage.'
            }*/
        ]
    }
}
;var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.item_power_base = {
    'standard': {
        item_power_init: 2 + 1/3,
        item_power_per_level: 2.2
    },
    'superior': {
        item_power_init: 50 + 2/3,
        item_power_per_level: 3.3
    },
    'epic': {
        item_power_init: 150 + 1/3,
        item_power_per_level: 4.4
    },
    'mythic': {
        item_power_init: 321 + 1/3,
        item_power_per_level: 5.5
    },
    'legendary': {
        item_power_init: 584,
        item_power_per_level: 6.6
    }
};

swlcalc.data.item_power = {
    gear: {
        'talisman-or-weapon': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.item_power_base['standard'].item_power_init,
                    item_power_per_level: swlcalc.data.item_power_base['standard'].item_power_per_level,
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.item_power_base['superior'].item_power_init,
                    item_power_per_level: swlcalc.data.item_power_base['superior'].item_power_per_level
                },
                'epic': {
                    xp_per_level: 2400,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.item_power_base['epic'].item_power_init,
                    item_power_per_level: swlcalc.data.item_power_base['epic'].item_power_per_level
                },
                'mythic': {
                    xp_per_level: 12000,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.item_power_base['mythic'].item_power_init,
                    item_power_per_level: swlcalc.data.item_power_base['mythic'].item_power_per_level
                },
                'legendary': {
                    xp_per_level: 25000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.item_power_base['legendary'].item_power_init,
                    item_power_per_level: swlcalc.data.item_power_base['legendary'].item_power_per_level
                }
            }
        },
        'glyph': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.item_power_base['standard'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['standard'].item_power_per_level * (0.3 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.item_power_base['superior'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['superior'].item_power_per_level * (0.3 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.item_power_base['epic'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['epic'].item_power_per_level * (0.3 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.item_power_base['mythic'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['mythic'].item_power_per_level * (0.3 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.item_power_base['legendary'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['legendary'].item_power_per_level * (0.3 / 0.55)
                }
            }
        },
        'signet': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.item_power_base['standard'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['standard'].item_power_per_level * (0.15 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.item_power_base['superior'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['superior'].item_power_per_level * (0.15 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.item_power_base['epic'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['epic'].item_power_per_level * (0.15 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.item_power_base['mythic'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['mythic'].item_power_per_level * (0.15 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.item_power_base['legendary'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.item_power_base['legendary'].item_power_per_level * (0.15 / 0.55)
                }
            }
        }
    }
};
