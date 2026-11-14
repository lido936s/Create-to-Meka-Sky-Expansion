ServerEvents.recipes(event => {

    // Recette 1 : Assembler (conserver helium_plasma, s'il existe dans votre version)
    event.recipes.modern_industrialization.assembler(512, 2400)
        .itemIn('16x minecraft:netherite_scrap')
        .itemIn('4x minecraft:nether_star')
        .itemIn('8x minecraft:ancient_debris')
        .fluidIn('modern_industrialization:helium_plasma', 1000)  // Si cette erreur persiste, commentez cette ligne
        .itemOut('minecraft:heavy_core')
        .id('kubejs:heavy_core_mi_hard');

    // Recette 2 : Chemical Reactor (conserver, le format est correct)
    event.recipes.modern_industrialization.chemical_reactor(256, 1800)
        .itemIn('8x minecraft:netherite_ingot')
        .itemIn('2x minecraft:nether_star')
        .fluidIn('modern_industrialization:heavy_water', 2000)
        .fluidOut('modern_industrialization:steam', 500)
        .itemOut('minecraft:heavy_core')
        .id('kubejs:heavy_core_mi_alt');

    // Recette 3 : LA PLUS PROBLÉMATIQUE — plasma n'existe pas + pas de sortie
    // Solution : remplacer par un fluide existant, ou supprimer fluidIn, ou ajouter itemOut
    event.recipes.modern_industrialization.assembler(2048, 3600)
        .itemIn('32x minecraft:netherite_ingot')
        .itemIn('8x minecraft:nether_star')
        // .fluidIn('modern_industrialization:plasma', 4000)  // ❌ Ce fluide n'existe pas, commenté
        .itemOut(Item.of('minecraft:heavy_core', 2))  // ✅ Sortie d'objet déjà présente
        .id('kubejs:heavy_core_mi_endgame');
});