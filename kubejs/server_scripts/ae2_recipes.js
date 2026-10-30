// remove recipes ae2:logic_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:logic_processor' })
});
// remove recipes ae2:engineering_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:engineering_processor' })
});
// remove recipes ae2:calculation_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:calculation_processor' })
});
// remove recipes megacells:accumulation_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'megacells:accumulation_processor' })
});
// remove recipes extendedae:concurrent_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'extendedae:concurrent_processor' })
});
// remove recipes advanced_ae:quantum_processor
ServerEvents.recipes(event => {
    event.remove({ output: 'advanced_ae:quantum_processor' })
});
// remove recipes ae2:inscriber
ServerEvents.recipes(event => {
    event.remove({ output: 'ae2:inscriber' })
});

// adding recipe config json >> kubejs\data\ae2\recipes\inscriber

// Adding AE2 processor recipes with Create Electron Tube

ServerEvents.recipes(event => {
 // logic processor
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "ae2:printed_logic_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "ae2:logic_processor"
        }
    })
 // engineering processor
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "ae2:printed_engineering_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "ae2:engineering_processor"
        }
    })
 // calculation processor
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "ae2:printed_calculation_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "ae2:calculation_processor"
        }
    })
  // accumulation processor megacells
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "megacells:printed_accumulation_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "megacells:accumulation_processor"
        }
    })
    // extendedae:concurrent_processor
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "extendedae:concurrent_processor_print"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "extendedae:concurrent_processor"
        }
    })
    // advanced_ae:quantum_processor
    event.custom({
        type: "ae2:inscriber",
        ingredients: {
            bottom: {
                item: "ae2:printed_silicon"
            },
            middle: {
                item: "create:electron_tube"
            },
            top: {
                item: "advanced_ae:printed_quantum_processor"
            }
        },
        mode: "press",
        result: {
            count: 1,
            id: "advanced_ae:quantum_processor"
        }
    })
});
// adding ae2:inscriber recipes 
ServerEvents.recipes(event => {
event.shaped(
  Item.of('ae2:inscriber', 1), // arg 1: output
  [
    'ACA',
    'A  ',
    'ABA' 
], {
    // arg 2: the mapping
    A: 'minecraft:iron_ingot',
    B: 'create:mechanical_arm',
    C: 'create:mechanical_press',  //arg 3: the mapping object
  
}); 
});
