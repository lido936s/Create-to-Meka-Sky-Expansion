// Recette de kubejs:infused_porcelain_plate
// porcelain_plate + 90 mB d'alliage d'andésite fondu (Create filling / Spout)
ServerEvents.recipes(event => {
  event.recipes.create.filling('kubejs:infused_porcelain_plate', [
    'kubejs:porcelain_plate',
    Fluid.of('kubejs:molten_andesite_alloy', 90)
  ]).id('kubejs:filling/infused_porcelain_plate');
});
