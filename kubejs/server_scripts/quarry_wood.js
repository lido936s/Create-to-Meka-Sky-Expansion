ServerEvents.recipes(event => {
    // Quarry vapeur + électrique (même type de recette, 4 EU/t = limite de la vapeur)
    event.recipes.modern_industrialization.quarry(4, 600)
        // 0.04 = 4 % de chance de casser la drill par cycle (mets 0 pour qu'elle ne s'use jamais)
        .itemIn("#minecraft:axes", 0.04)
        .itemOut("minecraft:stick", 0.4)
        .itemOut("kubejs:wood_ore", 0.3)
})