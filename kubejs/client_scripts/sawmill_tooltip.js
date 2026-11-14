// Ajoute le tag du modpack (nom + version) a l'infobulle des machines Custom Machinery
ItemEvents.modifyTooltips(event => {
  let m = global.MODPACK || { name: 'Create to Meka: Sky Expansion', version: '1.03' }
  event.add('custommachinery:custom_machine_item', [
    Text.aqua('[' + m.name + ' v' + m.version + ']')
  ])
})
