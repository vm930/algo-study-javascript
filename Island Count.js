/*
pramp question

Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.


*/
function getNumberOfIslands(grid) {
	//create a copy of an array with all falses
	//loop thru matrix on rows i
	//inside of rows, check to see every element in the array j

	//check if current ele === 0 ? ; move on
	//if ele === 1 ;
	// if current ele in the copy is true or false
	//if true, move on
	//false
	//then you also need to update top left right bottom ele in the copy to be trues
	//increament count +1;
	//check current current ele [i][j] left [i][j-1] right [i][j+1] top [i-1][j]  below [i+1][j]
	//return the counter

	let copy = [];
	//initialize a copy of an array with all falses
	for (let i = 0; i < grid.length; i++) {
		let copy2 = [];
		copy.push(copy2);
		for (let j = 0; j < grid[0].length; j++) {
			copy2.push(false);
		}
	}
	// console.log(copy);
	let count = 0;

	function validation(i, j) {
		let valid = [];
		// let left = [i, j-1]
		// let right = [i, j+1]
		// let top = [i-1, j]
		// let bottom = [i+1,j]

		if (i - 1 >= 0) {
			valid.push([ i - 1, j ]); //top
		}
		if (j - 1 >= 0) {
			valid.push([ i, j - 1 ]); //left
		}
		if (j + 1 < grid[0].length) {
			valid.push([ i, j + 1 ]); //right
		}
		if (i + 1 < grid.length) {
			valid.push([ i + 1, j ]); //bottom
		}
		// console.log(valid)
		return valid;
	}

	function findIsland(i, j) {
		copy[i][j] = true;
		let validarr = validation(i, j);
		//check to see every coordinates in validarr and see if its a 1,
		// if so call function again, else move on
		for (let k = 0; k < validarr.length; k++) {
			let indexI = validarr[k][0];
			let indexJ = validarr[k][1];

			if (grid[indexI][indexJ] === '1' && copy[indexI][indexJ] === false) {
				findIsland(indexI, indexJ);
			}
		}
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1' && copy[i][j] === false) {
				count++;
				findIsland(i, j);
			}
			//if true, move on
		} //else if current ele === 0 move on
	}
	// console.log(copy);
	return count;
}

// console.log(
// 	getNumberOfIslands([
// 		[ 0, 1, 0, 1, 0 ],
// 		[ 0, 0, 1, 1, 1 ],
// 		[ 1, 0, 0, 1, 0 ],
// 		[ 0, 1, 1, 0, 0 ],
// 		[ 1, 0, 1, 0, 1 ]
// 	])
// );

// console.log(getNumberOfIslands([ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 1, 1, 0 ] ]));

console.log(
	getNumberOfIslands([
		[ '1', '1', '1', '1', '0' ],
		[ '1', '1', '0', '1', '0' ],
		[ '1', '1', '0', '0', '0' ],
		[ '0', '0', '0', '0', '0' ]
	])
);
