// priority: 1000 add items
StartupEvents.registry('item', event => {
// adding items
//incomplete brass ingot
  event.create('incomplete_brass_ingot')
    .displayName('Incomplete Brass Ingot')
    .texture('kubejs:item/incomplete_brass_ingot');
//incomplete energy pipe
  event.create('incomplete_energy_pipe')
    .displayName('Incomplete Energy Pipe')
    .texture('kubejs:item/incomplete_energy_pipe');
// ancient fragments
 event.create('ancient_fragment')
    .displayName('Ancient Fragment')
    .texture('kubejs:item/ancient_fragment');
// clean ancient fragments
  event.create('clean_ancient_fragment')
    .displayName('Clean Ancient Fragment')
    .texture('kubejs:item/clean_ancient_fragment');
// corrupted fragments
  event.create('corrupted_fragment')
    .displayName('Corrupted Fragment')
    .texture('kubejs:item/corrupted_fragment');
// mineral_slurry
  event.create('mineral_slurry')
    .displayName('Mineral Slurry')
    .texture('kubejs:item/mineral_slurry');
// ionized_mineral_slurry
  event.create('ionized_mineral_slurry')
    .displayName('Ionized Mineral Slurry')
    .texture('kubejs:item/ionized_mineral_slurry');
// charged_slurry
  event.create('charged_slurry')
    .displayName('Charged Slurry')
    .texture('kubejs:item/charged_slurry');
//raw_certus_cluster
  event.create('raw_certus_cluster')
    .displayName('Raw Certus Cluster')
    .texture('kubejs:item/raw_certus_cluster');
// porcelain__plate
  event.create('porcelain_plate')
    .displayName('Porcelain Plate')
    .texture('kubejs:item/porcelain__plate');
});

// remerciement by dev member goldy
// add mechanisms
StartupEvents.registry('item', event => {
	let mechanism = (name, glow) => {
		let id = name.toLowerCase()
		glow = glow == true
		event.create(`${id}_mechanism`).glow(glow).displayName(`${name} Mechanism`)
		event.create(`incomplete_${id}_mechanism`, 'create:sequenced_assembly').displayName(`Incomplete ${name} Mechanism`)
	}
	
	mechanism("Kinetic"),
	mechanism("Sealed")

});

// wire mold
StartupEvents.registry('item', event => {
  event.create('wire_mold')
    .displayName('Wire Mold')
    .texture('kubejs:item/wire_mold')
});
// Plate mold
StartupEvents.registry('item', event => {
  event.create('plate_mold')
    .displayName('Plate Mold')
    .texture('kubejs:item/plate_mold')
});
// diams plate mold
StartupEvents.registry('item', event => {
  event.create('diams_plate')
    .displayName('Diams Plate')
    .texture('kubejs:item/diams_plate')
});
// andesite infused
StartupEvents.registry('item', event => {
  event.create('andesite_infused')
    .displayName('Andesite Infused')
    .texture('kubejs:item/andesite_infused')
});
StartupEvents.registry('item', event => {
    event.create('fire_starter')
        .displayName('Fire Starter')
        .maxStackSize(1)
        .rarity('rare')
});
