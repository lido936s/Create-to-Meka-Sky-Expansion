// Multibloc Sawmill : charbon + 32 SU -> toutes les recettes du mod Sawmill (Universal Sawmill)
// Machine : kubejs/data/meka_sky/machine/sawmill.json (id = meka_sky:sawmill)

ServerEvents.recipes(event => {
  let MACHINE = 'meka_sky:sawmill'
  let TIME = 40            // ticks par scie
  let COAL_AMOUNT = 1      // charbon (ou charbon de bois) consomme a CHAQUE scie
  let RPM = 32             // vitesse minimale
  let STRESS = 1           // impact = RPM * STRESS = 32 SU

  let structure = {
    type: 'custommachinery:structure',
    // etages de bas en haut, lignes de l'arriere vers l'avant
    pattern: [
      // Etage 1 : Base renforcee avec goulotte d'evacuation au centre
      [
        'aba',
        'aca',
        'aba'
      ],
      // Etage 2 : Table de coupe (depot), transmission et controleur (m)
      [
        'gsg',
        'd d',
        'sms'
      ],
      // Etage 3 : Lame de scie centrale, engrenage et portique metallique
      [
        'gwg',
        'gsg',
        'g g'
      ]
    ],
    keys: {
      a: 'create:andesite_casing',
      b: 'create:brass_casing',
      c: 'create:chute',
      d: 'create:depot',
      g: 'create:metal_girder',
      s: 'create:shaft',
      w: 'create:mechanical_saw'
    }
  }

  let seen = {}
  // ID lisible et valide (a-z0-9_) pour chaque recette : evite les doublons d'ID
  let safe = str => String(str).toLowerCase().replace(/^#/, 'tag_').replace(/[^a-z0-9_]/g, '_')
  function addSaw(ing, count, outId, outCount) {
    let inKey = ing.tag ? '#' + ing.tag : ing.item
    let key = inKey + '>' + count + '>' + outId + '>' + outCount
    if (seen[key]) return
    seen[key] = true
    let input = ing.tag
      ? { tag: ing.tag, count: count }
      : { item: ing.item, count: count }
    event.custom({
      type: 'custommachinery:custom_machine',
      machine: MACHINE,
      time: TIME,
      requirements: [
        structure,
        { type: 'custommachinery:contraption', mode: 'input', speed: RPM, stress: STRESS },
        { type: 'custommachinery:item', mode: 'input', ingredient: { tag: 'minecraft:coals', count: COAL_AMOUNT }, slots: 'coal' },
        { type: 'custommachinery:item', mode: 'input', ingredient: input, slots: 'input' },
        { type: 'custommachinery:item_filter', ingredient: { item: outId }, slot: 'filter' },
        { type: 'custommachinery:item', mode: 'output', ingredient: { item: outId, count: outCount } }
      ]
    }).id('kubejs:sawmill_multiblock/' + safe(inKey) + '_x' + count + '_to_' + safe(outId) + '_x' + outCount)
  }

  // 1) Import automatique de TOUTES les recettes generees par le mod Sawmill
  let n = 0
  let skipped = 0
  let logged = false
  event.forEachRecipe({ mod: 'sawmill' }, r => {
    try {
      let j = JSON.parse(r.json.toString())
      if (!logged) { console.info('[sawmill_multiblock] exemple de recette Sawmill : ' + r.getId() + ' = ' + r.json.toString()); logged = true }
      let ing = Array.isArray(j.ingredient) ? j.ingredient[0] : j.ingredient
      if (!ing && Array.isArray(j.ingredients)) ing = j.ingredients[0]
      let res = j.result || j.output
      if (!ing || !res || !(ing.item || ing.tag)) { skipped++; return }
      let outId = res.id || res.item
      if (!outId) return
      addSaw(ing, ing.count || 1, outId, res.count || 1)
      n++
    } catch (e) {
      skipped++
      if (skipped <= 5) console.warn('[sawmill_multiblock] recette ignoree : ' + r.getId() + ' -> ' + e)
    }
  })
  console.info('[sawmill_multiblock] ' + n + ' recettes importees, ' + skipped + ' ignorees')

  // 2) Plan B si le mod n'a encore rien genere au moment du chargement (n == 0)
  if (n === 0) {
    let woods = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry']
    let derived = {
      stairs: 1, slab: 2, fence: 1, fence_gate: 1, door: 1,
      trapdoor: 1, button: 1, pressure_plate: 1, sign: 1
    }
    woods.forEach(w => {
      addSaw({ item: 'minecraft:' + w + '_log' }, 1, 'minecraft:' + w + '_planks', 6)
      Object.keys(derived).forEach(k => {
        addSaw({ item: 'minecraft:' + w + '_planks' }, 1, 'minecraft:' + w + '_' + k, derived[k])
      })
    })
    addSaw({ tag: 'minecraft:planks' }, 1, 'minecraft:stick', 6)
    console.warn('[sawmill_multiblock] plan B (recettes vanilla) utilise, voir sawmill config save_recipes')
  }
})
