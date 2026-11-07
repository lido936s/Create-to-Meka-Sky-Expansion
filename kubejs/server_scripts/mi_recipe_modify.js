ServerEvents.recipes(event => {
    const itemAAjouter = 'create:electron_tube';
    const analogCircuit = 'modern_industrialization:analog_circuit';

    // 1. Supprime uniquement la recette du circuit analogique faite sur la table de craft
    event.remove({ output: analogCircuit, type: 'minecraft:crafting_shaped' });

    // 2. Modifie la recette de la machine de Modern Industrialization pour ajouter le tube
    event.forEachRecipe({ output: analogCircuit }, recipe => {
        let json = recipe.json;

        if (json && json.has('item_inputs')) {
            let inputs = json.getAsJsonArray('item_inputs');
            
            let nouvelIngredient = JsonIO.toObject({
                item: itemAAjouter,
                amount: 1
            });

            inputs.add(nouvelIngredient);
        }
    });
});
// immersiveengineering:rs_engineering
ServerEvents.recipes(event => {
    
    event.custom({
        type: "modern_industrialization:assembler",
        eu: 8,          // Consommation d'énergie par tick (EU/t)
        duration: 200,  // Durée de la recette en ticks (20 ticks = 1 seconde)
        
        // Liste des ingrédients (Items et/ou Fluides)
        item_inputs: [
            { item: "minecraft:copper_ingot", amount: 1 },
            { item: "minecraft:redstone", amount: 1 },
            { item: "immersiveengineering:sheetmetal_iron", amount: 4 },
            { tag: "c:rods/iron", amount: 4 } // Fonctionne aussi avec les tags !
        ],
        fluid_inputs: [
            { fluid: "modern_industrialization:molten_redstone", amount: 1000 } // Quantité en milli-buckets (1000 = 1 seau)
        ],
        
        // Liste des résultats (Outputs)
        item_outputs: [
            { item: "immersiveengineering:rs_engineering", amount: 8 }
        ],
        fluid_outputs: [] // Laissez vide si la recette ne produit pas de liquide
    })

})

