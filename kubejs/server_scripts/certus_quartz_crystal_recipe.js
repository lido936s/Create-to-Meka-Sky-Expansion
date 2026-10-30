
// ÉTAPE 1 — Boue cristalline

ServerEvents.recipes(event => {
event.recipes.create.mixing(
  'kubejs:charged_slurry',
  [
    Item.of('ae2:certus_quartz_dust', 2),
    'minecraft:redstone',
    Fluid.of('minecraft:water', 250)
  ]
)
.heated()
});
//ÉTAPE 2 — vacuumizing de boue cristalline avec du molten certus pour obtenir 4 ae2:certus_quartz_crystal
ServerEvents.recipes(event => {
    event.custom({
      type: "vintageimprovements:vacuumizing",
      ingredients: [
        { item: "kubejs:charged_slurry" },
        { item: "create:electron_tube" }
      ],
      fluidIngredients: [
        { fluid: "kubejs:molten_certus", amount: 45 }
      ],
      results: [
        { id: "ae2:certus_quartz_crystal", count: 8 }
      ],
      processingTime: 95
    })
})
