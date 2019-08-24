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
	//f t t t t
	//  e
	//   s

	//if mid === false, set start = mid +1
	// else set end = mid

	//while(start !== end) return arr[mid]

	return function(n) {
		//create an array of to nth number
		let arr = [];
		for (let i = 1; i < n + 1; i++) {
			arr.push(i);
		}
		let start = 0;
		let end = arr.length - 1;

		while (start !== end && start < end) {
			let mid = Math.floor((start + end) / 2);
			if (!isBadVersion(arr[mid])) {
				start = mid + 1;
			} else {
				end = mid;
			}
		}
		return arr[start];
	};
};
