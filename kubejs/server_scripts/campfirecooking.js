// remove campfire cooking conflit with mod central heater > 'central_heater:burnable_campfire', 'central_heater:burnable_soul_campfire'
ServerEvents.recipes(event => {
    ['central_heater:burnable_campfire', 'central_heater:burnable_soul_campfire'].forEach(id => {
        if (Item.exists(id)) event.remove({ output: id });
    });
});
// Stick -> Torche sur feu de camp
ServerEvents.recipes(event => {
     event.campfireCooking(
        'minecraft:torch',
        'minecraft:stick'
    )
    .xp(0.5)
    .cookingTime(300) // 15 secondes

    .id('kubejs:stick_to_torch');

});


// Oak Wood -> Charbon de bois sur feu de camp
ServerEvents.recipes(event => {
     event.campfireCooking(
        'minecraft:charcoal',
        'minecraft:oak_wood'
    )
    .xp(0.5)
    .cookingTime(2400) // 120 secondes

    .id('kubejs:wood_to_charcoal');

});