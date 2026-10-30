ServerEvents.recipes(event => {

    event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:wooden_pickaxe"
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
                rolls: {
                    min: 1,
                    max: 4
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:stone_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
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