BlockEvents.rightClicked(event => {
    const { item, block, player } = event;

    // 1. Vérifie si le joueur utilise le Catalyseur de l'Undergarden
    if (item.id === 'undergarden:catalyst') {
        
        // 2. Optionnel : Permet de bloquer l'allumage UNIQUEMENT dans l'Undergarden ou l'Overworld
        // Si vous voulez interdire complètement toute création peu importe la dimension, enlevez la condition de niveau.
        if (block.level.dimension.toString() === 'undergarden:undergarden') {
            
            // Annule l'action (empêche le portail de s'allumer et de consommer l'objet)
            event.cancel(); 
            
            // Envoie un message d'erreur poli au joueur
            if (player) {
                player.displayClientMessage(Text.red("La création de portails vers l'Overworld est désactivée ici !"), true);
            }
        }
    }
});
