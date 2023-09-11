import { State } from '../../State.js';
import { Queue } from '../../Queue.js';

export class Main {

	static characters = [];

	static async onPush() {
		console.log('Main state onPush');
		const queueId = Queue.set([
			[ 1, () => State.pop() ],
		]);
	}
}
