// ==========================================
// RECETTES FINALES DE FIN DE JEU (1.21.1 - NeoForge)
// ==========================================
ServerEvents.recipes((event) => {
  // 1. SUPPRESSION DES ANCIENNES RECETTES
  event.remove({ output: "#botanypots:all_botany_pots" });

  // Déclaration des singularités avec le composant exact "extendedcrafting:singularity_id"
  let singMotor = Item.of("extendedcrafting:singularity", { "extendedcrafting:singularity_id": "extendedcrafting:electric_motor" });
  let singBlaze = Item.of("extendedcrafting:singularity", { "extendedcrafting:singularity_id": "extendedcrafting:blazing" });
  let singCake  = Item.of("extendedcrafting:singularity", { "extendedcrafting:singularity_id": "extendedcrafting:blaze_cake" });
  let singTerra = Item.of("extendedcrafting:singularity", { "extendedcrafting:singularity_id": "extendedcrafting:terracotta" });
  let singCrops = Item.of("extendedcrafting:singularity", { "extendedcrafting:singularity_id": "extendedcrafting:crops" });

  // 2. RECETTE : CREATIVE MOTOR
  event.recipes.extendedcrafting
    .shaped_table(
      Item.of("create:creative_motor"),
      [
        "ABCDCBA",
        "BEFGFEB",
        "CFHIHFC",
        "DGJKJGD",
        "CFHIHFC",
        "BEFGFEB",
        "ABCDCBA",
      ],
      {
        A: "create:precision_mechanism",
        B: "immersiveengineering:capacitor_hv",
        C: "createaddition:electric_motor",
        D: singMotor,
        E: "mekanism:ultimate_induction_cell",
        F: "extendedcrafting:the_ultimate_ingot",
        G: "modern_industrialization:quantum_circuit",
        H: "create:creative_blaze_cake",
        I: "extendedcrafting:ultimate_singularity",
        J: "createaddition:alternator",
        K: "megacells:cell_component_256m",
      },
    )
    .id("kubejs:creative_motor_table");

  // 3. RECETTE : CREATIVE BLAZE CAKE
  event.recipes.extendedcrafting
    .shaped_table(
      Item.of("create:creative_blaze_cake"),
      [
        "ABCDCBA",
        "BEFGFEB",
        "CFHIHFC",
        "DGJKJGD",
        "CFHIHFC",
        "BEFGFEB",
        "ABCDCBA",
      ],
      {
        A: "create:blaze_cake",
        B: "create:precision_mechanism",
        C: "modern_industrialization:quantum_circuit",
        D: singBlaze,
        E: "mekanism:ultimate_induction_cell",
        F: "createaddition:electric_motor",
        G: "minecraft:nether_star",
        H: "extendedcrafting:ultimate_singularity",
        I: singCake,
        J: "mekanism:qio_drive_supermassive",
        K: "megacells:cell_component_256m",
      },
    )
    .id("kubejs:creative_blaze_cake");

  // 4. RECETTE : CREATIVE HOPPER BOTANY POT
  event.recipes.extendedcrafting
    .shaped_table(
      Item.of("botanypotstiers:mega_terracotta_hopper_botany_pot"),
      [
        "ABCDCBA",
        "BEFGFEB",
        "CFHIHFC",
        "DGJKJGD",
        "CFHIHFC",
        "BEFGFEB",
        "ABCDCBA",
      ],
      {
        A: "botanypotstiers:ultra_terracotta_hopper_botany_pot",
        B: "create:precision_mechanism",
        C: "modern_industrialization:quantum_circuit",
        D: singTerra,
        E: "mekanism:ultimate_induction_cell",
        F: "extendedcrafting:the_ultimate_ingot",
        G: "minecraft:nether_star",
        H: "extendedcrafting:ultimate_singularity",
        I: singCrops,
        J: "mekanism:qio_drive_supermassive",
        K: "extendedcrafting:the_ultimate_catalyst",
      },
    )
    .id("kubejs:creative_hopper_botany_pot");
});
