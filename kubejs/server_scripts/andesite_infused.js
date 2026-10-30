// adding sequenced assembly recipe for andesite_infused 

ServerEvents.recipes(event => {

  const transitional = 'kubejs:incomplete_andesite_alloy'

  event.recipes.create.sequenced_assembly(
    [
      // Assurez-vous que l'item final existe (modifié avec chance requise pour l'output de l'assemblage)
      Item.of('kubejs:andesite_infused') 
    ],
    'create:andesite_alloy', // L'item de départ
    [
      // Étape 1 : Déploiement de l'electron_tube
      event.recipes.create.deploying(transitional, [transitional, 'create:electron_tube']),

      // Étape 2 : Remplissage (La syntaxe correcte demande le fluide puis l'item de transition)
      event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:molten_andesite_alloy', 50)]),

      // Étape 3 : Déploiement du precision_mechanism
      event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism'])
    ]
  )
  .transitionalItem(transitional)
  .loops(2)
  .id('kubejs:sequenced_andesite_infused') // Le .id() se place TOUJOURS après les modificateurs (.loops, .transitionalItem)

})
