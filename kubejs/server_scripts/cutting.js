// adding recipe for cutting exdeorum:stone_pebble from minecraft:cobblestone
ServerEvents.recipes((event) => {
  event.recipes.create.cutting(
    "4x exdeorum:stone_pebble",
    "minecraft:cobblestone",
  );
});

// Génération dynamique de l'écorçage des bûches au Déployeur
ServerEvents.recipes((event) => {
  Ingredient.of("#minecraft:logs").stacks.forEach((stack) => {
    const id = String(stack.id);

    // SÉCURITÉ : Si la bûche est DÉJÀ écorcée, on l'ignore pour éviter les doublons (stripped_stripped)
    if (id.includes("stripped_")) return;

    let stripped = null;

    if (id.endsWith("_log")) {
      stripped = id.replace(/:(.+)_log$/, ":stripped_$1_log");
    } else if (id.endsWith("_stem")) {
      stripped = id.replace(/:(.+)_stem$/, ":stripped_$1_stem");
    } else {
      return;
    }

    // En 1.21+, on s'assure que l'item cible existe avant de créer la recette
    if (Item.of(stripped).id === "minecraft:air") return;

    // Syntaxe Create Deploying officielle pour KubeJS 1.21.1
    event.recipes.create.deploying(
      [Item.of(stripped), Item.of("farmersdelight:tree_bark")],
      [
        Item.of(id), // L'objet à traiter (ex: minecraft:oak_log)
        Ingredient.of("#minecraft:axes"), // L'outil requis pour le déployeur
      ],
    );
  });
});
