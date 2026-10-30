ServerEvents.recipes(event => {
    
    // ==========================================
    // 1. BASIC MACHINE HULL (Modern Industrialization)
    // ==========================================
    
    // Suppression de la recette d'origine
    event.remove({ output: 'modern_industrialization:basic_machine_hull' })

    // Assemblage du Hull en utilisant le Steel Casing de Mekanism
    event.recipes.modern_industrialization.assembler(8, 200) 
        .itemInputs([
            '4x modern_industrialization:analog_circuit',
            '3x modern_industrialization:tin_cable',
            '2x modern_industrialization:redstone_battery',
            'modern_industrialization:steel_machine_casing',    
            'mekanism:steel_casing' // Utilisation logique du casing Mekanism ici
        ])
        .itemOutputs([
            'modern_industrialization:basic_machine_hull'
        ])
        .fluidInputs([
            Fluid.of('modern_industrialization:molten_redstone', 100)
        ])


    // ==========================================
    // 2. STEEL CASING (Mekanism via Create Sequenced Assembly)
    // ==========================================
    
    // Évite le softlock en partant du Steel Machine Casing à la place du Hull
    let transitionalItem = 'modern_industrialization:steel_machine_casing'

    event.recipes.create.sequenced_assembly([
        'mekanism:steel_casing' // Récompense finale
    ], 'modern_industrialization:steel_machine_casing', [ // Point de départ modifié
        
        // Étape I : Fixation d'un Moteur Pas-à-Pas
        event.recipes.createDeploying(transitionalItem, [
            transitionalItem, 
            'createaddition:electric_motor'
        ]),
        
        // Étape II : Injection sous pression de Polyéthylène Liquide
        event.recipes.createFilling(transitionalItem, [
            transitionalItem, 
            Fluid.of('modern_industrialization:polyethylene', 250)
        ]),
        
        // Étape III : Alignement et pose d'un lava tube
        event.recipes.createDeploying(transitionalItem, [
            transitionalItem, 
            'create_better_motors:lava_tube'
        ]),
        
        // Étape IV : Premier pressage lourd
        event.recipes.createPressing(transitionalItem, transitionalItem),
        
        // Étape V : Blindage extérieur (Feuille de HDPE Mekanism)
        event.recipes.createDeploying(transitionalItem, [
            transitionalItem, 
            'mekanism:hdpe_sheet'
        ]),
        
        // Étape VI : Pressage final à chaud
        event.recipes.createPressing(transitionalItem, transitionalItem)

    ])
    .transitionalItem(transitionalItem)
    .loops(1)

    // Note : La recette de l'implosion compressor a été volontairement supprimée 
    // pour que le joueur soit forcé d'utiliser votre superbe chaîne de montage Create !

})
