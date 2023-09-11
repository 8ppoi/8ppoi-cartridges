import { State } from '../../State.js';
import { Queue } from '../../Queue.js';

export class Index {

	static characters = [];

	static async onPush() {
		console.log('Index state onPush');
		const queueId = Queue.set([
			[ 1, () => State.push('Main') ],
		]);
	}

	static async onPop() {
		console.log('Index state onPop');
	}
}
