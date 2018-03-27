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

swlcalc.data.custom_gear_data = {
    slot: {
        'weapon': {
            rarity: {
                'standard': {
                    level : {
                        1: 50,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 379
                    }
                },
                'superior': {
                    level : {
                        1: 500,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 645,
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 0, //TODO/FEATURE : placeholder value for the moment
                        21: 0, //TODO/FEATURE : placeholder value for the moment
                        22: 0, //TODO/FEATURE : placeholder value for the moment
                        23: 958,
                        24: 0, //TODO/FEATURE : placeholder value for the moment
                        25: 1000
                    }
                },
                'epic': {
                    level : {
                        1: 1160,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 1275,
                        7: 1299,
                        8: 1322,
                        9: 1345,
                        10: 1368,
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 0, //TODO/FEATURE : placeholder value for the moment
                        21: 0, //TODO/FEATURE : placeholder value for the moment
                        22: 0, //TODO/FEATURE : placeholder value for the moment
                        23: 0, //TODO/FEATURE : placeholder value for the moment
                        24: 0, //TODO/FEATURE : placeholder value for the moment
                        25: 0, //TODO/FEATURE : placeholder value for the moment
                        26: 0, //TODO/FEATURE : placeholder value for the moment
                        27: 0, //TODO/FEATURE : placeholder value for the moment
                        28: 0, //TODO/FEATURE : placeholder value for the moment
                        29: 0, //TODO/FEATURE : placeholder value for the moment
                        30: 1832
                    }
                },
                'mythic': {
                    level : {
                        1: 2110,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 0, //TODO/FEATURE : placeholder value for the moment
                        21: 0, //TODO/FEATURE : placeholder value for the moment
                        22: 0, //TODO/FEATURE : placeholder value for the moment
                        23: 0, //TODO/FEATURE : placeholder value for the moment
                        24: 0, //TODO/FEATURE : placeholder value for the moment
                        25: 0, //TODO/FEATURE : placeholder value for the moment
                        26: 0, //TODO/FEATURE : placeholder value for the moment
                        27: 0, //TODO/FEATURE : placeholder value for the moment
                        28: 0, //TODO/FEATURE : placeholder value for the moment
                        29: 0, //TODO/FEATURE : placeholder value for the moment
                        30: 0, //TODO/FEATURE : placeholder value for the moment
                        31: 0, //TODO/FEATURE : placeholder value for the moment
                        32: 0, //TODO/FEATURE : placeholder value for the moment
                        33: 0, //TODO/FEATURE : placeholder value for the moment
                        34: 0, //TODO/FEATURE : placeholder value for the moment
                        35: 2954
                    }
                },
                'legendary': {
                    level : {
                        1: 3293,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 0, //TODO/FEATURE : placeholder value for the moment
                        21: 0, //TODO/FEATURE : placeholder value for the moment
                        22: 0, //TODO/FEATURE : placeholder value for the moment
                        23: 0, //TODO/FEATURE : placeholder value for the moment
                        24: 0, //TODO/FEATURE : placeholder value for the moment
                        25: 0, //TODO/FEATURE : placeholder value for the moment
                        26: 0, //TODO/FEATURE : placeholder value for the moment
                        27: 0, //TODO/FEATURE : placeholder value for the moment
                        28: 0, //TODO/FEATURE : placeholder value for the moment
                        29: 0, //TODO/FEATURE : placeholder value for the moment
                        30: 0, //TODO/FEATURE : placeholder value for the moment
                        31: 0, //TODO/FEATURE : placeholder value for the moment
                        32: 0, //TODO/FEATURE : placeholder value for the moment
                        33: 0, //TODO/FEATURE : placeholder value for the moment
                        34: 0, //TODO/FEATURE : placeholder value for the moment
                        35: 0, //TODO/FEATURE : placeholder value for the moment
                        36: 0, //TODO/FEATURE : placeholder value for the moment
                        37: 0, //TODO/FEATURE : placeholder value for the moment
                        38: 0, //TODO/FEATURE : placeholder value for the moment
                        39: 0, //TODO/FEATURE : placeholder value for the moment
                        40: 0, //TODO/FEATURE : placeholder value for the moment
                        41: 0, //TODO/FEATURE : placeholder value for the moment
                        42: 0, //TODO/FEATURE : placeholder value for the moment
                        43: 0, //TODO/FEATURE : placeholder value for the moment
                        44: 0, //TODO/FEATURE : placeholder value for the moment
                        45: 0, //TODO/FEATURE : placeholder value for the moment
                        46: 0, //TODO/FEATURE : placeholder value for the moment
                        47: 0, //TODO/FEATURE : placeholder value for the moment
                        48: 0, //TODO/FEATURE : placeholder value for the moment
                        49: 0, //TODO/FEATURE : placeholder value for the moment
                        50: 0, //TODO/FEATURE : placeholder value for the moment
                        51: 0, //TODO/FEATURE : placeholder value for the moment
                        52: 0, //TODO/FEATURE : placeholder value for the moment
                        53: 0, //TODO/FEATURE : placeholder value for the moment
                        54: 0, //TODO/FEATURE : placeholder value for the moment
                        55: 0, //TODO/FEATURE : placeholder value for the moment
                        56: 0, //TODO/FEATURE : placeholder value for the moment
                        57: 0, //TODO/FEATURE : placeholder value for the moment
                        58: 0, //TODO/FEATURE : placeholder value for the moment
                        59: 0, //TODO/FEATURE : placeholder value for the moment
                        60: 0, //TODO/FEATURE : placeholder value for the moment
                        61: 0, //TODO/FEATURE : placeholder value for the moment
                        62: 0, //TODO/FEATURE : placeholder value for the moment
                        63: 0, //TODO/FEATURE : placeholder value for the moment
                        64: 0, //TODO/FEATURE : placeholder value for the moment
                        65: 0, //TODO/FEATURE : placeholder value for the moment
                        66: 0, //TODO/FEATURE : placeholder value for the moment
                        67: 0, //TODO/FEATURE : placeholder value for the moment
                        68: 0, //TODO/FEATURE : placeholder value for the moment
                        69: 0, //TODO/FEATURE : placeholder value for the moment
                        70: 5000
                    }
                }
            }
        },
        'head': {
            rarity : {
                'standard': {
                    quality: {
                        'faded': {
                            level : {
                                1: 42,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 232
                            }
                        },
                        'luminous': {
                            level : {
                                1: 47,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 263
                            }
                        },
                        'radiant': {
                            level : {
                                1: 53,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 293
                            }
                        }
                    }
                },
                'superior': {
                    quality: {
                        'faded': {
                            level : {
                                1: 293,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 584
                            }
                        },
                        'luminous': {
                            level : {
                                1: 329,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 657
                            }
                        },
                        'radiant': {
                            level : {
                                1: 366,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 730
                            }
                        }
                    }
                },
                'epic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 677,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 1070
                            }
                        },
                        'luminous': {
                            level : {
                                1: 762,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 1051,
                                21: 1066,
                                22: 1082,
                                23: 1097,
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 1158,
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 1204
                            }
                        },
                        'radiant': {
                            level : {
                                1: 847,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 1337
                            }
                        }
                    }
                },
                'mythic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 1232,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 1725
                            }
                        },
                        'luminous': {
                            level : {
                                1: 1386,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 1941
                            }
                        },
                        'radiant': {
                            level : {
                                1: 1540,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 2156
                            }
                        }
                    }
                },
                'legendary': {
                    quality: {
                        'faded': {
                            level : {
                                1: 1923,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 2920
                            }
                        },
                        'luminous': {
                            level : {
                                1: 2164,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 3285
                            }
                        },
                        'radiant': {
                            level : {
                                1: 2404,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 3650
                            }
                        }
                    }
                }
            }
        },
        'major': {
            rarity : {
                'standard': {
                    quality: {
                        'faded': {
                            level : {
                                1: 25,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 140
                            }
                        },
                        'luminous': {
                            level : {
                                1: 28,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 158
                            }
                        },
                        'radiant': {
                            level : {
                                1: 32,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 176
                            }
                        }
                    }
                },
                'superior': {
                    quality: {
                        'faded': {
                            level : {
                                1: 176,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 350
                            }
                        },
                        'luminous': {
                            level : {
                                1: 198,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 394
                            }
                        },
                        'radiant': {
                            level : {
                                1: 220,
                                2: 229,
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 438
                            }
                        }
                    }
                },
                'epic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 406,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 642
                            }
                        },
                        'luminous': {
                            level : {
                                1: 457,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 584,
                                16: 594,
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 722
                            }
                        },
                        'radiant': {
                            level : {
                                1: 508,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 802
                            }
                        }
                    }
                },
                'mythic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 739,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 1035
                            }
                        },
                        'luminous': {
                            level : {
                                1: 832,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 1164
                            }
                        },
                        'radiant': {
                            level : {
                                1: 924,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 1294
                            }
                        }
                    }
                },
                'legendary': {
                    quality: {
                        'faded': {
                            level : {
                                1: 1154,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 1752
                            }
                        },
                        'luminous': {
                            level : {
                                1: 1298,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 1971
                            }
                        },
                        'radiant': {
                            level : {
                                1: 1442,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 2190
                            }
                        }
                    }
                }
            }
        },
        'minor': {
            rarity : {
                'standard': {
                    quality: {
                        'faded': {
                            level : {
                                1: 17,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 94
                            }
                        },
                        'luminous': {
                            level : {
                                1: 19,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 105
                            }
                        },
                        'radiant': {
                            level : {
                                1: 21,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 117
                            }
                        }
                    }
                },
                'superior': {
                    quality: {
                        'faded': {
                            level : {
                                1: 117,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 234
                            }
                        },
                        'luminous': {
                            level : {
                                1: 132,
                                2: 137,
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 263
                            }
                        },
                        'radiant': {
                            level : {
                                1: 146,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 292
                            }
                        }
                    }
                },
                'epic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 271,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 428
                            }
                        },
                        'luminous': {
                            level : {
                                1: 305,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 481
                            }
                        },
                        'radiant': {
                            level : {
                                1: 339,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 535
                            }
                        }
                    }
                },
                'mythic': {
                    quality: {
                        'faded': {
                            level : {
                                1: 493,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 690
                            }
                        },
                        'luminous': {
                            level : {
                                1: 554,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 776
                            }
                        },
                        'radiant': {
                            level : {
                                1: 616,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 862
                            }
                        }
                    }
                },
                'legendary': {
                    quality: {
                        'faded': {
                            level : {
                                1: 769,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 1168
                            }
                        },
                        'luminous': {
                            level : {
                                1: 865,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 1314
                            }
                        },
                        'radiant': {
                            level : {
                                1: 962,
                                2: 0, //TODO/FEATURE : placeholder value for the moment
                                3: 0, //TODO/FEATURE : placeholder value for the moment
                                4: 0, //TODO/FEATURE : placeholder value for the moment
                                5: 0, //TODO/FEATURE : placeholder value for the moment
                                6: 0, //TODO/FEATURE : placeholder value for the moment
                                7: 0, //TODO/FEATURE : placeholder value for the moment
                                8: 0, //TODO/FEATURE : placeholder value for the moment
                                9: 0, //TODO/FEATURE : placeholder value for the moment
                                10: 0, //TODO/FEATURE : placeholder value for the moment
                                11: 0, //TODO/FEATURE : placeholder value for the moment
                                12: 0, //TODO/FEATURE : placeholder value for the moment
                                13: 0, //TODO/FEATURE : placeholder value for the moment
                                14: 0, //TODO/FEATURE : placeholder value for the moment
                                15: 0, //TODO/FEATURE : placeholder value for the moment
                                16: 0, //TODO/FEATURE : placeholder value for the moment
                                17: 0, //TODO/FEATURE : placeholder value for the moment
                                18: 0, //TODO/FEATURE : placeholder value for the moment
                                19: 0, //TODO/FEATURE : placeholder value for the moment
                                20: 0, //TODO/FEATURE : placeholder value for the moment
                                21: 0, //TODO/FEATURE : placeholder value for the moment
                                22: 0, //TODO/FEATURE : placeholder value for the moment
                                23: 0, //TODO/FEATURE : placeholder value for the moment
                                24: 0, //TODO/FEATURE : placeholder value for the moment
                                25: 0, //TODO/FEATURE : placeholder value for the moment
                                26: 0, //TODO/FEATURE : placeholder value for the moment
                                27: 0, //TODO/FEATURE : placeholder value for the moment
                                28: 0, //TODO/FEATURE : placeholder value for the moment
                                29: 0, //TODO/FEATURE : placeholder value for the moment
                                30: 0, //TODO/FEATURE : placeholder value for the moment
                                31: 0, //TODO/FEATURE : placeholder value for the moment
                                32: 0, //TODO/FEATURE : placeholder value for the moment
                                33: 0, //TODO/FEATURE : placeholder value for the moment
                                34: 0, //TODO/FEATURE : placeholder value for the moment
                                35: 0, //TODO/FEATURE : placeholder value for the moment
                                36: 0, //TODO/FEATURE : placeholder value for the moment
                                37: 0, //TODO/FEATURE : placeholder value for the moment
                                38: 0, //TODO/FEATURE : placeholder value for the moment
                                39: 0, //TODO/FEATURE : placeholder value for the moment
                                40: 0, //TODO/FEATURE : placeholder value for the moment
                                41: 0, //TODO/FEATURE : placeholder value for the moment
                                42: 0, //TODO/FEATURE : placeholder value for the moment
                                43: 0, //TODO/FEATURE : placeholder value for the moment
                                44: 0, //TODO/FEATURE : placeholder value for the moment
                                45: 0, //TODO/FEATURE : placeholder value for the moment
                                46: 0, //TODO/FEATURE : placeholder value for the moment
                                47: 0, //TODO/FEATURE : placeholder value for the moment
                                48: 0, //TODO/FEATURE : placeholder value for the moment
                                49: 0, //TODO/FEATURE : placeholder value for the moment
                                50: 0, //TODO/FEATURE : placeholder value for the moment
                                51: 0, //TODO/FEATURE : placeholder value for the moment
                                52: 0, //TODO/FEATURE : placeholder value for the moment
                                53: 0, //TODO/FEATURE : placeholder value for the moment
                                54: 0, //TODO/FEATURE : placeholder value for the moment
                                55: 0, //TODO/FEATURE : placeholder value for the moment
                                56: 0, //TODO/FEATURE : placeholder value for the moment
                                57: 0, //TODO/FEATURE : placeholder value for the moment
                                58: 0, //TODO/FEATURE : placeholder value for the moment
                                59: 0, //TODO/FEATURE : placeholder value for the moment
                                60: 0, //TODO/FEATURE : placeholder value for the moment
                                61: 0, //TODO/FEATURE : placeholder value for the moment
                                62: 0, //TODO/FEATURE : placeholder value for the moment
                                63: 0, //TODO/FEATURE : placeholder value for the moment
                                64: 0, //TODO/FEATURE : placeholder value for the moment
                                65: 0, //TODO/FEATURE : placeholder value for the moment
                                66: 0, //TODO/FEATURE : placeholder value for the moment
                                67: 0, //TODO/FEATURE : placeholder value for the moment
                                68: 0, //TODO/FEATURE : placeholder value for the moment
                                69: 0, //TODO/FEATURE : placeholder value for the moment
                                70: 1460
                            }
                        }
                    }
                }
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
        2: 'lumninous',
        3: 'radiant',
    }
};

swlcalc.data.wtype_mapping = {
    to_num: {
        'none': 0,
        'blade': 1,
        'hammer': 2,
        'fists': 3,
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
        3: 'fists',
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

swlcalc.data.glyph_data = {
    rarity: {
        'standard': {
            quality: {
                'crude': {
                    level : {
                        1: 12,
                        2: 14,
                        3: 17,
                        4: 20,
                        5: 23,
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TOD0/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 67
                    }
                },
                'simple': {
                    level : {
                        1: 14,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 76
                    }
                },
                'intricate': {
                    level : {
                        1: 15,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 84
                    }
                }
            }
        },
        'superior': {
            quality: {
                'crude': {
                    level : {
                        1: 85,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 185
                    }
                },
                'simple': {
                    level : {
                        1: 95,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 208
                    }
                },
                'intricate': {
                    level : {
                        1: 106,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 184,
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 231
                    }
                }
            }
        },
        'epic': {
            quality: {
                'crude': {
                    level : {
                        1: 215,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 339
                    }
                },
                'simple': {
                    level : {
                        1: 241,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 381
                    }
                },
                'intricate': {
                    level : {
                        1: 268,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 424
                    }
                }
            }
        },
        'mythic': {
            quality: {
                'crude': {
                    level : {
                        1: 390,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 546 // uncertain!
                    }
                },
                'simple': {
                    level : {
                        1: 439,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 615
                    }
                },
                'intricate': {
                    level : {
                        1: 488,
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 683
                    }
                }
            }
        },
        'legendary': {
            quality: {
                'crude': {
                    level : {
                        1: 610, //TODO/BUG : uncertain value !
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 925 //TODO/BUG : uncertain value !
                    }
                },
                'simple': {
                    level : {
                        1: 686, //TODO/BUG : uncertain value !
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 1040 //TODO/BUG : uncertain value !
                    }
                },
                'intricate': {
                    level : {
                        1: 762, //TODO/BUG : uncertain value !
                        2: 0, //TODO/FEATURE : placeholder value for the moment
                        3: 0, //TODO/FEATURE : placeholder value for the moment
                        4: 0, //TODO/FEATURE : placeholder value for the moment
                        5: 0, //TODO/FEATURE : placeholder value for the moment
                        6: 0, //TODO/FEATURE : placeholder value for the moment
                        7: 0, //TODO/FEATURE : placeholder value for the moment
                        8: 0, //TODO/FEATURE : placeholder value for the moment
                        9: 0, //TODO/FEATURE : placeholder value for the moment
                        10: 0, //TODO/FEATURE : placeholder value for the moment
                        11: 0, //TODO/FEATURE : placeholder value for the moment
                        12: 0, //TODO/FEATURE : placeholder value for the moment
                        13: 0, //TODO/FEATURE : placeholder value for the moment
                        14: 0, //TODO/FEATURE : placeholder value for the moment
                        15: 0, //TODO/FEATURE : placeholder value for the moment
                        16: 0, //TODO/FEATURE : placeholder value for the moment
                        17: 0, //TODO/FEATURE : placeholder value for the moment
                        18: 0, //TODO/FEATURE : placeholder value for the moment
                        19: 0, //TODO/FEATURE : placeholder value for the moment
                        20: 1156
                    }
                }
            }
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

swlcalc.data.upgrading_base = {
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

swlcalc.data.upgrading_data = {
    gear: {
        'talisman-or-weapon': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.upgrading_base['standard'].item_power_init,
                    item_power_per_level: swlcalc.data.upgrading_base['standard'].item_power_per_level,
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.upgrading_base['superior'].item_power_init,
                    item_power_per_level: swlcalc.data.upgrading_base['superior'].item_power_per_level
                },
                'epic': {
                    xp_per_level: 2400,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.upgrading_base['epic'].item_power_init,
                    item_power_per_level: swlcalc.data.upgrading_base['epic'].item_power_per_level
                },
                'mythic': {
                    xp_per_level: 12000,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.upgrading_base['mythic'].item_power_init,
                    item_power_per_level: swlcalc.data.upgrading_base['mythic'].item_power_per_level
                },
                'legendary': {
                    xp_per_level: 25000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.upgrading_base['legendary'].item_power_init,
                    item_power_per_level: swlcalc.data.upgrading_base['legendary'].item_power_per_level
                }
            }
        },
        'glyph': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.upgrading_base['standard'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['standard'].item_power_per_level * (0.3 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.upgrading_base['superior'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['superior'].item_power_per_level * (0.3 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.upgrading_base['epic'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['epic'].item_power_per_level * (0.3 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.upgrading_base['mythic'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['mythic'].item_power_per_level * (0.3 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.upgrading_base['legendary'].item_power_init * (0.3 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['legendary'].item_power_per_level * (0.3 / 0.55)
                }
            }
        },
        'signet': {
            rarity: {
                'standard': {
                    xp_per_level: 200,
                    shards_per_level: 200,
                    item_power_init: swlcalc.data.upgrading_base['standard'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['standard'].item_power_per_level * (0.15 / 0.55)
                },
                'superior': {
                    xp_per_level: 500,
                    shards_per_level: 400,
                    item_power_init: swlcalc.data.upgrading_base['superior'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['superior'].item_power_per_level * (0.15 / 0.55)
                },
                'epic': {
                    xp_per_level: 3600,
                    shards_per_level: 600,
                    item_power_init: swlcalc.data.upgrading_base['epic'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['epic'].item_power_per_level * (0.15 / 0.55)
                },
                'mythic': {
                    xp_per_level: 9800,
                    shards_per_level: 800,
                    item_power_init: swlcalc.data.upgrading_base['mythic'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['mythic'].item_power_per_level * (0.15 / 0.55)
                },
                'legendary': {
                    xp_per_level: 100000,
                    shards_per_level: 1000,
                    item_power_init: swlcalc.data.upgrading_base['legendary'].item_power_init * (0.15 / 0.55),
                    item_power_per_level: swlcalc.data.upgrading_base['legendary'].item_power_per_level * (0.15 / 0.55)
                }
            }
        }
    }
};
