// kubejs/server_scripts/exdeorum_barrel_recipes.js
// Recettes de mélange en baril pour les items compressés (Ex Deorum 3.12)
// Utilise event.custom avec le format JSON natif, sans dépendre de l'addon KubeJS Ex Deorum

ServerEvents.recipes((event) => {
    for (let i = 1; i < 10; i++) {
        // Dust + Eau -> Clay
        event.custom({
            type: 'exdeorum:barrel_mixing',
            ingredient: { item: `allthecompressed:dust_${i}x` },
            result: { id: `allthecompressed:clay_${i}x`, count: 1 },
            fluid: { fluid: 'minecraft:water', amount: 1000 }
        }).id(`meka_sky:exdeorum/clay_${i}x`);

        // Soul Sand + Lave -> Soul Soil
        event.custom({
            type: 'exdeorum:barrel_mixing',
            ingredient: { item: `allthecompressed:soul_sand_${i}x` },
            result: { id: `allthecompressed:soul_soil_${i}x`, count: 1 },
            fluid: { fluid: 'minecraft:lava', amount: 1000 }
        }).id(`meka_sky:exdeorum/soul_soil_${i}x`);

        // Sand + Witch Water -> Soul Sand
        event.custom({
            type: 'exdeorum:barrel_mixing',
            ingredient: { item: `allthecompressed:sand_${i}x` },
            result: { id: `allthecompressed:soul_sand_${i}x`, count: 1 },
            fluid: { fluid: 'exdeorum:witch_water', amount: 1000 }
        }).id(`meka_sky:exdeorum/soul_sand_${i}x`);
    }
});