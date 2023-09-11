import { Graphic } from '../../Graphic.js';

export class Index {

	static async onPush() {
		await Promise.all([
			Graphic.start(),
		]);
		Graphic.createTextMap(0, 0, 'HELLO, WORLD!');
		const textMap = Graphic.createTextMap(0, 6, 'HOW YOU DOIN\'');
		textMap.text = 'THIS IS 8PPOI';
	}
}
