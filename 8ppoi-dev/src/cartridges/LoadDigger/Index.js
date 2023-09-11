import { Controllers } from '../../Controllers.js';
import { Color } from '../../Color.js';
import { Graphic } from '../../Graphic.js';
import { Sound } from '../../Sound.js';
import { Man } from './Man.js';

export class Index {

	static currentFrame;
	static numGold;
	static numCollectGold;
	static allGoldCollected;

	static async onPush() {
		this.currentFrame = 0;
		await Promise.all([
			Controllers.start(),
			Color.start(),
			Graphic.start(),
			Sound.start(),
		]);
		const background = Graphic.createImageMap(0, 0, (await import('./cells/Background.js')).default);
		this.map = Graphic.createImageMap(6, 0, (await import(`./cells/${1}.js`)).default, background.container);
		this.numGold = 0;
		this.numCollectGold = 0;
		this.allGoldCollected = this.numCollectGold === this.numGold;
		for (const row of this.map.cells) {
			for (const value of row) {
if (value === 6) {
	this.numGold++;
}
			}
		}
		Graphic.createTextMap(0, 6 * 18, 'LEVEL', 0, background.container);
		Graphic.createTextMap(4 * 23, 6 * 18, 'GOLD:', 0, background.container);
		Graphic.createTextMap(4 * 28, 6 * 18, ('00' + this.numCollectGold.toString()).slice(-2), 0, background.container);
		Graphic.createTextMap(4 * 30, 6 * 18, '/', 0, background.container);
		Graphic.createTextMap(4 * 31, 6 * 18, ('00' + this.numGold.toString()).slice(-2), 0, background.container);
console.log(this.numGold);
		this.man = Graphic.createSprite(0, 0, 'Man', 4, this.map.container);
		this.man.x = 42;
		this.man.y = 0;
		this.man.cx = 7;
		this.man.cy = 0;
		this.man.theta = 0;
		this.man.neighborhood = [];
	}

	static async onFrame() {
		this.currentFrame++;
		if (this.currentFrame % 2 === 0) {
			Man.move(this.map, this.man, Controllers[0].right - Controllers[0].left, Controllers[0].down - Controllers[0].up);
		}
	}
}
