// remove easy_villagers:trader
ServerEvents.recipes(event => {
event.remove({ output: 'easy_villagers:trader' })
});
// adding recipe for easy_villagers:trader
ServerEvents.recipes(event => {
event.shaped(
    Item.of('easy_villagers:trader', 1), // arg 1: output
    [
        'AEA',
        'ADA',
        'CBC'
], {
        // arg 2: the mapping
        A: '#forge:glass_panes/colorless',  //arg 3: the mapping object
        B: 'minecraft:white_wool',
        C: 'minecraft:iron_ingot',
        D: 'srgens:basic_ore_gen',
        E: 'create:electron_tube',
}); 
});
// remove easy_villagers:iron_farm
ServerEvents.recipes(event => {
event.remove({ output: 'easy_villagers:iron_farm' })
});
// adding recipe for easy_villagers:iron_farm
ServerEvents.recipes(event => {
event.shaped(
    Item.of('easy_villagers:iron_farm', 1), // arg 1: output
    [
        'AEA',
        'ADA',
        'CBC'
], {
        // arg 2: the mapping
        A: '#forge:glass_panes/colorless',  //arg 3: the mapping object
        B: 'minecraft:smooth_stone',
        C: 'minecraft:iron_ingot',
        D: 'srgens:basic_ore_gen',
        E: 'ironfurnaces:copper_furnace',
}); 
});

// Add recipe for easy_villagers:villager
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('easy_villagers:villager', {
            'easy_villagers:villager': {}
        }),
        [
            'ECE',
            'CBC',
            'EDE'
        ],
        {
            E: 'create:brass_casing',
            C: 'srgens:refined_ore_gen',
            B: 'minecraft:emerald_block',
            D: 'easy_villagers:trader'
        }
    )
})