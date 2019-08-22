/*
Array Index & Element Equality from pramp
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.

input: arr = [-8,0,2,5]
output: 2 # since arr[2] == 2

input: arr = [-1,0,3,6]
output: -1 # since no index in arr satisfies arr[i] == i.
*/

function indexEqualsValueSearch(arr) {
	let s = 0;
	let e = arr.length - 1;

	while (s <= e) {
		let m = Math.floor((s + e) / 2);
		if (m === arr[m]) {
			if (arr[m - 1] !== undefined && m - 1 === arr[m - 1]) {
				e = m - 1;
			} else {
				return m;
			}
		} else {
			if (m > arr[m]) {
				s = m + 1;
			}
			if (m < arr[m]) {
				e = m - 1;
			}
		}
	}
	return -1;
}

// [0, 1, 2, 3, 4, 5]

// console.log(indexEqualsValueSearch([0]))
console.log(indexEqualsValueSearch([ 0, 1, 2, 3 ]));

// n^2
// n log n
// n 1000000
// lg n 20
// 1
