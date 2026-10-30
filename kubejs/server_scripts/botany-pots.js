// Remove all Botany Pots and Hopper Botany Pots and addons botanypotstiers recipes
ServerEvents.recipes(event => {

  // 🔥 Supprime les crafts des pots Botany Pots (toutes variantes)
  event.remove({ output: 'botanypots:terracotta_botany_pot' });

  // 🔥 Si ton modpack utilise aussi les versions décoratives / avancées :
  event.remove({ output: 'botanypots:terracotta_hopper_botany_pot' });

  // 🔥 Supprime les crafts des pots Botany Pots (toutes variantes)
  event.remove({ output: 'botanypots:all_botany_pots' });
  
});

// add recipes shaped for botanypots:terracotta_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypots:terracotta_botany_pot', 1), // arg 1: output
  [
    'AEA',
    'ACA',
    'BDB'
], {
    // arg 2: the mapping
    A: 'minecraft:terracotta',  //arg 3: the mapping object
    B: 'exdeorum:porcelain_clay_ball',
    C: 'minecraft:decorated_pot',
    D: 'srgens:basic_ore_gen',
    E: 'minecraft:dirt',
}); 
});
// add recipes shaped for botanypots:terracotta_hopper_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypots:terracotta_hopper_botany_pot', 1), // arg 1: output
  [
    ' A ',
    ' B ',
    ' C '
], {
    // arg 2: the mapping
    A: 'minecraft:chest',  //arg 3: the mapping object
    B: 'minecraft:hopper',
    C: 'botanypots:terracotta_botany_pot',
});
});
// add recipes shaped for botanypotstiers:elite_terracotta_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypotstiers:elite_terracotta_botany_pot', 1), // arg 1: output
  [
    'AEA',
    'ACA',
    'BDB'
], {
    // arg 2: the mapping
    A: 'minecraft:terracotta',  //arg 3: the mapping object
    B: 'exdeorum:porcelain_clay_ball',
    C: 'botanypots:terracotta_botany_pot',
    D: 'srgens:basic_ore_gen',
    E: 'minecraft:dirt',
}); 
});
// add recipes shaped for botanypotstiers:elite_terracotta_hopper_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot', 1), // arg 1: output
  [
    ' A ',
    ' B ',
    ' C '
], {
    // arg 2: the mapping
    A: 'minecraft:chest',  //arg 3: the mapping object
    B: 'minecraft:hopper',
    C: 'botanypotstiers:elite_terracotta_botany_pot',
});
});
// add recipes shaped for botanypotstiers:ultra_terracotta_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypotstiers:ultra_terracotta_botany_pot', 1), // arg 1: output
  [
    'AEA',
    'ACA',
    'BDB'
], {
    // arg 2: the mapping
    A: 'minecraft:terracotta',  //arg 3: the mapping object
    B: 'extendedcrafting:nether_star_block',
    C: 'botanypotstiers:elite_terracotta_botany_pot',
    D: 'srgens:refined_ore_gen',
    E: 'minecraft:dirt',
}); 
});
// add recipes shaped for botanypotstiers:ultra_terracotta_hopper_botany_pot
ServerEvents.recipes(event => {
event.shaped(
  Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot', 1), // arg 1: output
  [
    ' A ',
    ' B ',
    ' C '
], {
    // arg 2: the mapping
    A: 'minecraft:chest',  //arg 3: the mapping object
    B: 'minecraft:hopper',
    C: 'botanypotstiers:ultra_terracotta_botany_pot',
});
});
