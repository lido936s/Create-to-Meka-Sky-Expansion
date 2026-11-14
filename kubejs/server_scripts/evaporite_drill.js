ServerEvents.recipes(event => {
    // Quarry Modern Industrialization (vapeur + electrique) : 4 EU/t = limite de la vapeur
    event.recipes.modern_industrialization.quarry(4, 600)
        // 4 % de chance de casser la drill par cycle
        .itemIn("kubejs:evaporite_drill_head", 0.04)
        .itemOut("modern_industrialization:salt_ore", 0.5)
        .itemOut("immersiveengineering:dust_sulfur", 0.5)

    // Craft de la drill (a adapter a ta progression)
    event.shapeless("kubejs:evaporite_drill_head", [
        "modern_industrialization:steel_drill_head",
        "create:brass_sheet",
        "create:precision_mechanism"
    ])
})
