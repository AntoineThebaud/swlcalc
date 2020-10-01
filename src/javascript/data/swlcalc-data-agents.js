var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.agents = [
    {
        id: 0,
        name: 'None',
        levels: {
            "25": {
                type: 'empty',
                value: 'Empty agent slot'
            },
            "50": {
                type: 'empty',
                value: ''
            }
        }
    },
    {
        id: 1,
        name: 'Faction Recruit',
        levels: {
            "25": {
                type: 'protection',
                value: '1000',
            },
            "50": {
                type: 'hitpoints',
                value: '980'
            }
        }
    },
    {
        id: 2,
        name: 'Jayesh Suresh',
        levels: {
            "25": {
                type: 'protection',
                value: '1000'
            },
            "50": {
                type: 'defense-rating',
                value: '500'
            }
        }
    },
    {
        id: 3,
        name: 'Christina Del Rio',
        levels: {
            "25": {
                type: 'protection',
                value: '1000'
            },
            "50": {
                type: 'evade-rating',
                value: '500'
            }
        }
    },
    {
        id: 4,
        name: 'Roman Konstantinov',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '+28% Basic Damage'
            }
        }
    },
    {
        id: 5,
        name: 'Warlawurru',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '+8% Power Damage'
            }
        }
    },
    {
        id: 6,
        name: 'Carlos Peraza',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '+20% Elite Damage'
            }
        }
    },
    {
        id: 7,
        name: 'Margot Crowley-Mathers',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="bonus-val dps">%d</span> Damage on Critical Hits',
                varbonus: {
                    coef: 0.1075,
                    stat: 'Combat Power'
                }
            },
            "50": {
                type: 'attack-rating',
                value: '650'
            }
        }
    },
    {
        id: 8,
        name: 'Calum MacLeod',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="bonus-val dps">%d</span> Damage on Critical Hits',
                varbonus: {
                    coef: 0.1075,
                    stat: 'Combat Power'
                }
            },
            "50": {
                type: 'critical-power',
                value: '300'
            }
        }
    },
    {
        id: 9,
        name: 'Lydia Darling',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'critical-power',
                value: '300'
            }
        }
    },
    {
        id: 10,
        name: 'Aleksey Volkov',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="bonus-val dps">%d</span> Damage on Critical Hits',
                varbonus: {
                    coef: 0.215,
                    stat: 'Combat Power'
                }
            }
        }
    },
    {
        id: 11,
        name: 'Cveta Stojanovic',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="bonus-val dps">%d</span> Physical Damage on Critical Hits',
                varbonus: {
                    coef: 0.215,
                    stat: 'Combat Power'
                }
            }
        }
    },
    {
        id: 12,
        name: 'Virgil',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+28% Basic Damage'
            }
        }
    },
    {
        id: 13,
        name: 'Sarah Skelly',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+8% Power Damage'
            }
        }
    },
    {
        id: 14,
        name: 'Pierre Delacroix',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+20% Elite Damage'
            }
        }
    },
    {
        id: 15,
        name: 'Wu Liang-Zhi',
        levels: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="bonus-val heal">%d</span> Healing on Critical Heals',
                varbonus: {
                    coef: 0.215,
                    stat: 'Healing Power'
                }
            }
        }
    },
    {
        id: 16,
        name: 'Lama Lhakpa',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="bonus-val heal">%d</span> Healing on Critical Heals',
                varbonus: {
                    coef: 0.1075,
                    stat: 'Healing Power'
                }
            },
            "50": {
                type: 'critical-power',
                value: '300'
            }
        }
    },
    {
        id: 17,
        name: 'Siobhan Gowan',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="bonus-val heal">%d</span> Healing on Critical Heals',
                varbonus: {
                    coef: 0.1075,
                    stat: 'Healing Power'
                }
            },
            "50": {
                type: 'heal-rating',
                value: '650'
            }
        }
    },
    {
        id: 18,
        name: 'Tiana Cardoza',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="bonus-val heal">%d</span> Healing on Critical Heals',
                varbonus: {
                    coef: 0.215,
                    stat: 'Healing Power'
                }
            }
        }
    },
    {
        id: 19,
        name: 'Ibrahim de la Fuente',
        levels: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+28% Basic Damage'
            }
        }
    },
    {
        id: 20,
        name: 'Terry Laputo',
        levels: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+8% Power Damage'
            }
        }
    },
    {
        id: 21,
        name: 'Alessandro Luzio IV',
        levels: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '+20% Elite Damage'
            }
        }
    },
    {
        id: 22,
        name: 'Dax Reagan',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+2.5% Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 23,
        name: 'Oleg Yablokov',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+2.5% Damage'
            },
            "50": {
                type: 'attack-rating',
                value: '650'
            }
        }
    },
    {
        id: 24,
        name: 'Dae-Su',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+2.5% Damage'
            },
            "50": {
                type: 'critical-power',
                value: '300'
            }
        }
    },
    {
        id: 25,
        name: 'Liam Callahan',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Assault Rifle Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 26,
        name: 'Lee Chung',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Blade Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 27,
        name: 'Giovanni Bellanova',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Blood Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 28,
        name: 'Martin Espina',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Chaos Magic Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 29,
        name: 'Maxwell Chandler',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Dual Pistols Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 30,
        name: 'Astrid Mikkelsen',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Elementalism Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 31,
        name: 'Saenchai Khamsing',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Fist Weapons Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 32,
        name: 'Thomas Grady',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Hammer Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 33,
        name: 'Daniel Martinez',
        levels: {
            "25": {
                type: 'miscellaneous',
                value: '+3.5% Shotgun Damage',
            },
            "50": {
                type: 'hitpoints',
                value: '980',
            }
        }
    },
    {
        id: 34,
        name: 'Callie James',
        levels: {
            "25": {
                type: 'protection',
                value: '1000',
            },
            "50": {
                type: 'miscellaneous',
                value: '+5% Damage',
            }
        }
    },
    {
        id: 35,
        name: 'Nassir',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Assault Rifle Damage',
            }
        }
    },
    {
        id: 36,
        name: 'Montgomery de la Roche',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Blade Damage',
            }
        }
    },
    {
        id: 37,
        name: 'Carter',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Blood Damage',
            }
        }
    },
    {
        id: 38,
        name: 'Hayden J. Montag',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Chaos Magic Damage',
            }
        }
    },
    {
        id: 39,
        name: 'Deputy Andy Gardener',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Dual Pistols Damage',
            }
        }
    },
    {
        id: 40,
        name: 'Amir',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Elementalism Damage',
            }
        }
    },
    {
        id: 41,
        name: 'Mihas Blaga',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Fist Weapons Damage',
            }
        }
    },
    {
        id: 42,
        name: 'Petru',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Hammer Damage',
            }
        }
    },
    {
        id: 43,
        name: 'Aurélie',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Shotgun Damage',
            }
        }
    },
    {
        id: 44,
        name: 'Mesilande Gwinyai',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Assault Rifle Damage',
            }
        }
    },
    {
        id: 45,
        name: 'Victor Cromely',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Blade Damage',
            }
        }
    },
    {
        id: 46,
        name: 'Aliya Zenhar',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Blood Damage',
            }
        }
    },
    {
        id: 47,
        name: 'Ann Thophora',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Chaos Magic Damage',
            }
        }
    },
    {
        id: 48,
        name: 'Wekesa Ikande',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Dual Pistols Damage',
            }
        }
    },
    {
        id: 49,
        name: 'Mehmet Muzaffer',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Elementalism Damage',
            }
        }
    },
    {
        id: 50,
        name: 'Che Garcia Hansson',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Fist Weapons Damage',
            }
        }
    },
    {
        id: 51,
        name: 'Queen Ranavanlona IV',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Hammer Damage',
            }
        }
    },
    {
        id: 52,
        name: 'Dennis Masuhlo',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+7% Shotgun Damage',
            }
        }
    },
    {
        id: 53,
        name: 'Kwanele',
        levels: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '+5% Damage and Healing',
            }
        }
    },
    {
        id: 54,
        name: 'Faction Quartermaster',
        levels: {
            "25": {
                value: '+2.5% Damage',
                type: 'miscellaneous',
            },
            "50": {
                value: '300',
                type: 'critical-power'
            }
        }
    },
    {
        id: 55,
        name: 'Jack Boone',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'protection',
                value: '2000',
            }
        }
    },
    {
        id: 56,
        name: 'Jeronimo de Montejo',
        levels: {
            "25": {
                type: 'hitpoints',
                value: '490',
            },
            "50": {
                type: 'protection',
                value: '2000',
            }
        }
    },
    {
        id: 57,
        name: 'Lady of the Mists',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Humans',
            }
        }
    },
    {
        id: 58,
        name: 'Fearghas Abernathy',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Cybernetic',
            }
        }
    },
    {
        id: 59,
        name: 'Brann Mac Diarmoda',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Aquatic Creatures',
            }
        }
    },
    {
        id: 60,
        name: 'Nuala Magorian',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Constructs',
            }
        }
    },
    {
        id: 61,
        name: 'Amelia Bindings',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Spirits',
            }
        }
    },
    {
        id: 62,
        name: 'Francis Rowan',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Filth',
            }
        }
    },
    {
        id: 63,
        name: 'Laughing Jenny',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Demons',
            }
        }
    },
    {
        id: 64,
        name: 'Finn Mulligan',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Animals',
            }
        }
    },
    {
        id: 65,
        name: 'Sif Minervudottir',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Supernatural Beings',
            }
        }
    },
    {
        id: 66,
        name: 'Lynch',
        levels: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '+10% Damage Versus Undead',
            }
        }
    }
]
