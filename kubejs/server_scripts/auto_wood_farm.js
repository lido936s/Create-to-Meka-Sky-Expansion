// kubejs/server_scripts/auto_wood_farm.js
// Ferme à bois automatique : production + recette d'assemblage séquencé Create.

// ---- Production : 1 sapling + 1 bone meal -> bûches ----
BlockEvents.blockEntityTick('kubejs:auto_wood_farm', event => {
  const AWF = {
    logsPerCycle: 4,           // bûches produites par cycle (1 cycle = 10 s)
    saplingReturnChance: 0.75, // chance de rendre le sapling consommé
    stickChance: 0.5           // chance de produire 1-2 bâtons en plus
  };

  function awfLogFor(saplingId) {
    if (saplingId === 'minecraft:mangrove_propagule') return 'minecraft:mangrove_log';
    if (!saplingId.endsWith('_sapling')) return null;
    const logId = saplingId.replace('_sapling', '_log');
    return Item.exists(logId) ? logId : null;
  }

  function awfInsert(inv, stack) {
    let rest = stack;
    for (let i = 0; i < inv.getSlots() && !rest.isEmpty(); i++) {
      rest = inv.insertItem(i, rest, false);
    }
    return rest;
  }

  const block = event.block;
  const inv = block.getInventory('up');
  if (!inv) return;

  let saplingSlot = -1, boneSlot = -1, saplingId = null, logId = null;
  let stack = null, id = '', foundLog = null;

  for (let i = 0; i < inv.getSlots(); i++) {
    stack = inv.getStackInSlot(i);
    if (stack.isEmpty()) continue;

    id = String(stack.id);
    if (id === 'minecraft:bone_meal' && boneSlot < 0) boneSlot = i;
    if (saplingSlot < 0) {
      foundLog = awfLogFor(id);
      if (foundLog) {
        saplingSlot = i;
        saplingId = id;
        logId = foundLog;
      }
    }
  }
  if (saplingSlot < 0 || boneSlot < 0) return;

  inv.extractItem(boneSlot, 1, false);
  inv.extractItem(saplingSlot, 1, false);

  const outputs = [Item.of(logId, AWF.logsPerCycle)];
  if (Math.random() < AWF.saplingReturnChance) outputs.push(Item.of(saplingId, 1));
  if (Math.random() < AWF.stickChance) outputs.push(Item.of('minecraft:stick', 1 + Math.floor(Math.random() * 2)));

  outputs.forEach(o => {
    const rest = awfInsert(inv, o);
    if (!rest.isEmpty()) block.popItem(rest); // inventaire plein : lâché au-dessus du bloc
  });
});

// ---- Recette : Assemblage séquencé Create ----
ServerEvents.recipes(event => {
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: {
      item: 'create:andesite_casing'
    },
    transitional_item: {
      id: 'create:andesite_casing'
    },
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create:andesite_casing' },
          { item: 'create:mechanical_saw' }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create:andesite_casing' },
          { item: 'create:deployer' }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create:andesite_casing' },
          { tag: 'minecraft:saplings' }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'create:andesite_casing' },
          { item: 'minecraft:bone_meal' }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      },
      {
        type: 'create:filling',
        ingredients: [
          { item: 'create:andesite_casing' },
          {
            type: 'neoforge:single',
            fluid: 'minecraft:water',
            amount: 250
          }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      },
      {
        type: 'create:pressing',
        ingredients: [
          { item: 'create:andesite_casing' }
        ],
        results: [
          { id: 'create:andesite_casing' }
        ]
      }
    ],
    results: [
      { id: 'kubejs:auto_wood_farm' }
    ],
    loops: 1
  }).id('kubejs:sequenced/auto_wood_farm');
});
