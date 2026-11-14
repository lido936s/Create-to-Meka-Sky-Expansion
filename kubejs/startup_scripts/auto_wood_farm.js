// kubejs/startup_scripts/auto_wood_farm.js
// Enregistrement du bloc "Ferme à Bois Automatique" (KubeJS 2101.7.2 build 377 - API vérifiée sur ton jar).
// La logique de production est dans server_scripts/auto_wood_farm.js (rechargeable avec /reload).

StartupEvents.registry('block', event => {
  event.create('auto_wood_farm')
    .displayName('Auto Wood Farm')
    .soundType('wood')
    .hardness(2.5)
    .resistance(3.0)
    .tagBlock('minecraft:mineable/axe')
    .blockEntity(info => {
      // inventaire 9x3 accessible depuis les 6 faces (hopper, Pipez, Mekanism, AE2, IE, MI...)
      info.inventory('inventory', Direction.ALL_SET, 9, 3);
      // clic droit = ouvre l'inventaire
      info.rightClickOpensInventory('inventory');
      // tick côté serveur toutes les 200 ticks (10 s) -> événement BlockEvents.blockEntityTick
      info.serverTicking();
      info.tickFrequency(200);
    });
});
