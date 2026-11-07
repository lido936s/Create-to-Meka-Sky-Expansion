// =====================================================================
//  Quarry de Modern Industrialization : drills Create + Immersive Engineering
//  Minecraft 1.21.1 / NeoForge 21.1.238 / KubeJS 2101.7.x
//  Modern Industrialization 2.5.11
//  Emplacement : kubejs/server_scripts/mi_quarry_create_ie_drills.js
//
//  Principe : la quarry MI utilise un item "drill" en entrée avec une
//  probabilité d'usure (comme le fait mi_moredrill pour le desh).
//  Ici, 3 nouveaux "drills" venant de Create / IE :
//
//   Palier A  create:mechanical_drill            (4 EU/t)  -> minerais Create + vanilla
//   Palier B  immersiveengineering:drillhead_iron  (8 EU/t)  -> minerais IE (1re série)
//   Palier C  immersiveengineering:drillhead_steel (12 EU/t) -> minerais IE (2e série) + uranium
//
//  Les têtes de forage IE se craftent déjà dans IE (fer / acier) et le
//  Mechanical Drill dans Create : rien à enregistrer en startup.
// =====================================================================
ServerEvents.recipes(event => {

    // Raccourci : fabrique une recette de quarry MI
    //   id       : identifiant unique de la recette
    //   eu       : EU/t consommés
    //   drill    : item utilisé comme foret
    //   wear     : probabilité que le drill soit consommé à chaque cycle
    //   outputs  : [[item, probabilité], ...]  (1 bloc de minerai par sortie)
    const quarry = (id, eu, drill, wear, outputs) => {
        event.custom({
            type: 'modern_industrialization:quarry',
            eu: eu,
            duration: 600,
            item_inputs: [
                { item: drill, amount: 1, probability: wear }
            ],
            item_outputs: outputs.map(o => ({
                item: o[0],
                amount: o[2] || 1,
                probability: o[1]
            }))
        }).id('kubejs:quarry/' + id)
    }

    // -----------------------------------------------------------------
    // Palier A : Mechanical Drill (Create)
    // -----------------------------------------------------------------
    quarry('create_mechanical_drill', 4, 'create:mechanical_drill', 0.06, [
        ['minecraft:cobblestone',            0.50, 32],
        ['minecraft:andesite',               0.25, 16],
        ['minecraft:gravel',                 0.40, 10],
        ['create:zinc_ore',                  0.25],
        ['create:deepslate_zinc_ore',        0.15],
        ['minecraft:iron_ore',               0.30],
        ['minecraft:copper_ore',             0.30],
        ['minecraft:coal_ore',               0.30]
    ])

    // -----------------------------------------------------------------
    // Palier B : tête de forage en fer (Immersive Engineering)
    // -----------------------------------------------------------------
    quarry('ie_drillhead_iron', 8, 'immersiveengineering:drillhead_iron', 0.08, [
        ['minecraft:copper_ore',                       0.25],
        ['immersiveengineering:ore_lead',              0.25],
        ['immersiveengineering:ore_silver',            0.20],
        ['immersiveengineering:ore_nickel',            0.20],
        ['immersiveengineering:ore_aluminum',          0.25],
        ['immersiveengineering:deepslate_ore_lead',    0.15],
        ['immersiveengineering:deepslate_ore_silver',  0.12],
        ['immersiveengineering:deepslate_ore_nickel',  0.12],
        ['immersiveengineering:deepslate_ore_aluminum',0.15]
    ])

    // -----------------------------------------------------------------
    // Palier C : tête de forage en acier (Immersive Engineering)
    // -----------------------------------------------------------------
    quarry('ie_drillhead_steel', 12, 'immersiveengineering:drillhead_steel', 0.05, [
        ['immersiveengineering:ore_uranium',           0.15],
        ['immersiveengineering:deepslate_ore_uranium', 0.12],
        ['immersiveengineering:ore_silver',            0.25],
        ['immersiveengineering:ore_nickel',            0.25],
        ['immersiveengineering:deepslate_ore_silver',  0.18],
        ['immersiveengineering:deepslate_ore_nickel',  0.18],
        ['minecraft:diamond_ore',                      0.10],
        ['minecraft:redstone_ore',                     0.20]
    ])

});
