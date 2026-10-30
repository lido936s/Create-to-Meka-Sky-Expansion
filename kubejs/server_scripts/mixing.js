ServerEvents.recipes(event => {

    // Molten Porcelain Clay
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                item: "exdeorum:porcelain_clay_ball"
            },
            {
                type: "neoforge:single",
                fluid: "minecraft:water",
                amount: 250
            }
        ],
        results: [
            {
                id: "kubejs:molten_porcelain_clay",
                amount: 250
            }
        ]
    });


    // Molten Zinc
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                item: "minecraft:iron_ingot",
                count: 2
            },
            {
                type: "neoforge:single",
                fluid: "kubejs:molten_cobblestone",
                amount: 50
            }
        ],
        results: [
            {
                id: "productivemetalworks:molten_zinc",
                amount: 200
            }
        ]
    });


    // Molten Carbon
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                item: "minecraft:coal"
            },
            {
                type: "neoforge:single",
                fluid: "minecraft:water",
                amount: 250
            }
        ],
        results: [
            {
                id: "kubejs:molten_carbon",
                amount: 250
            }
        ]
    });


    // Ash
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                item: "minecraft:sugar_cane"
            },
            {
                type: "neoforge:single",
                fluid: "minecraft:water",
                amount: 75
            }
        ],
        results: [
            {
                id: "supplementaries:ash",
                amount: 1
            }
        ]
    });


    // Molten Andesite Alloy
    event.custom({
        type: "create:mixing",
        heat_requirement: "lowheated",
        ingredients: [
            {
                item: "minecraft:andesite"
            },
            {
                item: "minecraft:cobblestone"
            },
            {
                type: "neoforge:single",
                fluid: "kubejs:molten_cobblestone",
                amount: 250
            }
        ],
        results: [
            {
                id: "kubejs:molten_andesite_alloy",
                amount: 250
            }
        ]
    });

});

// Andesite Alloy
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        'create:andesite_alloy',
        [
            'minecraft:andesite',
            'exdeorum:porcelain_clay_ball'
        ]
    );

});
//mixing cogwheel from andesite alloy and molten andesite alloy
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Item.of("create:cogwheel", 4),
        [
            "create:andesite_alloy",
            Fluid.of("kubejs:molten_andesite_alloy", 75)
        ]
    ).heatRequirement("lowheated").id("kubejs:andesite_alloy_to_cogwheel");
}); 

// Mixing exdeorum:porcelain_clay_ball and minecraft:brick and minecraft:bone_meal and tag #minecraft:coals
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        '2x exdeorum:porcelain_clay_ball',
        [
            'minecraft:brick',
            'minecraft:bone_meal',
            Ingredient.of('#minecraft:coals'),
        ]
    );
});
