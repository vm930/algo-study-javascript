/*
66. Plus One
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

var plusOne = function(digits) {
	//use two pointers
	//let i = digits.length -1 ;
	//let j = i - 1;
	//if digits.length === 0 return digits
	//while j > 0
	// check digits[j] === 9 , set digits[j] = 0 and check if digits[i] === 9 {if so, digits[i] ++; else }
	//else i --; j--;
};

console.log(plusOne([ 1, 2, 3 ]));
console.log(plusOne([ 8, 9 ]));
