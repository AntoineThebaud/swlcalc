var swlcalc = swlcalc || {};
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
    },
    to_name: {
      'hit-rating': 'Accurate',
      'critical-rating': 'Fierce',
      'critical-power': 'Devastating',
      'evade-rating': 'Elusive',
      'defense-rating': 'Stalwart'
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

swlcalc.data.quality_mapping = {
    'weapon': {
        to_name: {
            1: 'MK I',
            2: 'MK II',
            3: 'MK III'
        }
    },
    'talisman': {
        to_name: {
            1: 'Faded',
            2: 'Luminous',
            3: 'Radiant'
        }
    },
    'glyph': {
        to_name: {
            1: 'Crude',
            2: 'Simple',
            3: 'Intricate',
            4: 'Elaborate'
        }
    }
};

swlcalc.data.suffix_mapping = {
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
