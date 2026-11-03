// ==========================================================
// 1. GESTION DU CLIC DROIT : PLACEMENT ET INTERACTION AU SOL
// ==========================================================
BlockEvents.rightClicked(event => {
    let player = event.player
    let item = event.item
    let block = event.block
    let level = event.level

    // Action A : Poser le gâteau au sol depuis la main
    if (item.id === 'kubejs:sky_machine_cake' && !player.isCrouching()) {
        let face = event.face
        let targetPos = block.pos.relative(face)

        if (level.getBlock(targetPos).id === 'minecraft:air') {
            // Pose le bloc de gâteau
            level.setBlock(targetPos, Block.id('kubejs:sky_machine_cake_block').blockState, 3)
            level.playSound(null, targetPos, 'block.wool.place', 'blocks', 1.0, 1.0)

            if (!player.isCreative()) {
                item.count--
            }
            event.cancel() // Empêche de le manger en même temps
        }
    }

    // Action B : Clic droit sur le gâteau posé au sol -> Téléportation !
    if (block.id === 'kubejs:sky_machine_cake_block') {
        let server = event.server
        
        // Téléportation synchronisée (Y=64)
        server.runCommandSilent(`execute as ${player.username} run execute in skymachine:sky_machine run tp @s 0 64 0`)
        player.tell("§e[Sky Machine]§d Vous utilisez le gâteau dimensionnel au sol...")

        event.cancel()
    }
})

// ==========================================================
// 2. TÉLÉPORTATION VIA LE GÂTEAU DEPUIS LA MAIN (SI CONSOMMÉ)
// ==========================================================
ItemEvents.foodEaten(event => {
    let item = event.item
    let player = event.player

    if (item.id === 'kubejs:sky_machine_cake') {
        event.server.runCommandSilent(`execute as ${player.username} run execute in skymachine:sky_machine run tp @s 0 64 0`)
        player.tell("§e[Sky Machine]§a Énergie du gâteau instanciée. Transfert vers la dimension industrielle...")
    }
})

// ==========================================================
// 3. CODE DE TICK ET GÉNÉRATION DE LA PLATEFORME (1.21.1)
// ==========================================================
PlayerEvents.tick(event => {
    let player = event.player
    let server = event.server

    if (player.age % 20 !== 0) return

    let currentDimension = player.level.dimension().location().toString()

    if (currentDimension === 'skymachine:sky_machine') {
        if (!server.persistentData.contains('sky_machine_generated')) {
            server.persistentData.putBoolean('sky_machine_generated', true)

            server.runCommandSilent('execute in skymachine:sky_machine run fill -2 62 -2 2 62 2 create:industrial_iron_block keep')
            server.runCommandSilent('execute in skymachine:sky_machine run setblock 0 62 0 mekanism:steel_block')
            server.runCommandSilent('execute in skymachine:sky_machine run spawnpoint @a 0 64 0')
        }
    }
})
