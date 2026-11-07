# Create-to-Meka-Sky-Expansion

An expert-level Skyblock modpack for **Minecraft 1.21.1 (NeoForge)** that bridges the early-game mechanical engineering of **Create** with the high-tech automated systems of **Mekanism**. 

---

## 🌟 Key Features & Gameplay Mechanics

### 🧱 Hardened Progression Loop
- **Tiered Sky Resource Generators:** Skyblock resource acquisition is strictly gated by progression tiers to encourage infrastructure development.
- **Advanced Automated Assembly:** Custom sequenced assembly lines via Create Deployers, Mechanical Crafters, and Packagers are required to create highly components like **Infused Porcelain** (using *Andesite Infused* and *Porcelain Plates*).
- **FTB Stuff Jar Machine Systems:** Deep integration with *Tempered Jars* and *Auto-Processing Blocks* (Basin, Item Drain, Mechanical Arm, Smart Chute). Fully supports heat systems driven by Create components.
- **Cross-Mod Mechanics:** Fully integrated recipe paths between major tech trees, including custom interactions like combining Mekanism and Create mechanics for processing raw environmental resources (e.g., Hanging Roots).

### ⛏️ Expanded Heavy Industry & Mining
- **Modern Industrialization (MI) Quarry Overhaul:** The MI Quarry now accepts specialized drills crafted via **Create** and **Immersive Engineering**. 
  - *Balancing Note:* Custom Brass Drills carry a high-efficiency layout with a fixed **4% break chance per cycle**.
- **Custom Ore Processing:** Implementation of the custom **Andesite Alloy Ore** across world features and skyblock generation frameworks (`skyblockbuilder`). 
- **Industrial Maceration:** Processing the new custom ore inside the MI Macerator yields **3x Andesite Alloy** along with a **25% secondary chance** for a Zinc Nugget.

### 🚜 Integrated Agriculture & Automation
- **Pam's HarvestCraft Synergy:** Garden pods are directly linked into automated mixers and sequential assembly systems from the Create mod.
- **Botany Pots Dimensional Support:** Added full crop and soil logic configurations for resource farming using *The Undergarden* dimension flora.

---

## 📦 Core Mod Additions (v1.0.3)
- **Create Ultimine:** Enhanced vein-mining tool tailored for large-scale operations.
  - *Render Outline extended to **512** for vast vein visibility.*
  - *Dedicated server settings deployed at `config/createultimine-server.snbt`.*
- **Harvest and Sow:** Refined crop collection and automatic farming automation utilities.

---

## 🛠️ Technical Implementation Details (For Pack Developers)

### Registered Custom Items (`startup_scripts`)
- `andesite_alloy_ore.js` — Custom ore registration block.
- `incomplete_ftbstuff.js` & `incomplete_infused_porcelain.js` — Step-by-step intermediate progression items for multi-tier crafting.
- `pam_gardens_items.js` — Agricultural logic variables.

### Data Recipes Deployment (`data/`)
Includes 6 specialized high-temperature jar processing JSON definitions:
- Andesite Alloy Block / Andesite Infused
- Molten Andesite Alloy / Molten Cobblestone
- Molten Porcelain Clay / Porcelain Plate

### Custom Assets
- Bundles **24 custom textures** including 23 new high-quality item assets specifically tailored for custom recipe icons.
