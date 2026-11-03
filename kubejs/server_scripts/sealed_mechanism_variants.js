// =====================================================================
//  Variantes du Sealed Mechanism (Minecraft 1.21.1 / NeoForge 21.1.238)
//  KubeJS 2101.7.x - server_scripts
//  - tags : kubejs:sealed_mechanisms (toutes les variantes + la base)
//           kubejs:sealed_mechanisms/iron_body (corps en fer : base + 7 sceaux)
//  - recettes d'obtention (shapeless) :
//      1) mécanisme à corps fer + teinture      -> variante de sceau
//      2) kubejs:sealed_mechanism + lingot/bloc -> variante de corps (sceau rouge)
//      3) variante de corps + teinture          -> variante corps + sceau
// =====================================================================
// [corps, sceau] : 'iron' = corps en fer d'origine, 'red' = sceau rouge d'origine
const SEALED_VARIANTS = [
    ['iron', 'blue'],
    ['iron', 'green'],
    ['iron', 'purple'],
    ['iron', 'gold'],
    ['iron', 'cyan'],
    ['iron', 'pink'],
    ['iron', 'black'],
    ['brass', 'red'],
    ['copper', 'red'],
    ['golden', 'red'],
    ['steel', 'red'],
    ['obsidian', 'red'],
    ['verdigris', 'red'],
    ['brass', 'green'],
    ['copper', 'blue'],
    ['golden', 'purple'],
    ['obsidian', 'cyan'],
    ['steel', 'gold'],
    ['verdigris', 'pink']
];

// Génère l'ID d'objet (sans namespace) à partir du couple [corps, sceau]
function sealedVariantId(body, seal) {
    if (body === 'iron') return 'sealed_mechanism_' + seal + '_seal';
    if (seal === 'red')  return body + '_sealed_mechanism';
    return body + '_sealed_mechanism_' + seal + '_seal';
}

// Matériau qui change le corps du mécanisme
const BODY_MATERIAL = {
    brass:     'create:brass_ingot',
    copper:    'minecraft:copper_ingot',
    golden:    'minecraft:gold_ingot',
    steel:     '#c:ingots/steel',
    obsidian:  'minecraft:obsidian',
    verdigris: 'minecraft:oxidized_copper'
};

// Teinture qui change la couleur du sceau
const SEAL_DYE = {
    blue:   'minecraft:blue_dye',
    green:  'minecraft:green_dye',
    purple: 'minecraft:purple_dye',
    gold:   'minecraft:yellow_dye',
    cyan:   'minecraft:cyan_dye',
    pink:   'minecraft:pink_dye',
    black:  'minecraft:black_dye'
};

ServerEvents.tags('item', event => {
    event.add('kubejs:sealed_mechanisms', 'kubejs:sealed_mechanism');
    event.add('kubejs:sealed_mechanisms/iron_body', 'kubejs:sealed_mechanism');
    SEALED_VARIANTS.forEach(v => {
        let id = 'kubejs:' + sealedVariantId(v[0], v[1]);
        event.add('kubejs:sealed_mechanisms', id);
        if (v[0] === 'iron') event.add('kubejs:sealed_mechanisms/iron_body', id);
    });
});

ServerEvents.recipes(event => {
    SEALED_VARIANTS.forEach(v => {
        let body = v[0], seal = v[1];
        let out = 'kubejs:' + sealedVariantId(body, seal);
        let rid = 'kubejs:sealed_mechanism_variants/' + sealedVariantId(body, seal);

        if (body === 'iron') {
            // 1) changer la couleur du sceau (corps fer)
            event.shapeless(out, ['#kubejs:sealed_mechanisms/iron_body', SEAL_DYE[seal]]).id(rid);
        } else if (seal === 'red') {
            // 2) changer le corps (sceau rouge d'origine)
            event.shapeless(out, ['kubejs:sealed_mechanism', BODY_MATERIAL[body]]).id(rid);
        } else {
            // 3) corps + sceau : on teint la variante de corps
            event.shapeless(out, ['kubejs:' + sealedVariantId(body, 'red'), SEAL_DYE[seal]]).id(rid);
        }
    });

    // ---- OPTIONNEL : accepter toutes les variantes dans les recettes existantes ----
    // Décommente pour que n'importe quelle variante serve de base dans smithing-machines.js
    // event.smithing('2x create:fluid_tank', '#c:barrels', '#kubejs:sealed_mechanisms', 'kubejs:copper_machine');
});
