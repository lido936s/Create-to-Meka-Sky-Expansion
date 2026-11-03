// =====================================================================
//  SKY MACHINE : plateforme de départ + recette du Gâteau
//  Minecraft 1.21.1 / NeoForge 21.1.238 - KubeJS 2101.7.x
// =====================================================================
(function () {
    // ----------------------------- RÉGLAGES -----------------------------
    const DIMENSION = 'kubejs:sky_machine';
    const PLATFORM_VERSION = 1;        // change ce nombre pour reconstruire la plateforme
    const RADIUS = 12;                 // plateforme circulaire de 25 blocs de diamètre
    const Y = 64;                      // hauteur de la surface
    const TOP = 'minecraft:polished_andesite';
    const BASE = 'minecraft:stone';
    const BORDER = 'create:andesite_casing';
    const DEPTH = 3;                   // épaisseur totale (surface + 2 couches de base)
    // --------------------------------------------------------------------

    // Plateforme de départ, construite une seule fois au chargement du serveur.
    // Elle est indispensable : BBL Portals place le portail d'arrivée sur un bloc solide trouvé
    // autour de la destination ; dans le vide il serait sinon créé en plein ciel.
    ServerEvents.loaded(event => {
        const server = event.server;
        const key = 'sky_machine_platform_v' + PLATFORM_VERSION;
        if (server.persistentData.getBoolean(key)) return;

        const level = server.getLevel(DIMENSION);
        if (!level) {
            console.error('[Sky Machine] Dimension introuvable : ' + DIMENSION + ' (kubejs/data/kubejs/dimension/sky_machine.json présent ?)');
            return;
        }

        let placed = 0;
        for (let x = -RADIUS; x <= RADIUS; x++) {
            for (let z = -RADIUS; z <= RADIUS; z++) {
                const d2 = x * x + z * z;
                if (d2 > RADIUS * RADIUS) continue;
                const edge = d2 > (RADIUS - 1) * (RADIUS - 1);
                for (let i = 0; i < DEPTH; i++) {
                    let id = i === 0 ? (edge ? BORDER : TOP) : BASE;
                    level.getBlock(x, Y - i, z).set(id);
                    placed++;
                }
            }
        }
        server.persistentData.putBoolean(key, true);
        console.info('[Sky Machine] Plateforme construite (' + placed + ' blocs, rayon ' + RADIUS + ', y=' + Y + ')');
    });


    // Recette du gâteau : assemblage séquencé Create, dans le style de tes gâteaux de dimension.
    // La 1re étape (membrane de phantom) est unique : les gâteaux Nether/End commencent par le remplissage.
   // ServerEvents.recipes(event => {
      //  const transitional = 'createaddition:cake_base_baked';
       // event.recipes.create.sequenced_assembly([
       //     'kubejs:sky_machine_cake'
       // ], 'expandeddelight:cheese_wheel', [
       //     event.recipes.create.deploying(transitional, [transitional, 'minecraft:phantom_membrane']),
       //     event.recipes.create.filling(transitional, [transitional, Fluid.of('kubejs:cake_batter', 250)]),
       //     event.recipes.create.deploying(transitional, [transitional, 'create:precision_mechanism']),
       //     event.recipes.create.pressing(transitional, transitional)
       // ]).transitionalItem(transitional).loops(1).id('kubejs:sequenced/sky_machine_cake');
  //  });
})();
