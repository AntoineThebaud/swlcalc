var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.ilvl = {
    'equipment': {
        'standard': {
            '1': {
                ilvl_init: 2,
                ilvl_per_level: 34/19 // == (36 - 2) / (20 - 1)
            },
            '2': {
                ilvl_init: 2,
                ilvl_per_level: 38/19 // == (40 - 2) / (20 - 1)
            },
            '3': {
                ilvl_init: 3,
                ilvl_per_level: 42/19 // == (45 - 3) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                ilvl_init: 41,
                ilvl_per_level: 63/24 // == (104 - 41) / (25 - 1)
            },
            '2': {
                ilvl_init: 46,
                ilvl_per_level: 71/24 // == (117 - 46) / (25 - 1)
            },
            '3': {
                ilvl_init: 51,
                ilvl_per_level: 79/24 // == (130 - 51) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                ilvl_init: 121,
                ilvl_per_level: 102/29 // == (223 - 121) / (30 - 1)
            },
            '2': {
                ilvl_init: 136,
                ilvl_per_level: 114/29 // == (250 - 136) / (30 - 1)
            },
            '3': {
                ilvl_init: 151,
                ilvl_per_level: 127/29 // == (278 - 151) / (30 - 1)
            },
            '4': {
                ilvl_init: 166,
                ilvl_per_level: 140/29 // == (306 - 166) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                ilvl_init: 257,
                ilvl_per_level: 150/34 // == (407 - 257) / (35 - 1)
            },
            '2': {
                ilvl_init: 290,
                ilvl_per_level: 168/34 // == (458 - 290) / (35 - 1)
            },
            '3': {
                ilvl_init: 322,
                ilvl_per_level: 187/34 // == (509 - 322) / (35 - 1)
            },
            '4': {
                ilvl_init: 354,
                ilvl_per_level: 206/34 // == (560 - 354) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                ilvl_init: 467,
                ilvl_per_level: 365/69 // == (832 - 467) / (70 - 1)
            },
            '2': {
                ilvl_init: 526,
                ilvl_per_level: 410/69 // == (936 - 526) / (70 - 1)
            },
            '3': {
                ilvl_init: 584,
                ilvl_per_level: 456/69 // == (1040 - 584) / (70 - 1)
            },
            '4': {
                ilvl_init: 643,
                ilvl_per_level: 500/69 // == (1143 - 643) / (70 - 1)
            }
        }
    },
    'glyph': {
        'standard': {
            '1': {
                ilvl_init: 2,
                ilvl_per_level: 18/19 // == (20 - 2) / (20 - 1)
            },
            '2': {
                ilvl_init: 2,
                ilvl_per_level: 20/19 // == (22 - 2) / (20 - 1)
            },
            '3': {
                ilvl_init: 2,
                ilvl_per_level: 23/19 // == (25 - 2) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                ilvl_init: 23,
                ilvl_per_level: 27/19 // == (50 - 23) / (20 - 1)
            },
            '2': {
                ilvl_init: 26,
                ilvl_per_level: 30/19 // == (56 - 26) / (20 - 1)
            },
            '3': {
                ilvl_init: 28,
                ilvl_per_level: 35/19 // == (63 - 28) / (20 - 1)
            }
        },
        'epic': {
            '1': {
                ilvl_init: 66,
                ilvl_per_level: 37/19 // == (103 - 66) / (20 - 1)
            },
            '2': {
                ilvl_init: 74,
                ilvl_per_level: 41/19 // == (115 - 74) / (20 - 1)
            },
            '3': {
                ilvl_init: 83,
                ilvl_per_level: 45/19 // == (128 - 83) / (20 - 1)
            },
            '4': {
                ilvl_init: 90,
                ilvl_per_level: 50/19 // == (140 - 90) / (20 - 1)
            }
        },
        'mythic': {
            '1': {
                ilvl_init: 141,
                ilvl_per_level: 45/19 // == (186 - 141) / (20 - 1)
            },
            '2': {
                ilvl_init: 158,
                ilvl_per_level: 52/19 // == (210 - 158) / (20 - 1)
            },
            '3': {
                ilvl_init: 176,
                ilvl_per_level: 57/19 // == (233 - 176) / (20 - 1)
            },
            '4': {
                ilvl_init: 193,
                ilvl_per_level: 62/19 // == (255 - 193) / (20 - 1)
            }
        },
        'legendary': {
            '1': {
                ilvl_init: 255,
                ilvl_per_level: 55/19 // == (310 - 255) / (20 - 1)
            },
            '2': {
                ilvl_init: 287,
                ilvl_per_level: 62/19 // == (349 - 287) / (20 - 1)
            },
            '3': {
                ilvl_init: 319,
                ilvl_per_level: 68/19 // == (387 - 319) / (20 - 1)
            },
            '4': {
                ilvl_init: 350,
                ilvl_per_level: 75/19 // == (425 - 350) / (20 - 1)
            }
        }
    },
    'signet': {
        'standard': {
            ilvl_init: 0.6364,
            ilvl_per_level: 0.6
        },
        'superior': {
            ilvl_init: 13.8182,
            ilvl_per_level: 0.9
        },
        'epic': {
            ilvl_init: 41,
            ilvl_per_level: 1.2
        },
        'mythic': {
            ilvl_init: 87.6364,
            ilvl_per_level: 1.5
        },
        'legendary': {
            ilvl_init: 159.2727,
            ilvl_per_level: 1.8
        }
    }
};
