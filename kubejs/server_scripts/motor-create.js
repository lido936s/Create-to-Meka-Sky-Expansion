// remove recipes create_better_motors:raw_reggarfonite
ServerEvents.recipes(event => {
    event.remove({ output: 'create_better_motors:raw_reggarfonite' })
});

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
    [
      Item.of('create_better_motors:raw_reggarfonite').withCount(8)
    ],
    'kubejs:diams_plate',
    [
      event.recipes.createPressing(
        'kubejs:diams_plate',
        'kubejs:diams_plate'
      ),

      event.recipes.createFilling(
        'kubejs:diams_plate',
        [
          'kubejs:diams_plate',
          Fluid.of('productivemetalworks:molten_diamond', 200)
        ]
      ),

      event.recipes.createPressing(
        'kubejs:diams_plate',
        'kubejs:diams_plate'
      )
    ]
  )
  .transitionalItem('kubejs:diams_plate')
  .loops(1)
})