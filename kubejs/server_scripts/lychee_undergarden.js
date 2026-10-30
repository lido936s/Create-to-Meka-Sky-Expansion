BlockEvents.broken(event => {
    // 1. Vérifie si le bloc qui vient d'être cassé est bien la haute herbe de l'Undergarden
    if (event.block.id === 'undergarden:tall_deepturf') {
        
        // 2. Vérifie si le joueur a utilisé une houe en bois pour le détruire
        if (event.player && event.player.mainHandItem.id === 'minecraft:wooden_hoe') {
            
            // 3. Calcul indépendant des probabilités de butin (génère une valeur entre 0.0 et 1.0)
            let chanceGraine1 = Math.random();
            let chanceGraine2 = Math.random();
            
            // 25% de chance de drop la graine Underbean
            if (chanceGraine1 <= 0.25) {
                event.block.popItem('undergarden:underbean_seeds');
            }
            
            // 10% de chance de drop la graine Gloomgourd
            if (chanceGraine2 <= 0.10) {
                event.block.popItem('undergarden:gloomgourd_seeds');
            }
            
            // Note : L'usure de l'outil et l'animation de destruction du bloc 
            // sont directement appliquées de manière native par Minecraft et KubeJS.
        }
    }
});
