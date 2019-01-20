var swlcalc = swlcalc || {};
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
            '1': {
                power_rating_init: 42,
                power_rating_per_level: 190/19 // == (232 - 42) / (20 - 1)
            },
            '2': {
                power_rating_init: 47,
                power_rating_per_level: 216/19 // == (263 - 47) / (20 - 1)
            },
            '3': {
                power_rating_init: 53,
                power_rating_per_level: 240/19 // == (293 - 53) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                power_rating_init: 293,
                power_rating_per_level: 291/24 // == (584 - 293) / (25 - 1)
            },
            '2': {
                power_rating_init: 329,
                power_rating_per_level: 328/24 // == (657 - 329) / (25 - 1)
            },
            '3': {
                power_rating_init: 366,
                power_rating_per_level: 364/24 // == (730 - 366) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                power_rating_init: 677,
                power_rating_per_level: 393/29 // == (1070 - 677) / (30 - 1)
            },
            '2': {
                power_rating_init: 762,
                power_rating_per_level: 442/29 // == (1204 - 762) / (30 - 1)
            },
            '3': {
                power_rating_init: 847,
                power_rating_per_level: 490/29 // == (1337 - 847) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                power_rating_init: 1232,
                power_rating_per_level: 493/34 // == (1725 - 1232) / (35 - 1)
            },
            '2': {
                power_rating_init: 1386,
                power_rating_per_level: 555/34 // == (1941 - 1386) / (35 - 1)
            },
            '3': {
                power_rating_init: 1540,
                power_rating_per_level: 616/34 // == (2156 - 1540) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                power_rating_init: 1923,
                power_rating_per_level: 997/69 // == (2920 - 1923) / (70 - 1)
            },
            '2': {
                power_rating_init: 2164,
                power_rating_per_level: 1121/69 // == (3285 - 2164) / (70 - 1)
            },
            '3': {
                power_rating_init: 2404,
                power_rating_per_level: 1246/69 // == (3650 - 2404) / (70 - 1)
            }
        }
    },
    'major': {
        'standard': {
            '1': {
                power_rating_init: 25,
                power_rating_per_level: 115/19 // == (140 - 25) / (20 - 1)
            },
            '2': {
                power_rating_init: 28,
                power_rating_per_level: 130/19 // == (158 - 28) / (20 - 1)
            },
            '3': {
                power_rating_init: 32,
                power_rating_per_level: 144/19 // == (176 - 32) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                power_rating_init: 176,
                power_rating_per_level: 174/24 // == (350 - 176) / (25 - 1)
            },
            '2': {
                power_rating_init: 198,
                power_rating_per_level: 196/24 // == (394 - 198) / (25 - 1)
            },
            '3': {
                power_rating_init: 220,
                power_rating_per_level: 218/24 // == (438 - 220) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                power_rating_init: 406,
                power_rating_per_level: 236/29 // == (642 - 406) / (30 - 1)
            },
            '2': {
                power_rating_init: 457,
                power_rating_per_level: 265/29 // == (722 - 457) / (30 - 1)
            },
            '3': {
                power_rating_init: 508,
                power_rating_per_level: 294/29 // == (802 - 508) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                power_rating_init: 739,
                power_rating_per_level: 296/34 // == (1035 - 739) / (35 - 1)
            },
            '2': {
                power_rating_init: 832,
                power_rating_per_level: 332/34 // == (1164 - 832) / (35 - 1)
            },
            '3': {
                power_rating_init: 924,
                power_rating_per_level: 370/34 // == (1294 - 924) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                power_rating_init: 1154,
                power_rating_per_level: 598/69 // == (1752 - 1154) / (70 - 1)
            },
            '2': {
                power_rating_init: 1298,
                power_rating_per_level: 673/69 // == (1971 - 1298) / (70 - 1)
            },
            '3': {
                power_rating_init: 1442,
                power_rating_per_level: 748/69 // == (2190 - 1442) / (70 - 1)
            }
        }
    },
    'minor': {
        'standard': {
            '1': {
                power_rating_init: 17,
                power_rating_per_level: 77/19 // == (94 - 17) / (20 - 1)
            },
            '2': {
                power_rating_init: 19,
                power_rating_per_level: 86/19 // == (105 - 19) / (20 - 1)
            },
            '3': {
                power_rating_init: 21,
                power_rating_per_level: 96/19 // == (117 - 21) / (20 - 1)
            }
        },
        'superior': {
            '1': {
                power_rating_init: 117,
                power_rating_per_level: 117/24 // == (234 - 117) / (25 - 1)
            },
            '2': {
                power_rating_init: 132,
                power_rating_per_level: 131/24 // == (263 - 132) / (25 - 1)
            },
            '3': {
                power_rating_init: 146,
                power_rating_per_level: 146/24 // == (292 - 146) / (25 - 1)
            }
        },
        'epic': {
            '1': {
                power_rating_init: 271,
                power_rating_per_level: 157/29 // == (428 - 271) / (30 - 1)
            },
            '2': {
                power_rating_init: 305,
                power_rating_per_level: 176/29 // == (481 - 305) / (30 - 1)
            },
            '3': {
                power_rating_init: 339,
                power_rating_per_level: 196/29 // == (535 - 339) / (30 - 1)
            }
        },
        'mythic': {
            '1': {
                power_rating_init: 493,
                power_rating_per_level: 197/34 // == (690 - 493) / (35 - 1)
            },
            '2': {
                power_rating_init: 554,
                power_rating_per_level: 222/34 // == (776 - 554) / (35 - 1)
            },
            '3': {
                power_rating_init: 616,
                power_rating_per_level: 246/34 // == (862 - 616) / (35 - 1)
            }
        },
        'legendary': {
            '1': {
                power_rating_init: 769,
                power_rating_per_level: 399/69 // == (1168 - 769) / (70 - 1)
            },
            '2': {
                power_rating_init: 865,
                power_rating_per_level: 449/69 // == (1314 - 865) / (70 - 1)
            },
            '3': {
                power_rating_init: 962,
                power_rating_per_level: 498/69 // == (1460 - 962) / (70 - 1)
            }
        }
    }
};
