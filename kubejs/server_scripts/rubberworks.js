ServerEvents.recipes(event => {

  // 1. Recette de Compression : Molten Certus -> Quartz Block
  // Note : La compression mécanique de Rubberworks est enregistrée via event.recipes.rubberworks.compressing
  event.recipes.rubberworks.compressing(
    [Item.of('ae2:quartz_block', 1)],
    [Fluid.of('kubejs:molten_certus', 10)]
  )
  .heated()
  .id('kubejs:rubberworks/compressing/certus_quartz_dust');

  // 2. Recette Sapping : Extraction du fluide Nether Star
  event.recipes.rubberworks.sapping(
    [Fluid.of('kubejs:nether_star_fluid', 250)],
    ['extendedcrafting:nether_star_block', 'minecraft:netherite_block']
  )
  .id('kubejs:rubberworks/sapping/nether_star_fluid');

  // 3. Recette Sapping : Extraction de Molten Certus
  event.recipes.rubberworks.sapping(
    [Fluid.of('kubejs:molten_certus', 40)],
    ['minecraft:quartz_block', 'minecraft:white_concrete']
  )
  .id('kubejs:rubberworks/sapping/molten_certus');

});
