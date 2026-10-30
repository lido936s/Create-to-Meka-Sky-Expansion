// change recipe for bonsaitrees4:bonsai_pot
ServerEvents.recipes(event => {
    event.replaceInput(
      { id: 'bonsaitrees4:bonsai_pot' },
      '#c:bricks',
     'productivemetalworks:fire_brick'
    )
  });