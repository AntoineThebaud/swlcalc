var swlcalc = swlcalc || {};
swlcalc.data = swlcalc.data || {};

swlcalc.data.agents = [
    {
        id: 0,
        name: 'None',
        bonuses: {
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
        bonuses: {
            "25": {
                type: 'protection',
                value: '1000',
            },
            "50": {
                type: 'hit-points',
                value: '980'
            }
        }
    },
    {
        id: 2,
        name: 'Jayesh Suresh',
        bonuses: {
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
        bonuses: {
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
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+28%</span> Basic Damage'
            }
        }
    },
    {
        id: 5,
        name: 'Warlawurru',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+8%</span> Power Damage'
            }
        }
    },
    {
        id: 6,
        name: 'Carlos Peraza',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+20%</span> Elite Damage'
            }
        }
    },
    {
        id: 7,
        name: 'Margot Crowley-Mathers',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">%d</span> Damage on Critical Hits',
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
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">%d</span> Damage on Critical Hits',
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
        bonuses: {
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
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">%d</span> Damage on Critical Hits',
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
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">%d</span> Physical Damage on Critical Hits',
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
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+28%</span> Basic Damage'
            }
        }
    },
    {
        id: 13,
        name: 'Sarah Skelly',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+8%</span> Power Damage'
            }
        }
    },
    {
        id: 14,
        name: 'Pierre Delacroix',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+20%</span> Elite Damage'
            }
        }
    },
    {
        id: 15,
        name: 'Wu Liang-Zhi',
        bonuses: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value heal">%d</span> Healing on Critical Heals',
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
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value heal">%d</span> Healing on Critical Heals',
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
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value heal">%d</span> Healing on Critical Heals',
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
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value heal">%d</span> Healing on Critical Heals',
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
        bonuses: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+28%</span> Basic Damage'
            }
        }
    },
    {
        id: 20,
        name: 'Terry Laputo',
        bonuses: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+8%</span> Power Damage'
            }
        }
    },
    {
        id: 21,
        name: 'Alessandro Luzio IV',
        bonuses: {
            "25": {
                type: 'heal-rating',
                value: '325'
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+20%</span> Elite Damage'
            }
        }
    },
    {
        id: 22,
        name: 'Dax Reagan',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 23,
        name: 'Oleg Yablokov',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage'
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
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage'
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
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Assault Rifle Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 26,
        name: 'Lee Chung',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Blade Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 27,
        name: 'Giovanni Bellanova',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Blood Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 28,
        name: 'Martin Espina',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Chaos Magic Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 29,
        name: 'Maxwell Chandler',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Dual Pistols Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 30,
        name: 'Astrid Mikkelsen',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Elementalism Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 31,
        name: 'Saenchai Khamsing',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Fist Weapons Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 32,
        name: 'Thomas Grady',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Hammer Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 33,
        name: 'Daniel Martinez',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Shotgun Damage',
            },
            "50": {
                type: 'hit-points',
                value: '980',
            }
        }
    },
    {
        id: 34,
        name: 'Callie James',
        bonuses: {
            "25": {
                type: 'protection',
                value: '1000',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+5%</span> Damage',
            }
        }
    },
    {
        id: 35,
        name: 'Nassir',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Assault Rifle Damage',
            }
        }
    },
    {
        id: 36,
        name: 'Montgomery de la Roche',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Blade Damage',
            }
        }
    },
    {
        id: 37,
        name: 'Carter',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Blood Damage',
            }
        }
    },
    {
        id: 38,
        name: 'Hayden J. Montag',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Chaos Magic Damage',
            }
        }
    },
    {
        id: 39,
        name: 'Deputy Andy Gardener',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Dual Pistols Damage',
            }
        }
    },
    {
        id: 40,
        name: 'Amir',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Elementalism Damage',
            }
        }
    },
    {
        id: 41,
        name: 'Mihas Blaga',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Fist Weapons Damage',
            }
        }
    },
    {
        id: 42,
        name: 'Petru',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Hammer Damage',
            }
        }
    },
    {
        id: 43,
        name: 'Aurélie',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Shotgun Damage',
            }
        }
    },
    {
        id: 44,
        name: 'Mesilande Gwinyai',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Assault Rifle Damage',
            }
        }
    },
    {
        id: 45,
        name: 'Victor Cromely',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Blade Damage',
            }
        }
    },
    {
        id: 46,
        name: 'Aliya Zenhar',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Blood Damage',
            }
        }
    },
    {
        id: 47,
        name: 'Ann Thophora',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Chaos Magic Damage',
            }
        }
    },
    {
        id: 48,
        name: 'Wekesa Ikande',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Dual Pistols Damage',
            }
        }
    },
    {
        id: 49,
        name: 'Mehmet Muzaffer',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Elementalism Damage',
            }
        }
    },
    {
        id: 50,
        name: 'Che Garcia Hansson',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Fist Weapons Damage',
            }
        }
    },
    {
        id: 51,
        name: 'Queen Ranavanlona IV',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Hammer Damage',
            }
        }
    },
    {
        id: 52,
        name: 'Dennis Masuhlo',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+7%</span> Shotgun Damage',
            }
        }
    },
    {
        id: 53,
        name: 'Kwanele',
        bonuses: {
            "25": {
                type: 'critical-power',
                value: '150',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+5%</span> Damage and Healing',
            }
        }
    },
    {
        id: 54,
        name: 'Faction Quartermaster',
        bonuses: {
            "25": {
                value: '<span class="stat-value const">+2.5%</span> Damage',
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
        bonuses: {
            "25": {
                type: 'hit-points',
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
        bonuses: {
            "25": {
                type: 'hit-points',
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
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Humans',
            }
        }
    },
    {
        id: 58,
        name: 'Fearghas Abernathy',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Cybernetic',
            }
        }
    },
    {
        id: 59,
        name: 'Brann Mac Diarmoda',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Aquatic Creatures',
            }
        }
    },
    {
        id: 60,
        name: 'Nuala Magorian',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Constructs',
            }
        }
    },
    {
        id: 61,
        name: 'Amelia Bindings',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Spirits',
            }
        }
    },
    {
        id: 62,
        name: 'Francis Rowan',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Filth',
            }
        }
    },
    {
        id: 63,
        name: 'Laughing Jenny',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Demons',
            }
        }
    },
    {
        id: 64,
        name: 'Finn Mulligan',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Animals',
            }
        }
    },
    {
        id: 65,
        name: 'Sif Minervudottir',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Supernatural Beings',
            }
        }
    },
    {
        id: 66,
        name: 'Lynch',
        bonuses: {
            "25": {
                type: 'attack-rating',
                value: '325',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Undead',
            }
        }
    },
    {
        id: 67,
        name: 'Romulus Peril',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 68,
        name: 'Artemis',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Assault Rifle Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 69,
        name: 'Mr. Pilkington',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Blade Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 70,
        name: 'Dr. Letizia Moretti',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Blood Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 71,
        name: 'Anastazy Hydock',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Chaos Magic Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 72,
        name: 'Simon Brisk',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Dual Pistols Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 73,
        name: 'Dr. Thaddeus Finch',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Elementalism Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 74,
        name: 'Eve, "the Lady of Mortar"',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Fist Weapons Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 75,
        name: 'Erasmus Kidderminster',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Hammer Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 76,
        name: 'Marceline Lupin',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+3.5%</span> Shotgun Damage',
            },
            "50": {
                type: 'heal-rating',
                value: '650',
            }
        }
    },
    {
        id: 77,
        name: 'Elin Bagge',
        bonuses: {
            "25": {
                type: 'hit-points',
                value: '490',
            },
            "50": {
                type: 'critical-power',
                value: '300'
            }
        }
    },
    {
        id: 78,
        name: 'Rana Kader',
        bonuses: {
            "25": {
                type: 'evade-rating',
                value: '250',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Vampires',
            }
        }
    },
    {
        id: 79,
        name: 'The Cleaner',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">5%</span> chance of knockdown enemy on hit',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Filth',
            }
        }
    },
    {
        id: 80,
        name: 'Walter Malone',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+5%</span> Damage Versus Undead',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Damage Versus Aquatic Creatures',
            }
        }
    },
    {
        id: 81,
        name: 'The Duo',
        bonuses: {
            "25": {
                type: 'evade-rating',
                value: '250',
            },
            "50": {
                type: 'defense-rating',
                value: '500',
            }
        }
    },
    {
        id: 82,
        name: 'Diviciacus',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value dps">%d</span> Damage to enemies when you are hit',
                varbonus: {
                    coef: 0.15,
                    stat: 'Combat Power'
                }
            },
            "50": {
                type: 'protection',
                value: '2000'
            }
        }
    },
    {
        id: 83,
        name: 'Brigadier Lethe',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage and Healing',
            },
            "50": {
                type: 'critical-power',
                value: '300',
            }
        }
    },
    {
        id: 84,
        name: 'De La Guardia',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2.5%</span> Damage and Healing',
            },
            "50": {
                type: 'critical-power',
                value: '300',
            }
        }
    },
    {
        id: 85,
        name: 'The Hessian',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+5%</span> Outgoing Damage for 3 seconds on dodge.',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Outgoing Damage for 3 seconds on dodge.',
            }
        }
    },
    {
        id: 86,
        name: 'Rogue Coder',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+2000</span> Protection for 3 seconds on dodge.',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+4000</span> Protection for 3 seconds on dodge.',
            }
        }
    },
    {
        id: 87,
        name: 'The Toad Brothers',
        bonuses: {
            "25": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+5%</span> Outgoing Healing for 3 seconds on dodge.',
            },
            "50": {
                type: 'miscellaneous',
                value: '<span class="stat-value const">+10%</span> Outgoing Healing for 3 seconds on dodge.',
            }
        }
    }
]
