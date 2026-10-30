ServerEvents.recipes(event => {

  event.recipes.create.mixing(
    ['2x minecraft:dirt'],
    [
      'minecraft:gravel',
      '2x mechanical_botany:compost',
      Fluid.water(250)
    ]
  )

})