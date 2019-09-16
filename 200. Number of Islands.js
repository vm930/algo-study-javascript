/*
200 Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:
Input:
11000
11000
00100
00011

Output: 3
*/

var numIslands = function(grid) {
	//make a copy of a grid and set all the elements as false
	let copy = [];

	for (let i = 0; i < grid.length; i++) {
		let copy2 = [];
		copy.push(copy2);
		for (let j = 0; j < grid[0].length; j++) {
			copy2.push(false);
		}
	}
	// console.log(copy);
	//use a variable to keep track of counts
	let count = 0;
	//need two helper functions
	//validate i and j
	//isIsland

	function validate(i, j) {
		let valid = [];

		//left = [i ,j-1]
		//right = [i ,j+1]
		//top = [i-1 ,j]
		//bottom = [i+1 ,j]

		if (i - 1 >= 0) {
			valid.push([ i - 1, j ]);
		} //top
		if (j - 1 >= 0) {
			valid.push([ i, j - 1 ]);
		} //left
		if (j + 1 < grid[0].length) {
			valid.push([ i, j + 1 ]);
		} //right
		if (i + 1 < grid.length) {
			valid.push([ i + 1, j ]);
		} //bottom

		return valid;
	}

	function findIsland(i, j) {
		//set the copy to be true
		copy[i][j] = true;
		let validArr = validate(i, j);
		for (let k = 0; k < validArr.length; k++) {
			let indexI = validArr[k][0];
			let indexJ = validArr[k][1];

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
};
// console.log(
// 	numIslands([ [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ], [ 1, 0, 1, 0, 1 ] ])
// );
// console.log(numIslands([ 1, 1, 1, 1, 0 ], [ 1, 1, 0, 1, 0 ], [ 1, 1, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ]));

// console.log(
// 	numIslands([ [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ], [ 1, 0, 1, 0, 1 ] ])
// );

console.log(
	numIslands([
		[ '1', '1', '1', '1', '0' ],
		[ '1', '1', '0', '1', '0' ],
		[ '1', '1', '0', '0', '0' ],
		[ '0', '0', '0', '0', '0' ]
	])
);
