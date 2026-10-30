// change recipe for mekanism:metallurgic_infuser
ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'mekanism:metallurgic_infuser' },
    '#c:ingots/osmium',
    'srgens:refined_ore_gen'
  )
});
// change recipe for mekanism:metallurgic_infuser
ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'mekanism:metallurgic_infuser' },
    '#c:ingots/iron',
    '#c:plates/iron'
  )
});
// alloy infuser
ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'mekanism:alloy_infused',
        'create:andesite_alloy',
        '10x mekanism:tin',
    )
});
// change recipe for mwgr:water_generator
ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'mwgr:water_generator' },
    'minecraft:water_bucket',
    'cookingforblockheads:sink'
  )
});
// change recipe for mwgr:lava_generator
ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'mwgr:lava_generator' },
    'minecraft:lava_bucket',
    'createqol:superheated_lava_bucket'
  )
});
// electron tube infuser
ServerEvents.recipes(event => {
  event.recipes.mekanism.metallurgic_infusing(
    'create:electron_tube',
    'create:polished_rose_quartz',
    '10x mekanism:oxygen'
  )
})
