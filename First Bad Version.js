//First Bad Version
/*
Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version.
*/

var solution = function(isBadVersion) {
	/**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

	return function(n) {
		//create an array of to nth number
		let arr = [];
		for (let i = 1; i < n + 1; i++) {
			arr.push(i);
		}

		for (let j = 0; j < arr.length; j++) {
			//fifo
			console.log(arr[j]);
			if (isBadVersion(arr[j])) {
				return arr[j];
			}
		}

		// console.log(n)
		// console.log(arr)
	};
};
