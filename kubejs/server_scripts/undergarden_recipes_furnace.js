// Fonte dans le Virulent Mix (Lychee, NeoForge 1.21.1)
ServerEvents.recipes(event => {

  function virulentMelt(recipeId, input, output, count) {
  event.custom({
    type: "lychee:item_inside",
    item_in: [{ item: input }],
    block_in: { blocks: ["undergarden:virulent_mix"] },
    time: 27,
    post: [
      {
        type: "drop_item",
        id: output,
        count: count
      }
    ]
  }).id(recipeId);
}

  // --- Undergarden ---
  virulentMelt('kubejs:lychee_virulent_melting_raw_cloggrum',
    'undergarden:raw_cloggrum', 'undergarden:cloggrum_ingot', 2);

  virulentMelt('kubejs:lychee_virulent_melting_raw_froststeel',
    'undergarden:raw_froststeel', 'undergarden:froststeel_ingot', 2);

  virulentMelt('kubejs:lychee_virulent_melting_shard_utherium',
    'undergarden:utheric_shard', 'undergarden:utherium_crystal', 2);

  // --- Clayable ---
  virulentMelt('kubejs:lychee_virulent_melting_clay_iron_ore',
    'clayable:raw_clayed_iron', 'minecraft:iron_ingot', 4);

  virulentMelt('kubejs:lychee_virulent_melting_clay_copper_ore',
    'clayable:raw_clayed_copper', 'minecraft:copper_ingot', 15);

  virulentMelt('kubejs:lychee_virulent_melting_clay_coal_ore',
    'clayable:clay_coal_ore', 'minecraft:coal', 16);
});