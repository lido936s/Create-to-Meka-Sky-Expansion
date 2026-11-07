// Recettes complexes utilisant kubejs:andesite_infused et kubejs:porcelain_plate
// Branche 1.02 - NeoForge 21.1.238 / MC 1.21.1
ServerEvents.recipes(event => {

  // Helper : assemblage séquencé avec item transitoire
  const assemble = (output, input, transitional, steps, loops, id) => {
    event.recipes.create.sequenced_assembly(
      [Item.of(output)],
      input,
      steps(transitional)
    )
      .transitionalItem(transitional)
      .loops(loops)
      .id(id);
  };

  const C = event.recipes.create;

  // 1. DEPLOYER : casing + andesite infused + tube + fluide
  event.remove({ output: 'create:deployer' });
  assemble('create:deployer', 'create:andesite_casing', 'kubejs:incomplete_deployer', t => [
    C.deploying(t, [t, 'kubejs:andesite_infused']),
    C.deploying(t, [t, 'create:electron_tube']),
    C.filling(t, [t, Fluid.of('kubejs:molten_andesite_alloy', 100)]),
    C.pressing(t, t)
  ], 1, 'kubejs:sequenced/deployer_infused');

  // 2. MECHANICAL CRAFTER : brass casing + infused x2 + precision mechanism
  event.remove({ output: 'create:mechanical_crafter' });
  assemble('create:mechanical_crafter', 'create:brass_casing', 'kubejs:incomplete_mechanical_crafter', t => [
    C.deploying(t, [t, 'kubejs:andesite_infused']),
    C.deploying(t, [t, 'create:precision_mechanism']),
    C.deploying(t, [t, 'kubejs:porcelain_plate']),
    C.pressing(t, t)
  ], 2, 'kubejs:sequenced/mechanical_crafter_infused');

  // 3. PACKAGER : andesite casing + porcelain plate + infused
  event.remove({ output: 'create:packager' });
  assemble('create:packager', 'create:andesite_casing', 'kubejs:incomplete_packager', t => [
    C.deploying(t, [t, 'kubejs:porcelain_plate']),
    C.deploying(t, [t, 'kubejs:andesite_infused']),
    C.deploying(t, [t, 'create:iron_sheet']),
    C.filling(t, [t, Fluid.of('minecraft:water', 250)])
  ], 1, 'kubejs:sequenced/packager_infused');

  // 4. DISPLAY LINK : la plaque de porcelaine sert d'écran (item de départ)
  event.remove({ output: 'create:display_link' });
  assemble('create:display_link', 'kubejs:porcelain_plate', 'kubejs:incomplete_display_link', t => [
    C.deploying(t, [t, 'create:electron_tube']),
    C.deploying(t, [t, 'kubejs:andesite_infused']),
    C.filling(t, [t, Fluid.of('kubejs:molten_andesite_alloy', 50)])
  ], 1, 'kubejs:sequenced/display_link_porcelain');

});
