ServerEvents.recipes(event => {

    // Recette complexe : Création de lait (Fluid: minecraft:milk)
    event.recipes.create.mixing(
        Fluid.of('minecraft:milk', 1000), [
            Fluid.of('minecraft:water', 1000),
            'minecraft:sugar',
            'minecraft:white_dye',
            'minecraft:wheat'
        ]
    ).heated().id('kubejs:milk_mixing');

});
