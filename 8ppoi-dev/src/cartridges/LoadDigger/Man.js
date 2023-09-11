export class Man {

	static move(map, man, vx, vy) {
		man.status = this.getStatus(map, man);
		if (man.status === 'falling') {
			vx = 0;
			vy = 1;
		}
		if (man.y % 6 === 0 && man.neighborhood[4] !== 2 && vy === -1) {
			vy = 0;
		}
		if (man.x % 6 === 0 && [ 0,1,4 ].includes(man.neighborhood[4 + vx])) {
			vx = 0;
		}
		if (man.y % 6 === 0 && [ 0,1,4 ].includes(man.neighborhood[4 + vy * 3])) {
			vy = 0;
		}
		if (vy) {
			vx = 0;
		}
		if (!vx && vy) {
			vx = Math.sign(man.cx * 6 - man.x);
		}
		if (!vy && vx) {
			vy = Math.sign(man.cy * 6 - man.y);
		}
		man.x += vx;
		man.y += vy;
		if (vx) {
			man.scaleX = vx;
		}
		if (man.status !== 'falling' && (vx || vy)) {
			man.theta++;
		}
		if (vx) {
			man.cx = Math.floor((man.x + 3 + (vx === -1 ? -1 : 0)) / 6);
		}
		if (vy) {
			man.cy = Math.floor((man.y + 3 + (vy === -1 ? -1 : 0)) / 6);
		}
		for (let i = 0; i < 9; i++) {
			const x = man.cx + i % 3 - 1;
			const y = man.cy + Math.floor(i / 3) - 1;
			man.neighborhood[i] = x < 0 || x >= 28 || y < 0 || y >= 16 ? 1 : map.cells[y][x];
		}
		man.sceneIndex = (man.status === 'running' ? 0 : man.status === 'bar' ? 6 : 3) + man.theta % 3;
	}

	static getStatus(map, character) {
		if (character.y % 6 === 0) {
			if (character.neighborhood[4] === 3) return 'bar';
			if ([ 0, 1, 2 ].includes(character.neighborhood[7])) return 'running';
			if (character.neighborhood[4] === 2) return 'ladder';
			return 'falling';
		}
		else {
			if (map.cells[Math.floor(character.y / 6)][character.cx] === 2) return 'ladder';
			if (map.cells[Math.ceil(character.y / 6)][character.cx] === 2) return 'ladder';
			return 'falling';
		}
	}
}
