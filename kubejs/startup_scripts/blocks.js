// remerciement à l'auteur goldy
// adding machines blocks

StartupEvents.registry('block', event => {

	let machine = (name, layer) => {
		let id = name.toLowerCase()

		event.create(`${id}_machine`)
			.displayName(`${name} Machine`)
			.soundType('lantern')
			.hardness(3.0)
			.requiresTool(true)
			.tagBlock('minecraft:mineable/pickaxe')
			.notSolid()
			.renderType(layer)
			.texture(`kubejs:block/${id}_machine`)
	}

	machine('Andesite', 'solid')
	machine('Copper', 'translucent')
	machine('Brass', 'cutout')
})