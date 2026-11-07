// kubejs/server_scripts/botanypots_undergarden.js
// Botany Pots 21.1.x + The Undergarden 0.9.6 (NeoForge 1.21.1)

ServerEvents.recipes(event => {

  const undergardenSoilItems = [
    'undergarden:deepsoil',
    'undergarden:coarse_deepsoil',
    'undergarden:deepturf_block',
    'undergarden:ashen_deepturf_block'
  ];

  // ---------- SOLS ----------
  const soils = [
    ['undergarden:deepsoil',            1.0,  'deepsoil'],
    ['undergarden:coarse_deepsoil',     0.8,  'coarse_deepsoil'],
    ['undergarden:deepturf_block',      1.05, 'deepturf_block'],
    ['undergarden:ashen_deepturf_block',1.05, 'ashen_deepturf_block']
  ];

  soils.forEach(([block, speed, name]) => {
    event.custom({
      type: 'botanypots:soil',
      input: { item: block },
      display: { 
        type: 'botanypots:simple', 
        block_state: { block: block } 
      },
      categories: ['dirt', 'undergarden'],
      growthModifier: speed
    }).id(`kubejs:botanypots/soil/undergarden/${name}`);
  });

  // ---------- FONCTION CULTURES ----------
  function crop(name, seed, soilsIngredient, ticks, blockId, lootTableId) {
    event.custom({
      type: 'botanypots:crop',
      input: { item: seed },
      soil: soilsIngredient,
      grow_time: ticks,
      display: { 
        type: 'botanypots:simple', 
        block_state: { block: blockId } 
      },
      // Correction finale : Utilisation de la clé correcte 'table_id'
      drops: [{
        type: 'botanypots:loot_table',
        table_id: lootTableId
      }]
    }).id(`kubejs:botanypots/crop/undergarden/${name}`);
  }

  // Préparation des ingrédients de sol
  const vanillaDirtAndUndergarden = [ { tag: 'botanypots:soils/dirt' } ].concat(undergardenSoilItems.map(id => ({ item: id })));
  const undergardenSoilsOnly = undergardenSoilItems.map(id => ({ item: id }));
  const mushroomSoils = [ { tag: 'botanypots:soils/mushroom' } ].concat(undergardenSoilItems.map(id => ({ item: id })));

  // Enregistrement des cultures avec pointage vers les loot tables natives
  crop('ditchbulb', 'undergarden:ditchbulb', undergardenSoilsOnly, 1800, 'undergarden:ditchbulb_plant', 'undergarden:blocks/ditchbulb_plant');
  crop('blisterberry', 'undergarden:blisterberry', undergardenSoilsOnly, 1500, 'undergarden:blisterberry_bush', 'undergarden:blocks/blisterberry_bush');
  crop('shimmerweed', 'undergarden:shimmerweed', vanillaDirtAndUndergarden, 1200, 'undergarden:shimmerweed', 'undergarden:blocks/shimmerweed');
  crop('gronglet', 'undergarden:gronglet', vanillaDirtAndUndergarden, 1400, 'undergarden:gronglet', 'undergarden:blocks/gronglet');

  // Champignons
  ['indigo', 'veil', 'ink', 'blood'].forEach(m => {
    crop(`${m}_mushroom`, `undergarden:${m}_mushroom`, mushroomSoils, 1200, `undergarden:${m}_mushroom`, `undergarden:blocks/${m}_mushroom`);
  });

  // Arbres
  const trees = [
    ['undergarden:smogstem_sapling',   'smogstem'],
    ['undergarden:wigglewood_sapling', 'wigglewood'],
    ['undergarden:grongle_sapling',    'grongle']
  ];

  trees.forEach(([sapling, name]) => {
    crop(`${name}_tree`, sapling, vanillaDirtAndUndergarden, 2400, sapling, `undergarden:blocks/${name}_sapling`);
  });
});
