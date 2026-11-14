ServerEvents.recipes(event => {
  
  // --- 1. CONFIGURATION DE LA COMPRESSION, DÉCOMPRESSION & PRESSE CREATE ---
  const allMaterials = [
    "cobblestone", "granite", "andesite", "diorite", "gravel", "sand", "red_sand",
    "blackstone", "deepslate", "cobbled_deepslate", "netherrack", "end_stone",
    "dust", "crushed_blackstone", "crushed_deepslate", "crushed_netherrack", "crushed_end_stone"
  ]

  allMaterials.forEach(material => {
    for (let i = 1; i <= 9; i++) {
      let currentBlock = `allthecompressed:${material}_${i}x`
      
      // Détermination du bloc inférieur requis
      let baseItem = i === 1 ? `minecraft:${material}` : `allthecompressed:${material}_${i-1}x`
      
      // Correction des namespaces vers Ex Deorum pour le premier palier
      if (i === 1 && (material === "dust" || material.startsWith("crushed_"))) {
        baseItem = `exdeorum:${material}`
      }

      // A. Table de craft : 9 blocs inférieurs -> 1 bloc compressé (Shaped 3x3)
      event.shaped(currentBlock, [
        "###",
        "###",
        "###"
      ], { "#": baseItem })

      // B. Table de craft : 1 bloc compressé -> 9 blocs inférieurs (Shapeless)
      event.shapeless(Item.of(baseItem, 9), currentBlock)

      // C. Presse Mécanique de Create : 9 blocs inférieurs -> 1 bloc compressé (Compacting)
      event.recipes.create.compacting(currentBlock, [Item.of(baseItem, 9)])
    }
  })

  // --- 2. CONFIGURATION DES RECETTES DU MARTEAU EX DEORUM ---
  const compressedSets = {
    gravel: ["cobblestone", "granite", "andesite", "diorite"],
    sand: ["gravel"]
  }

  const crushedSets = {
    crushed_blackstone: ["blackstone"],
    crushed_deepslate: ["deepslate", "cobbled_deepslate"],
    crushed_netherrack: ["netherrack"],
    dust: ["sand", "red_sand"],
    crushed_end_stone: ["end_stone"],
    red_sand: ["crushed_netherrack"]
  }

  // Boucle Marteau - Ensemble Gravier & Sable
  for (let i = 1; i <= 9; i++) {
    for (const [output, inputs] of Object.entries(compressedSets)) {
      for (const input of inputs) {
        event.custom({
          type: "exdeorum:compressed_hammer",
          ingredient: { item: `allthecompressed:${input}_${i}x` },
          result: {
            id: `allthecompressed:${output}_${i}x`
          },
          result_amount: 1
        })
      }
    }
  }

  // Boucle Marteau - Ensemble Blocs broyés (Crushed) & Poussière (Dust)
  for (let i = 1; i <= 9; i++) {
    for (const [output, inputs] of Object.entries(crushedSets)) {
      for (const input of inputs) {
        event.custom({
          type: "exdeorum:compressed_hammer",
          ingredient: { item: `allthecompressed:${input}_${i}x` },
          result: {
            id: `allthecompressed:${output}_${i}x`
          },
          result_amount: 1
        })
      }
    }
  }
  
})
