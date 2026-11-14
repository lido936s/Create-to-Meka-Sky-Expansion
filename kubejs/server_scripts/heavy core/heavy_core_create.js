// ============================================================
// HEAVY CORE - Recette Create (Alloying / Mixing) - HARD MODE
// ============================================================
// Prérequis : KubeJS Create (addon)
// Machine   : Mixer (Bassin) + Blaze Burner en mode SUPERHEATED
// ============================================================

ServerEvents.recipes(event => {

    // ----------------------------------------------------------
    // Recette principale : Fusion superheated
    // ----------------------------------------------------------
    event.recipes.createMixing(
        Item.of('minecraft:heavy_core', 1), // Résultat
        [
            '8x minecraft:netherite_ingot',
            '4x minecraft:netherite_block',
            '16x minecraft:obsidian',
            '4x minecraft:ancient_debris',
            Fluid.of('minecraft:lava', 4000)
        ]
    )
    .superheated()          // Nécessite un Blaze Burner superheated
    .processingTime(1200)   // 60 secondes (20 ticks = 1 sec)
    .id('kubejs:heavy_core_create_hard');


    // ----------------------------------------------------------
    // Recette alternative (plus courte mais plus chère en items)
    // Pour les joueurs qui ont une ferme à Wither Skeleton
    // ----------------------------------------------------------
    event.recipes.createMixing(
        Item.of('minecraft:heavy_core', 1),
        [
            '4x minecraft:netherite_block',
            '2x minecraft:nether_star',
            '32x minecraft:crying_obsidian',
            Fluid.of('kubejs:molten_netherite', 2000) // Si vous avez un fluide custom
        ]
    )
    .superheated()
    .processingTime(800)
    .id('kubejs:heavy_core_create_alt');


    // ----------------------------------------------------------
    // Suppression des recettes vanilla/autres mods pour forcer la nôtre
    // ----------------------------------------------------------
    // event.remove({ output: 'minecraft:heavy_core' }); 
    // ⚠️ Décommentez SEULEMENT si vous voulez supprimer TOUTES les autres recettes
});