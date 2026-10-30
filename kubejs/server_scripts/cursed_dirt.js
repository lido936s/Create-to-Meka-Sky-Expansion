// adding recipe for cursed earth
ServerEvents.recipes(event => {

    event.recipes.create.mechanical_crafting(
        '9x cursedearth:cursed_earth',
        [
            ' S ',
            'DND',
            ' O '
        ],
        {
            S: 'srgens:blazing_ore_gen',
            D: 'minecraft:dirt',
            N: 'extendedcrafting:nether_star_block',
            O: 'minecraft:obsidian'
        }
    )

});
// adding recipe for blessed earth from minecraft:dirt and minecraft:obsidian
ServerEvents.recipes(event => {

    event.recipes.create.mechanical_crafting(
        '9x cursedearth:blessed_earth',
        [
            ' S ',
            'DND',
            ' O '
        ],
        {
            S: 'srgens:blazing_ore_gen',
            D: 'minecraft:moss_block',
            N: 'extendedcrafting:nether_star_block',
            O: 'minecraft:obsidian'
        }
    )

});

