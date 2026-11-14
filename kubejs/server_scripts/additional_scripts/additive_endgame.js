// kubejs/server_scripts/additive_endgame.js
// Recettes End-Game additives (sans event.remove) pour Mekanism, Modern Industrialization et Extended Crafting

ServerEvents.recipes(event => {

  // 1. Mekanism : Production en lot d'Atomic Alloy dans le Metallurgic Infuser
  event.recipes.mekanism.metallurgic_infusing(
    '4x mekanism:alloy_atomic',
    'kubejs:infused_porcelain_plate',
    '20x mekanism:refined_obsidian',
  ).id('kubejs:meka_bulk_atomic_alloy')

  // 2. Mekanism : Steel Casings doubles grace a l'Infused Porcelain et l'Andesite Infused
  event.shaped('2x mekanism:steel_casing', [
    'SAS',
    'POP',
    'SAS'
  ], {
    S: '#c:ingots/steel',
    A: 'kubejs:andesite_infused',
    P: 'kubejs:infused_porcelain_plate',
    O: 'mekanism:ingot_osmium'
  }).id('kubejs:meka_double_steel_casing')

  // 3. Modern Industrialization : Recette alternative de Quantum Circuit dans l'Assembler
  event.custom({
    type: 'modern_industrialization:assembler',
    eu: 512,
    duration: 400,
    item_inputs: [
      { item: 'kubejs:infused_porcelain_plate', amount: 8 },
      { item: 'kubejs:andesite_infused', amount: 8 },
      { item: 'mekanism:ultimate_control_circuit', amount: 2 },
      { item: 'modern_industrialization:processing_unit', amount: 2 }
    ],
    item_outputs: [
      { item: 'modern_industrialization:quantum_circuit', amount: 2 }
    ]
  }).id('kubejs:mi_alt_quantum_circuit')

  // 4. Extended Crafting : Recette Endgame pour la Cellule Infini AE2 (meinfinitycell)
  event.recipes.extendedcrafting.shaped_table('meinfinitycell:infinity_cobblestone_cell', [
    'AABBBAA',
    'ACDEDCA',
    'BDFGFDB',
    'BEGHGEB',
    'BDFGFDB',
    'ACDEDCA',
    'AABBBAA'
  ], {
    A: 'extended_industrialization:electric_alloy_smelter',
    B: 'kubejs:andesite_infused',
    C: 'kubejs:infused_porcelain_plate',
    D: 'modern_industrialization:quantum_machine_hull',
    E: 'mekanism:pellet_antimatter',
    F: 'ae2:cell_component_256k',
    G: 'allthecompressed:cobblestone_5x',
    H: 'ae2:dense_energy_cell'
  }).id('kubejs:endgame_infinity_cobble_cell')
})
