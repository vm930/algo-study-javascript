/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

var moveZeroes = function(nums) {
	//find two pointers slow and fast
	//set if arr[i] === 0; slow = arr[i];
	//set fast = slow +1;
	//while fast < arr.length
	//if (arr[fast] !== 0) swamp arr[slow] with arr[fast] increment fast and slow
	//else increment fast
};
