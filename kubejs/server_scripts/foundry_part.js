// Adding recipe for filling clay with molten porcelain clay and dust
ServerEvents.recipes(event => {
    // Recette de remplissage (Filling) avec le mod Create
    event.recipes.create.filling('minecraft:clay', [
        'exdeorum:dust',
        Fluid.of('kubejs:molten_porcelain_clay', 100)
    ])
});
// Adding recipe for filling clay with molten porcelain clay and dust
ServerEvents.recipes(event => {
  if (Platform.isLoaded('create')) {
    // 4x modern_industrialization:brick_tiny_dust
    event.recipes.create.milling([CreateItem.of('4x modern_industrialization:brick_tiny_dust', 0.75), CreateItem.of('minecraft:brick', 0.9)], 'minecraft:bricks').processingTime(200)
  }
});