// Infos du modpack, lues une seule fois et partagees via global.MODPACK
// Pour changer la version : modifie kubejs/config/modpack_version.json  {"version": "1.03"}
// (ou laisse le launcher fournir manifest.json a la racine de l'instance)
(function () {
  let info = { name: 'Create to Meka: Sky Expansion', version: '1.03' }   // valeur de secours
  let sources = ['kubejs/config/modpack_version.json', 'manifest.json']
  for (let i = 0; i < sources.length; i++) {
    try {
      let j = JsonIO.read(sources[i])
      if (j && j.has('version') && String(j.get('version').getAsString()).length > 0) {
        info.version = String(j.get('version').getAsString())
        if (j.has('name')) info.name = String(j.get('name').getAsString())
        break
      }
    } catch (e) { /* fichier absent : on essaie le suivant */ }
  }
  global.MODPACK = info
  console.info('[modpack_info] ' + info.name + ' v' + info.version)
})()
