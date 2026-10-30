ServerEvents.recipes(event => {

    // --- ÉTAPE 1 : IMMERSIVE ENGINEERING (Format Codec strict 1.21.1) ---
    // Correction complète de la structure 'result' et 'secondaries' pour l'addon
    event.custom({
        "type": "immersiveengineering:crusher",
        "energy": 3000,
        "input": {
            "item": "minecraft:calcite"
        },
        "result": {
            "item": "minecraft:bone_meal",
            "count": 4
        },
        "secondaries": [
            {
                "chance": 0.5,
                "output": {
                    "item": "minecraft:bone_meal",
                    "count": 2
                }
            }
        ]
    }).id('kubejs:immersive_calcium_extraction');


    // --- ÉTAPE 2 : CREATE (Mélange des protéines organiques solides) ---
    event.recipes.create.mixing(
        Item.of('minecraft:wheat', 2), [
            'minecraft:wheat_seeds',
            'minecraft:pumpkin_seeds',
            'minecraft:melon_seeds'
        ]
    ).heated().id('kubejs:protein_mixing');


    // --- ÉTAPE 3 : CREATE (Assemblage Séquencé de l'Œuf) ---
    // le honeycomb est utilisé comme élément de transition pour l'assemblage séquentiel de l'œuf qui fait en sorte d'etre le jaune d'œuf.
    const transitional = 'minecraft:honeycomb'; 

    event.recipes.create.sequenced_assembly([
        'minecraft:egg'
    ], 'minecraft:honeycomb', [
        event.recipes.create.pressing(transitional, transitional),
        event.recipes.create.deploying(transitional, [transitional, 'minecraft:wheat']),
        event.recipes.create.filling(transitional, [transitional, Fluid.of('minecraft:milk', 250)]),
        event.recipes.create.deploying(transitional, [transitional, 'minecraft:white_dye']),
        event.recipes.create.pressing(transitional, transitional)
    ]).transitionalItem(transitional).loops(1).id('kubejs:sequenced_egg_assembly');

});
