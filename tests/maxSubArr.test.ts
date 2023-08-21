import { maxSubArraySum } from '../src/maxSubArr';

describe('find maxSubArr', () => {
	it('should find maxSubArr expected 700', () => {
		const maxTwoElement = maxSubArraySum([100, 200, 300, 400], 2);
		expect(maxTwoElement).toEqual(700);
	});

	it('should find maxSubArr fourth element', () => {
		const maxFourthElement = maxSubArraySum(
			[1, 4, 2, 10, 23, 3, 1, 0, 20],
			4
		);
		expect(maxFourthElement).toEqual(39);
	});

	it('should find maxSubArr two element with negative', () => {
		const maxTowElementWithNegative = maxSubArraySum(
			[-3, 4, 0, -2, 6, -1],
			2
		);
		expect(maxTowElementWithNegative).toEqual(5);
	});
});
