// remove recipes id create:mixing/brass_ingot
ServerEvents.recipes(event => {
event.remove({ id: 'create:mixing/brass_ingot' })  
});
// remove recipes create:brass_ingot from immersiveengineering:alloysmelter/brass
ServerEvents.recipes(event => {
event.remove({ id: 'immersiveengineering:alloysmelter/brass' })  
});
// adding sequenced assembly recipe for create:brass_ingot
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_brass_ingot'

    event.recipes.create.sequenced_assembly(
        'create:brass_ingot',
        'exdeorum:compressed_cobblestone',
        [

            // 1. Compression du cobblestone compressé
            event.recipes.create.pressing(
                transitional,
                'exdeorum:compressed_cobblestone'
            ),

            // 2. Plaque de fer
            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    Ingredient.of('#c:plates/iron').withCount(1)
                ]
            ),

            // 3. Plaque de cuivre
            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    Ingredient.of('#c:plates/copper').withCount(1)
                ]
            ),

            // 4. Cobblestone
            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    'minecraft:cobblestone'
                ]
            ),

            // 5. 25 mB de molten cobblestone
            event.recipes.create.filling(
                transitional,
                [
                    transitional,
                    Fluid.of('kubejs:molten_cobblestone', 25)
                ]
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)

});
// adding sequenced assembly recipe for minecraft:lava_bucket from exdeorum:porcelain_lava_bucket
ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly(
        'minecraft:lava_bucket',
        'exdeorum:porcelain_lava_bucket',
        [
            event.recipes.create.pressing(
                'exdeorum:porcelain_lava_bucket',
                'exdeorum:porcelain_lava_bucket'
            ),

            event.recipes.create.deploying(
                'exdeorum:porcelain_lava_bucket',
                [
                    'exdeorum:porcelain_lava_bucket',
                    Ingredient.of('#minecraft:coals').withCount(1)
                ]
            ),

            event.recipes.create.filling(
                'exdeorum:porcelain_lava_bucket',
                [
                    'exdeorum:porcelain_lava_bucket',
                    Fluid.of('productivemetalworks:molten_iron', 25)
                ]
            ),

            event.recipes.create.filling(
                'exdeorum:porcelain_lava_bucket',
                [
                    'exdeorum:porcelain_lava_bucket',
                    Fluid.of('minecraft:water', 100)
                ]
            )
        ]
    )
    .transitionalItem('exdeorum:porcelain_lava_bucket')
    .loops(1)

});
// remove recipes createsifter:sifter
ServerEvents.recipes(event => {
event.remove({ output: 'createsifter:sifter' })
});
// adding sequenced assembly recipe for createsifter:sifter from exdeorum:oak_sieve
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_oak_sieve'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('createsifter:sifter')
        ],
        Item.of('exdeorum:oak_sieve'),
        [
            event.recipes.create.pressing(
                transitional,
                transitional
            ),

            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    Ingredient.of('#c:strings')
                ]
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('kubejs:oak_sieve_to_sifter')

});
// remove recipes createsifter:brass_sifter
ServerEvents.recipes(event => {
event.remove({ output: 'createsifter:brass_sifter' })
});
// adding sequenced assembly recipe for createsifter:brass_sifter from createsifter:sifter
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_brass_sifter'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('createsifter:brass_sifter')
        ],
        Item.of('createsifter:sifter'),
        [
            event.recipes.create.pressing(
                transitional,
                transitional
            ),

            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    Ingredient.of('#c:plates/brass')
                ]
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('kubejs:brass_sifter_assembly')

});
// remove recipes exdeorum:mechanical_sieve
ServerEvents.recipes(event => {
event.remove({ output: 'exdeorum:mechanical_sieve' })

});
// adding sequenced assembly recipe for exdeorum:mechanical_sieve from createsifter:brass
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_mechanical_sieve'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('exdeorum:mechanical_sieve')
        ],
        Item.of('createsifter:brass_sifter'),
        [
            event.recipes.createPressing(
                transitional,
                transitional
            ),

            event.recipes.createDeploying(
                transitional,
                [
                    transitional,
                    'create:precision_mechanism'
                ]
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('kubejs:mechanical_sieve_assembly')

});
// remove recipes exmachinis:flux_sieve
ServerEvents.recipes(event => {
event.remove({ output: 'exmachinis:flux_sieve' })
});
// adding sequenced assembly recipe for exmachinis:flux_sieve from exdeorum:mechanical_sieve and create:precision_mechanism and minecraft:hopper and createsifter:brass_sifter and minecraft:obsidian
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_flux_sieve'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('exmachinis:flux_sieve')
        ],
        Item.of('exdeorum:mechanical_sieve'),
        [
            event.recipes.createPressing(
                transitional,
                transitional
            ),

            event.recipes.createDeploying(
                transitional,
                [
                    transitional,
                    'create:precision_mechanism'
                ]
            ),

            event.recipes.createDeploying(
                transitional,
                [
                    transitional,
                    'minecraft:hopper'
                ]
            ),

            event.recipes.createDeploying(
                transitional,
                [
                    transitional,
                    'createsifter:brass_sifter'
                ]
            ),

            event.recipes.createDeploying(
                transitional,
                [
                    transitional,
                    'minecraft:obsidian'
                ]
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('kubejs:flux_sieve_assembly')

});
// adding sequenced assembly recipe for minecraft:netherrack from havenpebbles:stone_pebble and lava in pressing
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'minecraft:netherrack',
],  'exdeorum:stone_pebble', [
    event.recipes.createPressing('exdeorum:stone_pebble', 'exdeorum:stone_pebble'),
    event.recipes.createFilling('exdeorum:stone_pebble', ['exdeorum:stone_pebble', Fluid.of('minecraft:lava', 100)]),
]).transitionalItem('exdeorum:stone_pebble',).loops(10)
});
// adding sequenced assembly recipe for create:precision_mechanism from create:brass_ingot and productivemetalworks:molten_gold and productivemetalworks:molten_copper and minecraft:water in filling
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'create:precision_mechanism',
],  'create:brass_ingot', [
    event.recipes.createPressing('create:brass_ingot', 'create:brass_ingot'),
    event.recipes.createFilling('create:brass_ingot', ['create:brass_ingot', Fluid.of('productivemetalworks:molten_gold', 25)]),
    event.recipes.createFilling('create:brass_ingot', ['create:brass_ingot', Fluid.of('productivemetalworks:molten_copper', 25)]),
    event.recipes.createFilling('create:brass_ingot', ['create:brass_ingot', Fluid.of('minecraft:water', 100)]),
]).transitionalItem('create:brass_ingot',).loops(1)
});
// adding sequenced assembly recipe for srgen:refined_ore_gen from create:electron_tube and create:precision_mechanism and easy_villagers:iron_farm and srgen:basic_ore_gen .
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'srgens:refined_ore_gen',
],  'srgens:basic_ore_gen', [
    event.recipes.createPressing('srgens:basic_ore_gen', 'srgens:basic_ore_gen'),
    event.recipes.createDeploying('srgens:basic_ore_gen', ['srgens:basic_ore_gen', 'create:electron_tube']),
    event.recipes.createDeploying('srgens:basic_ore_gen', ['srgens:basic_ore_gen', 'create:precision_mechanism']),
    event.recipes.createDeploying('srgens:basic_ore_gen', ['srgens:basic_ore_gen', 'easy_villagers:iron_farm']),
]).transitionalItem('srgens:basic_ore_gen',).loops(1)
});
// adding sequenced assembly recipe for vintageimprovements:redstone_module 
// remove recipes thermal:redstone_servo
ServerEvents.recipes(event => {
event.remove({ output: 'vintageimprovements:redstone_module' })
});
// adding sequenced assembly recipe for vintageimprovements:redstone_module from create:electron_tube and immersiveengineering:redstone_acid
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'vintageimprovements:redstone_module',
],  '#c:rods/iron', [
    event.recipes.createPressing('create:electron_tube', 'create:electron_tube'),
    event.recipes.createDeploying('create:electron_tube', ['create:electron_tube', 'create:electron_tube']),
    event.recipes.createFilling('create:electron_tube', ['create:electron_tube', Fluid.of('immersiveengineering:redstone_acid', 50)]),
]).transitionalItem('create:electron_tube',).loops(1)
});
// adding sequenced assembly recipe for srgen:blazing_ore_gen from mekanism:steel_casing and kubejs:liquid_redstone and minecraft:blaze_rod and productivemetalworks:molten_electrum
ServerEvents.recipes(event => {

    const transitional = 'kubejs:incomplete_blazing_ore_gen'

    event.recipes.create.sequenced_assembly(
        [
            Item.of('srgens:blazing_ore_gen')
        ],
        Item.of('mekanism:steel_casing'),
        [

            event.recipes.create.pressing(
                transitional,
                transitional
            ),

            event.recipes.create.filling(
                transitional,
                [
                    transitional,
                    Fluid.of('kubejs:liquid_redstone', 50)
                ]
            ),

            event.recipes.create.deploying(
                transitional,
                [
                    transitional,
                    'minecraft:blaze_rod'
                ]
            ),

            event.recipes.create.pressing(
                transitional,
                transitional
            ),

            event.recipes.create.filling(
                transitional,
                [
                    transitional,
                    Fluid.of('productivemetalworks:molten_electrum', 75)
                ]
            )

        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('kubejs:blazing_ore_gen_sequenced')

});
// adding sequenced assembly recipe for forge:ingots/steel from c:ingots/iron and kubejs:molten_carbon
ServerEvents.recipes(event => {

    // On utilise le boitier de machine leger d'immersive engineering comme item de transition pour la recette de l'assemblage séquentiel
    const light = 'immersiveengineering:light_engineering' 

    event.recipes.create.sequenced_assembly(
        [
            Item.of('8x immersiveengineering:ingot_steel') // Résultat final
        ],
        light, // Ingrédient de départ
        [
            event.recipes.createPressing(light, light),

            event.recipes.createFilling(light, [
                light,
                Fluid.of('kubejs:molten_carbon', 50)
            ])
        ]
    )
    .transitionalItem(light) // Le fer sert de transition
    .loops(1)
    .id('kubejs:steel_ingot_from_iron')

});

// remove recipes create:refined_radiance
ServerEvents.recipes(event => {
event.remove({ output: 'create:refined_radiance' })
});
// adding sequenced assembly recipe for create:refined_radiance from immersiveengineering:heavy_engineering and filling kubejs:molten_carbon and filling kubejs:liquid_redstone and deploying minecraft:nether_star and pressing
ServerEvents.recipes(event => {
event.recipes.create.sequenced_assembly([
    'create:refined_radiance',
],  'immersiveengineering:heavy_engineering', [
    event.recipes.createPressing('immersiveengineering:heavy_engineering', 'immersiveengineering:heavy_engineering'),
    event.recipes.createFilling('immersiveengineering:heavy_engineering', ['immersiveengineering:heavy_engineering', Fluid.of('kubejs:molten_carbon', 50)]),
    event.recipes.createFilling('immersiveengineering:heavy_engineering', ['immersiveengineering:heavy_engineering', Fluid.of('kubejs:liquid_redstone', 50)]),
    event.recipes.createDeploying('immersiveengineering:heavy_engineering', ['immersiveengineering:heavy_engineering', 'minecraft:nether_star']),
    event.recipes.createPressing('immersiveengineering:heavy_engineering', 'immersiveengineering:heavy_engineering'),
]).transitionalItem('immersiveengineering:heavy_engineering',).loops(1)
});
