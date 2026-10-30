// server_scripts/sawmill_server.js

const WOOD_KEYWORDS = ['log', 'wood', 'stem', 'hyphae'];

const SAWMILL_RECIPES = [
    { name: "Planches", count: 4, suffix: "_planks", icon: "minecraft:oak_planks" },
    { name: "Dalles", count: 2, suffix: "_slab", icon: "minecraft:oak_slab" },
    { name: "Escaliers", count: 1, suffix: "_stairs", icon: "minecraft:oak_stairs" },
    { name: "Barrières", count: 3, suffix: "_fence", icon: "minecraft:oak_fence" },
    { name: "Trappes", count: 2, suffix: "_trapdoor", icon: "minecraft:oak_trapdoor" }
];

BlockEvents.rightClicked(event => {
    const { block, player, hand, item, server } = event;
    if (hand !== 'MAIN_HAND') return;

    // =========================================================================
    // I. MOTEUR - ALIMENTATION & INTERFACE
    // =========================================================================
    if (block.id === 'kubejs:fuel_input') {
        event.cancel();
        
        let currentFuel = block.persistentData.getInt('burnTime');

        // Ouverture d'une vraie grille d'inventaire 9 slots pour le moteur
        player.openMenu(Text.of("Moteur de la Scierie"), "chest_9x1", menu => {
            let fuelItem = Item.of(currentFuel > 0 ? 'minecraft:blaze_powder' : 'minecraft:charcoal');
            let fuelSec = Math.round(currentFuel / 20);

            if (currentFuel > 0) {
                fuelItem = fuelItem.withName(Text.orange("Moteur en fonction 🔥")).withLore([
                    Text.gray(`Autonomie : ${currentFuel} ticks`),
                    Text.gray(`Temps restant : ${fuelSec}s`),
                    Text.darkGray("Cliquez ici avec du charbon pour recharger")
                ]).enchanted();
            } else {
                fuelItem = fuelItem.withName(Text.red("Moteur Éteint ❌")).withLore([
                    Text.gray("Déposez du charbon sur cette case pour l'allumer.")
                ]);
            }

            menu.slot(4).setItem(fuelItem);
            
            // Interaction de clic pour charger le fuel
            menu.slot(4).onClick(() => {
                let held = player.mainHandItem;
                if (held.id === 'minecraft:coal' || held.id === 'minecraft:charcoal') {
                    block.persistentData.putInt('burnTime', currentFuel + 1600);
                    held.shrink(1);
                    player.playSound('minecraft:block.furnace.fire_crackle', 1.0, 1.0);
                    player.closeMenu();
                }
            });

            // Arrière-plan
            for (let i = 0; i < 9; i++) {
                if (i !== 4) menu.slot(i).setItem(Item.of('minecraft:gray_stained_glass_pane').withName(Text.of("")));
            }
        });
        return;
    }

    // =========================================================================
    // II. SCIE CENTRALE - INTERFACE & ACTIONBAR PROGRESSION
    // =========================================================================
    if (block.id === 'kubejs:mechanical_sawmill') {
        event.cancel();

        // CAS A : Main vide -> Menu graphique de sélection (2 lignes = 18 slots)
        if (item.empty) {
            let activeMode = block.persistentData.getInt('recipeMode');

            player.openMenu(Text.of("Scierie - Sélection de la Transformation"), "minecraft:chest", menu => {
                
                // Placement des boutons de recette
                SAWMILL_RECIPES.forEach((recipe, index) => {
                    let isSelected = (activeMode === index);
                    let buttonItem = Item.of(recipe.icon);
                    
                    if (isSelected) {
                        buttonItem = buttonItem.withName(Text.green(`➔ ${recipe.name} (Actif)`)).enchanted();
                    } else {
                        buttonItem = buttonItem.withName(Text.yellow(recipe.name));
                    }

                    menu.slot(index).setItem(buttonItem);
                    menu.slot(index).onClick(() => {
                        block.persistentData.putInt('recipeMode', index);
                        player.setStatusMessage(Text.green(`⚙ Scierie configurée : ${recipe.name}`));
                        player.playSound('minecraft:ui.button.click', 1.0, 1.0);
                        player.closeMenu();
                    });
                });

                // Décoration de la ligne inférieure
                for (let s = 9; s < 18; s++) {
                    menu.slot(s).setItem(Item.of('minecraft:gray_stained_glass_pane').withName(Text.of("")));
                }
            });
            return;
        }

        // CAS B : Clic avec une bûche -> Déclenchement de l'usinage
        let itemIdString = item.id.toString().toLowerCase();
        let isWood = WOOD_KEYWORDS.some(k => itemIdString.includes(k));

        if (isWood) {
            // Détection multiblock
            let directions = ['north', 'south', 'east', 'west'];
            let fuelBlock = null;
            let outputBlock = null;

            directions.forEach(dir => {
                let adj = block.offset(dir);
                if (adj.id === 'kubejs:fuel_input') fuelBlock = adj;
                if (adj.id === 'kubejs:sawmill_output') outputBlock = adj;
            });

            if (!fuelBlock || !outputBlock) {
                player.setStatusMessage(Text.red("❌ Structure incomplète ! Placez un Moteur et une Sortie contre la Scie."));
                return;
            }

            let fuelTicks = fuelBlock.persistentData.getInt('burnTime');
            if (fuelTicks < 100) {
                player.setStatusMessage(Text.yellow("⚠️ Énergie insuffisante ! Ouvrez le bloc Moteur pour y mettre du charbon."));
                return;
            }

            let activeMode = block.persistentData.getInt('recipeMode');
            let recipeConfig = SAWMILL_RECIPES[activeMode] || SAWMILL_RECIPES;

            let woodBase = itemIdString.replace('minecraft:', '').replace('_log', '').replace('_wood', '').replace('_stem', '').replace('stripped_', '');
            let namespace = itemIdString.includes(':') ? itemIdString.split(':') : 'minecraft';
            let outputItemId = `${namespace}:${woodBase}${recipeConfig.suffix}`;

            item.shrink(1);
            fuelBlock.persistentData.putInt('burnTime', fuelTicks - 100);

            // --- ANIMATION DE LA BARRE DE PROGRESSION (1 SECONDE) ---
            let maxSteps = 5;
            for (let step = 0; step <= maxSteps; step++) {
                server.scheduleInTicks(step * 4, () => {
                    let progressPercent = Math.round((step / maxSteps) * 100);
                    let visualBar = "■".repeat(step) + "□".repeat(maxSteps - step);
                    
                    player.setStatusMessage(Text.of(`⚡ Sciage [${recipeConfig.name}] : [${visualBar}] ${progressPercent}%`).gold());

                    if (step < maxSteps) {
                        block.level.playSound(null, block.x, block.y, block.z, 'minecraft:ui.stonecutter.select_recipe', 'blocks', 0.6, 1.4);
                        block.level.spawnParticles('minecraft:wood', true, block.x + 0.5, block.y + 1.0, block.z + 0.5, 0.2, 0.1, 0.2, 3, 0.05);
                    }

                    if (step === maxSteps) {
                        let finalProduct = Item.of(outputItemId, recipeConfig.count);
                        outputBlock.popItemFromFace(finalProduct, 'up'); 
                        player.setStatusMessage(Text.green(`✅ Transformation terminée !`));
                        block.level.playSound(null, block.x, block.y, block.z, 'minecraft:entity.item.pickup', 'blocks', 1.0, 1.0);
                    }
                });
            }
        }
    }
});
