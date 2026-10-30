// remove recipes steel_casing
ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:steel_casing' })
});

// adding sequenced assembly recipe for mekanism:steel_casing

ServerEvents.recipes(event => {

  const transitional = 'kubejs:incomplete_rs_engineering'

  event.recipes.createSequencedAssembly(
    ['mekanism:steel_casing'],
    'immersiveengineering:rs_engineering',
    [
      event.recipes.createDeploying(transitional, [transitional, 'create:electron_tube']),

      event.recipes.createFilling(transitional, [
        transitional,
        Fluid.of('immersiveengineering:redstone_acid', 50)
      ]),

      event.recipes.createDeploying(transitional, [transitional, 'immersiveengineering:light_engineering']),

      event.recipes.createDeploying(transitional, [transitional, 'vintageimprovements:redstone_module']),

      event.recipes.createDeploying(transitional, [transitional, 'create:precision_mechanism']),

      event.recipes.createDeploying(transitional, [transitional, 'create_better_motors:lava_tube'])
    ]
  )
  .transitionalItem(transitional)
  .loops(1)

})
