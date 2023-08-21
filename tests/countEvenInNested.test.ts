import { countEvenInNested } from '../src/countEvenInNested';

describe('countEvenInNested', () => {
	it('should return sum of the even #1', () => {
		const input1 = {
			outer: 2,
			obj: {
				inner: 2,
				otherObj: {
					superInner: 2,
					notANumber: true,
					alsoNotANumber: 'yup',
				},
			},
		};
		const output1 = 6;
		expect(countEvenInNested(input1)).toBe(output1);
	});

	it('should return sum of the even #2', () => {
		const input2 = {
			a: 2,
			b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
			c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
			d: 1,
			e: { e: { e: 4 }, ee: 'car' },
		};
		const output2 = 12;
		expect(countEvenInNested(input2)).toBe(output2);
	});
});
