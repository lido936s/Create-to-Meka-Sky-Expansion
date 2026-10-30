// adding recipe exdeorum:wooden_watering_can
ServerEvents.recipes(event => {
event.shaped(
  Item.of('exdeorum:wooden_watering_can', 1), // arg 1: output
  [
    'CDC',
    'ABA',
    ' A '
], 
{
    // arg 2: the mapping
    A: '#minecraft:planks',
    B: 'minecraft:bowl',  //arg 3: the mapping object
    C: '#minecraft:logs',
    D: '#minecraft:leaves',
}
);
// adding recipe exdeorum:stone_watering_can
event.shaped(
  Item.of('exdeorum:stone_watering_can', 1), // arg 1: output
  [
    ' C ',
    'ABA',
    ' A '
  ], {
    A: 'minecraft:cobblestone',
    B: 'exdeorum:wooden_watering_can',
    C: 'minecraft:clay_ball',
  }
);
// adding recipe exdeorum:iron_watering_can
event.shaped(
  Item.of('exdeorum:iron_watering_can'),
  [
    ' C ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:iron_ingot',
    B: 'exdeorum:stone_watering_can',
    C: 'minecraft:bucket'
  }
);
// adding recipe exdeorum:gold_watering_can
event.shaped(
  Item.of('exdeorum:golden_watering_can'),
  [
    ' C ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:gold_ingot',
    B: 'exdeorum:iron_watering_can',
    C: 'minecraft:honey_bottle'
  }
);
// adding recipe exdeorum:diamond_watering_can
event.shaped(
  Item.of('exdeorum:diamond_watering_can'),
  [
    ' C ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:diamond',
    B: 'exdeorum:golden_watering_can',
    C: 'minecraft:water_bucket'
  }
);
// adding recipe exdeorum:netherite_watering_can
event.shaped(
  Item.of('exdeorum:netherite_watering_can'),
  [
    ' C ',
    'ABA',
    ' A '
  ],
  {
    A: 'minecraft:netherite_ingot',
    B: 'exdeorum:diamond_watering_can',
    C: 'minecraft:nether_star'
  }
);
});