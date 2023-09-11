import { Graphic } from '../../Graphic.js';

export class Index {

	static async onPush() {
		await Promise.all([
			Graphic.start(),
		]);
		const sprite = Graphic.createSprite(0, 0, 'Poi');
		sprite.sceneIndex = 1;
	}
}
