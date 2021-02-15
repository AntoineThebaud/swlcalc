var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.stats = {
    // Various coefficients
    glyphInWeaponCoefficient: 1.225,               // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans.
    arCoefficient: 1,                              // Power rating fully converts into Attack Rating.
    hrCoefficient: 0.8001871783,                   // Power rating gives lower amount when converting into Heal Rating /!\ approximated value of the real IG multiplier.
    hpCoefficient: 2.856288917,                    // Power rating gives greater amount when converting into Hit points /!\ approximated value of the real IG multiplier.
    pcritCoefficient: 0.973,                       // Crit Power glyphs give 97.3% of the value of other glyphs.
    protIncreasePerSurvivabilityPointCoef: 2.0827, // Survability AA provides increased Protection (* 308.2% at AA 100)

    // Data to build Summary table
    computationFigures: {
        primary: {
            'ar': {
                base: 2000,      // Base amount at level 50
                capstone: 810,   // Amount brought by Capstone points
                spPassive: 1512, // Amount brought by the passives skills
                coef: 0.075 // TODO difference between arCoefficient above and this one is not clear
            },
            'hr': {
                base: 2000,
                capstone: 810,
                spPassive: 1500,
                coef: 0.02 // TODO difference between hrCoefficient above and this one is not clear
            },
            'hp': {
                base: 3300,
                capstone: 81 * 30, // = 2430 with all (81) capstones unlocked
                spPassive: 2997
            },
            'protection': {
                base: 0,
                capstone: 0,
                spPassive: 2259,
                constDivisor: 24538
            }
        },
        secondary: {
            'hit': {
                spPassiveFlat: 756,  // Amount brought to the flat stat (e.g Hit Rating, Evade rating...) by the passive skills
                spPassivePercent: 0, // Amount brought to the %chance stat (e.g Glance reduction, Evade chance...) by the passive skills
                expertise: 0,          // Amount brought by weapon expertise
                hardCap: 0,            // hard cap for this stat
                softCapRate: 50.85,    // Rate at which %chance stat increases when below hard cap
                hardCapRate: 50.85,    // Rate at which %chance stat increases when above hard cap
            },
            'crit': {
                spPassiveFlat: 756,
                spPassivePercent: 1,
                expertise: 7.5,
                hardCap: 7000,
                softCapRate: 157.38,
                hardCapRate: 693.77,
            },
            'cpow': {
                spPassiveFlat: 1008,
                spPassivePercent: 25,
                expertise: 30,
                hardCap: 3950,
                softCapRate: 28.26,
                hardCapRate: 135.00,
            },
            'def': {
                spPassiveFlat: 753,
                spPassivePercent: 0,
                expertise: 0,
                hardCap: 4565,
                softCapRate: 101.66,
                hardCapRate: 680.13,
            },
            'evad': {
                spPassiveFlat: 753,
                spPassivePercent: 0,
                expertise: 0,
                hardCap: 5000,
                softCapRate: 145.47,
                hardCapRate: 963.58,
            }
        }
    }
}
