ServerEvents.recipes(event => {

    // 1. Ajout de la recette exclusive dans l'Implosion Compressor
    // Configuration : 32 EU/t pendant 200 ticks (10 secondes)
    event.recipes.modern_industrialization.implosion_compressor(32, 200)
        .itemInputs([
            'mekanism:block_steel',                          // Bloc d'acier Mekanism
            '2x modern_industrialization:industrial_tnt'     // 2x TNT Industrielle de MI
        ])
        .itemOutputs([
            'mekanism:steel_casing'                          // Le boîtier en acier obtenu
        ])
})
