// =====================================================================
// synthetic_rubber_recipes.js
// Branche 1.03 - Create to Meka: Sky Expansion (KubeJS 1.21.1 / NeoForge 21.1.238)
// Place ce fichier dans : kubejs/server_scripts/
//
// Objectif : rendre le fluide modern_industrialization:synthetic_rubber
// utile hors de MI (Create, Create Addition, Create SA).
// Style : item d'entrée = item transitoire (pas d'incomplete_*), comme en 1.02+.
// =====================================================================
ServerEvents.recipes(event => {

    const RUBBER = 'modern_industrialization:synthetic_rubber'

    // ------------------------------------------------------------------
    // 1. PONT CREATE -> MI : synthetic_rubber => rubber_sheet
    //    (permet de faire des feuilles de caoutchouc sans passer par MI)
    // ------------------------------------------------------------------
    event.custom({
        type: 'create:compacting',
        heat_requirement: 'heated',
        ingredients: [
            { type: 'neoforge:single', fluid: RUBBER, amount: 1000 }
        ],
        results: [
            { id: 'modern_industrialization:rubber_sheet', count: 4 }
        ]
    }).id('kubejs:compacting/rubber_sheet_from_synthetic_rubber')

    // ------------------------------------------------------------------
    // 2. MECHANICAL BELT (create:belt_connector)
    //    Sangle de kelp séchée + caoutchouc + ficelle, pressée.
    // ------------------------------------------------------------------
    event.remove({ output: 'create:belt_connector' })

    event.recipes.create.sequenced_assembly(
        [Item.of('create:belt_connector').withCount(2)],
        'minecraft:dried_kelp',
        [
            event.recipes.create.filling('minecraft:dried_kelp', ['minecraft:dried_kelp', Fluid.of(RUBBER, 100)]),
            event.recipes.create.deploying('minecraft:dried_kelp', ['minecraft:dried_kelp', 'minecraft:string']),
            event.recipes.create.pressing('minecraft:dried_kelp', 'minecraft:dried_kelp')
        ]
    ).transitionalItem('minecraft:dried_kelp').loops(2)
     .id('kubejs:sequenced/belt_connector_rubber')

    // ------------------------------------------------------------------
    // 3. CAPACITOR (createaddition:capacitor)
    //    Plaque de cuivre isolée au caoutchouc, redstone, pressage final.
    // ------------------------------------------------------------------
    event.remove({ output: 'createaddition:capacitor' })

    event.recipes.create.sequenced_assembly(
        [Item.of('createaddition:capacitor')],
        'modern_industrialization:copper_plate',
        [
            event.recipes.create.filling('modern_industrialization:copper_plate',
                ['modern_industrialization:copper_plate', Fluid.of(RUBBER, 50)]),
            event.recipes.create.deploying('modern_industrialization:copper_plate',
                ['modern_industrialization:copper_plate', 'minecraft:redstone']),
            event.recipes.create.pressing('modern_industrialization:copper_plate', 'modern_industrialization:copper_plate')
        ]
    ).transitionalItem('modern_industrialization:copper_plate').loops(2)
     .id('kubejs:sequenced/capacitor_rubber')

    // ------------------------------------------------------------------
    // 4. CREATE SA : filling / fueling tanks (joints étanches en caoutchouc)
    //    Chaque palier part du palier précédent (fluid_tank -> small -> medium -> large)
    // ------------------------------------------------------------------
    const tankChain = [
        // [sortie, entrée, quantité de caoutchouc]
        ['create_sa:small_filling_tank',  'create:fluid_tank',              250],
        ['create_sa:medium_filling_tank', 'create_sa:small_filling_tank',   500],
        ['create_sa:large_filling_tank',  'create_sa:medium_filling_tank', 1000],
        ['create_sa:medium_fueling_tank', 'create_sa:medium_filling_tank',  500],
        ['create_sa:large_fueling_tank',  'create_sa:large_filling_tank',  1000]
    ]

    tankChain.forEach(([out, input, mb]) => {
        const name = out.split(':')[1]
        event.remove({ output: out })

        event.recipes.create.sequenced_assembly(
            [Item.of(out)],
            input,
            [
                event.recipes.create.filling(input, [input, Fluid.of(RUBBER, mb)]),
                event.recipes.create.deploying(input, [input, 'create:iron_sheet']),
                event.recipes.create.pressing(input, input)
            ]
        ).transitionalItem(input).loops(1)
         .id('kubejs:sequenced/' + name + '_rubber')
    })
})

// =====================================================================
// MODIFS A FAIRE A LA MAIN DANS TES FICHIERS EXISTANTS (mi_recettes.js)
// =====================================================================
// A) Basic Machine Hull : ajoute le caoutchouc comme 2e fluide d'entrée
//
//     .fluidInputs([
//         Fluid.of('modern_industrialization:molten_redstone', 100),
//         Fluid.of('modern_industrialization:synthetic_rubber', 250)
//     ])
//
// B) Steel Casing Mekanism : insère une étape de joint entre l'étape III et IV
//
//     event.recipes.createFilling(transitionalItem, [
//         transitionalItem,
//         Fluid.of('modern_industrialization:synthetic_rubber', 100)
//     ]),
