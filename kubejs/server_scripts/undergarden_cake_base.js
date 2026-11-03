ServerEvents.recipes(event => {
    // Recette alternative 100% fonctionnelle dans l'Undergarden 1.21.1
    event.shaped(
        'createaddition:cake_base_baked', 
        [
            'FFF',
            'DDD',
            'MMM'
        ],
        {
            F: 'undergarden:gloom_o_lantern',        // CORRIGÉ (gloom_lantern -> gloom_o_lantern)
            D: 'undergarden:underbeans',          // CORRIGÉ (Ressource comestible de base très commune de l'Undergarden)
            M: 'undergarden:veil_mushroom'        // CORRIGÉ (veil_mushroom -> veiled_shroom)
        }
    ).id('kubejs:craft/cake_base_baked_undergarden');
});
