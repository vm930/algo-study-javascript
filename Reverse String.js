//Reverse String
/*
Example 1:
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

var reverseString = function(s) {
	//o(n^2) to loop through every element and reverse.
	//o(n) to use iliterative way
	//set a start point and end point
	//while s< e if s swap with e
	// return the original s
	let start = 0;
	let end = s.length - 1;

	while (start < end) {
		let temp = s[start];
		s[start] = s[end];
		s[end] = temp;
		start++;
		end--;
	}
	return s;
};

console.log(reverseString([ 'h', 'a', 'n', 'n', 'a', 'H' ]));
console.log(reverseString([ 'v', 'i', 'c', 'k', 'y' ]));
