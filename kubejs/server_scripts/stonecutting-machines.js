// adding stonecutting recipes from kubejs:andesite_machine
ServerEvents.recipes(event => {
event.stonecutting('create:mechanical_plough', 'kubejs:andesite_machine'),
event.stonecutting('create:mechanical_harvester', 'kubejs:andesite_machine'),
event.stonecutting('16x create:shaft', 'kubejs:andesite_machine'),
event.stonecutting('4x create:andesite_tunnel', 'kubejs:andesite_machine'),
event.stonecutting('8x create:andesite_funnel', 'kubejs:andesite_machine'),
event.stonecutting('vintageimprovements:spring_coiling_machine_wheel', 'kubejs:andesite_machine')
});
// adding stonecutting recipes from kubejs:copper_machine
ServerEvents.recipes(event => {
event.stonecutting('16x create:fluid_pipe', 'kubejs:copper_machine'),
event.stonecutting('create:portable_fluid_interface', 'kubejs:copper_machine')
});
// adding stonecutting recipes from kubejs:brass_machine
ServerEvents.recipes(event => {
event.stonecutting('create:brass_hand', 'kubejs:brass_machine'),
event.stonecutting('2x create:brass_funnel', 'kubejs:brass_machine'),
event.stonecutting('2x create:brass_tunnel', 'kubejs:brass_machine')
});