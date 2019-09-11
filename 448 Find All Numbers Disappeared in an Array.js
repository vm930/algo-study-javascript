/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

var findDisappearedNumbers = function(nums) {
	// iterate nums to create a hash map of key num value "y";
	// cearte a solution array to return at the end
	// create new array for counts newarray = []
	// iterate to create newArray
	// for(let i = 0; i<nums.length; i ++){
	//   newarray.push(i+1);
	//}
	//loop through newarray
	//if lookup[newarr[i]] === "y" ignore
	//if lookup[newarr[i]] === undefined solution.push[newarr[i]]
	//return solution

	let lookup = {};
	let solution = [];
	let newArr = [];

	for (let i = 0; i < nums.length; i++) {
		if (lookup[nums[i]] === undefined) {
			lookup[nums[i]] = 'y';
		}
	}

	for (let j = 0; j < nums.length; j++) {
		newArr.push(j + 1);
	}

	for (let k = 0; k < newArr.length; k++) {
		if (lookup[newArr[k]] === undefined) {
			solution.push(newArr[k]);
		}
	}

	return solution;
};

console.log(findDisappearedNumbers([ 4, 3, 2, 7, 8, 2, 3, 1 ]));
