// =====================================================================
//  Variantes de l'Andesite Alloy (Minecraft 1.21.1 / NeoForge 21.1.238)
//  KubeJS 2101.7.x - server_scripts
//  - tag  : kubejs:andesite_alloys (create:andesite_alloy + les 11 variantes)
//  - recette (shapeless) : create:andesite_alloy + matériau -> variante
// =====================================================================
(function () {
    const ALLOY_MATERIAL = {
        copper: 'minecraft:copper_ingot',
        brass: 'create:brass_ingot',
        zinc: 'create:zinc_ingot',
        golden: 'minecraft:gold_ingot',
        iron: 'minecraft:iron_ingot',
        steel: '#c:ingots/steel',
        obsidian: 'minecraft:obsidian',
        verdigris: 'minecraft:oxidized_copper',
        ember: 'minecraft:blaze_powder',
        ender: 'minecraft:ender_pearl',
        lapis: 'minecraft:lapis_lazuli'
    };

    ServerEvents.tags('item', event => {
        event.add('kubejs:andesite_alloys', 'create:andesite_alloy');
        Object.keys(ALLOY_MATERIAL).forEach(type => {
            event.add('kubejs:andesite_alloys', 'kubejs:' + type + '_andesite_alloy');
        });
    });

    ServerEvents.recipes(event => {
        Object.keys(ALLOY_MATERIAL).forEach(type => {
            let id = type + '_andesite_alloy';
            event.shapeless('kubejs:' + id, ['create:andesite_alloy', ALLOY_MATERIAL[type]])
                .id('kubejs:andesite_alloy_variants/' + id);
        });

        // ---- OPTIONNEL : utiliser n'importe quelle variante comme base ----
        // Exemple : accepter le tag à la place de create:andesite_alloy dans une recette existante,
        // ou décompresser une variante en alliage normal :
        // event.shapeless('create:andesite_alloy', ['#kubejs:andesite_alloys']).id('kubejs:andesite_alloy_variants/reset');
    });
})();
