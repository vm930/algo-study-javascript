/*
Valid Anagram
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

var isAnagram = function(s, t) {
	//create a lookup hash and store key as letter and value as counts
	//convert both of the strings to arrays
	//loop through the frist arrays and make a lookup hash
	//loop through the second array to check
	//if lookup[arr[i]] === undefined || zero return false;
	//else lookup[arr[i]] -=1;
	//return true at the end;

	let lookup = {};
	let arr1 = s.split('');
	let arr2 = t.split('');

	if (arr1.length !== arr2.length) return false;

	for (let i = 0; i < arr1.length; i++) {
		if (lookup[arr1[i]] === undefined) {
			lookup[arr1[i]] = 1;
		} else {
			lookup[arr1[i]] += 1;
		}
	}
	for (let j = 0; j < arr2.length; j++) {
		// console.log(lookup[arr2[j]]);
		if (lookup[arr2[j]] === 0 || lookup[arr2[j]] === undefined) {
			// console.log(lookup);
			return false;
		}
		if (lookup[arr2[j]] !== undefined || lookup[arr2[j]] !== 0) {
			lookup[arr2[j]] -= 1;
		}
	}

	return true;
};
console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('vicky', 'vic'));
console.log(isAnagram('car', 'rar'));
