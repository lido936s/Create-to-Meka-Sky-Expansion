// Items transitoires pour les assemblages utilisant
// ftbstuff:tempered_jar et ftbstuff:auto_processing_block
StartupEvents.registry('item', event => {
  [
    ['incomplete_basin', 'Incomplete Basin'],
    ['incomplete_item_drain', 'Incomplete Item Drain'],
    ['incomplete_mechanical_arm', 'Incomplete Mechanical Arm'],
    ['incomplete_smart_chute', 'Incomplete Smart Chute']
  ].forEach(([id, name]) => event.create(id).displayName(name));
});
