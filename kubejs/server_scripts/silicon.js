
// remove recipes ae2:silicon
ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:silicon' })
  event.remove({ id: 'enderio:smelting/ae2/smelting/silicon_from_certus_quartz_dust' })
});
// adding sequenced assembly recipe for ae2:silicon
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'ae2:silicon',
],  'ae2:certus_quartz_crystal', [
    event.recipes.createPressing('ae2:certus_quartz_crystal', 'ae2:certus_quartz_crystal'),
    event.recipes.createFilling('ae2:certus_quartz_crystal', ['ae2:certus_quartz_crystal', Fluid.of('rubberworks:resin', 10)]),
    event.recipes.createDeploying('ae2:certus_quartz_crystal', ['ae2:certus_quartz_crystal', 'ae2:certus_quartz_dust']),
    event.recipes.createFilling('ae2:certus_quartz_crystal', ['ae2:certus_quartz_crystal', Fluid.of('minecraft:water', 25)]),
]).transitionalItem('ae2:certus_quartz_crystal',).loops(1)
});

// certus_quartz_dust factory

// remove recipes ae2:certus_quartz_dust
ServerEvents.recipes(event => {
  event.remove({ output: 'ae2:certus_quartz_dust' })
});
// add recipes compressing for ae2:certus_quartz_dust
ServerEvents.recipes(event => {
event.recipes.rubberworksCompressing(Item.of("ae2:certus_quartz_dust", 2), Fluid.of("kubejs:molten_certus", 500)).heated()
});

// Create : Milling → Silicon
ServerEvents.recipes(event => {
    event.recipes.create.milling(
        'ae2:silicon',
        'minecraft:quartz'
    )
});
// silicon press production
ServerEvents.recipes(event => {
    event.recipes.create.pressing(
        'ae2:silicon',
        'minecraft:quartz'
    )
});