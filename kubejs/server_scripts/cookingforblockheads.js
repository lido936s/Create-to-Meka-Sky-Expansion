//remove recipes from cookingforblockheads:sink
ServerEvents.recipes(event => {
event.remove({ output: 'cookingforblockheads:sink' })
});
//add recipes shaped for cookingforblockheads:sink
ServerEvents.recipes(event => {
event.shaped(
  Item.of('cookingforblockheads:sink', 1), // arg 1: output
  [
	' A ',
	'DBD',
	'DCD'
], {
	// arg 2: the mapping
	A: 'minecraft:iron_bars',
	B: 'watercondenser:watercondenser',
	C: 'srgens:basic_ore_gen',
	D: 'minecraft:terracotta',
	}).id('lido/sink') // id must be unique !
});