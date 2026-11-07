// Items transitoires pour les assemblages séquencés utilisant
// kubejs:andesite_infused et kubejs:porcelain_plate
StartupEvents.registry('item', event => {
  [
    ['incomplete_deployer', 'Incomplete Deployer'],
    ['incomplete_mechanical_crafter', 'Incomplete Mechanical Crafter'],
    ['incomplete_packager', 'Incomplete Packager'],
    ['incomplete_display_link', 'Incomplete Display Link']
  ].forEach(([id, name]) => event.create(id).displayName(name));
});
