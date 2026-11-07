// =====================================================================
//  Sky Resource Generators : crafts durcis
//  Minecraft 1.21.1 / NeoForge 21.1.238 / KubeJS 2101.7.x
//  Emplacement : kubejs/server_scripts/sky_resource_generators_hard.js
//
//  Progression voulue (chaque palier demande le précédent) :
//    Palier 1 (andesite)  : eau, graines, saplings, ore random
//    Palier 2 (cuivre)    : lave, raw conversion, ore placement simple
//    Palier 3 (laiton)    : simple ore generator
//    Palier 4 (endgame)   : advanced ore generator
//
//  Aucun item transitoire : tout est en crafts shaped, donc pas de
//  script startup à ajouter.
// =====================================================================
ServerEvents.recipes(event => {
    const MOD = 'sky_resource_generators:';

    // ---------------------------------------------------------------
    // 1) Suppression des recettes d'origine du mod
    // ---------------------------------------------------------------
    [
        'primitive_water_condenser',
        'primitive_water_condenser_from_apple',
        'primitive_lava_condenser',
        'random_seed_generator',
        'random_sapling_generator',
        'random_ore_generator',
        'random_ore_placement_generator',
        'raw_conversion_generator',
        'simple_ore_placement_generator',
        'simple_ore_generator',
        'advanced_ore_generator'
    ].forEach(id => event.remove({ id: MOD + id }));

    // ---------------------------------------------------------------
    // PALIER 1 : andesite
    // ---------------------------------------------------------------

    // Primitive Water Condenser
    event.shaped(MOD + 'primitive_water_condenser', [
        'PKP',
        'FBF',
        'PCP'
    ], {
        P: '#minecraft:planks',
        K: 'kubejs:kinetic_mechanism',
        F: 'create:fluid_pipe',
        B: 'minecraft:water_bucket',
        C: 'create:andesite_casing'
    });

    // Random Seed Generator
    event.shaped(MOD + 'random_seed_generator', [
        'AKA',
        'PSP',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kinetic_mechanism',
        P: '#minecraft:planks',
        S: 'minecraft:wheat_seeds',
        C: 'create:andesite_casing'
    });

    // Random Sapling Generator
    event.shaped(MOD + 'random_sapling_generator', [
        'AKA',
        'PSP',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        K: 'kubejs:kinetic_mechanism',
        P: '#minecraft:planks',
        S: '#minecraft:saplings',
        C: 'create:andesite_casing'
    });

    // Random Ore Generator
    event.shaped(MOD + 'random_ore_generator', [
        'CKC',
        'KMK',
        'CKC'
    ], {
        C: 'minecraft:cobblestone',
        K: 'kubejs:kinetic_mechanism',
        M: 'kubejs:andesite_machine'
    });

    // Random Ore Placement Generator
    event.shaped(MOD + 'random_ore_placement_generator', [
        'PAP',
        'CMC',
        'PAP'
    ], {
        P: '#minecraft:planks',
        A: 'create:andesite_alloy',
        C: 'minecraft:cobblestone',
        M: 'kubejs:andesite_machine'
    });

    // ---------------------------------------------------------------
    // PALIER 2 : cuivre
    // ---------------------------------------------------------------

    // Primitive Lava Condenser
    event.shaped(MOD + 'primitive_lava_condenser', [
        'NBN',
        'FMF',
        'NCN'
    ], {
        N: 'minecraft:nether_bricks',
        B: 'create:blaze_burner',
        F: 'create:fluid_pipe',
        M: 'kubejs:copper_machine',
        C: 'create:copper_casing'
    });

    // Raw Conversion Generator
    event.shaped(MOD + 'raw_conversion_generator', [
        'PSP',
        'RMR',
        'PSP'
    ], {
        P: '#minecraft:planks',
        S: 'kubejs:sealed_mechanism',
        R: 'minecraft:raw_copper',
        M: 'kubejs:copper_machine'
    });

    // Simple Ore Placement Generator
    event.shaped(MOD + 'simple_ore_placement_generator', [
        'CCC',
        'RMR',
        'SSS'
    ], {
        C: 'create:copper_casing',
        R: '#c:raw_materials',
        M: 'kubejs:copper_machine',
        S: 'kubejs:sealed_mechanism'
    });

    // ---------------------------------------------------------------
    // PALIER 3 : laiton
    // ---------------------------------------------------------------

    // Simple Ore Generator
    event.shaped(MOD + 'simple_ore_generator', [
        'PDP',
        'SMS',
        'ARA'
    ], {
        P: 'create:precision_mechanism',
        D: 'minecraft:diamond_block',
        S: '#c:ingots/steel',
        M: 'kubejs:brass_machine',
        A: 'minecraft:amethyst_shard',
        R: 'minecraft:redstone_block'
    });

    // ---------------------------------------------------------------
    // PALIER 4 : endgame
    // ---------------------------------------------------------------

    // Advanced Ore Generator (demande le Simple Ore Generator)
    event.shaped(MOD + 'advanced_ore_generator', [
        'NEN',
        'PGP',
        'SMS'
    ], {
        N: 'minecraft:netherite_ingot',
        E: 'minecraft:emerald_block',
        P: 'create:precision_mechanism',
        G: MOD + 'simple_ore_generator',
        S: '#c:ingots/steel',
        M: 'kubejs:brass_machine'
    });
});
