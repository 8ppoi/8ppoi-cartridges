import { Graphic } from '../../Graphic.js';

export class Index {

	static async onPush() {
		await Promise.all([
			Graphic.start(),
		]);
		const imageMap = Graphic.createImageMap(0, 0, [ [ 0, 1 ] ]);
		imageMap.setImage(1, 0, 0, 1);
	}
}
