// remove recipes id create:haunting/soul_sand
ServerEvents.recipes(event => {
event.remove({ id: 'create:haunting/soul_sand' })
});
// remove recipes id minecraft:soul_sand_from_compressed_soul_sand
ServerEvents.recipes(event => {
event.remove({ id: 'minecraft:soul_sand_from_compressed_soul_sand' })
});
// adding recipe for create:splashing/soul_sand
ServerEvents.recipes(event => {
  event.recipes.create.splashing(['4x minecraft:soul_sand', '2x minecraft:sand'], 'exdeorum:compressed_sand').id('lido/soul_sand_compressed_sand')
});