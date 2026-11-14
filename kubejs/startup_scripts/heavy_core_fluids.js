StartupEvents.registry('fluid', event => {

    // Slurry intermédiaire pour Mekanism
    event.create('heavy_core_slurry', 'thick') // 'thick' imite le comportement de la lave
        .displayName('Heavy Core Slurry')
        .tint(0x4B0082); // La couleur s'applique au fluide et au seau

    // Optionnel : Netherite fondu pour Create
    event.create('molten_netherite', 'thick')
        .displayName('Molten Netherite')
        .tint(0x2F1B3A);
});