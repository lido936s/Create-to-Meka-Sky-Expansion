// Événement déclenché à la connexion d'un joueur
PlayerEvents.loggedIn(event => {
    const { player, server } = event

    // On utilise les "persistent data" de KubeJS pour vérifier si c'est sa TOUTE PREMIÈRE connexion
    if (!player.persistentData.contains('has_started_in_undergarden')) {
        
        // 1. Définir les coordonnées de destination (0, 80, 0 par exemple)
        // L'Undergarden génère du terrain à ces coordonnées, mais le joueur peut apparaître dans un mur.
        // Le jeu cherchera automatiquement une surface sûre autour de ce point.
        let targetDim = 'undergarden:undergarden'
        let targetX = 0
        let targetY = 90 // Légèrement en hauteur pour éviter de spawn sous terre
        let targetZ = 0

        // 2. Téléportation immédiate du joueur dans l'Undergarden
        player.teleportTo(targetDim, targetX, targetY, targetZ, 0, 0)

        // 3. Forcer son point de réapparition par défaut dans cette dimension
        // Ainsi, s'il meurt sans lit, il réapparaîtra dans l'Undergarden et non dans l'Overworld
        player.setRespawnPosition(targetDim, BlockPos(targetX, targetY, targetZ), 0.0, true, false)

        // 4. Marquer le joueur pour ne plus jamais le retéléporter aux prochaines connexions
        player.persistentData.putBoolean('has_started_in_undergarden', true)

        // Optionnel : Petit message de bienvenue immersif
        player.displayClientMessage(Text.darkPurple("Vous vous réveillez dans un monde sombre et inconnu... Trouvez un moyen de vous échapper."), false)
    }
})

// Événement BONUS : Sécurité en cas de mort sans lit/point de spawn défini
// Si le joueur meurt et que son lit est détruit, Minecraft vanilla tente de le renvoyer au spawn de l'Overworld.
// Ce script intercepte la réapparition pour le garder dans l'Undergarden.
PlayerEvents.respawned(event => {
    const { player } = event
    
    // Si le joueur réapparaît dans l'Overworld (signe que son spawn a échoué), on le renvoie à la case départ
    if (player.level.dimension.toString() === 'minecraft:overworld') {
        player.teleportTo('undergarden:undergarden', 0, 90, 0, 0, 0)
        player.displayClientMessage(Text.red("Votre point de réapparition était instable, vous revoilà dans l'Undergarden..."), true)
    }
})
