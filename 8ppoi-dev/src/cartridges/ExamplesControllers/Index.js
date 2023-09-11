import { Controllers } from '../../Controllers.js';

export class Index {

	static characters = [];

	static async onPush() {
		await Promise.all([
			Controllers.start(),
		]);
	}

	static onFrame() {
		console.log(Controllers[0], Controllers[1]);
	}
}
