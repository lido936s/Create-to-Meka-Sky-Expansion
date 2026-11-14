// KubeJS NeoForge 1.21.1 (2101.7.2-build.377)
ServerEvents.recipes(event => {
    // Fabrication du Kinetic Drill via Create Mechanical Crafter
    event.recipes.create.mechanical_crafting('kubejs:kinetic_drill', [
        '  B  ',
        ' BCB ',
        'BCACB',
        ' SDS '
    ], {
        A: 'create:andesite_alloy',
        B: 'create:brass_sheet',
        C: 'create:cogwheel',
        D: 'modern_industrialization:steel_drill_head',
        S: 'modern_industrialization:steel_rod'
    }).id('kubejs:mechanical_crafting/kinetic_drill')

    // Extraction des Kinetic Mechanisms dans la Quarry de Modern Industrialization
    event.recipes.modern_industrialization.quarry(16, 400)
        .itemIn('kubejs:kinetic_drill', 0.04)
        .itemOut('kubejs:kinetic_mechanism', 0.65)
        .itemOut('create:cogwheel', 0.20)
        .itemOut('create:andesite_alloy', 0.15)
        .id('kubejs:quarry/kinetic_mechanism')
})
