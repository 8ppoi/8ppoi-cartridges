import { Queue } from '../../Queue.js';

export class Index {

	static characters = [];

	static async onPush() {
		const queueId = Queue.set([
			[ 1, () => console.log('1 frame later') ],
			[ 1, () => console.log('2 frames later') ],
			[ 0, () => Queue.clear(queueId) ],
			[ 1, () => console.log('3 frames later') ],
		]);
		Queue.set([
			[ 4, () => console.log('4 frames later') ],
			[ 0, () => Queue.clearAll() ],
			[ 1, () => console.log('5 frames later') ],
		]);
	}
}
