ServerEvents.recipes(event => {

    // --- ÉTAPE 1 : FABRICATION DE LA PÂTE CONCENTRÉE (Midgame Create) ---
    event.recipes.create.compacting(Fluid.of('kubejs:cake_batter', 1000), [
        'minecraft:cake',                     
        'minecraft:sugar',                    
        'minecraft:cocoa_beans',              
        Fluid.of('minecraft:milk', 1000)      
    ]).superheated().id('custom_cakes:cake_batter_compacting');


    // --- ÉTAPE 2 : LES PÂTES DIMENSIONNELLES (Vintage Improvements & Create) ---

    // 🌶️ LE NETHER
    event.recipes.vintageimprovements.vacuumizing(
        Fluid.of('kubejs:nether_cake_batter', 1000), 
        [
            Fluid.of('kubejs:cake_batter', 1000),    
            'minecraft:blaze_powder',                 
            'minecraft:nether_wart',                  
            'minecraft:magma_cream'                   
        ]
    ).heated().id('custom_cakes:nether_cake_batter_vacuumizing');

    // 🔮 L'END
    event.recipes.create.mixing(Fluid.of('kubejs:end_cake_batter', 1000), [
        Fluid.of('kubejs:cake_batter', 1000),
        'minecraft:chorus_fruit',
        'minecraft:ender_eye',
        'mekanism:steel_casing' 
    ]).superheated().id('custom_cakes:end_cake_batter_mixing');

    // --- ÉTAPE 3 : ASSEMBLAGE DES GÂTEAUX (Sequenced Assembly) ---
    
    // Définition de l'objet de transition (commun aux 3 recettes)
    const transitional = 'createaddition:cake_base_baked';

    // 1. Recette pour le Nether Cake
    event.remove({ output: 'jamd:nether_portal' }); // Supprime la recette existante pour le Nether Cake
    event.recipes.create.sequenced_assembly([
        'jamd:nether_portal'
    ], 'expandeddelight:cheese_wheel', [
        event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:cake_batter', 250)]),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:nether_cake_batter', 250)]),
        event.recipes.create.deploying(transitional, [transitional, 'allthecompressed:crushed_netherrack_2x']), // <-- CORRIGÉ ICI
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('custom_cakes:nether_cake_assembly');

    // 2. Recette pour l'End Cake
    event.remove({ output: 'jamd:end_portal' }); // Supprime la recette existante pour l'End Cake
    event.recipes.create.sequenced_assembly([
        'jamd:end_portal'
    ], 'expandeddelight:cheese_wheel', [
        event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:cake_batter', 250)]),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:end_cake_batter', 250)]),
        event.recipes.create.deploying(transitional, [transitional, 'allthecompressed:crushed_end_stone_2x']), // <-- CORRIGÉ ICI
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('custom_cakes:end_cake_assembly');

});
