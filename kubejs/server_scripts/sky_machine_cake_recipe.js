// ==========================================
// CONFIGURATION DE LA RECETTE A PERSONNALISER
// ==========================================
const CONFIG = {
  modIdRequis: 'create',                           
  itemResultat: 'kubejs:sky_machine_cake',         // L'item final obtenu
  
  // Ingrédients requis dans le mélangeur (Mixing)
  fluideIngredient: 'undergarden:virulent_mix_source',
  fluideQuantite: 1000,                            
  
  itemsIngredients: [
    'undergarden:underbeans',                      // <-- VÉRIFIE BIEN CET ID ICI
    'create:dough'
  ]
};

// ==========================================
// CODE SYSTEME (Ne pas modifier)
// ==========================================
ServerEvents.recipes(event => {
  if (Platform.isLoaded(CONFIG.modIdRequis)) {
    
    event.remove({ output: CONFIG.itemResultat });
    
    // Correction de la structure pour mélanger fluides et items proprement
    let ingredientsRecipe = [];
    
    // Ajout du fluide sous forme d'ingrédient Create fluide
    ingredientsRecipe.push(Fluid.of(CONFIG.fluideIngredient, CONFIG.fluideQuantite));
    
    // Ajout des items solides
    CONFIG.itemsIngredients.forEach(item => {
      ingredientsRecipe.push(Ingredient.of(item));
    });
    
    event.recipes.create
      .mixing([CONFIG.itemResultat], ingredientsRecipe)
      .heated();
  }
});
