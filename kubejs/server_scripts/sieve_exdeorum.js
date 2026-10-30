ServerEvents.recipes(event => {

    // ======================================================
    // 📦 FONCTION HELPER : SYSTEME DE TAMIS (1.21.1)
    // ======================================================
    function addSieve(input, mesh, items) {
        Object.entries(items).forEach(([item, chance]) => {
            // Utilisation de l'API officielle KubeJS Ex Deorum pour la 1.21.1
            event.recipes.exdeorum.sieve(item, input, mesh).binomial(1, chance)
        })
    }

    // ======================================================
    // 🌿 FEUILLES (LEAVES) — PROGRESSION DU BOIS
    // ======================================================
    addSieve(
        '#minecraft:leaves', // Utilisation directe du tag au format String
        'exdeorum:string_mesh',
        {
            'minecraft:stick': 0.55,
            'minecraft:oak_sapling': 0.12,
            'minecraft:spruce_sapling': 0.10,
            'minecraft:birch_sapling': 0.10,
            'minecraft:acacia_sapling': 0.07,
            'minecraft:dark_oak_sapling': 0.05,
            'exdeorum:silkworm': 0.04 // 🟢 ID corrigé pour la 1.21 (sans le "_")
        }
    )

    // ======================================================
    // 🌱 TERRE (DIRT) — AGRICULTURE & POTAGER
    // ======================================================
    addSieve(
        'minecraft:dirt',
        'exdeorum:string_mesh',
        {
            'minecraft:wheat_seeds': 0.25,
            'minecraft:carrot': 0.05,
            'minecraft:potato': 0.05,
            'minecraft:pumpkin_seeds': 0.18,
            'minecraft:melon_seeds': 0.18,
            'minecraft:beetroot_seeds': 0.18,
            'exdeorum:grass_seeds': 0.15,

            'farmersdelight:cabbage_seeds': 0.12,
            'farmersdelight:tomato_seeds': 0.10,
            'farmersdelight:onion': 0.08,
            'farmersdelight:rice': 0.10,

            'minecraft:golden_carrot': 0.005,
            'exdeorum:silkworm': 0.05 // 🟢 ID corrigé pour la 1.21 (sans le "_")
        }
    )

    // ======================================================
    // 🏖 SABLE (SAND) — RESSOURCES DE BASE
    // ======================================================
    addSieve(
        'minecraft:sand',
        'exdeorum:string_mesh',
        {
            'minecraft:bamboo': 0.18,
            'minecraft:kelp': 0.08,
            'exdeorum:mycelium_spores': 0.05
        }
    )

    // ======================================================
    // 🪨 GRAVIER (GRAVEL) — PROGRESSION DE LA PIERRE
    // ======================================================
    addSieve(
        'minecraft:gravel',
        'exdeorum:string_mesh',
        {
            'havenpebbles:stone_pebble': 0.25,
            'havenpebbles:andesite_pebble': 0.15,
            'havenpebbles:granite_pebble': 0.15,
            'havenpebbles:diorite_pebble': 0.12
        }
    )

})
