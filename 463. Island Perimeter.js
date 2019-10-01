/*
463. Island Perimeter
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
*/
var islandPerimeter = function(grid) {
	/* use two for loops 
	use perimeter = 0
	check if grid[i][j] === 0 move on 
	if grid[i][j] === 1 {
		1.check to see top, bottom left and right 
				(if they are === 0 || if they are === undefined ) then increament perimeter
				else move on 
	}
	at the end return perimeter 
	*/
	if (grid === null) {
		return 0;
	}
	let perimeter = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				perimeter += perimeterCount(i, j);
			}
		}
	}

	function perimeterCount(i, j) {
		//top [i-1, j]
		//bottom [i+1, j]
		//left [i, j-1]
		//right [i, j+1]
		let count = 0;
		if (i - 1 < 0 || grid[i - 1][j] === 0) {
			count++;
		} //top
		if (i + 1 >= grid.length || grid[i + 1][j] === 0) {
			count++;
		} //bottom
		if (j - 1 < 0 || grid[i][j - 1] === 0) {
			count++;
		} //left
		if (j + 1 >= grid[i].length || grid[i][j + 1] === 0) {
			count++;
		} //right
		return count;
	}
	return perimeter;
};

console.log(islandPerimeter([ [ 0, 1, 0, 0 ], [ 1, 1, 1, 0 ], [ 0, 1, 0, 0 ], [ 1, 1, 0, 0 ] ]));
