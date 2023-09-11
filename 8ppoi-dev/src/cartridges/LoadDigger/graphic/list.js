export default {
	Brick: {
		defaultPaletteIndex:1,
	},
	Concrete: {
		defaultPaletteIndex:1,
	},
	Ladder: {
		defaultPaletteIndex:0,
	},
	Bar: {
		defaultPaletteIndex:0,
	},
	Trap: {
		defaultPaletteIndex:1,
	},
	Escape: {
		defaultPaletteIndex:1,
	},
	Gold: {
		defaultPaletteIndex:2,
	},
	Guard: {
		defaultPaletteIndex:3,
	},
	Man: {
		defaultPaletteIndex:4,
	},
	Font: {
		defaultPaletteIndex:0, characters:[...Array(95)].map((_, i) => String.fromCharCode(0x20 + i)).join(''),
	},
}
