// Recettes complexes utilisant ftbstuff:tempered_jar et ftbstuff:auto_processing_block
// Branche 1.02 - NeoForge 21.1.238 / MC 1.21.1
ServerEvents.recipes(event => {

  const C = event.recipes.create;

  const assemble = (output, input, transitional, steps, loops, id) => {
    C.sequenced_assembly([Item.of(output)], input, steps(transitional))
      .transitionalItem(transitional)
      .loops(loops)
      .id(id);
  };

  // 1. BASIN : le tempered jar est la cuve, doublée de porcelaine
  event.remove({ output: 'create:basin' });
  assemble('create:basin', 'ftbstuff:tempered_jar', 'kubejs:incomplete_basin', t => [
    C.deploying(t, [t, 'kubejs:porcelain_plate']),
    C.filling(t, [t, Fluid.of('kubejs:molten_andesite_alloy', 100)]),
    C.deploying(t, [t, 'create:andesite_alloy']),
    C.pressing(t, t)
  ], 1, 'kubejs:sequenced/basin_tempered_jar');

  // 2. ITEM DRAIN : copper casing + tempered jar + grille de fer
  event.remove({ output: 'create:item_drain' });
  assemble('create:item_drain', 'create:copper_casing', 'kubejs:incomplete_item_drain', t => [
    C.deploying(t, [t, 'ftbstuff:tempered_jar']),
    C.deploying(t, [t, 'create:iron_sheet']),
    C.filling(t, [t, Fluid.of('minecraft:water', 250)]),
    C.pressing(t, t)
  ], 1, 'kubejs:sequenced/item_drain_tempered_jar');

  // 3. MECHANICAL ARM : bloc de traitement automatique + mécanismes
  event.remove({ output: 'create:mechanical_arm' });
  assemble('create:mechanical_arm', 'create:brass_casing', 'kubejs:incomplete_mechanical_arm', t => [
    C.deploying(t, [t, 'ftbstuff:auto_processing_block']),
    C.deploying(t, [t, 'create:precision_mechanism']),
    C.deploying(t, [t, 'kubejs:andesite_infused']),
    C.pressing(t, t)
  ], 2, 'kubejs:sequenced/mechanical_arm_auto_processing');

  // 4. SMART CHUTE : chute + bloc de traitement automatique + circuit
  event.remove({ output: 'create:smart_chute' });
  assemble('create:smart_chute', 'create:chute', 'kubejs:incomplete_smart_chute', t => [
    C.deploying(t, [t, 'create:electron_tube']),
    C.deploying(t, [t, 'ftbstuff:auto_processing_block']),
    C.deploying(t, [t, 'create:brass_sheet']),
    C.pressing(t, t)
  ], 1, 'kubejs:sequenced/smart_chute_auto_processing');

});
