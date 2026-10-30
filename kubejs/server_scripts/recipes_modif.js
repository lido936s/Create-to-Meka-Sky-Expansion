// add recipe for 'kubejs:fire_starter'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('kubejs:fire_starter', 1), // arg 1: output
  [
    '  C',
    'ABA',
    ' A '
], {
    // arg 2: the mapping
    A: 'minecraft:flint',  //arg 3: the mapping object
    B: 'havenpebbles:stone_pebble',
    C: 'minecraft:stick',
}
);
});
// adding recipe for 'minecraft:campfire'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:campfire', 2), // arg 1: output
  [
    'AAA',
    'ABA',
    ' C '
], {
    // arg 2: the mapping
    A: 'minecraft:oak_log',  //arg 3: the mapping object
    B: 'minecraft:stick',
    C: 'kubejs:fire_starter',
}
);
});
// adding recipe for water condenser
ServerEvents.recipes(event => {
event.shaped(
  Item.of('watercondenser:watercondenser', 1), // arg 1: output
  [
    'ADA',
    'ECE',
    'FBF'
], {
    // arg 2: the mapping
    A: 'minecraft:oak_log',
    B: 'minecraft:furnace',  //arg 3: the mapping object
    C: 'minecraft:campfire',
    D: 'minecraft:oak_leaves',
    E: 'minecraft:cobblestone',
    F: 'minecraft:torch',
});
});
// adding recipe minecraft:campfire 
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:campfire', 1), // arg 1: output
  [
    ' C ',
    'CBC',
    'AAA'
], {
    // arg 2: the mapping
    A: 'minecraft:oak_log',  //arg 3: the mapping object
    B: 'minecraft:torch',
    C: 'minecraft:stick',
});
});
// adding recipe minecraft:smoker
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:smoker', 1), // arg 1: output
  [
    'ADA',
    'ACA',
    ' B '
], {
    // arg 2: the mapping
    A: 'minecraft:oak_log',
    B: 'minecraft:campfire',  //arg 3: the mapping object
    C: '#minecraft:coals',
    D: 'minecraft:stone_hoe',
});
});
// adding recipe exdeorum:porcelain_clay_ball
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:porcelain_clay_ball', 1), // arg 1: output
  [
    'ABC',
    '   ',
    '   '
], {
    // arg 2: the mapping
    A: 'minecraft:brick',
    B: 'minecraft:bone_meal',
    C: '#minecraft:coals',  //arg 3: the mapping object
}); 
});
// adding recipe exdeorum:unfired_porcelain_crucible
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:unfired_porcelain_crucible', 1), // arg 1: output
  [
    'A A',
    'A A',
    'ABA' 
], {
    // arg 2: the mapping
    A: 'exdeorum:porcelain_clay_ball',
    B: 'minecraft:cobblestone',  //arg 3: the mapping object
  
}); 
});
// adding recipe exdeorum:stone_hammer
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:stone_hammer', 1), // arg 1: output
  [
    ' B ',
    ' CB',
    'A  '
], {
    // arg 2: the mapping
    A: 'minecraft:stick',
    B: 'minecraft:cobblestone',
    C: 'minecraft:stone_pickaxe',  //arg 3: the mapping object
}); 
});
// adding recipe minecraft:furnace
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:furnace', 1), // arg 1: output
  [
    'AAA',
    'ABA',
    'ACA'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',
    B: 'minecraft:smoker',  //arg 3: the mapping object
    C: 'minecraft:campfire',
}); 
});
// adding recipe exdeorum:oak_sieve
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:oak_sieve', 1), // arg 1: output
  [
    'C C',
    'CBC',
    'A A'
], {
    // arg 2: the mapping
    A: 'minecraft:stick',
    B: 'minecraft:oak_fence',  //arg 3: the mapping object
    C: 'minecraft:oak_wood',
});
});
// adding recipe createsifter:string_mesh
ServerEvents.recipes(event => {
event.shaped(
  Item.of('createsifter:string_mesh', 1), // arg 1: output
  [
    'AAA',
    'ABA',
    'AAA'
], {
    // arg 2: the mapping
    A: '#c:fence_gates/wooden',  //arg 3: the mapping object
    B: 'minecraft:string',
}); 
});
// remove recipes exdeorum:crook
ServerEvents.recipes(event => {
event.remove({ output: 'exdeorum:crook' })
});
// adding recipe exdeorum:crook
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:crook', 1), // arg 1: output
  [
    '  B',
    ' A ',
    'A  '
], {
    // arg 2: the mapping
    A: 'minecraft:stick',
    B: 'minecraft:wooden_hoe',  //arg 3: the mapping object
});
});
// adding recipe exdeorum:string_mesh
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:string_mesh', 1), // arg 1: output
  [
    'AAA',
    'ABA',
    'AAA'
], {
    // arg 2: the mapping
    A: 'minecraft:white_wool',  //arg 3: the mapping object
    B: '#c:fence_gates/wooden',  //arg 3: the mapping object
}); 
});
// adding recipe woodenshears:wooden_shears
ServerEvents.recipes(event => {
event.shaped(
  Item.of('woodenshears:wooden_shears', 1), // arg 1: output
  [
    'A  ',
    'BA ',
    '   '
], {
    // arg 2: the mapping
    A: 'minecraft:oak_wood',  //arg 3: the mapping object
    B: 'minecraft:wooden_hoe',
}); 
});
// adding recipe 'ftbstuff:stone_cobblestone_generator'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('ftbstuff:stone_cobblestone_generator', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
    B: 'exdeorum:porcelain_water_bucket',
    C: 'minecraft:glass',
    D: 'exdeorum:porcelain_lava_bucket',
    E: 'exdeorum:porcelain_crucible',
});
});
// adding recipe 'ftbstuff:iron_cobblestone_generator'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('ftbstuff:iron_cobblestone_generator', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
    B: 'exdeorum:porcelain_water_bucket',
    C: 'minecraft:furnace',
    D: 'exdeorum:porcelain_lava_bucket',
    E: 'ftbstuff:stone_cobblestone_generator',
});
});
// adding recipe 'srgens:basic_ore_gen'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('srgens:basic_ore_gen', 1), // arg 1: output
  [
    'AEA',
    'ACA',
    'BDB'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
    B: 'minecraft:furnace',
    C: 'ftbstuff:iron_cobblestone_generator',
    D: 'exdeorum:porcelain_crucible',
    E: 'minecraft:iron_bars',
});
});
// remove recipes 'ftbstuff:gold_cobblestone_generator'
ServerEvents.recipes(event => {
event.remove({ output: 'ftbstuff:gold_cobblestone_generator' })
});
//  adding recipe 'ftbstuff:gold_cobblestone_generator'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('ftbstuff:gold_cobblestone_generator', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
    B: 'exdeorum:porcelain_water_bucket',
    C: 'ftbstuff:iron_cobblestone_generator',
    D: 'exdeorum:porcelain_lava_bucket',
    E: 'srgens:refined_ore_gen',
});
});
// adding recipe 'brickfurnace:brick_furnace'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('brickfurnace:brick_furnace', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'minecraft:brick',  //arg 3: the mapping object
    B: 'minecraft:brick',
    C: 'minecraft:furnace',
    D: 'minecraft:stone_bricks',
    E: 'minecraft:campfire',
});
});
// adding recipe 'exdeorum:compressed_sand'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:compressed_sand', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'minecraft:sand',  //arg 3: the mapping object
    B: 'minecraft:sand',
    C: 'minecraft:sand',
    D: 'minecraft:sand',
    E: 'minecraft:sand',
});
});
// adding recipe 'exdeorum:compressed_cobblestone'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:compressed_cobblestone', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'minecraft:cobblestone',  //arg 3: the mapping object
    B: 'minecraft:cobblestone',
    C: 'minecraft:cobblestone',
    D: 'minecraft:cobblestone',
    E: 'minecraft:cobblestone',
});
});
// adding recipe 'srgens:basic_fisher'
ServerEvents.recipes(event => {
event.shaped(
  Item.of('srgens:basic_fisher', 1), // arg 1: output
  [
    'AAA',
    'BCD',
    'AEA'
], {
    // arg 2: the mapping
    A: 'exdeorum:compressed_cobblestone',  //arg 3: the mapping object
    B: 'minecraft:water_bucket',
    C: 'srgens:basic_ore_gen',
    D: 'minecraft:fishing_rod',
    E: 'minecraft:stone_hoe',
});
});