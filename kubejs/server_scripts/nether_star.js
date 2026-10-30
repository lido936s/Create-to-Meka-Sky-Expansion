ServerEvents.recipes(event => {

    // 1. Suppression de la recette d'uncraft d'Extended Crafting
    event.remove({ id: 'extendedcrafting:nether_star_block_uncraft' })

    // 2. Recette d'assemblage séquencé (Sequenced Assembly) pour l'étoile du Nether
    const transitional = 'kubejs:incomplete_nether_star'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:nether_star')
        ],
        'mekanism:steel_casing',
        [
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:netherite_ingot']),
            event.recipes.create.filling(transitional, [transitional, Fluid.of('productivemetalworks:molten_electrum', 75)]),
            event.recipes.create.deploying(transitional, [transitional, 'minecraft:soul_sand']),
            event.recipes.create.pressing(transitional, transitional)
        ]
    )
    .transitionalItem(transitional)
    .loops(5)
    .id('kubejs:nether_star_sequenced')

    // 3. Automatisation de l'étoile du Nether via Mixing (Mixeur)
    event.recipes.create.mixing(
        [CreateItem.of('minecraft:nether_star', 0.25)],
        [Fluid.of('kubejs:nether_star_fluid', 1000)]
    )
    .heated()
    .id('kubejs:nether_star_from_fluid')

})
