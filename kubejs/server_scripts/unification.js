var UNIFY = [
  // steel
  { keep: 'immersiveengineering:ingot_steel',  dupes: ['mekanism:ingot_steel', 'modern_industrialization:steel_ingot'] },
  { keep: 'immersiveengineering:nugget_steel', dupes: ['mekanism:nugget_steel', 'modern_industrialization:steel_nugget'] },
  { keep: 'immersiveengineering:plate_steel',  dupes: ['modern_industrialization:steel_plate'] },
  // bronze
  { keep: 'mekanism:ingot_bronze',  dupes: ['modern_industrialization:bronze_ingot'] },
  { keep: 'mekanism:nugget_bronze', dupes: ['modern_industrialization:bronze_nugget'] }
]

ServerEvents.recipes(function (event) {
  UNIFY.forEach(function (entry) {
    entry.dupes.forEach(function (dupe) {
      event.replaceInput({}, dupe, entry.keep)
      event.replaceOutput({}, dupe, entry.keep)
    })
  })
})

RecipeViewerEvents.removeEntries('item', function (event) {
  UNIFY.forEach(function (entry) {
    entry.dupes.forEach(function (dupe) {
      event.remove(dupe)
    })
  })
})

ServerEvents.tags('item', function (event) {
  event.add('c:ingots/steel', 'immersiveengineering:ingot_steel')
  event.add('c:ingots/bronze', 'mekanism:ingot_bronze')
})
