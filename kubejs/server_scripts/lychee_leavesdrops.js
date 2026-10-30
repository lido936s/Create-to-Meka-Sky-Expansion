ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:block_interacting",
    item_in: { item: "exdeorum:crook" },
    block_in: { blocks: "#minecraft:leaves" },
    contextual: [{ type: "is_sneaking" }],
    post: [
      {
        type: "random",
        entries: [
          { type: "drop_item", id: "exdeorum:silkworm", contextual: [{ type: "chance", chance: 0.5 }] },
          { type: "drop_item", id: "minecraft:stick", contextual: [{ type: "chance", chance: 0.20 }] },
          { type: "drop_item", id: "minecraft:oak_leaves", contextual: [{ type: "chance", chance: 0.10 }] }
        ]
      },
      { type: "damage_item" }
    ]
  });
});
