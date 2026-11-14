ServerEvents.recipes(event => {
    // 1. Chemical Infusing : produit le chemical, et non le fluide
    event.custom({
        type: 'mekanism:chemical_infusing',
        left_input: { amount: 500, chemical: 'mekanism:plutonium' },
        right_input: { amount: 500, chemical: 'mekanism:hydrogen' },
        output: {
            id: 'kubejs:heavy_core_slurry', // Maintenant c'est un Chemical valide
            amount: 200
        }
    }).id('kubejs:heavy_core_slurry_mekanism');

    // 2. Reaction : utiliser les noms de champs corrects
    event.custom({
        type: 'mekanism:reaction',
        item_input: { item: 'minecraft:netherite_block' },
        fluid_input: { amount: 1000, fluid: 'minecraft:lava' }, // Exemple : utiliser un fluide vanilla
        chemical_input: { amount: 500, chemical: 'mekanism:antimatter' }, // ✅ chemical_input, et non gas_input
        duration: 600,
        energy_required: 50000, // ✅ energy_required, et non energyRequired
        item_output: { id: 'minecraft:heavy_core', count: 1 }
    }).id('kubejs:heavy_core_mekanism_reaction');
});