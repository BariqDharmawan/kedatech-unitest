import { manualSort } from '../src/manualSort';

describe('manualSort function', () => {
	it('should sort an array of number ascending', () => {
		const listNumber = [1, 2, 4, 3, 5, 3, 2, 1];
		const sortingAsc = manualSort(listNumber, true);

		expect(sortingAsc).toStrictEqual([1, 1, 2, 2, 3, 3, 4, 5]);
	});

	it('should sort an array of number descending', () => {
		const listNumber = [1, 2, 4, 3, 5, 3, 2, 1];
		const sortingAsc = manualSort(listNumber, false);

		expect(sortingAsc).toStrictEqual([5, 4, 3, 3, 2, 2, 1, 1]);
	});
});
