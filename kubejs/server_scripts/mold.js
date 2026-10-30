ServerEvents.recipes(event => {

    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            { basePredicate: { item: 'immersiveengineering:wirecutter' }, count: 1 },
            { basePredicate: { item: 'supplementaries:ash_brick' }, count: 8 },
            { basePredicate: { item: 'create:andesite_alloy' }, count: 4 },
            { basePredicate: { item: 'create:iron_sheet' }, count: 2 }
        ],
        result: { id: 'kubejs:wire_mold', count: 1 }
    });

    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            { basePredicate: { item: 'immersiveengineering:wirecutter' }, count: 1 },
            { basePredicate: { item: 'supplementaries:ash_brick' }, count: 8 },
            { basePredicate: { tag: 'c:ingots/bronze' }, count: 4 },
            { basePredicate: { item: 'create:iron_sheet' }, count: 2 }
        ],
        result: { id: 'kubejs:plate_mold', count: 1 }
    });

});

// Remplacement des mold standard de immersive engineering par celle que j'ai custom
ServerEvents.recipes(event => {
  const swaps = {
    'immersiveengineering:mold_plate': 'kubejs:plate_mold',
    'immersiveengineering:mold_wire': 'kubejs:wire_mold'
  };

  ['immersiveengineering:metal_press', 'mekmm:stamper'].forEach(type => {
    event.forEachRecipe({ type: type }, recipe => {
      const mold = recipe.json.get('mold');
      if (!mold) return;

      if (mold.isJsonPrimitive()) {
        const id = mold.getAsString();
        if (swaps[id]) {
          recipe.json.addProperty('mold', swaps[id]);
          recipe.save();
        }
      } else if (mold.isJsonObject() && mold.has('item')) {
        const id = mold.get('item').getAsString();
        if (swaps[id]) {
          mold.addProperty('item', swaps[id]);
          recipe.save();
        }
      }
    });
  });
});



