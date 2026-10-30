ServerEvents.recipes((event) => {
  
  // 1. NETTOYAGE COMPLET
  // On supprime les anciens Ore Chunks pour les tamis normaux ET compressés
  event.remove({ type: 'exdeorum:sieve', output: '#exdeorum:ore_chunks' });
  event.remove({ type: 'exdeorum:compressed_sieve', output: '#exdeorum:ore_chunks' });

  // 2. CONFIGURATION DES CHANCES PAR FILTRE (MESH)
  const meshSettings = [
    { id: 'exdeorum:string_mesh',    rolls: 1, chance: 0.05 }, // Ficelle
    { id: 'exdeorum:flint_mesh',     rolls: 2, chance: 0.10 }, // Silex
    { id: 'exdeorum:iron_mesh',      rolls: 3, chance: 0.20 }, // Fer
    { id: 'exdeorum:diamond_mesh',   rolls: 3, chance: 0.35 }, // Diamant
    { id: 'exdeorum:netherite_mesh', rolls: 4, chance: 0.50 }  // Netherite
  ];

  // 3. LECTURE DU TAG ET GÉNÉRATION AUTOMATIQUE
  const crushedOres = Ingredient.of('#create:crushed_raw_materials').getItemIds();

  crushedOres.forEach(oreId => {
    // Détermination des blocs (normaux et compressés) selon le minerai
    let inputBlock = 'minecraft:gravel';
    let compressedInputBlock = 'exdeorum:compressed_gravel';
    
    if (oreId.includes('copper') || oreId.includes('zinc')) {
      inputBlock = 'minecraft:sand';
      compressedInputBlock = 'exdeorum:compressed_sand';
    }

    // Boucle pour enregistrer les recettes sur chaque filtre
    meshSettings.forEach(mesh => {
      
      // TAMIS NORMAUX
      event.recipes.exdeorum.sieve(oreId, inputBlock, mesh.id)
        .binomial(mesh.rolls, mesh.chance);

      // TAMIS COMPRESSÉS
      // On multiplie par 9 le nombre d'essais (mesh.rolls * 9)
      event.recipes.exdeorum.compressed_sieve(oreId, compressedInputBlock, mesh.id)
        .binomial(mesh.rolls * 9, mesh.chance);
        
    });
  });

});
