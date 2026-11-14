ServerEvents.recipes(event => {
  // ID vérifié avec F3+H après redémarrage
  const PORCELAIN = 'kubejs:porcelain_plate'

  // 1. Immersive Engineering : 4x Heavy Engineering Block
  event.shaped('4x immersiveengineering:heavy_engineering', [
    'ISI',
    'PBP',
    'ISI'
  ], {
    I: '#c:ingots/steel',
    S: 'kubejs:andesite_infused',
    P: 'immersiveengineering:component_steel',
    B: PORCELAIN
  }).id('kubejs:heavy_engineering_boosted')

  // 2. Immersive Engineering : 4x Light Engineering Block
  event.shaped('4x immersiveengineering:light_engineering', [
    'ACA',
    'CBC',
    'ACA'
  ], {
    A: 'kubejs:andesite_infused',
    C: 'immersiveengineering:component_iron',
    B: 'create:andesite_casing'
  }).id('kubejs:light_engineering_boosted')

  // 3. Create : 2x Precision Mechanism
  event.recipes.create.mechanical_crafting('2x create:precision_mechanism', [
    ' C ',
    'APA',
    ' C '
  ], {
    C: 'create:cogwheel',
    A: 'kubejs:andesite_infused',
    P: PORCELAIN
  }).id('kubejs:precision_mechanism_porcelain')

  // 4. Create Addition : Alternator
  event.recipes.create.mechanical_crafting('createaddition:alternator', [
    '  A  ',
    ' ISI ',
    'ISRSI',
    ' IPI '
  ], {
    A: 'create:andesite_alloy',
    I: 'kubejs:andesite_infused',
    S: 'createaddition:copper_spool',
    R: 'createaddition:iron_rod',
    P: PORCELAIN
  }).id('kubejs:alternator_porcelain')

  // 5. Modern Industrialization : 2x Bronze Drill
  event.recipes.create.mechanical_crafting('2x modern_industrialization:bronze_drill', [
    ' B ',
    'BAB',
    'APA'
  ], {
    B: '#c:plates/bronze',
    A: 'kubejs:andesite_infused',
    P: PORCELAIN
  }).id('kubejs:bronze_drill_porcelain')
})