import { Color } from '../../Color.js';
import { Graphic } from '../../Graphic.js';

export class Index {

	static async onPush() {
		await Promise.all([
			Color.start(),
			Graphic.start(),
		]);
		const textMap = Graphic.createTextMap(0, 0, 'ABC');
		textMap.x = 8;
		textMap.y = 8;
		textMap.scaleX = -1;
		textMap.scaleY = -1;
		textMap.paletteIndex = 3;
		textMap.setPaletteIndex(0, 0, 4);
		const imageMap = Graphic.createImageMap(0, 0, [ [ 0, 1 ] ]);
		imageMap.x = 16;
		imageMap.y = 16;
		imageMap.scaleX = -1;
		imageMap.scaleY = -1;
		imageMap.paletteIndex = 3;
		imageMap.setPaletteIndex(0, 0, 4);
		const sprite = Graphic.createSprite(0, 0, 'Poi');
		sprite.x = 24;
		sprite.y = 24;
		sprite.scaleX = -1;
		sprite.scaleY = -1;
		sprite.paletteIndex = 3;
		sprite.setPaletteIndex(0, 0, 4);
	}
}
