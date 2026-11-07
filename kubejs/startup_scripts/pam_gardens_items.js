// kubejs/startup_scripts/pam_gardens_items.js
// Item transitoire partagé par toutes les recettes sequenced_assembly des gardens.
// Redémarrage complet du jeu nécessaire (pas de /reload pour les startup_scripts).

StartupEvents.registry('item', event => {
  event.create('incomplete_garden', 'create:sequenced_assembly')
    .displayName('Garden incomplet');
});
