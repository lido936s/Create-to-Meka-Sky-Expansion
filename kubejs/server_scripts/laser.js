// adding recipe for vintageimprovements:laser_item
ServerEvents.recipes(event => {
event.shaped(
    Item.of('vintageimprovements:laser_item', 1), // arg 1: output
    [
        'DED',
        'ABA',
        'ACA' 
], {
        // arg 2: the mapping
        A: 'immersiveengineering:wirecoil_steel', 
        B: 'minecraft:gold_block',
        C: 'immersiveengineering:component_electronic_adv',  //arg 3: the mapping object
        D: 'minecraft:glass',
        E : 'create:electron_tube',  
}); 
});