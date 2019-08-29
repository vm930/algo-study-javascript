/*
isPalindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

var isPalindrome = function(s) {
	//get rid of all the special characters; replace(/[^a-zA-Z ]/g, "")
	//turn s into all lowercase
	//split s into arrays without any spaces
	//start from 0, end from end of the array
	//while (start<end){if s[start] !== s[end]}
	//return true
	s = s.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('');
	//using .split(' ').join('') is faster than regex
	let newArr = s.toLowerCase().split('');
	console.log(newArr);
	let start = 0;
	let end = newArr.length - 1;
	while (start < end) {
		if (newArr[start] !== newArr[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('0p'));
