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
	let last = matrix.length - 1;
	let numOfRings = Math.floor(matrix.length / 2);

	function swap(x1, y1, x2, y2) {
		let temp = matrix[x1][y1];
		matrix[x1][y1] = matrix[x2][y2];
		matrix[x2][y2] = temp;
	}

	for (let i = 0; i < numOfRings; i++) {
		for (let j = 0; j < last - i; j++) {
			swap(i, i + j, i + j, last);
			swap(i, i + j, last, last - j);
			swap(i, i + j, last - j, i);
		}
		last--;
	}
	// console.log(matrix);
	return matrix;
};

console.log(rotate([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
console.log(rotate([ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]));
