ServerEvents.recipes(event => {
  const STEEL = 'immersiveengineering:ingot_steel'
  const COKE = 'immersiveengineering:coal_coke'
  const COAL_DUST = 'mekanism:dust_coal'
  const T = 'create:incomplete_precision_mechanism'

  event.remove({ output: STEEL })

  // Charbon -> poudre de charbon (roues concasseuses Create)
  event.recipes.create.crushing(
    [Item.of(COAL_DUST), CreateItem.of(COAL_DUST, 0.25)],
    'minecraft:coal'
  )

  // Charbon -> poudre de charbon (meule Create)
  event.recipes.create.milling(
    [Item.of(COAL_DUST)],
    'minecraft:coal'
  )

  // Tôle de fer -> acier
  event.recipes.create.sequenced_assembly(
    [
      CreateItem.of(STEEL, 0.85),
      CreateItem.of('minecraft:iron_nugget', 0.10),
      CreateItem.of(COKE, 0.05)
    ],
    'create:iron_sheet',
    [
      event.recipes.create.deploying(T, [T, COKE]),
      event.recipes.create.deploying(T, [T, 'immersiveengineering:hammer']).keepHeldItem(),
      event.recipes.create.filling(T, [T, Fluid.of('minecraft:lava', 50)]),
      event.recipes.create.pressing(T, T),
      event.recipes.create.filling(T, [T, Fluid.of('minecraft:water', 250)])
    ]
  ).transitionalItem(T).loops(3)
    .id('kubejs:steel_sequenced')
})