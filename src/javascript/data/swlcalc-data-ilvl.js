var swlcalc = swlcalc || {};
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
