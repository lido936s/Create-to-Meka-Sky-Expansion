ServerEvents.recipes(event => {

    // --- 1. SUPPRESSION DES RECETTES DE BASE ---
    // IDs corrigés : "energizer" (pas "energiser") pour l'item, mais les IDs de recette
    // du mod peuvent varier — vérifiez avec /kjs recipes si un remove ne fonctionne pas.
    event.remove({ id: 'create_new_age:crafting/energizer' })
    event.remove({ id: 'create_new_age:crafting/basic_magnet' })
    event.remove({ id: 'create_new_age:energising/overcharged_iron' })
    event.remove({ id: 'create_new_age:energising/overcharged_gold' })

// --- 2. L'ENERGISER ---
event.shaped('create_new_age:basic_energiser', [
    'SPS',
    'PCP',
    'SPS'
], {
    S: 'create:sturdy_sheet',
    P: 'create:brass_sheet',
    C: 'create_new_age:overcharged_iron_sheet'
}).id('kubejs:new_age_energiser_expert')

// --- 3. PRODUCTION D'OVERCHARGED GOLD ---
event.custom({
    type: 'create_new_age:energising',
    ingredients: [{ item: 'create:brass_ingot' }],
    energy_needed: 5000,
    results: [{ id: 'create_new_age:overcharged_gold', amount: 1 }]
}).id('kubejs:energising_overcharged_gold_expert')

    // --- 4. GATING DE MEKANISM ---
    // Le shaped recipe vanilla accepte 9 slots max : OGO / GEG / OGO = 9, OK.
    event.remove({ id: 'mekanism:control_circuit/basic' })
    event.shaped('mekanism:basic_control_circuit', [
        'OGO',
        'GEG',
        'OGO'
    ], {
        O: 'create_new_age:overcharged_gold',
        G: 'mekanism:enriched_iron',
        E: 'mekanism:alloy_infused'
    }).id('kubejs:mekanism_basic_circuit_gated')

    // --- 5. GATING DE LA CHALEUR (Alternative aux Blaze Burners) ---
    event.remove({ id: 'create:crafting/materials/blaze_burner' })
    event.shaped('create:blaze_burner', [
        ' N ',
        'NBN',
        'DNE'
    ], {
        N: 'create_new_age:overcharged_diamond',
        B: 'create:empty_blaze_burner',
        D:'kubejs:overcharged_circuit_substrate',
        E: 'mekanism:alloy_infused'
    }).id('kubejs:blaze_burner_gated')

})