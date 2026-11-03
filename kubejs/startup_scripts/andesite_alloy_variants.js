// priority: 900
// =====================================================================
//  Variantes de l'Andesite Alloy (Minecraft 1.21.1 / NeoForge 21.1.238)
//  KubeJS 2101.7.x - startup_scripts
//  Enregistre 11 objets kubejs:<type>_andesite_alloy
//  Textures : kubejs/assets/kubejs/textures/item/<id>.png
//  L'objet de base create:andesite_alloy n'est pas modifié.
// =====================================================================
(function () {
    const ALLOY_TYPES = ['copper', 'brass', 'zinc', 'golden', 'iron', 'steel', 'obsidian', 'verdigris', 'ember', 'ender', 'lapis'];
    const ALLOY_NAMES = {
        copper: 'Copper',
        brass: 'Brass',
        zinc: 'Zinc',
        golden: 'Golden',
        iron: 'Iron',
        steel: 'Steel',
        obsidian: 'Obsidian',
        verdigris: 'Verdigris',
        ember: 'Ember',
        ender: 'Ender',
        lapis: 'Lapis'
    };

    StartupEvents.registry('item', event => {
        ALLOY_TYPES.forEach(type => {
            let id = type + '_andesite_alloy';
            event.create(id)
                .displayName(ALLOY_NAMES[type] + ' Andesite Alloy')
                .texture('kubejs:item/' + id);
        });
    });
})();
