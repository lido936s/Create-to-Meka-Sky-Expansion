ServerEvents.commandRegistry(event => {
    const { commands, arguments: Args } = event;
    
    event.register(
        commands.literal('spawnisland')
            .requires(src => src.hasPermission(2))
            .executes(ctx => {
                let player = ctx.getSource().getPlayer();
                let pos = player.blockPosition();
                let server = ctx.getSource().getServer();
                
                // Commande vanilla exécutée par le serveur pour charger la structure de l'île
                server.runCommandSilent(`place structure skyblock:skyblock_island ${pos.getX()} ${pos.getY() - 1} ${pos.getZ()}`);
                
                player.tell("L'île de départ Skyblock a été générée avec succès !");
                return 1;
            })
    );
});
