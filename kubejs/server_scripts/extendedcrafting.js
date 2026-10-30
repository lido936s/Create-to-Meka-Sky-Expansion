ServerEvents.recipes(event => {

  // 1. Suppression des anciennes recettes
  event.remove({ output: 'extendedcrafting:advanced_table' });
  event.remove({ output: 'extendedcrafting:the_ultimate_ingot' });

  // 2. Recette pour l'Advanced Table
  event.recipes.extendedcrafting.shaped_table('extendedcrafting:advanced_table', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'create:andesite_alloy',
    B: 'mekanism:steel_casing',
    C: 'create:cogwheel',
    D: 'extendedcrafting:basic_table',
    E: 'vintageimprovements:redstone_module'
  }).id('kubejs:extendedcrafting/advanced_table');


  // 3. Liste de vos Singularités
  const defaultSingularities = [
    'coal', 'iron', 'lapis_lazuli', 'redstone', 'glowstone', 
    'gold', 'diamond', 'emerald', 'netherite', 'copper', 'tin'
  ];

  // 4. Conversion explicite en ingrédients KubeJS 1.21.1 à partir de votre syntaxe
  const ingredientsArray = defaultSingularities.map(singName => 
    Ingredient.of(`extendedcrafting:singularity[extendedcrafting:singularity_id="extendedcrafting:${singName}"]`)
  );

  // 5. Ajout de la recette de l'Ultimate Ingot
  event.recipes.extendedcrafting.shapeless_table(
    'extendedcrafting:the_ultimate_ingot', 
    ingredientsArray
  ).id('kubejs:extendedcrafting/the_ultimate_ingot');

});
