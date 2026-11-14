// kubejs/server_scripts/cogwheel_curving.js
// Cogwheels fabriqués à la Curving Press (Vintage Improvements).
// Modes de tête : 1 = convex, 2 = concave (3 = V, 4 = W).
// Cohérent avec la progression : la convex head est demandée par la quête avant les cogwheels.

ServerEvents.recipes(event => {

  // Petit cogwheel : 1 alliage d'andésite -> 1 cogwheel (tête convex)
  event.recipes.vintageimprovements.curving('create:cogwheel', 'create:andesite_alloy')
    .mode(1)
    .headDamage(1)
    .id('kubejs:curving/cogwheel');

  // Grand cogwheel : 1 cogwheel -> 1 large cogwheel (tête concave)
  event.recipes.vintageimprovements.curving('create:large_cogwheel', 'create:cogwheel')
    .mode(2)
    .headDamage(1)
    .id('kubejs:curving/large_cogwheel');

  // Option : retirer les crafts classiques pour forcer la curving press
  // event.remove({ id: 'create:crafting/kinetics/cogwheel' })
  // event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })

});
