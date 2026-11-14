// Progression du create:belt_connector (de la table de craft jusqu'a Mekanism)
// Corrige pour NeoForge 21.1.238 / KubeJS 2101.7 :
//  - IE metal_press, MI packer/assembler et Mekanism : recettes ecrites en JSON (event.custom),
//    car les constructeurs des plugins ne correspondaient pas aux arguments utilises.
ServerEvents.recipes(event => {
  const PLATE = 'kubejs:porcelain_plate'
  const INFUSED = 'kubejs:infused_porcelain_plate'
  const BELT = 'create:belt_connector'

  // =========================================================================
  // 1. EARLY / MID-GAME : TABLE DE CRAFT & CREATE (rendement 4x a 6x)
  // =========================================================================

  // Craft : plaques de porcelaine + algues sechees (4x)
  event.shaped('4x ' + BELT, [
    'KKK',
    'AAA'
  ], {
    K: 'minecraft:dried_kelp',
    A: PLATE
  }).id('kubejs:belt_porcelain_plate_kelp')

  // Create mixing (chauffe) : plaque + caoutchouc (6x)
  event.recipes.create.mixing('6x ' + BELT, [
    PLATE,
    '2x rubberworks:rubber'
  ]).heated().id('kubejs:belt_create_mixing_rubber')

  // =========================================================================
  // 2. MID-GAME : IMMERSIVE ENGINEERING (rendement 8x a 12x)
  // =========================================================================

  // Metal Press IE (JSON natif IE 1.21 : basePredicate + count, mold, result)
  event.custom({
    type: 'immersiveengineering:metal_press',
    energy: 2400,
    input: { basePredicate: { item: PLATE }, count: 1 },
    mold: 'immersiveengineering:mold_plate',
    result: { id: BELT, count: 8 }
  }).id('kubejs:belt_ie_metal_press')

  // Craft industriel : toile de chanvre IE + plaques + plaque infusee (12x)
  event.shaped('12x ' + BELT, [
    'FFF',
    'APA',
    'FFF'
  ], {
    F: 'immersiveengineering:hemp_fabric',
    A: PLATE,
    P: INFUSED
  }).id('kubejs:belt_ie_hemp_fabric')

  // =========================================================================
  // 3. LATE MID-GAME : MODERN INDUSTRIALIZATION (rendement 16x a 32x)
  // =========================================================================
  // Format MI : item_inputs[{item, amount}], item_outputs{item, amount}
  // (la probabilite est facultative et doit rester entre 0 et 1)

  // Packer MI (16x)
  event.custom({
    type: 'modern_industrialization:packer',
    eu: 4,
    duration: 100,
    item_inputs: [
      { item: PLATE, amount: 2 },
      { item: 'modern_industrialization:rubber_sheet', amount: 2 }
    ],
    item_outputs: { item: BELT, amount: 16 }
  }).id('kubejs:belt_mi_packer')

  // Assembler MI (32x)
  event.custom({
    type: 'modern_industrialization:assembler',
    eu: 8,
    duration: 120,
    item_inputs: [
      { item: PLATE, amount: 2 },
      { item: INFUSED, amount: 1 },
      { item: 'modern_industrialization:rubber_sheet', amount: 4 }
    ],
    item_outputs: { item: BELT, amount: 32 }
  }).id('kubejs:belt_mi_assembler')

  // =========================================================================
  // 4. END-GAME : MEKANISM (rendement 64x = 1 stack)
  // =========================================================================
  // mekanism:hdpe_pellet est un ITEM : il ne va donc pas dans le metallurgic infuser
  // (qui attend un type d'infusion). On utilise le Combiner : plaque + HDPE.
  event.custom({
    type: 'mekanism:combining',
    main_input: { item: PLATE, count: 1 },
    extra_input: { item: 'mekanism:hdpe_pellet', count: 40 },
    output: { id: BELT, count: 64 }
  }).id('kubejs:belt_mekanism_hdpe')
})
