// =====================================================================
//  Crafts complexes avec les variantes d'Andesite Alloy
//  Minecraft 1.21.1 / NeoForge 21.1.238 / KubeJS 2101.7.x
//  Emplacement : kubejs/server_scripts/andesite_alloy_variants_recipes.js
//
//  Les variantes (kubejs:<type>_andesite_alloy) sont créées par
//  andesite_alloy_variants.js : create:andesite_alloy + matériau.
//  Ici, chaque variante devient obligatoire dans une recette d'un item
//  demandé par tes quêtes, dans l'ordre de progression :
//
//   Quête "to_go_to_create"          -> andesite_machine / kinetic_mechanism
//   Quête "advanced_create"          -> mechanical_pump (copper_machine, sealed_mechanism)
//   Quête "advanced_resource_gen."   -> mechanical_drill (Advanced Elements)
//   Quête "create_advanced" (Elite)  -> createaddition:rolling_mill
//   Quête "quality_of_life"          -> rotation_speed_controller
//   Logistique / info (brass_machine)-> redstone_link, display_link, item_vault
//
//  Rôle thématique de chaque variante :
//   iron = structure      obsidian = résistance   ember  = chaleur
//   copper/verdigris = fluides   golden = logique  steel = charge lourde
//   zinc/brass = base Create     ender = sans fil  lapis = information/stockage
//
//  Les anciennes recettes sont retirées avec le filtre `mod:` pour ne pas
//  toucher à tes recettes de stonecutting (id kubejs:...).
//  Les items de sortie restent les mêmes : les quêtes restent valides.
// =====================================================================
ServerEvents.recipes(event => {

    const A = t => 'kubejs:' + t + '_andesite_alloy';

    // ---------------------------------------------------------------
    // Retrait des recettes d'origine (Create / Create Additions)
    // ---------------------------------------------------------------
    [
        'create:mechanical_drill',
        'create:mechanical_pump',
        'create:rotation_speed_controller',
        'create:redstone_link',
        'create:display_link',
        'create:item_vault'
    ].forEach(out => event.remove({ output: out, mod: 'create' }));

    event.remove({ output: 'createaddition:rolling_mill', mod: 'createaddition' });

    // ---------------------------------------------------------------
    // Quête "advanced_create" : Mechanical Pump
    //   copper_machine + sealed_mechanism + cuivre / vert-de-gris
    // ---------------------------------------------------------------
    event.shaped('create:mechanical_pump', [
        'VSV',
        'CMC',
        'VSV'
    ], {
        V: A('verdigris'),
        C: A('copper'),
        S: 'kubejs:sealed_mechanism',
        M: 'kubejs:copper_machine'
    }).id('kubejs:alloy_variants/mechanical_pump');

    // ---------------------------------------------------------------
    // Quête "advanced_resource_generator" : Mechanical Drill
    //   andesite_machine + kinetic_mechanism + obsidienne / braise / fer
    // ---------------------------------------------------------------
    event.shaped('create:mechanical_drill', [
        'OEO',
        'IMI',
        'OKO'
    ], {
        O: A('obsidian'),
        E: A('ember'),
        I: A('iron'),
        K: 'kubejs:kinetic_mechanism',
        M: 'kubejs:andesite_machine'
    }).id('kubejs:alloy_variants/mechanical_drill');

    // ---------------------------------------------------------------
    // Quête "create_advanced" (Create Elite) : Rolling Mill
    //   brass_machine + precision_mechanism + zinc / laiton / acier / fer
    // ---------------------------------------------------------------
    event.shaped('createaddition:rolling_mill', [
        'ZPZ',
        'BMB',
        'SIS'
    ], {
        Z: A('zinc'),
        B: A('brass'),
        S: A('steel'),
        I: A('iron'),
        P: 'create:precision_mechanism',
        M: 'kubejs:brass_machine'
    }).id('kubejs:alloy_variants/rolling_mill');

    // ---------------------------------------------------------------
    // Quête "quality_of_life" : Rotation Speed Controller
    //   brass_machine + precision_mechanism + or (logique) / acier
    // ---------------------------------------------------------------
    event.shaped('create:rotation_speed_controller', [
        'GPG',
        'SBS',
        'GPG'
    ], {
        G: A('golden'),
        S: A('steel'),
        P: 'create:precision_mechanism',
        B: 'kubejs:brass_machine'
    }).id('kubejs:alloy_variants/rotation_speed_controller');

    // ---------------------------------------------------------------
    // Logistique sans fil : Redstone Link (x2) - demande l'alliage ender
    // ---------------------------------------------------------------
    event.shaped('2x create:redstone_link', [
        'EGE',
        'TPT'
    ], {
        E: A('ender'),
        G: A('golden'),
        T: 'create:electron_tube',
        P: 'create:precision_mechanism'
    }).id('kubejs:alloy_variants/redstone_link');

    // ---------------------------------------------------------------
    // Information : Display Link - demande l'alliage lapis
    // ---------------------------------------------------------------
    event.shaped('create:display_link', [
        'LTL',
        'GPG'
    ], {
        L: A('lapis'),
        G: A('golden'),
        T: 'create:electron_tube',
        P: 'create:precision_mechanism'
    }).id('kubejs:alloy_variants/display_link');

    // ---------------------------------------------------------------
    // Stockage lourd : Item Vault (x2) - acier + lapis autour d'un barrel
    // ---------------------------------------------------------------
    event.shaped('2x create:item_vault', [
        'SLS',
        'LBL',
        'SLS'
    ], {
        S: A('steel'),
        L: A('lapis'),
        B: 'minecraft:barrel'
    }).id('kubejs:alloy_variants/item_vault');

});
