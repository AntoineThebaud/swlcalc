var swlcalc = swlcalc || {};
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
