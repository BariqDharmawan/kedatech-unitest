export const maxSubArraySum = (arr: number[], length: number): number => {
	let maxSum = 0;
	for (let i = 0; i < length; i++) {
		maxSum += arr[i];
	}

	let tempSum = maxSum;
	for (let i = length; i < arr.length; i++) {
		tempSum = tempSum - arr[i - length] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
};
