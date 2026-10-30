// havenpebbles:stone_pebble to havenpebbles:andesite_pebble

ServerEvents.recipes(event => {
    event.custom({
        type: "ae2:transform",

        circumstance: {
            type: "fluid",
            tag: "minecraft:water"
        },

        ingredients: [
            {
                item: "havenpebbles:stone_pebble"
            }
        ],

        result: {
            id: "havenpebbles:andesite_pebble",
            count: 1
        }
    })
})