
// andesite_machine and copper_machine and brass_machine are the upgrade items

// andesite_machine
ServerEvents.recipes(event => {
event.smithing(
  'create:millstone',                     // arg 1: output
  'create:shaft', // arg 2: the smithing template
  'kubejs:kinetic_mechanism',                          // arg 3: the item to be upgraded
  'kubejs:andesite_machine'                            // arg 4: the upgrade item
)
});

// copper_machine
ServerEvents.recipes(event => {
event.smithing(
  '2x create:fluid_tank',                     // arg 1: output
  '#c:barrels', // arg 2: the smithing template
  'kubejs:sealed_mechanism',                          // arg 3: the item to be upgraded
  'kubejs:copper_machine'                            // arg 4: the upgrade item
),
event.smithing(
  '8x create:fluid_pipe',                     // arg 1: output
  'create:cogwheel', // arg 2: the smithing template
  'kubejs:sealed_mechanism',                          // arg 3: the item to be upgraded
  'minecraft:bucket'                            // arg 4: the upgrade item
),
event.smithing(
  'create:whisk',                     // arg 1: output
  'minecraft:iron_block', // arg 2: the smithing template
  'kubejs:sealed_mechanism',                          // arg 3: the item to be upgraded
  'kubejs:copper_machine'                            // arg 4: the upgrade item
),
event.smithing(
  'create:brass_hand',                     // arg 1: output
  'create:cogwheel', // arg 2: the smithing template
  'create:brass_nugget',                          // arg 3: the item to be upgraded
  'kubejs:copper_machine'                            // arg 4: the upgrade item
),
event.smithing(
  '4x create:steam_engine',                     // arg 1: output
  'create:cogwheel', // arg 2: the smithing template
  'create:water_wheel',                          // arg 3: the item to be upgraded
  'kubejs:copper_machine'                            // arg 4: the upgrade item
)
});

// brass_machine
ServerEvents.recipes(event => {
event.smithing(
  'srgens:basic_ore_gen',                     // arg 1: output
  'vintageimprovements:vacuum_chamber', // arg 2: the smithing template
  'create:precision_mechanism',                          // arg 3: the item to be upgraded
  'kubejs:brass_machine'                            // arg 4: the upgrade item
),
event.smithing(
  'create_simple_generator:stress_generator',                     // arg 1: output
  'create:propeller', // arg 2: the smithing template
  'create:electron_tube',                          // arg 3: the item to be upgraded
  'kubejs:brass_machine'                            // arg 4: the upgrade item
)
});

// removing recipes 
// create_simple_generator:stress_generator
ServerEvents.recipes(event => {
event.remove({ output: 'create_simple_generator:stress_generator' })
});
