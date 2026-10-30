BlockEvents.rightClicked(event => {
    const { block, player, level, hand } = event
    
    // On vérifie que le joueur est bien dans l'Undergarden et utilise sa main principale
    if (level.dimension.toString() === 'undergarden:undergarden' && hand === 'MAIN_HAND') {
        
        // Exemple : Le joueur fait un clic droit sur un bloc de Regalium
        if (block.id === 'undergarden:regalium_block') {
            
            // On définit le point de réapparition du joueur à cet endroit exact
            player.setRespawnPosition(level.dimension, block.pos, 0.0, true, true)
            
            // Message de confirmation au joueur
            player.displayClientMessage(Text.green("Point de réapparition défini dans l'Undergarden !"), true)
            
            // Optionnel : Consommer un objet dans la main du joueur (ex: une poussière d'Utherium) pour "payer" le spawn
            /*
            if (player.mainHandItem.id === 'undergarden:utherium_crystal') {
                player.mainHandItem.shrink(1)
            }
            */
            
            event.cancel() // Empêche les autres actions par défaut
        }
    }
})
