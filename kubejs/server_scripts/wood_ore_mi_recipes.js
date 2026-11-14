// kubejs/server_scripts/wood_ore_mi_recipes.js

ServerEvents.recipes(event => {

    // 1. RECETTE : Macerator (Broyeur)
    // Broie le minerai de bois pour donner du bois brut et une chance de pépite de zinc
    event.custom({
        type: 'modern_industrialization:macerator',
        eu: 2,          // Consommation : 2 EU/tick
        duration: 200,  // Temps : 200 ticks (10 secondes)
        item_inputs: [
            { item: 'kubejs:wood_ore', amount: 1 }
        ],
        item_outputs: [
            { item: 'kubejs:raw_wood_ore', amount: 3 }, // Sortie principale x3
            { item: 'create:zinc_nugget', amount: 1, chance: 0.25 } // Sortie secondaire (25%)
        ]
    });

    // 2. RECETTE : Mixer (Création du Minerai)
    // Infuse la pierre avec la sève concentrée (liquid_wood) pour créer le minerai
    event.custom({
        type: 'modern_industrialization:mixer',
        eu: 2,          // Consommation : 2 EU/tick
        duration: 100,  // Temps : 100 ticks (5 secondes)
        item_inputs: [
            { item: 'minecraft:stone', amount: 1 }
        ],
        fluid_inputs: [
            { fluid: 'kubejs:liquid_wood', amount: 1000 } // Consomme 1 seau complet (1000 mB)
        ],
        item_outputs: [
            { item: 'kubejs:wood_ore', amount: 1 },
            { item: 'kubejs:raw_wood_ore', amount: 1, chance: 0.45 } // Chance de 45% d'obtenir un morceau de bois brut en bonus
        ]
    });

    // 3. RECETTE : Mixer (Réaction Chimique pour le Soufre)
    // 45x Bois Brut + 500mB de Lave -> 1x Poudre de Soufre
    // Divisé par 2 (45 au lieu de 90) pour respecter la limite technique des slots de MI (max 64)
    event.custom({
        type: 'modern_industrialization:mixer',
        eu: 4,          // Consommation plus élevée pour la réaction
        duration: 300,  // Temps : 300 ticks (15 secondes)
        item_inputs: [
            { item: 'kubejs:raw_wood_ore', amount: 1 }
        ],
        fluid_inputs: [
            { fluid: 'minecraft:lava', amount: 25 } // Demi-seau de lave
        ],
        item_outputs: [
            { item: 'modern_industrialization:sulfur_dust', amount: 1 }
        ]
    });

});
