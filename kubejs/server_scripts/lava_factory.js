// lava_factory

ServerEvents.recipes(event => {

  // Basalt -> Blackstone + Gravel
  event.recipes.create.crushing(
    [
      'minecraft:blackstone',
      CreateItem.of('minecraft:gravel', 0.5)
    ],
    'minecraft:basalt'
  )

  // Netherrack + Blaze Powder -> Lava
  event.recipes.create.mixing(
    [Fluid.of('minecraft:lava', 1000)],
    [
      'minecraft:netherrack',
      'minecraft:blaze_powder'
    ]
  )
  .heated()
  .id('lava_factory:lava_mixing')

  // Bucket filling
  event.recipes.create.filling(
    'minecraft:lava_bucket',
    [
      'minecraft:bucket',
      Fluid.of('minecraft:lava', 1000)
    ]
  )

  // Remove Create cobblestone lava recipe
  event.remove({
    id: 'create:mixing/lava_from_cobble'
  })

})
