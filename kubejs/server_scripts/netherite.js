//Netherrack
// → Crushing
// Crushed Nether
// → Washing
// Ancient Fragments
// → Haunting
//Corrupted Fragments
// → Compacting (superheated)
// Ancient Debris
// → Smelting
// Netherite Scrap

ServerEvents.recipes(event => {

  // 1 . Crushing — Netherrack → Fragments
  event.recipes.create.crushing([
    CreateItem.of('kubejs:ancient_fragment', 0.15),
    CreateItem.of('minecraft:gold_nugget', 0.25),
    'minecraft:netherrack'
  ], 'minecraft:netherrack')
  .processingTime(300)
  .id('cab:crushed_netherrack');

  // 2 . Washing — Fragments → Ancient Fragments
  event.recipes.create.splashing([
    CreateItem.of('kubejs:clean_ancient_fragment', 0.75)
  ], 'kubejs:ancient_fragment')
  .id('cab:washed_fragment');

  // 3 . Haunting — Ancient Fragments → Corrupted Fragments
  event.recipes.create.haunting(
    'kubejs:corrupted_fragment',
    'kubejs:clean_ancient_fragment'
  ).id('cab:corrupted_fragment');

  // 4 . Compacting (superheated) — Corrupted Fragments → Ancient Debris
  event.recipes.create.compacting(
    Item.of('minecraft:ancient_debris', 8),
    [
      'kubejs:corrupted_fragment',
      'kubejs:corrupted_fragment',
      Fluid.of('minecraft:lava', 500)
    ]
  )
  .superheated()
  .id('cab:ancient_debris');

  // 5 . Smelting — Ancient Debris → Netherite Scrap
  // Note : L'ordre logique de l'évènement smelting est (résultat, ingrédient)
  event.smelting('minecraft:netherite_scrap', 'minecraft:ancient_debris');

});
