// kubejs/server_scripts/compressed_recipes.js
// Corrigé pour KubeJS NeoForge 2101.7.2-build.377 (MC 1.21.1)
// - Suppression de la redeclaration de 'stones'
// - Suppression de tous les .toResultJson()
// - Correction du format de sortie de create_dragons_plus:ending (id au lieu de item)
// - Remplacement de tous les labels 'atm:' par 'meka_sky:'
// - Correction de la syntaxe de fermeture (accolade en trop)

ServerEvents.recipes((event) => {
    const hasCreate = Platform.isLoaded('kubejs_create');
    const hasMekanism = Platform.isLoaded('kubejs_mekanism');

    const makeId = (kind, input, output) => {
        const safeIn = input.replace(/[^a-z0-9]/gi, '_');
        const safeOut = output.replace(/[^a-z0-9]/gi, '_');
        return `meka_sky:${kind}/${safeIn}_to_${safeOut}`;
    };

    const STONES = [
        'cobblestone',
        'granite',
        'andesite',
        'diorite'
    ];

    function crushing(input, output) {
        if (hasCreate) {
            event.recipes.create.crushing([output], input)
                .id(makeId('create_crushing', input, output));
        } else {
            event.custom({
                type: 'create:crushing',
                ingredients: [Ingredient.of(input).toJson()],
                results: [{ item: output, count: 1 }],
                processingTime: 100
            }).id(makeId('create_crushing_json', input, output));
        }

        if (hasMekanism) {
            event.recipes.mekanismCrushing(output, input)
                .id(makeId('mek_crushing', input, output));
        } else {
            event.custom({
                type: 'mekanism:crushing',
                input: { count: 1, ingredient: Ingredient.of(input).toJson() },
                output: { count: 1, ingredient: Item.of(output, 1).toJson() }
            }).id(makeId('mek_crushing_json', input, output));
        }
    }

    function haunting(input, output) {
        if (hasCreate) {
            event.recipes.create.haunting(output, input)
                .id(makeId('create_haunting', input, output));
        } else {
            event.custom({
                type: 'create:haunting',
                ingredients: [Ingredient.of(input).toJson()],
                results: [{ item: output, count: 1 }]
            }).id(makeId('create_haunting_json', input, output));
        }
    }

    function ending(input, output) {
        event.custom({
            type: 'create_dragons_plus:ending',
            ingredients: [Ingredient.of(input).toJson()],
            // Format correct pour Dragons Plus : 'id' et non 'item'
            results: [{ id: output, count: 1 }]
        }).id(makeId('create_ending', input, output));
    }

    for (let i = 1; i < 10; i++) {
        STONES.forEach(stone => {
            crushing(`allthecompressed:${stone}_${i}x`, `allthecompressed:gravel_${i}x`);
        });

        crushing(`allthecompressed:gravel_${i}x`, `allthecompressed:sand_${i}x`);
        crushing(`allthecompressed:sand_${i}x`, `allthecompressed:dust_${i}x`);

        crushing(`allthecompressed:netherrack_${i}x`, `allthecompressed:crushed_netherrack_${i}x`);
        crushing(`allthecompressed:blackstone_${i}x`, `allthecompressed:crushed_blackstone_${i}x`);
        crushing(`allthecompressed:deepslate_${i}x`, `allthecompressed:crushed_deepslate_${i}x`);
        crushing(`allthecompressed:end_stone_${i}x`, `allthecompressed:crushed_end_stone_${i}x`);

        haunting(`allthecompressed:cobblestone_${i}x`, `allthecompressed:blackstone_${i}x`);
        haunting(`allthecompressed:sand_${i}x`, `allthecompressed:soul_sand_${i}x`);
        ending(`allthecompressed:cobblestone_${i}x`, `allthecompressed:end_stone_${i}x`);

        event.smelting(`allthecompressed:stone_${i}x`, `allthecompressed:cobblestone_${i}x`)
            .id(`meka_sky:smelting/stone_${i}x`);
        event.smelting(`allthecompressed:glass_${i}x`, `allthecompressed:sand_${i}x`)
            .id(`meka_sky:smelting/glass_${i}x`);
    }
})