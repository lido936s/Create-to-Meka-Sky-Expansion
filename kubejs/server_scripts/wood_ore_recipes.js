// kubejs/server_scripts/wood_ore_recipes.js

ServerEvents.recipes(event => {
    // 1. Production de Sève Concentrée (Create Mixing)
    event.recipes.create.mixing(
        Fluid.of('kubejs:liquid_wood', 250), 
        [
            'minecraft:oak_log',
            Fluid.of('minecraft:water', 500)
        ]
    ).heated();

    // 2. Création du Minerai de Bois (Create Filling)
    event.recipes.create.filling(
        'kubejs:wood_ore',
        [
            'minecraft:stone', 
            Fluid.of('kubejs:liquid_wood', 1000)
        ]
    );

    // 3. Traitement du Minerai au Broyeur (Create Crushing)
    // Syntaxe exacte demandée par KubeJS Create 1.21 : CreateItem.of('id_item', probabilité)
    event.recipes.create.crushing(
        [
            Item.of('kubejs:raw_wood_ore', 2),
            CreateItem.of('minecraft:oak_planks', 0.5) // Utilisation directe recommandée par la console
        ],
        'kubejs:wood_ore'
    );

    // 4. Fonte au four traditionnel
    event.smelting('minecraft:charcoal', 'kubejs:raw_wood_ore').xp(0.7);
});
