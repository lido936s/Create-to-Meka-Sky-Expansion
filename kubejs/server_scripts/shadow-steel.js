ServerEvents.recipes(event => {

    event.custom({
        "type": "create:deploying",
        "ingredients": [
            { "item": "create:chromatic_compound" },
            { "item": "minecraft:beacon" }
        ],
        "results": [
            { 
                "count": 1, 
                "id": "create:shadow_steel" // Correction 1.21.1 : "id" remplace "item" et "count" est requis
            }
        ],
        "keepHeldItem": true
    }).id('kubejs:deploying/shadow_steel_fixed');

});
