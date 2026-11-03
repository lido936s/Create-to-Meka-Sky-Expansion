ServerEvents.recipes(event => {
    // Recette de tamisage corrigée pour le Depthrock en 1.21.1
    event.custom({
        type: "createsifter:sifting",
        input: { item: "undergarden:depthrock" },
        mesh: { id: "createsifter:string_mesh" },
        results: [
            { id: "create:crushed_raw_iron", chance: 0.25 },
            { id: "create:crushed_raw_copper", chance: 0.30 },
            { id: "undergarden:froststeel_nugget", chance: 0.05 },
            { id: "undergarden:cloggrum_nugget", chance: 0.05 },
            { id: "undergarden:regalium_crystal", chance: 0.05 }
        ],
        processingTime: 200,
        waterlogged: false
    })
})
