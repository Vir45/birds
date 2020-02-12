function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

const res = random(0, 5);

export default res;
