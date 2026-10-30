ServerEvents.recipes(event => {
  event.custom({
    type: "lychee:block_interacting",
    item_in: {
      item: "minecraft:stone_hoe"
    },
    block_in: {
      blocks: [
        "minecraft:dirt"
      ]
    },
    contextual: [
      {
        type: "is_sneaking"
      }
    ],
    post: [
      {
        type: "random",
        entries: [
          {
            type: "drop_item",
            id: "minecraft:oak_sapling",
            contextual: {
              type: "chance",
              chance: 0.1
            }
          },
          {
            type: "drop_item",
            id: "minecraft:spruce_sapling",
            contextual: {
              type: "chance",
              chance: 0.1
            }
          },
          {
            type: "drop_item",
            id: "minecraft:birch_sapling",
            contextual: {
              type: "chance",
              chance: 0.1
            }
          },
          {
            type: "drop_item",
            id: "minecraft:jungle_sapling",
            contextual: {
              type: "chance",
              chance: 0.1
            }
          }
        ]
      },
      {
        type: "damage_item"
      }
    ]
  });
});