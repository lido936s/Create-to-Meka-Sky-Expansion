ServerEvents.tags('item', event => {
    // Force l'unification de l'Overcharged Gold de New Age avec l'Electrum standard
    // Cela évite les conflits de recettes avec Create: Crafts & Additions
    event.add('c:ingots/electrum', 'create_new_age:overcharged_gold')
    event.add('c:ingots/electrum', 'create_new_age:overcharged_iron') // Si vous voulez aussi unifier le fer
    
    // Ajout des plaques surchargées aux tags de plaques standard
    event.add('c:plates/electrum', 'create_new_age:overcharged_golden_sheet')
})