// kubejs/server_scripts/wood_drop.js

BlockEvents.broken(event => {
    // Si le bloc cassé est notre minerai de bois
    if (event.block.id === 'kubejs:wood_ore') {
        // Ne drop rien si le joueur est en mode créatif
        if (!event.player.isCreative()) {
            let tool = event.player.getMainHandItem();
            
            // 1. Gestion de Silk Touch (Délicatesse)
            let silkTouchLevel = tool.getEnchantmentLevel('minecraft:silk_touch');
            if (silkTouchLevel > 0) {
                // Drop le bloc de minerai lui-même
                event.block.popItem(Item.of('kubejs:wood_ore', 1));
            } else {
                // 2. Gestion du drop normal avec Fortune
                let fortuneLevel = tool.getEnchantmentLevel('minecraft:fortune');
                
                // Calcul du drop (1 à 2 de base + bonus de Fortune aléatoire)
                let count = Math.floor(Math.random() * 2) + 1 + Math.floor(Math.random() * (fortuneLevel + 1));
                
                // Fait apparaître le bois brut cristallisé au sol
                event.block.popItem(Item.of('kubejs:raw_wood_ore', count));
            }
        }
        // NOTE : event.cancel() a été supprimé pour que le bloc se casse et disparaisse normalement !
    }
});

