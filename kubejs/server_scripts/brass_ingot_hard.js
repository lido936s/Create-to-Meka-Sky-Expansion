ServerEvents.recipes(event => {
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "exdeorum:compressed_cobblestone" },
    transitional_item: { id: "exdeorum:compressed_cobblestone" },
    loops: 3,
    sequence: [
      { type: "create:pressing", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:cutting", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }], processing_time: 100 },
      { type: "create:deploying", ingredients: [{ item: "exdeorum:compressed_cobblestone" }, { item: "minecraft:cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:deploying", ingredients: [{ item: "exdeorum:compressed_cobblestone" }, { tag: "c:plates/iron" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:deploying", ingredients: [{ item: "exdeorum:compressed_cobblestone" }, { tag: "c:plates/copper" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:pressing", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:cutting", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }], processing_time: 100 },
      { type: "create:deploying", ingredients: [{ item: "exdeorum:compressed_cobblestone" }, { tag: "c:plates/zinc" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:pressing", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      
      // ÉTAPE DU SEAU DE LAVE CORRIGÉE : Ajout obligatoire du seau vide en retour
      { 
        type: "create:deploying", 
        ingredients: [
          { item: "exdeorum:compressed_cobblestone" }, 
          { item: "minecraft:lava_bucket" }
        ], 
        results: [
          { id: "exdeorum:compressed_cobblestone" },
          { id: "minecraft:bucket" } // Donne le seau vide en sous-produit au déployeur
        ] 
      },

      { type: "create:deploying", ingredients: [{ item: "exdeorum:compressed_cobblestone" }, { tag: "c:plates/zinc" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:pressing", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }] },
      { type: "create:cutting", ingredients: [{ item: "exdeorum:compressed_cobblestone" }], results: [{ id: "exdeorum:compressed_cobblestone" }], processing_time: 100 }
    ],
    results: [
      { id: "create:brass_ingot", count: 16 }
    ]
  }).id('kubejs:sequenced/mass_brass_ingots');
});
