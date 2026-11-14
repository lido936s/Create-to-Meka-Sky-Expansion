// kubejs/server_scripts/additive_midgame_mi_ae2.js
// Recettes Late Mid-Game additives (sans event.remove) pour Modern Industrialization et Applied Energistics 2

ServerEvents.recipes(event => {

  // 1. Modern Industrialization : Assemblage direct d'Analog Circuits (x4) via l'Assembler de MI
  event.custom({
    type: 'modern_industrialization:assembler',
    eu: 16,
    duration: 200,
    item_inputs: [
      { item: 'kubejs:porcelain_plate', amount: 2 },
      { item: 'kubejs:andesite_infused', amount: 2 },
      { item: 'modern_industrialization:inductor', amount: 2 },
      { item: 'modern_industrialization:resistor', amount: 2 },
      { item: 'create:electron_tube', amount: 2 },
      { tag: 'c:wires/copper', amount: 4 }
    ],
    item_outputs: [
      { item: 'modern_industrialization:analog_circuit', amount: 4 }
    ]
  }).id('kubejs:mi_bulk_analog_circuit')

  // 2. Modern Industrialization : Production rapide de Steel Machine Casings dans le Packer
  event.custom({
    type: 'modern_industrialization:packer',
    eu: 8,
    duration: 100,
    item_inputs: [
      { item: 'kubejs:andesite_infused', amount: 4 },
      { tag: 'c:plates/steel', amount: 4 }
    ],
    item_outputs: [
      { item: 'modern_industrialization:steel_machine_casing', amount: 2 }
    ]
  }).id('kubejs:mi_double_steel_casing')

  // 3. Modern Industrialization : Cupronickel Coils a rendement double grace a l'Infused Porcelain
  event.shaped('2x modern_industrialization:cupronickel_coil', [
    'WWW',
    'WPW',
    'WWW'
  ], {
    W: 'modern_industrialization:cupronickel_wire',
    P: 'kubejs:porcelain_plate'
  }).id('kubejs:double_cupronickel_coil')

  // 4. Applied Energistics 2 : Fabrication d'Engineering Processors par lot via Create Compacting (sans Inscriber)
  event.recipes.create.compacting('4x ae2:engineering_processor', [
    'kubejs:porcelain_plate',
    '2x minecraft:diamond',
    '2x create:electron_tube',
    'ae2:silicon'
  ]).heated().id('kubejs:compacting_engineering_processor')

  // 5. Applied Energistics 2 : Fabrication de Calculation Processors par lot via Create Compacting
  event.recipes.create.compacting('4x ae2:calculation_processor', [
    'kubejs:porcelain_plate',
    '2x ae2:certus_quartz_crystal',
    '2x create:electron_tube',
    'ae2:silicon'
  ]).heated().id('kubejs:compacting_calculation_processor')

  // 6. Applied Energistics 2 : Fabrication de Logic Processors par lot via Create Compacting
  event.recipes.create.compacting('4x ae2:logic_processor', [
    'kubejs:porcelain_plate',
    '2x minecraft:gold_ingot',
    '2x create:electron_tube',
    'ae2:silicon'
  ]).heated().id('kubejs:compacting_logic_processor')
})
