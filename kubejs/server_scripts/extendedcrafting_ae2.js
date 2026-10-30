ServerEvents.recipes(event => {

    // =====================================================
    // REMOVE ORIGINAL RECIPES
    // =====================================================

    const removedRecipes = [
        "ae2:controller",
        "ae2:pattern_provider",
        "ae2:interface",
        "appliedcreate:me_gearbox",
        "advanced_ae:reaction_chamber",
        "ae2:crafting_unit"
    ]

    removedRecipes.forEach(recipe => {
        try {
            event.remove({ output: recipe })
        } catch (e) {
            // Ignore silencieusement si l'item n'existe pas
        }
    })


    // =====================================================
    // AE2 CONTROLLER
    // =====================================================

    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 3,
        pattern: [
            "FCECF",
            "CTATC",
            "ERMRE",
            "CTRTC",
            "FCECF"
        ],
        key: {
            F: { item: "ae2:fluix_crystal" },
            M: { item: "ae2:calculation_processor" },
            C: { item: "create:electron_tube" },
            R: { item: "create:refined_radiance" },
            E: { item: "create:precision_mechanism" },
            T: { item: "mekanism:alloy_infused" },
            A: { item: "mekanism:steel_casing" }
        },
        result: {
            id: "ae2:controller",
            count: 1
        }
    }).id('kubejs:ae2_controller_table')



    // =====================================================
    // AE2 PATTERN PROVIDER
    // =====================================================

    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 4,
        pattern: [
            "GGGGGGG",
            "GFCECFG",
            "GCTATCG",
            "GERMREG",
            "GCTRTCG",
            "GFCECFG",
            "GGGGGGG"
        ],
        key: {
            G: { item: "minecraft:iron_ingot" },
            F: { item: "ae2:fluix_block" },
            M: { item: "ae2:annihilation_core" },
            T: { item: "ae2:formation_core" },
            C: { item: "create:electron_tube" },
            R: { item: "create:chromatic_compound" },
            E: { item: "create:mechanical_crafter" },
            A: { item: "mekanism:steel_casing" }
        },
        result: {
            id: "ae2:pattern_provider",
            count: 1
        }
    }).id('kubejs:ae2_pattern_provider_table')




    // =====================================================
    // AE2 INTERFACE
    // =====================================================

    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 4,
        pattern: [
            "GGGGGGG",
            "GFCECFG",
            "GCTATCG",
            "GERMREG",
            "GCTRTCG",
            "GFCECFG",
            "GGGGGGG"
        ],
        key: {
            G: { item: "minecraft:iron_ingot" },
            F: { item: "ae2:quartz_block" },
            M: { item: "ae2:annihilation_core" },
            T: { item: "ae2:formation_core" },
            C: { item: "create:electron_tube" },
            R: { item: "create:chromatic_compound" },
            E: { item: "create:mechanical_arm" },
            A: { item: "mekanism:steel_casing" }
        },
        result: {
            id: "ae2:interface",
            count: 1
        }
    }).id('kubejs:ae2_interface_table')





    // =====================================================
    // APPLIED CREATE ME GEARBOX
    // =====================================================

    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 4,
        pattern: [
            "GGGGGGG",
            "GFCECFG",
            "GCTATCG",
            "GERMREG",
            "GCTRTCG",
            "GFCECFG",
            "GGGGGGG"
        ],
        key: {
            C: { item: "create:electron_tube" },
            R: { item: "create:chromatic_compound" },
            E: { item: "create:mechanical_arm" },
            F: { item: "create:mechanical_crafter" },
            M: { item: "createaddition:rolling_mill" },
            T: { item: "kubejs:andesite_machine" },
            G: { item: "create:andesite_alloy" },
            A: { item: "mekanism:steel_casing" }
        },
        result: {
            id: "appliedcreate:me_gearbox",
            count: 1
        }
    }).id('kubejs:appliedcreate_me_gearbox_table')



    // =====================================================
    // ADVANCED AE REACTION CHAMBER
    // =====================================================

    event.custom({
        type: "extendedcrafting:shaped_table",
        tier: 4,
        pattern: [
            "GGGHGGG",
            "GFCECFG",
            "GCTATCG",
            "GERMREG",
            "GCTRTCG",
            "GFCECFG",
            "GGGHGGG"
        ],
        key: {
            F: { item: "ae2:condenser" },
            M: { item: "ae2:certus_quartz_crystal" },
            T: { item: "ae2:vibration_chamber" },
            G: { item: "ae2:fluix_block" },
            R: { item: "ae2:engineering_processor" },
            C: { item: "mekanism:advanced_fluid_tank" },
            E: { item: "minecraft:glowstone" },
            H: { item: "extendedae:ex_charger" },
            A: { item: "mekanism:chemical_oxidizer" } // CORRIGÉ : 'item' à la place de 'id'
        },
        result: {
            id: "advanced_ae:reaction_chamber",
            count: 1
        }
    }).id('kubejs:advancedae_reaction_chamber_table')

})
