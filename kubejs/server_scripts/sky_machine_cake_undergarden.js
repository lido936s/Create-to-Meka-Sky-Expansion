ServerEvents.recipes(event => {
    // 1. Suppression stricte de la recette originale de Create
    event.remove({ id: 'kubejs:sequenced/sky_machine_cake' });

    // 2. Recette mise à jour avec l'ID valide : veiled_shroom
    event.shaped(
        'kubejs:sky_machine_cake', 
        [
            'DMD',
            'CGE',
            'ABA'
        ],
        {
            M: 'undergarden:veil_mushroom',           // CORRIGÉ (veiled_mushroom -> veiled_shroom)
            C: 'undergarden:cloggrum_ingot',       // Métal de l'Undergarden
            G: 'undergarden:blood_globule',        // Matière organique rouge
            E: 'undergarden:veil_mushroom',         // CORRIGÉ (veiled_mushroom -> veiled_shroom)
            B: 'undergarden:utherium_block',      // Bloc d'utherium de l'Undergarden
            A: 'undergarden:catalyst',            // Catalyseur de l'Undergarden
            D: 'createaddition:cake_base_baked' // Base de gâteau de Create Addition     
        }
    ).id('kubejs:craft/sky_machine_cake_undergarden');
});
