import { Color } from '../../Color.js';
import { Graphic } from '../../Graphic.js';

export class Index {

	static characters = [];

	static async onPush() {
		await Promise.all([
			Color.start(),
			Graphic.start(),
		]);
		const n = 5;
		const imageMap = Graphic.createImageMap(0, 0, Array(n).fill(Array(n).fill(0)));
		for (let i = 0; i < n * n; i++) {
			imageMap.setPaletteIndex(i % n, Math.floor(i / n), i);
			if (i < n) {
				Color.setColor(i, `hsl(0,  0%, ${100 * i / n}%`);
			}
			else {
				Color.setColor(i, `hsl(${360 * (i % n) / n}, 50%, ${100 * Math.floor(i / n) / n}%`);
			}
			Color.setColorIndex(i, 0, [ i ]);
		}
	}
}
