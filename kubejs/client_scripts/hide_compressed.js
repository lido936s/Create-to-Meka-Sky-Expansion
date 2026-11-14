RecipeViewerEvents.removeEntries('item', event => {
    const materials = [
        'cobblestone', 'gravel', 'sand', 'red_sand', 'dirt', 
        'netherrack', 'end_stone', 'soul_sand', 'soul_soil', 
        'blackstone', 'basalt', 'clay', 'stone', 'andesite', 'diorite', 'granite'
    ];

    const tiers = [
        { ftbPrefix: 'compressed_', atcSuffix: '_1x' },
        { ftbPrefix: 'double_compressed_', atcSuffix: '_2x' },
        { ftbPrefix: 'triple_compressed_', atcSuffix: '_3x' }
    ];

    materials.forEach(mat => {
        // Masquer les variantes FTB Stuff si All The Compressed a l'équivalent
        tiers.forEach(tier => {
            const ftbBlock = `ftbstuff:${tier.ftbPrefix}${mat}`;
            const atcBlock = `allthecompressed:${mat}${tier.atcSuffix}`;

            if (Item.exists(ftbBlock) && Item.exists(atcBlock)) {
                event.remove(ftbBlock);
            }
        });

        // Masquer les variantes Ex Deorum / Ex Compressum
        const atcBlock1x = `allthecompressed:${mat}_1x`;
        if (Item.exists(atcBlock1x)) {
            ['exdeorum', 'excompressum'].forEach(mod => {
                const exBlock = `${mod}:compressed_${mat}`;
                if (Item.exists(exBlock)) {
                    event.remove(exBlock);
                }
            });
        }
    });
});
