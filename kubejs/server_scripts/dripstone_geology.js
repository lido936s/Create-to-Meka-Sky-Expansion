//Calcite
 //+ Sand
 //+ Water
 //↓ Mixing

//Mineral Slurry
 //↓ Charging

//Ionized Slurry
 //↓ Compacting (superheated)

// >> Dripstone Block

ServerEvents.recipes(event => {

  // Retire la recette vanilla
  event.remove({ output: 'minecraft:dripstone_block' })


  // =========================================
  // ÉTAPE 1 — Crushing de calcite
  // =========================================

  event.recipes.create.crushing([
    '2x minecraft:bone_meal',
    CreateItem.of('minecraft:white_dye', 0.35) // ✅ Validé pour la 1.21.1
  ], 'minecraft:calcite').id('kubejs:crushing_calcite')


  // =========================================
  // ÉTAPE 2 — Création de boue minérale
  // =========================================

  event.recipes.create.mixing(
    'kubejs:mineral_slurry',
    [
      '2x minecraft:bone_meal',
      'minecraft:sand',
      Fluid.of('minecraft:water', 500)
    ]
  ).id('kubejs:mineral_slurry_from_crushed_calcite_and_sand_and_water')


  // =========================================
  // ÉTAPE 3 — Ionisation électrique (Tesla Coil)
  // =========================================
  
  // Format JSON mis à jour pour Create Crafts & Additions (Minecraft 1.21.1)
  event.custom({
    type: "createaddition:charging",
    ingredients: [
      { item: "kubejs:mineral_slurry" }
    ],
    results: [
      { id: "kubejs:ionized_mineral_slurry", count: 1 }
    ],
    energy: 4000,
    max_charge_rate: 200 
  }).id('kubejs:ionized_mineral_slurry_from_mineral_slurry')


  // =========================================
  // ÉTAPE 4 — Cristallisation
  // =========================================

  event.recipes.create.compacting(
    [
      'minecraft:dripstone_block',
      CreateItem.of('minecraft:pointed_dripstone', 0.12) // ✅ Validé pour la 1.21.1
    ],
    [
      'kubejs:ionized_mineral_slurry',
      Fluid.of('kubejs:molten_porcelain_clay', 25)
    ]
  ).heated().id('kubejs:dripstone_block_from_ionized_mineral_slurry')

});
