// kubejs/startup_scripts/sawmill_block.js
StartupEvents.registry('block', event => {
    event.create("meka_sky:sawmill", "custommachinery:custom_machine").machine("meka_sky:sawmill")
})