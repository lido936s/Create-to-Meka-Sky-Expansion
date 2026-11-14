// kubejs/startup_scripts/heavy_core_chemicals.js
StartupEvents.registry('mekanism:chemical', event => {
    event.create('kubejs:heavy_core_slurry')
        .tint(0x4B0082) // Indigo, identique à votre fluide original
        .displayName('Heavy Core Slurry');
});