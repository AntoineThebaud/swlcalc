var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.stats = {
    glyphInWeaponCoef: 1.225,              // Glyphs in weapons are worth ~22.5% more Item Power than glyphs in talismans.
    arConversionCoef: 1,                   // Power rating fully converts into Attack Rating.
    hrConversionCoef: 0.8001871783,        // Power rating gives lower amount when converting into Heal Rating /!\ approximated value of the real IG multiplier.
    hpConversionCoef: 2.856288917,         // Power rating gives greater amount when converting into Hit points /!\ approximated value of the real IG multiplier.
    pcritAdjustmentCoef: 0.973,            // Crit Power glyphs give 97.3% of the value of other glyphs.
    protSurvivabilityIncreaseCoef: 2.0827, // Survability AA provides increased Protection (* 308.2% at AA 100)
    protConstDivisor: 24538,               // Const divisor used in Damage mitigation computation
    primaryPowerCoefs: {
        'cp': 0.075,                       // Coef applied to compute the Combat Power
        'hp': 0.02                         // Coef applied to compute the Healing Power
    },

    passives: {
        arBaseMin: 0,          // Base amount at level 1
        arBaseMax: 2000,       // Base amount at level 50 (50 * 40)
        arBaseStep: 40,
        arCapstonesMax: 810,   // Amount brought by capstones when all unlocked (= 81 * 10)
        arCapstonesStep: 10,
        arPassiveSkills: 1512,

        hrBaseMin: 0,          // Base amount at level 1
        hrBaseMax: 2000,       // Base amount at level 50 (50 * 40)
        hrBaseStep: 40,
        hrCapstonesMax: 810,   // Amount brought by capstones when all unlocked (= 81 * 10)
        hrCapstonesStep: 10,
        hrPassiveSkills: 1500,

        hpBaseMin: 300,          // Base amount at level 1
        hpBaseMax: 3300,       // Base amount at level 50 (50 * 60)
        hpBaseStep: 60,
        hpCapstonesMax: 2430,  // Amount brought by capstones when all unlocked (= 81 * 30)
        hpCapstonesStep: 30,
        hpPassiveSkills: 2997,

        criticalRatingBase: 0,
        criticalRatingPassiveSkills: 756,

        criticalChanceBase: 1,
        criticalChanceExpertiseMin: 0.3,
        criticalChanceExpertiseMax: 7.5,
        criticalChanceExpertiseStep: 0.3,

        criticalPowerBase: 0,
        criticalPowerPassiveSkills: 1008,

        criticalPowerPercentageBase: 25,
        criticalPowerPercentageExpertiseMin: 0,
        criticalPowerPercentageExpertiseMax: 30,
        criticalPowerPercentageExpertiseStep: 1.2,

        hitRatingBase: 0,
        hitRatingPassiveSkills: 756,

        glanceReductionBase: 0,

        protectionBase: 0,
        protectionPassiveSkills: 2259,

        damageMitigationBase: 0,

        defenseRatingBase: 0,
        defenseRatingPassiveSkills: 753,

        glanceChanceBase: 0,

        evadeRatingBase: 0,
        evadeRatingPassiveSkills: 753,

        evadeChanceBase: 0,
    },

    glyphComputationFigures: {
        'hit': {
            hardCap: 0,            // hard cap for this stat
            softCapRate: 50.85,    // Rate at which %chance stat increases when below hard cap
            hardCapRate: 50.85,    // Rate at which %chance stat increases when above hard cap
        },
        'crit': {
            hardCap: 7000,
            softCapRate: 157.38,
            hardCapRate: 693.77,
        },
        'cpow': {
            hardCap: 3950,
            softCapRate: 28.26,
            hardCapRate: 135.00,
        },
        'def': {
            hardCap: 4565,
            softCapRate: 101.66,
            hardCapRate: 680.13,
        },
        'evad': {
            hardCap: 5000,
            softCapRate: 145.47,
            hardCapRate: 963.58,
        }
    }
}
