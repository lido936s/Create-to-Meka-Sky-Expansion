ServerEvents.recipes(event => {
    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn("kubejs:andesite_alloy_ore")
        .itemOut("3x create:andesite_alloy")
        .itemOut("create:zinc_nugget", 0.25)
})