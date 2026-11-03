// =====================================================================
//  PORTAIL UNDERGARDEN -> SKY MACHINE
//  Minecraft 1.21.1 / NeoForge 21.1.238 - KubeJS 2101.7.x - BBL Portals 1.2.0
//  Dimension : kubejs/data/kubejs/dimension/sky_machine.json (kubejs:sky_machine)
//
//  Construction : cadre 4x5 (comme un portail du Nether) en blocs de cloggrum,
//  puis clic droit sur le cadre avec le Gâteau de la Sky Machine.
//  Le portail marche dans les deux sens (le portail de retour est créé automatiquement).
// =====================================================================

// Objet d'allumage (réutilisable, non consommé : c'est le comportement de BBL Portals)
StartupEvents.registry('item', event => {
    event.create('sky_machine_cake')
        .displayName('Sky Machine Cake')
        .texture('kubejs:item/sky_machine_cake')
        .maxStackSize(1);
});

PortalEvents.register(event => {
    event.create()
        .frameBlock('undergarden:cloggrum_block')       // 1 portail par bloc de cadre : unique dans le pack
        .lightWithItem('kubejs:sky_machine_cake')
        .setDestination('kubejs:sky_machine')
        .returnDim('undergarden:undergarden', true)     // retour = Undergarden ; allumable UNIQUEMENT dans l'Undergarden ou la Sky Machine
        .tint(110, 190, 255)
        .portalTexture('default');
});
