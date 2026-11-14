// kubejs:infused_porcelain_plate - variante simple de kubejs:porcelain_plate
// Branche 1.03 - NeoForge 21.1.238 / MC 1.21.1
StartupEvents.registry('item', event => {
  event.create('infused_porcelain_plate')
    .displayName('Infused Porcelain Plate')
    .texture('kubejs:item/infused_porcelain_plate')
    .glow(true); // petit effet brillant, retire cette ligne si tu n'en veux pas
});
