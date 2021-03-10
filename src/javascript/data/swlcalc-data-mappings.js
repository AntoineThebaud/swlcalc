var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.statMapping = {
  primaryStats : [
    'attack-rating',
    'heal-rating',
    'hit-points',
    'protection'
  ],
  secondaryStats : [
    'hit-rating',
    'critical-rating',
    'critical-power',
    'evade-rating',
    'defense-rating'
  ],
  toPretty : {
    'attack-rating': 'Attack Rating',
    'critical-rating': 'Critical Rating',
    'critical-power': 'Critical Power',
    'evade-rating': 'Evade Rating',
    'defense-rating': 'Defense Rating',
    'heal-rating': 'Heal Rating',
    'hit-points': 'Hit Points',
    'hit-rating': 'Hit Rating',
    'none': '',
    'protection': 'Protection'
  }
};

swlcalc.data.secondaryStatMapping = {
    toNum: {
        'none': 0,
        'hit-rating': 1,
        'critical-rating': 2,
        'critical-power': 3,
        'evade-rating': 4,
        'defense-rating': 5,
    },
    toStat: {
        0: 'none',
        1: 'hit-rating',
        2: 'critical-rating',
        3: 'critical-power',
        4: 'evade-rating',
        5: 'defense-rating',
    },
    toName: {
      'hit-rating': 'Accurate',
      'critical-rating': 'Fierce',
      'critical-power': 'Devastating',
      'evade-rating': 'Elusive',
      'defense-rating': 'Stalwart'
    },
    toPercentStat: {
      'hit-rating': 'glance-reduction',
      'critical-rating': 'critical-chance',
      'critical-power': 'critical-power-percentage',
      'evade-rating': 'evade-chance',
      'defense-rating': 'glance-chance'
    }
};

swlcalc.data.rarityMapping = {
    toNum: {
        'none': 0,
        'standard': 1,
        'superior': 2,
        'epic': 3,
        'mythic': 4,
        'legendary': 5
    },
    toName: {
        0: 'none',
        1: 'standard',
        2: 'superior',
        3: 'epic',
        4: 'mythic',
        5: 'legendary'
    },
    toMaxLevel: {
        'none': 0,
        'standard': 20,
        'superior': 25,
        'epic': 30,
        'mythic': 35,
        'legendary': 70
    }
};

swlcalc.data.qualityMapping = {
    'weapon': {
        toName: {
            1: 'Mk I',
            2: 'Mk II',
            3: 'Mk III',
            4: 'Mk IV'
        }
    },
    'talisman': {
        toName: {
            1: 'Faded',
            2: 'Luminous',
            3: 'Radiant',
            4: 'Resplendent'
        }
    },
    'glyph': {
        toName: {
            1: 'Crude',
            2: 'Simple',
            3: 'Intricate',
            4: 'Elaborate'
        }
    }
};
