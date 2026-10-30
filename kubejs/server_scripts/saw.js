// Remove all recipes where output is create:mechanical_saw
ServerEvents.recipes(event => { 
event.remove({ output: 'create:mechanical_saw' })
});
// adding recipe create:mechanical_saw
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create:mechanical_saw', 1), // arg 1: output 
    [
        ' D ',
        'ACA',
        'ABA' 
], {
        // arg 2: the mapping
        A: '#c:ingots/iron',  //arg 3: the mapping object
        B: 'create:andesite_casing',
        C: '#c:plates/iron',
        D: 'sawmill:sawmill',
   }).id('lido/mechanical_saw') // id must be unique !
});
// remove recipes stonecutter
ServerEvents.recipes(event => {
event.remove({ output: 'minecraft:stonecutter' })
});
// adding recipe for stonecutter
ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:stonecutter', 1), // arg 1: output
  [
    'CAC',
    'ABA',
    'ADA'
], {
    // arg 2: the mapping
    A: 'create:andesite_alloy',  //arg 3: the mapping object
    B: 'create:copper_casing',
    C: '#c:ingots/iron',
    D: 'sawmill:sawmill',
   }).id('lido/stonecutter') // id must be unique !
});
// change recipe for universal_sawmill and corail_woodcutter
ServerEvents.recipes(event => {
  event.replaceInput(
    { mod: 'corail_woodcutter' },
    'minecraft:iron_ingot',
    'sawmill:sawmill'
  )
});
ServerEvents.recipes(event => {
  event.replaceInput(
    { mod: 'sawmill' },
    'minecraft:iron_ingot',
    'minecraft:stone_axe'
  )
});

