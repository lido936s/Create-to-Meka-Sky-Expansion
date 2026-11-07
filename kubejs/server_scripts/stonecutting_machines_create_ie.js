// =====================================================================
//  Stonecutting depuis les machines KubeJS : Create + Immersive Engineering
//  Minecraft 1.21.1 / NeoForge 21.1.238 / KubeJS 2101.7.x
//  Emplacement : kubejs/server_scripts/stonecutting_machines_create_ie.js
//
//  Complète stonecutting-machines.js (ne redéfinit aucune de ses recettes).
//  Choix volontaires :
//   - pas de immersiveengineering:cokebrick (recette custom dans immersive.js)
//   - pas de light/heavy/rs_engineering (blocs de progression IE)
//   - pas de create:steam_engine, mechanical_mixer, mechanical_press
//     (déjà gardés par tes recettes d'assemblage séquencé)
// =====================================================================

// ---------------------------------------------------------------------
// kubejs:andesite_machine : mécanique de base + IE bois/eau/vent
// ---------------------------------------------------------------------
ServerEvents.recipes(event => {
    const SRC = 'kubejs:andesite_machine';

    // Create
    event.stonecutting('create:millstone', SRC)
    event.stonecutting('create:encased_fan', SRC)
    event.stonecutting('create:mechanical_drill', SRC)
    event.stonecutting('create:mechanical_saw', SRC)
    event.stonecutting('8x create:cogwheel', SRC)
    event.stonecutting('8x create:large_cogwheel', SRC)
    event.stonecutting('2x create:gearbox', SRC)
    event.stonecutting('2x create:clutch', SRC)
    event.stonecutting('2x create:gearshift', SRC)
    event.stonecutting('create:hand_crank', SRC)
    event.stonecutting('create:water_wheel', SRC)
    event.stonecutting('create:windmill_bearing', SRC)
    event.stonecutting('2x create:andesite_door', SRC)

    // Immersive Engineering
    event.stonecutting('8x immersiveengineering:conveyor_basic', SRC)
    event.stonecutting('immersiveengineering:wooden_barrel', SRC)
    event.stonecutting('immersiveengineering:crate', SRC)
    event.stonecutting('immersiveengineering:windmill', SRC)
    event.stonecutting('immersiveengineering:watermill', SRC)
    event.stonecutting('4x immersiveengineering:waterwheel_segment', SRC)
    event.stonecutting('immersiveengineering:hammer', SRC)
});

// ---------------------------------------------------------------------
// kubejs:copper_machine : fluides + électricité basse tension IE
// ---------------------------------------------------------------------
ServerEvents.recipes(event => {
    const SRC = 'kubejs:copper_machine';

    // Create
    event.stonecutting('create:mechanical_pump', SRC)
    event.stonecutting('create:spout', SRC)
    event.stonecutting('create:item_drain', SRC)
    event.stonecutting('2x create:basin', SRC)
    event.stonecutting('2x create:fluid_tank', SRC)
    event.stonecutting('2x create:fluid_valve', SRC)
    event.stonecutting('2x create:smart_fluid_pipe', SRC)
    event.stonecutting('create:hose_pulley', SRC)
    event.stonecutting('create:copper_valve_handle', SRC)
    event.stonecutting('2x create:copper_door', SRC)

    // Immersive Engineering
    event.stonecutting('8x immersiveengineering:fluid_pipe', SRC)
    event.stonecutting('immersiveengineering:fluid_pump', SRC)
    event.stonecutting('4x immersiveengineering:connector_lv', SRC)
    event.stonecutting('4x immersiveengineering:wirecoil_copper', SRC)
    event.stonecutting('immersiveengineering:coil_lv', SRC)
    event.stonecutting('immersiveengineering:capacitor_lv', SRC)
    event.stonecutting('immersiveengineering:dynamo', SRC)
    event.stonecutting('immersiveengineering:metal_barrel', SRC)
});

// ---------------------------------------------------------------------
// kubejs:brass_machine : automatisation Create + moyenne tension IE
// ---------------------------------------------------------------------
ServerEvents.recipes(event => {
    const SRC = 'kubejs:brass_machine';

    // Create
    event.stonecutting('create:mechanical_arm', SRC)
    event.stonecutting('create:deployer', SRC)
    event.stonecutting('2x create:mechanical_crafter', SRC)
    event.stonecutting('2x create:item_vault', SRC)
    event.stonecutting('2x create:smart_chute', SRC)
    event.stonecutting('2x create:redstone_link', SRC)
    event.stonecutting('create:display_link', SRC)
    event.stonecutting('create:stockpile_switch', SRC)
    event.stonecutting('create:content_observer', SRC)
    event.stonecutting('create:rotation_speed_controller', SRC)
    event.stonecutting('create:sequenced_gearshift', SRC)
    event.stonecutting('create:portable_storage_interface', SRC)
    event.stonecutting('2x create:brass_door', SRC)

    // Immersive Engineering
    event.stonecutting('4x immersiveengineering:connector_mv', SRC)
    event.stonecutting('4x immersiveengineering:wirecoil_electrum', SRC)
    event.stonecutting('4x immersiveengineering:wirecoil_steel', SRC)
    event.stonecutting('immersiveengineering:coil_mv', SRC)
    event.stonecutting('immersiveengineering:capacitor_mv', SRC)
    event.stonecutting('immersiveengineering:transformer', SRC)
    event.stonecutting('immersiveengineering:sorter', SRC)
    event.stonecutting('immersiveengineering:fluid_sorter', SRC)
    event.stonecutting('immersiveengineering:item_batcher', SRC)
    event.stonecutting('immersiveengineering:charging_station', SRC)
    event.stonecutting('immersiveengineering:thermoelectric_generator', SRC)
});
