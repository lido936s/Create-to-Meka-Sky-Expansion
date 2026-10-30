ServerEvents.recipes(event => {

    // ==========================
    // Fusion de l'alliage d'andésite
    // 1 Create Andesite Alloy -> 90 mB molten_andesite_alloy
    // ==========================
    PMW.melt(
        event,
        "create:andesite_alloy",
        "kubejs:molten_andesite_alloy",
        90
    );


    // ==========================
    // Coulée d'une Cogwheel
    // Moule : Andesite Alloy consommé
    // 360 mB molten_andesite_alloy -> Create Cogwheel
    // ==========================
    PMW.itemCast(
        event,
        "create:cogwheel",
        "create:andesite_alloy",
        "kubejs:molten_andesite_alloy",
        360,
        true
    );


    // ==========================
    // Coulée d'une Large Cogwheel
    // Moule : Cogwheel consommé
    // 720 mB molten_andesite_alloy -> Large Cogwheel
    // ==========================
    PMW.itemCast(
        event,
        "create:large_cogwheel",
        "create:cogwheel",
        "kubejs:molten_andesite_alloy",
        720,
        true
    );

});