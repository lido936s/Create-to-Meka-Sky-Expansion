// ============================================================
//  Magnetite — Create to Meka: Sky Expansion (1.21.1)
//  Logique : Create (cinétique) → MI/Mekanism (électrique)
// ============================================================

ServerEvents.recipes(event => {

    // 1. Lodestone économique (base Skyblock)
    event.remove({ id: 'minecraft:lodestone' })
    event.shaped('minecraft:lodestone', [
        'III', 'ISI', 'III'
    ], {
        I: 'minecraft:iron_nugget',
        S: 'minecraft:chiseled_stone_bricks'
    }).id('kubejs:lodestone_cheap')

    // 2. Méthode principale : Create (pressage chauffé)
    event.recipes.create.compacting('create_new_age:magnetite_block', [
        '4x minecraft:lodestone'
    ]).heated().id('kubejs:magnetite_block_from_lodestone')

    // 3. Alternative Mekanism (ère atomique)
    //    Syntaxe correcte : '2x item' directement dans le wrapper KubeJS
    event.recipes.mekanism.enriching('create_new_age:magnetite_block', '2x minecraft:lodestone')
        .id('kubejs:magnetite_via_mekanism_enriching')

    // 4. Alternative Modern Industrialization (ère électrique)
    event.recipes.modern_industrialization.assembler(32, 200)
        .itemIn('3x minecraft:lodestone')
        .itemIn('1x create_new_age:overcharged_iron_sheet')
        .itemOut('create_new_age:magnetite_block')
        .id('kubejs:magnetite_via_mi_assembler')

})