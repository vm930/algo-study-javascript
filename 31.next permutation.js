/*
31. Next Permutation
Medium
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/
var nextPermutation = function(nums) {
	let breakPoint;

	for (let i = nums.length; i > 0; i--) {
		console.log(nums);
		if (nums[i] > nums[i - 1]) {
			//mark the number
			breakPoint = nums[i - 1];
			for (let j = breakPoint + 1; j < nums.length; j++) {
				//go forward and look for the number that is less than breakpoint
				if (nums[breakPoint] > nums[j]) {
					//swap the elements
					let temp = nums[breakPoint];
					nums[breakPoint] = nums[j - 1];
					nums[j - 1] = temp;
				}
			}

			let k = breakPoint + 1;
			let l = nums.length;

			while (k < l) {
				if (nums[k] > nums[l]) {
					//swap
					let temp = nums[k];
					nums[k] = nums[j];
					nums[j] = temp;
				}
				k++;
				l--;
			}
		}
	}
};

console.log(nextPermutation([ 1, 2, 3 ]));
console.log(nextPermutation([ 3, 2, 1 ]));
console.log(nextPermutation([ 1, 1, 5 ]));
console.log(nextPermutation([ 1, 5, 8, 4, 7, 6, 5, 3, 1 ]));
