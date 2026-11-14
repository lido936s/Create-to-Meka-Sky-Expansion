ServerEvents.recipes(event => {
    // --- Recette Assembler (machine) ---
    event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/component/craft/conveyor' })
    event.recipes.modern_industrialization.assembler(32, 150)
        .itemIn("modern_industrialization:motor")
        .itemIn("3x modern_industrialization:rubber_sheet")
        .itemIn("2x modern_industrialization:tin_cable")
        .itemIn("kubejs:overcharged_circuit_substrate")
        .itemIn("create_new_age:overcharged_iron_sheet")
        .itemIn("create:precision_mechanism")
        .itemIn("create:belt_connector")
        .itemOut("modern_industrialization:conveyor")
        .id('kubejs:mi_conveyor_gated')

    // --- Recette Table de craft (manuelle) ---
    event.shaped('4x modern_industrialization:conveyor', [
        'PRP',
        'CMC',
        'PRP'
    ], {
        P: 'create_new_age:overcharged_iron_sheet',
        R: 'modern_industrialization:rubber_sheet',
        C: 'create_new_age:copper_circuit',
        M: 'modern_industrialization:motor'
    }).id('kubejs:crafting_mi_conveyor_gated')
})