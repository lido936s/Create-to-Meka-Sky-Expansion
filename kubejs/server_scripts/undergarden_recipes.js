ServerEvents.recipes(event => {

  event.recipes.create.crushing([
    Item.of("undergarden:utheric_shard", 4),
    CreateItem.of("undergarden:utheric_shard", 0.1),
    CreateItem.of("create:experience_nugget", 0.5),
    CreateItem.of("8x undergarden:depthrock_pebble", 0.5)
  ], "undergarden:utherium_growth").processingTime(150);

});
