ServerEvents.recipes(event => {
// stone pebbles
    event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:stone"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:stone_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]
    });
// andesite pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:andesite"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:andesite_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]
    });
// diorite pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:diorite"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:diorite_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]               
        }
    );
// granite pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:granite"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:granite_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]   
        }
    );
// deepslate pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:deepslate"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:deepslate_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]       
        }
    );
// tuff pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:tuff"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:tuff_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]
        }
    );
// calcite pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:calcite"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:calcite_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]
        }
    );
// dripstone pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:dripstone_block"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:dripstone_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]
        }
    );
// blackstone pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:blackstone"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:blackstone_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]       
        }
    );
// netherrack pebbles
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "minecraft:netherrack"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "havenpebbles:netherrack_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]       
        }
    );
//  undergarden:deepturf_block'
 event.custom({
        type: "lychee:block_interacting",

        item_in: {
            item: "minecraft:stone_pickaxe"
        },

        block_in: {
            blocks: [
                "undergarden:deepturf_block"
            ]
        },

        contextual: [
            {
                type: "is_sneaking"
            }
        ],

        post: [
            {
                type: "random",
                rolls: {
                    min: 1,
                    max: 16
                },
                entries: [
                    {
                        type: "drop_item",
                        id: "undergarden:depthrock_pebble",
                        contextual: {
                            type: "chance",
                            chance: 0.50
                        }
                    }
                ]
            },
            {
                type: "damage_item"
            }
        ]       
        }
    );
});