/*
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

var climbStairs = function(n) {
	//using recursion
	//base cases are 0, 1, 2
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	if (n === 2) {
		return 2;
	}

	let solution;
	solution = climbStairs(n - 1) + climbStairs(n - 2);
	return solution;
};

//another solution

var climbStairs = function(n) {
	if (n < 2) return 1; //edge case
	let count = 0;
	let result = [ 1, 1 ];

	for (let i = 2; i < n + 1; i++) {
		result[i] = result[i - 2] + result[i - 1];
	}
	count = result[result.length - 1];

	return count;
};

console.log(climbStairs(2));
console.log(climbStairs(1));
console.log(climbStairs(5));
console.log(climbStairs(6));
