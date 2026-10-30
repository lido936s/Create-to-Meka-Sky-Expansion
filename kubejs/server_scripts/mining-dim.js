//remove recipes id wa_ender_quarry:frame_recipe
ServerEvents.recipes(event => {
event.remove({ id: 'wa_ender_quarry:frame_recipe' })
});

// adding sequenced assembly recipe for wa_ender_quarry:ender_frame from vintageimprovements:redstone_module and create:steam_engine and filling kubejs:liquid_redstone and createaddition:electrum_spool and thermal:redstone_servo and pressing
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_ender_frame'

    event.recipes.createSequencedAssembly(
        ['wa_ender_quarry:ender_frame'],
        'vintageimprovements:redstone_module',
        [
            event.recipes.createDeploying(transitional, [
                transitional,
                'create:steam_engine'
            ]),

            event.recipes.createFilling(transitional, [
                transitional,
                Fluid.of('kubejs:liquid_redstone', 50)
            ]),

            event.recipes.createDeploying(transitional, [
                transitional,
                'createaddition:electrum_spool'
            ]),

            event.recipes.createDeploying(transitional, [
                transitional,
                'create:electron_tube'
            ]),

            event.recipes.createDeploying(transitional, [
                transitional,
                'mekanism:steel_casing'
            ]),

            event.recipes.createDeploying(transitional, [
                transitional,
                'create:precision_mechanism'
            ]),

            event.recipes.createDeploying(transitional, [
                transitional,
                'extendedcrafting:nether_star_block'
            ])
        ]
    )
    .transitionalItem(transitional)
    .loops(1)

})

// remove recipes id jamd:portal_block
ServerEvents.recipes(event => {
event.remove({ id: 'jamd:portal_block' })
});
// adding sequenced assembly recipe for jamd:portal_block from create_sa:heat_engine and create_better_motors:nitro_motor and thermal:machine_frame and pressing
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'jamd:portal_block',
],  'create_sa:heat_engine', [
    event.recipes.createPressing('create_sa:heat_engine', 'create_sa:heat_engine'),
    event.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'create_better_motors:nitro_motor']),
    event.recipes.createDeploying('create_sa:heat_engine', ['create_sa:heat_engine', 'mekanism:steel_casing']),
    event.recipes.createPressing('create_sa:heat_engine', 'create_sa:heat_engine'),
]).transitionalItem('create_sa:heat_engine',).loops(1)
});


// adding sequenced assembly recipe for create_sa:heat_engine from create:andesite_alloy and create:cogwheel and create:large_cogwheel and #forge:ingots/zinc and #forge:ingots/copper 
ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly([
        'create_sa:heat_engine' // Résultat final de la recette
    ], 'create:andesite_alloy', [ // Item de base requis sur le tapis

        // Étape 1 : Déploiement d'une petite roue dentée
        event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'create:cogwheel']),
        
        // Étape 2 : Déploiement d'une grande roue dentée
        event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'create:large_cogwheel']),
        
        // Étape 3 : Déploiement d'une pépite de zinc physique (Fix du bug de tag fluide)
        event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'create:zinc_nugget']),
        
        // Étape 4 : Déploiement d'une pépite de cuivre physique (Fix du bug de tag fluide)
        event.recipes.create.deploying('create:andesite_alloy', ['create:andesite_alloy', 'create:copper_nugget'])

    ]).transitionalItem('create:andesite_alloy').loops(4).id('kubejs:sequenced/heat_engine');

});
// 'create_dimension:steamworks_realm'
