
// adding recipe for ae2:certus_quartz_crystal

// server_scripts/certus_quartz_crystal_recipe.js

ServerEvents.recipes(event => {

  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: "ae2:sky_stone_block"
      }
    ],
    processingTime: 100,
    results: [
      {
        id: "ae2:sky_dust",
        chance: 0.5
      },
      {
        id: "ae2:sky_stone_block",
        count: 1
      }
    ]
  })

});