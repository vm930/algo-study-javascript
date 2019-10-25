/*
443. String Compression
Given an array of characters, compress it in-place.
The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1.
After you are done modifying the input array in-place, return the new length of the array.

Example 1:
Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Example 2:
Input:
["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]

Example 3:

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]

Output:
["a","b","1","2"]
*/

// var compress = function(chars) {
// 	let checker = chars[0];
// 	let counter = 1;
// 	let solution = [];

// 	for (let i = 1; i < chars.length; i++) {
// 		if (checker === chars[i]) {
// 			counter++;
// 		} else {
// 			solution.push(checker);
// 			checker = chars[i];
// 			if (counter > 1) {
// 				let arr = counter.toString().split('');
// 				solution = solution.concat(arr);
// 				counter = 1;
// 			}
// 		}
// 	}
// 	//push the last ele into the solution array
// 	solution.push(chars[chars.length - 1]);
// 	if (counter > 1) {
// 		let arr = counter.toString().split('');
// 		solution = solution.concat(arr);
// 	}
// 	return solution.length;
// };

// console.log(compress([ 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b' ])); // [a,b,12]
// console.log(compress([ 'a', 'b', 'a' ])); //[a,b,a]
// console.log(compress([ 'a', 'a', 'b', 'b', 'c', 'c', 'c' ])); // [a,2,b,2,c,3]
// console.log(compress([ 'a', 'a' ])); // [a,2]

var compress = function(chars) {
	let checker = chars[0];
	let counter = 1;
	let overwrite = 0;

	for (let i = 1; i < chars.length; i++) {
		if (checker === chars[i]) {
			counter++;
		} else {
			chars[overwrite] = checker;
			overwrite++;
			checker = chars[i];
			if (counter > 1) {
				let arr = counter.toString().split('');
				arr.forEach((ele) => {
					chars[overwrite] = ele;
					overwrite++;
				});

				counter = 1;
			}
		}
	}
	//push the last ele into the solution array
	chars[overwrite] = chars[chars.length - 1];
	overwrite++;
	if (counter > 1) {
		let arr = counter.toString().split('');
		arr.forEach((ele) => {
			chars[overwrite] = ele;
			overwrite++;
		});
	}

	chars = chars.slice(0, overwrite);
	console.log(chars);
};

console.log(compress([ 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b' ])); // [a,b,12]
