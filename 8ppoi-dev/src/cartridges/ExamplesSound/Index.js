import { Queue } from '../../Queue.js';
import { Sound } from '../../Sound.js';

export class Index {

	static async onPush() {
		await Promise.all([
			Sound.start(),
		]);
		const soundQueueId = Sound.play('Jump', true);
		Sound.play('Break', true);
		Queue.set([
			[ 24, () => Sound.stop(soundQueueId) ],
		]);
		Queue.set([
			[ 48, () => Sound.stopAll() ],
		]);
	}
}
