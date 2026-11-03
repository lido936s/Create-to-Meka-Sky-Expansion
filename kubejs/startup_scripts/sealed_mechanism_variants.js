// priority: 900
// =====================================================================
//  Variantes du Sealed Mechanism (Minecraft 1.21.1 / NeoForge 21.1.238)
//  KubeJS 2101.7.x - startup_scripts
//  Enregistre les 19 variantes. Les textures sont dans
//  kubejs/assets/kubejs/textures/item/<id>.png (même nom que l'ID).
//  L'objet de base kubejs:sealed_mechanism reste déclaré dans items.js.
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
const BODY_NAMES = {"brass": "Brass", "copper": "Copper", "golden": "Golden", "steel": "Steel", "obsidian": "Obsidian", "verdigris": "Verdigris"};
const SEAL_NAMES = {"blue": "Blue", "green": "Green", "purple": "Purple", "gold": "Gold", "cyan": "Cyan", "pink": "Pink", "black": "Black"};

// Génère l'ID d'objet (sans namespace) à partir du couple [corps, sceau]
function sealedVariantId(body, seal) {
    if (body === 'iron') return 'sealed_mechanism_' + seal + '_seal';
    if (seal === 'red')  return body + '_sealed_mechanism';
    return body + '_sealed_mechanism_' + seal + '_seal';
}

function sealedVariantName(body, seal) {
    let name = (body === 'iron' ? '' : BODY_NAMES[body] + ' ') + 'Sealed Mechanism';
    if (seal !== 'red') name += ' (' + SEAL_NAMES[seal] + ' Seal)';
    return name;
}

StartupEvents.registry('item', event => {
    SEALED_VARIANTS.forEach(v => {
        let id = sealedVariantId(v[0], v[1]);
        event.create(id)
            .displayName(sealedVariantName(v[0], v[1]))
            .texture('kubejs:item/' + id);
    });
});
