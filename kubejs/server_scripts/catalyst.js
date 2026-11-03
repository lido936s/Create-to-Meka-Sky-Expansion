ServerEvents.recipes(event => {
  // Supprime la recette d'origine du catalyseur
  event.remove({ output: 'undergarden:catalyst' });

  // Ajoute la recette AE2 au format hybride exigé par votre version
  event.custom({
    type: 'ae2:transform',
    ingredients: [
      { item: 'undergarden:raw_cloggrum' },     // Utilise obligatoirement "item"
      { item: 'undergarden:regalium_crystal' }, // Utilise obligatoirement "item"
      { item: 'undergarden:utherium_crystal' }  // Utilise obligatoirement "item"
    ],
    circumstance: {
      type: 'fluid',
      tag: 'undergarden:virulent' // Utilise obligatoirement "tag"
    },
    result: {
      id: 'undergarden:catalyst' // Utilise obligatoirement "id"
    }
  }).id('kubejs:undergarden_catalyst_transform');
})
