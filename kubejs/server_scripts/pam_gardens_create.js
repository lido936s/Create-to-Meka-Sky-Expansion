// kubejs/server_scripts/pam_gardens_create.js
// Gardens de Pam's HarvestCraft 2 via Create : 1 mixing + 1 sequenced_assembly par biome
// (Create 6 / NeoForge 1.21.1, compatible Rhino : pas de clés calculées)

ServerEvents.recipes(event => {

  const TRANSITIONAL = 'kubejs:incomplete_garden';

  const fl = (fluid, amount) => ({ type: "neoforge:single", fluid: fluid, amount: amount });
  const inc = () => ({ item: TRANSITIONAL });
  const incResult = () => ({ id: TRANSITIONAL, count: 1 });

  // Trouve l'ID réel du garden (avec ou sans underscore)
  const gardenId = name => [`pamhc2crops:${name}garden`, `pamhc2crops:${name}_garden`]
    .find(id => Item.exists(id));

  // ---------- SUBSTRAT (mixing, chauffé) ----------
  event.custom({
    type: "create:mixing",
    heat_requirement: "heated",
    ingredients: [
      { item: "minecraft:dirt" },
      { item: "minecraft:dirt" },
      { item: "minecraft:bone_meal" },
      { item: "minecraft:rotten_flesh" },
      fl("minecraft:water", 250)
    ],
    results: [ { id: "minecraft:rooted_dirt", count: 1 } ]
  }).id('kubejs:create/mixing/organic_substrate_base');

  // ---------- GARDENS (sequenced assembly) ----------
  const gardens = [
    { name: "arid",     fluid: "minecraft:lava",  plant: "minecraft:cactus",           catalyst: "minecraft:red_sand" },
    { name: "frost",    fluid: "minecraft:water", plant: "minecraft:snowball",         catalyst: "minecraft:ice" },
    { name: "shaded",   fluid: "minecraft:water", plant: "minecraft:dark_oak_sapling", catalyst: "minecraft:brown_mushroom" },
    { name: "soggy",    fluid: "minecraft:water", plant: "minecraft:lily_pad",         catalyst: "minecraft:clay_ball" },
    { name: "tropical", fluid: "minecraft:water", plant: "minecraft:bamboo",           catalyst: "minecraft:cocoa_beans" },
    { name: "windy",    fluid: "minecraft:water", plant: "minecraft:short_grass",      catalyst: "minecraft:feather" }
  ];

  gardens.forEach(g => {
    const out = gardenId(g.name);
    if (!out) {
      console.warn(`[pam_gardens] ID introuvable pour le garden ${g.name}, recette ignorée`);
      return;
    }

    event.custom({
      type: "create:sequenced_assembly",
      ingredient: { item: "minecraft:rooted_dirt" },
      transitional_item: incResult(),
      loops: 1,
      results: [
        { id: out, count: 1 },
        // sous-produit possible (chance 20 %) : retiré si tu n'en veux pas
        { id: "minecraft:rooted_dirt", count: 1, chance: 0.2 }
      ],
      sequence: [
        // 1. Imprégnation par le fluide du biome
        {
          type: "create:filling",
          ingredients: [ inc(), fl(g.fluid, 250) ],
          results: [ incResult() ]
        },
        // 2. Plantation de l'espèce du biome
        {
          type: "create:deploying",
          ingredients: [ inc(), { item: g.plant } ],
          results: [ incResult() ]
        },
        // 3. Catalyseur propre au biome
        {
          type: "create:deploying",
          ingredients: [ inc(), { item: g.catalyst } ],
          results: [ incResult() ]
        },
        // 4. Compactage final
        {
          type: "create:pressing",
          ingredients: [ inc() ],
          results: [ incResult() ]
        }
      ]
    }).id(`kubejs:create/sequenced/${g.name}_garden`);
  });
});
