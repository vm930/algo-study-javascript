/*
find number of soldiers 
*/

// [3, 2, 3, 4, 1, 2, 3]
// answer = 3 + 2 + 1
// [0, 1, 4, 10, 9, 3]
// 1 + 1 + 1

function findSoldiers(arr) {
	let solution = 0;
	let lookup = {};
	for (let i = 0; i < arr.length; i++) {
		if (lookup[arr[i]] === undefined) {
			lookup[arr[i]] = 'y';
		}
	}
	for (let j = 0; j < arr.length; j++) {
		if (lookup[arr[j] + 1] === 'y') {
			solution++;
		}
	}
	return solution;
}

console.log(findSoldiers([ 0, 1, 4, 10, 9, 3 ]));
console.log(findSoldiers([ 3, 2, 3, 4, 1, 2, 3 ]));
console.log(findSoldiers([ 0, 1 ]));
