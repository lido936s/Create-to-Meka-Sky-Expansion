// Sources de température Create pour le ftbstuff:tempered_jar
// (les recettes du jar sont dans kubejs/data/kubejs/recipe/jar/*.json)
ServerEvents.recipes(event => {

  event.custom({
    type: 'ftbstuff:temperature_source',
    blockstate: 'create:blaze_burner[blaze=kindled]',
    display_item: { id: 'create:blaze_burner', count: 1 },
    efficiency: 2.0,
    temperature: 'hot'
  }).id('kubejs:temperature/blaze_burner_kindled');

  event.custom({
    type: 'ftbstuff:temperature_source',
    blockstate: 'create:blaze_burner[blaze=seething]',
    display_item: { id: 'create:blaze_burner', count: 1 },
    efficiency: 4.0,
    temperature: 'superheated'
  }).id('kubejs:temperature/blaze_burner_seething');

});
