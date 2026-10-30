// remove recipes pipez:fluid_pipe
ServerEvents.recipes(event => {
event.remove({ output: 'pipez:fluid_pipe' })
});
// adding recipe for pipez:fluid_pipe
ServerEvents.recipes(event => {
event.shaped(
    Item.of('pipez:fluid_pipe', 16), // arg 1: output
    [
        'AAA',
        'BCB',
        'AAA'
], {
        // arg 2: the mapping
        A: 'minecraft:iron_ingot',
        B: 'create:mechanical_pump',  //arg 3: the mapping object
        C: 'create:electron_tube',
        }).id('lido/fluid_pipe') // id must be unique !
});
// remove recipes pipez:item_pipe
ServerEvents.recipes(event => {
event.remove({ output: 'pipez:item_pipe' })
});
// adding recipe for pipez:item_pipe
ServerEvents.recipes(event => {
event.shaped(
    Item.of('pipez:item_pipe', 16), // arg 1: output
    [
        'AAA',
        'BCB',
        'AAA'
], {
        // arg 2: the mapping
        A: 'create:brass_nugget',
        B: 'create:deployer',  //arg 3: the mapping object
        C: 'create:electron_tube',
        }).id('lido/item_pipe') // id must be unique !
});

// remove recipes pipez:energy_pipe
ServerEvents.recipes(event => {
event.remove({ output: 'pipez:energy_pipe' })
});
// adding sequenced assembly recipe for pipez:energy_pipe from create:fluid_pipe and create:electron_tube and minecraft:redstone and vintage:laser_cutting
// kubejs/server_scripts/energy_pipe.js
ServerEvents.recipes(event => {
  const incomplete = 'kubejs:incomplete_energy_pipe'

  event.recipes.create.sequenced_assembly(
    [Item.of('pipez:energy_pipe', 8)],
    'create:fluid_pipe',
    [
      event.recipes.create.pressing(incomplete, incomplete),
      event.recipes.create.deploying(incomplete, [incomplete, 'create:electron_tube']),
      event.recipes.create.deploying(incomplete, [incomplete, 'minecraft:redstone']),
      event.recipes.createFilling(incomplete, [incomplete, Fluid.of('immersiveengineering:redstone_acid', 25)]),
    ]
  )
  .transitionalItem(incomplete)
  .loops(1)
  .id('kubejs:sequenced/energy_pipe')
})

