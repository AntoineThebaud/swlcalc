var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.equipments = {
    slot: {
        'weapon': [
            {
                id: 1,
                type: 'Blade',
                name: 'Blade',
                description: ''
            },
            {
                id: 2,
                type: 'Hammer',
                name: 'Hammer',
                description: ''
            },
            {
                id: 3,
                type: 'Fist',
                name: 'Fist Weapon',
                description: ''
            },
            {
                id: 4,
                type: 'Blood',
                name: 'Blood Magic Focus',
                description: ''
            },
            {
                id: 5,
                type: 'Chaos',
                name: 'Chaos Focus',
                description: ''
            },
            {
                id: 6,
                type: 'Elementalism',
                name: 'Elementalism Focus',
                description: ''
            },
            {
                id: 7,
                type: 'Shotgun',
                name: 'Shotgun',
                description: ''
            },
            {
                id: 8,
                type: 'Pistols',
                name: 'Dual Pistols',
                description: ''
            },
            {
                id: 9,
                type: 'Assault Rifle',
                name: 'Assault Rifle',
                description: ''
            },
            // TODO/REFACTOR : duplication in below code (all Anima-Touched weapons have the same effect)
            {
                id: 10,
                type: 'Blade',
                name: 'Anima-Touched Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 11,
                type: 'Hammer',
                name: 'Anima-Touched Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 12,
                type: 'Fist',
                name: 'Anima-Touched Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 13,
                type: 'Blood',
                name: 'Anima-Touched Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 14,
                type: 'Chaos',
                name: 'Anima-Touched Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 15,
                type: 'Elementalism',
                name: 'Anima-Touched Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 16,
                type: 'Shotgun',
                name: 'Anima-Touched Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 17,
                type: 'Pistols',
                name: 'Anima-Touched Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 18,
                type: 'Assault Rifle',
                name: 'Anima-Touched Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage. You are healed for <span class="bonus-val const">100%</span> of the damage dealt.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 19,
                type: 'Blade',
                name: 'Flame-Wreathed Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">15%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to your target every second for <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 20,
                type: 'Hammer',
                name: 'Flame-Wreathed Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for <span class="bonus-val const">5</span> seconds. Once this effect expires, it will return <span class="bonus-val const">5</span> seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 21,
                type: 'Fist',
                name: 'Flame-Wreathed Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a <span class="bonus-val const">10%</span> chance to apply a barrier which absorbs <span class="bonus-val const">100%</span> of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus2" class="bonus-val heal">%d</span>. This effect can only occur once every <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 22,
                type: 'Blood',
                name: 'Flame-Wreathed Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a <span class="bonus-val const">10%</span> chance to apply a barrier which absorbs <span class="bonus-val const">100%</span> of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus2" class="bonus-val heal">%d</span>. This effect can only occur once every <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 23,
                type: 'Chaos',
                name: 'Flame-Wreathed Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for <span class="bonus-val const">5</span> seconds. Once this effect expires, it will return <span class="bonus-val const">5</span> seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 24,
                type: 'Elementalism',
                name: 'Flame-Wreathed Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">15%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to your target every second for <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 25,
                type: 'Shotgun',
                name: 'Flame-Wreathed Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>When you enter combat, you gain 1,850 Protection for <span class="bonus-val const">5</span> seconds. Once this effect expires, it will return <span class="bonus-val const">5</span> seconds later. Multiple weapons with this effect do not stack.'
            },
            {
                id: 26,
                type: 'Pistols',
                name: 'Flame-Wreathed Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">15%</span> chance to deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to your target every second for <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 27,
                type: 'Assault Rifle',
                name: 'Flame-Wreathed Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you heal yourself or an ally, you have a <span class="bonus-val const">10%</span> chance to apply a barrier which absorbs <span class="bonus-val const">100%</span> of incoming damage and dissipates after absorbing <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span> damage. If a barrier already exists, they are instead healed for <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span>. This effect can only occur once every <span class="bonus-val const">5</span> seconds.',
                coefficients: [ 3.75 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 28,
                type: 'Blade',
                name: 'Plasma-Forged Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 29,
                type: 'Hammer',
                name: 'Plasma-Forged Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 30,
                type: 'Fist',
                name: 'Plasma-Forged Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 31,
                type: 'Blood',
                name: 'Plasma-Forged Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 32,
                type: 'Chaos',
                name: 'Plasma-Forged Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 33,
                type: 'Elementalism',
                name: 'Plasma-Forged Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 34,
                type: 'Shotgun',
                name: 'Plasma-Forged Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 35,
                type: 'Pistols',
                name: 'Plasma-Forged Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 36,
                type: 'Assault Rifle',
                name: 'Plasma-Forged Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target. The amount of damage dealt increases to <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage the second time this effect triggers on the same target. The third time this effect triggers on the same target, the damage dealt is increased to <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span> physical damage and the count of the number of times this effect has triggered is reset.',
                coefficients: [ 0.565, 1.125, 2.81 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 37,
                type: 'Blade',
                name: 'Frost-Bound Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 38,
                type: 'Hammer',
                name: 'Frost-Bound Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 39,
                type: 'Fist',
                name: 'Frost-Bound Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 40,
                type: 'Blood',
                name: 'Frost-Bound Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 41,
                type: 'Chaos',
                name: 'Frost-Bound Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 42,
                type: 'Elementalism',
                name: 'Frost-Bound Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 43,
                type: 'Shotgun',
                name: 'Frost-Bound Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 44,
                type: 'Pistols',
                name: 'Frost-Bound Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 45,
                type: 'Assault Rifle',
                name: 'Frost-Bound Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit you have a <span class="bonus-val const">20%</span> chance to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and reduce the amount of damage you receive by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">6</span> seconds.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 46,
                type: 'Blade',
                name: 'Witch Doctor\'s Blade',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 47,
                type: 'Hammer',
                name: 'Witch Doctor\'s Hammer',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 48,
                type: 'Fist',
                name: 'Witch Doctor\'s Fist Weapon',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 49,
                type: 'Blood',
                name: 'Witch Doctor\'s Blood Magic Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 50,
                type: 'Chaos',
                name: 'Witch Doctor\'s Chaos Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 51,
                type: 'Elementalism',
                name: 'Witch Doctor\'s Elementalism Focus',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 52,
                type: 'Shotgun',
                name: 'Witch Doctor\'s Shotgun',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 53,
                type: 'Pistols',
                name: 'Witch Doctor\'s Pistols',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 54,
                type: 'Assault Rifle',
                name: 'Witch Doctor\'s Assault Rifle',
                description: 'This weapon gains more Weapon Power when leveling up.</br>Whenever you hit, you have a <span class="bonus-val const">33%</span> chance to hex your target and deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> magical damage. The damage dealt increases each time this effect is applied, up to a maximum of <span class="bonus-val const">5</span> times. This effect is guaranteed to trigger on critical hits.</br>When an enemy affected by this hex is defeated, nearby enemies are dealt <span id="%id-equipment-bonus3" class="bonus-val attack">%d</span>-<span id="%id-equipment-bonus4" class="bonus-val attack">%d</span> magical damage, based on the number of times the damaging effect has been applied.',
                coefficients: [ 0.15, 0.75, 0.095, 0.471 ],
                stats: [ 'Combat Power', 'Combat Power', 'Combat Power', 'Combat Power' ]
            },
            {
                id: 55,
                type: 'Blade',
                name: 'Shadow-Bound Blade',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 56,
                type: 'Hammer',
                name: 'Shadow-Bound Hammer',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 57,
                type: 'Fist',
                name: 'Shadow-Bound Fist Weapon',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 58,
                type: 'Blood',
                name: 'Shadow-Bound Blood Magic Focus',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 59,
                type: 'Chaos',
                name: 'Shadow-Bound Chaos Focus',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 60,
                type: 'Elementalism',
                name: 'Shadow-Bound Elementalism Focus',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 61,
                type: 'Shotgun',
                name: 'Shadow-Bound Shotgun',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 62,
                type: 'Pistols',
                name: 'Shadow-Bound Pistols',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 63,
                type: 'Assault Rifle',
                name: 'Shadow-Bound Assault Rifle',
                description: 'Whenever you hit, you have a <span class="bonus-val const">20%</span> chance to summon a Revenant who will cast Raven Blade. <span class="bonus-val const">15</span> second cooldown.</br>Raven Blade: An attack that deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 2.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 64,
                type: 'Assault Rifle',
                name: 'AEL-550',
                description: 'Your Assault Rifle Elite abilities will automatically load a grenade.'
            },
            {
                id: 65,
                type: 'Assault Rifle',
                name: 'Auxiliary Loader',
                description: 'Whenever you use an Assault Rifle Power ability and do not load a grenade, your chance to load a grenade with your next Assault Rifle Power ability is increased.'
            },
            {
                id: 66,
                type: 'Assault Rifle',
                name: 'Hellfire Assault Launcher',
                description: 'Your Assault Rifle Power Abilities will now consume any loaded grenade you have, dealing <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 3.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 67,
                type: 'Assault Rifle',
                name: 'High-Yield Launcher',
                description: 'Increases the damage and healing done when you launch a fully cooked grenade.'
            },
            {
                id: 68,
                type: 'Assault Rifle',
                name: 'Infernal Loader',
                description: 'When you have a grenade loaded, your Assault Rifle damage is increased by <span class="bonus-val const">7.5%</span>.'
            },
            {
                id: 69,
                type: 'Assault Rifle',
                name: 'KSR-43',
                description: 'When you load a grenade it is fully cooked, but the fuse timer is reduced to <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 70,
                type: 'Assault Rifle',
                name: 'MIRV Launcher',
                description: 'Whenever you launch a grenade, several secondary explosions go off near your target dealing <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 1.24 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 71,
                type: 'Assault Rifle',
                name: 'Orochi Medical Launcher',
                description: 'Whenever you launch a grenade, your restore <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span> health to your entire group',
                coefficients: [ 1.08 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 72,
                type: 'Assault Rifle',
                name: 'Orochi Tactical Carbine',
                description: 'When you have a grenade loaded, your Assault Rifle healing is increased by <span class="bonus-val const">7.5%</span>.'
            },
            {
                id: 73,
                type: 'Blade',
                name: 'Apocalypse',
                description: 'Each point of Chi you have increases your Blade damage by <span class="bonus-val const">3.5%</span>.'
            },
            {
                id: 74,
                type: 'Blade',
                name: 'Blade of the Seventh Son',
                description: 'The amount of damage dealt by your Spirit Blade is increased by 61%, however each Blade attack costs <span class="bonus-val const">1.5%</span> of your maximum health.'
            },
            {
                id: 75,
                type: 'Blade',
                name: 'Mantric Blade',
                description: 'The amount of health restored by Chi Overflow is doubled.'
            },
            {
                id: 76,
                type: 'Blade',
                name: 'Razor\'s Edge',
                description: 'Whenever you critically hit with a Blade ability, you have a <span class="bonus-val const">50%</span> chance to gain <span class="bonus-val const">1</span> Chi.'
            },
            {
                id: 77,
                type: 'Blade',
                name: 'Rhythmic Blade',
                description: 'When increasing the number of attacks remaining on your Spirit Blade, you have a chance to increase the number of attacks gained by an additional amount. The chance and amount gained increase based on the number of attacks gained.'
            },
            {
                id: 78,
                type: 'Blade',
                name: 'Shattered Hellblade',
                description: 'You can no longer use the Spirit Blade ability to reforge an active Spirit Blade. Instead, when your Spirit Blade shatters, it deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage per Chi to nearby enemies.',
                coefficients: [ 1.78 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 79,
                type: 'Blade',
                name: 'Soulblade',
                description: 'Your chance to gain Chi increases by <span class="bonus-val const">3%</span> for each point of Chi you currently have.'
            },
            {
                id: 80,
                type: 'Blade',
                name: 'Soviet Techsword',
                description: 'Your Spirit Blade is automatically forged upon reaching <span class="bonus-val const">5</span> Chi. While your Spirit Blade is forged, all Chi gained is immediately converted into Spirit Blade attacks.'
            },
            {
                id: 81,
                type: 'Blade',
                name: 'Stormbringer',
                description: 'Whenever you enter combat, you gain <span class="bonus-val const">3</span> Chi. While in combat, you gain <span class="bonus-val const">1</span> Chi every <span class="bonus-val const">10</span> seconds.'
            },
            {
                id: 82,
                type: 'Blood',
                name: 'Anthology of Hemorrhages',
                description: 'Whenever you take damage from Corruption, you have a chance to reduce further damage from Corruption by <span class="bonus-val const">7.5%</span>. This effect can stack up to <span class="bonus-val const">5</span> times. The chance to gain this effect increases with higher Corruption level.'
            },
            {
                id: 83,
                type: 'Blood',
                name: 'Chronicle of Purity',
                description: 'Using "Mend" reduces your Martyrdom level by <span class="bonus-val const">2</span> and heals you for <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span>. "Sanctuary" and "Convalesce" increase your Martyrdom level by an additional 2.',
                coefficients: [ 0.23 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 84,
                type: 'Blood',
                name: 'Compendium of Wards',
                description: 'Increases the power of your Blood Magic barriers by <span class="bonus-val const">15%</span>. Also, whenever you cast a Blood Magic barrier your Martyrdom level is increased by an additional 4.'
            },
            {
                id: 85,
                type: 'Blood',
                name: 'Eldritch Tome',
                description: 'Your Blood Magic damage over time effects deal <span class="bonus-val const">75%</span> more damage. In addition, your "Reap", "Desecrate", "Runic Hex", and "Eldritch Scourge" abilities generate <span class="bonus-val const">4</span> more Corruption when used.'
            },
            {
                id: 86,
                type: 'Blood',
                name: 'Grimoire of Foul Gods',
                description: 'Whenever you hit with a Blood Magic Power ability while your Corruption level is higher than 90, your target is dealt an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> magical damage for every Blood Magic damage over time effect you have active on them.',
                coefficients: [ 0.35 ],
                stats: [ 'Combat Power' ],
            },
            {
                id: 87,
                type: 'Blood',
                name: 'Lilith\'s Lab Notes',
                description: 'Whenever you are healed, your Corruption level is reduced based on how much healing was prevented by your Corruption level.'
            },
            {
                id: 88,
                type: 'Blood',
                name: 'Profane Folio',
                description: 'Whenever your Corruption level increases to 100, your next <span class="bonus-val const">3</span> Blood Magic Power Abilities deal <span class="bonus-val const">30%</span> more damage and do not deal Corruption damage to you. This effect can only occur once every <span class="bonus-val const">9</span> seconds.'
            },
            {
                id: 89,
                type: 'Blood',
                name: 'Sanguinary Monograph',
                description: 'Whenever you take damage from Martyrdom, the power of your Blood Magic healing abilities is increased by <span class="bonus-val const">3%</span>. This effect can stack up to <span class="bonus-val const">5</span> times, but is removed any time your Martyrdom level is reduced.'
            },
            {
                id: 90,
                type: 'Blood',
                name: 'Soul-Infused Manuscript',
                description: 'Whenever you gain a power increase from Martyrdom, your next <span class="bonus-val const">2</span> Blood Magic healing abilities do not trigger Martyrdom damage.'
            },
            {
                id: 91,
                type: 'Chaos',
                name: 'Enigmatic Apparatus',
                description: 'You are more likely to generate Chaotic Enigmas when reaching <span class="bonus-val const">8</span> Paradoxes. In addition, your Chaotic Enigmas are more potent.'
            },
            {
                id: 92,
                type: 'Chaos',
                name: 'Incalculable Abacus',
                description: 'If you generate <span class="bonus-val const">8</span> Paradoxes within <span class="bonus-val const">6</span> seconds of the last time you generated <span class="bonus-val const">8</span> Paradoxes, your Protection is increased by 4350 for <span class="bonus-val const">4</span> seconds.'
            },
            {
                id: 93,
                type: 'Chaos',
                name: 'Irregularity Architect',
                description: 'When you reach <span class="bonus-val const">8</span> Paradoxes, you create an additional Singularity and you are more likely to create Singularities when reaching <span class="bonus-val const">8</span> Paradoxes.'
            },
            {
                id: 94,
                type: 'Chaos',
                name: 'Mayhem',
                description: 'Whenever you reach <span class="bonus-val const">8</span> Paradoxes and trigger Chaotic Effects, you have a <span class="bonus-val const">50%</span> chance to trigger an additional set of Chaotic Effects.'
            },
            {
                id: 95,
                type: 'Chaos',
                name: 'Otherworldly Artifact',
                description: 'Your chaos abilities have a <span class="bonus-val const">45%</span> chance to generate <span class="bonus-val const">1</span> additional Paradox.'
            },
            {
                id: 96,
                type: 'Chaos',
                name: 'Sanity\'s Aphelion',
                description: 'Your protection is increased by up to 880. The value of Protection gained is based on your current Paradoxes and is at its highest when you have 0 Paradoxes.'
            },
            {
                id: 97,
                type: 'Chaos',
                name: 'Sov-Tech Paradox Generator',
                description: 'Whenever you hit with a Chaos ability, you have a <span class="bonus-val const">5.5%</span> chance to trigger Chaotic Effects as if you had reached <span class="bonus-val const">8</span> Paradoxes.'
            },
            {
                id: 98,
                type: 'Chaos',
                name: 'The Cause\'s Effect',
                description: 'Whenever you deal damage divisible by 8, your Protection is increased by 850 for <span class="bonus-val const">4</span> seconds. Also, whenever you evade an attack, your next Chaos attack deals an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> magical damage.',
                coefficients: [ 1.15 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 99,
                type: 'Chaos',
                name: 'Warped Visage',
                description: 'When you reach <span class="bonus-val const">8</span> Paradoxes, you create an additional Extradimensional Doppelganger.'
            },
            {
                id: 100,
                type: 'Elementalism',
                name: 'Cryo-Charged Conduit',
                description: 'Your Elemental cold abilities reduce your heat level by an additional <span class="bonus-val const">15</span> and cause any targets hit to become frostbitten for <span class="bonus-val const">6</span> seconds. Critically hitting a frostbitten enemy with an Elemental attack deals an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> magical damage.',
                coefficients: [ 3.45 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 101,
                type: 'Elementalism',
                name: 'Frozen Figurine',
                description: 'You no longer dissipate heat naturally while in combat. However, your Elemental cold abilities reduce your heat level by an additional <span class="bonus-val const">60</span> when activated and deal <span class="bonus-val const">71%</span> more damage.'
            },
            {
                id: 102,
                type: 'Elementalism',
                name: 'Infernal Apparatus',
                description: 'Whenever you use a heat reducing ability, you do not immediately lose heat. Instead your heat gauge become frozen in place for <span class="bonus-val const">2</span> seconds, neither increasing nor decreasing. After this time, your heat level will be reduced by the amount your ability was meant to reduce it.'
            },
            {
                id: 103,
                type: 'Elementalism',
                name: 'Orochi Thermal Inverter',
                description: 'Your Thermotic meter is inverted, causing you to deal increased damage when at lower heat levels and reduced damage at higher heat levels.'
            },
            {
                id: 104,
                type: 'Elementalism',
                name: 'Overclocked Chronometer',
                description: 'During combat you have a <span class="bonus-val const">10%</span> chance every second to increase your Elemental damage by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">4</span> seconds. When this damage increase happens, your heat level is increased by 8.'
            },
            {
                id: 105,
                type: 'Elementalism',
                name: 'Thermotic Simulacrum',
                description: 'Instead of Overheating, you are dealt damage equal to <span class="bonus-val const">15%</span> of your maximum health. Doing this more than <span class="bonus-val const">2</span> times without reducing your heat level below 80 will cause you to become stunned for <span class="bonus-val const">5</span> seconds.'
            },
            {
                id: 106,
                type: 'Elementalism',
                name: 'Totemic Hell Lord',
                description: 'Your Elemental fire abilities apply a damage over time effect which deals <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> damage every second for <span class="bonus-val const">10</span> seconds, during which time it can stack up to <span class="bonus-val const">10</span> times. Also, your Elemental lightning abilities deal <span class="bonus-val const">13%</span> more critical damage and your Elemental cold abilities deal <span class="bonus-val const">32%</span> more damage and reduce your heat level by an additional 15.',
                coefficients: [ 0.03 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 107,
                type: 'Elementalism',
                name: 'Unstable Electron Core',
                description: 'When your heat level is above 50, your Elemental fire and lightning abilities deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> magical damage to the target and nearby enemies.',
                coefficients: [ 0.17 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 108,
                type: 'Elementalism',
                name: 'Voltaic Shunt',
                description: 'After naturally dissipating heat for <span class="bonus-val const">10</span> seconds, your next Elemental attack will deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> magical damage.',
                coefficients: [ 3.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 109,
                type: 'Fist',
                name: 'Bladed Gauntlets',
                description: 'When entering combat, you gain <span class="bonus-val const">15</span> Fury. In addition, you gain <span class="bonus-val const">2</span> Fury every second while in combat.'
            },
            {
                id: 110,
                type: 'Fist',
                name: 'Blood Drinkers',
                description: 'Whenever you apply damage over time effects with Fist Weapon abilities, you gain <span class="bonus-val const">3</span> Fury. This Fury is not generated while any Wrath effect is active.'
            },
            {
                id: 111,
                type: 'Fist',
                name: 'Infernal Manglers',
                description: 'Whenever your Fury increases, the amount gained is tallied. Once you have gained 100 Fury, your next Fist Weapon attack within <span class="bonus-val const">5</span> seconds will deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> damage.',
                coefficients: [ 6.0 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 112,
                type: 'Fist',
                name: 'Invigorating Razors',
                description: 'Your "Invigorating Wrath" lasts <span class="bonus-val const">10%</span> longer.'
            },
            {
                id: 113,
                type: 'Fist',
                name: 'Manticore Wrath Inducers',
                description: 'When your Fury reaches 100, you automatically enter Frenzied Wrath. If your Healing parameter in Anima Allocation is larger than 50 you instead automatically enter invigorating Wrath.'
            },
            {
                id: 114,
                type: 'Fist',
                name: 'Scalpel',
                description: 'Whenever your "Invigorating Wrath" effect expires, the amount of health restored by your "Nurture", "Renewal", and "Feral Regrowth" abilities is increased by <span class="bonus-val const">33%</span> for <span class="bonus-val const">4</span> seconds.'
            },
            {
                id: 115,
                type: 'Fist',
                name: 'Sov-Tech Wrath Enhancers',
                description: 'Whenever you activate "Frenzied Wrath" your entire group deals <span class="bonus-val const">8%</span> more damage for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 116,
                type: 'Fist',
                name: 'Surgical Steel',
                description: 'The amount of healing done by your "Revitalise", "Invigorate", "Revivify", and "Serenity" abilities is increased by <span class="bonus-val const">21%</span> while "Invigorating Wrath" is active.'
            },
            {
                id: 117,
                type: 'Fist',
                name: 'Threshing Claws',
                description: 'While your "Frenzied Wrath" effect is active, you deal <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to nearby enemies every second.',
                coefficients: [ 0.69 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 118,
                type: 'Hammer',
                name: 'Flanged Mallet',
                description: 'Hammer abilities which consume Rage deal increased damage. This damage bonus increases based on your maximum health, up to a maximum of <span class="bonus-val const">20%</span>.'
            },
            {
                id: 119,
                type: 'Hammer',
                name: 'Fuming Despoiler',
                description: 'Your Rage consuming abilities deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 0.825 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 120,
                type: 'Hammer',
                name: 'Hell Forged Warhammer',
                description: 'Consecutive Hammer ability uses generate increased Rage. The amount of bonus Rage generated increases with each Hammer ability use and is reset when a non-Hammer ability is used.'
            },
            {
                id: 121,
                type: 'Hammer',
                name: 'Mangler',
                description: 'Whenever you become Enraged, your Crit Power on Hammer attacks is increased by <span class="bonus-val const">9%</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 122,
                type: 'Hammer',
                name: 'Manticore Riot Suppressor',
                description: 'While you are protected by the Hammer abilities "Enter the Fray," "Thick Skin," "Raging Volcano," "Juggernaut," or "Die Hard" your Hammer abilities deal <span class="bonus-val const">8.5%</span> more damage and attacks against you generate <span class="bonus-val const">2</span> more Rage.'
            },
            {
                id: 123,
                type: 'Hammer',
                name: 'Orochi Motivator',
                description: 'Whenever you spend Rage, your Protection is increased by 450 for <span class="bonus-val const">8</span> seconds. This effect can stack up to <span class="bonus-val const">5</span> times.'
            },
            {
                id: 124,
                type: 'Hammer',
                name: 'Pneumatic Maul',
                description: 'Whenever you critically hit with a Hammer ability, you gain a benefical effect which allows you to gain the benefits of the Enrage bonus effects on your abilities without spending any Rage and without being Enraged. This effect can only occur once every <span class="bonus-val const">10</span> seconds.'
            },
            {
                id: 125,
                type: 'Hammer',
                name: 'Red Hand Destroyer',
                description: 'While your Rage is above 50, your Hammer Basic Abilities deal <span class="bonus-val const">30%</span> more damage and generate twice as much Rage.'
            },
            {
                id: 126,
                type: 'Hammer',
                name: 'The Tenderiser',
                description: '"Whenever you hit an enemy with a Hammer ability, you gain an effect which lasts <span class="bonus-val const">30</span> seconds. When this effect expires, your Hammer damage is increased by <span class="bonus-val const">7.5%</span> for <span class="bonus-val const">4</span> seconds.</br>Using Hammer abilities speeds up the initial countdown and spending Rage increases the duration of the damage increasing effect."'
            },
            {
                id: 127,
                type: 'Pistols',
                name: 'Heavy Caliber Pistols',
                description: 'You are more likely to roll a Double Red set of chambers, but less likely to roll a Double White or Double Blue set of chambers.'
            },
            {
                id: 128,
                type: 'Pistols',
                name: 'Six Shooters',
                description: 'The duration of the damage bonus from a matching set of chambers is increased by 0.5 ] seconds.'
            },
            {
                id: 129,
                type: 'Pistols',
                name: 'Dual TMP-206',
                description: 'If you do not have a matching set of chambers, using Active Dodge will grant a Double White set.'
            },
            {
                id: 130,
                type: 'Pistols',
                name: 'Anansi Probability Adjusters',
                description: 'Whenever you spin the chambers and do not land on a matching set, your next spin is more likely to grant you a matching set.'
            },
            {
                id: 131,
                type: 'Pistols',
                name: 'Misery & Malice',
                description: 'Whenever you land on a matching set of chambers, your Pistol Abilities deal <span class="bonus-val const">6%</span> more damage for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 132,
                type: 'Pistols',
                name: 'Fortune & Favour',
                description: 'Whenever a chamber lock on a Double Red set expires, you immediately gain a chamber lock on a Double Blue set. Whenever a chamber lock on a Double Blue set expires, you immediately gain a chamber lock on a Double White set.'
            },
            {
                id: 133,
                type: 'Pistols',
                name: 'Twin-Linked Blasters',
                description: 'Whenever your damage bonus from a matching set of chambers expires, if you land on another matching set within <span class="bonus-val const">3</span> seconds your next Pistol attack will deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to the target and nearby enemies.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 134,
                type: 'Pistols',
                name: 'Sov-Tech Harmonisers',
                description: 'Whenever you hit an enemy while you have a Double White set of chambers, you have a <span class="bonus-val const">25%</span> chance to be upgraded to Double Blue. Whenever you hit an enemy while you have a Double Blue set of chambers, you have a <span class="bonus-val const">15%</span> chance to be upgraded to Double Red.'
            },
            {
                id: 135,
                type: 'Pistols',
                name: 'Soviet CB-3 Annihilators',
                description: 'Whenever you critically hit with a Pistol ability while you have a matching set of chambers you deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.86 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 136,
                type: 'Shotgun',
                name: 'Bolstering Blaster',
                description: 'Whenever an attack glances you, your next <span class="bonus-val const">3</span> Shotgun attacks will deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.24 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 137,
                type: 'Shotgun',
                name: 'Double Barrel',
                description: 'Your Shotgun Power Abilities consume an additional Shell to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.475 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 138,
                type: 'Shotgun',
                name: 'Flame-Charged Blaster',
                description: 'Whenever you spend a Shotgun shell, you have a <span class="bonus-val const">25%</span> chance to not spend the shell and increase the damage your next Shotgun Power Ability by <span class="bonus-val const">12%</span>. This effect cannot trigger again until its bonus effect is spent.'
            },
            {
                id: 139,
                type: 'Shotgun',
                name: 'Ifritian Despoiler',
                description: 'After firing <span class="bonus-val const">12</span> Shells, your Crit Power is increased by <span class="bonus-val const">14%</span> for <span class="bonus-val const">4</span> seconds. Each Dragon\'s Breath Shell fired counts as <span class="bonus-val const">2</span> Shells for the purposes of gaining this bonus.'
            },
            {
                id: 140,
                type: 'Shotgun',
                name: 'Prototype-M402',
                description: 'Whenever you load Anima-Infused Shells, your Protection is increased by 1225 for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 141,
                type: 'Shotgun',
                name: 'Sov-Tech Demolisher',
                description: 'You are more likely to have Depleted Uranium Shells show up as an option when reloading, but less likely to have Anima-Infused Shells show up as an option when reloading.'
            },
            {
                id: 142,
                type: 'Shotgun',
                name: 'Soviet TSAR-914',
                description: 'Whenever you run out of Shells, your Protection is increased by 730 for <span class="bonus-val const">5</span> seconds.'
            },
            {
                id: 143,
                type: 'Shotgun',
                name: 'SPES-C221',
                description: 'Whenever you spend a Shell, you have a <span class="bonus-val const">20%</span> chance to cause your next Shotgun attack to deal an additional <span id="%id-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 1.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 144,
                type: 'Shotgun',
                name: 'The Redeemer',
                description: 'Whenever you reload Anima-Infused Shells or Dragon\'s Breath Shells, you and your group members gain a beneficial effect for <span class="bonus-val const">3</span> seconds which causes attacks to restore <span id="%id-equipment-bonus1" class="bonus-val heal">%d</span> health. The amount healed scales with each individual group member\'s Healing Power.</br>Whenever you reload Armor-Piercing or Depleted Uranium Shells, you and your group members gain a beneficial effect for <span class="bonus-val const">3</span> seconds which causes attacks to deal an additional <span id="%id-equipment-bonus2" class="bonus-val attack">%d</span> physical damage. The damage dealt scales with each individual group member\'s Combat Power.',
                coefficients: [ 0.5, 0.5 ],
                stats: [ 'Healing Power', 'Combat Power' ]
            }
        ],
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
                description: 'Whenever you heal the same target <span class="bonus-val const">5</span> times, their Protection is increased by <span class="bonus-val const">510</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 4,
                name: 'Ashes of Crushed Cities',
                description: 'Whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, you deal <span id="head-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.375 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 5,
                name: 'Revenant Ashes',
                description: 'Whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, you deal <span id="head-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to that enemy and other nearby enemies.',
                coefficients: [ 0.1875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 6,
                name: 'Ashes of Elder Things',
                description: 'Whenever you hit the same enemy <span class="bonus-val const">6</span> times in succession, your next damaging Power Ability deals an additional <span id="head-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 1.05 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Ashes of Shriven Souls',
                description: 'Whenever you are hit <span class="bonus-val const">5</span> times in succession of whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, your next Power Ability has <span class="bonus-val const">20%</span> increased Critical Power.'
            },
            {
                id: 8,
                name: 'Pharaoh\'s Blood',
                description: 'Whenever you heal the same target <span class="bonus-val const">5</span> times, they are healed for an additional <span id="head-equipment-bonus1" class="bonus-val heal">%d</span> every second for <span class="bonus-val const">3</span> seconds.',
                coefficients: [ 0.2 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 9,
                name: 'Blood of the Old Ones',
                description: 'Whenever you heal the same target <span class="bonus-val const">5</span> times, you heal your entire group for an additional <span id="head-equipment-bonus1" class="bonus-val heal">%d</span>.',
                coefficients: [ 0.375 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 10,
                name: 'Oni Blood',
                description: 'Whenever you heal the same target <span class="bonus-val const">5</span> times, they gain a leech effect that heals for <span class="bonus-val const">10%</span> of their damage dealt for <span class="bonus-val const">3</span> seconds. This effect can heal up to <span id="head-equipment-bonus1" class="bonus-val heal">%d</span> damage before being removed.',
                coefficients: [ 0.811 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 11,
                name: 'Pigment from Beyond',
                description: 'Whenever you are hit <span class="bonus-val const">5</span> times in succession, your Protection is increased by <span class="bonus-val const">640</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 12,
                name: 'Cosmic Pigment',
                description: 'Whenever you are hit <span class="bonus-val const">5</span> times in succession, you deal <span id="head-equipment-bonus1" class="bonus-val attack">%d</span> physical damage to nearby enemies. This damage generates a large amount of hate.',
                coefficients: [ 0.40 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 13,
                name: 'Mark of the Starspawn',
                description: 'Whenever you are hit <span class="bonus-val const">5</span> times in succession, you regain <span class="bonus-val const">4.5%</span> of your maximum health.'
            },
            {
                id: 14,
                name: 'Tachyon Pigment',
                description: 'Whenever you are hit <span class="bonus-val const">5</span> times in succession or whenever you hit the same enemy <span class="bonus-val const">3</span> times in succession, the duration of your currently running recharge timers on Special Abilities is reduced by <span class="bonus-val const">3%</span>.'
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
                description: 'Whenever you purge a beneficial effect from an enemy\'s ability, your Protection is increased by <span class="bonus-val const">1530</span> for <span class="bonus-val const">4</span> seconds.'
            },
            {
                id: 3,
                name: 'Skadi\'s Ring',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you deal <span id="finger-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.625 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Band of the Bacab',
                description: 'Whenever you attempt to cleanse, you also restore <span id="finger-equipment-bonus1" class="bonus-val heal">%d</span> health to your defensive target.',
                coefficients: [ 0.185 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 5,
                name: 'Belobog\'s Blessing',
                description: 'Whenever you attempt to cleanse, your defensive target\'s Protection is increased by <span class="bonus-val const">460</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 6,
                name: 'Cold Metal',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you are healed for <span id="finger-equipment-bonus1" class="bonus-val heal">%d</span>.',
                coefficients: [ 0.625 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 7,
                name: 'Recursive Circle',
                description: 'Whenever you purge a beneficial effect from an enemy or interrupt an enemy\'s ability, you reduce the remaining cooldown time on your abilities by <span class="bonus-val const">7%</span>.'
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
                description: 'Whenever you lose health while below <span class="bonus-val const">50%</span> of your maximum health, your Protection is increased by <span class="bonus-val const">875</span> for <span class="bonus-val const">5</span> seconds.'
            },
            {
                id: 3,
                name: 'Seed of Aggression',
                description: 'Whenever you hit an enemy who is below <span class="bonus-val const">50%</span> of their maximum health, you have an <span class="bonus-val const">15%</span> chance to generate <span class="bonus-val const">1</span> Energy for the weapon which dealt the hit.'
            },
            {
                id: 4,
                name: 'Choker of Shed Blood',
                description: 'Whenever you hit an enemy who is below <span class="bonus-val const">50%</span> of their maximum health, you have a <span class="bonus-val const">25%</span> chance to deal an additional <span id="neck-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 5,
                name: 'Egon Pendant',
                description: 'Whenever you hit an enemy who is below <span class="bonus-val const">50%</span> of their maximum health, you apply a damage over time effect that deals <span id="neck-equipment-bonus1" class="bonus-val attack">%d</span> physical damage over <span class="bonus-val const">5</span> seconds. Your damage is increased by <span class="bonus-val const">4.5%</span> for each enemy affected by this effect.',
                coefficients: [ 0.15 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 6,
                name: 'Spectral Essence',
                description: 'This talisman gains more Attack Rating when leveling up.<br/>Whenever you hit an enemy who is below <span class="bonus-val const">50%</span> of their maximum health, you have a <span class="bonus-val const">33%</span> chance to summon a Spectre who will cast Unravel Soul. <span class="bonus-val const">10</span> second cooldown.<br/>Unravel Soul: An attack that deals <span id="neck-equipment-bonus1" class="bonus-val attack">%d</span> magical damage.',
                coefficients: [ 2.2 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Linen Amulet',
                description: 'Whenever you heal an ally who is below <span class="bonus-val const">50%</span> of their maximum health, you have an <span class="bonus-val const">15%</span> chance to generate <span class="bonus-val const">1</span> Energy for the weapon which did the healing.'
            },
            {
                id: 8,
                name: 'Caduceus Amulet',
                description: 'Whenever you heal an ally who is below <span class="bonus-val const">50%</span> of their maximum health, their Protection is increased by <span class="bonus-val const">875</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 9,
                name: 'Vampiric Essence',
                description: 'This talisman gains more Heal Rating when leveling up.<br/>Whenever you heal an ally who is below <span class="bonus-val const">50%</span> of their maximum health, their damage is increased by <span class="bonus-val const">4.5%</span> and their attacks restore their health up to a maximum of <span id="neck-equipment-bonus1" class="bonus-val heal">%d</span> health restored for <span class="bonus-val const">3</span> seconds. This effect can only be applied once every <span class="bonus-val const">10</span> seconds.',
                coefficients: [ 0.335 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 10,
                name: 'Medallion of Wadjet',
                description: 'Whenever you lose health while below <span class="bonus-val const">50%</span> of your maximum health, you gain a barrier which absorbs 100 of incoming damage and dissipates after absorbing <span id="neck-equipment-bonus1" class="bonus-val heal">%d</span> damage. This effect can only occur once every <span class="bonus-val const">10</span> seconds.',
                coefficients: [ 1.25 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 11,
                name: 'Lycanthropic Essence',
                description: 'This talisman gains more health when leveling up.</br>Whenever you lose health while below <span class="bonus-val const">50%</span> of your maximum health, your damage is increased by <span class="bonus-val const">17%</span> for <span class="bonus-val const">3</span> seconds and your next attack during this time will restore <span class="bonus-val const">4%</span> of your maximum health. This effect can only occur once every <span class="bonus-val const">10</span> seconds.'
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
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a <span class="bonus-val const">25%</span> chance to restore <span id="wrist-equipment-bonus1" class="bonus-val heal">%d</span> health to that ally.',
                coefficients: [ 0.5 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 3,
                name: 'Iron-Sulfur Bracelet',
                description: 'Whenever you hit an enemy who is Exposed or Debilitated, you have a <span class="bonus-val const">25%</span> chance to deal <span id="wrist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.5 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Fleshwired Fetter',
                description: 'Whenever you hit an enemy who is Exposed, you have a <span class="bonus-val const">10%</span> chance to increase the duration of that enemy\'s Exposed effect by <span class="bonus-val const">1</span> second.'
            },
            {
                id: 5,
                name: 'Red Weed Timepiece',
                description: 'Whenever you heal an ally who does not have any active detrimental effects, you have a <span class="bonus-val const">15%</span> chance to grant an effect which lasts <span class="bonus-val const">3</span> seconds and will remove the next detrimental effect applied to that ally.'
            },
            {
                id: 6,
                name: 'Bracer of Forgotten Horrors',
                description: 'Whenever an Exposed or Debilitated enemy attacks you, you deal <span id="wrist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage back to them. This damage generates a large amount of hate.',
                coefficients: [ 0.04 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 7,
                name: 'Bracer of Horus',
                description: 'Whenever a Debilitated enemy attacks you, you have a <span class="bonus-val const">25%</span> chance to increase the duration of that enemy\'s Debilitated effect by <span class="bonus-val const">1</span> second.',
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
                description: 'Whenever you evade an attack or an attack glances you, your Protection is increased by <span class="bonus-val const">705</span> for <span class="bonus-val const">5</span> seconds.'
            },
            {
                id: 3,
                name: 'Gambler\'s Soul',
                description: 'Whenever you critically hit, you additionally deal <span id="luck-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 4,
                name: 'Cold Silver Dice',
                description: 'Whenever you critically hit, you have a <span class="bonus-val const">30%</span> chance to gain <span class="bonus-val const">1</span> Energy for the weapon which performed the critical hit.'
            },
            {
                id: 5,
                name: 'Chit of Kinich Ahau',
                description: 'Whenever you critically heal, you additionally restore <span id="luck-equipment-bonus1" class="bonus-val heal">%d</span> health to your target.',
                coefficients: [ 0.25 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 6,
                name: 'Tarot Cards',
                description: 'Whenever you critically heal, your defensive target\'s Protection is increased by <span class="bonus-val const">615</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 7,
                name: 'Golden Coin',
                description: 'Whenever you evade an attack or an attack glances you, you deal <span id="luck-equipment-bonus1" class="bonus-val attack">%d</span> physical damage back to the attacker. This damage generate a large amount of hate.',
                coefficients: [ 0.2875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 8,
                name: 'Laundry Tokens',
                description: 'Whenever you evade an attack or an attack glances you, you have a <span class="bonus-val const">50%</span> chance to gain <span class="bonus-val const">1</span> Energy for your currently active weapon.'
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
                description: 'Whenever you roll a Double Blue or better set of matching chambers, your next Pistol attack deals an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.9 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 3,
                name: 'Black Sash',
                description: 'Whenever you hit an enemy who is facing towards you, the enemy gains increased hate towards you.'
            },
            {
                id: 4,
                name: 'Jaguar Cord',
                description: 'Whenever you hit an enemy who is facing away from you, your movement speed is increased by <span class="bonus-val const">15%</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 5,
                name: 'Barbelith Wire',
                description: 'Whenever you hit an enemy who is facing away from you, you have a <span class="bonus-val const">15%</span> chance to slow their movement speed by <span class="bonus-val const">25%</span> for <span class="bonus-val const">2</span> seconds and reduce the target\'s hate towards you.'
            },
            {
                id: 6,
                name: 'Khonsu\'s Disc',
                description: 'Whenever you heal an ally who is less than <span class="bonus-val const">7</span> metres away from you, your movement speed is increased by <span class="bonus-val const">15%</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 7,
                name: 'Serum Pouch',
                description: 'Whenever you heal an ally who is less than <span class="bonus-val const">7</span> metres away from you, you generate <span class="bonus-val const">15%</span> less hate for <span class="bonus-val const">2</span> seconds.'
            },
            {
                id: 8,
                name: 'Incandescent Capacitor',
                description: 'Whenever you heal an ally who less than <span class="bonus-val const">7</span> metres away from you, you and your ally gain <span class="bonus-val const">625</span> protection for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 9,
                name: 'Grounding Line',
                description: 'Whenever you hit an enemy who is facing towards you, your movement speed is increased by <span class="bonus-val const">15%</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 10,
                name: 'Master\'s Chain',
                description: 'Whenever you activate Spirit Blade, your next Blade attack will deal an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> - <span id="waist-equipment-bonus2" class="bonus-val attack">%d</span> physical damage. The amount of damage dealt scales based on the amount of Chi you had when activating Spirit Blade.',
                coefficients: [ 0.25, 1.25 ],
                stats: [ 'Combat Power', 'Combat Power' ]
            },
            {
                id: 11,
                name: 'Brawler\'s Belt',
                description: 'Whenever you spend Rage to empower an attack, you gain <span class="bonus-val const">7</span> Rage. Rage must be spent in order to trigger this effect.'
            },
            {
                id: 12,
                name: 'Primal Rope Belt',
                description: 'Whenever you activate the Frenzied Wrath or Invigorating Wrath abilities, your next damaging Fist Weapon ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage or your next healing Fist Weapon ability will restore an additional <span id="waist-equipment-bonus2" class="bonus-val heal">%d</span> health.',
                coefficients: [ 1.125, 1.125 ],
                stats: [ 'Combat Power', 'Healing Power' ]
            },
            {
                id: 13,
                name: 'Pentacle Wrap',
                description: 'Reduces the amount of self-damage dealt by Corruption and Martyrdom by <span class="bonus-val const">10%</span>. In addition, once you have lost <span class="bonus-val const">10%</span> of your health due to corruption or martyrdom, your next damaging Blood Magic ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> magical damage or your next healing Blood Magic ability will restore an additional <span id="waist-equipment-bonus2" class="bonus-val heal">%d</span> health.',
                coefficients: [ 0.425, 0.425 ],
                stats: [ 'Combat Power', 'Healing Power' ]
            },
            {
                id: 14,
                name: 'Tumultuous Sash',
                description: 'Whenever your Paradox counts resets, you gain <span class="bonus-val const">1</span> - <span class="bonus-val const">2</span> Paradoxes.'
            },
            {
                id: 15,
                name: 'Thermotic Cinch',
                description: 'Whenever you overheat, your next Elemental cold ability will deal an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> magical damage.',
                coefficients: [ 1.25 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 16,
                name: 'Tactical Belt',
                description: 'Whenever you reload your Shotgun, your next Shotgun attack will deal an additional <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.875 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 17,
                name: 'Military Strap',
                description: 'Whenever you launch a fully cooked grenade, you gain <span class="bonus-val const">1</span> Energy.'
            },
            {
                id: 18,
                name: 'Generalist\'s Belt',
                description: '"Whenever you activate a Power ability, there is a <span class="bonus-val const">33%</span> chance that you will deal <span id="waist-equipment-bonus1" class="bonus-val attack">%d</span> physical damage or the target is healed for and additional <span id="waist-equipment-bonus2" class="bonus-val heal">%d</span>. Additional damage occurs when using damaging power abilities and additional healing occurs when using healing power abilities.',
                coefficients: [ 0.375, 0.375 ],
                stats: [ 'Combat Power', 'Healing Power' ]
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
                description: 'Whenever you or any of your group members defeat an enemy, your next attack will deal <span id="occult-equipment-bonus1" class="bonus-val attack">%d</span> physical damage.',
                coefficients: [ 0.833 ],
                stats: [ 'Combat Power' ]
            },
            {
                id: 3,
                name: 'Avaritia\'s Effigy',
                description: 'Whenever you or any of your group members defeat an enemy, your movement speed is increased by <span class="bonus-val const">15%</span> for <span class="bonus-val const">3</span> seconds.'
            },
            {
                id: 4,
                name: 'Razor Fossil',
                description: 'Whenever you or any of your group members defeat an enemy, your damage is increased by <span class="bonus-val const">8%</span> for <span class="bonus-val const">3</span> seconds. This effect can stack up to <span class="bonus-val const">5</span> times.'
            },
            {
                id: 5,
                name: 'Ankh',
                description: 'Whenever you or any of your group members defeat an enemy, your next heal will restore <span id="occult-equipment-bonus1" class="bonus-val heal">%d</span> health to your defensive target.',
                coefficients: [ 0.833 ],
                stats: [ 'Healing Power' ]
            },
            {
                id: 6,
                name: 'Rakshani Charm',
                description: 'Whenever you or any of your group members defeat an enemy, you have a <span class="bonus-val const">20%</span> chance to gain <span class="bonus-val const">1</span> Energy for your currently active weapon.'
            },
            {
                id: 7,
                name: 'Whalebone Rune',
                description: 'Whenever you or any of your group members defeat an enemy, your Protection is increased by <span class="bonus-val const">2045</span> for <span class="bonus-val const">5</span> seconds.'
            },
            {
                id: 8,
                name: 'Alloy Heart',
                description: 'Whenever you or any of your group members defeat an enemy, you are healed for <span id="occult-equipment-bonus1" class="bonus-val heal">%d</span>.',
                coefficients: [ 0.833 ],
                stats: [ 'Healing Power' ]
            }
        ]
    }
}