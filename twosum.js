var twoSum = function(nums, target) {
	let lookup = {};

	for (let i = 0; i < nums.length; i++) {
		let compareValue = target - nums[i];
		if (lookup[compareValue] !== undefined) {
			return [ lookup[compareValue], i ];
		} else {
			lookup[nums[i]] = i;
		}
	}
};

console.log(twoSum([ 2, 3, 4, 5, 6 ], 9));
