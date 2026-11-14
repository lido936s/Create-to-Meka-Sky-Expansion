Ponder.registry((event) => {
    event.create("meka_sky:sawmill")
        .scene("sawmill_scene", "Multibloc Sawmill : Charbon + 32 SU", (scene, util) => {

            scene.showBasePlate();
            scene.idle(10);

            // ===== Étage 1 =====
            scene.world.setBlocks([1, 1, 1, 3, 1, 3], "create:andesite_casing", false);
            scene.world.setBlock([1, 1, 1], "create:brass_casing", false);
            scene.world.setBlock([3, 1, 1], "create:brass_casing", false);
            scene.world.setBlock([1, 1, 3], "create:brass_casing", false);
            scene.world.setBlock([3, 1, 3], "create:brass_casing", false);
            scene.world.setBlock([2, 1, 2], "create:chute", false);

            // ✅ Afficher l'étage 1 (animation de chute)
            scene.world.showSection([1, 1, 1, 3, 1, 3], Direction.down);
            scene.idle(15);
            scene.text(60, "Étage 1 : Base renforcée avec goulotte d'évacuation", [2, 1.5, 2]);
            scene.idle(60);

            // ===== Étage 2 =====
            scene.world.setBlock([1, 2, 1], "create:metal_girder", false);
            scene.world.setBlock([3, 2, 1], "create:metal_girder", false);
            scene.world.setBlock([1, 2, 3], "create:metal_girder", false);
            scene.world.setBlock([3, 2, 3], "create:metal_girder", false);
            scene.world.setBlock([1, 2, 2], "create:depot", false);
            scene.world.setBlock([3, 2, 2], "create:depot", false);
            scene.world.setBlock([2, 2, 1], "create:shaft", false);
            scene.world.setBlock([2, 2, 3], "create:shaft", false);
            scene.world.setBlock([2, 2, 2], "meka_sky:sawmill", false);

            // ✅ Afficher l'étage 2
            scene.world.showSection([1, 2, 1, 3, 2, 3], Direction.down);
            scene.idle(15);
            scene.text(80, "Étage 2 : Dépôts + arbres de transmission + contrôleur", [2, 2.5, 2]);
            scene.idle(80);

            // ===== Étage 3 =====
            scene.world.setBlock([1, 3, 1], "create:metal_girder", false);
            scene.world.setBlock([3, 3, 1], "create:metal_girder", false);
            scene.world.setBlock([1, 3, 2], "create:metal_girder", false);
            scene.world.setBlock([3, 3, 2], "create:metal_girder", false);
            scene.world.setBlock([1, 3, 3], "create:metal_girder", false);
            scene.world.setBlock([3, 3, 3], "create:metal_girder", false);
            scene.world.setBlock([2, 3, 1], "create:mechanical_saw", false);
            scene.world.setBlock([2, 3, 2], "create:shaft", false);

            // ✅ Afficher l'étage 3
            scene.world.showSection([1, 3, 1, 3, 3, 3], Direction.down);
            scene.idle(15);
            scene.text(80, "Étage 3 : Lame de scie mécanique + portique métallique", [2, 3.5, 2]);
            scene.idle(80);

            // ===== Explications =====
            scene.overlay.showOutline("red", "sawmill_controller", [2, 2, 2], 60);
            scene.text(100, "Le contrôleur central gère la recette et l'inventaire", [2, 2.5, 2]);
            scene.idle(100);

            scene.overlay.showOutline("green", "saw_blade", [2, 3, 1], 80);
            scene.text(120, "La scie mécanique doit tourner à au moins 32 RPM (32 SU)", [2, 3.5, 1]);
            scene.idle(120);

            scene.showControls(60, [2, 2.5, 2], "down").withItem("minecraft:coal");
            scene.text(100, "Le charbon (ou charbon de bois) alimente la machine", [2, 2.5, 2]);
            scene.idle(100);

            scene.text(120, "Placez vos bûches dans le dépôt : chaque scie consomme 1 charbon", [2, 2.5, 2]);
            scene.idle(120);

            scene.markAsFinished();
        });
});