// Charge la classe Java du bloc feu de camp pour pouvoir lire/modifier son état (allumé ou éteint)
const $CampfireBlock = Java.loadClass('net.minecraft.world.level.block.CampfireBlock')

// Détecte un clic droit sur un feu de camp
BlockEvents.rightClicked('minecraft:campfire', event => {

    // Récupère le joueur, le bloc cliqué et le monde
    const { player, block, level } = event

    // Vérifie que le joueur tient bien notre briquet custom
    if (!player.isHolding('kubejs:fire_starter')) return

    // Vérifie si le feu de camp est déjà allumé
    // Si oui, on ne fait rien
    if (block.blockState.getValue($CampfireBlock.LIT)) return

    // Change l'état du feu de camp :
    // éteint -> allumé
    block.setBlockState(
        block.blockState.cycle($CampfireBlock.LIT)
    )

    // Joue le son du briquet vanilla
    level.playSound(
        null, // Pas de joueur spécifique pour entendre le son
        block.pos, // Position du son
        'minecraft:item.flintandsteel.use', // Son du briquet
        'blocks', // Catégorie du son
        1, // Volume
        1 // Hauteur du son
    )

    // Retire un briquet custom de l'inventaire
    // Sauf si le joueur est en mode créatif
    if (!player.isCreative()) {
        player.mainHandItem.count--
    }

    // Empêche l'action normale du feu de camp
    // (évite les comportements par défaut)
    event.cancel()
})