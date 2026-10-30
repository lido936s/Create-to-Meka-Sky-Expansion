ServerEvents.recipes(event => {

    // ============================================================
    // Cobblestone + Eau -> Molten Cobblestone
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 6000,
            ingredient: {
                fluid: "minecraft:water"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "minecraft:cobblestone"
                }
            }
        ],

        output: {
            "#": 16000,
            "#t": "ae2:f",
            "id": "kubejs:molten_cobblestone"
        }
    });


    // ============================================================
    // Porcelain Clay Ball + Eau -> Molten Porcelain Clay
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 6000,
            ingredient: {
                fluid: "minecraft:water"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "exdeorum:porcelain_clay_ball"
                }
            }
        ],

        output: {
            "#": 16000,
            "#t": "ae2:f",
            "id": "kubejs:molten_porcelain_clay"
        }
    });


    // ============================================================
    // Steel Casing + Nether Star Fluid -> Nether Star
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 1000,
            ingredient: {
                fluid: "kubejs:nether_star_fluid"
            }
        },

        input_items: [
            {
                amount: 2,
                ingredient: {
                    item: "mekanism:steel_casing"
                }
            }
        ],

        output: {
            "#": 16,
            "#t": "ae2:i",
            "id": "minecraft:nether_star"
        }
    });


    // ============================================================
    // Andesite Alloy + Molten Cobblestone -> Molten Andesite Alloy
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 6000,
            ingredient: {
                fluid: "kubejs:molten_cobblestone"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "create:andesite_alloy"
                }
            }
        ],

        output: {
            "#": 16000,
            "#t": "ae2:f",
            "id": "kubejs:molten_andesite_alloy"
        }
    });


    // ============================================================
    // Quartz + Liquid Redstone -> Polished Rose Quartz
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 8000,
            ingredient: {
                fluid: "kubejs:liquid_redstone"
            }
        },

        input_items: [
            {
                amount: 64,
                ingredient: {
                    item: "minecraft:quartz"
                }
            }
        ],

        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "create:polished_rose_quartz"
        }
    });


    // ============================================================
    // Certus Quartz + Liquid Redstone -> Polished Rose Quartz
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 8000,
            ingredient: {
                fluid: "kubejs:liquid_redstone"
            }
        },

        input_items: [
            {
                amount: 64,
                ingredient: {
                    item: "ae2:certus_quartz_crystal"
                }
            }
        ],

        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "create:polished_rose_quartz"
        }
    });


    // ============================================================
    // Polished Rose Quartz + Molten Iron -> Electron Tube
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 8000,
            ingredient: {
                fluid: "productivemetalworks:molten_iron"
            }
        },

        input_items: [
            {
                amount: 64,
                ingredient: {
                    item: "create:polished_rose_quartz"
                }
            }
        ],

        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "create:electron_tube"
        }
    });


    // ============================================================
    // Molten Cobblestone + Raw Iron + Porcelain Clay + Andesite
    // -> Andesite Alloy
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 1000,
            ingredient: {
                fluid: "kubejs:molten_cobblestone"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "minecraft:raw_iron"
                }
            },
            {
                amount: 16,
                ingredient: {
                    item: "exdeorum:porcelain_clay_ball"
                }
            },
            {
                amount: 32,
                ingredient: {
                    item: "minecraft:andesite"
                }
            }
        ],

        output: {
            "#": 64,
            "#t": "ae2:i",
            "id": "create:andesite_alloy"
        }
    });


    // ============================================================
    // Molten Certus + Blaze Rod + Redstone -> Charged Slurry
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 2000,
            ingredient: {
                fluid: "kubejs:molten_certus"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "minecraft:blaze_rod"
                }
            },
            {
                amount: 16,
                ingredient: {
                    item: "minecraft:redstone"
                }
            }
        ],

        output: {
            "#": 32,
            "#t": "ae2:i",
            "id": "kubejs:charged_slurry"
        }
    });

    // ============================================================
    // Quantum Infusion + Charged Slurry + Shattered Singularity -> Flawless Budding Quartz
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 2000,
            ingredient: {
                fluid: "advanced_ae:quantum_infusion_source"
            }
        },

        input_items: [
            {
                amount: 4,
                ingredient: {
                    item: "advanced_ae:shattered_singularity"
                }
            },
            {
                amount: 2,
                ingredient: {
                    item: "kubejs:charged_slurry"
                }
            }
        ],

        output: {
            "#": 1,
            "#t": "ae2:i",
            "id": "ae2:flawless_budding_quartz"
        }
    });

    // ============================================================
    // Redstone Dust + Molten Copper -> Liquid Redstone
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 2000,
            ingredient: {
                fluid: "productivemetalworks:molten_copper"
            }
        },

        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: "minecraft:redstone"
                }
            }
        ],

        output: {
            "#": 8000,
            "#t": "ae2:f",
            "id": "kubejs:liquid_redstone"
        }
    });
 // ============================================================
    // Coal + Lava -> Molten Carbon
    // ============================================================
    event.custom({
        type: "advanced_ae:reaction",

        input_energy: 1000000,

        input_fluid: {
            amount: 1000,
            ingredient: {
                fluid: "minecraft:lava"
            }
        },

        input_items: [
            {
                amount: 4,
                ingredient: {
                    item: "minecraft:coal"
                }
            }
        ],

        output: {
            "#": 1000,
            "#t": "ae2:f",
            "id": "kubejs:molten_carbon"
        }
    });

});