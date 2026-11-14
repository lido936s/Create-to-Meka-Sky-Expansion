ServerEvents.recipes(event => {
    // Matériaux communs entre AllTheCompressed, FTB Stuff et Ex Deorum/Compressum
    const materials = [
        'cobblestone', 'gravel', 'sand', 'red_sand', 'dirt', 
        'netherrack', 'end_stone', 'soul_sand', 'soul_soil', 
        'clay', 'stone', 'blackstone', 'basalt'
    ];

    // Correspondance des préfixes FTB Stuff vers les suffixes AllTheCompressed
    const tiers = [
        { ftbPrefix: 'compressed_', atcSuffix: '_1x' },
        { ftbPrefix: 'double_compressed_', atcSuffix: '_2x' },
        { ftbPrefix: 'triple_compressed_', atcSuffix: '_3x' }
    ];

    materials.forEach(mat => {
        tiers.forEach(tier => {
            const ftbBlock = `ftbstuff:${tier.ftbPrefix}${mat}`;
            const atcBlock = `allthecompressed:${mat}${tier.atcSuffix}`;

            // Vérifie que les deux blocs existent bien dans le jeu avant d'agir
            if (Item.exists(ftbBlock) && Item.exists(atcBlock)) {
                // 1. Supprime les recettes de craft/décraft de FTB Stuff
                event.remove({ output: ftbBlock });
                event.remove({ input: ftbBlock, type: 'minecraft:crafting_shaped' });
                event.remove({ input: ftbBlock, type: 'minecraft:crafting_shapeless' });

                // 2. Remplace le bloc FTB Stuff par celui d'AllTheCompressed dans les machines (Sluices, Auto Hammers...)
                event.replaceInput({ input: ftbBlock }, ftbBlock, atcBlock);
            }
        });

        // Gestion de Ex Deorum / Ex Compressum (niveau 1x)
        const atc1x = `allthecompressed:${mat}_1x`;
        if (Item.exists(atc1x)) {
            ['exdeorum', 'excompressum'].forEach(mod => {
                const exBlock = `${mod}:compressed_${mat}`;
                if (Item.exists(exBlock)) {
                    event.remove({ output: exBlock });
                    event.remove({ input: exBlock, type: 'minecraft:crafting_shaped' });
                    event.remove({ input: exBlock, type: 'minecraft:crafting_shapeless' });
                    event.replaceInput({ input: exBlock }, exBlock, atc1x);
                }
            });
        }
    });
});
