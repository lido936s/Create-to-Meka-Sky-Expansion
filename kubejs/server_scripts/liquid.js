// Adding recipe for molten cobblestone from 4 cobblestone in a mixer
ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                type: "neoforge:compound",
                ingredients: [
                    {
                        item: "exdeorum:compressed_cobblestone"
                    }
                ],
                amount: 4
            }
        ],
        results: [
            {
                amount: 1000,
                id: "kubejs:molten_cobblestone"
            }
        ]
    })
});

// Adding recipe for liquid redstone from 4 redstone + copper rod
ServerEvents.recipes(event => {
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            {
                item: "minecraft:redstone",
                count: 4
            },
            {
                item: "modern_industrialization:copper_rod",
            }
        ],
        results: [
            {
                amount: 500,
                id: "kubejs:liquid_redstone"
            }
        ]
    })
});
