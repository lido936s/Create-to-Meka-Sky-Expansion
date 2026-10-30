// const $KubeFluidType = Java.loadClass("dev.latvian.mods.kubejs.fluid.FluidTypeBuilder")
StartupEvents.registry("fluid", (event) => {

  event.create("molten_cobblestone")
    .displayName("Molten Cobblestone")
    .stillTexture("kubejs:block/molten_cobblestone_still")
    .flowingTexture("kubejs:block/molten_cobblestone_flow")
    .tint(0x6E6E6E)

  event.create("molten_andesite_alloy")
    .displayName("Molten Andesite Alloy")
    .stillTexture("kubejs:block/molten_andesite_alloy_still")
    .flowingTexture("kubejs:block/molten_andesite_alloy_flow")
    .tint(0xC4C0C0)

  event.create("molten_porcelain_clay")
    .displayName("Molten Porcelain Clay")
    .stillTexture("kubejs:block/molten_porcelain_clay_still")
    .flowingTexture("kubejs:block/molten_porcelain_clay_flow")
    .tint(0xD8D8D8)

  event.create("molten_carbon")
    .displayName("Molten Carbon")
    .stillTexture("kubejs:block/molten_carbon_still")
    .flowingTexture("kubejs:block/molten_carbon_flow")
    .tint(0x1C1C1C)

  event.create("liquid_redstone")
    .displayName("Liquid Redstone Infusion")
    .stillTexture("kubejs:block/liquid_redstone_still")
    .flowingTexture("kubejs:block/liquid_redstone_flow")
    .tint(0xB22222)

  event.create("molten_certus")
    .displayName("Molten Certus Quartz")
    .stillTexture("kubejs:block/molten_certus_still")
    .flowingTexture("kubejs:block/molten_certus_flow")
    .tint(0x7FD8E6)

  event.create("nether_star_fluid")
    .displayName("Nether Star Fluid")
    .stillTexture("kubejs:block/nether_star_fluid_still")
    .flowingTexture("kubejs:block/nether_star_fluid_flow")
    .tint(0x749493)

});

// Ce qui a été corrigé / amélioré :
//- Remplacement de `color()` + `bucketColor()` par `tint()` (style moderne KubeJS/Create)
//- Uniformisation du style du second exemple
//- Suppression de `.thick()` (souvent inutile ou dépendant de versions spécifiques)
//- Correction de la syntaxe globale (format plus propre et cohérent)
//- Ajout de cohérence dans les chaînes de noms (`"fluid"` au lieu de `'fluid'`)