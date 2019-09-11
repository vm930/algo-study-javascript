/*
Rotate Image

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).
Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

var rotate = function(matrix) {
	//make a swap helper function
	function swap(matrix, i, j, k, m, n) {}
	//define top and bottom
	let top = 0;
	let bottom = matrix.length - 1;

	while (top < bottom) {
		const length = top - bottom;
		for (let i = 0; i < length; i++) {
			swap(matrix);
			swap(matrix);
			swap(matrix);
		}
		top++;
		bottom--;
	}
};
