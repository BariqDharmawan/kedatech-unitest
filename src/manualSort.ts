export const manualSort = (numbers: number[], isAsc: boolean) => {
	const cloneArrNumber = [...numbers];
	for (let i = 0; i < cloneArrNumber.length - 1; i++) {
		for (let j = 0; j < cloneArrNumber.length - 1 - i; j++) {
			const shouldSwap = isAsc
				? cloneArrNumber[j] > cloneArrNumber[j + 1]
				: cloneArrNumber[j] < cloneArrNumber[j + 1];

			if (shouldSwap) {
				const temp = cloneArrNumber[j];
				cloneArrNumber[j] = cloneArrNumber[j + 1];
				cloneArrNumber[j + 1] = temp;
			}
		}
	}

	return cloneArrNumber;
};
