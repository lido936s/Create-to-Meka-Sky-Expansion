console.log('Suppression des recipes');

ServerEvents.recipes(event => {

    const itemsToRemove = [
        'watercondenser:watercondenser',
        'minecraft:smoker',
        'minecraft:furnace',
        'minecraft:campfire',
        'exdeorum:porcelain_clay_ball',
        'exdeorum:oak_sieve',
        'exdeorum:stone_hammer',
        'exdeorum:string_mesh',
        'createsifter:string_mesh',
        'woodenshears:wooden_shears',
        'srgens:basic_ore_gen',
        'srgens:refined_ore_gen',
        'srgens:advanced_ore_gen',
        'srgens:elite_ore_gen',
        'srgens:ultimate_ore_gen',
        'ftbstuff:iron_cobblestone_generator',
        'ftbstuff:gold_cobblestone_generator',
        'ftbstuff:diamond_cobblestone_generator',
        'create:andesite_alloy',
        'brickfurnace:brick_furnace',
        'ftbstuff:stone_cobblestone_generator',
        'srgens:basic_ore_gen',
        'exdeorum:unfired_porcelain_crucible',
        '#ftbstuff:water_strainer',
        'create:blaze_cake',
        'modern_industrialization:bronze_machine_casing',
        'havenanimalseeds:villager_seed',

    ];

    itemsToRemove.forEach(item => {
        event.remove({ output: item });
    });

});