StartupEvents.registry('fluid', event => {
    
    // 1. Fluide pour le Nether Cake (Teinte rouge/lave)
    event.create('nether_cake_batter')
        .displayName('Pâte de Gâteau du Nether')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .tint(0x8B0000) // Rouge sombre
        .noBlock();

    // 2. Fluide pour le Lost Cities Cake (Teinte grise/béton urbain)
    event.create('lost_cities_cake_batter')
        .displayName('Pâte de Gâteau des Cités Perdues')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .tint(0x708090) // Gris ardoise
        .noBlock();

    // 3. Fluide pour l'End Cake (Teinte violette/Ender)
    event.create('end_cake_batter')
        .displayName("Pâte de Gâteau de l'End")
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .tint(0x4B0082) // Indigo / Violet foncé
        .noBlock();

    // 4. Fluide de base pour la pâte à gâteau (Teinte crème)
    event.create('cake_batter')
        .displayName('Pâte à Gâteau Liquide')
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .tint(0xFFF5E6) // Blanc/crème
        .noBlock();

});
