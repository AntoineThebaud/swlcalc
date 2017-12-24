var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.glyph_stat_mapping = {
	to_num: {
		'none': 0,
		'critical-rating': 1,
		'critical-power': 2,
		'hit-rating': 3,
		'defense-rating': 4,
		'evade-rating': 5,
	},
	to_stat: {
		0: 'none',
		1: 'critical-rating',
		2: 'critical-power',
		3: 'hit-rating',
		4: 'defense-rating',
		5: 'evade-rating',
	}
};

swlcalc.data.signet_quality_mapping = {
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
        'pistol': 8,
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
        8: 'pistol',
        9: 'assault-rifle'
    }
};
