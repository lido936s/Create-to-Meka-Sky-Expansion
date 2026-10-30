ServerEvents.recipes(event => {

  // 1. SILVER (Argent)
  event.recipes.create.sequenced_assembly(
    [
      Item.of('immersiveengineering:raw_silver') // Remplacé le tag par un item concret
    ],  
    'exdeorum:compressed_cobblestone', // Ingrédient de départ
    [
      // Utilisation de .filling avec la syntaxe fluide 1.21.1
      event.recipes.create.filling(
        'exdeorum:compressed_cobblestone', 
        [
          'exdeorum:compressed_cobblestone', 
          Fluid.of('productivemetalworks:molten_brass', 25)
        ]
      )
    ]
  )
  .transitionalItem('exdeorum:compressed_cobblestone')
  .loops(10)
  .id('kubejs:sequenced_silver');


  // 2. LEAD (Plomb)
  event.recipes.create.sequenced_assembly(
    [
      Item.of('immersiveengineering:raw_lead') // Remplacé le tag par un item concret
    ],  
    'exdeorum:compressed_gravel', // Ingrédient de départ
    [
      event.recipes.create.filling(
        'exdeorum:compressed_gravel', 
        [
          'exdeorum:compressed_gravel', 
          Fluid.of('productivemetalworks:molten_gold', 25)
        ]
      )
    ]
  )
  .transitionalItem('exdeorum:compressed_gravel')
  .loops(10)
  .id('kubejs:sequenced_lead');

});
