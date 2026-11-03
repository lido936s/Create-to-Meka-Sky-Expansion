// Événement d'interaction d'objet corrigé pour KubeJS 1.21.1
ItemEvents.rightClicked(event => {
    let player = event.player
    let item = event.item
    let server = event.server

    // Cible l'ID exact de votre gâteau personnalisé
    if (item.id === 'kubejs:sky_machine_cake') {
        
        // Sécurité pour exécuter uniquement côté serveur
        if (event.level.clientSide) {
            return
        }

        // Consommation du gâteau (si le joueur n'est pas en créatif)
        if (!player.creative) {
            item.count--
        }

        // Détection propre de la dimension actuelle en chaîne
        let currentDim = player.level.dimension.location.toString()

        if (currentDim === 'skymachine:sky_machine') {
            // Si déjà dans la machine, retour à l'Overworld
            player.teleportTo('minecraft:overworld', 0.5, 80.0, 0.5, 0.0, 0.0)
            player.tell(Text.of('🎂 Digestion quantique... Retour dans l\'Overworld !').green())
        } else {
            // Sinon, envoi vers la dimension vide Sky Machine
            player.teleportTo('skymachine:sky_machine', 0.5, 65.0, 0.5, 0.0, 0.0)
            
            // Génération de sécurité de la plateforme métallique sous ses pieds
            server.runCommandSilent('execute in skymachine:sky_machine run fill -2 63 -2 2 63 2 create:industrial_iron_block keep')
            
            player.tell(Text.of('🌌 Le pouvoir du gâteau vous propulse dans la Sky Machine !').aqua())
        }
    }
})
