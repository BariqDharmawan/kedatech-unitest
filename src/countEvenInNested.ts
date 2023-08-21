export const countEvenInNested = (obj: Record<string, any>): number => {
	let count = 0;

	for (const key in obj) {
		if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			count += obj[key];
		} else if (typeof obj[key] === 'object') {
			count += countEvenInNested(obj[key]);
		}
	}

	return count;
};
