var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.stats = {
    // Various coefficients
    weapon_power_coefficient: 1.15,     // Weapons are worth ~15% more Item Power than talismans.
    glyph_in_weapon_coefficient: 1.225, // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans.
    hp_coefficient: 1.427675,           // Power rating gives greater amount when converting into Hit points /!\ approximated value of the real IG multiplier.
    pcrit_coefficient: 0.973,           // Crit Power glyphs give 97.3% of the value of other glyphs.

    // Data to build Summary table
    computationFigures: {
        primary: {
            'ar': {
                base: 2000,       // Base amount at level 50
                capstone: 810,    // Amount brought by Capstone points
                sp_passive: 1512, // Amount brought by the passives skills
                rate: 13 + 1/3
            },
            'hr': {
                base: 2000,
                capstone: 810,
                sp_passive: 1500,
                rate: 13 + 1/3
            },
            'hp': {
                base: 3300,
                capstone: 1215,
                sp_passive: 2997
            }
        },
        secondary: {
            'hit': {
                sp_passive_flat: 756,  // Amount brought to the flat stat (e.g Critical Power, Evade rating...) by the passive skills
                sp_passive_percent: 0, // Amount brought to the %chance stat (e.g Critical Chance, Glance reduction...) by the passive skills
                expertise: 0,          // Amount brought by weapon expertise
                hardCap: 0,            // hard cap for this stat
                softCapRate: 50.85,    // Rate at which %chance stat increases when below hard cap
                hardCapRate: 50.85,    // Rate at which %chance stat increases when above hard cap
            },
            'crit': {
                sp_passive_flat: 756,
                sp_passive_percent: 1,
                expertise: 7.5,
                hardCap: 7116,
                softCapRate: 156.05,
                hardCapRate: 676.75,
            },
            'cpow': {
                sp_passive_flat: 1008,
                sp_passive_percent: 25,
                expertise: 30,
                hardCap: 3996,
                softCapRate: 28.31,
                hardCapRate: 136.00,
            },
            'def': {
                sp_passive_flat: 753,
                sp_passive_percent: 0,
                expertise: 0,
                hardCap: 4569,
                softCapRate: 101.71,
                hardCapRate: 683.00,
            },
            'evad': {
                sp_passive_flat: 753,
                sp_passive_percent: 0,
                expertise: 0,
                hardCap: 4569,
                softCapRate: 145.55,
                hardCapRate: 977.40,
            }
        }
    }
}
