// kubejs/startup_scripts/wood.js

StartupEvents.registry('block', event => {
    // Enregistrement minimaliste et robuste pour Minecraft 1.21.1
    event.create('wood_ore')
        .displayName('Minerai de Bois')
        .soundType('wood')
        .hardness(2.0)
        .resistance(3.0)
        .requiresTool(true)
        .tagBlock('mineable/axe')
        .tagBlock('minecraft:needs_stone_tool');
});

StartupEvents.registry('item', event => {
    // Enregistrement du morceau de bois brut
    event.create('raw_wood_ore')
        .displayName('Bois Brut Cristallisé');
});

StartupEvents.registry('fluid', event => {
    // Enregistrement du liquide spécial (sève)
    event.create('liquid_wood')
        .displayName('Sève Concentrée')
        .stillTexture('kubejs:fluid/liquid_wood_still')
        .flowingTexture('kubejs:fluid/liquid_wood_flow')
        .tint(0x8B5A2B); 
});
