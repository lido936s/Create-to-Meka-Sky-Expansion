// ============================================================
// 📜 UNDERGARDEN × CREATE - RECETTES DE BASE (CORRIGÉ 1.21.1)
// Modpack: Create to Meka: Sky Expansion
// Minecraft: 1.21.1 | NeoForge: 21.1.238
// ============================================================

ServerEvents.recipes(event => {

    // ==========================================
    // ⚙️ RECETTES CINÉTIQUES DE BASE
    // ==========================================

    // --- Roue Dentée (Cogwheel) ---
    event.shaped(
        Item.of('create:cogwheel', 4),
        [
            ' P ',
            'DDD',
            ' P '
        ], {
            P: 'undergarden:wigglewood_planks',
            D: 'undergarden:depthrock_pebble',
        }
    ).id('lido:cogwheel_from_undergarden')

    // --- Axe (Shaft) ---
    event.shaped(
        Item.of('create:shaft', 8),
        [
            'A A',
            ' R ',
            'A A'
        ], {
            A: 'create:andesite_alloy',
            R: 'undergarden:regalium_crystal',
        }
    ).id('lido:shaft_with_regalium')

    // --- Roue Hydraulique (Water Wheel) ---
    event.shaped(
        Item.of('create:water_wheel', 1),
        [
            'PPP',
            'SUS',
            'PPP'
        ], {
            P: 'undergarden:grongle_planks', // Corrigé gribucca -> grongle
            S: 'create:shaft',
            U: 'undergarden:utherium_crystal', // Corrigé shard -> crystal
        }
    ).id('lido:water_wheel_undergarden')

    // --- Grande Roue Hydraulique ---
    event.shaped(
        Item.of('create:large_water_wheel', 1),
        [
            'PPP',
            'SWS',
            'PPP'
        ], {
            P: 'undergarden:grongle_planks', // Corrigé gribucca -> grongle
            S: 'create:shaft',
            W: 'create:water_wheel',
        }
    ).id('lido:large_water_wheel_undergarden')

    // ==========================================
    // 📦 RECETTES DE BOÎTIERS (CASING)
    // ==========================================

    // --- Boîtier Andésite ---
    event.recipes.create.deploying(
        'create:andesite_casing',
        [
            'undergarden:grongle_planks',
            'create:andesite_alloy'
        ]
    ).id('lido:andesite_casing_undergarden')

    // --- Boîtier Laiton ---
    event.recipes.create.deploying(
        'create:brass_casing',
        [
            'undergarden:wigglewood_planks',
            'create:brass_ingot'
        ]
    ).id('lido:brass_casing_undergarden')

    // ==========================================
    // 🔩 RECETTES DE COMPOSANTS
    // ==========================================

    // --- Dépôt (Depot) ---
    event.shaped(
        Item.of('create:depot', 1),
        [
            ' A ',
            'DDD'
        ], {
            A: 'create:andesite_alloy',
            D: 'undergarden:depthrock',
        }
    ).id('lido:depot_depthrock')

    // --- Boîte de Vitesses (Gearbox) ---
    event.shaped(
        Item.of('create:gearbox', 1),
        [
            ' C ',
            'CRC',
            ' C '
        ], {
            C: 'create:cogwheel',
            R: 'undergarden:regalium_crystal',
        }
    ).id('lido:gearbox_regalium')

    // --- Presse Mécanique (Mechanical Press) ---
    event.shaped(
        Item.of('create:mechanical_press', 1),
        [
            ' U ',
            'SCS',
            ' A '
        ], {
            U: 'undergarden:utherium_block',
            S: 'undergarden:utherium_crystal', // Corrigé shard -> crystal
            C: 'create:andesite_casing',
            A: 'create:shaft',
        }
    ).id('lido:mechanical_press_utherium')

    // --- Mixeur Mécanique (Mechanical Mixer) ---
    event.shaped(
        Item.of('create:mechanical_mixer', 1),
        [
            ' R ',
            'CAC',
            ' S '
        ], {
            R: 'undergarden:regalium_crystal',
            C: 'create:cogwheel',
            A: 'create:andesite_casing',
            S: 'create:shaft',
        }
    ).id('lido:mechanical_mixer_regalium')

    // --- Scie Mécanique (Mechanical Saw) ---
    event.shaped(
        Item.of('create:mechanical_saw', 1),
        [
            ' U ',
            'UPU',
            ' A '
        ], {
            U: 'undergarden:utherium_crystal', // Corrigé shard -> crystal
            P: 'undergarden:depthrock_pebble',
            A: 'create:andesite_casing',
        }
    ).id('lido:mechanical_saw_utherium')

    // --- Ventilateur Encapsulé (Encased Fan) ---
    event.shaped(
        Item.of('create:encased_fan', 1),
        [
            ' R ',
            'SAS',
            ' U '
        ], {
            R: 'undergarden:regalium_crystal',
            S: 'create:cogwheel',
            A: 'create:andesite_casing',
            U: 'undergarden:utherium_crystal', // Corrigé shard -> crystal
        }
    ).id('lido:encased_fan_undergarden')

    // ==========================================
    // 💧 RECETTES FLUIDES
    // ==========================================

    // --- Pompe Mécanique (Mechanical Pump) ---
    event.shaped(
        Item.of('create:mechanical_pump', 1),
        [
            ' R ',
            'CAC',
            ' U '
        ], {
            R: 'undergarden:regalium_crystal',
            C: 'create:cogwheel',
            A: 'create:andesite_casing',
            U: 'undergarden:utherium_crystal', // Corrigé shard -> crystal
        }
    ).id('lido:mechanical_pump_undergarden')

    // --- Tuyau à Fluide (Fluid Pipe) ---
    event.shaped(
        Item.of('create:fluid_pipe', 8),
        [
            'CRC'
        ], {
            C: 'minecraft:copper_ingot',
            R: 'minecraft:iron_nugget',
        }
    ).id('lido:fluid_pipe_regalium_plated')

    // --- Réservoir à Fluide (Fluid Tank) ---
    event.shaped(
        Item.of('create:fluid_tank', 1),
        [
            'DCD',
            'C C',
            'DCD'
        ], {
            D: 'undergarden:depthrock',
            C: 'minecraft:copper_ingot',
        }
    ).id('lido:fluid_tank_depthrock')

    // --- Robinet (Spout) ---
    event.shaped(
        Item.of('create:spout', 1),
        [
            ' C ',
            'RPR',
            ' B '
        ], {
            C: 'create:copper_casing',
            R: 'undergarden:regalium_crystal',
            P: 'create:fluid_pipe',
            B: 'minecraft:copper_ingot',
        }
    ).id('lido:spout_regalium')

    // ==========================================
    // 🔧 RECETTES ADDITIONNELLES
    // ==========================================

    // --- Remplacement de la Grande Roue Dentée (Via Deployer de Create) ---
    // Applique directement des planches sur une petite roue pour en faire une grande
    event.recipes.create.deploying(
        'create:large_cogwheel',
        [
            'create:cogwheel',
            'undergarden:smogstem_planks'
        ]
    ).id('lido:large_cogwheel_via_deployer')

})
