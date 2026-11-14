ServerEvents.recipes(event => {
    // Supprimer l'ancienne recette d'assemblage du Bras Robotique
    event.remove({ id: 'modern_industrialization:assembler_generated/electric_age/component/craft/robot_arm' })
    event.remove({ id: 'modern_industrialization:electric_age/component/craft/robot_arm_asbl' })

    // Nouvelle recette : ajout du substrat de circuit surchargé de New Age + Composants cinétiques de Create
    event.recipes.modern_industrialization.assembler(32, 200)
        // --- Composants originaux de MI ---
        .itemIn("modern_industrialization:analog_circuit")
        .itemIn("modern_industrialization:motor")
        .itemIn("modern_industrialization:piston")
        .itemIn("3x modern_industrialization:tin_cable")
        .itemIn("2x #c:rods/steel")
        // --- Nouveaux ajouts : verrouillage New Age ---
        .itemIn("kubejs:overcharged_circuit_substrate")   // Substrat de circuit surchargé (doit d'abord produire de l'électricité avec New Age)
        .itemIn("create_new_age:overcharged_iron_sheet")   // Plaque de fer surchargée
        // --- Nouveaux ajouts : composants cinétiques de Create ---
        .itemIn("create:precision_mechanism")              // Mécanisme de précision (symbole de l'étape cinétique de Create)
        .itemIn("create:brass_casing")                     // Boîtier en laiton
        .itemOut("modern_industrialization:robot_arm")
        .id('kubejs:mi_robot_arm_gated')
})