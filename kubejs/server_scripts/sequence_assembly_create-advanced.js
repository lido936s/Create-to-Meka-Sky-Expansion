ServerEvents.recipes(event => {

    // =====================================================
    // 1. SUPPRESSION RADICALE DES RECETTES PAR DEFAUT ET DU CONFLIT KJS
    // =====================================================
    event.remove({ id: 'create_sa:hydraulic_engine' });
    event.remove({ id: 'create_sa:steam_engine' });
    
    // Force la suppression de la recette générée automatiquement qui fait planter votre console
    event.remove({ id: 'create:kjs/create_sa_hydraulic_engine' });


    // =====================================================
    // 2. MOTEUR HYDRAULIQUE (HYDRAULIC ENGINE)
    // =====================================================
const transitionalHydraulic = 'kubejs:incomplete_hydraulic_engine';

event.recipes.create.sequenced_assembly(
    [
        Item.of('create_sa:hydraulic_engine')
    ],
    '#c:plates/copper',
    [
        event.recipes.create.pressing(transitionalHydraulic, transitionalHydraulic),

        event.recipes.create.deploying(transitionalHydraulic, [
            transitionalHydraulic,
            'create:steam_engine'
        ]),

        // Utilisation d'un item physique précis (ici de Create) pour casser le bug du tag "amount": 1000
        event.recipes.create.deploying(transitionalHydraulic, [
            transitionalHydraulic,
            'create:copper_nugget'
        ]),

        // Étape du Spout validée
        event.recipes.create.filling(transitionalHydraulic, [
            transitionalHydraulic,
            Fluid.of('kubejs:molten_andesite_alloy', 250)
        ])
    ]
)
.transitionalItem(transitionalHydraulic)
.loops(1)
.id('kubejs:sequenced/hydraulic_engine_fixed');


    // =====================================================
    // 3. PLAQUE DE PORCELAINE (LIGNE 92 CORRIGÉE)
    // =====================================================
    const transitionalPorcelain = 'kubejs:incomplete_porcelain_plate'; 

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:porcelain_plate')
        ],
        '#c:dusts/brick', // Votre tag pour la poussière de brique
        [
            event.recipes.create.pressing(transitionalPorcelain, transitionalPorcelain),

            event.recipes.create.deploying(transitionalPorcelain, [
                transitionalPorcelain,
                'minecraft:bone_meal'
            ]),

            // FIX 1.21.1 LIGNE 92 : Ingrédients et Outputs remis dans le bon ordre
            event.recipes.create.deploying(
                [
                    transitionalPorcelain,
                    'minecraft:bucket' // Output (Ce qui ressort de l'étape)
                ],
                [
                    transitionalPorcelain,
                    'kubejs:molten_porcelain_clay_bucket' // Ingrédient (Ce que le déployeur utilise)
                ]
            ),

            event.recipes.create.cutting(transitionalPorcelain, transitionalPorcelain)
        ]
    )
    .transitionalItem(transitionalPorcelain)
    .loops(1)
    .id('kubejs:sequenced/porcelain_plate_fixed');


    // =====================================================
    // 4. MOTEUR À VAPEUR (STEAM ENGINE)
    // =====================================================
    const transitionalSteam = 'kubejs:incomplete_steam_engine';

    event.recipes.create.sequenced_assembly(
        [
            Item.of('create_sa:steam_engine')
        ],
        'create:golden_sheet',
        [
            event.recipes.create.pressing(transitionalSteam, transitionalSteam),

            event.recipes.create.deploying(transitionalSteam, [
                transitionalSteam,
                'create:electron_tube'
            ]),

            event.recipes.create.deploying(
                [
                    transitionalSteam,
                    'minecraft:bucket'
                ],
                [
                    transitionalSteam,
                    'minecraft:water_bucket'
                ]
            )
        ]
    )
    .transitionalItem(transitionalSteam)
    .loops(1)
    .id('kubejs:sequenced/steam_engine_fixed');

});
