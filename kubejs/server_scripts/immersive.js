// remove recipes id immersiveengineering:crafting/cokebrick    
ServerEvents.recipes(event => {
event.remove({ id: 'immersiveengineering:crafting/cokebrick' })
});
// adding recipe for immersiveengineering:cokebrick
ServerEvents.recipes(event => {
event.shaped(
    Item.of('immersiveengineering:cokebrick', 8), // arg 1: output
    [
        'ACA',
        'CBC',
        'ADA'
], {
        // arg 2: the mapping
        C: 'exdeorum:compressed_sand',
        A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
        B: 'create:mechanical_mixer',
        D: 'minecraft:blast_furnace',
        }).id('lido/cokebrick') // id must be unique !
});