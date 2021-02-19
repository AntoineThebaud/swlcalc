var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.protection = {
    'head': {
        'standard': {
            '1': {
                init: 10,
                perLevel: 43/19 // == (53 - 10) / (20 - 1)
            },
            '2': {
                init: 11,
                perLevel: 49/19 // == (60 - 11) / (20 - 1)
            },
            '3': {
                init: 12,
                perLevel: 55/19 // == (67 - 12) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 67,
                perLevel: 66/24 // == (133 - 67) / (20 - 1)
            },
            '2': {
                init: 75,
                perLevel: 75/24 // == (150 - 75) / (25 - 1)
            },
            '3': {
                init: 84,
                perLevel: 83/24 // == (167 - 84) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                init: 155,
                perLevel: 89/29 // == (244 - 155) / (30 - 1)
            },
            '2': {
                init: 174,
                perLevel: 101/29 // == (275 - 174) / (30 - 1)
            },
            '3': {
                init: 193,
                perLevel: 112/29 // == (305 - 193) / (30 - 1)
            },
            '4': {
                init: 213,
                perLevel: 123/29 // == (336 - 213) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 281,
                perLevel: 113/34 // == (394 - 281) / (35 - 1)
            },
            '2': {
                init: 316,
                perLevel: 127/34 // == (443 - 316) / (35 - 1)
            },
            '3': {
                init: 352,
                perLevel: 140/34 // == (492 - 352) / (35 - 1)
            },
            '4': {
                init: 387,
                perLevel: 155/34 // == (542 - 387) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 439,
                perLevel: 228/69 // == (667 - 439) / (70 - 1)
            },
            '2': {
                init: 494,
                perLevel: 256/69 // == (750 - 494) / (70 - 1)
            },
            '3': {
                init: 549,
                perLevel: 284/69 // == (833 - 549) / (70 - 1)
            },
            '4': {
                init: 604,
                perLevel: 313/69 // == (917 - 604) / (70 - 1)
            }
        }
    },
    'major': {
        'standard': {
            '1': {
                init: 6,
                perLevel: 26/19 // == (32 - 6) / (20 - 1)
            },
            '2': {
                init: 6,
                perLevel: 30/19 // == (36 - 6) / (20 - 1)
            },
            '3': {
                init: 7,
                perLevel: 33/19 // == (40 - 7) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 40,
                perLevel: 40/24 // == (80 - 40) / (25 - 1)
            },
            '2': {
                init: 45,
                perLevel: 45/24 // == (90 - 45) / (25 - 1)
            },
            '3': {
                init: 50,
                perLevel: 50/24 // == (100 - 50) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                init: 93,
                perLevel: 54/29 // == (147 - 93) / (30 - 1)
            },
            '2': {
                init: 104,
                perLevel: 61/29 // == (165 - 104) / (30 - 1)
            },
            '3': {
                init: 116,
                perLevel: 67/29 // == (183 - 116) / (30 - 1)
            },
            '4': {
                init: 128,
                perLevel: 74/29 // == (202 - 128) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 169,
                perLevel: 67/34 // == (236 - 169) / (35 - 1)
            },
            '2': {
                init: 190,
                perLevel: 76/34 // == (266 - 190) / (35 - 1)
            },
            '3': {
                init: 211,
                perLevel: 84/34 // == (295 - 211) / (35 - 1)
            },
            '4': {
                init: 232,
                perLevel: 93/34 // == (325 - 232) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 263,
                perLevel: 137/69 // == (400 - 263) / (70 - 1)
            },
            '2': {
                init: 296,
                perLevel: 154/69 // == (450 - 296) / (70 - 1)
            },
            '3': {
                init: 329,
                perLevel: 171/69 // == (500 - 329) / (70 - 1)
            },
            '4': {
                init: 362,
                perLevel: 188/69 // == (550 - 362) / (70 - 1)
            }
        }
    },
    'minor': {
        'standard': {
            '1': {
                init: 4,
                perLevel: 17/19 // == (21 - 4) / (20 - 1)
            },
            '2': {
                init: 4,
                perLevel: 20/19 // == (24 - 4) / (20 - 1)
            },
            '3': {
                init: 5,
                perLevel: 22/19 // == (27 - 5) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                init: 27,
                perLevel: 26/24 // == (53 - 27) / (25 - 1)
            },
            '2': {
                init: 30,
                perLevel: 30/24 // == (60 - 30) / (25 - 1)
            },
            '3': {
                init: 33,
                perLevel: 34/24 // == (67 - 33) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                init: 62,
                perLevel: 36/29 // == (98 - 62) / (30 - 1)
            },
            '2': {
                init: 70,
                perLevel: 40/29 // == (110 - 70) / (30 - 1)
            },
            '3': {
                init: 77,
                perLevel: 45/29 // == (122 - 77) / (30 - 1)
            },
            '4': {
                init: 85,
                perLevel: 49/29 // == (134 - 85) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                init: 113,
                perLevel: 45/34 // == (158 - 113) / (35 - 1)
            },
            '2': {
                init: 126,
                perLevel: 51/34 // == (177 - 126) / (35 - 1)
            },
            '3': {
                init: 141,
                perLevel: 56/34 // == (197 - 141) / (35 - 1)
            },
            '4': {
                init: 155,
                perLevel: 62/34 // == (217 - 155) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                init: 176,
                perLevel: 91/69 // == (267 - 176) / (70 - 1)
            },
            '2': {
                init: 197,
                perLevel: 103/69 // == (300 - 197) / (70 - 1)
            },
            '3': {
                init: 220,
                perLevel: 113/69 // == (333 - 220) / (70 - 1)
            },
            '4': {
                init: 242,
                perLevel: 125/69 // == (367 - 242) / (70 - 1)
            }
        }
    }
};