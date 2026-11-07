// =====================================================================
// Unification : Immersive Engineering = référence pour le steel
// (Modern Industrialization et Mekanism sont redirigés vers IE)
// =====================================================================

// Mettre à false si tu ne veux PAS de recette de conversion 1:1 pour
// récupérer les anciens items (utile pour les mondes existants).
var CONVERT_OLD_ITEMS = true

var UNIFY = [
  // ---- steel ----
  { keep: 'immersiveengineering:ingot_steel',   dupes: ['mekanism:ingot_steel', 'modern_industrialization:steel_ingot'] },
  { keep: 'immersiveengineering:nugget_steel',  dupes: ['mekanism:nugget_steel', 'modern_industrialization:steel_nugget'] },
  { keep: 'immersiveengineering:plate_steel',   dupes: ['modern_industrialization:steel_plate'] },
  { keep: 'immersiveengineering:dust_steel',    dupes: ['modern_industrialization:steel_dust'] },     // NOUVEAU
  { keep: 'immersiveengineering:stick_steel',   dupes: ['modern_industrialization:steel_rod'] },      // NOUVEAU
  { keep: 'immersiveengineering:storage_steel', dupes: ['modern_industrialization:steel_block'] },    // NOUVEAU
  // ---- bronze ----
  { keep: 'mekanism:ingot_bronze',  dupes: ['modern_industrialization:bronze_ingot'] },
  { keep: 'mekanism:nugget_bronze', dupes: ['modern_industrialization:bronze_nugget'] }
]

ServerEvents.recipes(function (event) {
  // 1) Redirige toutes les recettes (entrées + sorties) vers l'item de référence
  UNIFY.forEach(function (entry) {
    entry.dupes.forEach(function (dupe) {
      event.replaceInput({}, dupe, entry.keep)
      event.replaceOutput({}, dupe, entry.keep)
    })
  })

  // 2) Conversion 1:1 des anciens items (ajoutée APRÈS les replace,
  //    sinon replaceInput transformerait aussi ces recettes)
  if (CONVERT_OLD_ITEMS) {
    UNIFY.forEach(function (entry) {
      entry.dupes.forEach(function (dupe) {
        event.shapeless(Item.of(entry.keep), [dupe])
          .id('kubejs:unify/' + dupe.replace(':', '/'))
      })
    })
  }
})

// Cache les doublons dans JEI/EMI
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