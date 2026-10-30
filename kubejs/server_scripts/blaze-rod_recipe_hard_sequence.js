// adding sequenced assembly recipe for minecraft:blaze_rod from immersiveengineering:light_engineering and create:cinder_flour
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
        'minecraft:blaze_rod'
    ],  'immersiveengineering:light_engineering', [
		event.recipes.createFilling('immersiveengineering:light_engineering', ['immersiveengineering:light_engineering', Fluid.of('immersiveengineering:creosote', 1000)]),
		event.recipes.createPressing('immersiveengineering:light_engineering', 'immersiveengineering:light_engineering'),
        event.recipes.createDeploying('immersiveengineering:light_engineering', ['immersiveengineering:light_engineering', 'create:cinder_flour']),
    ]).transitionalItem('immersiveengineering:light_engineering',).loops(1)
})
