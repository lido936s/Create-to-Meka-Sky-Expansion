// adding sequenced assembly recipe for mechanism
// adding sequenced assembly recipe for kubejs:kinetic_mechanism
ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly(
        [
            Item.of("kubejs:kinetic_mechanism")
        ],
        "create:cogwheel", // objet de base
        [

            // Étape 1
            event.recipes.create.deploying(
                "kubejs:incomplete_kinetic_mechanism",
                [
                    "kubejs:incomplete_kinetic_mechanism",
                    "minecraft:iron_ingot"
                ]
            ),

            // Étape 2
            event.recipes.create.deploying(
                "kubejs:incomplete_kinetic_mechanism",
                [
                    "kubejs:incomplete_kinetic_mechanism",
                    "create:andesite_alloy"
                ]
            ),
            // Étape 3
            event.recipes.create.deploying(
                 "kubejs:incomplete_kinetic_mechanism",
                [
                    "kubejs:incomplete_kinetic_mechanism",
                    "exdeorum:porcelain_clay_ball"
                ]
             )

        ]
    )
    .transitionalItem("kubejs:incomplete_kinetic_mechanism")
    .loops(1)

});
// adding sequenced assembly recipe for kubejs:sealed_mechanism
ServerEvents.recipes(event => {

    event.recipes.create.sequenced_assembly(
        [
            Item.of("kubejs:sealed_mechanism")
        ],
        "kubejs:kinetic_mechanism", // objet de base
        [

            // Étape 1
            event.recipes.create.deploying(
                "kubejs:incomplete_sealed_mechanism",
                [
                    "kubejs:incomplete_sealed_mechanism",
                    "minecraft:copper_ingot"
                ]
            ),

            // Étape 2
            event.recipes.create.deploying(
                "kubejs:incomplete_sealed_mechanism",
                [
                    "kubejs:incomplete_sealed_mechanism",
                    "create:andesite_alloy"
                ]
            ),
            // Étape 3
            event.recipes.create.deploying(
                 "kubejs:incomplete_sealed_mechanism",
                [
                    "kubejs:incomplete_sealed_mechanism",
                    "create:fluid_pipe"
                ]
             )


        ]
    )
    .transitionalItem("kubejs:incomplete_sealed_mechanism")
    .loops(1)

});

ServerEvents.recipes(event => {

    // kubejs:andesite_machine
    event.shaped(
        'kubejs:andesite_machine',
        [
            'CCC',
            'CSC',
            'CCC'
        ],
        {
            C: 'kubejs:kinetic_mechanism',
            S: 'create:andesite_casing'
        }
    )

    // kubejs:copper_machine
    event.shaped(
        'kubejs:copper_machine',
        [
            'CCC',
            'CSC',
            'CCC'
        ],
        {
            C: 'kubejs:sealed_mechanism',
            S: 'create:copper_casing'
        }
    )

    // kubejs:brass_machine
    event.shaped(
        'kubejs:brass_machine',
        [
            'CCC',
            'CSC',
            'CCC'
        ],
        {
            C: 'create:precision_mechanism',
            S: 'create:brass_casing'
        }
    )

});