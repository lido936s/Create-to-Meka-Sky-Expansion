// Recette de craft du multibloc Sawmill (machine meka_sky:sawmill)
// Recette volontairement longue : chaine Create + pieces du modpack + Sawmill + acier.
ServerEvents.recipes(event => {
  let ver = (global.MODPACK && global.MODPACK.version) ? global.MODPACK.version : '1.03'

  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'misc',
    pattern: [
      'BMB',
      'SWS',
      'CPC'
    ],
    key: {
      B: { item: 'create:brass_casing' },
      M: { item: 'create:mechanical_saw' },
      S: { tag: 'c:plates/steel' },
      W: { item: 'sawmill:sawmill' },
      C: { item: 'create:andesite_casing' },
      P: { item: 'kubejs:sealed_mechanism' }
    },
    result: {
      id: 'custommachinery:custom_machine_item',
      count: 1,
      components: { 'custommachinery:machine': 'meka_sky:sawmill' }
    }
  })
  console.info('[sawmill_recipe] craft du multibloc enregistre (modpack v' + ver + ')')
})
