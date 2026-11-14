ServerEvents.recipes(event => {
    event.custom({
        type: 'create_new_age:energising',
        ingredients: [{ item: 'create_new_age:copper_circuit' }],
        energy_needed: 8000,
        results: [{ id: 'kubejs:overcharged_circuit_substrate', count: 1 }]
    }).id('kubejs:energising_overcharged_circuit_substrate')
})
