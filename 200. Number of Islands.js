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
	for (let i = 0; i < grid[0].length; i++) {
		let copy = [];
		for (let j = 0; j < grid.length; j++) {
			copy[i].push(0);
		}
	}
	console.log(copy);
	//use a variable to keep track of counts

	//let i = 0; j=0
	//top  grid[i-1][j]
	//left  grid[i+1][j-1]
	//right  grid[i+1][j+1]
	//bottom  grid[i+1][j]
};
console.log(
	numIslands([ [ 0, 1, 0, 1, 0 ], [ 0, 0, 1, 1, 1 ], [ 1, 0, 0, 1, 0 ], [ 0, 1, 1, 0, 0 ], [ 1, 0, 1, 0, 1 ] ])
);
