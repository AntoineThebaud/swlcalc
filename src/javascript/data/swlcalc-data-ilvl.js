var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.ilvl = {
    'talisman': {
        'standard': {
            '1': {
                init: 2,
                perLevel: 34/19 // == (36 - 2) / (20 - 1)
            },
            '2': {
                init: 2,
                perLevel: 38/19 // == (40 - 2) / (20 - 1)
            },
            '3': {
                init: 3,
                perLevel: 42/19 // == (45 - 3) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 41,
                perLevel: 63/24 // == (104 - 41) / (25 - 1)
            },
            '2': {
                init: 46,
                perLevel: 71/24 // == (117 - 46) / (25 - 1)
            },
            '3': {
                init: 51,
                perLevel: 79/24 // == (130 - 51) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                init: 121,
                perLevel: 102/29 // == (223 - 121) / (30 - 1)
            },
            '2': {
                init: 136,
                perLevel: 114/29 // == (250 - 136) / (30 - 1)
            },
            '3': {
                init: 151,
                perLevel: 127/29 // == (278 - 151) / (30 - 1)
            },
            '4': {
                init: 166,
                perLevel: 140/29 // == (306 - 166) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 257,
                perLevel: 150/34 // == (407 - 257) / (35 - 1)
            },
            '2': {
                init: 290,
                perLevel: 168/34 // == (458 - 290) / (35 - 1)
            },
            '3': {
                init: 322,
                perLevel: 187/34 // == (509 - 322) / (35 - 1)
            },
            '4': {
                init: 354,
                perLevel: 206/34 // == (560 - 354) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 467,
                perLevel: 365/69 // == (832 - 467) / (70 - 1)
            },
            '2': {
                init: 526,
                perLevel: 410/69 // == (936 - 526) / (70 - 1)
            },
            '3': {
                init: 584,
                perLevel: 456/69 // == (1040 - 584) / (70 - 1)
            },
            '4': {
                init: 643,
                perLevel: 500/69 // == (1143 - 643) / (70 - 1)
            }
        }
    },
    'weapon': { // Weapons are worth ~15% more Item Power than talismans + don't have ilvl increased when upgraded to 4-pip
        'standard': {
            '1': {
                init: 2,
                perLevel: 39/19 // == (41 - 2) / (20 - 1)
            },
            '2': {
                init: 2,
                perLevel: 44/19 // == (46 - 2) / (20 - 1)
            },
            '3': {
                init: 3,
                perLevel: 49/19 // == (52 - 3) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 47,
                perLevel: 73/24 // == (120 - 47) / (25 - 1)
            },
            '2': {
                init: 53,
                perLevel: 82/24 // == (135 - 53) / (25 - 1)
            },
            '3': {
                init: 59,
                perLevel: 91/24 // == (150 - 59) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                init: 139,
                perLevel: 117/29 // == (256 - 139) / (30 - 1)
            },
            '2': {
                init: 156,
                perLevel: 132/29 // == (288 - 156) / (30 - 1)
            },
            '3': {
                init: 174,
                perLevel: 146/29 // == (320 - 174) / (30 - 1)
            },
            '4': {
                init: 174,
                perLevel: 146/29 // == (320 - 174) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 296,
                perLevel: 172/34 // == (468 - 296) / (35 - 1)
            },
            '2': {
                init: 334,
                perLevel: 193/34 // == (527 - 334) / (35 - 1)
            },
            '3': {
                init: 370,
                perLevel: 215/34 // == (585 - 370) / (35 - 1)
            },
            '4': {
                init: 370,
                perLevel: 215/34 // == (585 - 370) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 537,
                perLevel: 420/69 // == (957 - 537) / (70 - 1)
            },
            '2': {
                init: 605,
                perLevel: 471/69 // == (1076 - 605) / (70 - 1)
            },
            '3': {
                init: 672,
                perLevel: 524/69 // == (1196 - 672) / (70 - 1)
            },
            '4': {
                init: 672,
                perLevel: 524/69 // == (1196 - 672) / (70 - 1)
            }
        }
    },
    'glyph': {
        'standard': {
            '1': {
                init: 2,
                perLevel: 18/19 // == (20 - 2) / (20 - 1)
            },
            '2': {
                init: 2,
                perLevel: 20/19 // == (22 - 2) / (20 - 1)
            },
            '3': {
                init: 2,
                perLevel: 23/19 // == (25 - 2) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 23,
                perLevel: 27/19 // == (50 - 23) / (20 - 1)
            },
            '2': {
                init: 26,
                perLevel: 30/19 // == (56 - 26) / (20 - 1)
            },
            '3': {
                init: 28,
                perLevel: 35/19 // == (63 - 28) / (20 - 1)
            }
        },
        'epic': {
            '1': {
                init: 66,
                perLevel: 37/19 // == (103 - 66) / (20 - 1)
            },
            '2': {
                init: 74,
                perLevel: 41/19 // == (115 - 74) / (20 - 1)
            },
            '3': {
                init: 83,
                perLevel: 45/19 // == (128 - 83) / (20 - 1)
            },
            '4': {
                init: 90,
                perLevel: 50/19 // == (140 - 90) / (20 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 141,
                perLevel: 45/19 // == (186 - 141) / (20 - 1)
            },
            '2': {
                init: 158,
                perLevel: 52/19 // == (210 - 158) / (20 - 1)
            },
            '3': {
                init: 176,
                perLevel: 57/19 // == (233 - 176) / (20 - 1)
            },
            '4': {
                init: 193,
                perLevel: 62/19 // == (255 - 193) / (20 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 255,
                perLevel: 55/19 // == (310 - 255) / (20 - 1)
            },
            '2': {
                init: 287,
                perLevel: 62/19 // == (349 - 287) / (20 - 1)
            },
            '3': {
                init: 319,
                perLevel: 68/19 // == (387 - 319) / (20 - 1)
            },
            '4': {
                init: 350,
                perLevel: 75/19 // == (425 - 350) / (20 - 1)
            }
        }
    },
    'signet': {
        'standard': {
            init: 0.6364,
            perLevel: 0.6
        },
        'superior': {
            init: 13.8182,
            perLevel: 0.9
        },
        'epic': {
            init: 41,
            perLevel: 1.2
        },
        'mythic': {
            init: 87.6364,
            perLevel: 1.5
        },
        'legendary': {
            init: 159.2727,
            perLevel: 1.8
        }
    }
};
