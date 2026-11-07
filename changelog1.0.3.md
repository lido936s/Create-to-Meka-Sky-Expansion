# Changelog

All notable changes to this project will be documented in this file.

## - 2026-11-07

### Added
- **Mods**: 
  - Integrated `createultimine-1.21.1-neoforge-1.3.2.jar`.
  - Integrated `harvest_and_sow-0.1.0-neoforge-1.21.1.jar`.
- **World Generation**: 
  - New ore **Andesite Alloy Ore** (`andesite_alloy_ore`) with dedicated loot table, biome modifier, configured, and placed features.
  - Added worldgen entry to `skyblockbuilder/data/features.txt`.
- **Assets**: 
  - Added **24 new textures** (including 23 item textures).
- **Startup Scripts**: 
  - Added initialization scripts: `andesite_alloy_ore.js`, `incomplete_ftbstuff.js`, `incomplete_infused_porcelain.js`, and `pam_gardens_items.js`.
- **Recipes & Gameplay**:
  - 6 FTB Stuff jar recipes (`kubejs/data/ftbstuff/jar/`): *andesite alloy block, andesite infused, molten andesite alloy, molten cobblestone, molten porcelain clay, porcelain plate*.
  - Sequenced assembly lines for **Infused Porcelain** using *andesite infused* and *porcelain plates* via Deployer, Mechanical Crafter, and Packager.
  - Cross-mod recipe for *hanging roots* combining Mekanism and Create mechanics.
  - Stonecutting capabilities directly from KubeJS machines.

### Changed
- **Mod Configurations**:
  - Added server configuration profile: `config/createultimine-server.snbt`.
  - Added configuration button toggle to `ftblibrary-client.snbt`.
  - Increased `render_outline` from **256 to 512** in `ftbultimine-client.snbt`.
- **Balance & Progression**:
  - Hardened recipes for **Sky Resource Generators** to enforce a stricter tiered progression line.
  - Modified Modern Industrialization (MI) recipe chains for analog circuits and tubes.
  - MI Macerator now outputs **3 Andesite Alloy** and a **25% chance for a zinc nugget** when processing the new ore.
- **Integrations**:
  - FTB Stuff processing chains updated to support *tempered jars*, *auto-processing blocks* (Basin, Item Drain, Mechanical Arm, Smart Chute), and Create heat sources.
  - MI Quarry now accepts Create and Immersive Engineering drills.
  - Added custom **Brass Drill** for the MI Quarry featuring a **4% break chance per cycle**.
  - Integrated Pam’s HarvestCraft gardens into Create's mixing and sequenced assembly systems.
  - Integrated The Undergarden crops and soils into Botany Pots logic.
