// Cook 1 exdeorum:unfired_porcelain_crucible into 1 exdeorum:porcelain_crucible in a Furnace:
ServerEvents.recipes(event => {
event.smelting('exdeorum:porcelain_crucible', 'exdeorum:unfired_porcelain_crucible')
});
// Cook 1 quark:sturdy_stone into 1 exdeorum:compressed_cobblestone in a Furnace:
ServerEvents.recipes(event => {
event.smelting('exdeorum:compressed_cobblestone', 'quark:sturdy_stone')
});
// Cook 1 clayable:hardened_clay_ball into 2 minecraft:clay in a Furnace:
ServerEvents.recipes(event => {
event.smelting('minecraft:clay_ball', 'clayable:hardened_clay_ball')
});
// Cook 1 exdeorum:unfired_porcelain_crucible into 1 exdeorum:porcelain_crucible in a Furnace:
ServerEvents.recipes(event => {
  // 1 paper -> ash 
  event.smelting('supplementaries:ash', 'minecraft:paper')

});