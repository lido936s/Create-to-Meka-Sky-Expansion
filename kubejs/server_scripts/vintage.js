// adding recipe for 4 create:andesite_alloy from exdeorum:porcelain_clay_ball and minecraft:andesite and 100 kubejs:molten_porcelain_clay in vacuumizing
ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.vacuumizing(
        '4x create:andesite_alloy',
        [
            'exdeorum:porcelain_clay_ball',
            'minecraft:andesite'
        ]
    )
    .secondaryFluidInput('kubejs:molten_porcelain_clay', 100)
    .processingTime(500)
});
// fluid pipe
ServerEvents.recipes(event => {
  event.recipes.vintageimprovements.turning(Item.of('create:fluid_pipe', 12), 'minecraft:copper_block').processingTime(300)
});
// sand vibrating to output minecraft:clay_ball
ServerEvents.recipes(event => {
    event.recipes.vintageimprovements.vibrating('minecraft:clay_ball', 'minecraft:sand').processingTime(200)
}); 
