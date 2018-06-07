var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

//TODO/FEATURE : add missing items
swlcalc.data.items = {
    slot: {
        'head': [
            {
                id: 1,
                name: 'Ashes',
                description: ''
            },
            {
                id: 2,
                name: 'Pigment',
                description: ''
            },
            {
                id: 3,
                name: 'Blood Halo',
                description: 'Whenever you heal the same target 5 times, their Protection is increased by <span class="bonus-const">510</span> for 3 seconds.'
            },
            {
                id: 4,
                name: 'Ashes of Crushed Cities',
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.375,
                stat: 'Combat Power'
            },
            {
                id: 5,
                name: 'Revenant Ashes',
                description: 'Whenever you hit the same enemy 3 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage to that enemy and other nearby enemies.',
                coefficient: 0.1875,
                stat: 'Combat Power'
            },
            {
                id: 6,
                name: 'Ashes of Elder Things',
                description: 'Whenever you hit the same enemy 6 times in succession, your next damaging Power Ability deals an additional <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 1.05,
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Ashes of Shriven Souls',
                description: 'Whenever you are hit 5 times in succession of whenever you hit the same enemy 3 times in succession, your next Power Ability has 20% increased Critical Power.'
            },
            {
                id: 8,
                name: 'Pharaoh\'s Blood',
                description: 'Whenever you heal the same target 5 times, they are healed for an additional <span id="head-bonus" class="bonus-var-heal">%d</span> every second for 3 seconds.',
                coefficient: 0.2,
                stat: 'Healing Power'
            },
            {
                id: 9,
                name: 'Blood of the Old Ones',
                description: 'Whenever you heal the same target 5 times, you heal your entire group for an additional <span id="head-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.375,
                stat: 'Healing Power'
            },
            {
                id: 10,
                name: 'Oni Blood',
                description: 'Whenever you heal the same target 5 times, they gain a leech effect that heals for 10% of their damage dealt for 3 seconds. This effect can heal up to <span id="head-bonus" class="bonus-var-heal">%d</span> damage before being removed.',
                coefficient: 0.811,
                stat: 'Healing Power'
            },
            {
                id: 11,
                name: 'Pigment from Beyond',
                description: 'Whenever you are hit 5 times in succession, your Protection is increased by <span class="bonus-const">640</span> for 3 seconds.'
            },
            {
                id: 12,
                name: 'Cosmic Pigment',
                description: 'Whenever you are hit 5 times in succession, you deal <span id="head-bonus" class="bonus-var-attack">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.',
                coefficient: 0.40,
                stat: 'Combat Power'
            },
            {
                id: 13,
                name: 'Mark of the Starspawn',
                description: 'Whenever you are hit 5 times in succession, you regain 4.5% of your maximum health.'
            },
            {
                id: 14,
                name: 'Tachyon Pigment',
                description: 'Whenever you are hit 5 times in succession or whenever you hit the same enemy 3 times in succession, the duration of your currently running recharge timers on Special Abilities is reduced by 3%.'
            }
        ],
        'finger': [
            {
                id: 1,
                name: 'Ring',
                description: ''
            },
            {
                id: 2,
                name: 'Rurikid Knot',
                description: 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by <span class="bonus-const">1530</span> for 4 seconds.'
            },
            {
                id: 3,
                name: 'Skadi\'s Ring',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you deal <span id="finger-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.625,
                stat: 'Combat Power'
            },
            {
                id: 4,
                name: 'Band of the Bacab',
                description: 'Whenever you attempt to cleanse, you also restore <span id="finger-bonus" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficient: 0.185,
                stat: 'Healing Power'
            },
            {
                id: 5,
                name: 'Belobog\'s Blessing',
                description: 'Whenever you attempt to cleanse, your defensive target\'s Protection is increased by <span class="bonus-const">460</span> for 3 seconds.'
            },
            {
                id: 6,
                name: 'Cold Metal',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you are healed for <span id="finger-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.625,
                stat: 'Healing Power'
            },
            {
                id: 7,
                name: 'Recursive Circle',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you reduce the remaining cooldown time on your abilities by 7%.'
            }
        ],
        'neck': [
            {
                id: 1,
                name: 'Medallion',
                description: ''
            },
            {
                id: 2,
                name: 'Fishbone Medallion',
                description: 'Whenever you lose health while below 50% of your maximum health, your Protection is increased by <span class="bonus-const">875</span> for 5 seconds.'
            },
            {
                id: 3,
                name: 'Seed of Aggression',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you have an 15% chance to generate 1 Energy for the weapon which dealt the hit.'
            },
            {
                id: 4,
                name: 'Choker of Shed Blood',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you have a 25% chance to deal an additional <span id="neck-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.5,
                stat: 'Combat Power'
            },
            {
                id: 5,
                name: 'Egon Pendant',
                description: 'Whenever you hit an enemy who is below 50% of their maximum health, you apply a damage over time effect that deals <span id="neck-bonus" class="bonus-var-attack">%d</span> physical damage over 5 seconds. Your damage is increased by 4.5% for each enemy affected by this effect.',
                coefficient: 0.15,
                stat: 'Combat Power'
            },
            {
                id: 6,
                name: 'Spectral Essence',
                description: 'This talisman gains more Attack Rating when leveling up.<br/>Whenever you hit an enemy who is below 50% of their maximum health, you have a 33% chance to summon a Spectre who will cast Unravel Soul. 10 second cooldown.<br/>Unravel Soul: An attack that deals <span id="neck-bonus" class="bonus-var-attack">%d</span> magical damage.',
                coefficient: 2.2,
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Linen Amulet',
                description: 'Whenever you heal an ally who is below 50% of their maximum health, you have an 15% chance to generate 1 Energy for the weapon which did the healing.'
            },
            {
                id: 8,
                name: 'Caduceus Amulet',
                description: 'Whenever you heal an ally who is below 50% of their maximum health, their Protection is increased by <span class="bonus-const">875</span> for 3 seconds.'
            },
            {
                id: 9,
                name: 'Vampiric Essence',
                description: 'This talisman gains more Heal Rating when leveling up.<br/>Whenever you heal an ally who is below 50% of their maximum health, their damage is increased by 4.5% and their attacks restore their health up to a maximum of <span id="neck-bonus" class="bonus-var-heal">%d</span> health restored for 3 seconds. This effect can only be applied once every 10 seconds.',
                coefficient: 0.335,
                stat: 'Healing Power'
            },
            {
                id: 10,
                name: 'Medallion of Wadjet',
                description: 'Whenever you lose health while below 50% of your maximum health, you gain a barrier which absorbs 100 of incoming damage and dissipates after absorbing <span id="neck-bonus" class="bonus-var-heal">%d</span> damage. This effect can only occur once every 10 seconds.',
                coefficient: 1.25,
                stat: 'Healing Power'
            },
            {
                id: 11,
                name: 'Lycanthropic Essence',
                description: 'This talisman gains more health when leveling up.</br>Whenever you lose health while below 50% of your maximum health, your damage is increased by 17% for 3 seconds and your next attack during this time will restore 4% of your maximum health. This effect can only occur once every 10 seconds.'
            },
            {
                id: 12,
                name: 'Amulet',
                description: ''
            }
        ],
        'wrist': [
            {
                id: 1,
                name: 'Bracelet',
                description: ''
            },
            {
                id: 2,
                name: 'Bone Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore <span id="wrist-bonus" class="bonus-var-heal">%d</span> health to that ally.',
                coefficient: 0.5,
                stat: 'Healing Power'
            },
            {
                id: 3,
                name: 'Iron-Sulfur Bracelet',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 25% chance to restore <span id="wrist-bonus" class="bonus-var-attack">%d</span> health to that ally.',
                coefficient: 0.5,
                stat: 'Combat Power'
            },
            {
                id: 4,
                name: 'Fleshwired Fetter',
                description: 'Whenever you hit an enemy who is Exposed, you have a 10% chance to increase the duration of that enemy\'s Exposed effect by 1 second.'
            },
            {
                id: 5,
                name: 'Red Weed Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a 15% chance to grant an effect which lasts 3 seconds and will remove the next detrimental effect applied to that ally.'
            },
            {
                id: 6,
                name: 'Bracer of Forgotten Horrors',
                description: 'Whenever an Exposed or Debilitated enemy attacks you, you deal <span id="wrist-bonus" class="bonus-var-attack">%d</span> physical damage back to them. This damage generates a large amount of hate.',
                coefficient: 0.04,
                stat: 'Combat Power'
            },
            {
                id: 7,
                name: 'Bracer of Horus',
                description: 'Whenever a Debilitated enemy attacks you, you have a 25% chance to increase the duration of that enemy\'s Debilitated effect by 1 second.',
            },
            {
                id: 8,
                name: 'Wrist',
                description: '',
            }
        ],
        'luck': [
            {
                id: 1,
                name: 'Dice',
                description: ''
            },
            {
                id: 2,
                name: 'Obsidian Flakes',
                description: 'Whenever you evade an attack or an attack glances you, your Protection is increased by <span class="bonus-const">705</span> for 5 seconds.'
            },
            {
                id: 3,
                name: 'Gambler\'s Soul',
                description: 'Whenever you critically hit, you additionally deal <span id="luck-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.25,
                stat: 'Combat Power'
            },
            {
                id: 4,
                name: 'Cold Silver Dice',
                description: 'Whenever you critically hit, you have a 30% chance to gain 1 Energy for the weapon which performed the critical hit.'
            },
            {
                id: 5,
                name: 'Chit of Kinich Ahau',
                description: 'Whenever you critically heal, you additionally restore <span id="luck-bonus" class="bonus-var-heal">%d</span> health to your target.',
                coefficient: 0.25,
                stat: 'Healing Power'
            },
            {
                id: 6,
                name: 'Tarot Cards',
                description: 'Whenever you critically heal, your defensive target\'s Protection is increased by <span class="bonus-const">615</span> for 3 seconds.'
            },
            {
                id: 7,
                name: 'Golden Coin',
                description: 'Whenever you evade an attack or an attack glances you, you deal <span id="luck-bonus" class="bonus-var-attack">%d</span> physical damage back to the attacker. This damage generate a large amount of hate.',
                coefficient: 0.2875,
                stat: 'Combat Power'
            },
            {
                id: 8,
                name: 'Laundry Tokens',
                description: 'Whenever you evade an attack or an attack glances you, you have a 50% chance to gain 1 Energy for your currently active weapon.'
            }
        ],
        'waist': [
            {
                id: 1,
                name: 'Chain',
                description: ''
            },
            {
                id: 2,
                name: 'High Roller\'s Chain',
                description: 'Whenever you roll a Double Blue or better set of matching chambers, your next Pistol attack deals an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.9,
                stat: 'Combat Power'
            },
            {
                id: 3,
                name: 'Black Sash',
                description: 'Whenever you hit an enemy who is facing towards you, the enemy gains increased hate towards you.'
            },
            {
                id: 4,
                name: 'Jaguar Cord',
                description: 'Whenever you hit an enemy who is facing away from you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 5,
                name: 'Barbelith Wire',
                description: 'Whenever you hit an enemy who is facing away from you, you have a 15% chance to slow their movement speed by 25% for 2 seconds and reduce the target\'s hate towards you.'
            },
            {
                id: 6,
                name: 'Khonsu\'s Disc',
                description: 'Whenever you heal an ally who is less than 7 metres away from you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 7,
                name: 'Serum Pouch',
                description: 'Whenever you heal an ally who is less than 7 metres away from you, you generate 15% less hate for 2 seconds.'
            },
            {
                id: 8,
                name: 'Incandescent Capacitor',
                description: 'Whenever you heal an ally who less than 7 metres away from you, you and your ally gain <span class="bonus-const">625</span> protection for 3 seconds.'
            },
            {
                id: 9,
                name: 'Grounding Line',
                description: 'Whenever you hit an enemy who is facing towards you, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 10,
                name: 'Master\'s Chain',
                description: 'Whenever you activate Spirit Blade, your next Blade attack will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> - <span id="waist-bonus2" class="bonus-var-attack">%d</span> physical damage. The amount of damage dealt scales based on the amount of Chi you had when activating Spirit Blade.',
                coefficient: 0.25,
                coefficient2: 1.25,
                stat: 'Combat Power',
                stat2: 'Combat Power'
            },
            {
                id: 11,
                name: 'Brawler\'s Belt',
                description: 'Whenever you spend Rage to empower an attack, you gain 7 Rage. Rage must be spent in order to trigger this effect.'
            },
            {
                id: 12,
                name: 'Primal Rope Belt',
                description: 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id="waist-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficient: 1.125,
                coefficient2: 1.125,
                stat: 'Combat Power',
                stat2: 'Healing Power'
            },
            {
                id: 13,
                name: 'Pentacle Wrap',
                description: 'Reduces the amount of self-damage dealt by Corruption and Martyrdom by 10%. In addition, once you have lost 10% of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> magical damage or your next healing Blood Magic ability will restore an additional <span id="waist-bonus2" class="bonus-var-heal">%d</span> health.',
                coefficient: 0.425,
                coefficient2: 0.425,
                stat: 'Combat Power',
                stat2: 'Healing Power'
            },
            {
                id: 14,
                name: 'Tumultuous Sash',
                description: 'Whenever your Paradox counts resets, you gain 1 - 2 Paradoxes.'
            },
            {
                id: 15,
                name: 'Thermotic Cinch',
                description: 'Whenever you overheat, your next Elemental cold ability will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> magical damage.',
                coefficient: 1.25,
                stat: 'Combat Power'
            },
            {
                id: 16,
                name: 'Tactical Belt',
                description: 'Whenever you reload your Shotgun, your next Shotgun attack will deal an additional <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.875,
                stat: 'Combat Power'
            },
            {
                id: 17,
                name: 'Military Strap',
                description: 'Whenever you launch a fully cooked grenade, you gain 1 Energy.'
            },
            {
                id: 18,
                name: 'Generalist\'s Belt',
                description: '"Whenever you activate a Power ability, there is a 33% chance that you will deal <span id="waist-bonus" class="bonus-var-attack">%d</span> physical damage or the target is healed for and additional <span id="waist-bonus2" class="bonus-var-heal">%d</span>. Additional damage occurs when using damaging power abilities and additional healing occurs when using healing power abilities.',
                coefficient: 0.375,
                coefficient2: 0.375,
                stat: 'Combat Power',
                stat2: 'Healing Power'
            },
            {
                id: 19,
                name: 'Buckle',
                description: ''
            }
        ],
        'occult': [
            {
                id: 1,
                name: 'Effigy',
                description: ''
            },
            {
                id: 2,
                name: 'Sigil of Ambition',
                description: 'Whenever you or any of your group members defeat an enemy, your next attack will deal <span id="occult-bonus" class="bonus-var-attack">%d</span> physical damage.',
                coefficient: 0.833,
                stat: 'Combat Power'
            },
            {
                id: 3,
                name: 'Avaritia\'s Effigy',
                description: 'Whenever you or any of your group members defeat an enemy, your movement speed is increased by 15% for 3 seconds.'
            },
            {
                id: 4,
                name: 'Razor Fossil',
                description: 'Whenever you or any of your group members defeat an enemy, your damage is increased by 8% for 3 seconds. This effect can stack up to 5 times.'
            },
            {
                id: 5,
                name: 'Ankh',
                description: 'Whenever you or any of your group members defeat an enemy, your next heal will restore <span id="occult-bonus" class="bonus-var-heal">%d</span> health to your defensive target.',
                coefficient: 0.833,
                stat: 'Healing Power'
            },
            {
                id: 6,
                name: 'Rakshani Charm',
                description: 'Whenever you or any of your group members defeat an enemy, you have a 20% chance to gain 1 Energy for your currently active weapon.'
            },
            {
                id: 7,
                name: 'Whalebone Rune',
                description: 'Whenever you or any of your group members defeat an enemy, your Protection is increased by <span class="bonus-const">2045</span> for 5 seconds.'
            },
            {
                id: 8,
                name: 'Alloy Heart',
                description: 'Whenever you or any of your group members defeat an enemy, you are healed for <span id="occult-bonus" class="bonus-var-heal">%d</span>.',
                coefficient: 0.833,
                stat: 'Healing Power'
            }
        ]
    }
}
