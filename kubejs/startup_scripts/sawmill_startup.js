// kubejs/startup_scripts/sawmill_startup.js

StartupEvents.registry('block', event => {
    // 1. La Scie Mécanique Centrale
    event.create('mechanical_sawmill')
        .displayName('Scie Mécanique de Scierie')
        .soundType('wood')
        .hardness(2.5)
        .resistance(3.0)
        .tagBlock('minecraft:mineable/axe')
        .property(BlockProperties.HORIZONTAL_FACING);

    // 2. Le Bloc Moteur / Entrée Carburant
    event.create('fuel_input')
        .displayName("Moteur de Scierie (Entrée Carburant)")
        .soundType('metal')
        .hardness(3.5)
        .resistance(5.0)
        .tagBlock('minecraft:mineable/pickaxe');

    // 3. Le Bloc de Sortie des Objets
    event.create('sawmill_output')
        .displayName('Bouche de Sortie de Scierie')
        .soundType('metal')
        .hardness(3.0)
        .resistance(4.0)
        .tagBlock('minecraft:mineable/pickaxe');
});
