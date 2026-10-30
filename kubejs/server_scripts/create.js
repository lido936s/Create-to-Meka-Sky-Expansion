// adding recipe for andesite_alloy
ServerEvents.recipes(event => {
  event.shaped(
  Item.of('create:andesite_alloy', 1), // arg 1: output
  [
    'AB ',
    'BA ',
    '   '
], {
    // arg 2: the mapping
    A: 'exdeorum:porcelain_clay_ball',  //arg 3: the mapping object
    B: 'minecraft:andesite',
    }).id('lido/andesite_alloy') // id must be unique !
});
// remove recipes id create:deploying/cogwheel and create:crafting/kinetics/cogwheel
ServerEvents.recipes(event => {
event.remove({ id: 'create:deploying/cogwheel' })
event.remove({ id: 'create:crafting/kinetics/cogwheel' })
});
// remove recipes mechanical_botany:mechanical_insolator
ServerEvents.recipes(event => {
event.remove({ output: 'mechanical_botany:mechanical_insolator' })
});
// adding recipe for mechanical_botany:mechanical_insolator
ServerEvents.recipes(event => {
event.shaped(
  Item.of('mechanical_botany:mechanical_insolator', 1), // arg 1: output
  [
    'CAC',
    'ABA',
    'ADA'
], {
    // arg 2: the mapping
    A: '#c:plates/iron',  //arg 3: the mapping object
    B: 'botanypots:terracotta_hopper_botany_pot',
    C: '#c:ingots/copper',
    D: 'create:mechanical_pump',
   }).id('lido/mechanical_insolator') // id must be unique !
});
//remove recipes create_mechanical_extruder:mechanical_extruder
ServerEvents.recipes(event => {
event.remove({ output: 'create_mechanical_extruder:mechanical_extruder' })
});
// adding recipe for create_mechanical_extruder:mechanical_extruder
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create_mechanical_extruder:mechanical_extruder', 1), // arg 1: output
  [
    'CAC',
    'ABA',
    'ADA'
], {
    // arg 2: the mapping
    A: '#c:plates/iron',  //arg 3: the mapping object
    B: 'create:copper_casing',
    C: '#c:ingots/iron',
    D: 'ftbstuff:iron_cobblestone_generator',
   }).id('lido/mechanical_extruder') // id must be unique !
});
// remove recipes crushing_wheel
ServerEvents.recipes(event => {
event.remove({ output: 'create:crushing_wheel' })
});
// adding recipe for crushing_wheel
ServerEvents.recipes(event => {
event.shaped(
  Item.of('create:crushing_wheel', 1), // arg 1: output
  [
    'ACA',
    'ABA',
    'ADA'
], {
    // arg 2: the mapping
    A: 'create:andesite_alloy',  //arg 3: the mapping object
    B: 'create:andesite_alloy_block',
    C: 'sawmill:sawmill',
    D: 'create:mechanical_saw',

   }).id('lido/crushing_wheel') // id must be unique !
});
// remove recipes create:electron_tube
ServerEvents.recipes(event => {
event.remove({ output: 'create:electron_tube' })  
});
// adding recipe for create:electron_tube with mixer and heated and create:brass_ingot and fluid of molten copper
ServerEvents.recipes(event => {
event.recipes.create.mixing(['create:electron_tube'], ['create:brass_ingot', Fluid.of('productivemetalworks:molten_copper', 1000)]).heated()
});
// remove recipes create:brass_hand
ServerEvents.recipes(event => {
event.remove({ output: 'create:brass_hand' })  
});
// adding recipe for create:brass_hand with mixer and lowheated and 4 create:cogwheel and fluid of molten gold
// ==========================================
// RECETTES DE MÉLANGE CREATE (1.21.1 - NeoForge)
// ==========================================
ServerEvents.recipes(event => {

    // 1. On laisse KubeJS Create générer le fluide et les items au format parfait de la 1.21.1
    event.recipes.create.mixing(
        [ 'create:brass_hand' ], 
        [ 
            '4x create:cogwheel', 
            Fluid.of('productivemetalworks:molten_gold', 1000) 
        ]
    )
    // 2. On utilise l'injection de données KubeJS 1.21.1 pour ajouter la propriété du mod de chaleur
    .id('kubejs:mixing/brass_hand_low_heated')
    .modifyResult((recipe, item) => {
        // Cette fonction s'exécute au moment de la compilation de la recette
        recipe.getRecipe().value().heatRequirement = "low_heated";
        return item;
    });

});
// remove recipes create:copper_casing
ServerEvents.recipes(event => {
event.remove({ output: 'create:copper_casing' })  
});
// adding recipe for create:copper_casing with deploying and productivemetalworks:fire_brick and minecraft:copper_ingot
ServerEvents.recipes(event => {
event.recipes.create.deploying(['create:copper_casing'], ['productivemetalworks:fire_brick', 'minecraft:copper_ingot'])
});
// replace input recipes id:createaddition:crafting/modular_accumulator_gold using #c:rods/copper with vintageimprovements:redstone_module
ServerEvents.recipes(event => {
event.replaceInput('createaddition:crafting/modular_accumulator_gold', '#c:rods/copper', 'vintageimprovements:redstone_module')
});
// replace input recipes id:createaddition:crafting/modular_accumulator_electrum using #c:rods/copper with vintageimprovements:redstone_module
ServerEvents.recipes(event => {
event.replaceInput('createaddition:crafting/modular_accumulator_electrum', '#c:rods/copper', 'vintageimprovements:redstone_module')
});
// adding recipe for kubejs:diams_plate
ServerEvents.recipes(event => {
  event.recipes.create.pressing(
    "kubejs:diams_plate",      
    "minecraft:diamond"        
  )

});
// Crushing recipe for rose quartz block
ServerEvents.recipes(event => {
    event.custom({
        type: "create:crushing",
        ingredients: [
            {
                item: "create:rose_quartz_block"
            }
        ],
        processing_time: 150,
        results: [
            {
                id: "create:rose_quartz",
                count: 4
            },
            {
                chance: 0.12,
                id: "create:rose_quartz"
            },
            {
                chance: 0.5,
                id: "create:experience_nugget"
            },
            {
                chance: 0.5,
                id: "minecraft:redstone",
                count: 7
            }
        ]
    });
});
