// =====================================================================
//  Hanging Roots : recette Mekanism + Create
//  Minecraft 1.21.1 / NeoForge 21.1.238 / KubeJS 2101.7.x
//  Emplacement : kubejs/server_scripts/hanging_roots.js
//  Addons requis (déjà dans ton pack) : kubejs-mekanism, kubejs-create
//
//  Chaîne :
//   1) Mekanism - Metallurgic Infuser :
//        dirt + 20 mB d'infusion "bio"  ->  rooted_dirt
//   2) Create - Deployer :
//        string (sur tapis) + rooted_dirt tenu par le Deployer
//        ->  hanging_roots
//        Le rooted_dirt N'EST PAS consommé (keepHeldItem) : un seul
//        rooted_dirt sert d'outil pour fabriquer autant de racines
//        que voulu.
// =====================================================================
ServerEvents.recipes(event => {

    // 1) Mekanism : sol enrichi en biomasse
    event.recipes.mekanism.metallurgic_infusing(
        'minecraft:rooted_dirt',
        'minecraft:dirt',
        '20x mekanism:bio'
    ).id('kubejs:mekanism/rooted_dirt_from_bio')

    // 2) Create : les racines poussent sous le Deployer
    event.recipes.create.deploying(
        'minecraft:hanging_roots',
        ['minecraft:string', 'minecraft:rooted_dirt']
    ).keepHeldItem()
     .id('kubejs:create/hanging_roots_deploying')

});
