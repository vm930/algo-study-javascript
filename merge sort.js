/* implement merge sort 
array = [4,2,8,10,99,71,45,3,52,0]
*/

function mergeSort(array) {
	//set the basecase
	if (array.length <= 1) {
		return array;
	} else {
		let midpoint = Math.floor(array.length / 2);
		// let left = mergeSort(array.slice(0, midpoint));
		// let right = mergeSort(array.slice(midpoint));
		let left = array.slice(0, midpoint);
		let right = array.slice(midpoint);

		return merge(mergeSort(left), mergeSort(right));
	}
}

function merge(array1, array2) {
	// console.log(array1);
	// console.log(array2);
	let newArr = [];
	let i = 0;
	let j = 0;

	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			newArr.push(array1[i]);
			i++;
		} else {
			newArr.push(array2[j]);
			j++;
		}
	}

	// while (i < array1.length) {
	// 	newArr.push(array1[i]);
	// 	i++;
	// }

	// while (j < array2.length) {
	// 	newArr.push(array2[j]);
	// 	j++;
	// }

	// return newArr;

	if (i === array1.length) {
		return newArr.concat(array2.slice(j, array2.length));
	}
	if (j === array2.length) {
		return newArr.concat(array1.slice(i, array1.length));
	}
}

// console.log(merge([ 2 ], [ 0 ]));

// console.log(mergeSort([4, 2, 8, 10, 99, 71, 45, 3, 52, 0]));
// console.log(mergeSort([-4, 400, -4000, 14, 12, 11, 1, 5, -5, 17, 42]));
// console.log(mergeSort([-5, 5, -4, 4, -3, 3, -2, 2, -1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, -60]));
