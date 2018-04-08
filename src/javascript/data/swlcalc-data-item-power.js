var swlcalc = swlcalc || {};
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
