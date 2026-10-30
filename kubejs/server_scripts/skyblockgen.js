// remove recipes id skyblock_resources:wooden_empty_generator_craft
ServerEvents.recipes(event => {
        event.remove({ id: 'skyblock_resources:wooden_empty_generator_craft' })
})
// adding recipe for skyblock_resources:wooden_empty_generator
ServerEvents.recipes(event => {
event.shaped(
    Item.of('skyblock_resources:wooden_empty_generator', 1), // arg 1: output
    [
        'AAA',
        'BCD',
        'AAA'
], {
        // arg 2: the mapping
        A: 'minecraft:stone_bricks',  //arg 3: the mapping object
        B: 'minecraft:water_bucket',
        C: 'ftbstuff:gold_cobblestone_generator',
        D: 'minecraft:lava_bucket',
        }).id('lido/wooden_empty_generator') // id must be unique !
});